// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const membri = [
    {
      nome: "Wayne Barnett",
      ruolo: "Founder & CEO	",
      foto: "wayne-barnett-founder-ceo.jpg"
    },
  
    {
      nome: "Angela Caroll",
      ruolo: "Chief Editor",
      foto: "angela-caroll-chief-editor.jpg"
    },
  
    {
      nome: "Walter Gordon",
      ruolo: "Office Manager",
      foto: "walter-gordon-office-manager.jpg"
    },
  
    {
      nome: "Angela Lopez",
      ruolo: "Social Media Manager",
      foto: "angela-lopez-social-media-manager.jpg"
    },
  
    {
      nome: "Scott Estrada",
      ruolo: "Developer",
      foto: "scott-estrada-developer.jpg"
    },
  
    {
      nome: "Barbara Ramos",
      ruolo: "Graphic Designer",
      foto: "barbara-ramos-graphic-designer.jpg"
    },
  
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for(let i = 0; i < membri.length; i++) {

    for(let current in membri[i]) {
        
        console.log(current);   
        console.log(membri[i][current]);

    }
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

const listaEl = document.getElementById("lista");

for(let i = 0; i < membri.length; i++) {

    let liEl = document.createElement("li"); 
    listaEl.append(liEl);

    

    for(let currentkey in membri[i]) {
        
        
        liEl.innerHTML += ` ${currentkey}: ${membri[i][currentkey]}`;

    }
}