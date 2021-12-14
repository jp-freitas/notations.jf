import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.main`
  max-width: 75rem;
  margin: 0 auto;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;

  @media (min-width: 1280px) and (max-width: 1600px) {
    max-width: 75rem;
  }

  @media (min-width: 470px) and (max-width: 1200px) {
    max-width: 75rem;
  }

  @media (min-width: 300px) and (max-width: 470px) {
    max-width: 25.9rem;
    align-items: center;
    flex-direction: column;
  }
`;