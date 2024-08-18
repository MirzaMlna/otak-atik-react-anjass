import PropTypes from "prop-types";

HeroSection.propTypes = {
  lightTheme: PropTypes.bool,
};

export default function HeroSection({ lightTheme }) {
  return (
    <div
      className={`d-flex justify-content-center align-items-center vh-100 ${
        lightTheme ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <h1>HeroSection</h1>
    </div>
  );
}
