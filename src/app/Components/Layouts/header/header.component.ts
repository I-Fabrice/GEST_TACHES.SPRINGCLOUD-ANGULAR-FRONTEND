import { ProjetCompteServices } from './../../../Services/ProjetCompte/projet-compte-services.ts.service';
import { Component, OnInit } from '@angular/core';
import { ProjetCompteRequestDTO } from 'src/app/Models/ProjetCompte/Projet_compte';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  status = false;

  constructor(private service:ProjetCompteServices) { }

  ngOnInit() {
  }

  public addToggle()
  {
    this.status = !this.status;
  }

  public newprojet(model:ProjetCompteRequestDTO){

    localStorage.setItem("compteId", "1");
    model.compteId = 1

    this.service.createProject(model);

    window.location.reload();
  }

}
