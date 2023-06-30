import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjetCompteRequestDTO, ProjetResponseDTO } from 'src/app/Models/ProjetCompte/Projet_compte';
import { BackEndHostList } from 'src/Back-End.Host';
import { ProjetRequestDTO } from 'src/app/Models/Projet/Projet';
import { Compte } from 'src/app/Models/Compte/compte';

@Injectable({
  providedIn: 'root'
})

export class ProjetCompteServices {



  constructor(private http:HttpClient,private host:BackEndHostList) {

  }

  // MODULE PROJET COMPTE
  async createProject(model:ProjetCompteRequestDTO){
    try{
      await this.http.put(this.host.Host_ProjetCompte+"api/v1/projetcompte/cr",model).toPromise();
    }catch(error){

    }
  }

  async loadProjetCompte(compteId:number):Promise<ProjetResponseDTO[]>{
    try{
      let data = await this.http.get<ProjetResponseDTO[]>(this.host.Host_ProjetCompte+"api/v1/projetcompte/"+compteId).toPromise();
      return data;
    }catch(error){

    }
  }


  // MODULE PROJET
  async setNameProjet(model:ProjetRequestDTO):Promise<string>{
    try{
      let data = this.http.put(this.host.Host_Projet+"api/v1/projet/edit",model,{responseType: 'text'}).toPromise();
      return data;
    }catch(error){

    }
  }

  // COMPTE

  async loadCompteByEmail(email:string):Promise<Compte>{
    try{
      let data = await this.http.get<Compte>(this.host.Host_Compte+"api/v1/compte/fd/"+email).toPromise();
      return data;
    }catch(error){

    }
  }




}
