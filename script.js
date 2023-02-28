'use strict';

//Default parameters

/* Le code déclare une fonction appelée createBooking qui prend en paramètre trois arguments : flightNum, numPassengers et price. La fonction crée ensuite un objet avec ces 3 propriétés et l'affiche dans la console avant de le pousser dans un tableau appelé bookings.

Le second paramètre, numPassengers, est par défaut à 1 si non précisé. De même, le troisième paramètre, price, est mis à 199 * numPassengers par défaut s'il n'est pas spécifié.

Le code appelle la fonction createBooking quatre fois avec différentes combinaisons d'arguments. Dans la dernière invocation, nous fournissons seulement une valeur pour flightNum et nous laissons les deux autres paramètres à leurs valeurs par défaut, i.e. undefined. Cet appel sera équivalent à celui-ci : createBooking("LH123", 1, 199);, où numPassengers et price sont calculés à partir de leurs valeurs par défaut. */

// This script uses ES6 syntax to create a booking function with default parameters.

// Initialize an empty array to store bookings
const bookings = [];

// Create a function called createBooking that accepts three parameters, with the last two having default values.
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5 Syntax (used before ES6):
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  // Create a booking object with the provided or default parameters
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  // Print the booking object to the console
  console.log(booking);

  // Add the booking object to the bookings array
  bookings.push(booking);
};

// Call the createBooking function with different sets of arguments to test its behavior
// createBooking('LH123'); // prints {flightNum: "LH123", numPassengers: 1, price: 199} and adds the object to the bookings array
// createBooking('LH123', 2, 800); // prints {flightNum: "LH123", numPassengers: 2, price: 800} and adds the object to the bookings array
//createBooking('LH123', 2); // prints {flightNum: "LH123", numPassengers: 2, price: 199} and adds the object to the bookings array
// createBooking('LH123', 5); // prints {flightNum: "LH123", numPassengers: 5, price: 199} and adds the object to the bookings array
// createBooking('LH123', undefined, 1000); // prints {flightNum: "LH123", numPassengers: 1, price: 1000} and adds the object to the bookings array (using undefined as a placeholder for the second argument)

// ------------------------------------------------------------------//

// How Passing Arguments Works: Value vs. Reference

/* Cet exemple de code montre comment le passage d'une valeur, 
comme un type de données primitif - dans ce cas "LH234" en tant 
que variable flight - fonctionne différemment du passage d'une référence, 
telle qu'un objet avec des propriétés telles que jonas dans l'exemple ci-dessous.

Lors du passage d'une valeur, la fonction prendra une copie de cette valeur 
et les modifications apportées à celle-ci n'affecteront pas la variable originale 
en dehors de la fonction. Cela s'appelle « passer par valeur ».

Lorsqu'une référence est passée, la fonction prendra une référence (un pointeur) à 
l'objet original et les modifications apportées à celui-ci dans le corps de la fonction 
seront reflétées dans la copie originale de l'objet en dehors de la fonction. 
Cela s'appelle « passer par référence ».

Dans l'exemple, nous voyons les deux techniques utilisées. Le numéro de vol est transmis 
sous forme de chaîne standard et ensuite modifié dans le corps de la fonction, 
mais étant donné que les chaînes sont un type de données primitives, la valeur originale 
reste inchangée en dehors du corps de la fonction.

Cependant, l'objet jonas est passé par référence. Lorsque la fonction modifie la propriété nom, 
elle affecte l'objet original dans le contexte global, et les changements sont visibles en dehors 
du corps de la fonction. De plus, le numéro de passeport est généré aléatoirement à l'aide d'une 
nouvelle fonction de passeport, où l'objet jonas est passé par référence et donc les changements 
dans la propriété passeport sont également visibles dans le contexte global. */

// Déclaration de la variable flight avec la valeur 'LH234'
const flight = 'LH234';

// Déclaration d'un objet jonas avec deux propriétés : name et passport
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

// Déclaration d'une fonction checkIn avec deux paramètres : flightNum et passenger
const checkIn = function (flightNum, passenger) {
  // La valeur de flightNum est changée à 'LH999'
  flightNum = 'LH999';
  // La propriété name de l'objet passenger est modifiée en ajoutant 'Mr. ' au début
  passenger.name = 'Mr. ' + passenger.name;

  // Vérification que le numéro de passeport du passager correspond à la valeur attendue
  if (passenger.passport === 24739479284) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport!');
  }
};

// Appel de la fonction checkIn avec les arguments flight et jonas
// checkIn(flight, jonas);

// Affichage de la valeur de la variable flight dans la console
// console.log(flight);

// Affichage de l'objet jonas dans la console
// console.log(jonas);

// La partie suivante est un commentaire qui explique ce qui se passe dans le code ci-dessus
// C'est la même chose que de faire...
// const flightNum = flight;
// const passenger = jonas;

