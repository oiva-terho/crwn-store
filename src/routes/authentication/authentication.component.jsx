import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';
import { SignInForm } from '../../components/sign-in/sign-in.component';
import { SignUpForm } from '../../components/sign-up-form/sign-up-form.component';
import { Container } from './authentication.styles';

export const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Container>
      <SignInForm />
      <SignUpForm />
      {currentUser ? <Navigate to='/' /> : null}
    </Container>
  );
};
