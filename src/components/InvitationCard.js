import React from "react";
import { motion, AnimatePresence } from 'framer-motion';
import "./InvitationCard.css";

function InvitationCard({ onOpen }) {
  return (
    <motion.div
      className="card"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="card-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        You're Invited!
      </motion.h1>
      <motion.button
        className="open-button"
        onClick={onOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Open Invitation
      </motion.button>
    </motion.div>
  );
}

export default InvitationCard;
