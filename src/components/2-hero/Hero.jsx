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
                    <a href="https://www.instagram.com/ans_hesein/" target="_blank" className="icon icon-instagram"></a>
                    <a href="https://www.facebook.com/anas.hessen.2025" target="_blank" className="icon icon-facebook-square"></a>
                    <a href="https://www.linkedin.com/in/anas-hessin/" target="_blank" className="icon icon-linkedin-square"></a>
                    <a href="https://github.com/Anas-hessein/" target="_blank" className="icon icon-github"></a>
                </div>
            </div>

            <div className="right-section animation">
                <Lottie style={{ height: 255 }} animationData={dev} />
            </div>
        </section>
    );
}

export default Hero;
