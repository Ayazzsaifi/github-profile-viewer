import { useState } from 'react'
import SearchBar from './SearchBar'
import ProfileCard from './ProfileCard'

import './App.css'

function App() {
  const [user,setUser]=useState(null);

  async function getData(username){
    const response= await fetch(`https://api.github.com/users/${username}`)

    const data = await response.json()
    setUser(data)
  }
  return( <div>
    <SearchBar onSearch={getData} />
    {user && <ProfileCard user={user}/>}

    </div>
  )
}
export default App
