let nomeHerois = [
  "Homem de Ferro",
  "Capitã Marvel",
  "Thor",
  "Hulk",
  "Viúva Negra",
  "Pantera Negra",
  "Doutor Estranho",
  "Visão",
  "Falcão",
  "Máquina de Combate",
  "Homem-Aranha",
  "Groot",
  "Rocket Raccoon",
  "Deadpool",
];
let xpHeroi = [
  950, 1500, 3200, 4800, 5500, 6900, 7100, 7950, 8400, 8999, 9200, 9800, 10001,
  15000,
];
for (let i = 0; i < nomeHerois.length; i++) {
  let nome = nomeHerois[i];
  let xp = xpHeroi[i];
  let rank = "";

  if (xp <= 1000) {
    rank = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    rank = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    rank = "Prata";
  } else if (xp >= 6001 && xp <= 7000) {
    rank = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    rank = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    rank = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    rank = "Imortal";
  } else {
    rank = "Radiante";
  }

  console.log(`Seu nome é ${nome} seu rank e  ${rank}`);
}
