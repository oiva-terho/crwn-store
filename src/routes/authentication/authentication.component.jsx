import { SignInForm } from "../../components/sign-in/sign-in.component";
import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";
import './authentication.styles.scss';

export const Authentication = () => {
  return (
    <div className="authentication">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
