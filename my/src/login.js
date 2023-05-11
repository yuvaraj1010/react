import gowtham from "./img/img.22.jpg"
import'./log.css'
export default function Login(){
const[username,setuserName]=("");
const handler = e =>
(
    setuserName(e.target.value)
)

    return(
        
        <div style={{position:"relative",}} >
            <div   className="kk" ><center><img style={{width:"650px",height:"440px", top:"-60px",position:"relative",marginright:"100px" ,borderRadius:"39px"}} src={gowtham}></img></center></div>
            <div className="form" style={{ position:"absolute",marginLeft:"595px",marginTop:"-400px", fontSize:"15px",}}>
            <form><br></br><br></br>
            <input for="text" placeholder="username"  value={username}id="vu"  onChange={handler}></input><br></br><br></br>
            
           
            <input for="password" placeholder=" password" className="form-control" id="vu"></input><br></br><br></br>
            
            <button type="submit" className="btn btn-primary" id="uv" style={{width:"60px" , height:"30px" ,paddingleft:"-50px",color:"white"}}>login</button>
 
           
</form>
        </div>
</div>
    )
    }