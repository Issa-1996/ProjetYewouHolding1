import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './nutrition/connexion/connexion.component';
import { HomeComponent } from './nutrition/home/home.component';
import { InscriptionComponent } from './nutrition/inscription/inscription.component';
import { MdpOublieComponent } from './nutrition/mdp-oublie/mdp-oublie.component';
import { MonProfilPraticienComponent } from './nutrition/mon-profil-praticien/mon-profil-praticien.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'motDePasseOublie', component: MdpOublieComponent },
  { path: 'monProfilPraticien', component: MonProfilPraticienComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
