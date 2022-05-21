import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
  font-family: sans-serif;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const Image = styled.img`
  padding: 1rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin: .5rem 0;
  background: ${props => props.index % 2 === 0 ? "mediumseagreen" : "#b3b3b3"};
  color: #fff;
  padding: .5rem;
`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: papayawhip;
  padding: .5rem 0;
  color: tomato;
  text-decoration: none;
  border: 2px solid tomato;
`;