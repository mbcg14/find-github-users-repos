import { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import githubIconUrl from '../../assets/github-icon.svg';

function Home(props) {
  const history = useNavigate();
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => (
          repositoriesName.push(repository.name)
        ));
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        localStorage.setItem('user', user);
        setError(false);
        history('/repositories');
      })
      .catch((err) => {
        setError(true);
      });
  }

  return (
    <S.HomeContainer>
      <S.Title>
        <S.Image src={githubIconUrl} alt="github-icon" />
        <h1>Find Github Users Repos'</h1>
      </S.Title>
      <S.Name>
        User you're searching for: <S.NameColor>{user}</S.NameColor>
      </S.Name>
      <S.Content>
        <S.Input className="user-input" placeholder="type username" value={user} onChange={e => setUser(e.target.value)}></S.Input>
        <S.Button type="button" onClick={handleSearch}>Search</S.Button>
      </S.Content>
      { error ? <S.ErrorMsg>Something went wrong. Please try again.</S.ErrorMsg> : '' }
    </S.HomeContainer>
  );
}

export default Home;