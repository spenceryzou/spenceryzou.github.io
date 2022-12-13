import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div class="content" style={{marginTop: '1vw'}}>
                <div class="content-body home-content-body">         
                    <div class="content-body-text">            
                        <div class="content-title" style={{color:"#ea5e76",lineHeight:".8em"}}>
                            Hello!  
                        </div>
                        <div class="namedrop" style={{fontSize:'64px', fontWeight: 'bold', lineHeight:"1.5em"}}>
                        I'm Spencer. 
                        </div>
                        I'm a UCSB Computer Science graduate, previously a SWE at Meta.
                        I'm interested in roles such as Software Engineering, UI/UX Engineering, Web Development, 
                        or anywhere that I can be involved in creating a product! {/* 
                        <br></br><br></br>
                        In my free time, I like to read fashion blogs, play soccer, drink boba, and sing! */}
                        <div style={{marginTop: "1rem"}} className="inline-block-center">
                            <ul class="links">
                                <li class="link"><a href="https://www.instagram.com/zojisushi/"><i class="fa fa-lg fa-instagram"></i></a></li>
                                <li class="link"><a href="https://www.linkedin.com/in/spencerzou/"><i class="fa fa-lg fa-linkedin-square"></i></a></li>
                                <li class="link"><a href="https://github.com/spenceryzou"><i class="fa fa-lg fa-github"></i></a></li>
                            </ul>
                        </div>
                    </div>        
                    <div class="content-body-image">
                        <img src={process.env.PUBLIC_URL + '/images/cutoutblurcompress.jpg' }></img>
                    </div>
                </div>
            </div>
        )
    }
}
