import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { TrainingComponent } from './components/trainings/training/training.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path: '', component: WelcomeComponent  },
  {path: 'signup', component: SignupComponent  },
  {path: 'login', component: LoginComponent  },
  { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule { }
