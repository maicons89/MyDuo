import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [nick, setNick] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [imagem, setImagem] = useState("");
  const [jogo, setJogo] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoJogadorCadastrado({
      nome,
      nick,
      plataforma,
      imagem,
      jogo,
    });
    setNome("");
    setNick("");
    setPlataforma("");
    setImagem("");
    setJogo("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do player. </h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Nick"
          placeholder="Digite o seu nick"
          valor={nick}
          aoAlterado={(valor) => setNick(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Plataforma"
          placeholder="Digite a sua Plataforma"
          valor={plataforma}
          aoAlterado={(valor) => setPlataforma(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o seu endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Jogo"
          itens={props.times}
          valor={jogo}
          aoAlterado={(valor) => setJogo(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
