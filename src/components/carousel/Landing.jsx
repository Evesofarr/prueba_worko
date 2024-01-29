import mug from "../../images/Mug1.png";
import "./Landing.scss";
import "react-slideshow-image/dist/styles.css";

export default function Landing() {

    return (
        <>
            <div className="container">
                <section className="landing">
                    <div className="first-word">
                        <p>LOREM</p>
                    </div>
                    <div className="second-word">
                        <p >IPSUM</p>
                    </div>
                    <div className="third-word">
                        <p>DOLOR</p>
                    </div>
                    <img className="mug" src={mug} alt="Pink mug" />
                </section>
            </div>
        </>
    );
}