import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Nav from './Nav';
import Textheader from './TextHeader';
import ImgHeader from './ImgHeader'
import About from './About';
import Chat from './Chat'
import Sec from './Section1';
import'./Section1.css';
import Sec2 from './Section2';
import './Section2.css';
import Book from './Books';
import './Books.css';
import Types from './Section22';
import Sec3 from './section3.js';
import './Coloring.css';
import Navi from './BookStore.js';
import "./BookStore1.css";
import Hero from './BookStore2.js';
import'./BookStore2.css';
import Sec4 from './mmm.js';
import './mainHeader.css';
import Comments from './commentsSection';
import './commentsSection.css';
function App() {
  const [page,setpage]=useState('home');
  
  return (
    <div className="App coloring">
     
     <div>
      <Nav setpage={setpage} />
      <div >
        {page === 'home' &&  <div>
          <div className="mHeader">
            <Textheader/>
            <ImgHeader/>
          </div>

      {/* <Navi /> */}
    <Hero />
     {/* <Chat></Chat> */}
     <Sec/>
     <Book/>
     <Sec2/>
     <Types />
     <Sec3/>
     <Sec4/>
     <Comments/>
  
     <div>

     </div>
     </div> 
      
     }
        {page === 'signin' && <Login   setpage={setpage} field1="email" field2="password"  namebutton="Sign in" ><h2  style={{marginBottom:"20px"}}>welcom <br></br> to your Account </h2> 
            </Login>}
        {page === 'signup' && <Login  setpage={setpage}  field1="email" field2="password" namebutton="Sign up" field3="name"> <h2 style={{marginBottom:"20px"}}>create <br></br> your account</h2></Login>}
        {page==='about'&& <About/>}
      </div>
    </div>
    
    </div>
  );
}


export default App;