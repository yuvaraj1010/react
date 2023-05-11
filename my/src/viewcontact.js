import axios from "axios";
import { useEffect,useState } from "react";
    
import { API } from "./api";

export default function Viewcontact(){
    const[firstname, setFirstname]=useState([]);

    useEffect(() => {
        axios.get(API).then((data) => {
            setFirstname(data.data);
           
        })
    },[])

    const del=(a) =>{
       
        axios.delete(`${API}/${a}`).then(() => {
            axios.get(API).then((data) =>{
                setFirstname(data.data);
               
            })
        })
    }

    return(<div>
           <table>
                {
          firstname.map((data)=>(
            <tr>
            <td>{data.firstname}</td>
            <td>{data.lastname}</td>
            <td>{data.phone}</td>
            <td><button onClick={() => del(data.id)}>del</button></td>
            </tr>
         ))
                }
            </table>

    </div>
        
    )
}