import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'material-icons/iconfont/material-icons.css';
import M from 'materialize-css';
import './styles.css';

//https://stackoverflow.com//34418254/how-do-i-add-an-active-class-to-a-link-from-react-router;

const mapState = ({user}) => ({
    currentUser : user.currentUser
});

const Header = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
        },500)
        return () => {
            clearTimeout(timer); 
        }
    }, []);

    return(
        <>
            <div className ="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                    <NavLink to="/" className="brand-logo">@CHINEDUM</NavLink>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="hide-on-med-and-down">
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/work'>Work</NavLink></li> 
                        <li><NavLink to='/experience'>Experience</NavLink></li>
                        <li><NavLink to='/mission-&-vission'>Mission & Vission</NavLink></li>
                    </ul>
                    </div>
                </nav>

                <ul class="sidenav" id="mobile-demo">
                    <div className='_chi'><NavLink to='/' id='brand-logo' className="brand-logo">@CHINEDUM</NavLink></div>
                    <li><NavLink to='/about'><i className="material-icons-outlined">info</i>About</NavLink></li>
                    <li><NavLink to='/work'><i className="material-icons-outlined">work_outline</i>Work</NavLink></li>
                    <li><NavLink to='/experience'><i className="material-icons-outlined">rocket_launch</i>Eperience</NavLink></li>
                    <li><NavLink to='/mission-&-vission'><i className="material-icons-outlined">tty</i>Mission & Vission</NavLink></li>
                </ul>
                {/* <>
                    <nav className = "nav-wraper">
                        <div className="container">
                            <NavLink to="/" exact={true}>
                                <h5 className="img_ic">Okere Widom.c</h5>
                            </NavLink>
                            <NavLink to="/" exact={true} className="brand-L"><h5>Okere Wisdom.C</h5></NavLink>
                            <NavLink to="#" className="sidenav-trigger" data-target="mobile-links">
                                <i className="material-icons">menu</i>
                            </NavLink>
                            <ul className="right hide-on-med-and-down">
                                <li className="sds" id="sds"><NavLink to="/" exact={true} activeClassName="active__">Home</NavLink></li>
                                <li><NavLink to="/about" activeClassName="active__">About</NavLink></li>
                                <li><NavLink to="/work" activeClassName="active__">Work</NavLink></li>
                                <li><NavLink to="/skills" activeClassName="active__">skills</NavLink></li>
                                <li><NavLink to="/contact"activeClassName="active__">Contact</NavLink></li>
                            </ul>
                        </div> 
                    </nav>
                    <ul className="sidenav" id="mobile-links">
                        <NavLink to="/">
                        <h5 exact={true} className="img_ic_">Okere Wisdom.C</h5>
                        </NavLink>
                        <p className="sidenav_p">Okere Wisdom C</p>
                        <hr className="sidenav_hr"></hr>
                        <li><NavLink to="/" exact={true} activeClassName="active_">Home</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active__">About</NavLink></li>
                        <li><NavLink to="/work" activeClassName="active__">Work</NavLink></li>
                        <li><NavLink to="/skills" activeClassName="active__">skills</NavLink></li>
                        <li><NavLink to="/contact"activeClassName="active__">Contact</NavLink></li>
                    </ul>
                </> */}
            </div>
        </>
    )
}

export default Header;

