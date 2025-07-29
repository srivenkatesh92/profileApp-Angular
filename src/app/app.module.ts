import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificationComponent } from './certification/certification.component';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { CommonUtilsService } from './common-utils.service';

@NgModule({ declarations: [
        AppComponent,
        CertificationComponent,
        FooterComponent,
        AboutComponent,
        ExperienceComponent,
        HeaderComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule], providers: [CommonUtilsService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
