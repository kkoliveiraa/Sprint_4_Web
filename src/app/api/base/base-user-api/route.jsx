import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';


const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf-8');

export async function GET(request, { params }) {
  return NextResponse.json(JSON.parse(file));
}

export async function POST(request, response) {
  
  const body = await JSON.parse(file);

  
  const data = await request.json();

  for (let x = 0; x < body.usuarios.length; x++) {
    const u = body.usuarios[x];
    if (u.placa === data.placa && u.cpf === data.cpf) {
      return NextResponse.json({ "status": "ok" });
    }
  }

  return NextResponse.json({ "status": "error" });
}
