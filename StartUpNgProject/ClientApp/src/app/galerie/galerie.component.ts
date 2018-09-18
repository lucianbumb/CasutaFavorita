import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-galerie",
  templateUrl: "./galerie.component.html",
  styleUrls: ["./galerie.component.scss"]
})
export class GalerieComponent implements OnInit {
  constructor() {}
  images: string[] = [];

  ngOnInit() {
    for (let i = 1; i < 17; i++) {
      this.images.push(`assets/galerie/img${i}.jpg`);
    }
  }
}
