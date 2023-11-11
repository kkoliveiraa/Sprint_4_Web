import Image from 'next/image';
import style from '../objetivos/style.css';

export default function Objetivos() {
  return (
      <div className="objetivos">
        <div className="objetivos-px">
          <div className="overlap">
            <div className="conteudo">
            <Image id="machine" src="/img/machine.png" alt="Machine-Learning" width={300} height={100} />

            <div className="overlap-group">
              <Image className="caixa1" src="/img/caixa-1.png" alt="Caixa de texto 1" width={1500} height={0} />
              <p className="text-wrapper">
                Com base nessa classificação precisa, o sistema recomendará o modal de atendimento mais adequado para
                cada situação, como guincho, socorro mecânico ou reboque, dessa forma, nosso sistema estará pronto para
                oferecer recomendações confiáveis e eficientes durante o atendimento de veículos pesados.
              </p>

              <Image className="caixa1" src="/img/caixa-1.png" alt="Caixa de texto 1" width={1500} height={0} />
              <p className="div">
               
                Ao utilizar algoritmos de aprendizado de máquina, nosso sistema será capaz de analisar imagens de
                veículos pesados e cargas e realizar a identificação automática de seus tipos, levando em consideração
                características como o formato, tamanho e outros atributos relevantes.
              </p>
            </div>

            </div>
          </div>
          <p className="subtitulo">
            E como pretendemos implementar tudo isso?
          </p>
          <div className="parceria-porto">
            <Image id="porto" src="/img/porto.png" alt="Logo da Porto" width={300} height={100} />
            <div className="logo-porto-help">
              <div className="overlap-group-2">
                <Image id="logoportohelp" src="/img/logoPortoHelp.png" alt="Logo da Porto Help" width={400} height={100} />
              </div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="div-wrapper">
              <Image className="caixa1" src="/img/caixa-1.png" alt="Caixa de texto 1" width={1500} height={100} />
              <p className="p">
                O projeto tem como objetivo desenvolver um sistema de recomendação de modal de atendimento para veículos
                pesados em parceria com a Porto Seguro. Através da utilização de técnicas de inteligência artificial e
                processamento de imagem, o sistema será capaz de identificar e classificar os tipos de veículos pesados
                e cargas, além de recomendar o modal de atendimento mais adequado para cada situação.
              </p>
            </div>
          </div>
        </div>
      </div>
    
  );
}
