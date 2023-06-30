import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackEndHostList } from 'src/Back-End.Host';
import { DesignationResquestDTO, GroupeResponseDTO } from 'src/app/Models/Groupe/Groupe';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(private http:HttpClient,private host:BackEndHostList) {

  }

  public async newGroupeTask(projetId:number):Promise<GroupeResponseDTO>{
    try{
     let data =  await this.http.post<GroupeResponseDTO>(this.host.Host_Groupe+"api/v1/groupe/"+projetId,null).toPromise();
     return data;
    }catch(error){

    }
  }

  public async upDesignationGroupe(model:DesignationResquestDTO){
    try{
     let data = await this.http.put(this.host.Host_Groupe+"api/v1/groupe/edit",model,{responseType:'text'}).toPromise();
     return data;
    }catch(error){

    }
  }

  public async delGroupe(groupeId:number){
    try{
     let data = await this.http.delete(this.host.Host_Groupe+"api/v1/groupe/"+groupeId,{responseType:'text'}).toPromise();
     return data;
    }catch(error){

    }
  }

  public async loadGroupesByProjetId(projetId:number):Promise<GroupeResponseDTO[]>{
    try{
     let data =  await this.http.get<GroupeResponseDTO[]>(this.host.Host_Groupe+"api/v1/groupe/ld/"+projetId).toPromise();
     return data;
    }catch(error){

    }
  }

}
