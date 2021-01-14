import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoadingComponent } from './components/loading/loading.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loading', component: LoadingComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
