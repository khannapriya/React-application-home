import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getFullName } from "../rootSlice";

export const Step1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const fullName = useSelector((state) => state.fullName);
  console.log(fullName, "ffffssd");
  const { register, handleSubmit } = useForm({ defaultValues: { fullName } });

  const onSubmit = (data) => {
    dispatch(getFullName(data.fullName));
    history.push("./Step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          ref={register}
          {...register("fullName", { required: true })}
        />
      </div>
      <button>Next</button>
    </form>
  );
};
