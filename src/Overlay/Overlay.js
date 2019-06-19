import React, { Component } from 'react'
import TitleBar from './TitleBar/TitleBar'

import './Overlay.scss'

export default class Overlay extends Component {
    render() {
        return (
            <div className="overlay">
                { /* overlay components go here */ }
                <TitleBar/>
            </div>
        )
    }
}
