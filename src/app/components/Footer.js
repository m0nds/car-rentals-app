"use client";
import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import Copyright from "./Copyright";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            {/* logo */}
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <Image
                src={"/assets/icons/logo.svg"}
                width={200}
                height={200}
                alt=""
              />
            </Link>
            {/* text */}
            <div className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            {/* phone & email */}
            <div className="flex flex-col gap-y-4 font-semibold">
              {/* phone */}
              <div className="flex items-center gap-x-[10px]">
                <FaPhone /> <div>+(234)123-456-7890</div>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope /> <div>carland@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">New York</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div>
          {/* working hours */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <div className="flex flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">🕒 Mon - Fri:</div>
                <div className="font-semibold">9am to 5pm</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">🕒 Sat:</div>
                <div className="font-semibold">11am to 4pm</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">🕒 Sun:</div>
                <div className="font-semibold">closed</div>
              </div>
            </div>
          </div>
          {/* newsletter */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Newsletter</h3>
            <div className="mb-9 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            {/* form */}
            <form className="flex gap-x-2 h-14">
              <input
                type="email"
                placeholder="Your email address"
                className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent"
              />
              <button type="submit" className="btn btn-sm btn-accent w-24">
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright/>
    </footer>
  );
};

export default Footer;
