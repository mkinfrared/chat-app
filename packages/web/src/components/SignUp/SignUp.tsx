import React from "react";
import { userSchema } from "@chat-app/common";
import { Field, FormikProps, withFormik } from "formik";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import {
  FormValues,
  SignUpProps,
  SignUpState
} from "components/SignUp/SignUp.type";
import css from "components/SignUp/SignUp.module.scss";
import InputField from "shared/InputField";
import api from "utils/api";

class SignUp extends React.Component<
  FormikProps<FormValues> & SignUpProps,
  SignUpState
> {
  state: SignUpState = {
    showPassword: false
  };

  getPasswordAdornment = () => {
    const { showPassword } = this.state;

    return (
      <InputAdornment position="end">
        <IconButton edge="end" onClick={this.togglePasswordVisibility}>
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    );
  };

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }));
  };

  render() {
    const { showPassword } = this.state;
    const { handleSubmit } = this.props;

    return (
      <form className={css.SignUp} onSubmit={handleSubmit}>
        <Paper className={css.paper} elevation={4}>
          <Typography variant="h4">Register</Typography>
          <div className={css.inputFields}>
            <Field
              className={css.input}
              variant="outlined"
              autoComplete="off"
              label="Email"
              name="email"
              component={InputField}
              fullWidth
            />
            <Field
              className={css.input}
              variant="outlined"
              autoComplete="off"
              label="Username"
              name="username"
              placeholder="Username"
              component={InputField}
              fullWidth
            />
            <Field
              className={css.input}
              variant="outlined"
              autoComplete="off"
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              InputProps={{ endAdornment: this.getPasswordAdornment() }}
              component={InputField}
              fullWidth
            />
            <Field
              className={css.input}
              variant="outlined"
              autoComplete="off"
              label="Confirm"
              name="passwordConfirmation"
              type={showPassword ? "text" : "password"}
              InputProps={{ endAdornment: this.getPasswordAdornment() }}
              component={InputField}
              fullWidth
            />
          </div>
          <Button type="submit">Sign Up</Button>
        </Paper>
      </form>
    );
  }
}

const mapPropsToValues = () => ({
  email: "",
  username: "",
  password: "",
  passwordConfirmation: ""
});

export default withFormik<SignUpProps, FormValues>({
  validationSchema: userSchema,
  mapPropsToValues,
  handleSubmit: async (values, { setErrors, setSubmitting }) => {
    try {
      await api.post("/auth/register", values);
    } catch (e) {
      setErrors(e.response.data);
    }
  }
})(SignUp);

export { SignUp };
