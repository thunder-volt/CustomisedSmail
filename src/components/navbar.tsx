import React, {useState}from 'react';
import '../styles/navbar.css';
import gmailicon from "../assets/icons8-gmail.svg";
import filter from "../assets/filter-6551.svg";
import pencil from "../assets/pencil-svgrepo-com.svg";
import drive from "../assets/icons8-google-drive.svg";
import docs from "../assets/Google_Docs_logo_(2014-2020).svg";
import sheets from "../assets/Google_Sheets_logo_(2014-2020).svg";
import slides from "../assets/icons8-google-slides.svg";
import calendar from "../assets/Google_Calendar_icon_(2020).svg"; 
import meet from "../assets/Google_Meet_icon_(2020).svg";
import groups from "../assets/google-groups-seeklogo.com.svg";
import youtube from "../assets/YouTube_full-color_icon_(2017).svg";
import photos from "../assets/Google_Photos_icon_(2020).svg";
import classroom from "../assets/Google_Classroom_Logo.svg";
import search from "../assets/icons8-search.svg";
import iit from "../assets/IIT-Madras-01.svg";
import SideBar from './sidebar';

const Navbar = ({setOpen}:{setOpen: any}) => {

    //active
    window.onclick = function(event){
        // event.preventDefault();
        if (!(event.target as HTMLInputElement)?.matches('.active')){
            var dropdowns = document.getElementsByClassName("active-dropdown");
            var i;
            for ( i= 0 ; i<dropdowns.length; i++){
                var openDropdown = dropdowns[i];
                if(openDropdown.classList.contains('show')){
                    
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    function dropdown(){
        //event.preventDefault();
        document.getElementById("dropdown")?.classList.toggle("show");
    }

    //apps
    window.onclick = function(event){
        // event.preventDefault();
        if (!(event.target as HTMLInputElement)?.matches('.material-symbols-outlined')){
            var dropdowns = document.getElementsByClassName("app_dropdown");
            var i;
            for ( i= 0 ; i<dropdowns.length; i++){
                var openDropdown = dropdowns[i];
                if(openDropdown.classList.contains('show')){
                    
                    openDropdown.classList.remove('show');
                }
            }
        }
        
    }

    
    function applist(){
        // e.preventDefault();
        document.getElementById("app_d")?.classList.toggle("show");
    }

    window.onclick = function(event){
        // event.preventDefault();
        if (!(event.target as HTMLInputElement)?.matches('.material-symbols-outlined')){
            var dropdowns = document.getElementsByClassName("support-dropdown");
            var i;
            for ( i= 0 ; i<dropdowns.length; i++){
                var openDropdown = dropdowns[i];
                if(openDropdown.classList.contains('show')){
                    
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    function support(){
        //event.preventDefault();
        document.getElementById("support")?.classList.toggle("show");
    }

    return(
    <body>
        <nav className= "navbar">
            <div className = "nav-header">
                <button  className="burger material-symbols-outlined" onClick={()=>setOpen((prev: boolean) => !prev)}>menu</button>

                <a href="./" className = "nav-logo">
                    <img src={gmailicon} alt="gmail"/>
                </a>
                <a href="./"className = "nav-logo-text">
                  Gmail
                </a>
            </div>

            <div className = "nav-search">
                <button id="a"><img src= {search} className = "search"></img></button>
                <div className= "search-box">
                    <input type="text" placeholder="Search in mail" /> 
                </div> 
                
                <button id="a"><img src= {filter} className="filter"/></button>
            </div>
            <div className = "down">
                <button onClick={dropdown} className="active" ><span className="greendot"></span>  Active  <span className= "down-arrow"></span></button>
                <div className = "active-dropdown" id="dropdown">
                        <a>
                            <span className="greendot-dropdown"></span>
                            <div className = "options">
                                <span >Automatic</span> 
                                <span id = "sub">Based on activity</span>
                            </div>
                        </a>
                        <a>
                            <span className="reddot">
                                <div className="hyphen">
                                    -
                                </div>
                            </span>
                            <div className="options">
                                <span >Do not Disturb</span> 
                                <span id = "sub"> Mute Chat Notifications</span>
                            </div>
                        </a>
                        <a>
                            <span className="inner-circle"></span>
                            <div className = "options">
                                <span >Set as Away</span>
                            </div>
                        </a>
                        <a id= "status">
                            <img src={pencil} className="edit"/>
                            <div className = "options">
                                Add a status
                            </div>
                        </a>
                        <a className = "options_">Chat Notification Settings</a>
                </div>
            </div>
            <div className="nav-icons">
                <button onClick={support} className="material-symbols-outlined" id="a">help</button>
                
                <div className = "support-dropdown" id="support">
                    <a className="support-text">Help</a>
                    <a className="support-text">Send Feedback</a>
                </div>
                
                

                <button className="material-symbols-outlined" id="a">settings</button>

                <div className= "apps">
                    <button onClick={applist} className = "material-symbols-outlined" id="a">apps</button>
                    <div className = "app_dropdown" id = "app_d">
                        
                        <div className = "three">
                            <div onClick= {()=>{window.location.href ='https://myaccount.google.com'}} className="app-rep">
                                <div className="dot-app">
                                    <div className="account-id">A</div>
                                </div>
                                <div className = "app-text">Account</div>
                            </div>
                            <div onClick= {()=>{window.location.href ='https://mail.google.com'}} className = "app-rep">
                                <img src={gmailicon} alt="gmail"/>
                                <div className = "app-text">
                                    Gmail
                                </div>
                            </div>
                            <div className = "app-rep" onClick= {()=>{window.location.href = 'https://drive.google.com'}}>
                                <img src={drive} alt="drive"/>
                                <div className = "app-text">Drive</div>
                            </div>
                        </div>
                        
                        <div className = "three">
                            <div className="app-rep">
                                <img src={docs} alt="docs" onClick={()=>{window.location.href='https://docs.google.com/'}}/>
                                <div className = "app-text">Docs</div>
                            </div>
                            <div className = "app-rep">
                                <img src={sheets} alt="sheets" onClick = {() =>{window.location.href='https://docs.google.com/spreadsheets/'}}/>
                                <div className = "app-text">Sheets</div>
                            </div>
                            <div className = "app-rep" >
                                <img src={slides} alt="slides" onClick = {()=>{window.location.href  = 'https://docs.google.com/presentation/' }}/> 
                                <div className = "app-text">Slides</div>
                            </div>
                        </div>

                        <div className = "three">
                            <div className="app-rep">
                                <img src={calendar} alt="calendar" className="calendar" onClick= {()=>{window.location.href = 'https://calendar.google.com/'}}/>
                                <div className = "app-text">Calendar</div>
                            </div>
                            <div className = "app-rep">
                                <img src={meet} alt="meet" className="calendar" onClick= {()=>{window.location.href= 'https://meet.google.com/'}}/>
                                <div className = "app-text">Meet</div>
                            </div>
                            <div className = "app-rep" >
                                <img src={groups} alt="groups" onClick = {()=>{window.location.href = 'https://groups.google.com/'}}/>
                                <div className = "app-text">Groups</div>
                            </div>
                        </div>

                        <div className = "three">
                            <div className="app-rep">
                                <img src={youtube} alt="youtube" className="calendar" onClick = {() =>{window.location.href = 'https://www.youtube.com/'}}/>
                                <div className = "app-text">Youtube</div>
                            </div>
                            <div className = "app-rep">
                                <img src={photos} alt="photos" className="calendar" onClick = {()=>{window.location.href = 'https://photos.google.com/'}}/>
                                <div className = "app-text">Photos</div>
                            </div>
                            <div className = "app-rep" >
                                <img src={classroom} alt="Classroom" className="calendar" onClick = {()=>{window.location.href = 'https://classroom.google.com/'}}/>
                                <div className = "app-text">Classroom</div>
                            </div>
                        </div>

                    </div>

                </div>
                

                <div className="account">
                    <button id="account" onClick = {() =>{window.location.href="https://mail.google.com/"}}>
                        <div className="insti">
                            <img src={iit}/> 
                            <span className="iitm">IITM</span>
                        </div>
                        <div className="dot">
                            <div className="account-id">A</div>
                        </div>
                    </button>
                </div>
                
            </div>
        </nav>
    </body>

        
    )
}

export default Navbar;