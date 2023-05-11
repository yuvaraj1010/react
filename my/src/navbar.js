
import { Link } from 'react-router-dom';


export default function Navbar() {
    return(

        <div>
            <h1>yuvaraj</h1>
            <li>
                <Link to="/home"></Link>
            </li>
            <li>
                <Link to="/about"></Link>
            </li>
            <li>
                <Link to="/contact"></Link>
            </li>
            
        </div>

    );
}
 