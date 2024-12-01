import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importar modulos para consumir API´s
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//importar los exports de el archivo routing
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { EditComponent } from './components/edit/edit.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    EditComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
