import React from 'react'

//components
import Reel from "./reel"

//icons
import FacebookComponent from "./src/FaceboookIcon"
import TwitterComponent from "./src/TwiterIcon"
import InstagramComponent from "./src/InstagramIcon"

// Scss files
import "./index.scss"

const  Home: React.FC=()=> {
    return (
        <div>
            <div className="container-fluid" id="home-screen">
                <Reel />
                <div className="row">
                    <div className="col-md-1 social-media-icons">
                        <div></div>
                        <div className="icons">
                            <FacebookComponent />
                            <TwitterComponent />
                            <InstagramComponent />
                        </div>
                        <div></div>
                    </div>
                    <div className="col-md-5 offset-md-1 hero-text">
                        <div className="the-text">
                            <h1>Lorem Ipsum Dolor Sit
                                Amet, Consetetur </h1>
                            <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</h6>
                        </div>
                        <div className="scroll-down">
                            Scroll Down
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;