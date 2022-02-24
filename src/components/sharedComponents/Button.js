import "../../style/sharedComponetsStyle/Button.css";

function Button({ title, handleClick, fullWidth }) {
  return (
    <button
      type="submit"
      className={`button ${fullWidth && "fullWidth"}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default Button;
