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


## 1. Ai un string de cuvinte de mai jos, scrie functie care returneaza numarul cuvinte.
```JavaScript
const text = "Atacurile aleatorii cu rachete ale Hamas nu pot fi susţinute, însă, încetarea focului nu era în totalitate responsabilitatea Hamas."

numarulCuvinte(text);
```

```JavaScript
function numarulCuvinte(text){

return text.replace(/[\.,!?\?]/g, '').split(" ").length;

//Separam fiecare cuvinte cu " " si inlocuim in cazul in care cuvinte termina cu ., !, ? etc. si returnam lungimea lui array-ul
}

console.log(numarulCuvinte(text))
```