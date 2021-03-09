import { Component } from "react";

interface Contato {
  contato: {
    nome: string,
    numero: string
  }
}

class Contatos extends Component<Contato> {
  render() {
    return (
      <div>
        <p>Nome: {this.props?.contato.nome}</p>
        <p>Telefone: {this.props?.contato.numero}</p>
      </div>
    )
  }
}

export default Contatos