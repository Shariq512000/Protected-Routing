

function Profile(){

    let user = localStorage.getItem("name");
    return(
        <div>
            <h1>
                This is Profile Page
                <br />
                {user}
            </h1>
        </div>
    )
}
export default Profile;