import "./button.css";

function ButtonChildren({ children, type }) {
  const btnstyle = {
    backgroundColor: type === "alert" ? "red" : "green",
  };

  return (
    <button style={btnstyle} className="btn">
      {children}
    </button>
  );
}

export default ButtonChildren;
