import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileGridComponent } from './gridbox/profile-grid.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MovingbannerComponent } from './movingbanner/movingbanner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileGridComponent,
    AboutmeComponent,
    MovingbannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
