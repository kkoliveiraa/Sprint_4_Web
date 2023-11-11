import Image from "next/image";
import Link from "next/link";
import style from "../Chatbot/style.css";

export default function Chatbot() {
  return (
    
      <div className="chatbot">
        <div className="chatbot-px">
          <div className="overlap">
            
            <Image src="/img/iconePortinho.png" alt="iconePortinho" width={200} height={200} /> 
            <div className="apresentao-do">
              <div className="tts-stt">
                <p className="p-tts"> Nós da Porto Help oferecemos aos nossos clientes um Chatbot de simples utilização e que conta com 
                  tecnologias de STT(Speech to Text) e TTS (Text to Speech), que possibilita um atendimento mais
                  rápido e fácil, visando simplificar ao máximo o chamado do modal.
                </p>

              </div>
              <div className="overlap-group">
                <p className="para-isso">
                  Para isso, apresentamos a vocês o Portinho, nosso mascote virtual que será responsável pelo atendimento
                  via Chatbot.
                  <br />
                  <br />
                  Diga Olá pro Portinho!
                </p>
               
                <Image className="image"src="/img/iconePortinho.png" alt="iconePortinho" width={200} height={200} /> 
              </div>
            </div>

           

            <div className="tela-chatbot" >
              <div className="div">
                <div className="overlap-2">
                  <div className="ellipse-wrapper">
                  <Image src="/img/ellipse-1.png" alt="Ellipse" width={200} height={200} /> 
              
                  </div>
                  
                  <Image className="close" src="/img/close.png" alt="close" width={200} height={200} /> 
                  
                </div>
                <div  className="overlap-group-2">
                  <div  className="caixa-texto"/>
                  <div className="text-wrapper-2">Digite sua mensagem...</div>
               
                  <Image className="emote" src="/img/emote.png" alt="emote" width={200} height={200} /> 
                  
                  <Image className="email-send" src="/img/email-send.png" alt="email" width={200} height={200} />
                  
                  <Image className="audio" src="/img/audio.png" alt="audio" width={200} height={200} />
                </div>
                <div className="msg-portinho">
                  <p className="p">Olá! Sou o Portinho, o bot da Porto Help!</p>
                </div>
                <div className="div-wrapper">
                  <p className="p">No que posso te ajudar?</p>
                </div>
                <div className="msg-cliente">
                  <div className="text-wrapper-3">Olá Portinho!</div>
                </div>
                <div className="msg-cliente-2">
                  <p className="text-wrapper-3">Preciso de um guincho urgente</p>
                </div>
                <div className="msg-portinho-2">
                  <p className="text-wrapper-4">Estou enviando um modal para você agora mesmo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}
