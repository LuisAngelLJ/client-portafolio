//importaciones para hacer perticiones a API´s
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//importar modelo
import { Project } from '../models/project';
//importar la url de la API
import { Global } from './global';


@Injectable()
export class ProjectService {
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	testService() {
		return 'Probando el servicio de Angular';
	}

	saveProject(project: Project):Observable<any> {
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+'/save', params, {headers: headers});
	}

	getProjects():Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'/projects', {headers: headers});
	}

	getProject(id: string):Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'/project/'+id, {headers: headers});
	}

	deleteProject(id: string):Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'/project/'+id, {headers: headers});
	}

	editProject(project: Project) {
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'/project/'+project._id, params, {headers: headers});
	}
}