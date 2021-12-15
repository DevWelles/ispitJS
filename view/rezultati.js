export default (rezultati) => {
  let mojaArr = [];
  if(rezultati.length < 10){
    for (let i = 0; i<rezultati.length; i++){
      mojaArr.push(`<a target="_blank" href="${rezultati[i].web_pages[0]}"><li>${rezultati[i].name}</li></a>`)
      console.log(rezultati[i])
  }
 
}else{
  for (let i = 0; i<10; i++){
    mojaArr.push(`<a target="_blank" href="${rezultati[i].web_pages[0]}"><li>${rezultati[i].name}</li></a>`)
    console.log(rezultati[i])
}
}
  return `<h2>Rezultati za upit ${rezultati[0].country}:</h2> 
  <ol>${mojaArr.join("")}</ol>`
  
};

