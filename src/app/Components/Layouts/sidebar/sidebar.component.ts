import { ProjetRequestDTO} from './../../../Models/Projet/Projet';
import { ProjetCompteServices } from 'src/app/Services/ProjetCompte/projet-compte-services.ts.service';
import { ProjetResponseDTO } from './../../../Models/ProjetCompte/Projet_compte';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // Sidebar toggle show hide function
  // public routerLinkVariable = "/project/1";

  projets:ProjetResponseDTO[] = [];


  @Input() status: boolean = false;


  constructor(private services:ProjetCompteServices,private route:ActivatedRoute) {

    let compteId = localStorage.getItem("compteId")

    if(compteId != null || compteId != undefined){
      this.services.loadProjetCompte(Number(compteId)).then((response:ProjetResponseDTO[]) => {
        this.projets = response;
        console.log(this.projets)
      })
    }

  }

  ngOnInit() {

  }

  public setNameProjet(ref:number,designation:string){


    var model:ProjetRequestDTO = {ref:0,designation:''}

    model.ref = ref
    model.designation = designation


    this.services.setNameProjet(model).then((response:string)=>{
      console.log(response);
    })
  }

  public reload(){
    setTimeout(()=>{
      window.location.reload();
    },600)
  }






}
