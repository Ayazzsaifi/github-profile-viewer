import { useState } from "react"


function SearchBar(props){
    const[userName,setUserName]=useState("")
    return(
        <div className="search-row">
            <input className="search-input" value={userName} onChange={(e) => setUserName(e.target.value)} type="text" />
            <button className="search-btn" onClick={()=> props.onSearch(userName)}>Search</button>
        </div>
    )
}

export default SearchBar