import axios from "axios";
import { useEffect,useState } from "react";
import { Api } from "./api";
import './/view.css'
import { FaEdit, FaPhoneAlt, FaTrash, FaWhatsapp,FaPhone } from 'react-icons/fa'
export default function View(){
    

    const [name,setName]=useState([])
    useEffect(()=>{
        axios.get(Api).then((data)=>{
                setName(data.data)
                console.log(data.data);
        })
    },[] )

    const del=(a)=>{
        console.log("data deleted");
        axios.delete(`${Api}/${a}`).then(()=>{
            axios.get(Api).then((data)=>{
                setName(data.data)
                console.log(data.data);
        })
        })
    }
    

  


    return(
        <div>
            <div >
            <table >
                <tr>
                   
                    <td colSpan={(4)}  id="h">contaact numbers </td>
                    </tr>

                    <tr id="y">
                      
                        <td>Name</td>
                        <td>email</td>
                        <td>number</td>
                        <td>delete</td>
                        <td>phone</td>
                        <t>whatsapp</t>
                </tr>
                {
          name.map((dat)=>(
            <tr id="yy">
            <td id="view1">{dat.name}</td>
            <td id="view2">{dat.email}</td>
            <td id="view3">{dat.phnumber}</td>
            <td id="view4">
           <button className="button" onClick={() => del(dat.id)}><FaTrash></FaTrash></button></td>
           <td><a href={"tel:"+ (dat.phnumber)}><i  id="view"><FaPhone></FaPhone></i></a></td>
           <td><a href={"https://wa.me/"+ (dat.phnumber)}><i id="view"><FaWhatsapp></FaWhatsapp></i></a></td>

            </tr>
         ))
                }
            </table>
        </div>
        </div>
    )
}