import { useState } from "react"


function SearchBar(props){
    const[userName,setUserName]=useState("")
    return(
        <div>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" />
            <button onClick={()=> props.onSearch(userName)}>Search</button>
        </div>
    )
}

export default SearchBar