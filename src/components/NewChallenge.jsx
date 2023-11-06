import { useContext, useRef, useState } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { ChallengesContext } from "../store/challenges-context.jsx";
import Modal from "./Modal.jsx";
import images from "../assets/images.js";

export default function NewChallenge({ onDone }) {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  const [scope, animate] = useAnimate(); //first element is ref and second one is a function

  const [selectedImage, setSelectedImage] = useState(null);
  const { addChallenge } = useContext(ChallengesContext);

  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const challenge = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage,
    };

    if (
      !challenge.title.trim() ||
      !challenge.description.trim() ||
      !challenge.deadline.trim() ||
      !challenge.image
    ) {
      animate(
        "input, textarea", //effected html
        { x: [-10, 0, 10, 0] }, //animation
        { type: "spring", duration: 0.2, delay: stagger(0.05) } // transition
      );
      return;
    }

    onDone();
    addChallenge(challenge);
  }

  return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={handleSubmit} ref={scope}>
        {/*if we don't pass scope ref, the animation doesn't work */}
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>
        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>
        <motion.ul
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          id="new-challenge-images"
        >
          {images.map((image) => (
            <motion.li
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: [0.8, 1.5, 1.0] }, // scale: [0.8, 1.3, 1.0] the use of array here is similar to @keyframe
              }}
              // initial="hidden"
              // animate="visible"
              key={image.alt}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? "selected" : undefined}
            >
              <img {...image} />
            </motion.li>
          ))}
        </motion.ul>
        <p className="new-challenge-actions">
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button>Add Challenge</button>
        </p>
      </form>
    </Modal>
  );
}
