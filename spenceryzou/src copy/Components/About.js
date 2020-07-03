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
                        Hi there, I'm Spencer! I'm a second year UC Santa Barbara Computer Science student from the Bay Area.
                        I'm interested in Human-Computer Interaction, particularly developing media, interfaces, and graphics that serve
                        to change a user's perception and intuition through design cues. I'm currently searching for
                        internships for Summer 2020! If you or someone you know is interested, check out this fancy sheet of paper: <a style={{fontStyle: "italic"}} target="_blank" href="https://drive.google.com/file/d/1V1SHdTf_qteaFM_QpfKCznRibd8RXEsu/view?usp=sharing">résumé</a>
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
