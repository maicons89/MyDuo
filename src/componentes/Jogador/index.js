import "./Jogador.css";

const Jogador = ({ nome, imagem, plataforma }) => {
  return (
    <div className="jogador">
      <div className="cabecalho">
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{plataforma}</h5>
      </div>
    </div>
  );
};

export default Jogador;
