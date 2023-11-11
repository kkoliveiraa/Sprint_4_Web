import React from 'react';
import Link from 'next/link';
import styleFooter from '../Rodape/styleFooter.css';

export default function Rodape() {
  return (
    <footer id="footerStyle" >
      <p className='conteudoFooter'>Entre em contato conosco</p>
      <p className='conteudoFooter' >Quer saber mais sobre os Devs por trás do projeto? Clique no botão abaixo e confira</p>
      <div>
        <Link href="/link/sobrenos">
        <button id="BotaoSobrenos">Sobre nós</button>
        </Link>
      </div>
      <div id="sobreNosCont">
        <p className="infos">@Grupo ntc</p>
        <p className="infos">grupontc1@gmail.com</p>
        <p className="infos">(11)98716-6289</p>
      </div>
    </footer>
  );
}
