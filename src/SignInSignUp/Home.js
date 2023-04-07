import React from "react";
import './SignInSignUp.css';
import {useEffect, useState} from "react";

function Home(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear();
        window.location.reload()
    }

    const [img, setImg]=useState("https://th.bing.com/th/id/OIP.8nZtJbl1AV3C3TLjl8a00wHaK_?pid=ImgDet&rs=1");
    const [title, setTitle]=useState("Bond 25");
    const [category, setCat]=useState("movies");
    const [language, setLan]=useState("kannada");
    const [genre, setGenre]=useState("all");
    const [sort, setVote]=useState("voting");
    const [Dir, setDir]=useState("Cary Joji Fukunaga");
    const [starr, setStarr]=useState("Ana de Armas, Rami...");
    
    function saveDetail(){
        // console.log({img, title, genre, Dir, starr, category,language, sort});
        let data={img, title, genre, Dir, starr, category,language, sort}
        fetch("https://hoblist.com/api/movieList",{
            method: "POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
            })
        })
    }
    
    return(
        <div>

            <div onLoad={saveDetail}>
                <ul className="nav nav-pills">
                    <li className="active"><a data-toggle="pill" href="#home">Home</a></li>
                    <li><a data-toggle="pill" href="#menu1">Company Info</a></li>
                </ul>
                
                <div className="tab-content">
                    <div id="home" className="tab-pane fade in active">
                        <h1>Home Page </h1>
                        <p>Welcome sir {localStorage.getItem('name')}</p>
                        <br />
                    {/*  */}
                    <div>
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-2" id="box">
                                <br/>
                                <i className="fa-solid fa-caret-up"></i>
                                <div >
                                    1
                                </div>
                                <i className="fa-solid fa-caret-down"></i>
                                <p style={{marginTop: "10vh"}}name="category" value={category} onLoad={(e)=>{setCat(e.target.value())}}>Votes</p>
                            </div>
                            <div className="col col-lg-2" id="imgbox">
                                
                                <img id="imgbox" name="img" value={img} onLoad={(e)=>{setImg(e.target.value.toString())}} src="https://th.bing.com/th/id/OIP.8nZtJbl1AV3C3TLjl8a00wHaK_?pid=ImgDet&rs=1" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="col col-lg-2">
                                <h3 id="title" style={{marginLeft: "-15vh"}} name="title" value={title} onLoad={(e)=>{setTitle(e.target.value.toString())}} >Bond 25</h3>
                                <span className="greycol" style={{marginLeft: "2vh"}}>Genre: &nbsp;&nbsp;</span><span name="genre" value={genre} onLoad={(e)=>{setGenre(e.target.value)}}>Action, Adventure, Thriller</span>
                                <div/>
                                <span className="greycol" style={{marginLeft: "-4vh"}}>Director:&nbsp;</span><span name="Dir" value={Dir} onLoad={(e)=>{setDir(e.target.value)}}>Cary Joji Fukunaga</span>
                                <div/>
                                <span className="greycol" style={{marginLeft: "-1.7vh"}}>Starring:&nbsp;</span><span name="starr" value={starr} onLoad={(e)=>{setStarr(e.target.value)}}>Ana de Armas, Rami...</span>
                                <div id="marginleft" name="language" value={language} onLoad={(e)=>{setLan(e.target.value)}}>Mins | English | 2 Apr </div>
                                <div id="bluecol" name="sort" value={sort} onLoad={(e)=>{setVote(e.target.value)}}>137 views | Voted by 1 People </div>
                            </div>
                        </div>
                        <br />
                            <div className="row justify-content-md-center">
                                <button className="btn btn-info" id="trailbtn" onClick={saveDetail}>Watch Trailer</button>
                            </div>
                            <br />
                    </div>
                    <div>
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-2" id="box">
                                <br/>
                                <i className="fa-solid fa-caret-up"></i>
                                <div >
                                    1
                                </div>
                                <i className="fa-solid fa-caret-down"></i>
                                <p style={{marginTop: "10vh"}}>Votes</p>
                            </div>
                            <div className="col col-lg-2" id="imgbox">
                                
                                <img name="img" id="imgbox" src="https://th.bing.com/th/id/OIP.8nZtJbl1AV3C3TLjl8a00wHaK_?pid=ImgDet&rs=1"  className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="col col-lg-2">
                                <h3 id="title" style={{marginLeft: "-15vh"}} >Bond 25</h3>
                                <span className="greycol" style={{marginLeft: "2vh"}}>Genre: &nbsp;&nbsp;</span><span>Action, Adventure, Thriller</span>
                                <div/>
                                <span className="greycol" style={{marginLeft: "-4vh"}}>Director:&nbsp;</span><span>Cary Joji Fukunaga</span>
                                <div/>
                                <span className="greycol" style={{marginLeft: "-1.7vh"}}>Starring:&nbsp;</span><span>Ana de Armas, Rami...</span>
                                <div id="marginleft">Mins | English | 2 Apr </div>
                                <div id="bluecol">137 views | Voted by 1 People </div>
                            </div>
                        </div>
                        <br />
                            <div className="row justify-content-md-center">
                                <button className="btn btn-info" id="trailbtn">Watch Trailer</button>
                            </div>
                            <br />
                    </div>


                    {/*  */}
                        <button onClick={logout} className="logout">Logout</button>
                        <button onClick={deleteAccount} className="delete">Delete Account</button>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                        <div className="card text-center">
                            <div className="card-header">
                                <h3>Geeksynergy Technologies Pvt Ltd</h3>   
                            </div>
                            <div className="card-body">
                                <div><b>Company:</b> Geeksynergy Technologies Pvt Ltd</div>
                                <div><b>Address:</b> Sanjayanagar, Bengaluru-56.</div>
                                <div><b>Phone:</b> XXXXXXXXX09</div>
                                <div><b>Email:</b> XXXXXX@gmail.com</div>
                                <br/>
                                <a href="https://www.geeksynergy.com/" target="blank" className="btn btn-primary">Go somewhere</a>
                            </div>
                            <br />
                            <div className="card-footer text-muted">
                                2 days ago
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;