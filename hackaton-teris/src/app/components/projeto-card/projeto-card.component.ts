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
  prioridade: number;

  constructor() { }

  ngOnInit(): void {

    if (this.item != null) {
      this.address = this.item.address;
      this.description = this.item.description;
      this.name = this.item.name;
      this.photo = this.item.photo;
      this.tags = this.item.tags;
    }
  }
   /*
    for(let i: number = 0;i<= this.tags[i].length,i++){
      if(this.tag[i] == "Mobilidade Urbana"){
        this.gastos+= 10;
        this.prioridade+= 20;
      }

      else if(this.tag[i] == "Acessibilidade"){
        this.gastos+= 10;
        this.prioridade+= (algumvalor);
      }
      else if(this.tag[i] == "Saúde"){
        this.gastos+= (algumvalor);
        this.prioridade+= (algumvalor);
      }
      else if(this.tag[i] == "Saneamento Básico"){
        this.gastos+= (algumvalor);
        this.prioridade+= (algumvalor);
      }
      else if(this.tag[i] == "Educação"){
        this.gastos+= (algumvalor);
        this.prioridade+= (algumvalor);
      }
      else if(this.tag[i] == "Lazer"){
        this.gastos+= (algumvalor);
        this.prioridade+= (algumvalor);
      }
    }
  }
  */
}
