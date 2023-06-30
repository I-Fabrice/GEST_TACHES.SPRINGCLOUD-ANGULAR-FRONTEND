import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BackEndHostList{

  public Host_Compte:string = "http://localhost:8080/";
  public Host_Tache:string = "http://localhost:8081/";
  public Host_Projet:string = "http://localhost:8082/";
  public Host_Groupe:string = "http://localhost:8083/";
  public Host_Fichier:string = "http://localhost:8084/";
  public Host_Statut:string = "http://localhost:8085/";
  public Host_ProjetCompte:string = "http://localhost:8086/";
  public Host_TacheCompte:string = "http://localhost:8087/";


  constructor() {

  }
}
