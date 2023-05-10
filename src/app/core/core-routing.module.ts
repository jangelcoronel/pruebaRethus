import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInitialComponent } from '@app/home/components/page-initial/page-initial.component';
import { ContentComponent } from '@app/shared/layout/content/content.component';

const routes: Routes = [
  {
    path: 'rethus',
    component: ContentComponent,
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule)
  },
  { path: '**', redirectTo: '/rethus' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {

  constructor() {
    console.log('cargo routing');

  }
}
