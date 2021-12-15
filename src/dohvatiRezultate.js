export default async (terminPretrage) => {
  let rezSaServera = await fetch(`http://universities.hipolabs.com/search?country=${terminPretrage}`);
  let rezJSON = await rezSaServera.json();
  // console.log(rezJSON)
  return rezJSON //vraćamo promise
}

