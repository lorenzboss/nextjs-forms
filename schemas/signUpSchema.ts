import { z } from "zod";

export const signUpSchema = z
  .object({
    gender: z.enum(["male", "female", "other"], {
      required_error: "Gender is required",
      invalid_type_error: "You have to select a gender!",
    }),
    firstName: z
      .string()
      .nonempty("First name is required")
      .min(3, "First name must be at least 3 characters")
      .max(50, "First name must be less than 50 characters"),
    lastName: z
      .string()
      .nonempty("Last Name is required")
      .min(3, "Last Name must be at least 3 characters")
      .max(50, "Last name must be less than 50 characters"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address")
      .max(100, "Email must be less than 100 characters"),
    phone: z
      .string()
      .nonempty("Phone is required")
      .min(10, "Phone must be at least 10 digits long")
      .max(15, "Phone must be less than 15 digits long"),
    street: z
      .string()
      .min(1, "Street is required")
      .max(100, "Street name must be less than 100 characters"),
    houseNumber: z
      .string()
      .nonempty("House number is required")
      .transform((val) => parseInt(val, 10)) // String to Number
      .pipe(
        z
          .number()
          .min(1, "House number must be at least 1")
          .max(9999, "House number must be less than 9999")
      )
      .transform((val) => val.toString()), // Number back to String for Server Side Validation
    city: z
      .string()
      .min(1, "City is required")
      .max(50, "City name must be less than 50 characters"),
    zip: z
      .string()
      .nonempty("Zip code is required")
      .min(3, "Zip code must be at least 3 characters")
      .max(10, "Zip code must be less than 10 characters"),
    state: z
      .string()
      .min(1, "State is required")
      .max(50, "State name must be less than 50 characters"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, { message: "Password must be at least 8 characters" })
      .max(20, { message: "Password must not exceed 20 characters" }),
    confirmPassword: z.string().min(1, "Confirm password is required"),
    agree: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
