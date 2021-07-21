import React , {useEffect,useState} from 'react'

//helpers
import gsap from "gsap"
// import TweenLite from "gsap/all"

//components

// scss files
import "./reel.scss"

const Reel = () => {
    // gsap.registerPlugin(TweenLite);
    useEffect(() => {
        document.addEventListener("mousemove",
            function moveCircle(e) {
                gsap.fromTo("#reel", { scaleY: 0.9 }, {
                    duration: 0.3,
                    x: e.pageX - 96.75,
                    y: e.pageY - 96.75,
                    scaleY:1
                })
            })
       
    }, [])
    return (
        <div id="reel" >
            {/* {console.log(x)} */}
            <div className="rounded-circle circle-1" id="real-video">
                <video width="147" height="147" className="video-circle" muted autoPlay >
                    <source src="https://res.cloudinary.com/dbkjsfg3t/video/upload/v1626857495/guezagency/home/reel_karqm6.mp4" type="video/mp4" />
                    <source src="https://res.cloudinary.com/dbkjsfg3t/video/upload/v1626857495/guezagency/home/reel_karqm6.mp4" type="video/ogg" />
                            Your browser does not support the video tag.
                </video>
            </div>
            <div className="circle-2">
            </div>
        </div>
    )
}

export default Reel
