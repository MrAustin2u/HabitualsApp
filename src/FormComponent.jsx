import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "regenerator-runtime/runtime";
import Button from "@material-ui/core/Button";
import {
  ButtonGroup,
  makeStyles,
  ButtonBase,
  Typography
} from "@material-ui/core";

// useEffect(() => {
//   fetch("/habits", {
//     method: "GET"
//   })
//     .then(res => res.json())
//     .then(habitsData => {
//       //console.log(habitsData);
//       const items = habitsData;
//       setHabits(items);
//     });
// }, []);

export default function UserForm(props) {
  //deconstructing id from Routes param object
  const {
    match: {
      params: { id }
    }
  } = props;

  const { register, handleSubmit, errors } = useForm();
  const handleOnSubmit = data => {
    console.log(data, "This is data coming from the form");
    fetch("/user-input", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(newData => {
        console.log("Success:", newData);
        window.location.href = `http://localhost:8080/habit/${id}/input/cal`;
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div>
        <input
          type="number"
          placeholder="Habit Nickname"
          name="usersId"
          ref={register}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Habits List"
          name="habitsId"
          ref={register({ maxLength: 80 })}
          value={id}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="repeat Every"
          name="repeatEvery"
          ref={register({ maxLength: 80 })}
        />
      </div>
      <div>
        <select name="repeatFrequency" ref={register}>
          <option value="hour">hour</option>
          <option value="day">day</option>
          <option value="week">week</option>
          <option value="month">month</option>
        </select>
      </div>
      <div>
        <input type="text" placeholder="Notes" name="memo" ref={register} />
      </div>
      <div></div>
      <select name="routineId" ref={register}>
        <option value="1"> 1</option>
        <option value=" 2"> 2</option>
        <option value=" 3"> 3</option>
        <option value=" 4"> 4</option>
        <option value=" 5"> 5</option>
        <option value=" 6"> 6</option>
        <option value=" 7"> 7</option>
        <option value=" 8"> 8</option>
        <option value=" 9"> 9</option>
        <option value=" 10"> 10</option>
      </select>
      <input
        type="text"
        placeholder="How Often?"
        name="repeatFrequency"
        ref={register}
      />
      <input
        type="dateTime"
        placeholder="startDate"
        name="startDate"
        ref={register}
      />
      <input
        type="dateTime"
        placeholder="endDate"
        name="endDate"
        ref={register}
      />
      {/* <input type="submit" placeholder="Generate Calendar" /> */}
      <Button
        component={Link}
        to={`/habit/${id}/input/cal`}
        varient="contained"
        userId={register.usersId}
      >
        Generate Calendar
      </Button>
    </form>
  );
}

// component={Link}
// to={`/habit/${id}/input/cal`}
// varient="contained"
