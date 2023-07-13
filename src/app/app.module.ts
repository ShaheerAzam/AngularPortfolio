import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileGridComponent } from './gridbox/profile-grid.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MovingbannerComponent } from './movingbanner/movingbanner.component';
import { FooterComponent } from './footer/footer.component';
import { SlidedivComponent } from './slidediv/slidediv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileGridComponent,
    AboutmeComponent,
    MovingbannerComponent,
    FooterComponent,
    SlidedivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
