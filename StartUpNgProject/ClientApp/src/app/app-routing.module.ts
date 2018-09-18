import { GalerieComponent } from "./galerie/galerie.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [{ path: "", component: LandingPageComponent }]
  },
  { path: "galerie", component: GalerieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
