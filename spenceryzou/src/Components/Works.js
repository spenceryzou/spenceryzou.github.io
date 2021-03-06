import React, { Component } from 'react'

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            // Not possible to set it back to false like this:
            setVisible(true);
            // No need to keep observing:
            observer.unobserve(domRef.current);
          }
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
}

export default class Works extends Component {
    render() {
        return (
            <div class="content">
                <div class="content-body">
                    <div class="content-body-text works-text">
                        <div class="content-title">
                            <a href="https://spotifynd-friends.herokuapp.com/">Spotifynd Friends</a>
                        </div>
                        Tech Stack: React, Next.js, Firebase<br></br>
                        Spotifynd Friends is a web app that utilizes the Spotify Web API to
                        analyze and generate compatibility ratings between user's playlists using track
                        audio features.
                        Using this web app, users can find others who have similar music tastes! <a href={process.env.PUBLIC_URL + "/Documentation.pdf"} target="_blank">Documentation</a><br></br>
                    </div>
                    <FadeInSection>
                    <div class="photo content-body-image">
                        <a href="https://spotifynd-friends.herokuapp.com/">
                            <img id="card" src={process.env.PUBLIC_URL + "/images/project.png"}></img>
                        </a>
                    </div>
                    </FadeInSection>
                <div class="content-body-text works-text">
                        <div class="content-title">
                            <a href="https://sbcreativelab.com/">SB Creative Lab</a>
                        </div>Tech Stack: React, HTML/CSS, Javascript<br></br>
                        Cofounder and Lead Web Developer for an educational design organization that fosters opportunity and growth for UCSB multidisciplinary design students. Website features micro-interactions with parallax.js, tilt.js, and fullpage.js.
                    </div>
                    <FadeInSection>
                    <div class="photo content-body-image">
                        <a href="https://sbcreativelab.com/">
                            <img id="cardSBCL" src={process.env.PUBLIC_URL + "/images/homepage.png"}></img>
                        </a>
                    </div>
                    </FadeInSection>
                    <div class="content-body-text works-text">
                        <div class="content-title">
                            <a href="https://designatucsb.com/">Design at UCSB</a>
                        </div>
                        Previously Director of Web Development for UC Santa Barbara’s premier student-run design agency, hosting design challenges, workshops, and collaborations with industry partners.
                    </div>
                    <FadeInSection>
                    <div class="photo content-body-image">
                        <a href="https://designatucsb.com/">
                            <img id="card" src={process.env.PUBLIC_URL + "/images/macbook.png"}></img>
                        </a>
                    </div>
                    </FadeInSection>
                    <div class="content-body-text works-text">
                        <div class="content-title">
                            <a href="https://xd.adobe.com/view/f4d3444e-e071-4d75-8296-46aaa47b389e-a180/?fullscreen">Flix-In</a>
                        </div>
                        High fidelity prototype of a web-based platform offering a community of Netflix enthusiasts to watch, discuss, and review shows and movies together.
                        Created in a team using Adobe XD as part of the College + Netflix Adobe Creative Jam LIVE.
                    </div>
                    <FadeInSection>
                    <div class="photo content-body-image">
                        <a href="https://xd.adobe.com/view/f4d3444e-e071-4d75-8296-46aaa47b389e-a180/?fullscreen">
                            <img id="card" src={process.env.PUBLIC_URL + "/images/flixin.png"}></img>
                        </a>
                    </div>
                    </FadeInSection>
                </div>
                <div className="footer">
                </div>
            </div>
        )
    }
}
