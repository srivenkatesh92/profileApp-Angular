import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificationComponent } from './certification/certification.component';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { CommonUtilsService } from './common-utils.service';

@NgModule({
  declarations: [
    AppComponent,
    CertificationComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CommonUtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
