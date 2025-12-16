import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(0.6rem);
  -webkit-backdrop-filter: blur(0.6rem);
  
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.25rem;
  
  margin: 1.25rem 0;
  padding: 1.5rem;
  
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-0.125rem);
    box-shadow: 0 0.6rem 1.25rem -0.6rem rgba(0,0,0,0.5);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
  }

  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
  }

  hr {
    display: none;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  a, button.remove {
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  a {
    color: #38bdf8; 
  }
  a:hover {
    background: rgba(56, 189, 248, 0.1);
    color: #7dd3fc;
  }

  button.remove {
    color: #f43f5e;
    margin: 0;
  }
  button.remove:hover {
    background: rgba(244, 63, 94, 0.1);
    color: #fb7185;
  }
`;