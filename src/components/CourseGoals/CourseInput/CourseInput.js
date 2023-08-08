import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import { styled } from "styled-components";
const FormControl=styled.div`
  margin: 0.5rem 0;
& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& p {
  color: red;
  font-size: 12px;
  visibility: hidden;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
&.invalid input {
  border-color: red;
  color: rgb(255, 131, 131);
}
&.invalid label {
  color: red;
}
&.invalid p{
  visibility: visible;
}

`
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsInvalid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsInvalid(true);
    }
    setEnteredValue(event.target.value);
    
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.length === 0) {
      setIsInvalid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      
      <FormControl className={ !isValid && "invalid" }>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
     
        <p className={!isValid && 'invalid'}>* This field is Required</p> 
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
