import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 36rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--text-body);
  border-radius: 0.5rem;
  
  h1 {
    color: var(--shape);
  }

  span {
    color: var(--blue);
  }

  button {
    width: 15rem;
    margin: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: var(--shape);
    background: var(--text-title);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;

    svg {
      margin-right: 1rem;
      color: var(--shape);
    }

    &:hover {
      filter: brightness(0.6);
    }
  }
  
  p {
    color: var(--shape);
  }
`;