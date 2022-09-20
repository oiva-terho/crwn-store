import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";


import { SignInForm } from "../../components/sign-in/sign-in.component";
import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";
import './authentication.styles.scss';

export const Authentication = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="authentication">
      <SignInForm />
      <SignUpForm />
      {currentUser ? <Navigate to="/" /> : null}
    </div>
  );
};
