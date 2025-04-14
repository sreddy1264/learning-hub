pipeline {
    agent {
        label DEFAULT_AWS_LINUX_AGENT
    }

    triggers {
        cron('0 13 * * 1-5')
    }

    parameters {
        choice(
            choices: ['NO', 'YES'],
            description: 'Do you want to run automation?',
            name: 'Parameter'
        )
    }

    options {
        timeout(time: 120, unit: 'MINUTES')
    }

    environment {
        CI = 'true'
        staticContentRepo = 'apache-apps-local'
    }

    stages {
        stage('Preconfig Setup') {
            stage('Preconfig Setup') {
                when {
                    wquals actual: allowStatgePrexonfig, expected: true
                }
                steps {
                    script {
                        config = pipelineSetup()
                        env.nodeBuilder = env.nodeBuilderBeta
                        checkForTrigger()
                    }
                }
            }

            stage('Branch name validation') {
                when {
                    allOf {
                        equals actual: allowStageBranchValidation, expected: true
                        expression {
                            params.Parameter = 'NO'
                        }
                        not {environment name: 'TRIGGERED_BY', value: 'timer'}
                    }
                }
                steps {
                    script {
                        try {
                            rootDir = pwd()
                            scriptForBranchValidation = load "${rootDir}/jenkins/validateBranchname.groovy"
                            println 'branch name validation script loaded !!!'

                            sh "ls -a"
                            scriptForBranchValidation.validateBranchname(branchNameTriggeringPipeline, signatureUMAJiraBoardKeys)
                        } catch (Exception exc) {
                            println 'branch name validation exception !!!'
                            pipelineLogger.info(exc.getMessage())
                            throw exc
                         }
                        }
                    }
                }
        }

                stage('Install dependencies') {
                    when {
                        equals actual: allowStageInstallDep, expected: true
                    }
                    steps {
                        script {
                            runYarn('run i-jenkins')
                        }
                    }
                }

                stage('Automation') {
                    when {
                        anyOf {
                            environment name: 'TRIGGERED BY', value: 'timer'
                            expression {
                                params.Parameter = 'YES'
                            }
                        }
                        allOf {
                            expression { env.BRANCH_NAME == 'develop'}
                        }
                    }
                    steps {
                        try {
                            runAutomation()
                            allowStageAutomation = true
                        }
                        catch(Exception exc) {
                            println 'automation failed'
                        }
                    }
                }

                stage('Lint & Build') {
                    parallel {
                        stage('Lint') {
                            when {
                                allOf {
                                    equals actual: allowStageLint, expected: true
                                    expression {
                                        params.Parameter = 'No'
                                    }
                                    not {environment name: 'TRIGGERED_BY', value: 'timer'}
                                }
                            }
                        }
                        steps {
                            script {
                                runYarn('run lint-check')
                            }
                        }
                    }

                    stage('Build') {
                        when {
                            allOf {
                                equals actual: allowStageBuild, expected: true
                                expression {
                                    params.Parameter = 'NO'
                                }
                                not {environment name: 'TRIGGERED_BY', value: 'timer'}
                            }
                        }
                        steps {
                            script {
                                runNpmInCustomNode('run build', customParametersForNpmEnvironment)
                            }
                        }
                    }
                }

                stage('Upload') {
                    parallel {
                        stage('Upload apps') {
                            when {
                                allOf {
                                    equals actual: allowStageUpload, expected: true
                                    expression {
                                        params.Parameter == 'NO'
                                    }
                                    not {environment name: 'TRIGGERED_BY', value: 'timer'}
                                }
                            }
                        }
                    }
                    steps {
                        script {
                            try {
                                optionalReleaseFlag = isBranchRelease ? " -- -- --release" : ""
                                runNpmInCustomNode("run generate-artifact-apache-apps${optionalReleaseFlag}", customParametersForNpmEnviromnent)

                                rootDir = pwd()
                                scriptForUpload = load "${rootDir}/jenkins/runUploadStaticContentToArtifactory.groovy"
                                println 'upload script loaded !!!'

                                sh "ls -a"

                                dir('apache') {
                                    sh "ls -a"

                                    def dirNameString = sh(script: 'ls -d */', , returnStdout: true).trim()
                                    def dirNameList = dirNameString.tokenize('/\n')

                                    for(dirName in dirNameList) {
                                        pipelineLogger.info("Dir:: ${dirName}")
                                        metaJson = readJSON file: "./${dirName}/meta.json"
                                        println metaJson
                                        println 'Upload start'
                                        scriptForUpload.runUploadStaticContentToArtifactory(metaJson)
                                        println 'Upload successfully !!!'
                                    }
                                }
                            } catch (Exception exc) {
                                println 'upload failed !!!'
                                pipelineLogger.info(exc.getMessage())
                                throw exc
                            }
                                    }
                                }
                            }
                            stage('upload automation results') {
                                when {
                                    anyOf {
                                        environment name: 'TRIGGERED_BY', value: 'timer'
                                        expression {
                                            params.Parameter == 'YES'
                                        }
                                    }
                                    allOf {
                                        expression { env.BRANCH == 'develop' }
                                    }
                                }
                                steps {
                                    script {
                                        try {
                                            runNpmInCustomNode("run generate-artifact-apache-automation", customParametersForEnviroment)

                                            rootDir = pwd()
                                            scriptForUpload = load "${rootDir}/jenkins/runUploadStaticContentToArtifactory.groovy"
                                            println 'upload script loaded !!!'

                                            sh "ls -a"

                                            def ('apache') {
                                                sh "ls -a"

                                                def dirNameString = sh(script: 'ls -d */', , returnStdout: true).trim()
                                                def dirNameList = dirNameString.tokenize('/\n')

                                                for(dirName in dirNameList) {
                                                    pipelineLogger.info("Dir:: ${dirName}")
                                                    metajson = readJSON file: "./${dirName}/meta.json"
                                                    println metaJson
                                                    println 'Upload start'
                                                    scriptForUpload.runUploadStaticContentToArtifactory(metaJson)
                                                    println 'Upload successfully !!!'
                                                }
                                            }
                                        } catch (Exception exc) {
                                            println 'Upload failed !!!'
                                            pipelineLogger.info(exc.getMessage())
                                            throw exc
                                        }
                                    }
                                }
                            }

                        }
                    }
                }
                }

                stage('Deploy & Publish') {
                    parallel {
                        stage('Deploy apps') {
                            when {
                                equals actual: allowStageDeploy, expected: true
                            }
                            steps {
                                script {
                                    try {
                                        runYarn("run generate-middleware-manifest")
                                        uploadMiddlewareManifestToArtifactory()

                                        build job: mwJenkinsBranchPath, parameters: [
                                            $class: 'StringParameterValue',
                                            name: 'manifest',
                                            value: mwArtifactorymanifestXmlPath
                                        ]
                                    } catch (Exception exc) {
                                        println 'deployment failed !!!'
                                        pipelineLogger.info(exc.getMessage())
                                    }
                                }
                            }
                        }
                    }
                }

                stage('Code quality and security checks') {
                    parallel {
                        stage('Danger CI') {
                            when {
                                allOf {
                                    equals actual: allowStageDangerCI, expected: true
                                    expression {
                                        params.Parameter == 'NO'
                                    }
                                    not {environment name: 'TRIGGERED_BY', value: 'timer'}
                                }
                            }
                            steps {
                                script {
                                    println 'Running danger ci !!!'
                                    try {
                                        withCredentials([conjurSecretCredential(credentialsId: env.JENKINS_DAP_CREDS_RO, variable: 'CONJUR_SECRET')]) {
                                            customParametersForDangerInNpmEnvironment = "-e DANGER_BITBUCKETSERVER_HOST -e DANGER_BITBUCKETSERVER_USERNAME=${env.JENKINS_DAP_CREDS_RO} -e DANGER_BITBUCKETSERVER_PASSWORD=${CONJUR_SECRET} -e CHANGE_URL -e CHANGE_ID -e JENKINS_URL";
                                            runNpmInCustomNode("run danger-ci", customParametersForDangerInNpmEnvironment)
                                            println 'danger ci success !!!'
                                        }
                                    } catch (Exception exc) {
                                        println 'danger ci failed, failing silently as non-blocker !!!'
                                        pipelineLogger.info(exc.getMessage())
                                    }
                                    }
                                }
                            }
                            stage('Veracode static scan') {
                                when {
                                    allOf {
                                        equals actual: allowStageVeracodeStaticScan, excepted: true
                                        expression {
                                            params.Parameter == 'NO'
                                        }
                                        not {environment name: 'TRIGGERED_BY', value: 'timer'}
                                    }
                                }
                                steps {
                                    script {
                                        try {
                                            runYarn('run generate-artifact-veracode')
                                            
                                            rootDir = pwd()

                                            dir('veracode') {
                                                def dirNameString = sh(script: 'ls -d */', returnStdout: true).trim()
                                                def dirNameList = dirNameString.tokenize('/\n')

                                                sh "ls -a"

                                                for(dirName in dirNameList) {
                                                    pipelineLogger.info("Dir:: ${dirName}")
                                                    metaJson = 
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                                }
                            }
                        }
                    }
                }


            }
        }
    }

}