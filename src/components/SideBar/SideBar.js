import NavMenu from "../NavMenu/NavMenu";
import "./SideBar.css";
import LangBar from "../LangBar/LangBar";

const SideBar = ({ isOpen, toggleSideBar, isClicked, languageChange, currentLocale }) => {

  return (
    <>
      <nav onClick={toggleSideBar} className={`sidebar ${isOpen ? '' : 'sidebar_invisible'}`}>
        <button className="sidebar__button" onClick={toggleSideBar}></button>
        <LangBar languageChange={languageChange} isClicked={isClicked} currentLocale={currentLocale}/>
        <NavMenu toggleSideBar={toggleSideBar} />
      </nav>
      <div className={`sidebar-overlay ${isOpen ? '' : 'sidebar-overlay_invisible'}`} onClick={toggleSideBar} ></div>
    </>)
};

export default SideBar;
