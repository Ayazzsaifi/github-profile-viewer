import { useState } from "react";



function SearchBar(props) {
    const [userName, setuserName] = useState("")
    return (
        <div className="flex gap-3 mb-8">
            <input
                type="text"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none w-72"
                onChange={(e) => setuserName(e.target.value)}
                value={userName}
                placeholder="Enter GitHub username"
            />
            <button
                className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg"
                onClick={() => props.onSearch(userName)}
            >
                Search
            </button>
        </div>
    )
}

export default SearchBar