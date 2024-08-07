const copyYear = new Date();
const fullcopyYear = copyYear.getFullYear();
console.log(fullcopyYear)

const copyPar = document.getElementById('copy__p');
console.log(copyPar)
const node = document.createTextNode(`kamil-kowalczyk-kppkowalczyk ${fullcopyYear}@code_me`);
console.log(node)
copyPar.appendChild(node);

