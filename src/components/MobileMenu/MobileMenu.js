import "./MobileMenu.css";
import { useMediaQuery } from 'react-responsive';
import NavMenu from '../NavMenu/NavMenu';
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import LangBar from "../LangBar/LangBar";


const MobileMenu = ({ currentLocale, isClicked, languageChange }) => {

    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const [isOpen, setIsOpen] = useState(false);
    const toggleSideBar = () => setIsOpen(!isOpen);

    return (
        <>
            {isMobile ?
            (
            <>
                <button className="header__nav-button" onClick={toggleSideBar}></button>
                <SideBar languageChange={languageChange} currentLocale={currentLocale} isMobile={isMobile} isOpen={isOpen} toggleSideBar={toggleSideBar}/>
            </>) :
            (<>
                <NavMenu></NavMenu>
                <LangBar languageChange={languageChange} isClicked={isClicked} currentLocale={currentLocale}/>
            </>)
            }
        </>
    );
}

export default MobileMenu;
