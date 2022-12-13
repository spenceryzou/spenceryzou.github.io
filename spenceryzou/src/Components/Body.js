import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Works from './Works'

export class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab
        if(activeTab === 1)
            return <Home/>
        else if(activeTab === 2)
            return <About/>
        else if(activeTab === 3)
            return <Works/>
    }
    render() {
        return (this.displayContent());
    }
}
export default Body
