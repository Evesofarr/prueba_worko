import buyBtn from "../../images/buyBtn.png";
import pinkTshirt from "../../images/Tshirt1.png";
import blackTshirt from "../../images/Tshirt2.png";
import bottle from "../../images/Bottle1.png";
import "./Main.scss";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useState, useEffect } from "react";

export default function Main() {
    const [backgroundImage, setBackgroundImage] = useState(pinkTshirt);

    const changeBlack = () => {
        setBackgroundImage(blackTshirt);
    };

    const changePink = () => {
        setBackgroundImage(pinkTshirt);
    };


    return (
        <>
            <main>
                <article>
                    <p className="mainPhrase"><FiberManualRecordIcon style={{
                        color: '#fb088c', marginRight: '1rem'
                    }} />Lorem ipsum dolor sit ame amet, consectetur adipiscing elit. Etiam <strong> vulputate dui efficitur</strong> ultrices pharetra. Praesent tempor mollis purus nec fringilla vel commodo.</p>
                    <section className="tshirt-product" >
                        <div className="tshirt">
                            <div className="text-tshirt">
                                <h1>T-Shirt</h1>
                                <p>Etiam vulputate dui efficitur ultrices pharetra. Praesent tempor mollis purus.</p>
                                <button className="black" onClick={changeBlack}></button>
                                <button className="pink" onClick={changePink}></button>
                                <button className="btn-buy"><img className="btn-img" src={buyBtn} alt="Buy button" /></button>
                            </div>
                            <img className="tshirt-img" src={backgroundImage} alt="T-shirt" />
                        </div>
                    </section>

                    <section className="bottle-product">
                        <div className="bottle">
                            <div className="text-bottle">
                                <h1>Bottle</h1>
                                <p>Etiam vulputate dui efficitur ultrices pharetra. Praesent tempor mollis purus.</p>
                                <button className="pink"></button>
                                <button className="btn-buy" ><img className="btn-img" src={buyBtn} alt="Buy button" /></button>
                            </div>
                            <img className="bottle-img" src={bottle} alt="Bottle" />
                        </div>
                    </section>
                </article>
            </main>
        </>
    );
}