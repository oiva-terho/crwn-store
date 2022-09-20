import { useState } from "react";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { Button } from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";

import "./sign-in.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [logError, setLogError] = useState("");
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      setLogError(error.code);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    setLogError(null);
  };

  return (
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
        />
        {logError === "auth/user-not-found" && (
          <span className="error">No user associated with this email</span>
        )}
        <FormInput
          label="Password"
          required
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
        />
        {logError === "auth/wrong-password" && (
          <span className="error">Incorrect password</span>
        )}
        <div className="sign-in__buttons">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
