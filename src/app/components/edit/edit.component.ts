import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {
  public project!: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public id: string;
  public saveProject: any;
  public url: string;
  public proyecto!: any;
  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.id = '';
    this.status = '';
    this.filesToUpload = new Array();
    this.saveProject = new Array();
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.id = params['id'];
      this.getProject(this.id);
    });
  }

  getProject(id: string) {
    this._projectService.getProject(id).subscribe(
      resultado => {
        this.project = resultado.project;
        console.log(resultado.project);
      },
      error => {
        console.log(<any>error);
    });
  }

  onSubmit(form: any) {
    this._projectService.editProject(this.project).subscribe(
      resultado => {
        this.proyecto = resultado;
        console.log(this.proyecto.project);
        if(this.proyecto.project) {
          
          //subir la imagen
          if(this.filesToUpload) {
              this._uploadService.makeFileRequest(Global.url+"/upload-image/"+this.proyecto.project._id, [], this.filesToUpload, 'image').then((result:any) => {
              console.log(result);
              this.saveProject = result.project;
              this.status = 'success';
            });
          }
          
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
