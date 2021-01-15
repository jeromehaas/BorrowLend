import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { BorrowPageComponent } from './components/borrow-page/borrow-page.component';
import { BorrowPageUsersComponent } from './components/borrow-page-users/borrow-page-users.component';
import { BorrowPageLendComponent } from './components/borrow-page-lend/borrow-page-lend.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'borrow', component: BorrowPageComponent },
  { path: 'borrow/users/:itemId', component: BorrowPageUsersComponent },
  {
    path: 'borrow/lend/:itemId/:userLendId',
    component: BorrowPageLendComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
