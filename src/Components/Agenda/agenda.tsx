import { Component } from "react";
import Contatos from "../Contatos/contatos";

interface Contato {
  nome: string,
  numero: string
} 

class Agenda extends Component {

  state = {
    array: [{nome: 'Maria', numero: '1234-5678'}, {nome: 'Joana', numero: '9876-5432'}, {nome: 'José', numero: '7531-5986'}],
    mostrarContatos: false
  }

  exibir = () => {
    this.state.mostrarContatos ? 
    this.setState({mostrarContatos: false}) : 
    this.setState({mostrarContatos: true})
  }

  render() {
    return (
      <div>
        <button onClick={this.exibir}>Exibir Contatos</button>

        {this.state.mostrarContatos && 
          this.state.array.map((contato: Contato) => (
            <Contatos contato={contato} key={contato.numero}/>
          ))
        }
      </div>
    )
  }
}

export default Agenda