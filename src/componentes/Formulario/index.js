import "./Formulario.css";
import CampoTexto from "../CampoTexto";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do player. </h2>
        <CampoTexto label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto label="Nick" placeholder="Digite o seu nick" />
        <CampoTexto label="Console" placeholder="Digite o seu console" />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o seu endereço da imagem"
        />
      </form>{" "}
    </section>
  );
};

export default Formulario;
