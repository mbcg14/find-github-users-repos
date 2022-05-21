import { useEffect, useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import githubIconUrl from '../../assets/github-icon.svg';

export default function Repositories() {
  const [ repositories, setRepositories ] = useState([]);
  const [user, setUser] = useState('');
  let history = useNavigate();

  useEffect(() => {
    setUser(localStorage.getItem('user'));
    let repositoriesName = localStorage.getItem('repositoriesName');
    if(repositoriesName != null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      history('/');
    }
  }, [history]);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Image src={githubIconUrl} alt="github-icon" />
        <S.Title>{user}'s repos</S.Title>
      </S.TitleContainer>
      <S.List>
        { repositories.map((repository, index) => {
          return (
            <S.ListItem key={index} index={index}>Repo: {repository}</S.ListItem>
          )
        }) }
      </S.List>
      <S.LinkHome to="/">Back</S.LinkHome>
    </S.Container>
  );
}