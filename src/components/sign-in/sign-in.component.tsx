import { AuthError } from 'firebase/auth';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  googleSignInStart,
  emailSignInStart
} from '../../store/user/user.action';

import { Button, BUTTON_TYPE_CLASSES } from '../button/button.component';
import { FormInput } from '../form-input/form-input.component';

import {
  SignInContainer,
  ButtonsContainer,
  ErrorMessage
} from './sign-in.styles';

const defaultFormFields = {
  email: '',
  password: ''
};

export const SignInForm = () => {
  const dispatch = useDispatch();
  const [logError, setLogError] = useState('');
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      setLogError((error as AuthError).code);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    setLogError('');
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          required
          name='email'
          type='email'
          onChange={handleChange}
          value={email}
        />
        {logError === 'auth/user-not-found' && (
          <ErrorMessage>No user associated with this email</ErrorMessage>
        )}
        <FormInput
          label='Password'
          required
          name='password'
          type='password'
          onChange={handleChange}
          value={password}
        />
        {logError === 'auth/wrong-password' && (
          <ErrorMessage>Incorrect password</ErrorMessage>
        )}
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
