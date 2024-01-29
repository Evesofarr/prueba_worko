import workoLogo from "../../images/Logo-Worköholics.png";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import "./Header.scss";
import { useState } from "react";
import "animate.css";

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header>
                <img className="logo" src={workoLogo} alt="Workoholics" />
                <nav className="desktop-nav">
                    <ul>
                        <li>
                            <a href="#">Menu 1</a>
                        </li>
                        <li>
                            <a href="#">Menu 2</a>
                        </li>
                        <li>
                            <a href="#">Menu 3</a>
                        </li>
                    </ul>
                </nav>

                <div className="mobile-nav">
                    {!isMobileMenuOpen && (
                        <IconButton className="burger-menu" onClick={toggleMobileMenu}>
                            <DragHandleIcon />
                        </IconButton>
                    )}
                    {isMobileMenuOpen && (
                        <IconButton className="close-menu" onClick={toggleMobileMenu}>
                            <CloseIcon />
                        </IconButton>
                    )}

                    {isMobileMenuOpen && (
                        <div className="mobile-menu animate__animated animate__fadeInRightBig">
                            <div className="menu-list animate__animated animate__slideInRight animate__delay-1s">
                                <ul>
                                    <li>
                                        <a href="#">Menu 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Menu 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Menu 3</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

            </header>
        </>
    );
};