import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  const times = [
    "COD Warzone",
    "Owerwatch",
    "Apex Legends",
    "Fortnite",
    "Mario Kart 8",
    "Splatoon 3",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("form foi submetido");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do player. </h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Nick"
          placeholder="Digite o seu nick"
        />
        <CampoTexto
          obrigatorio={true}
          label="Console"
          placeholder="Digite o seu console"
        />
        <CampoTexto
          obrigatorio={true}
          label="Jogo"
          placeholder="Digite o jogo que você está online"
        />

        <CampoTexto
          label="Imagem"
          placeholder="Digite o seu endereço da imagem"
        />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
        <Botao texto="Criar Card" />
      </form>
    </section>
  );
};

export default Formulario;
