import{useState} from'react';
import'./log.css'
export default function Yuvarajj(){
    const [result,setName] = useState("");

    const back = () => {
        setName(result. slice(0,-1));}
        const click=(a)=> {
            setName(result.concat(a.target.name))
        }
        const clear=()=>{
            setName("");}
        const equal =()=>{
            setName(eval(result))
        }

    
    return(

        // <div>
        //    <p>{Name2}</p>
        //     <button type="button" onClick={yuva1 } style={{width:"70px",height:"70px",borderBlockColor:"red"}}>
        //        +
        //     </button>
      <div>

        <div   className='con'>
        <table style={{ borderRadius:"20px",backgroundColor:"black",  width:"210px",height:"300px"}} >
            <tr>
              <td colSpan={4}>  <input style={{width:"193px",height:"50px"}} type="text" id="display" value={result}></input>
              </td> </tr>
            <tr >
        <td><button onClick={clear} id="clear">Clr</button></td>
        <td><button onClick={back} >C</button></td>
        <td><button name="%"onClick={click}>%</button></td>
        <td><button name="/"onClick={click}>/</button></td>
        </tr>
        <tr>
        <td><button name="1"onClick={click}>1</button></td>
        <td><button name="2"onClick={click}>2</button></td>
        <td><button name="3"onClick={click}>3</button></td>
        <td><button name="4"onClick={click}>4</button></td>
        </tr>
        <tr>
        <td><button name="5"onClick={click}>5</button></td>
        <td><button name="6"onClick={click}>6</button></td>
        <td><button name="7"onClick={click}>7</button></td>
        <td><button name="8"onClick={click}>8</button></td>
        </tr>
        <tr>
        <td><button name="9"onClick={click}>9</button></td>
        <td><button name="0"onClick={click}>0</button></td>
        <td><button name="="onClick={equal}>=</button></td>
        <td><button name="+"onClick={click}>+</button></td>
        </tr>
        <tr>
        <td><button name="-"onClick={click}>-</button></td>
        <td><button name="*"onClick={click}>*</button></td>
        <td><button name="00"onClick={click}>00</button></td>
        <td><button name="."onClick={click}>.</button></td>
        {/* <td><button name="^"onClick={click}>^</button></td> */}
        </tr>
        


   

        </table>
</div>
  </div>  )
}

