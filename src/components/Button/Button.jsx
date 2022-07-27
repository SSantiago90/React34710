import "./button.css";

function Button({ text, type }) {
  const btnstyle = {
    backgroundColor: type === "alert" ? "red" : "green",
  };

  return (
    <button style={btnstyle} className="btn">
      {text}
    </button>
  );
}

export default Button;
