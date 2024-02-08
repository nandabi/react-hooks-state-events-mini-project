import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: "",
    category: "",
  })
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData,[name]: value})
  }
  const handleSumbit = (event) => {
    event.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({text: "",category: ""});
  }


  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
