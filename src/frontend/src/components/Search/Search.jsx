import "./Search.css"
import magnifier from "../../assets/magnifier.svg"

function Search(){
    return(
        <div className="search">
            <input 
            placeholder="Search for Key-Words"
            src={magnifier}
            />   
            <img src={magnifier}/>    
        </div>
    )
}

export default Search