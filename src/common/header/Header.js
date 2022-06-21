import React, { useState } from 'react'
import './Header.css';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [dropdown, setDropdown] = useState(true);

    const showDropdown = () => {
        setDropdown(false);
    }
    const hideDropdown = () => {
        setDropdown(true);
    }

  return (
    <>
        <header>
        {/* -------------------Notification Bar Starts------------------- */}
            <div className="notification-bar">
                <div className="container-notification-bar">
                    <div className="message-notification-bar">
                        <p className='txt-notification-bar'><span className='blink-notification-bar'>📺</span> Watch your favourites shows! Bring home the fun with all new <strong>Elxer OTT</strong> plans.</p>
                    </div>
                    <div className="button-notification-bar">
                        <Button>Subscribe Now</Button>
                    </div>
                </div>
            </div>
        {/* -------------------Notification Bar Ends------------------- */}

        {/* -------------------Top Bar Starts------------------- */}
            <div className="topbar">
                <div className="innertopbar">
                    <div className="left-topbar">
                        <p>Customer Support: <a href="tel:07716777777">0771-677-7777</a> (24/7) | Email: <a href="mailto:support@elxer.com">support@elxer.com</a></p>
                    </div>
                    <div className="right-topbar">
                        <span className="pulse-topbar"></span>
                        <div>We're Hiring</div>
                        <div>Customer Portal</div>
                    </div>
                </div>
            </div>
        {/* -------------------Top Bar Ends------------------- */}

        {/* -------------------Header Starts------------------- */}
            <div className="headerbar">
                <div className="innerheaderbar">
                    <div className="left-headerbar">
                        <h2>ELXER</h2>
                        <p>Stay Safe keep Social Distancing</p>
                    </div>
                    <div className="right-headerbar">
                        <div>
                            <ul className='nav-items-list'>
                                <li>Home</li>
                                <li>Business</li>
                                <li>Plans</li>
                                <li>Support</li>
                                <li>Contact Us</li>
                                <li><Button variant='outlined'>Pay & Recharge</Button></li>
                                <li><Button variant='outlined'>New Connection</Button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="menuheaderbar">
                        {
                            dropdown ? <MenuIcon onClick={()=> showDropdown()}/> : <CloseIcon onClick={()=> hideDropdown()}/>
                        }
                    </div>
                </div> 
            </div>
            <div className="dropdownMenu">
                {
                    dropdown ? '' : (
                                    <div className="mobileDropDownMenu">
                                        <ul className='nav-items-list-mobile'>
                                            <a href="http://www.google.com"><li>Home</li></a>
                                            <li>Business</li>
                                            <li>Pay & Recharge</li>
                                            <li>New Connection</li>
                                            <li>Plans</li>
                                            <li>Support</li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </div>
                                    )
                }
            </div>
        </header>
        {/* -------------------Header Ends------------------- */}
    </>
  )
}

export default Header;