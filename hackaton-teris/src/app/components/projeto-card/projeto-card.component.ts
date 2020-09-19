import { Component, Input, OnInit } from '@angular/core';
/*import { ServiceModel } from '../../crud/services/services-api.service';*/

@Component({
  selector: 'app-projeto-card',
  templateUrl: './projeto-card.component.html',
  styleUrls: ['./projeto-card.component.css']
})
export class ProjetoCardComponent implements OnInit {

  /*
  @Input() item: CrudService;
  */

  address: string = 'Rua qualquer';
  description: string = 'Problema qualquer';
  name: string = 'Nome qualquer';
  photo: string = 'https://plamurbblog.files.wordpress.com/2019/06/408347-mais-buraco-do-que-rua-2-2-800x519.jpg?w=616';
  tags: string[] = ['Mobilidade Urbana', 'Acessibilidade'];

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
    */
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
