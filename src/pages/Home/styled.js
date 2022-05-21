import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 95vh;
  font-family: sans-serif;
  border: 5px solid tomato;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
`;

export const Image = styled.img`
  padding: 1rem;
`;

export const Name = styled.h4`
  margin-top: 7rem;
`;

export const NameColor = styled.span`
  text-decoration: underline;
  color: mediumseagreen;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 2rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 2rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.85rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`