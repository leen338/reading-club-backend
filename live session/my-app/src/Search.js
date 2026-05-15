import { useState } from "react";
import vector from './images/Vector (4).png';
import './header.css'
export default function Search(){
    const [searchvalue,setsearchvalue]=useState("");
 function change(event){
    setsearchvalue(event.target.value);

 }

    return(
     <div>
        <form  >
            <img src={vector} alt="search" style={{marginRight:"10px",opacity:'0'}} className="move"/>
        <input  type="text" className="search move text2" name="search" value={searchvalue} onChange={change} placeholder="search for books" style={{height:"35px",padding:"10px",opacity:'0'}}/>
        </form>
     </div>
    )
}