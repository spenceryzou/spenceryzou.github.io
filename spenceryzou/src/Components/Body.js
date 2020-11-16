import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Works from './Works'
import Photos from './Photos'
import Fun from './Fun'
import Contact from './Contact'

export class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab
        if(activeTab === 1)
            return <Home/>
        else if(activeTab === 2)
            return <About/>
        else if(activeTab === 3)
            return <Works/>
        else if(activeTab === 4)
            return <Photos functions={this.props.functions}/>
        else if(activeTab === 5)
            return <Fun/>
        else
            return <Contact/>
    }
    render() {
        return (this.displayContent());
    }
}
export default Body
