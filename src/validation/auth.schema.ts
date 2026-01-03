import { z } from "zod"
// @ts-expect-error 3rd party package has been installed
import zxcvbn from "zxcvbn"

export const MobileSchema = z.object({
  phone: z
    .string()
    .regex(/^(\+234|0)[789]\d{9}$/, "Enter a valid Nigerian phone number"),
})

// export const PasswordSchema = z.object({
//   password: z
//     .string()
//     .min(8, "Password must be at least 8 characters"),
// })


export const PasswordSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .refine(
      (val) => zxcvbn(val).score >= 3,
      "Password is too weak"
    ),
})

export const EmailSchema = z.object({
  email: z
    .string()
    .email("Enter a valid email address"),
})