

function ProfileCard(props) {

    return (
        <div className="card">
            <img className="avatar" src= {props.user.avatar_url} alt="" />
            <p>{props.user.name}</p>
<p>{props.user.bio}</p>
<p>Followers: {props.user.followers}</p>
<p>Repos: {props.user.public_repos}</p>
        </div>
    )
}

export default ProfileCard