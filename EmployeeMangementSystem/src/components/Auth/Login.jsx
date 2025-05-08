import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const submithandler = (e)=>{
        e.preventDefault()  
        const loginHandler = props.loginHandler;
        loginHandler(email,passwd);
        console.log("Form submitted")

        setEmail('')
        setPasswd('')   
    }
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
        <Card className="w-full max-w-md shadow-xl rounded-2xl p-6 ">
            <h2 className="text-2xl font-bold text-center text-black-800 mb-6">Welcome Back</h2>
            <CardContent className="space-y-4">
            <form onSubmit={(e) => {
                submithandler(e)
            }} className="w-full text-zinc-900">
                <input type="email" placeholder="Email" className="w-full mb-4 p-3 border-1 rounded-xl text-zinc-900" value={email} onChange = {(e) => {
                    setEmail(e.target.value)
                }}/>
                <input type="password" placeholder="Password" className="w-full mb-4 p-3 border-1 rounded-xl text-zinc-900" value={passwd} onChange = {(e) => {
                    setPasswd(e.target.value)
                }}/>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">Login</Button>
            </form>
            <div className="flex items-center gap-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="text-gray-500 text-sm">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <FcGoogle className="text-xl" />
                Sign in with Google
            </Button>
            </CardContent>
        </Card>
    </div>
  );
};

export default Login;
