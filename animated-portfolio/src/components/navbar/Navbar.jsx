import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Charles Tabot
        </motion.span>
        <div className="social">
          <a href="https://web.facebook.com/CharlesBessongTabot/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/tabotcharles/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@tabotcharlesbessong3756">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://dribbble.com/CharlieXCC">
            <img src="/dribbble.png" alt="" />
          </a>
          <a href="https://x.com/CharlesTabot">
            <img src="/x.png" alt="" />
          </a>
          <a href="https://github.com/TabotCharlesBessong">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://github.com/TabotCharlesBessong">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
