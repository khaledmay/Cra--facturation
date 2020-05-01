import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { RequestService } from '../services/requests.service';
import { Project } from '../models/Project';
import { ProjectType } from '../enums/ProjectType';
import { ProjectStatus } from '../enums/ProjectStatus';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  private url:String;

  constructor(private requestService : RequestService) { 
    this.url=""; // url of the backend service which save the customer in the database
  }

  ngOnInit(): void {
  }

  typeProjet : ProjectType;
  statusProjet : ProjectStatus;
  project=new FormGroup({
    titre : new FormControl('', Validators.required),
    referenceNumber : new FormControl('', Validators.required)
    });

    public get titre(){
      return this.project.get('titre');
    }
  
    public get referenceNumber(){
      return this.project.get('referenceNumber');
    }

    addProject() : void {
      let project : Project;
      if(this.titre.status=="VALID" && this.referenceNumber.status=="VALID")
      {
        project=new Project(this.titre.value,this.referenceNumber.value,this.typeProjet,this.statusProjet);
        console.log(project);
        this.requestService.post(this.url,project).subscribe(resultat => console.log(resultat));
      }
      else
        this.project.setErrors({required: true});
    }

    public projectTypes() : Array<string> {
      const projectTypes = ProjectType;
      var keys = Object.keys(projectTypes);
      return keys;
    }

    public projectStates() : Array<string> {
      const projectStatus = ProjectStatus;
      var keys = Object.keys(projectStatus);
      return keys;
    }

    public chooseProjectType(projectType : String) : void {
      switch(projectType){
        case "FORFAIT" : this.typeProjet=ProjectType.FORFAIT;
        break;
        case "REGIE" : this.typeProjet=ProjectType.REGIE;
        break;
        default : this.typeProjet=ProjectType.REGIE;
      }    
    }

    public chooseProjectStatus(projectStatus : String) : void {
      switch(projectStatus){
        case "STATUS1" : this.statusProjet=ProjectStatus.STATUS1;
        break;
        case "STATUS2" : this.statusProjet=ProjectStatus.STATUS2;
        break;
        default : this.statusProjet=ProjectStatus.STATUS2;
      }    
    }
    
}
