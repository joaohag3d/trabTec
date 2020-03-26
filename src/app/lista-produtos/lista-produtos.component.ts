import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {

  produtos: Produto[] = [];

  constructor() { }

  ngOnInit(): void {

    this.produtos = [

      {
        id: 1,
        urlImagem: 'https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwFvByhHpUzCHIZyTAN5T0Jc',
        titulo: 'TESTE SEM CSS',
        descricaoCurta: 'TESTE SEM CSS',
        descricaoCompleta: 'TESTE SEM CSS',
        valor: 'TESTE SEM CSS',
      },

      {
        id: 2,
        urlImagem: 'https://www.lmcorp.com.br/arquivos/in/yugioh_bkp/cd/708/9336.jpg',
        titulo: 'TESTE SEM CSS',
        descricaoCurta: 'TESTE SEM CSS',
        descricaoCompleta: 'TESTE SEM CSS',
        valor: 'TESTE SEM CSS',
      },

      {
        id: 3,
        urlImagem: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5cdeafc-dfb9-449a-b254-0a0f947dfbde/dd20jl9-e90572e4-5022-4efa-b5e5-b8bcc5403ed4.jpg/v1/fill/w_750,h_750,q_75,strp/witchcraft_golem_arles_by_batmed_dd20jl9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzUwIiwicGF0aCI6IlwvZlwvZTVjZGVhZmMtZGZiOS00NDlhLWIyNTQtMGEwZjk0N2RmYmRlXC9kZDIwamw5LWU5MDU3MmU0LTUwMjItNGVmYS1iNWU1LWI4YmNjNTQwM2VkNC5qcGciLCJ3aWR0aCI6Ijw9NzUwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.LyX6KzuWC3tPIlgYt28TBprj9TB0QYiBTFl1ADERjlo',
        titulo: 'TESTE SEM CSS',
        descricaoCurta: 'TESTE SEM CSS',
        descricaoCompleta: 'TESTE SEM CSS',
        valor: 'TESTE SEM CSS',
      },

      {
        id: 4,
        urlImagem: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/80460507_112016620164150_3740068078483894556_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=jzE9a6f3D8wAX-UI1ja&oh=835f2d49ac7ae455e04643ce534b223d&oe=5E8549BB',
        titulo: 'TESTE SEM CSS',
        descricaoCurta: 'TESTE SEM CSS.',
        descricaoCompleta: 'TESTE SEM CSS',
        valor: 'TESTE SEM CSS',
      },

      {
        id: 5,
        urlImagem: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0f25432a-eb65-4731-9a59-0c8fe29ae963/dd2emyc-022efff1-2a37-47ac-aafb-766336374977.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBmMjU0MzJhLWViNjUtNDczMS05YTU5LTBjOGZlMjlhZTk2M1wvZGQyZW15Yy0wMjJlZmZmMS0yYTM3LTQ3YWMtYWFmYi03NjYzMzYzNzQ5NzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1KDFukveeLWt9aB35F9YnU2W2kd7l6M1rjwpEs2rw5k',
        titulo: 'TESTE SEM CSS',
        descricaoCurta: 'TESTE SEM CSS',
        descricaoCompleta: 'TESTE SEM CSS',
        valor: 'TESTE SEM CSS',
      },

      {
        id: 6,
        urlImagem: 'https://www.mtgcards.com.br/image/cache/data/0%20-%20ASAST/Witchcrafter%20Creation-500x500.jpg',
        titulo: 'TESTE SEM CSS',
        descricaoCurta: 'TESTE SEM CSS',
        descricaoCompleta: 'TESTE SEM CSS',
        valor: 'TESTE SEM CSS',
      }

    ];

  }

}
