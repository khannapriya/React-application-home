import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getEmail } from "../rootSlice";

export const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useSelector((state) => state.email);
  const { register, handleSubmit } = useForm({ defaultValues: { email } });

  const onSubmit = (data) => {
    dispatch(getEmail(data.email));
    history.push("./Step3");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          {...register("email", { required: true })}
        />
      </div>
      <button>Next</button>
    </form>
  );
};
