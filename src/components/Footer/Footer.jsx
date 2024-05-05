import './Footer.css'
import { FaInstagram  } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content text-xl">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            #101,Ace Ventures,
            <br />
           Laxminagar Colony Road No1,
           <br />
           Kothapet,Hyderabad,500035
           <br />
           Telangana,India
          </p>
          <p> +91 xxxxx xxxxxx</p>
          <p>support@amrobotics.in</p>
        </aside>
        <nav>
          <header className="footer-title">About Us</header>
          <Link className="link link-hover" to='/profile' state={{state:{tabId:"CONTACT"}}}>Contact Us</Link>

          <Link className="link link-hover" to='/terms-conditions'>Terms & Conditions</Link>
          <Link className="link link-hover" to='/shipping-refund'>Shipping and Refund policy</Link>
          <Link className="link link-hover" to='/privacy-policy'>Privacy policy</Link>
          <Link className="link link-hover" to='/careers'>Careers</Link>
          <Link className="link link-hover" to='/terms-of-service'>Terms of service</Link>
       <p> Working Hours : Mon to Sat 9.30am to 8.00pm</p>  
        </nav>
        <nav>
          <header className="footer-title">Authorized Distributor</header>
          <p >Agarwal Electronics</p>
          <p >Gujarathi School Lane,</p>
          <p >Sultan Bazar,Koti,</p>
          <p >Hyderabad,Telangana 500095</p>
        Get in touch
       <div>
       <ul className="wrapper">
    <li className="icon facebook" id='some'>
        <span className="tooltip">Facebook</span>
        <span> <FaFacebookF size={24}   /></span>
    </li>
    <li className="icon twitter" id='some'>
        <span className="tooltip">Twitter</span>
        <span><FaXTwitter size={24} /></span>
    </li>
    <li className="icon instagram" id='some'>
        <span className="tooltip">Instagram</span>
        <span><FaInstagram size={24} /></span>
    </li>
</ul>
       </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
