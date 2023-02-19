import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>UBO STORE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; UBO Store </p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/ubo_store/">Instagram</a>
        <a href="#">Youtube</a>
        <a href="https://web.facebook.com/100090436451060/professional_dashboard/insights/?ref=comet_direct_url_navigation">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
