import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Container, Content } from './styles';

export function Header() {
  const { signOut } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await signOut();
    history.push('/');
  }

  return (
    <Container>
      <Content>
        <h1>notations<span>.jf</span></h1>
        <div className='button-group'>
          <button type="button">
            Nova Anotação
          </button>
          <button type='button' onClick={handleLogout}>
            Logout
          </button>
        </div>
      </Content>
    </Container>
  );
}