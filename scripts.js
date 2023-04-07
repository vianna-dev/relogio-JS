let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let ampm = document.getElementById("ampm");

let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let hr_ponto = document.querySelector(".hr_ponto");
let min_ponto = document.querySelector(".min_ponto");
let seg_ponto = document.querySelector(".seg_ponto");

setInterval(() => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let amdDmd = h >= 12 ? "PM" : "AM";

  // converter 24h para 12h

  if (h > 12) {
    h = h - 12;
  }

  //adicionar zero antes de um unico numero

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  horas.innerHTML = h + "<br><spanp>Horas</spanp>";
  minutos.innerHTML = m + "<br><spanp>minutos</spanp>";
  segundos.innerHTML = s + "<br><spanp>segundos</spanp>";
  ampm.innerHTML = amdDmd;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  // 360 / 12 = 30
  hr_ponto.style.transform = `rotate($ {h * 30} deg)`;

  // 360 / 60 = 30
  min_ponto.style.transform = `rotate($ {m * 6} deg)`;

  // 360 / 60 = 30
  seg_ponto.style.transform = `rotate($ {s * 6} deg)`;
});
