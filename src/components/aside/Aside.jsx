import React from "react";
import line from "../../images/line.png";
import "./Aside.scss";

export default function Aside() {
    return (
        <aside className="vertical-aside">
            <img src={line} alt="" />
            <a href="#" className="rotated-text">Contact us</a>
        </aside>
    );
}
