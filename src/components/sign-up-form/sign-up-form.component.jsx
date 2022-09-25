import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import { Button } from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";
import { SignInContainer, ErrorMessage } from '../sign-in/sign-in.styles';

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [regError, setRegError] = useState("");
  const errMessage = {
    short: "Password should be 6 characters or longer",
    noMatch: "Passwords do not match",
    exist: "Cannot create user. Email already in use",
    else: "Something went wrong. Try again later.",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setRegError(errMessage.short);
      return;
    } else if (password !== confirmPassword) {
      setRegError(errMessage.noMatch);
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      setRegError(
        error.code === "auth/email-already-in-use"
          ? errMessage.exist
          : errMessage.else
      );
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    setRegError(null);
  };

  return (
    <SignInContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          name="displayName"
          type="text"
          onChange={handleChange}
          value={displayName}
        />
        <FormInput
          label="Email"
          required
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          required
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
        />
        <FormInput
          label="Confirm password"
          required
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
        />
        {regError !== null && <ErrorMessage>{regError}</ErrorMessage>}
        <Button type="submit">Sign Up</Button>
      </form>
    </SignInContainer>
  );
};
