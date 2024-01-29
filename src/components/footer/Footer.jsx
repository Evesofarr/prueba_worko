import submitBtn from "../../images/submitBtn.png";
import "./Footer.scss";

export default function Footer() {
    return (
        <>
            <footer>
                <section className="contact">
                    <a href="mailto:hello@workoholics.es">hello@workoholics.es</a>
                    <a href="tel:+34 944 059 957">+34 944 059 957</a>
                </section>
                <section className="footer-info">
                    <div className="phrase">
                        <p>We love what we do.</p>
                        <p>We are Worköholics.</p>
                    </div>
                    <div className="emailForm">
                        <input className="email" type="text" placeholder="E-mail" id="email" name="email" />
                        <div className="terms">
                            <input type="checkbox" id="terms" name="terms" />
                            <label for="terms">I have read and accepted the <a href="#">Terms and Conditions.</a></label>
                        </div>
                        <button><img src={submitBtn} alt="Submit button" /></button>
                    </div>
                </section>
            </footer>
        </>
    );
};