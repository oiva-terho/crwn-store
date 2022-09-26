import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";


import { SignInForm } from "../../components/sign-in/sign-in.component";
import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";
import { Container } from './authentication.styles';

export const Authentication = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Container>
      <SignInForm />
      <SignUpForm />
      {currentUser ? <Navigate to="/" /> : null}
    </Container>
  );
};
