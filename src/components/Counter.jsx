import PropTypes from "prop-types";

Counter.propTypes = {
  counterValue: PropTypes.number,
};
export default function Counter({ counterValue }) {
  return <h4>{counterValue}</h4>;
}
