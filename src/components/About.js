import React from "react";
// import UserClass from "./UserClass"
// import userContext from "../utils/userContext";
import Aboutimg from '../utils/about.jpeg';

class About extends React.Component {
    constructor(props) {
        super(props);
        //console.log("parent constructor")
    }

    componentDidMount() {
        //console.log("parent componentDidMount");
    }

    render() {
        //console.log("parent render");
        return (
            <div 
            className="min-h-screen flex items-center justify-center  sm:px-6 lg:px-8" 
            style={{ backgroundImage: `url(${Aboutimg})` }}
          >
            <div className="max-w-4xl w-full space-y-8 p-10 bg-white bg-opacity-80 rounded-xl shadow-lg">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 text-green-600">About Foodie</h2>
                <p className="mt-2 text-lg text-gray-600">
                  At Foodie, we believe the best dishes are the ones that remind you of childhood. A portion of great food should make you feel like you are wrapped in a warm foodie.
                </p>
              </div>
              <div className="text-center">
                <p className="mt-4 text-lg text-gray-700">
                  At our location in Boston or online, you will find the best dishes you didn't know you craved: extra-creamy mac and cheese, hot chicken casserole, fried dumplings like your mama makes, and many more.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  Forget about the daily stress and come relax with us. After tasting any of our menu items, you will never want to leave!
                </p>
              </div>
            </div>
          </div>
// __________________________________________________________________________________________
        //     <div>
        //     <h1>About Section</h1>
        //     <div>
        //         User : 
        //         <userContext.Consumer>
        //             {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1> }
        //         </userContext.Consumer>
        //     </div>
        //     <UserClass name={"first"} location={'Ashvi'}/>
        // </div>
        
        );
    }
}

export default About;