import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";

const Header = ({ heading, handleClick }) => {
  const history = useHistory();

  const [isShowForm, setIsShowForm] = useState(false);

  const hideShowForm = () => {
    isShowForm ? history.push("/") : history.push("/form");
    setIsShowForm(!isShowForm);
    handleClick(isShowForm);
  };

  return (
    <>
      <h1 className="title">Task Tracker</h1>

      <div className="button-wrapper">
        <h3>{heading}</h3>
        {isShowForm ? (
          <Button
            buttonLabel="Back"
            handleClick={handleClick}
            hideShowForm={hideShowForm}
          />
        ) : (
          <Button
            buttonLabel="Add Task"
            handleClick={handleClick}
            hideShowForm={hideShowForm}
          />
        )}
      </div>
    </>
  );
};

export default Header;
