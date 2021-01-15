import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { usersReducer } from './reducers/users.reducer';
import { itemsReducer } from './reducers/items.reducer';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ItemCardSearchComponent } from './components/item-card-search/item-card-search.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { BorrowPageComponent } from './components/borrow-page/borrow-page.component';
import { ItemCardBorrowComponent } from './components/item-card-borrow/item-card-borrow.component';
import { BorrowPageUsersComponent } from './components/borrow-page-users/borrow-page-users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LoadingComponent,
    ItemCardSearchComponent,
    SearchPageComponent,
    BorrowPageComponent,
    ItemCardBorrowComponent,
    BorrowPageUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      user: usersReducer,
      items: itemsReducer,
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
