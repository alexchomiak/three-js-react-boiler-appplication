import React, { Component } from 'react'
import {mountThreeJS} from './driver'
export default class Viewer extends Component {
    state = {
        threeJSMounted: false
    }

    componentDidMount() {
        //mount tour into canvas
        mountThreeJS()
        this.setState({threeJSMounted: true})
    }

    shouldComponentUpdate() {
        return !this.state.tourMounted
    }

    render() {
        return (
            <div id="viewer-container">
                <canvas id="viewer"/>
            </div>
        )
    }
}
