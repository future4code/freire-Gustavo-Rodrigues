import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://pbs.twimg.com/media/E0FE3M7WQAom8M4?format=jpg&name=small'}
          fotoPost={'https://s2.glbimg.com/hmPuJN2Z2Vnpd7cG0EVOw9aAKJ4=/e.glbimg.com/og/ed/f/original/2020/08/14/annabelle-doll-boneca-filme.jpg'}
        />
        <Post
          nomeUsuario={'Adriana'}
          fotoUsuario={'https://fr.web.img5.acsta.net/pictures/19/07/23/09/44/4301497.jpg'}
          fotoPost={'https://i.ytimg.com/vi/0GVwsLuP5fc/maxresdefault.jpg'}
        />
        <Post
          nomeUsuario={'Pablo'}
          fotoUsuario={'https://i.scdn.co/image/ab6761610000e5eb28fdb716b791600c2959e1f8'}
          fotoPost={'https://img.freepik.com/fotos-gratis/gato-na-cesta_1339-803.jpg?t=st=1654727154~exp=1654727754~hmac=923056f293c30ca06b84fd3d5be145bdcd4be7c81f95429b8685e249659fc548&w=1380'}
        />
      </MainContainer>
    );
  }
}

export default App;
