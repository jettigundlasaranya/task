import React from 'react';

export const Dropdown = () => {
    return (
        // https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css
            <nav>
            {/* <div id="div1">
             <ul>
                <li>Home page</li>
                <li>
                    <ul class="dropdown">
                    <li id="h22">Left dropdown</li>
                    <div class="dropdown-content">
                     <li>Any page</li>
                     <ul class="dropdown">
                    <li id="h22">Second level</li>
                    <div class="dropdown-content">
                     <li>Another page</li>
                     <li>Any page</li>
                     <ul class="dropdown">
                     <li id="h22">Third level</li>
                     <div class="dropdown-content">
                     <li>Any page</li>
                     </div>
                     </ul>
                     </div>
                    </ul>
                    <li>Another page</li>
                    </div>
                    </ul>
                </li>
                <li>Mega Menu </li>
                <li>Right dropdown</li>
                </ul>     
         </div> */}
        <div id="menu-bar">
         <ul>
             <li class="active"><a href="#" id="text1">Home page</a></li>
             <li><a href="#">Left dropdown</a>
             <div class="submenu">
                <ul>
                    <li><a href="#"> Any page</a></li>
                    <li class="hoverme"><a href="#"> Second level</a>
                    <div class="submenu1">
                <ul>
                    <li><a href="#"> Any page</a></li>
                    <li><a href="#"> Third level</a></li>
                    <li><a href="#"> Another page</a></li>
                </ul>
                     </div>
                    </li>
                    <li><a href="#"> Another page</a></li>
                </ul>
             </div>
             </li>
             <li><a href="#"> Mega Menu </a></li>
             <li><a href="#"> Any page </a></li>
             <li><a href="#"> Right dropdown</a></li>
         </ul>
         </div>
        </nav>
    )
}
export default Dropdown