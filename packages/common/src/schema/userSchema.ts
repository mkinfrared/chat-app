import * as yup from "yup";

// const passwordVaildation = new RegExp(
//   "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
// );

const passwordValidation = {
  upperCase: new RegExp("[A-Z]"),
  lowerCase: new RegExp("[a-z]"),
  number: new RegExp("[0-9]"),
  special: new RegExp("[#?!@$%^&*-]")
};

export const userSchema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email(),
  username: yup
    .string()
    .required()
    .min(3)
    .max(15),
  password: yup
    .string()
    .required()
    .min(6)
    .matches(
      passwordValidation.upperCase,
      "password must contain at least one upper case letter"
    )
    .matches(
      passwordValidation.lowerCase,
      "password must contain at least one lower case letter"
    )
    .matches(
      passwordValidation.number,
      "password must contain at least one number"
    )
    .matches(
      passwordValidation.special,
      "password must contain at least one special character"
    ),
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "passwords should match")
});
