import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./footer.css";

import facebookIcon from "../../icons/facebook-icon__footer.svg";
import instagramIcon from "../../icons/instagram-icon__footer.svg";
import twitterIcon from "../../icons/twitter-icon__footer.svg";
import linkedinIcon from "../../icons/linkedin-icon__footer.svg";
import playmarketBtn from "../../icons/download-playmarket-btn__footer.svg";
import appStoreBtn from "../../icons/download-appStore-btn__footer.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__block_first">
        <div className="footer-info__block">
          <h2 className="footer-info__block__title">Need Help</h2>
          <ul className="footer-info__block__items">
            <li>Contact us</li>
            <li>Track Order</li>
            <li>Returns&Refunds</li>
            <li>FAQ'S</li>
            <li>Career</li>
          </ul>
        </div>

        <div className="footer-info__block">
          <h2 className="footer-info__block__title">Company</h2>
          <ul className="footer-info__block__items">
            <li>About Us</li>
            <li>euphoria BLOG</li>
            <li>euphoristan</li>
            <li>Collaboration</li>
            <li>Media</li>
          </ul>
        </div>

        <div className="footer-info__block">
          <h2 className="footer-info__block__title">More Info</h2>
          <ul className="footer-info__block__items">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="footer-info__block" id="location">
          <h2 className="footer-info__block__title">Location</h2>
          <ul className="footer-info__block__items">
            <li>support@euphoria.in</li>
            <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
            <li>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li>
          </ul>
        </div>
      </div>

      <div className="footer__block_second">
        <ul className="footer__block_second__social__block">
          <li className="footer__block_second__social__item">
            <img src={facebookIcon} alt="error" />
          </li>
          <li className="footer__block_second__social__item">
            <img src={instagramIcon} alt="error" />
          </li>
          <li className="footer__block_second__social__item">
            <img src={twitterIcon} alt="error" />
          </li>
          <li className="footer__block_second__social__item">
            <img src={linkedinIcon} alt="error" />
          </li>
        </ul>
        <div className="footer__block_second__download__block">
          <h2 className="footer__block_second__download__header">
            Download The App{" "}
          </h2>
          <div className="footer__block_second__download__btns">
            <button className="footer__block_second__download__btn">
              <img src={playmarketBtn} alt="error" />
            </button>
            <button className="footer__block_second__download__btn">
              <img src={appStoreBtn} alt="error" />
            </button>
          </div>
        </div>
      </div>

      <div className="footer__block_third">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              <li>Joggers</li>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Footer;
