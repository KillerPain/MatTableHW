import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileGuard } from 'app/profile.guard';
import { ProfileComponent } from 'app/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    resolve: {
      profileData: ProfileGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
