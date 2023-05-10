import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInitialComponent } from './components/page-initial/page-initial.component';


const routes: Routes = [
  { path: '', component: PageInitialComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
