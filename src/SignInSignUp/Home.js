import React from "react";
import './SignInSignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear();
        window.location.reload()
    }
    
    return(
        <div>
            <div className="container">
                <h2>Dynamic Pills</h2>
                <p>To make the tabs toggleable, add the data-toggle="pill" attribute to each link. Then add a .tab-pane class with a unique ID for every tab and wrap them inside a div element with class .tab-content.</p>
                <ul className="nav nav-pills">
                    <li className="active"><a data-toggle="pill" href="#home">Home</a></li>
                    <li><a data-toggle="pill" href="#menu1">Menu 1</a></li>
                    <li><a data-toggle="pill" href="#menu2">Menu 2</a></li>
                    <li><a data-toggle="pill" href="#menu3">Menu 3</a></li>
                </ul>
                
                <div className="tab-content">
                    <div id="home" className="tab-pane fade in active">
                    <h3>HOME</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                    <h3>Menu 1</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div id="menu2" className="tab-pane fade">
                    <h3>Menu 2</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                    <div id="menu3" className="tab-pane fade">
                    <h3>Menu 3</h3>
                    <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </div>
                </div>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <h1>Home Page </h1>
                    <br />
                    <p>Welcome sir {localStorage.getItem('name')}</p>
                    <button onClick={logout} className="logout">LogOut</button>
                    <button onClick={deleteAccount} className="delete">Delete</button>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
            </div>
        </div>
    );
}
export default Home;