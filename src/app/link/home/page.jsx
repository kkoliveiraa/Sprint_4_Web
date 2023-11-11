import Link from 'next/link';
import Image from 'next/image';
import styleHome from '../../link/home/styleHome.css';


export default function Home (){

  return (
    <div>
      
        <div id="superContainer">
          <div id="Container1">
            <h1 id="titulo">Com a Porto Help você pode mais!</h1>
            <h2 id="texto">
              Buscamos criar um layout simples interativo, mas sem deixar de lado um design atrativo e interessante.
            </h2>
            <Image id="motorista" src="/img/motorista.png" alt="Motorista de caminhão" width={200} height={200}></Image>
      
          </div>

          <div id="Container2">
            <p id="tituloC2">Aqui você poderá realizar o chamado de um modal de forma rápida e prática!</p>
            <p id="textoC2">
              A Porto Help visa auxiliar nossos clientes com o objetivo de realizar um atendimento eficaz e com praticidade,
              buscando o melhor para todos os usuários, independente de faixa etária/conhecimento. Para isso, iremos utilizar
              métodos com fácil utilização e que atendam todas as necessidades.
            </p>

            <p id="containerBotao">
            <Link href="/link/solicitar">
           
             <button className="botao">Solicitar</button>
            </Link>           
            </p>
          </div>
        </div>

        <div id="containerObj">
          <p id="conteudoObj">Entenda um pouco mais sobre o projeto Porto Help</p>

           <Link href="/link/objetivos">
           
          <button className="botao" >Objetivos</button>
          
          </Link> 

        </div>

        <div id="containerVei">
          <p id="conteudoVei">Visamos atender o chamado de veículos pesados, buscando realizar o chamado para as seguintes categorias:</p>
          <div id="veiculos">
            <div className="veiculo">
              <p>Caminhões</p>
              <Image src="/img/caminhao.png" alt="caminhao" width={150} height={150} /> 
            </div>
            <div className="veiculo">
              <p>Ônibus</p>
              <Image src="/img/onibus.png" alt="onibus" width={150} height={150}/>
            </div>
            <div className="veiculo">
              <p>Trailers</p>
              <Image src="/img/trailer.png" alt="trailer" width={150} height={150}/>
            </div>
          </div>
        </div>

        <div id="containerChatbot">
        
        </div>

        <div>
          
        </div>
    
    </div>
  );
};   