import Layout from "../view/layout.js";
import dohvatiRezultate from "./dohvatiRezultate.js";
import RezultatiView from "../view/rezultati.js";

export default () => {
 document.getElementById("app").innerHTML = Layout();
 
 const search = document.getElementById("search");
 search.onchange = async () =>{
  document.getElementById("spinner").style.display = "block";
  let rezultati = await dohvatiRezultate(search.value) //ova func returna promise i zato ga awaitamo i naravno pospremamo u varijablu jer koristimo await
  console.log(rezultati)
  if(rezultati.length < 1) { //provjeravam ako vrati backend praznu listu valjda je dovoljno za ovaj primjer. Znam da se inače može preko headersa geldati u kojem je rangeu tip responsa ono 200-400...
    document.getElementById("rezultati").innerHTML =
    `<h2>Nema traženih rezultata, provjerite jeste li točno upisali ime države</h2>` 
  }else {
    document.getElementById("rezultati").innerHTML = RezultatiView(rezultati)
  }
  document.getElementById("spinner").style.display = "none";
  document.getElementById("rezultati").style.display = "flex"
 }
};