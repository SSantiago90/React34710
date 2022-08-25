import "./button.css";

function Button({ text, type, onTouch, children }) {
  const btnstyle = {
    cursor: "pointer",
    margin: "5px",
    border: "none",
    padding: "8px 16px",
    backgroundColor: type === "alert" ? "#dd2240" : "#0077ee",
  };

  return (
    <button onClick={onTouch} style={btnstyle} className="btn">
      {text || children}
    </button>
  );
}

export default Button;
