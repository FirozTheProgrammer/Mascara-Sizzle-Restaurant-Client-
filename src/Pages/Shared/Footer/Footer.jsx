import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className=" font-inter">
        <div className="flex-cols md:flex md:justify-around">
          <div className="bg-[#1F2937] py-5 md:py-10 lg:py-20 md:w-6/12">
            <div className="text-center text-white space-y-3">
              <h6 className=" text-2xl md:text-3xl font-cinzel font-medium">
                CONTACT US
              </h6>
              <div className="">
                <p>123 ABS Street, Uni 21, Bangladesh</p>
                <p>+88 123456789</p>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>
          </div>
          <div className="bg-[#111827] py-5 md:py-10 lg:py-20 md:w-6/12">
            <div className="text-center text-white space-y-3">
              <h6 className="text-white text-2xl md:text-3xl font-medium">
                Social
              </h6>
              <p>Join us on social media</p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="https://www.facebook.com/FirozTheProgrammer/"
                  target="_blank"
                >
                  {" "}
                  <FaFacebookF />
                </Link>
                <Link
                  to={"https://www.instagram.com/firoztheprogrammer/?hl=en"}
                  target="_blank"
                >
                  <BsInstagram />
                </Link>
                <Link
                  to={"https://twitter.com/Developer_Firoz"}
                  target="_blank"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white bg-[#151515] py-8">
          <p className="md:text-xl font-medium">
            {" "}
            Copyright © CulinaryCloud. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