// Déclaration d'une fonction newPassport avec un paramètre person
const newPassport = function (person) {
  // La propriété passport de l'objet person est modifiée avec une valeur aléatoire entre 0 et 100000 (arrondie à l'entier inférieur)
  person.passport = Math.trunc(Math.random() * 100000);
};

// Appel de la fonction newPassport avec l'objet jonas comme argument
newPassport(jonas);

// Appel de la fonction checkIn avec les arguments flight et jonas (qui a maintenant un nouveau numéro de passeport)
checkIn(flight, jonas);

// ------------------------------------------------------------------//

// First-Class and Higher-Order Functions
//Voir la documenentation de Jonas pour plus d'explications

//------------------------------------------------------------------//

//FUNCTION ACCEPTING CALLBACK FUNCTIONS

/* Ce code illustre comment utiliser des fonction callback en JavaScript. 
La fonction transformer() est une fonction de haut niveau - elle prend en 
compte deux arguments, la chaîne et une fonction callback. Cette fonction 
exécutera alors la fonction callback donnée sur la chaîne, retournant une 
version transformée de l'argument d'entrée.

Les fonctions oneWord() et upperFirstWord() sont toutes deux des fonctions callback. 
Dans cet exemple, upperFirstWord() mettra en majuscule le premier mot de la chaîne d'entrée, 
tandis que oneWord() transformera la chaîne complète en un mot en minuscules (en remplaçant tous les espaces par rien).

Enfin, high5() est un autre exemple de callback qui sera exécuté à plusieurs reprises, 
par exemple dans une boucle. Dans ce cas particulier, lorsque le corps du document est 
cliqué ou lorsqu’un tableau de noms est itéré dans une boucle, la fonction callback high5() est invoquée. */

// Cette fonction prend une chaîne de caractères et renvoie une version en minuscules sans espaces
const oneWord = function (str) {
  return str.replaceAll(' ', ' ').toLowerCase();
};

// Cette fonction prend une chaîne de caractères et renvoie une version avec le premier mot en majuscule et le reste en minuscule
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Cette fonction prend une chaîne de caractères et une fonction de transformation, applique la fonction de transformation à la chaîne de caractères, puis affiche la chaîne de caractères d'origine, la chaîne transformée et le nom de la fonction de transformation utilisée
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transform string ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

// Applique la fonction upperFirstWord à la chaîne de caractères 'JavaScript is the best!' et affiche le résultat
transformer('JavaScript is the best!', upperFirstWord);

// Applique la fonction oneWord à la chaîne de caractères 'JavaScript is the best!' et affiche le résultat
transformer('JavaScript is the best!', oneWord);

// Déclare une fonction high5 qui affiche un emoji "rock on" dans la console
const high5 = function () {
  //console.log('🤟');
};

// Attache la fonction high5 à l'événement click du corps du document, de sorte que chaque clic sur le corps du document affiche l'emoji "rock on" dans la console
document.body.addEventListener('click', high5);

// Applique la fonction high5 à chaque élément du tableau ['Jonas', 'Martha', 'Adam'], de sorte que chaque élément affiche l'emoji "rock on" dans la console
['Jonas', 'Martha', 'Adam'].forEach(high5);

//------------------------------------------------------------------//

//FUNCTION RETURNING FUNCTIONS

// Créer une fonction qui prend un paramètre greeting et
// Retourne une fonction qui prendra un paramètre name
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Utiliser la fonction greeter avec le paramètre 'Hey'
const greeterHey = greet('Hey');

// Appeler greeterHey avec les noms suivants en tant que paramètres
greeterHey('Jonas');
greeterHey('Steven');

// Appeler directement greet avec le paramètre 'Hello' et le nom Jonas
greet('Hello')('Jonas');

// La même chose en utilisant des fonctions fléchées
const greet2 = greeting => name => console.log(`${greeting} ${name}`);

// Appeler greet2  avec le paramètre 'Hello' et le nom Eddy
greet2('Hello')('Eddy');

//------------------------------------------------------------------//

//THE CALL AND APPLY METHODS

/* Utilisation des méthodes call() et apply() en JavaScript
Le code fourni montre comment utiliser les méthodes call() et apply() en JavaScript. 
call() et apply() sont parmi les trois méthodes d'invocation disponibles lors de 
l'appel d'une fonction.

La méthode call() prend deux arguments : le argument this (la valeur de this à l'intérieur 
de la fonction appelée) et une liste optionnelle des paramètres pour que la fonction les utilise. 
Dans l'exemple ci-dessus, lufthansa.book est appelé avec call avec la valeur this définie 
comme eurowings, ce qui permet d'accéder aux mêmes données que lufthansa.

La méthode apply() prend également deux arguments - le this et un tableau des valeurs des 
paramètres - mais diffère du call() dans le sens où les paramètres doivent être mis dans 
un tableau avant de pouvoir être passés.

Dans l'exemple fourni, book est appelé avec apply sur l'objet swiss, en utilisant un tableau 
contenant le numéro de vol et le nom de la réservation. Il est ensuite appelé une fois de plus 
en utilisant l'opérateur spread (...) qui est essentiellement raccourci pour la méthode apply(). */

