import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;

  .label-full {
    width: 80%;
  }

  .control {
    display: flex;
    align-items: center;

    .radio {
      margin-right: 1rem;
    }

    .value-01 {
      max-width: 80%;
    }

    .value-02 {
      max-width: 40%;
    }

    .value-03 {
      max-width: 60%;
    }
  }
`;
