import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './nutrition/bar/bar.component';
import { ConnexionComponent } from './nutrition/connexion/connexion.component';
import { DashboardComponent } from './nutrition/dashboard/dashboard.component';
import { NavGuaucheComponent } from './nutrition/dashboard/nav-guauche/nav-guauche.component';
import { HomeComponent } from './nutrition/home/home.component';
import { HoraireComponent } from './nutrition/horaire/horaire.component';
import { InscriptionComponent } from './nutrition/inscription/inscription.component';
import { LieuComponent } from './nutrition/lieu/lieu.component';
import { MdpOublieComponent } from './nutrition/mdp-oublie/mdp-oublie.component';
import { MonProfilPraticienComponent } from './nutrition/mon-profil-praticien/mon-profil-praticien.component';
import { PresentationComponent } from './nutrition/presentation/presentation.component';
import { RecommandationComponent } from './nutrition/recommandation/recommandation.component';
import { ChatsComponent } from './nutrition/chats/chats.component';
import { BlogComponent } from './nutrition/blog/blog.component';



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
