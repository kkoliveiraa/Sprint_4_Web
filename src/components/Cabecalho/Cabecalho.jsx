import Link from 'next/link';
import Image from 'next/image';
import "./Cabecalho.scss";
import logoPortoHelp from "../../../public/img/logoPortoHelp.png"

export default function Cabecalho() {
  return (
    <header id='menu'>
        <nav id='bg'>
          <Link className="componente" href="/link/home" >  <Image src="/img/logoPortoHelp.png" alt="home" width={200} height={200}></Image> </Link>
          <Link className="componente" href="/login">LOGIN</Link>
          <Link className="componente" href="/link/solicitar">Solicitar</Link>
          <Link className="componente" href="/link/Chatbot">Chatbot</Link>
          <Link className="componente" href="/link/objetivos">Objetivos</Link>
          <Link className="componente" href="/link/sobrenos">Sobre nós</Link>
          <Link className="componente" href="/registro">Cadastrar</Link>
          
        </nav>
    </header>
  )
}
