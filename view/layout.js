export default () => {
  return `
  
  <div id="container">
  <h1>Pretražite top 10 sveučilišta bilo koje države</h1>
  <h2>Ako ta država nema 10 sveučilišta kao što je primjer Slovenija, prikazat će se sva sveučilišta koja postoje</h2>
      <label for="search">Molim vas ispravno upišite ime željene države i stisnite enter:</label>
      <input type="text" id="search" name="search" />
    <div id="spinner"></div>
    </div>
    <div>
      <div id="rezultati"></div>
    </div>
  `;
};