import './App.css';
import React from 'react';

class App extends React.Component {

    state={
      conversa:[],
      inputUsuario:"",
      inputMensagem:""
    }

    nomeDaFuncao = (event) => {
      this.setState({inputMensagem: event.target.value});
    }

    nomeDaFuncao2 = (event) => {
      this.setState({inputUsuario: event.target.value});
    }

    enviarMensagem = () => {
      const novaMensagem ={
        nomeUsuario: this.state.inputUsuario,
        mensagem: this.state.inputMensagem
      }

      const conversaAtualizada = [...this.state.conversa, novaMensagem]

      this.setState({conversa: conversaAtualizada})

      this.setState({inputUsuario: ''})

      this.setState({inputMensagem: ''})
    }

  render() {
    const exibeMensagem = this.state.conversa.map((elemento)=>{
      return <div className='balao'><strong>{elemento.nomeUsuario}</strong>{elemento.mensagem}</div>
    })
    return (
      <div className="App">
        <div className='container'>

        {exibeMensagem}

          </div>
          <div className="mensagem">
            <input onChange={this.nomeDaFuncao2} className='boxusuario' type="text" placeholder="Usuario" value={this.state.inputUsuario} />

            <input onChange={this.nomeDaFuncao} type="text" placeholder='Mensagem' value={this.state.inputMensagem}/>

            <input onClick={this.enviarMensagem} type="button" value='Enviar'/>

        </div>
      </div>

    );
  }
}

export default App;
