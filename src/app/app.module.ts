import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { AboutMeComponent } from './feature/about-me/about-me.component';
import { ProjectsComponent } from './feature/projects/projects.component';
import { ContactMeComponent } from './feature/contact-me/contact-me.component';
import { SkillsComponent } from './feature/skills/skills.component';
import { NavbarComponent } from './feature/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactMeComponent,
    SkillsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
