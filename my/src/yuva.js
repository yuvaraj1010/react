import{useState} from'react';
import'./log.css'
export default function Yuva(){
    const [Name2,setName] = useState(0);

    const yuva1 = () => {
        setName(Name2 + 1);}

        const yuva2 = () => {
            setName(Name2 - 1);
    }
    return(

        <div  style={{marginTop:"-270px"}}>
        
            <a><button type="button" id='raj' onClick={yuva1 } style={{width:"70px",height:"70px",color:"blue",fontSize:"40px"}}>
               +
            </button></a>
           <h1><p>{Name2}</p></h1>
            <a ><button type="button" id="raj" onClick={yuva2}style={{width:"70px",height:"70px",color:"blue",fontSize:"40px"}}>
               -
            </button></a>

        </div>
    )
}

