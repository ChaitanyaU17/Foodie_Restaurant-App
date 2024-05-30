import {useState} from "react"

const User = (props) => {
    const [count] = useState(0);
    return (
        <div className="user-card">
            <h1>count = {count}</h1>
        <h2>{props.name}</h2>
        <h3>Location: Ahmadnagar</h3>
        <h4>Contact: @chaitanyaU17</h4>
        </div> 
    )
}

export default User;