import styled from "styled-components";

export const InputContainer = styled.div`
  width: 80%;
  height: 3.8rem;
  margin: 1.25rem;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  
  backdrop-filter: blur(0.6rem);
  -webkit-backdrop-filter: blur(0.6rem);

  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:focus-within {
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 1.25rem rgba(139, 92, 246, 0.3);
    background: rgba(255, 255, 255, 0.1);
  }

  input {
    background: transparent;
    border: 0;
    width: 100%;
    height: 100%;
    padding: 0 1.5rem;
    color: #fff;
    font-size: 1.2rem;
    outline: none;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }
`