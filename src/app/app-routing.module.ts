import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { AppViewComponent } from './app-view/app-view.component';
import { ModelesComponent } from './modeles/modeles.component';
import { PersonalisationComponent } from './personalisation/personalisation.component';
import { InfosComponent } from './infos/infos.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  {path:'panier', component:AuthComponent},
  {path:'modeles', component:ModelesComponent},
  {path:'personalisation',component:PersonalisationComponent},
  {path:'informations',component:InfosComponent},
  {path:'accueil', component:AppViewComponent},
  {path:'',component:AppViewComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
