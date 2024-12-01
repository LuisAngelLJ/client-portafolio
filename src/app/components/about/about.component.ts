import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor() {
    this.title = 'Luis Angel Leyva Jaime';
    this.subtitle = 'Desarrollador Front End';
    this.email = 'ing_luisangellj@hotmail.com';
  }

  ngOnInit(): void {
  }

}
