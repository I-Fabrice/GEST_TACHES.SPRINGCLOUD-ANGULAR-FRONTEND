import { DesignationRequestDTO, StatutRequestDTO, EditResponseDTO } from './../../Models/Tache/Tache';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackEndHostList } from 'src/Back-End.Host';
import { TacheResponseDTO } from 'src/app/Models/Tache/Tache';

@Injectable({
  providedIn: 'root'
})
export class TacheServices {

  constructor(private http:HttpClient,private host:BackEndHostList) {

  }

  public async newTask(groupeId:number):Promise<TacheResponseDTO>{
    try{
      let data = await this.http.post<TacheResponseDTO>(this.host.Host_Tache+"api/v1/tache/"+groupeId,null).toPromise();
      return data;
    }catch(error){

    }
  }

  public async setDesignationTask(model:DesignationRequestDTO){
    try{
      let data = await this.http.put(this.host.Host_Tache+"api/v1/tache/edit/ds",model,{responseType:'text'}).toPromise();
      return data;
    }catch(error){

    }
  }

  public async deleteTask(tacheid:number){
    try{
      let data = await this.http.delete(this.host.Host_Tache+"api/v1/tache/"+tacheid,{responseType:'text'}).toPromise();
      return data;
    }catch(error){

    }
  }

  public async setStatut(model:StatutRequestDTO){
    try{
      let data = await this.http.put(this.host.Host_Tache+"api/v1/tache/edit/st",model,{responseType:'text'}).toPromise();
      return data;
    }catch(error){

    }
  }

  public async editTache(model:EditResponseDTO){
    try{
      let data = await this.http.put(this.host.Host_Tache+"api/v1/tache/edit/tk",model,{responseType:'text'}).toPromise();
      return data;
    }catch(error){

    }
  }

  public async loadTacheByRef(ref:number):Promise<EditResponseDTO>{
    try{
      let data = await this.http.get<EditResponseDTO>(this.host.Host_Tache+"api/v1/tache/ld/"+ref).toPromise();
      return data;
    }catch(error){

    }
  }

  public async loadAllTache():Promise<TacheResponseDTO[]>{
    try{
      let data = await this.http.get<TacheResponseDTO[]>(this.host.Host_Tache+"api/v1/tache/").toPromise();
      return data;
    }catch(error){

    }
  }


}
