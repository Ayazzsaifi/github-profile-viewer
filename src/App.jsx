import { useState } from 'react'
import ProfileCard from './ProfileCard'
import SearchBar from './SearchBar'

function App() {
    const [user, setUser] = useState(null)

    async function getData(username){
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data= await response.json();
      setUser(data)
    }



  return (
  <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center pt-16">
    <h1 className="text-4xl font-bold mb-8">GitHub Profile Viewer</h1>
    <SearchBar onSearch={getData} />
    {user && <ProfileCard user={user} />}
  </div>
)
}

export default App
