import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition="hidden"
        // initial={{ opacity: 0, y: -30 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: -30 }} //to make it work we've made some changes in header.jsx
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
