import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  @ViewChild('imagen') imagen: any;
  @ViewChild('modalImagen') img: any;
  public id: string;
  public data: any;
  public url: string;
  public confirm: boolean;
  constructor(
    private _projectService: ProjectService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.id = '';
    this.data = new Array();
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      //console.log(params.id);
      //console.log(params['id']);
      this.id = params['id'];
      this.getProject(this.id);
    });

    //console.log(this.confirm);
  }

  getProject(id: string) {
    this._projectService.getProject(id).subscribe(
      resultado => {
        //console.log(resultado.project);
        this.data = resultado.project;
      },
      error => {
        console.log(<any>error);
      });
  }


  deleteProject(id: string) {
    this._projectService.deleteProject(id).subscribe(
      resultado => {
        if(resultado.project) {
          this._router.navigate(['/proyectos']);
        } 
      },
      error => {
        console.log(<any>error);
    });
  }

  onEdit(id: string) {
    this._router.navigate(['editar/'+id]);
  }

  confirmation(reply: boolean) {
    this.confirm = reply;
  }

  modalImagen():void {
    const image = this.imagen.nativeElement;
    const altoOriginal = image.naturalHeight;
    const anchoOriginal = image.naturalWidth;
    
    if(anchoOriginal > altoOriginal) {
      console.log("La imagen es ancha");
    } else {
      console.log("La imagen es alta");
    }
  }

  /*crearModalImagen() {
    const modal = document.createElement('div');
    modal.classList.add('modal-imagen');
    //modal.setAttribute('#modalImagen', '');
    modal.onclick = this.limpiarModal;
    document.querySelector('#main').append(modal);
  }

  limpiarModal():void {
    this.img.nativeElement.remove();
  }*/

}
