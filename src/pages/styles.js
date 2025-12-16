import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .app__container {
    width: 80%;
    margin-top: 1.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
    .app__container {
      width: 90%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
