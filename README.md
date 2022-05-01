## 1. Care este diferența dintre let și var
###### Var
- este folosit de primele versiuni de Javascript
- are function scope
- variabile sunt "hoisted"

###### Let
- a aparut in ES6
- are block scope
- variable sunt "hoisted" dar nu sunt initializat

Exemplu
```javaScript
function angajat(username){
	if(username){
		console.log(salariu); // undefined
		console.log(varsta); //ReferenceError: Cannot access 'varsta' before initialization
		let varsta = 30;
		var salary = 1000;
	}
	console.log(salariu); //1000 este accesibil din cauza functional scope
	console.log(varsta) // 30 nu este accesibil din cauza block scope
}

angajat("bogdan")
```


## 2. Ai un string de cuvinte de mai jos, scrie functie care returneaza numarul cuvinte.
```JavaScript
const text = "Atacurile aleatorii cu rachete ale Hamas nu pot fi susţinute, însă, încetarea focului nu era în totalitate responsabilitatea Hamas."

numarulCuvinte(text);
```

###### Solutia posibila
```JavaScript
function numarulCuvinte(text){

return text.replace(/[\.,!?\?]/g, '').split(" ").length;

//Separam fiecare cuvinte cu " " si inlocuim in cazul in care cuvinte termina cu ., !, ? etc. si returnam lungimea lui array-ul
}

console.log(numarulCuvinte(text))
```


## 3.  Ai un array de objects cu informatii angajatii, afiseaza angajatii care au salariu mai mult de 1000

```JavaScript
const angajatii = [

{

id: 1,

nume: "Ion",

prenume: "Ionescu",

salariu: 700,

},

{

id: 2,

nume: "Gigel",

prenume: "Kovacs",

salariu: 490,

},

{

id: 3,

nume: "Mihai",

prenume: "Popescu",

salariu: 947,

},

{

id: 4,

nume: "Andrei",

prenume: "Jianu",

salariu: 960,

},

{

id: 5,

nume: "Klaus",

prenume: "Ovidiu",

salariu: 1200,

},

{

id: 6,

nume: "Mihai",

prenume: "Popescu",

salariu: 800,

},

{

id: 7,

nume: "Nicolae",

prenume: "Lucian",

salariu: 1150,

},

{

id: 8,

nume: "Sorin",

prenume: "Razvan",

salariu: 1400,

},

{

id: 9,

nume: "Uancu",

prenume: "Liviu",

salariu: 1600,

},

{

id: 10,

nume: "Cristian",

prenume: "Nistor",

salariu: 1100,

},

];

```

###### Solutia posibila
```JavaScript
const angjatiiMaiMultDecat1000 = angajatii.filter((salariuMaiMultDecat1000) => {

return salariuMaiMultDecat1000.salariu > 1000;

});

console.log(angjatiiMaiMultDecat1000);
```
