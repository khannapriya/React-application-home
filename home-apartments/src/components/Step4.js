import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSalaryRange } from "../rootSlice";

export const Step4 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const salary = useSelector((state) => state.salary);
  const { register, handleSubmit } = useForm({
    defaultValues: { salary },
  });

  const onSubmit = (data) => {
    console.log(data, "saallal");
    dispatch(getSalaryRange(data.salary));
    history.push("./summary");
  };

  const setSalary = (event) => {
    console.log(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        onChange={setSalary.bind(this)}
        {...register("salary", { required: true })}
      >
        <input type="radio" value="0 - 1.000" name="salary" /> 0 - 1.000
        <input type="radio" value="1.000 - 2.000" name="salary" /> 1.000 - 2.000
        <input type="radio" value="2.000 - 3.000" name="salary" /> 2.000 - 3.000
        <input type="radio" value="3.000 - 4.000" name="salary" /> 3.000 - 4.000
      </div>
      <button>Submit</button>
    </form>
  );
};
