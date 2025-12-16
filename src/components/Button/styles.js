import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 30%;
  height: 3.875rem;
  margin: 1.25rem;
  border-radius: 1.875rem;

  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #fff;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`