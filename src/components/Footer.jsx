import React from "react";
import Group from "../assets/Icons/Group 9969.png";

const Footer = () => {
  return (
    <footer className="my-container divide-y  relative bottom-0 left-0 text-center">
      <div className="grid grid-cols-1  lg:gap-16 lg:grid-cols-3 mb-5 justify-between">
        <div >
          <h2 className="font-extrabold text-3xl text-gray-500 mb-4 ">
            JobHub
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <img src={Group} alt="" className="w-32 h-9" />
        </div>

        <div className="flex justify-between items-center ">
          <div>
          <h2 className="font-extrabold text-2xl text-gray-500 mb-4 ">Company</h2>
          <p className="mt-2 text-sm text-gray-400 ">About Us</p>
          <p className="mt-2 text-sm text-gray-400 ">Work</p>
          <p className="mt-2 text-sm text-gray-400 ">Latest News</p>
          <p className="mt-2 text-sm text-gray-400 ">Careers</p>
          </div>
          <div>
          <h2 className="font-extrabold text-2xl text-gray-500 mb-4 ">Product</h2>
          <p className="mt-2 text-sm text-gray-400 ">Prototype</p>
          <p className="mt-2 text-sm text-gray-400 ">Plans & Pricing</p>
          <p className="mt-2 text-sm text-gray-400 ">Customers</p>
          <p className="mt-2 text-sm text-gray-400 ">Integrations</p>
          </div>
          <div>
          <h2 className="font-extrabold text-2xl text-gray-500 mb-4 ">Support</h2>
          <p className="mt-2 text-sm text-gray-400 ">Help Desk</p>
          <p className="mt-2 text-sm text-gray-400 ">Sales</p>
          <p className="mt-2 text-sm text-gray-400 ">Become a Partner</p>
          <p className="mt-2 text-sm text-gray-400 ">Developers</p>
          </div>
        </div>
        
        <div>
          <h2 className="font-extrabold text-3xl text-gray-500 mb-4 ">Contact</h2>
          <p className="mt-2 text-sm text-gray-400 ">524 Broadway , NYC +1 777 - 978 - 5570</p>
        </div>
      </div>

      <div className="pt-5 text-sm text-gray-400 flex justify-between items-center">
        <p>© 2023 Job Hub Inc. All rights reserved.</p>
        <p>Powered by Jo Hub</p>
      </div>
    </footer>
  );
};

export default Footer;
