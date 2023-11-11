import Image from "next/image";
import Link from "next/link";
import style from "../solicitar/style.css";



export default function solicitar() {
  return (
    <main>
      <h1 className="titulo-pagina">Realizando o chamado do modal</h1>

      <div className="texto-imagem">
        <div className="caixa-texto-1">
          <p className="p">
            Através do HaarCascade, uma ferramenta da biblioteca OpenCV, poderemos
            selecionar um pequeno número de características visuais críticas de uma determinada imagem e as utilizar para a etapa de detecção e classificação de objetos. Através de um “Scanner” nosso cliente poderá enviar sua localização e informações relevantes do veículo para que o chamado seja feito adequadamente.
          </p>
        </div>
      
        <div className="imagem-opencv">
         <Image src="/img/openCV.jpg" alt="OpenCV" width={400} height={200}/>
        </div>
      </div>

      <div className="texto-imagem">
        <div className="caixa-texto-2">
          <p className="p">
            O sistema pode proporcionar maior agilidade e eficiência no atendimento, reduzindo o tempo de espera do cliente e aumentando a satisfação do cliente com o serviço prestado. Para o prestador de serviço, o sistema pode ajudar a reduzir custos e aumentar a produtividade, ao fornecer informações mais precisas e assertivas sobre o modal de atendimento mais adequado para cada situação.
          </p>
        </div>

        <div className="imagem-haarcascade">
          
          <Image src="/img/openCVexemplo.jpg" alt="haarCascade" width={400} height={200}/>
        </div>
      </div>
    </main>
  );
};
