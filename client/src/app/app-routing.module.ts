import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { LoadingComponent } from './components/pages/loading/loading.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { BorrowPageComponent } from './components/pages/borrow-page/borrow-page.component';
import { BorrowPageUsersComponent } from './components/pages/borrow-page-users/borrow-page-users.component';
import { BorrowPageLendComponent } from './components/pages/borrow-page-lend/borrow-page-lend.component';
import { BorrowPageRequestComponent } from './components/pages/borrow-page-request/borrow-page-request.component';

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
  {
    path: 'borrow/request/:itemId/:userLendId/:itemLendId',
    component: BorrowPageRequestComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
