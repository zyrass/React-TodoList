import { useContext } from "react";
import themeContext from "../context/theme";

function Button({ text, className, ...props }) {
  const theme = useContext(themeContext);
  console.log(theme);

  return (
    <button
      {...props}
      className={`btn btn-${theme} ${className ? className : ""}`}
    >
      {text}
    </button>
  );
}

export default Button;
