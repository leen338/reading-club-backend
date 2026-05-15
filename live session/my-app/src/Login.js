
import undrow from './images/text-field.png'
import './Login.css'
import { useState } from "react";
import Swal from 'sweetalert2'
export default function Sign(props){

const [form,setform]=useState({[props.field1]:"",[props.field2]:"",[props.field3]:""})
function emailChange(event){
setform({...form,[props.field1]:event.target.value});
}
function passwordChange(event){
setform({...form,[props.field2]:event.target.value});
}
function nameChange(event){
    setform({...form,[props.field3]:event.target.value})
}
  async function submit(event){
event.preventDefault();
console.log(form[props.field1], form[props.field2]);

const data={  [props.field1]: form[props.field1],
              [props.field2]: form[props.field2],};
              if(props.namebutton==='Sign up'){
                data[props.field3]=form[props.field3];}

const end= props.namebutton==='Sign up'? '/api/register' : '/api/login';
       
        try {
            
            const response = await fetch(`http://localhost:3000${end}`, { 
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

               if (!response.ok) {
                Swal.fire({
                 title: "Incorrect password or email",        
                 text: result.msg,   
                 icon: 'error',        
                 confirmButtonText:'Ok',
                 confirmButtonColor: '#d33', 
                 timer: 3000  
                }) 
                return;
            }
            
                Swal.fire({
                 title: "Succes!",        
                 text:   "The operation was completed successfully",   
                 icon: 'Ok',        
                 confirmButtonText:'Ok',
                 confirmButtonColor: '#3085d6', 
                 timer: 2000  
                }) 
                .then(()=>{
               props.setpage('home');})
            

            console.log("SUCCESS:", result);

        } catch (error) {
            console.error("ERROR:", error);
        }
    }


    return(
        <div className="login">
            <div className='login-card'>
            
             {props.children}
             <img src={undrow} alt="textfield"  style={{width:"70%" ,marginBottom:"20px"}}/> 
             
               <form onSubmit={submit} >
                  
                  {props.namebutton==="Sign up" && ( <div className='forminput'> <input value={form[props.field3]}   type="text"  name={props.field3} placeholder={`enter your ${props.field3}`} onChange={nameChange} required /> </div>)}
                 
                 <div className='forminput'>
                   <input  value={form[props.field1]} type="email"  name={props.field1} placeholder={`enter your ${props.field1}`} onChange={emailChange} required/>
                 </div>

                 <div className='forminput'>
                   <input value={form[props.field2]}   type="password"  name={props.field2} placeholder={`enter your ${props.field2}`} onChange={passwordChange} required/>
                  </div>

                 <button type="submit" className="login-button">{props.namebutton}</button>

               </form>
             </div>
       </div>
    );

}
