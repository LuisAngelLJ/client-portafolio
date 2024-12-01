import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public proyectos: any;
  public nameImage: string;
  public url: string;
  constructor(
    private _projectService: ProjectService
  ) {
    this.proyectos = new Array();
    this.nameImage = '';
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this._projectService.getProjects().subscribe(
      resultado => {
        if(resultado.projects) {
          this.proyectos = resultado.projects;
          console.log(resultado.projects);
        }
      },
      error => {
        console.log (<any>error);
      }
    );
  }

}
