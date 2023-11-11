import Image from "next/image";
import Link from "next/link";
import style from "../sobrenos/style.css"


export default function sobrenos() {
  return (
    <main>
      <div id="divIntegrantes">
        <Image className="integrantes" src="/img/caua.png" alt="Caua" width={150} height={200} />
        <Image className="integrantes" src="/img/edu.png" alt="Edu" width={150} height={200}/>
        <Image className="integrantes" src="/img/kaka.png" alt="kaique" width={150} height={200} />
        <Image className="integrantes" src="/img/rafa.png" alt="img rafa" width={150} height={200}/>
        <Image className="integrantes" src="/img/thiago.png" alt="img thiago" width={150} height={200}/>
      </div>
    </main>
  );
}
