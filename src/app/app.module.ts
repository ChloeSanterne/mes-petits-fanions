import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { AppViewComponent } from './app-view/app-view.component';

import { ModelesComponent } from './modeles/modeles.component';
import { PersonalisationComponent } from './personalisation/personalisation.component';
import { InfosComponent } from './infos/infos.component';
import { PersoService} from './services/perso.service';
import { FanionEditComponent } from './fanion-edit/fanion-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    FooterComponent,
    AuthComponent,
    AppViewComponent,
    ModelesComponent,
    PersonalisationComponent,
    InfosComponent,
    FanionEditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    FormsModule
    
  ],
  providers: [
    PersoService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
