import React from "react";
import { motion } from "framer-motion";
import "./InvitationDetails.css";

function InvitationDetails() {
  return (
    <motion.div
      className="details"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="details-title"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        Birthday Bash!
      </motion.h2>
      <p>
        Join us to celebrate Hari's birthday on
        <br />
        <strong>Saturday, 6th November, 7 PM</strong>
        <br />
        at <em>55 tvk Avenue, Grand Park City</em>.
      </p>
      <motion.div
        className="balloons"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        🎊🎈🎊
      </motion.div>
    </motion.div>
  );
}

export default InvitationDetails;
