import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import { Button } from '../button/button.component';
import { FormInput } from "../form-input/form-input.component";
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [regError, setRegError] = useState('');
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setRegError('short-pass');
      return;
    } else if (password !== confirmPassword) {
      setRegError('pass-do-not-match');
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
      setRegError(error.code);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    setRegError(null);
  };

  return (
    <div className="sign-up">
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
        {regError === 'pass-do-not-match' ? <span className="error">Passwords do not match</span> : null}
        {regError === 'short-pass' ? <span className="error">Password should be 6 characters or longer</span> : null}
        {regError === 'auth/email-already-in-use' ? <span className="error">Cannot create user. Email already in use</span> : null}
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
