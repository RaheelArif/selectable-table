import React, { Component } from "react";
import "./css.css"
import image from "../../Capture.PNG"

let lastScrollY = 0;
let ticking = false;

class Image extends Component {

    constructor(props) {
        super(props)
        this.state = {
            class1: "commonclass",
            class2: "commonclass",
            class3: "commonclass",
            class4: "commonclass",
            class5: "commonclass",
            //   class6 : "textme", 
            class7: "commonclass",
            class8: "commonclass",
            class9: "commonclass",

            //   class8 : "textme2",


        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    // nav = React.createRef();
    handleScroll = () => {

        let scrool = this.refs.imagei.getBoundingClientRect().top
        console.log(scrool)
        if (scrool < 200) {
            this.setState({
                class1: "line1",
                class2: "textme",
                class3: "line3",
        
                class4: "textme2",
                class5: "line4",
                //   class6 : "textme", 
                class7: "line5",
            class8: "milldleline",
            class9: "milldlediv",

            })
        }
    };

    render() {
        return (
            <div >
                <div style={{ width: "100%", height: "4000px" }}></div>
                <div ref={this.nav} className="maindiv" >
                    <div className="parent">
                    <div className={this.state.class1}></div>
                    <div className={this.state.class2}>
               duffare ani dya mzak aa ye
                         </div>
                    <div className={this.state.class3}></div>
                    <div className={this.state.class4} >
                    duffare ani dya mzak aa ye
                
                   
                        </div>
                    <div className={this.state.class5}></div>
                    <div  className={this.state.class8}></div>
                    <div  className={this.state.class9}></div>
                    <div className={this.state.class2} id="some" style={{ position: "absolute", left: "57.68%" }}>
                    duffare ani dya mzak aa ye dfsa

                    </div>
                    <div className={this.state.class7}></div>
                    <div className={this.state.class4 } style={{ position: "absolute", left: "69.52%" }}>
                    duffare ani dya mzak aa ye
                   
                        </div>
                        </div>
                    <nav ref="imagei" style={{ height: "50px", backgroundColor: "green" }}>
                    </nav>
                    <img className="image"
                        src={image}
                        alt="some issue" />

                </div>
            </div>
        )
    }
}
export default Image;