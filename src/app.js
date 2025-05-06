import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function() {
  //write your code here
  let pronouns = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let textHTML = ""
  
  for (let p = 0; p < pronouns.length; p++){
    for (let a = 0; a < adj.length; a++){
      for (let n= 0; n < noun.length; n++){
        textHTML += `<li> ${pronouns[p]}${adj[a]}${noun[n]} </li>`
      }
    }
  }
  console.log(textHTML)
  let dominios = document.querySelector("#dominios")
  dominios.innerHTML = textHTML

}
