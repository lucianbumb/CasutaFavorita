import { Serviciu } from "./models";

export function getServicii() {
  return [
    new Serviciu("assets/svgs/balloon.svg", "loc de joaca copii pana la 3 ani"),
    new Serviciu("assets/svgs/balloons.svg", "loc de joaca copii peste 3 ani"),
    new Serviciu("assets/svgs/clamber.svg", "topogan"),
    new Serviciu("assets/svgs/climbing.svg", "perete cățărat"),
    new Serviciu("assets/svgs/dance.svg", "loc de dans"),
    new Serviciu("assets/svgs/dancer.svg", "muzica"),
    new Serviciu("assets/svgs/jumping.svg", ""),
    new Serviciu("assets/svgs/pull.svg", "piscina cu bile"),
    new Serviciu("assets/svgs/slide.svg", "")
  ];
}
