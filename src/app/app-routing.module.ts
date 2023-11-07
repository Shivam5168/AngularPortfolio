import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { ContactMeComponent } from './feature/contact-me/contact-me.component';
import { AboutMeComponent } from './feature/about-me/about-me.component';
import { ProjectsComponent } from './feature/projects/projects.component';
import { SkillsComponent } from './feature/skills/skills.component';

const routes: Routes = [{path : 'Home', component : HomeComponent}, {path : "", component : HomeComponent}, {path : "Contact-me", component : ContactMeComponent}, {path : "About-me", component : AboutMeComponent}, {path : "Project", component : ProjectsComponent}, {path : "Skills", component : SkillsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
