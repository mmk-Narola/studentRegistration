import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { RegisterStudentComponent } from './register-student/register-student.component';

const routes: Routes = [
  { path: 'details', component: DetailComponent },
  { path: 'register', component: RegisterStudentComponent },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'register',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
