import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListItemComponent } from './view/user-list-item/user-list-item.component';
import { UserListComponent } from './view/user-list/user-list.component';
import { UserListFilterComponent } from './view/user-list-filter/user-list-filter.component';
import { UserDetailPageComponent } from './view/user-detail-page/user-detail-page.component';

@NgModule({
  declarations: [AppComponent, UserListItemComponent, UserListComponent, UserListFilterComponent, UserDetailPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
