import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public saveProject: any;
  public url: string;
  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.project = new Project('', '', '', '', 2022, '', '');
    this.status = '';
    this.filesToUpload = new Array();
    this.saveProject = new Array();
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      resultado => {
        if(resultado.project) {
          
          //subir la imagen
          this._uploadService.makeFileRequest(Global.url+"/upload-image/"+resultado.project._id, [], this.filesToUpload, 'image').then((result:any) => {
            console.log(result);
            this.saveProject = result.project;
            this.status = 'success';
            form.reset();
          });
          
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
