import { AnimatedText } from "../../framer/AnimatedText";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const transitionToGallery = () => {
    setTimeout(() => {
      navigate("/gallery"); // Redirect to the Gallery component after 2 seconds
    }, 1700);
  };

  const divStyles = {
    backgroundImage: "url('/pictures/bg.png')",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen px-2 text-4xl bg-center bg-contain object-fit sm:text-7xl md:text-8xl lg:text-9xl"
      style={divStyles}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onAnimationComplete={transitionToGallery}
        className="z-20 p-10 border-2 border-dashed"
      >
        <AnimatedText text="image gallery" el="h2" />
      </motion.div>
    </div>
  );
};

export default Home;
