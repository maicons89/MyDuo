import Jogador from "../Jogador";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };

  return props.jogadores.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="jogadores">
        {props.jogadores.map((jogador) => (
          <Jogador
            corDeFundo={props.corPrimaria}
            key={jogador.nome}
            nome={jogador.nome}
            imagem={jogador.imagem}
            plataforma={jogador.plataforma}
            nick={jogador.nick}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
