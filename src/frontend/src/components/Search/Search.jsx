import "./Search.css"
import magnifier from "../../assets/magnifier.svg"

function Search(){
    return(
        <div className="search">
            <input 
            placeholder="Search for Key-Words"
            src={magnifier}
            />   
            <div className="div-lupa">
            <img src={magnifier}/> 
            </div>
        </div>
    )
}

export default Search