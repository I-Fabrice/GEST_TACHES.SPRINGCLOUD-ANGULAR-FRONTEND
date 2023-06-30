import { CompteResponseDTO, EditResponseDTO } from './../../../Models/Tache/Tache';
import { DesignationResquestDTO } from './../../../Models/Groupe/Groupe';
import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GroupeResponseDTO } from 'src/app/Models/Groupe/Groupe';
import { GroupeService } from 'src/app/Services/Groupe/groupe-services.ts.service';
import { TacheServices } from 'src/app/Services/Tache/tache.services.service';
import { DesignationRequestDTO, StatutRequestDTO, TacheResponseDTO } from 'src/app/Models/Tache/Tache';
import { ProjetCompteServices } from 'src/app/Services/ProjetCompte/projet-compte-services.ts.service';
import { Compte } from 'src/app/Models/Compte/compte';
/*
import { element } from 'protractor';*/
// import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.css']
})

export class ContentMainComponent implements OnInit {


  id:number = 0;
  Group:string = "";
  render:string;
  shakefile: boolean = false;
  modelGroupe:GroupeResponseDTO;
  desc:string = "hhey";
  tache:EditResponseDTO;
  groupes:GroupeResponseDTO[] = []
  taches:TacheResponseDTO[] = []
  renderModal:boolean = true;

  // displayStyle:string = "none";

  constructor(private compteServices:ProjetCompteServices,private elementRef:ElementRef,private servicesGroupe:GroupeService,private route:ActivatedRoute,private servicesTache:TacheServices) {

    this.render = ''
    this.modelGroupe = {ref:0,designation:''};

    this.tache = {ref:0,description:'',delai:null,compteResponseDTOS:null,priority:null};

    this.servicesGroupe.loadGroupesByProjetId(this.route.snapshot.params.id).then((response:GroupeResponseDTO[]) =>{
      this.groupes = response;
      console.log(response)
    });

    this.servicesTache.loadAllTache().then((response:TacheResponseDTO[])=>{
      this.taches = response
      console.log(response);
    });

    Window["myComponent"] = this;
    // this.desc = ""
  }



  ngOnInit() {
    this.tache = {ref:null,description:'',delai:null,compteResponseDTOS:null,priority:null};
    setInterval(() => {
      this.tache = this.tache
      // console.log(this.tache)
    },100)
    // newTask(5)
    // this.setTache()

  }

  public newGroupe(){


    this.servicesGroupe.newGroupeTask(this.route.snapshot.params.id).then((response:GroupeResponseDTO)=>{

        this.modelGroupe = response;
        this.id = this.modelGroupe.ref;

       // (document.getElementById('group') as HTMLInputElement).value*/ // this.Group = '<a onclick="Window.myComponent.test()">click mee</a>'

       // (document.getElementById('group') as HTMLInputElement).value +=

       // onclick="Window.myComponent.test('+this.id+')"
       // this.Group +=

    document.getElementById('group').innerHTML +=

    // MANAGE FILE FILES
    /*
    '<div id="menu-'+this.id+'">'+
      '<div class="head" style="float: left;">'+
        '<i class="bx bx-plus" title="Ajoutez Fichier" onclick="Window.myComponent.fladd('+this.id+')"></i>'+
        '<i class="bx bx-minus" id="icon-file-'+this.id+'" onclick="Window.myComponent.flshk('+this.id+')"></i>'+
      '</div>'+

      '<ul class="head row-3" style="margin: 30px;" id="file-'+this.id+'">'+

      '</ul>'+


    '</div>'*/

    // MANAGE GROUP TASK

    '<div class="todo" id="menu-'+this.id+'">'+
      '<div class="head">'+
        '<h3 style="font-weight: bold;"> <input id="input-'+this.id+'" style="background: var(--light);border:none;outline:none;float:left" type="text" value="'+this.modelGroupe.designation+'" oninput="Window.myComponent.setNameGroupe('+this.id+')" class="text"></h3>'+

          '<i class="bx bx-plus" onclick="Window.myComponent.add('+this.id+')"></i>'+
          '<i class="bx bx-minus" onclick="Window.myComponent.rm('+this.id+')"></i>'+

      '</div>'+
     ' <ul class="todo-list" id="task-'+this.id+'">'+


      '</ul>'+
    '</div>'


    // console.log(this.Group = (document.getElementById('group') as HTMLInputElement).value);


    })

  }

  public setNameGroupe(groupeId:number){

    var designation = (<HTMLInputElement>document.getElementById("input-"+groupeId)).value;

    let model:DesignationResquestDTO = {ref: groupeId,designation: designation}
    this.servicesGroupe.upDesignationGroupe(model).then(response=>console.log(response))

  }

  public setNameTask(tacheId:number){
    var designation = (<HTMLInputElement>document.getElementById("input-task-"+tacheId)).value;

    let model:DesignationRequestDTO = {ref:tacheId,designation:designation}
    this.servicesTache.setDesignationTask(model).then(response=>console.log(response))

  }

  public fladd(data:any){

   if(this.shakefile == false){


    if ( document.getElementById('file-'+data+'').children.length == 4){
        console.log('Limite de Fichier importer atteint !!')
    }
    else{

      document.getElementById('file-'+data+'').innerHTML +=


      '<li id="item-file-'+data+'" style="cursor: pointer">'+
        ' <i class="bi bi-file-earmark-pdf" style="color: red;" onclick="Window.myComponent.flevent('+data+')"></i>'+
      '</li>';
    }


   }

  }

