import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { Container, Content } from './styles';

interface SignInProps {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SignIn({ setAuthenticated }: SignInProps) {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleSignIn() {
    if (!user) {
      await signInWithGoogle();
    }
    setAuthenticated(true);
    history.push('/dashboard');
  }

  return (
    <Container>
      <Content>
        <h1>notations<span>.jf</span></h1>
        <button onClick={handleSignIn}>
          <FaGoogle />
          Login with Google!
        </button>
        <p>Made by João Freitas with 🖤!</p>
      </Content>
    </Container>
  );
}