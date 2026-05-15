import './nav.css'

export default function Nav( { setpage }){
  
  function gotoSignin(){
    setpage('signin');
  }
   function goToHome() {
    setpage('home');
  }
   function gotosignup() {
    setpage('signup');
  }
  function gotoabout(){
    setpage('about')
  }
    return(
      <div style={{fontFamily:"playpen"}}>
       <nav className="navbar navbar-expand-lg " style={{backgroundColor:"#e9d5ff97", opacity:"0.3px"}}>
  <div className="container-fluid">
    <h2 className="navbar-brand" href="#">BOOKS</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" href="#"  onClick={goToHome}>Home</button>
        </li>
        <li className="nav-item">
          <button  className="nav-link" href="#">Shop</button>
        </li>
                <li className="nav-item">
          <button  className="nav-link" href="#" onClick={gotoabout}>About</button>
        </li>

        <li className="nav-item">
          <button  className="nav-link" href="#" onClick={gotoSignin}>Sign in</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={gotosignup} >Sign up</button>
        </li>
      </ul>
    </div>
  </div>
 
</nav>
</div>
    )
}