  public flevent(data:any){

    if(document.getElementById("item-file-"+data).className == "just-shake"){
       document.getElementById("item-file-"+data).remove();

       if(document.querySelectorAll("file-"+data).length == 0){
         this.shakefile = false;
         this.changeIconFile(data,this.shakefile)
       }

    }

  }

  public flshk(data:any){

    if(this.shakefile == false){

      if(document.getElementById("file-"+data).children.length != 0){

        document.querySelectorAll('#item-file-'+data).forEach((item)=>{
         item.className = "just-shake";
        })

        this.shakefile = true;

        //
        this.changeIconFile(data,this.shakefile);
      }
    }
    else{

      if(document.getElementById("file-"+data).children.length != 0){
        document.querySelectorAll('#item-file-'+data).forEach((item)=>{
          item.className = "";
        })

        this.shakefile = false;
        //
        this.changeIconFile(data,this.shakefile);
      }

    }
  }

  public changeIconFile(id:any,shkefile:boolean){
    if(shkefile == true){
       document.getElementById("icon-file-"+id).className = "bx bx-x"
       document.getElementById("icon-file-"+id).title = "Annulez la suppréssion"
    }
    else if(shkefile == false){
       document.getElementById("icon-file-"+id).className = "bx bx-minus"
       document.getElementById("icon-file-"+id).title = "Supprimez document"
    }
  }


  public add(data:any){
    this.newTask(data)
  }

  public rm(data:any){
     // document.getElementById('menu-'+data).remove();
     this.removeAllParentNodes(document.querySelectorAll('#menu-'+data))

     this.servicesGroupe.delGroupe(data).then((response) => console.log(response));

  }

  public del(tacheId:any){
    this.servicesTache.deleteTask(tacheId).then((response) => {
      console.log(response)
      document.getElementById('item-'+tacheId).remove()
    });

  }

  public clr(tacheId:number){

    if(document.getElementById('item-'+tacheId).className == 'not-start'){
      let color = document.getElementById('item-'+tacheId).className = 'in-progress'
      this.callMethod(tacheId,color);
    }
    else if(document.getElementById('item-'+tacheId).className == 'in-progress'){
      let color = document.getElementById('item-'+tacheId).className = 'completed'
      this.callMethod(tacheId,color);
    }
    else if(document.getElementById('item-'+tacheId).className == 'completed'){
      let color = document.getElementById('item-'+tacheId).className = 'not-completed'
      this.callMethod(tacheId,color);
    }
    else if(document.getElementById('item-'+tacheId).className == 'not-completed'){
      let color = document.getElementById('item-'+tacheId).className = 'not-start'
      this.callMethod(tacheId,color);
    }

  }

  public callMethod(tacheId:number,color:string):void{
    let model:StatutRequestDTO = {ref:tacheId,designation: color }
    this.servicesTache.setStatut(model).then((response:string)=> console.log(response))
  }

  ngAfterViewChecked(){
    // this.desc = "One Stop Solution for all CS problems "+this.id;
  }

  public newTask(groupeId:number){


   this.servicesTache.newTask(groupeId).then((tache:TacheResponseDTO) =>{
    console.log(tache)


    // MANAGE TASKS
    /*
    '<li class="'+tache.statutResponseDTO.designation+'" style="cursor:pointer" id="item-'+tache.ref+'">'+
        '<p class="text"> <input id="input-task-'+tache.ref+'" style="background:none;border:none;outline:none" type="text" value="'+tache.designation+'" onclick="Window.myComponent.setNameTask('+tache.ref+')"></p>'+

            '<b>'+
              '<i class="bx bx-color-fill" style="margin-right:10px" id="hey" onclick="Window.myComponent.clr('+tache.ref+')"></i>'+
              '<i class="bx bx-dots-vertical-rounded" id="dropdownMenuButton1" data-bs-toggle="dropdown"></i>'+
              '<i class="dropdown-menu">'+
                  '<a class="dropdown-item" onclick="Window.myComponent.openPopup('+tache.ref+')">Options</a>'+
                  '<a class="dropdown-item" onclick="Window.myComponent.del('+tache.ref+')">Delete</a>'+
              '</i>'+
            '</b>'+

    '</li>';*/
    window.location.reload();
   })




  }

public removeAllParentNodes(data) {

    data.forEach(element => {
            element.remove();
    });
}

public transit(ref:number){
  this.render = 'yes';
  this.openPopup(ref);
}

public openPopup(ref:number) {
  // this.setTache(response)
  // this.ngAfterViewChecked(ref);


  this.servicesTache.loadTacheByRef(ref).then((response:EditResponseDTO) => {

    this.tache  = response;
    console.log(this.tache);
    // this.renderModal = false
    // console.log(this.renderModal)

    document.getElementById("md").style.display = "block";
  });


  // document.getElementById("exampleInputEmail1").inn = "One Stop Solution for all CS problems"

  /*
  this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundColor = "rgba(0, 0, 0, .5);"*/

}

public closePopup() {

  document.getElementById("md").style.display = "none";
  /*
  this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundColor = ""*/

}

public newTache(model:any){
  if(model.compteId == ""){
    model.compteId = null
  }
  model.compteId = []
  if(this.tache.compteResponseDTOS != null){
    this.tache.compteResponseDTOS.forEach(item=>{
      model.compteId.push({compteId:item.ref})
    })
  }


  console.log(model)
  this.servicesTache.editTache(model);
}

public onSaveMember(){
  var email = document.getElementById("email") as HTMLInputElement

  this.compteServices.loadCompteByEmail(email.value).then((response:Compte)=>{
    this.tache.compteResponseDTOS = []
    this.tache.compteResponseDTOS.push({ref:response.ref,nom:response.nom})
  })
}

ngAfterViewInit() {


}


}
