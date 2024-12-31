"use client";

import { SignUpFormData, signUpSchema } from "@/schemas/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUp } from "../actions/signUp";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    try {
      const response = await signUp(data);

      alert(response.message);
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("Error signing up");
    }
  };

  const getValidationState = (fieldName: keyof SignUpFormData) => {
    if (errors[fieldName]) return true;
    if (touchedFields[fieldName]) return false;
    return undefined;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Gender */}
      <section>
        <label>Gender</label>
        <div>
          {signUpSchema._def.schema.shape.gender.options.map((gender) => (
            <span
              key={gender}
              style={{
                marginRight: "1rem",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <input
                type="radio"
                id={gender}
                value={gender}
                {...register("gender")}
              />
              <label htmlFor={gender}>
                {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </label>
            </span>
          ))}
        </div>
        {errors.gender && (
          <small className="error">{errors.gender.message}</small>
        )}
      </section>

      {/* First Name */}
      <section className="grid">
        <label>
          First Name
          <input
            aria-invalid={getValidationState("firstName")}
            type="text"
            {...register("firstName")}
          />
          {errors.firstName && <small>{errors.firstName.message}</small>}
        </label>

        {/* Last Name */}
        <label>
          Last Name
          <input
            aria-invalid={getValidationState("lastName")}
            type="text"
            {...register("lastName")}
          />
          {errors.lastName && <small>{errors.lastName.message}</small>}
        </label>
      </section>

      {/* Email */}
      <section>
        <label>
          Email
          <input
            aria-invalid={getValidationState("email")}
            type="email"
            {...register("email")}
          />
          {errors.email && <small>{errors.email.message}</small>}
        </label>
      </section>

      {/* Phone */}
      <section>
        <label>
          Phone
          <input
            aria-invalid={getValidationState("phone")}
            type="tel"
            {...register("phone")}
          />
          {errors.phone && <small>{errors.phone.message}</small>}
        </label>
      </section>

      {/* Street */}
      <section className="grid-3-to-1">
        <label>
          Street
          <input
            aria-invalid={getValidationState("street")}
            type="text"
            {...register("street")}
          />
          {errors.street && <small>{errors.street.message}</small>}
        </label>

        {/* House Number */}
        <label>
          House Number
          <input
            aria-invalid={getValidationState("houseNumber")}
            type="number"
            {...register("houseNumber")}
          />
          {errors.houseNumber && <small>{errors.houseNumber.message}</small>}
        </label>
      </section>

      {/* City */}
      <section className="grid">
        <label>
          City
          <input
            aria-invalid={getValidationState("city")}
            type="text"
            {...register("city")}
          />
          {errors.city && <small>{errors.city.message}</small>}
        </label>

        {/* Zip */}
        <label>
          Zip
          <input
            aria-invalid={getValidationState("zip")}
            type="text"
            {...register("zip")}
          />
          {errors.zip && <small>{errors.zip.message}</small>}
        </label>
      </section>

      {/* State */}
      <section>
        <label>
          State
          <input
            aria-invalid={getValidationState("state")}
            type="text"
            {...register("state")}
          />
          {errors.state && <small>{errors.state.message}</small>}
        </label>
      </section>

      {/* Password */}
      <section className="grid">
        <label>
          Password
          <input
            aria-invalid={getValidationState("password")}
            type="password"
            {...register("password")}
          />
          {errors.password && <small>{errors.password.message}</small>}
        </label>

        {/* Confirm Password */}
        <label>
          Confirm Password
          <input
            aria-invalid={getValidationState("confirmPassword")}
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <small>
              {(errors.confirmPassword as { message: string }).message}
            </small>
          )}
        </label>
      </section>

      {/* Agree */}
      <section className="">
        <label>
          <input type="checkbox" role="switch" {...register("agree")} /> I agree
          to the terms and conditions
        </label>
        {errors.agree && (
          <small className="error">{errors.agree.message}</small>
        )}
      </section>

      <button aria-busy={isSubmitting} type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
}
