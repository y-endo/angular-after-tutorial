import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExplicitSubscribeComponent } from './views/explicit-subscribe/explicit-subscribe.component';
import { AsyncPipeComponent } from './views/async-pipe/async-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ExplicitSubscribeComponent,
    AsyncPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
