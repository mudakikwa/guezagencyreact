import React from 'react'
import Home from '../../components/home'
import Strategy from "../../components/strategy/index"

export default function Main() {
    return (
        <div id="home-page">
            <div className="home-page">
                <Home />
            </div>
            <Strategy />
        </div>
    )
}
