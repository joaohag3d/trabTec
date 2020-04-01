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
        urlImagem: 'https://cdn6.bigcommerce.com/s-0kvv9/products/12158/images/58675/yugioh-zexal-photon-shockwave-single-card-ultra-rare-phsw-en011-galaxy-eyes-photon-dragon-19__77683.1461128232.500.750.jpg?c=2',
        titulo: 'Galaxy-Eyes Photon Dragon',
        descricaoCurta: 'Dragon/Effect Monster',
        descricaoCompleta: 'TESTE SEM CSS',
        valor: 'Preço: R$10.00',
      },

      {
        id: 2,
        urlImagem: 'https://www.lmcorp.com.br/arquivos/in/yugioh_bkp/cd/708/9336.jpg',
        titulo: 'WitchCrafter Madame Verre',
        descricaoCurta: 'Spellcaster/Monster Effect',
        descricaoCompleta: 'TESTE SEM CSS',
        valor: 'Preço: R$40,00',
      },

      {
        id: 3,
        urlImagem: 'https://ms.yugipedia.com//thumb/6/61/BottomlessTrapHole-YS18-EN-C-1E.png/300px-BottomlessTrapHole-YS18-EN-C-1E.png',
        titulo: 'Botomless Trap Hole',
        descricaoCurta: 'Trap Card',
        descricaoCompleta: 'TESTE SEM CSS',
        valor: 'Preço: R$5.00',
      },

      {
        id: 4,
        urlImagem: 'https://ms.yugipedia.com//thumb/0/0c/DarkHole-OP12-EN-C-UE.png/300px-DarkHole-OP12-EN-C-UE.png',
        titulo: 'Dark Hole',
        descricaoCurta: 'Spell Card.',
        descricaoCompleta: 'TESTE SEM CSS',
        valor: 'Preço: R$0.60',
      },

      {
        id: 5,
        urlImagem: 'https://ms.yugipedia.com//thumb/2/2c/SalamangreatMiragestallio-SDSB-EN-UR-1E.png/300px-SalamangreatMiragestallio-SDSB-EN-UR-1E.png',
        titulo: 'Salamangreat Miragestallio',
        descricaoCurta: 'Cyberse/Effect Monster/XYZ',
        descricaoCompleta: 'TESTE SEM CSS',
        valor: ' Preço: R$2.00',
      },

      {
        id: 6,
        urlImagem: 'https://www.lmcorp.com.br/arquivos/in/yugioh_bkp/cd/251/80.png',
        titulo: 'Exodia The Forbidden One',
        descricaoCurta: 'OBLITERAR',
        descricaoCompleta: 'TESTE SEM CSS',
        valor: 'R$10000000000.0',
      }

    ];

  }

}
