import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule
} from "@angular/material";
import { RezervariComponent } from "./rezervari/rezervari.component";
import { ReactiveFormsModule } from "@angular/forms";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ServiciiComponent } from "./servicii/servicii.component";
import { ServiciuViewComponent } from "./servicii/serviciu-view/serviciu-view.component";
import { OfertaComponent } from "./oferta/oferta.component";
import { ContactComponent } from "./contact/contact.component";
import { IconsComponent } from "./icons/icons.component";
import { FooterComponent } from "./footer/footer.component";
import { GalerieComponent } from "./galerie/galerie.component";
import { ImageSliderDirective } from "./image-slider.directive";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RezervariComponent,
    LandingPageComponent,
    ServiciiComponent,
    ServiciuViewComponent,
    OfertaComponent,
    ContactComponent,
    IconsComponent,
    FooterComponent,
    GalerieComponent,
    ImageSliderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
