import { useState } from "react";

const AddTaskFrom = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a Task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-wrapper">
        <label>Title : </label>
        <input
          type="text"
          placeholder="Task Title"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <label>Day & Time : </label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <label>Set Reminder : </label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <br />
      <input type="submit" value="Save Task" className="saveTaskBtn" />

      {/* <div  className="input-wrapper">
             <label>Description : </label>
            <textarea></textarea>
        </div> */}
    </form>
  );
};

export default AddTaskFrom;