const lufthansa = {
  // object literal containing airline name, IATA code and an array of bookings
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  // function to book a seat on a flight
  book(flightNum, name) {
    console.log(`
  ${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}
  `);
    // add new booking information to the bookings array
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
// example of using the book funtion
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  // create new airline with its properties
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// assign the book method from the lufthansa object to a new variable
const book = lufthansa.book;

//CALL METHOD
// call the book function and pass in eurowings as the this context
book.call(eurowings, 23, 'Sarah Williams'); // euroswings remplace this
console.log(eurowings);

// call the book function again but this time passing in lufthaansa as the context
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  // create new airline with its properties
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// call the book function using swiss as the context, meaning that it will update the swiss bookings array
book.call(swiss, 583, 'Mary Cooper');

//APPLY METHOD

// use apply method to set the context of the book function to the swiss
// note that the second parameter of the apply method is an array containing the arguments to be passed into the book function
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// spread operator allows us to spread/unpack elements of a given array as individual arguments
// here we are using the spread operator to pass each element of the flightData array as separate arguments for the book function
book.call(swiss, ...flightData);

//------------------------------------------------------------------//

// THE BIND METHOD

/* Le code ci-dessus utilise la méthode bind() pour créer une nouvelle fonction, qui lorsqu'elle est appelée aura son indentifiant this réglé sur la valeur fournie avec une séquence donnée d'arguments.

Par exemple, book.call(eurowings) est utilisé pour créer un nouveau livre pour un passager voyageant avec eurowings, en passant 23 et «Sarah Williams» comme deux arguments.

Les quatre lignes suivantes - où bookEW, bookLH et bookLX sont déclarés - utilisent également la méthode bind() pour créer une nouvelle fonction avec respectivement leur propre compagnie aérienne comme contexte.

À cause de la possibilité que bind() offre de fixer partiellement des arguments, nous pouvons utiliser bookEW23() pour réserver un vol sur eurowings et passer le numéro du passager toujours à 23.

La méthode bind() de l'objet lufthansa est utilisé pour le préparer à un écouteur d'événements. Cela garantira que l'identifiant this réfère à l'objet lufthansa quand l'écouteur déclenche un événement.

Sans cette liaison, l'identifiant this réfèrera à l'objet responsable du déclenchement des événements (probablement l'élément du DOM qui a été cliqué) et s'assurera que this.planes réfère à la bonne propriété afin qu'elle puisse être incrémentée correctement.*/

const bookEW = book.bind(eurowings); // bind the book function to the eurowings object

const bookLH = book.bind(lufthansa); // bind the book function to the lufthansa object
const bookLX = book.bind(swiss); // bind the book function to the swiss object

bookEW(23, 'Steven Williams'); // call the book function using the eurowings object as the context

const bookEW23 = book.bind(eurowings, 23); // bind the book function to the eurowings object and set the flight number to 23

bookEW23('Jonas Schmedtmann'); // call the book function using the eurowings object as the context and the name 'Jonas Schmedtmann' as the second argument
bookEW23('Martha Cooper'); // call the book function using the eurowings object as the context and th

// WITH EVENT LISTENERS

// Set the lufthansa plane count to 300
lufthansa.planes = 300;

// Define the buyPlane function which increases the number
// of planes by one and logs it to the console
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// Add event listener to the HTML element with the 'buy' class
// so each time it's clicked, the buyPlane function is invoked
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

/* Partial Application
Partial application est une technique utilisée pour créer une nouvelle fonction en fournissant d'avance certains des arguments à une fonction donnée. Cela peut être fait via la méthode bind(), où le premier argument passé à bind() devient le premier argument de la nouvelle fonction.

Vous pouvez également créer une application partielle manuellement plutôt que d'utiliser bind(). Les lignes suivantes montrent comment faire cela en créant addVAT2. */

// Define the addTax function which takes a rate and value and returns value + value * rate
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//Define the addVAT function which uses partial application to always have rate 0.23
const addVAT = addTax.bind(null, 0.23);
//Is The Same like
//addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

//Define the addTaxRate function which takes in a rate and sets it in the closure scope
//The returned inner function utilizes the rate from the scope and
//calculates and returns value + value * rate
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

//Create addVAT2 by applying the addTaxRate function and passing 0.23 as the rate
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
