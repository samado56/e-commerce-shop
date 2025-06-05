import masterCard from "../assets/imgs/master-card.png";
import visa from "../assets/imgs/visa.png";
import gPay from "../assets/imgs/google-pay.png";
import aPay from "../assets/imgs/apple-pay.png";
import paypal from "../assets/imgs/paypal.png";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="footer pt-10 border-t-1 border-black/20">
        <div className="container text-center md:text-start">
          <div className="wrapper grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-6 ">
            <div className="mx-auto w-fit">
              <h1 className="text-xl font-medium mb-4">About The Brand</h1>
              <p className="text-md font-[400]">
                FashionForward is your destination for modern, stylish apparel.
                We believe in elevating everyday style with quality pieces that
                inspire confidence.
              </p>
            </div>

            <div className="mx-auto w-fit">
              <h1 className="text-xl font-medium mb-4">Quick Links</h1>
              <ul className="text-lg font-[400]">
                <li>
                  <a href="#">Shop</a>
                </li>

                <li>
                  <a href="#">Returns</a>
                </li>

                <li>
                  <a href="#">FAQ</a>
                </li>

                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>

            <div className="mx-auto w-fit">
              <h1 className="text-xl font-medium mb-4">Customer Service</h1>
              <ul className="text-lg font-[400]">
                <li>
                  <a href="#">Contact Us</a>
                </li>

                <li>
                  <a href="#">Shipping Information</a>
                </li>

                <li>
                  <a href="#">Track Order</a>
                </li>

                <li>
                  <a href="#">Size Guide</a>
                </li>
              </ul>
            </div>

            <div className="mx-auto w-fit ">
              <h1 className="text-xl font-medium mb-4">Follow US</h1>
              <ul className="flex gap-2 justify-center md:justify-start  ">
                <li>
                  <a href="#">
                    <FaXTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaFacebookF size={20} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedinIn size={20} />
                  </a>
                </li>
              </ul>
              <h1 className="text-xl font-medium mt-4 mb-4">Secure Payment</h1>
              <div className="flex item-center gap-2">
                <ul className="flex items-center gap-2">
                  <li>
                    <img
                      src={masterCard}
                      className="w-[60px] shadow-sm shadow-black/20"
                    />
                  </li>
                  <li>
                    <img
                      src={visa}
                      className="w-[60px] shadow-sm shadow-black/20"
                    />
                  </li>
                  <li>
                    <img
                      src={gPay}
                      className="w-[60px] shadow-sm shadow-black/20"
                    />
                  </li>
                  <li>
                    <img
                      src={aPay}
                      className="w-[60px] shadow-sm shadow-black/20"
                    />
                  </li>
                  <li>
                    <img
                      src={paypal}
                      className="w-[60px] shadow-sm shadow-black/20"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="w-fit mx-auto mt-6 py-4 text-lg">
          © 2025 StyleHub. All rights reserved.
        </p>
      </div>
    </>
  );
}
