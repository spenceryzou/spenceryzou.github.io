import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div class="content" style={{marginTop: '1vw'}}>
                <div class="about-content-body">                    
                    <div id="aboutImg" class="content-body-image about-image">
                        <img src={process.env.PUBLIC_URL + "/images/lobster3.png"}></img>
                    </div>         
                    <div class="content-body-text about-text">            
                        <div class="content-title" style={{color:"#ea5e76"}}>
                            About Me  
                        </div>
                        Hi there, I'm Spencer! I'm a third year UCSB Computer Science student from the Bay Area.
                        Currently, I work at PoolUp, a long distance peer-to-peer rideshare marketplace for California college students. At school, I lead web development and organize logistics for SB Creative Lab, a design organization that provides opportunities and resources for UCSB students to learn about both technological and traditional design disciplines, as well as grow their creativity!
                        <br></br><br></br>
                        I'm currently searching for internships! If you or someone you know is interested, check out this fancy sheet of paper: <a style={{fontStyle: "italic"}} target="_blank" href="https://drive.google.com/file/d/1j9YH19g7S6N-tp0mATPTrjx5Bs2IhJPM/view?usp=sharing">résumé</a>
                        <br></br><br></br>
                        In my free time, I like to read fashion blogs, play soccer (big Manchester City fan), drink boba, and sing!

                        {/*I'm a UCSB second year pursuing Computer Science. 
                        I'm interested in roles such as UI/UX Engineering, Web Development, Software Development, 
                        or anywhere that I can be involved in creating a product! { 
                        <br></br><br></br>
                        In my free time, I like to read fashion blogs, play soccer, drink boba, and sing! */}
                    </div>        

                </div>
            </div>
        )
    }
}
