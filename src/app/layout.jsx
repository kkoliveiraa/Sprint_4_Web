import "./globals.css"; 
import { Inter } from 'next/font/google'
import Cabecalho from '@/components/Cabecalho/Cabecalho'
import Rodape from '@/components/Rodape/Rodape'
import Assistente from '@/components/Assistente/assistente'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porto Help',
  description: 'Entrega da 4 Sprint do Challenge 1TDSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        
        <Cabecalho/>
          {children}
        <Assistente/>
        <Rodape/>

        
      </body>
    </html>
  )
}
