import React,{useState} from 'react';
import '../NavigationSection/NavigationBar.css';
// import '../NavigationSection/NavigationBar.js';



export const NavigationBar = () => {

    const [click, setClick] = useState(false);
   const [plus, setPlus] = useState(false);
 
   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);
   

   const onMouseEnter = () => {
     if (window.innerWidth < 960) {
       setPlus(false);
     } else {
       setPlus(true);
     }
   };
 
   const onMouseLeave = () => {
     if (window.innerWidth < 960) {
       setPlus(false);
     } else {
       setPlus(false);
     }
   };
    return (  
        <div className="App">
            <header className="header">
                <div className="container">
                    <div className="header-main">
                        <div className="logo" onClick={handleClick}>
                            <h4><u>PickupBiz</u></h4>
                        </div>
                        <div className="open-nav-menu">
                            <span></span>
                        </div>
                        <div className="menu-overlay">
                        </div>
                            
                        <nav className="nav-menu">
                            <div className="close-nav-menu">
                                <img src="Assets/close.svg" alt=""/>
                            </div>

                            <ul className="menu">
                                <li className="menu-item menu-item-children">
                                    <a href="#" data-toggle="sub-menu">Home <i className="plus"></i></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="#">WebDev</a></li>
                                        <li className="menu-item"><a href="#">AndriodDev</a></li>
                                        <li className="menu-item"><a href="#">SharePoint</a></li>
                                        <li className="menu-item"><a href="#">PHP</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-children" onClick={closeMobileMenu}>
                                    <a href="#" data-toggle="sub-menu">News <i className="plus"></i></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="#">Current Afairs</a></li>
                                        <li className="menu-item"><a href="#">Tody's Wheather</a></li>
                                        <li className="menu-item"><a href="#">New Services</a></li>
                                        <li className="menu-item"><a href="#">What We Have</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-children" onClick={closeMobileMenu}>
                                    <a href="#" data-toggle="sub-menu">Services <i className="plus"></i></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="#">WebDev</a></li>
                                        <li className="menu-item"><a href="#">AndriodDev</a></li>
                                        <li className="menu-item"><a href="#">SharePoint</a></li>
                                        <li className="menu-item"><a href="#">PHP</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-children">
                                    <a href="#" data-toggle="sub-menu">Pages <i className="plus"></i></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="#">page 1</a></li>
                                        <li className="menu-item"><a href="#">page 2</a></li>
                                        <li className="menu-item"><a href="#">page 3</a></li>
                                        <li className="menu-item"><a href="#">page 4</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-children" onClick={closeMobileMenu}>
                                    <a href="#" data-toggle="sub-menu">Contact <i className="plus"></i></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="#">Email</a></li>
                                        <li className="menu-item"><a href="#">Service No.</a></li>
                                        <li className="menu-item"><a href="#">Text</a></li>
                                        <li className="menu-item"><a href="#">Telephonic</a></li>
                                    </ul>
                                </li>
                            </ul>
                            </nav>
                    </div>
                </div>
            </header>

            <section>
                <img src="Assets/image2.jpg" className="img"/>
            </section>
        </div>
        )
    }

        {/* <ul>
                                    onClick={handleClick}
                                     className={click ? 'plus clicked' : 'sub-menu'}
                                    {MenuItem.map((item, index) => {
                                    return (
                                <li key={index}>
            
                                    className={item.cName}
                                    to={item.path}
                                    onClick={() => setClick(false)}
                                    {item.title}
                                </li>
                                    );
                                    })}
                            </ul> */}
