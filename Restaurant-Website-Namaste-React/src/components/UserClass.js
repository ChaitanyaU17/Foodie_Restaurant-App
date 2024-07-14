import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "khichdi",
                location: "Nashik",
            },
        };
        //console.log("child constructor")
    }
   

   async componentDidMount() {
        //console.log("child componetDidMount");

        const data = await fetch("https://api.github.com/users/ChaitanyaU17");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate() {
        console.log('component did update');
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    render() {
        //console.log("child render");

        const{name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @chaitanyaU17</h4>
            </div> 
        );
    }
}

export default UserClass;