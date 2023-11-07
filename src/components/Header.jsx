import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NewChallenge from "./NewChallenge.jsx";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();
  const navigate = useNavigate();

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  const navi = () => navigate(`../`);

  return (
    <>
      <AnimatePresence>
        {/* we have to use AnimatePresence in order to make the exit animation of modal works properly*/}
        {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
      </AnimatePresence>
      <header id="main-header">
        <h1>
          Your Challenges{" "}
          <motion.button
            // whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="button red"
            onClick={navi}
          >
            Home Page
          </motion.button>
        </h1>

        <motion.button
          // whileTap={{ scale: 1.2 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500 }}
          onClick={handleStartAddNewChallenge}
          className="button"
        >
          Add Challenge
        </motion.button>
      </header>
    </>
  );
}
