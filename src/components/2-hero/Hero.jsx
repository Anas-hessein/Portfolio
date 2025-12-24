import "./hero.css";
import Lottie from "lottie-react";
import dev from "../../../public/skill.json";


function Hero() {


    return (
        <section id="hero" className="hero flx">
            <div className="left-section">
                <div className="p-ava flx">
                    <img src="./mee-modified.png" alt="" className="ava" />
                    <div className="icon-verified"></div>
                </div>

                <h1 className="title"> Software Designer |  Web Developer | Game Developer </h1>
                <p className="sub-title">STEM High Schooler, Grade 11 Student, a little bit missy, Jack of all Trades, Web developer with intrest in physics and engnerinng. </p>

                <div className="al-icons flx">
                    <div className="icon icon-instagram"><a href="https://www.instagram.com/ans_hesein/"></a></div>
                    <div className="icon icon-facebook-square"><a href="https://www.facebook.com/anas.hessen.2025"></a></div>
                    <div className="icon icon-linkedin-square"><a href="https://www.linkedin.com/in/anas-hessin/"></a></div>
                    <div className="icon icon-github"><a href="https://github.com/Anas-hessein/"></a></div>
                </div>
            </div>

            <div className="right-section animation">
                <Lottie style={{ height: 255 }} animationData={dev} />
            </div>
        </section>
    );
}

export default Hero;
