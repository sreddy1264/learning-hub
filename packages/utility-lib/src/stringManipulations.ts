  // Given a string, reverse each word
  // Example: 'Welcome to this Javascript Guide!' should be become 'emocleW ot siht tpircsavaJ !ediuG'

const reverseEachWord = (sentence: string) => {
  const reverseBySeperator = (word: string, seperator: string) => word.split(seperator).reverse().join(seperator);
  const reverseEntireSentence = reverseBySeperator(sentence, '');
  return reverseBySeperator(reverseEntireSentence, ' ');
}

export { reverseEachWord };