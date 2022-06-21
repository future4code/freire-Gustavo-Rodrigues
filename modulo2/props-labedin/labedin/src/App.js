import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaFoto from './img/MyDog.png';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={MinhaFoto}
          nome="Gustavo"
          descricao="Oi, eu sou o Gustavo. Sou o chefe dos alunos da Labenu. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/128/3301/3301707.png" 
          texto="Ver mais"
        />

        <CardPequeno 
        imagem="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"
        nome="Email: "
        endereco="Gustavowillianfr@outlook.com"
        />
        <CardPequeno 
        imagem="https://cdn-icons-png.flaticon.com/512/1427/1427236.png"
        nome="Endereço: "
        endereco="Plataforma 3/4 05263 Hogwarts"
        />
      </div>
      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.princesadoscampos.com.br/entreamigos/blog/wp-content/uploads/2018/07/perfil-facebook.png" 
          nome="KNN idiomas" 
          descricao="Professor de Inglês e espanhol" 
        />
        
        <CardGrande 
          imagem="https://t.ctcdn.com.br/CgXYkXzLQvvhXTxTDLykz9ePGLI=/400x400/smart/filters:format(webp)/i490082.jpeg" 
          nome="NASA" 
          descricao="Astrônomo e Fisíco teórico " 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/128/3301/3301707.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
