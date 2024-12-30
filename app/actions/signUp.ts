"use server";

import { SignUpFormData, signUpSchema } from "../../schemas/signUpSchema"; // Zod-Schema importieren

export async function signUp(data: SignUpFormData) {
  console.log("Sign-up data:", data);

  // Server side Validation with Zod
  const result = signUpSchema.safeParse(data);

  if (!result.success) {
    console.log("Validation failed:", result.error.format());
    throw new Error("Validation failed");
  }

  // Mocking a sign-up
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("Sign-up successful!");

  return { message: "Sign-up successful!" };
}
