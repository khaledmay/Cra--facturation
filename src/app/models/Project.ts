import { ProjectType } from '../enums/ProjectType';
import { ProjectStatus } from '../enums/ProjectStatus';

export class Project{

    public titre : String;
    public referenceNumber : String;
    public typeProjet : ProjectType;
    public statusProjet : ProjectStatus;
    
    constructor(titre : String, referenceNumber : String, typeProjet : ProjectType, statusProjet : ProjectStatus){
        this.titre=titre;
        this.referenceNumber=referenceNumber;
        this.typeProjet=typeProjet;
        this.statusProjet=statusProjet;
    }

}