import {useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faComment, faMessage, faPaperPlane, faBookOpen, faBookmark } from '@fortawesome/free-solid-svg-icons'
import {io} from "socket.io-client"

const socket=io("http://localhost:3000");

export default function Chat(){
    const [message,setmessage]=useState("");
    const [arraymessage,setarrymessage]=useState([]);
    const [username] = useState(`User_${Math.floor(Math.random() * 1000)}`);
    const icons=[faBook, faComment, faMessage, faPaperPlane, faBookOpen, faBookmark];
    const repeatIcons=Array(47).fill(icons).flat();

    useEffect(()=>{
        socket.on("receiveMessage",(data)=>{
        setarrymessage((prev)=>[...prev,data]);
    }
    );
    return ()=>{
        socket.off("receiveMessage")};},[]
    );

    function message_Change(event){
        setmessage(event.target.value);
    }
    
    function sendMessage(event){
       event.preventDefault();
      if(message.trim()!==""){
        const messagedata={
            text:message,
            sender:username,
        };
      
      socket.emit("sendMessage",messagedata);
      setmessage("");
       
    }}

    return (
        
        <div style={{height:"100vh", display:"flex",background: "radial-gradient(circle,#eeaeca 0%, #94bbe9 100%)",backgroundSize:"cover" , flexDirection:'column',justifyContent:"space-between",fontFamily:'caveatfont'}}>
            
            <h1
      style={{
        boxShadow: "rgb(228, 229, 230) -5px 2px 5px 0px",
        backgroundColor: "#3d393934",
        color: "#3d3d3d",
        height: "8vh",
        display: "flex",
        alignItems: "center",
        paddingLeft: "22px",
      }}
    >
      Books chat<span style={{fontSize:"19px",marginLeft:"3px" ,marginTop:"7px"}}> 👥</span>
    </h1>
            <div style={{width:"100%",height:"100%",overflow:"hidden", position:"relative"}}>
            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",height:"100%",width:"100%",justifyContent:"space-around",pointerEvents:"none",padding:"20px",opacity:"1",alignContent:"space-around",position:"absolute",zIndex:"1"}}>
            {repeatIcons.map((icon,index) => (
             
                <FontAwesomeIcon 
                key={index}
                icon={icon}
                style={{margin:"25px",fontSize:"1.5rem",color:"#fff",opacity:"0.2"}}
                spin
                />
                ))}
                </div>
                
                
                {arraymessage.map((msg,index)=>(
                    <div  key={index} style={{display:"flex",justifyContent:msg.sender === username ? "flex-end":"flex-start",width:"100%" ,margin:"8px 0",zIndex:"1000"}}>
               <div style={{backgroundColor:msg.sender ===username ?"rgba(255, 255, 255, 0.9)":"rgba(61, 57, 57, 0.2)",width:"fit-Content" ,maxWidth:"70%",padding:"3px 15px",borderRadius:"15px",boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"}}>
                <h4 style={{opacity:"0.8",fontsize:"14px",fontWeight:"normal",color:msg.sender ===username ? "#7f8c8d":"#e0e0e0"}}>{msg.sender}</h4>
                 <h5 style={{color:"#575a5a"}}>{msg.text}</h5>
               </div>
               </div>

                ))}
                </div>

                
                
            
            <form onSubmit={sendMessage} style={{display:"flex",justifyContent:"center",gap:"3px"}}>
            <input name="message" placeholder=' ⌨️ Write the message here'  value={message} onChange={message_Change}style={{height:"40px",width:"95%",backgroundColor:"#413d3d34",fontSize:'21px',}} />
            <button className="iconsend" style={{border:"none",background:"none",padding:"0"}}><FontAwesomeIcon   icon={faPaperPlane} style={{fontSize:"1.5rem"}}/></button>
            </form>
        </div>
    )
}
