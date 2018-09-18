import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-oferta",
  templateUrl: "./oferta.component.html",
  styleUrls: ["./oferta.component.scss"]
})
export class OfertaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  oferte: any[] = getServicii();
}

export function getServicii() {
  return [
    {
      name: "Varianta 1 - 50 lei/copil",
      items: [
        "Acces exclusiv la locul de joaca 2.5 ore",
        "Acces exclusiv la sala de petreceri pentru copii",
        "Amenajare masa copii (pahare, servetele, farfurii, tacamuri)",
        "Baloane de sapun la momentul tortului",
        "Muzica",
        "Mancare pentru copii, pizza sau pireu cu snitel",
        "Bauturi pentru copii, suc si apa plata la discretie",
        "Tortul este asigurat de parintele organizator",
        "Spatiu pentru parinti",
        "Bauturi pentru parinti din incinta spatiului de joaca ",
        "Nu se asigura vesela de unica folosinta pentru parinti"
      ]
    },
    {
      name: "Varianta 2 - 30 lei/copil",
      items: [
        "Acces exclusiv la locul de joaca 2.5 ore",
        "Acces exclusiv la sala de petreceri pentru copii",
        "Spatiu pentru parinti",
        "Mancarea si tortul sunt asigurate de parintele organizator",
        "Bauturi pentru copii si parinti din incinta spatiului de joaca",
        "Nu se asigura vesela de unica folosinta pentru parinti",
        "Optional - Baloane de sapun la momentul tortului – 10 lei",
        "Optional - Balon umplut cu dulciuri – 50 lei"
      ]
    }
  ];
}
