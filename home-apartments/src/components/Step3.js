import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPhoneNumber } from "../rootSlice";

export const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const phoneNumber = useSelector((state) => state.phoneNumber);
  const { register, handleSubmit } = useForm({
    defaultValues: { phoneNumber },
  });

  const onSubmit = (data) => {
    dispatch(getPhoneNumber(data.phoneNumber));
    history.push("./Step4");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="phoneNumber">PhoneNumber</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          {...register("phoneNumber", { required: true })}
        />
      </div>
      <button>Next</button>
    </form>
  );
};
