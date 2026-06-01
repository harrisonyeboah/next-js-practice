"use client"
import { redirect } from "next/navigation"
import {useState} from "react";


export default function OrderProduct () {
    const [input, setInput] = useState("");
    const handleSubmit = () => {
        redirect("/")
    }
    return (
        <>
        <input value={input} onChange={(e)=> setInput(e.target.value)}></input>
        <button onClick={handleSubmit}> Go to home </button>
        </>
    ) 
}