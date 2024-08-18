import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

HeroSection.propTypes = {
  lightTheme: PropTypes.bool,
};

export default function HeroSection({ lightTheme }) {
  const [isVisible, setIsVisible] = useState(false);
  const visibleHandler = () => setIsVisible(!isVisible);

  return (
    <div
      className={`d-flex justify-content-center align-items-center vh-100 ${
        lightTheme ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <div className="text-center">
        <motion.div
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>HeroSection</h1>
        </motion.div>

        <Button
          className="mt-3"
          variant={lightTheme ? "dark" : "light"}
          onClick={visibleHandler}
        >
          {isVisible ? "Hide Title" : "Show Title"}
        </Button>
      </div>
    </div>
  );
}
