import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export function Login(params: { setSubmit: (value: boolean) => void }) {
    const { setSubmit } = params;
   const [userId, setUserId] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   const handleSubmit = () => {
    if(userId.length > 0 && password.length > 0) { 
        setSubmit(true);
        navigate('./home');
    }
   }

    return <>
    <h1>Login</h1>
    <p>User Id</p>
    <input className="input" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
    <p>Password</p>
    <input className="input" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
    <button className="button" type="button" onClick={handleSubmit}>Submit</button>
    </>
}