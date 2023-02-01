import * as React from "react";
import Cta from "./cta";
import logo from "../../images/club.png";


type props = {
  data:any;
 };

const Header = (props:any) => {
  console.log(props)
    React.useEffect(()=>{
      document.body.setAttribute("id","body");  
    })
  const linkDoms = props._site.c_headerlinks.map((link:any) => (
      <a className="navbar-item" href={link.link} >
        <span style={{fontSize:"25px",marginLeft:"15%",marginTop:"10px"}}>{link.label}</span>
      </a>
  ));
// console.log(linkDoms,"linkdoms")

  const toggle=()=>{
    (document.getElementById("body") as HTMLInputElement).classList.toggle('');
  };

  return (
    <>
    
        <div id="header" className="header-nav" style={{backgroundColor:"#f1d7b1"}}>
          <div className="headerLogo">
                    <a className="logo" href="/" style={{display:"grid",placeItems:"center"}}>
                      <div style={{margin:"19px 0px 19px 0px"}}>
                      <img style={{height:"109px"}} src={props._site.c_footerLogo.url}/> 
                      </div>
                    </a>
                    <hr/>
                    <hr/>
                </div>
          <div className="container">
            <nav className="navbar" style={{color:"black",padding:"19px 0px 19px 0px"}}>
              {linkDoms}
            </nav>
            
          </div>
          <hr/>
          <hr/>
        </div>
    </>
  );
};

export default Header;
