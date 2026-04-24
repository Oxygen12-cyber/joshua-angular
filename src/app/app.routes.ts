import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { ProjectsComponent } from './pages/projects';
import { ContactComponent } from './pages/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
