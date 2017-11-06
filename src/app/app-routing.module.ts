import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileGuard } from 'app/profile.guard';
import { TableComponent } from 'app/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent
  },  
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
