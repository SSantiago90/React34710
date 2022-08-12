import "./button.css";

function Button({ text, type, onTouch }) {

  const btnstyle = {
    backgroundColor: type === "alert" ? "red" : "green",
  };

  return (
    <button onClick={onTouch} style={btnstyle} className="btn">
      {text}
    </button>
  );
}

export default Button;
