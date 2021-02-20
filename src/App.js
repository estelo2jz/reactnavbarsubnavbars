import './index.css';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <Navbar>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
      {/* <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} /> */}
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <div>
            <p>Junk Seller</p>
          </div>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="electronics">
            Electronics
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="computers">
            Computers
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="beauty&health">
            Beauty & Health
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="food&grocery">
            Food & Grocery
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="home&garden&tools">
            Home, Garden & Tools
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="handmade">
            Handmade
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="outdoors">
            Outdoors
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="petsupplies">
            Pet Supplies
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="smarthome">
            Smart Home
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="toys&kids&baby">
            Toys, Kids & Baby
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="sports">
            Sports
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="automotive&industrial">
            Automotive & Industrial
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'electronics'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Electronics</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p>TV & Video</p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p>Home Audio & Theater</p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p>Camera, Photo & Video</p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p>Cell Phones & Accessories</p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p>Headphones</p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p>Video Games</p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p>Bluetooth & Wireless</p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p>Car Electronics</p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p>Musical Instruments</p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p>Wearable Technology</p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p>Electronics</p></DropdownItem>

        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'computers'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Computers</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'beauty&health'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Beauty & Health</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'food&grocery'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Food & Grocery</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'home&garden&tools'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Home, Garden & Tools</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'handmade'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Handmade</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'outdoors'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Outdoors</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'petsupplies'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Pet Supplies</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'smarthome'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Smart Home</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'toys&kids&baby'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Toys, Kids & Baby</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'sports'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Sports</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'automotive&industrial'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Automotive & Industrial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === ''}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2></h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><p></p></DropdownItem>
        </div>
      </CSSTransition>






      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;