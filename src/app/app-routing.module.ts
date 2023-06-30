import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentMainComponent } from './Components/Layouts/content-main/content-main.component';


const routes: Routes = [
   { path: 'project/:id', component: ContentMainComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
