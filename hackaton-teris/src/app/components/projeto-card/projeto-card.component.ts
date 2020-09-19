import { Component, Input, OnInit } from '@angular/core';
import { ServicesModel } from '../../Model/services-model';


@Component({
  selector: 'app-projeto-card',
  templateUrl: './projeto-card.component.html',
  styleUrls: ['./projeto-card.component.css']
})
export class ProjetoCardComponent implements OnInit {


  @Input() item: ServicesModel;

  address: string;
  description: string;
  name: string;
  photo: string;
  tags: string[];

  gastos: number;
  prioridade = 0;

  constructor() { }

  ngOnInit(): void {

    if (this.item != null) {
      this.address = this.item.address;
      this.description = this.item.description;
      this.name = this.item.name;
      this.photo = this.item.photo;
      this.tags = this.item.tags;
    }
    for (let i = 0; i <= this.item.tags.length; i++) {
      if(this.tags[i] == 'Mobilidade Urbana'){
        //console.log("entrei aqui if 1");

        this.gastos += 10;
        this.prioridade = this.prioridade + 15;
      }

      if(this.tags[i] == 'Acessibilidade'){
        //console.log("entrei aqui if 2");
        this.gastos += 10;
        this.prioridade += 20;
      }

      if(this.tags[i] == 'Saúde'){
        //console.log("entrei aqui if 3");
        this.gastos += 60;
        this.prioridade += 60;
      }

      if(this.tags[i] == 'Saneamento Básico'){
        //console.log("entrei aqui if 4");
        this.gastos += 50;
        this.prioridade += 25;
      }

      if(this.tags[i] == 'Educação'){
        //console.log("entrei aqui if 5");
        this.gastos += 60;
        this.prioridade += 30;
      }

      if(this.tags[i] == 'Lazer'){
        //console.log("entrei aqui if 6");
        this.gastos += 20;
        this.prioridade += 10;
      }
    }
    //console.log(this.item.tags[0]
    //console.log(this.prioridade);
  }
}
