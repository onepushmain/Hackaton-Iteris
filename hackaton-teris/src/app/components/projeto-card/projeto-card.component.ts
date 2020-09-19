import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';

@Component({
  selector: 'app-projeto-card',
  templateUrl: './projeto-card.component.html',
  styleUrls: ['./projeto-card.component.css']
})
export class ProjetoCardComponent implements OnInit {

  /*
  @Input() lista: CrudService;


  address : string;
  description: string;
  name: string;
  photo: string;
  tags: string[];

  */

  gastos: number;
  prioridade: number;



  constructor() { }

  ngOnInit(): void { }

    /*
    if (this.lista != null) {
      this.address = this.lista.address;
      this.description = this.lista.description;
      this.name = this.lista.name;
      this.photo = this.lista.photo;
      this.tags = this.lista.tags;
    }
    for(i=0;i<= this.tags[i].length,i++){
      if(this.tag[i] == "Mobilidade Urbana"){
        this.gastos+= (algumvalor);
        this.prioridade+= (algumvalor);
      }
      else if(this.tag[i] == "Acessibilidade"){
        this.gastos+= (algumvalor);
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
