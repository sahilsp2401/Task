import React from "react";
import {motion} from "framer-motion";

const Footer = () => {
  return (
    <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:200}} transition={{duration:1,delay:0}}>
      <div className="flex mt-10">
        <img
          className="w-36 ml-24 pt-6 pl-6 pb-6"
          src="https://preccelerator.com/wp-content/uploads/2023/09/APO_Logo_Black_P1R1@2x.png"
          alt=""
        />
        <ul className="flex justify-end ml-auto mr-24 space-x-10 mt-7">
          <li>
            <i className="fa-brands fa-linkedin fa-xl "></i>
          </li>
          <li>
            <i className="fa-brands fa-youtube fa-xl"></i>
          </li>
          <li>
            <i className="fa-brands fa-tiktok fa-xl"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram fa-xl"></i>
          </li>
          <li>
            <i className="fa-brands fa-x-twitter fa-xl"></i>
          </li>
          <li>
            <i className="fa-brands fa-facebook fa-xl"></i>
          </li>
        </ul>
      </div>
      <div className="flex ml-32 mr-20">
        <ul className="flex-col w-5/6 space-y-5">
          <span className="text-blue-700 text-xl">Platform</span>
          <li className="mt-5">Platform Overview</li>
          <li>Living Data Network</li>
          <li>Apollo AI</li>
          <li>Integrations</li>
          <li>Security</li>
        </ul>
        <ul className="flex-col w-5/6 space-y-5">
          <span className="text-blue-700 text-xl">Use Cases</span>
          <li className="mt-5">Contact & Account Search</li>
          <li>Scores & Signals</li>
          <li>Inbound Optimization</li>
          <li>Sales Engagement</li>
          <li>Meetings</li>
          <li>Deal Management</li>
          <li>Conversation Intelligence</li>
          <li>Sales Analytics</li>
          <li>Sales Coaching</li>
          <li>Workflow Engine</li>
          <li>CRM Enrichment & Cleanse</li>
        </ul>
        <ul className="flex-col w-5/6 space-y-5">
          <span className="text-blue-700 text-xl">Teams</span>
          <li className="mt-5">Sales Leaders</li>
          <li>Account Executives</li>
          <li>Sales Development</li>
          <li>Founders</li>
          <li>Marketing</li>
          <li>Revenue Operations</li>
        </ul>
        <ul className="flex-col w-5/6 space-y-5">
          <span className="text-blue-700 text-xl">Resources</span>
          <li className="mt-5">Apollo Academy</li>
          <li>Magazine</li>
          <li>Knowledge Base ↗</li>
          <li>Webinars</li>
          <li>Success Stories</li>
          <li>Privacy Center</li>
          <li>API Docs ↗</li>
          <li>Join Our Community ↗</li>
        </ul>
        <ul className="flex-col w-5/6 space-y-5">
          <span className="text-blue-700 text-xl">Company</span>
          <li className="mt-5">Careers</li>
          <li>Customer Reviews</li>
          <li>Contact Us & Sales</li>
        </ul>
        <ul className="flex-col w-5/6 space-y-5">
          <span className="text-blue-700 text-xl">Prospect on LinkedIn</span>
          <li className="mt-5">
            Gather verified email addresses & phone numbers directly from
            LinkedIn, reach out, and see when they open your emails.
          </li>
          <li>
            <button className="border-2 border-yellow-500 rounded-md p-2 text-sm">
              Apollo Chrome Extension
            </button>
          </li>
        </ul>
      </div>
      <hr className="w-4/5 ml-44 border-1 border-gray-300 mt-16" />
      <div className="flex justify-end mr-20 ">
        <ul className="flex space-x-5 text-lg p-3">
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Don't Sell My Info</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Footer;
