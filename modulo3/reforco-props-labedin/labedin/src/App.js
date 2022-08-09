import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/293463198_1501167463664673_524589440023872563_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=d2CksBtaWTMAX9-wA67&_nc_ht=scontent-gru1-1.xx&oh=00_AT-Td2ytuF5cIeXU2DJIuswRWM3lAeDod6YmkePExTqBdw&oe=62EC6C76" 
          nome="Gustavo Willian" 
          descricao="Oi, eu sou o Gustavo. Estou estudando programação na Labenu e estou gostando muito, estou com bastante dificuldades, mas acredito que irei supera-las, mesmo que isso leve bastante tempo excedendo o tempo do proprio curso, afinal, cada um tem uma curva de aprendizado."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons.flaticon.com/png/512/4124/premium/4124284.png?token=exp=1659309896~hmac=2f33e5542e4c16d5ea4f2ee4fbac598f" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
        nome="Email: "
        imagem="https://cdn-icons-png.flaticon.com/512/1177/1177437.png"
        descricao="Gustavoprogramador@bol.com.br"
        />

        <CardPequeno
        nome="Endereço: "
        imagem="https://cdn-icons.flaticon.com/png/512/1433/premium/1433265.png?token=exp=1659305296~hmac=fb3ccc114e68585d2f3cffa70d723a6d"
        descricao="Aniz Tanuz, 1637, Mogi das Cruzes"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Calculando rotas para pouso de foguetes espaciais." 
        />

        <CardGrande
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0B0XDf4Cw8MZNwcaablCXEwn6ADS-5SJU6A&usqp=CAU"
          nome="Ambev Tech"
          descricao="Programador Front-End."
        />

        <CardGrande
        imagem="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAAADy8vL19fX6+vr39/f9/f3w8PD////s7OyWlpapqamCgoK7u7vd3d2mpqa2trbW1tZaWlpFRUU3Nzfl5eXBwcGenp6Pj490dHRLS0vHx8ewsLB6enoXFxcwMDCbm5vQ0NBoaGgpKSkgICA+Pj4TExNVVVVubm6Hh4diYmIQcQ8GAAAELElEQVR4nO3c63aiMBQFYJOcgAjWG16KtrWXqe37v+Cg1gstYCvHdY6u/f3qrGF1sichCUmg1QIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALgxo8WddBEuadAzzoUP0sW4mFnqrTHmZhM+9p3Z8CPpolxGvKm/TcLbrMNOaHZC6bJcxNjtAxorXZhLSI4D9qVLcwHRUcDAzqWLw2+Q34PBPqKbSZeHnykg6eLw61EhYCJdHnbDsFCF4VC6QOyW9jigzaTLw27kC1XoH6ULxK5TuAvdk3R5+LULbfQGR/tCI7Vt6eJcQFxopLf43HR3SGhvMmAr2Sek9FW6MBcx3o2G4e3NZbaSTULr0oF0SVg8DOJoMonio4lZx1miMFt9/fF+MZ2srxhc4UrGS5QZ78haS8677uSrV5l2s7vF9sdFL/We8iuI8kuC8YdcYc8w64dUmH9SuFwdXzCaOyoMHIbIj++lyvtXz6kzP1jXjnYXzJbe/rzCWJ9dxzQ18yWlXwcgl8TD4aJnXFm+7X9DdPr3S7sPqKL425DO1fx9PhdXP1V9rqjAX6P0RTpDrTxgcDpFLRtojjhoWoNmvb7Y/iedo9JL7S32azaVDlKpW9VH/jGh0TowTniqkLpaW+lLyTh/TkC940XG0kYVB3xj6EdV9zKtHksVWsVP/ix3oX+WjlFtytGRWs1rG32ORqp6q42jkdJUOkWNBctoL52izpwhoZ1Ip6jDMSX1ikeKVothuNe9E/XG0NGQ6s3EBUNC9y6dos4TQ0fjpUPU6jAk1L1fmjRPaJfSIWqNmw8WpPvgybJ5QuVHazgSLqVD1GJopUbx032LJ6Hu49AcSxi6R/w7hvFQ96yNYw1D98x7xfGI7zVvOnE8WxhS/ZKXb7ptuKb61Yv26fKfRpqXMTgGxHzAUHwnPvGs6SvuTlk6U92dDU9CE8bSQSp1eRIavzr9b8ngWMfYCLUe4ftkaqZ5LWp9m40anxXaoa7OA3wMi1E7VuebJjO2ZpojlUuLjAED25VOU4Zjg23HqjxnynPcZMvpPBbFspW/oXXtlK+vcVoPnbA8JK6pXTr9YOprSOvEja8SpXNUi1nuRNXHalKOhCrnMzufDGOiW0inqNX8GK3OCdvBa+M70Wv/ykLULGJAHekEJzVbsNF8Cnpn1Kiz8VpftTg2bdBOneah8GB59uRN+YmTg3Mnb9dwE24Nz22nqg+YFqzC02lKqvBNutx/8FERcf1quq2Y9tA1dKMHJREt+XY273TGXSp91fmaanBt9e2FdArHh22l98nmy57B4cNt1/ghkLfjt/Kd7XxLMEjc/qMEgVW7V1EvylvjGvm0dCCPM7f9rkS4vK5b8Eg87vf7SVT9qZ3PSZIlkc6NGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgHL/ATPDL42HIQ29AAAAAElFTkSuQmCC"
        nome="Apple"
        descricao="Product Designer"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
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
