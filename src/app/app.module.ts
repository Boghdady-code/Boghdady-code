import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { HomeComponent } from './componenets/home/home.component';
import { AboutComponent } from './componenets/about/about.component';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './componenets/projects/projects.component';
import { ContactComponent } from './componenets/contact/contact.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateModule } from 'primeng/animate';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AnimateModule,
    AnimateOnScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
