import styled from 'styled-components';

export const Container = styled.header`
  background: var(--text-body);

  @media (min-width: 300px) and (max-width: 380px) {
    max-width: 27rem;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 2rem 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (min-width: 1280px) and (max-width: 1600px) {
    max-width: 75rem;

    .button-group {
      > button {
        margin-left: 0.5rem;
      }
    }
  }

  @media (min-width: 470px) and (max-width: 1200px) {
    max-width: 75rem;

    .button-group {
      > button {
        margin-left: 0.5rem;
      }
    }
  }

  @media (min-width: 300px) and (max-width: 470px) {
    max-width: 25.9rem;
    align-items: center;
    flex-direction: column;

    .button-group {
      display: flex;
      flex-direction: column;
      align-items: center;

      > button {
        margin-top: 0.6rem;
      }

      button {
        width: 19rem;
      }
    }
  }

  h1 {
    color: var(--shape);
  }

  span {
    color: var(--blue);
  }

  .button-group {
    button {
      font-size: 1rem;
      color: var(--shape);
      background: var(--text-title);
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.6);
      }
    }
  }
`;