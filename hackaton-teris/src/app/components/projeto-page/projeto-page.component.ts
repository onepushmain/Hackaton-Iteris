import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';

@Component({
  selector: 'app-projeto-page',
  templateUrl: './projeto-page.component.html',
  styleUrls: ['./projeto-page.component.css']
})
export class ProjetoPageComponent implements OnInit {

  listaProblemas[];

  constructor(private politicosApi: PoliticosApiService) {


  }

  constructor(private politicaAPI: CrudService) { }

  ngOnInit(): void {
     this.politicosApi.List().subscribe((lista) => {
      this.listaProblemas
    /*
    this.politicaAPI.get().subscribe((lista => {
      this.lista = lista;
    }))
  };
  */
 }
}
