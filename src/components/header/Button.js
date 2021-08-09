import { MdAddCircle } from "react-icons/md";

const Button = ({ buttonLabel, hideShowForm }) => {
  return (
    <button onClick={hideShowForm} className="addTaskBtn">
      <span className="buttonIcon">
        <MdAddCircle />
      </span>
      {buttonLabel}
    </button>
  );
};

export default Button;
