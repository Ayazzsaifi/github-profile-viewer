import { useState } from "react";

function ProfileCard(props) {
    return (
        <div className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-2xl p-8 w-80">
            <img className="w-32 h-32 rounded-full mb-4" src={props.user.avatar_url} alt="" />
            <h2 className="text-xl font-bold mb-1">{props.user.name}</h2>
            <p className="text-gray-400 text-sm mb-4 text-center">{props.user.bio}</p>
            <div className="flex gap-6 text-sm">
                <span className="text-gray-300">Followers: <span className="text-white font-bold">{props.user.followers}</span></span>
                <span className="text-gray-300">Repos: <span className="text-white font-bold">{props.user.public_repos}</span></span>
            </div>
        </div>
    )
}
export default ProfileCard