import React, { useEffect } from 'react'

//gsap helpers
import gsap from "gsap"
import scrollTrigger from "gsap/ScrollTrigger"

import "./index.scss"

const Strategy = () => {
    gsap.registerPlugin(scrollTrigger)
    useEffect(() => {
        let sections = gsap.utils.toArray(".startegy-real-img")
        gsap.to(sections,{
            yPercent: -100 * (sections.length - 1),
            ease:"none",
            scrollTrigger:{
                trigger:"#strategy",
                pin:true,
                scrub:1,
                end: () => "+=" + (window.innerWidth * 10)

            }
        })
    }, [])
    return (
        <div id="strategy">
            <div className="d-flex strategy-wrapper">
                <div className="d-flex section-title">
                    <div className="numbering">01</div>
                    <div>
                        <div className="all-strategy-items">
                            <div>
                                <div className="title">Services</div>
                                <div className="title-desc">Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                </div>
                            </div>
                            <div className="the-single-strategy d-flex">
                                <div className="numbering">01</div>
                                <div>
                                    <div className="strategy-title">Strategy</div>
                                    <div className="description">We work towards strengthening brand performance, maximising returns, whilst identifying powerful connection between brands and their audience.</div>
                                    <div className="learn-more-btn">
                                        <div className="d-flex">
                                            <div>Read More</div>
                                            <img src={process.env.PUBLIC_URL + "/images/strategy/Icon feather-arrow-right.svg"} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="other-services">
                                <div className="title-service">
                                    Jump To A service.
                                    <div className="line d-flex">
                                        <div className="line-1"></div>
                                        <div className="line-2"></div>
                                    </div>
                                </div>
                                <div className="d-flex all-strategy">
                                    <img src={process.env.PUBLIC_URL + "/images/strategy/Group -1.png"} alt="" />
                                    <img src={process.env.PUBLIC_URL + "/images/strategy/Group -2.png"} alt="" />
                                    <img src={process.env.PUBLIC_URL + "/images/strategy/Group -3.png"} alt="" />
                                    <img src={process.env.PUBLIC_URL + "/images/strategy/Group -4.png"} alt="" />
                                    <img src={process.env.PUBLIC_URL + "/images/strategy/Group -5.png"} alt="" />
                                    <img src={process.env.PUBLIC_URL + "/images/strategy/Group 26.png"} alt="" />
                                </div>

                            </div>
                        </div>
                        
                    </div>

                </div>
                <div className="left-size-content">
                    <div className="strategy-img">
                        <div className="startegy-real-img"></div>
                        <div className="startegy-real-img"></div>
                        <div className="startegy-real-img"></div>
                        <div className="lines">
                            <div className="d-flex">
                                <div className="line-1"></div>
                                <div className="line-1"></div>
                                <div className="line-1"></div>
                            </div>
                        </div>
                        <div className="strategy-number">01</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Strategy
