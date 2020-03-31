import { ListaItem } from './lista-item.module';
export class Lista {
  id: number;
  titulo: string;
  creadaEn: Date;
  terminadaEn: Date;
  terminada: boolean;
  items: ListaItem[];
  constructor(titulo: string) {
    this.id = new Date().getDate();
    this.titulo = titulo;
    this.creadaEn = new Date();
    this.terminada = false;
    this.items = [];
  }
}
