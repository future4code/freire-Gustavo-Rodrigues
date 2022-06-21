import React from 'react';
import styled from 'styled-components';


const ContainerStyle = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    margin-top: 5px;
    gap: 5px;
    `


const Imagens = styled.img`
    width: 10%;
    `

function CardPequeno (props) {
    return (
        <ContainerStyle>
            <Imagens src={props.imagem}/>
            <h4>{props.nome}</h4>
            <p>{props.endereco}</p>
        </ContainerStyle>
    )
}
export default CardPequeno;