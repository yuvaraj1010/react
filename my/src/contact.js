import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaUser } from 'react-icons/fa'
import { API } from "./api";
import axios from "axios";

export default function Contact(){

  const [firstname, setFirstname]=useState('');
  const [lastname, setlastname]=useState('');
  const [phone,setphone]=useState('');

  const handlesubmit=async(event)=>{
    event.preventDefalt();
// navi('/)
    await axios.post(API,{
        firstname,lastname,phone
    }).then
    setFirstname("");
    setlastname("");
    setphone("")
  }


    return(
        <div>
            <div>
                <form onSubmit={handlesubmit}>
                    <FaUser></FaUser>
                    <input type="text" value={firstname} onChange={(e)=> setFirstname(e.target.value)} placeholder="firstname" /><br></br>

                    <FaUser></FaUser>
                    <input type="text" value={lastname} onChange={(e)=> setlastname(e.target.value)} placeholder="lastname" /><br></br>

                    <input type="text" value={phone} onChange={(e)=>setphone(e.target.value)} placeholder="number"/><br></br>

                    <button className="btn-danger" >save</button>

                   

                </form>
            </div>

        </div>
    )
}