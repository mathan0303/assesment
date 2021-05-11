const Publication_Date = document.querySelectorAll('span.col-sm-6.lbl-licitacao > font > font')[0].textContent;
const Bidding_Date = document.querySelectorAll('span.col-sm-6.lbl-licitacao > font > font')[3].textContent;
const Obj = document.querySelectorAll('span.lbl-licitacao ~ p')[0].textContent;
var links = [];
var i;


for(i=0;i<6;i++){
    links = document.querySelectorAll('h2~div > a')[i].host;
}
console.log(Publication_Date);

console.log(Bidding_Date);

console.log(Obj);

console.log(links);
