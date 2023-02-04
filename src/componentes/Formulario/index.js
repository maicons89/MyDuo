import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = () => {
  const times = [
    "COD Warzone",
    "Apex Legends",
    "Mario Kart 8",
    "Overwatch",
    "Fortnite",
    "Splatoon 3",
  ];

  const [nome, setNome] = useState("");
  const [nick, setNick] = useState("");
  const [console, setConsole] = useState("");
  const [jogo, setJogo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    this.props.first.aoJogadorCadastrado({
      nome,
      nick,
      console,
      jogo,
      imagem,
      time,
    });
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
          label="Console"
          placeholder="Digite o seu console"
          valor={console}
          aoAlterado={(valor) => setConsole(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Jogo"
          placeholder="Digite o jogo que você está online"
          valor={jogo}
          aoAlterado={(valor) => setJogo(valor)}
        />

        <CampoTexto
          label="Imagem"
          placeholder="Digite o seu endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao texto="Criar Card" />
      </form>
    </section>
  );
};

export default Formulario;
