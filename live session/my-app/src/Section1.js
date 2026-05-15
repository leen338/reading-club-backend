export default function Sec(){
    return(
      <div className="headerOfSec1">
        <div className="navOfSec1">
          <h2 className="The-Title-Of-Section">
            Select your mood :
          </h2>
          <div className="sel">
             <select className="sel2">
              <option>
                normal
              </option>
              <option>
                happy
              </option>
              <option>
                sad
              </option>
              <option>
                angry
              </option>
              {/* <option>
                normal
              </option>
              <option>
                normal
              </option>
              <option>
                normal
              </option>
              <option>
                normal
              </option> */}
             </select>
          </div>
         
        </div>
        <div>
        <a href="###" className="view">
            view all
        </a>
        </div>
      </div>
    );
}