import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from  'materialize-css/dist/js/materialize.min.js';
import Logo from '../images/logo.png'
import {connect} from 'react-redux'
import {logoutUser} from '../Redux/Actions/auth'

const  Navbar=({isAuthenticated,isloggedin,logoutUser})=> {

    
    useEffect(()=>{
    let sidenav = document.querySelector('.sidenav');
      M.Sidenav.init(sidenav, {
        isFixed:true  
      });
    },[])

   

    return (
        <div>
            <nav className="nav-extended white">
            <div className="nav-wrapper">
            <a href="/" className="brand-logo" rel="noopener noreferrer" ><img src={Logo} className="logo"  alt="navbar-logo"/></a>
            <a href="/" data-target="mobile-demo"  rel="noopener noreferrer" className="sidenav-trigger"><i className="material-icons green-text darken-4">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a  className="black-text darken-4" rel="noopener noreferrer"  href="#impact">Impact</a></li>
                <li><a  className="black-text darken-4" rel="noopener noreferrer"  href="#opportunities">Opportunites</a></li>
                <li><a  className="black-text darken-4" rel="noopener noreferrer"  href="#initiatives">Initiatives</a></li>
                <li><a  className="black-text darken-4" rel="noopener noreferrer"  href="/allblogs">Blogs</a></li>
                
                {isAuthenticated && isloggedin? 
                (
                    <>
                <li><Link to="/user/dashboard" className="light-green accent-4 btn btn-medium waves-effect outline white-text">Dashboard</Link></li>
                <li><button  className="light-green accent-4 btn btn-medium waves-effect outline white-text" onClick={logoutUser}>Logout</button></li>
                </>
                )
                :
                (
                <li><Link to="/user/dashboard" className="light-green accent-4 btn btn-medium waves-effect outline white-text"><i  className="material-icons white-text right">chevron_right</i>Try our Alpha</Link></li>
                )}
            </ul>
            </div>
            
        </nav>

        <ul className="sidenav" id="mobile-demo">
        <li><a  className="black-text darken-4" href="#impact" rel="noopener noreferrer">Impact</a></li>
                <li><a  className="black-text darken-4" href="#opportunities" rel="noopener noreferrer" >Opportunites</a></li>
                <li><a  className="black-text darken-4" href="#initiatives" rel="noopener noreferrer" >Initiatives</a></li>
                <li><a  className="black-text darken-4" rel="noopener noreferrer"  href="/allblogs">Blogs</a></li>
                
                {isAuthenticated && isloggedin? 
                (
                    <>
                <li><Link to="/user/dashboard" className="light-green accent-4 btn btn-medium waves-effect outline white-text"><i  className="material-icons white-text right">chevron_right</i>Dashboard</Link></li>
                <li><button className="light-green accent-4 btn btn-medium waves-effect outline white-text" onClick={logoutUser}> Logout</button></li>
                </>
                )
                :
                (
                <li><Link to="/user/dashboard" className="light-green accent-4 btn btn-medium waves-effect outline white-text"><i  className="material-icons white-text right">chevron_right</i>Try our Alpha</Link></li>
                )}

            </ul>
        </div>
    )
}

const mapStateToProps=(state)=>({
isAuthenticated:state.auth.isAuthenticated,
isloggedin:state.auth.isloggedin
})

export default connect(mapStateToProps,{logoutUser})(Navbar)