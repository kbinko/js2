// // Modifying html elements

// var test = document.getElementById("test"); // wartoscia test jest element w html o id "test"
// test.innerHTML = "<u>This text was done only in javascript. I made h1 with id 'test'. created var test = document.getElementById('test') and used test.innerHTML. also i added class using test.className</u > " // zmienia zawartosc elementu html o id "test"
// test.className = "test" // dodaje klase "test" do elementu html o id "test"

console.log(); // w konsoli wyswietla pusta linie, używam tego do oddzielenia kodu bo bez tego nie mozna "schowac" poszczegolnych sekcji

// string manipulation

// var sentenceNode = document.getElementById("sentence")
// var sentence = sentenceNode.innerText // wartoscia jest zawartosc elementu html o id "sentence"
// var upperSentence = sentence.toUpperCase() // all text in upper case:
// var lowerSentece = sentence.toLowerCase() // all text in lowercase
// var subSentence = sentence.substr(0, 11); // pokazuje od 0 do 11 charakteru stringa
// var words = sentence.split(" "); // rozdziela wszystkie slowa i tworzy "array"
// var bracketWords = "(" + words.join(") (") + ")"; // łaczy je podana rzecza
// sentenceNode.innerHTML = bracketWords; 
// var firstThreeWords = words.slice(0, 3); // pokazuje tylko 3 pierwsze slowa

console.log();

// Accepting user's input

// var prompt = prompt("To co napiszesz tutaj bedzie wartoscia var prompt")
// alert("wpisales " + prompt)

console.log();

// comparison operators


//var imie = prompt("Podaj imie") // wartoscia jest to co wpiszesz w prompt
//var x = document.getElementById("x") // wartoscia jest element html o id "x"
//if (imie.toLowerCase() == "konrad") { // jesli imie jest rowne "konrad" to wykonaj ponizsze
//x.innerHTML = "twoje imie to Konrad"
//} else { // jesli nie to wykonaj ponizsze
//  x.innerHTML = "Strona tylko dla Konrada"
//}

console.log();

// if else i switch case

// var x = "x"

// if (x == "x") {
//     console.log("x")
// } else if (x == "xx") {
//     console.log("xx")
// } else if (x == "xxx") {
//     console.log("xxx")
// } else {
//     console.log("xxxx")
// } // w zaleznosci od wartosci zmiennej x wykonuje sie inna czesc kodu

// switch (x) {
//     case "x":
//         console.log("x")
//         break;
//     case "xx":
//         console.log("xx")
//         break;
//     default:
//         console.log("xxx")
//         break;
// } // dziala tak samo jak if else ale jest bardziej czytelne

console.log();

// Lists

// list = ["Konrad", "Roles", true, false, "22"] // lub list = Array("Konrad","roles" itp) lub list = new Array("Konrad","roles" itp) 
// list.push("Parrot") // dodaje element na koncu listy

// var age = 30;
// console.log("Age is: ", typeof(age)); // sprawdza typ zmiennej (number, string, boolean, array) 
// var name = "xxx";
// console.log("Name is: ", typeof(name)); 
// var isCat = true;
// console.log("isCat is: ", typeof(isCat));
// var car = ["rx7", "e36", "r32"];
// console.log("car is: ", typeof(car)); 

console.log();

// zmiana typu zmiennej 
// var age = "30" // Mimo tego ze wartosc jest liczba to typ zmiennej jest stringiem bo jest w cudzyslowach 
// age = Number(age); // zmiana string na number  

console.log();

// kalkulator przy uzyciu funkcji 

// function Addition() {
//     var a = document.getElementById("a").value;
//     var b = document.getElementById("b").value;
//     var c = Number(a) + Number(b);
//     document.getElementById("result").innerHTML = `<p>a + b =</p>` + c;
// }

// function Substract() {
//     var a = document.getElementById("a").value;
//     var b = document.getElementById("b").value;
//     var c = Number(a) - Number(b);
//     document.getElementById("result").innerHTML = `<p>a - b =</p>` + c;
// }

// function Divide() {
//     var a = document.getElementById("a").value;
//     var b = document.getElementById("b").value;
//     var c = Number(a) / Number(b);
//     document.getElementById("result").innerHTML = `<p>a / b = </p>` + c;
// }

// function Multiplication() {
//     var a = document.getElementById("a").value;
//     var b = document.getElementById("b").value;
//     var c = Number(a) * Number(b);
//     document.getElementById("result").innerHTML = `<p>a * b =</p>` + c;
// }

console.log();

// kalkulator przy uzyciu funckji i if else - duzo czytelniejszy zapis, zamiast 4 funkcji jest tylko 1

function Calculate() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var operator = document.getElementById("operator").value;
    var result = 0;
    if (operator == "+") {
        result = Number(a) + Number(b);
    } else if (operator == "-") {
        result = Number(a) - Number(b);
    } else if (operator == "/") {
        result = Number(a) / Number(b);
    } else if (operator == "*") {
        result = Number(a) * Number(b);
    }
    document.getElementById("result").innerHTML = `<p>a ${operator} b =</p>` + result;
}

console.log();

// self invoking function, funkcja ktora wywoluje sie sama od razu po zaladowaniu strony
// (function() {
//     console.log("xxx")
// })(); 

console.log();

// this keyword - odwolanie sie do obiektu w ktorym znajduje sie funkcja w ponizszym przykladzie funkcja znajduje sie w obiekcie person wiec this.name i this.age odwoluje sie do wartosci name i age obiektu person 


// var person = {
//     name: "Konrad",
//     age: 22,
//     sayHello: function() {
//         console.log("Hello, my name is " + this.name + " and i am " + this.age + " years old") // dzieki uzyciu this.name i this.age nie musimy pisac person.name i person.age
//     }
// } 

// person.sayHello() // wywolanie funkcji sayHello z obiektu person

console.log();


// hoisting - przypisanie wartosci do zmiennych przed ich deklaracja


// const o = "cos"
// document.getElementById("hoisting").innerHTML = o + ' ' + p // nic sie nie wyswietli bo p jeszcze nie istnieje kod jest czytany od gory do dolu, wiec najpierw jest przypisana wartosc do zmiennej o, potem proba zmiany elementu html "hoisting" przy uzyciu zmiennej p ktora dla aplikacji jeszcze nie istnieje a dopiero potem jest deklarowana zmienna p wiec nie ma jeszcze wartosci ktora mozna wyswietlic
// const p = "innego" 

console.log();

// testowanie możliwośći copilota, jedyne co pisalem to komentarze tlumaczące co copilot ma zrobic i sprawdzalem czy wszystko dziala

// generate 150 invoices with random numbers month day year and amounts

// var invoices = [];

// for (var i = 0; i < 150; i++) {
//     var invoice = {
//         number: Math.floor(Math.random(1) * 1000 + 1),
//         date: Math.floor(Math.random(1) * 30 + 1) + "/" + Math.floor(Math.random(1) * 12 + 1) + "/" + Math.floor(Math.random(1) * 20 + 2000),
//         amount: Math.floor(Math.random() * 1000) + " zł"
//     } // generowanie losowych faktur z losowymi numerami, datami i kwotami
//     invoices.push(invoice); // dodawanie faktur do tablicy invoices zadeklarowanej na poczatku
// }

// // sortowanie po numerze

// invoices.sort(function(a, b) {
//     return a.number - b.number;
// });


// // wyświetlanie w tabeli

// var table = document.getElementById("table");

// for (var i = 0; i < invoices.length; i++) {
//     var row = table.insertRow(i + 1);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     cell1.innerHTML = invoices[i].number;
//     cell2.innerHTML = invoices[i].date;
//     cell3.innerHTML = invoices[i].amount;
// } // dla kazdej faktury w tablicy invoices dodaje wiersz do tabeli z numerem faktury, data i kwota

console.log();

// Try Catch Throw i Finally - try - próba wykonania kodu, catch - jeśli wystąpi błąd to wykonaj kod w catch, throw - pokaż  błąd, finally - wykonaj kod w finally niezależnie czy wystąpi błąd czy nie

// try {
//     var a = 10;
//     var b = 0;
//     if (b == 0) throw "Nie dziel przez zero";
//     var c = a / b;
//     console.log(c);
// } catch (error) {
//     console.log(error);
// } finally {
//     console.log("To sie zawsze wykonuje");
// }

console.log();

// Scope - zasięg zmiennych - global scope - zmienna jest dostępna wszędzie, local scope - zmienna jest dostępna tylko wewnątrz funkcji lub bloku kodu (np. if)

// var a = 10; // global scope

// function test() {
//     var b = 20; // local scope
//     console.log(a);
// } // zmienna b nie jest dostępna poza funkcją test ponieważ jest to zmienna lokalna

console.log();

// modal window - okno modalne - okno które blokuje dostęp do innych elementów strony dopóki nie zostanie zamknięte - w tym przypadku okno modalne jest otwierane automatycznie po załadowaniu strony (self invoking function) lub za pomocą kliknięcia przycisku i można zamknąć je klikając przycisk "ok" lub "cancel". Używane np. do potwierdzenia czy użytkownik chce usunąć coś z bazy danych, zaakceptowania plików cookies czy zalogowania się do konta. 



// var modal = document.getElementById("modal");
// var ok = document.getElementById("ok");
// var cancel = document.getElementById("cancel");

// ok.addEventListener("click", function() {
//     modal.classList.remove("show");
//     alert("Thanks for clicking ok");
// }); // po kliknięciu przycisku "ok" okno modalne zniknie i wyświetli się alert

// cancel.addEventListener("click", function() {
//     modal.classList.remove("show");
//     alert("canceled :( ");
// }); // po kliknięciu przycisku "cancel" okno modalne zniknie i wyświetli się alert

// function openModalBtn() {
//     modal.classList.add("show");
// } // po kliknięciu przycisku "open modal" okno modalne się pojawi



// (function openModal() {
//     modal.classList.add("show");
// })(); // okno modalne się pojawi po załadowaniu strony


console.log();

// arrays - tablice  

// const arr = [1, 2, 3, ];
// const arr2 = [1, 2, [3.1, 3.2, 3.3]]; // tablica w tablicy
// //            0  1         2
// //                    0    1    2

// console.log(arr2);
// console.log(arr2[2][1]); // wyświetla element [1] z elementu [2] z tablicy arr2

// for (let index in arr2) {
//     if (arr2[index].constructor === Array) { // dodaj do konsoli wszystkie elementy tablicy w tablicy
//         console.log(arr2[index]);
//     }
// } // wyświetla wszystkie elementy tablicy arr2 w konsoli

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// } // pętla for - wyświetla wszystkie elementy tablicy arr w konsoli

// const array = document.getElementById("array");

// for (let i = 0; i < arr2.length; i++) {
//     array.innerHTML += `<p>${arr2[i]}</p>`
// } // wyświetla wszystkie elementy tablicy arr w divie o id array

console.log();

// // objects - obiekty to zbiór zmiennych i funkcji które są zgrupowane w jedną całość - obiekt jest zmienną która przechowuje wiele zmiennych i funkcji - obiekty są tworzone za pomocą klamerek {} - obiekty są tworzone w sposób dynamiczny - można dodawać nowe zmienne i funkcje do obiektu


// const konrad = {
//     name: "Konrad",
//     age: 22,
//     height: 193,
//     changeName: function(newName) {
//         this.name = newName;
//         return this;
//     }, // funkcja changeName zmienia wartość zmiennej name z obiektu konrad na nową wartość newName
//     changeAge: function(newAge) {
//         this.age = newAge;
//         return this; // funkcja changeAge zmienia wartość zmiennej age z obiektu konrad na nową wartość newAge
//     } 
// }; 

// konrad.changeName("Konrad2").changeAge(59); // wywołanie funkcji changeName i changeAge z obiektu konrad

// konrad.children = 2; // dodanie nowej zmiennej do obiektu konrad
// konrad['married'] = true; // dodanie nowej zmiennej do obiektu konrad


// console.log(konrad); // wyświetla cały obiekt konrad
// console.log(konrad.name); // wyświetla wartość name z obiektu konrad
// console.log(konrad.children); // wyświetla wartość children z obiektu konrad

// for (let key in konrad) { 
//     console.log(key, konrad[key].constructor); 
// } // wyświetla wszystkie zmienne z obiektu konrad i ich typ

// console.log(' '); 

// for (let key in konrad) {
//     if (konrad[key].constructor === Function) {
//         console.log(key, konrad[key].constructor);
//     }
// } // wyświetla wszystkie zmienne z obiektu konrad które są funkcjami

console.log();

// for loops - pętla for jest używana do wykonywania kodu wielokrotnie aż do spełnienia warunku opisanego w nawiasie

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// } // wyświetla liczby od 0 do 9 w konsoli

// let sentence = "The quick brown fox jumps over the lazy dog";

// let number = 0; // liczba "o" w "sentence"

// for (let i = 0; i < sentence.length; i++) {
//     console.log(sentence[i]); // wyświetla każdy znak w napisie w konsoli

//     if (i % 2 === 0) {
//         console.log("even");
//     } else {
//         console.log("odd");
//     } //  dla każdego znaku w napisie wyświetla w konsoli "even" lub "odd" w zależności od tego czy jest to znak parzysty czy nieparzysty


//     let char = sentence[i].toLowerCase(); // zmienna char przechowuje znak z napisu "sentence" w małych literach

//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         console.log("vowel");
//     } else if (char === " ") {
//         console.log();
//     } else {
//         console.log("consonant");
//     } // dla każdego znaku w napisie wyświetla w konsoli "vowel" lub "consonant" w zależności od tego czy jest to samogłoska czy spółgłoska

//     if (char === "o") {
//         number++;
//     } // wyświetla w konsoli liczbę "o" w napisie "sentence"

//     if (number === 2) {
//         break;
//     } // gdy pętla policzy dwie litery "o" w napisie "sentence" to zatrzymuje pętlę
// }

// console.log(number); // wyświetla w konsoli liczbę "o" w napisie "sentence"


console.log();

// while loops - pętla while jest używana do wykonywania kodu wielokrotnie aż do spełnienia warunku opisanego w nawiasie. While używamy gdy nie wiemy ile razy ma się wykonać kod i jaka bedzie wartosc zmiennej w momencie wykonywania kodu

// let i = 3;

// while (i <= 10) {
//     console.log(i);
//     i++;
// } // pętla while wykonuje kod dopóki "i" jest mniejsze lub równe 10

// for (let i = 3; i <= 10; i++) {
//     console.log(i);
// } // pętla while i for wykonują to samo z taka roznica ze w petli for musimy zadeklarowac wartosc zmiennej "i" w petli, podczas gdy while pracuje ze zmienna wczytana przed petla. Jest to przydatne gdy wartosc zmiennej jest wczytywana z zewnatrz przez np uzytkownika.

// do {
//     console.log(i);
//     i++;
// } while (i <= 10); // petla do while najpierw wykonuje to co jest wpisane w petle, a potem sprawdza warunek. Poprzednia petla w konsoli pokaze 10, podczas gdy petla do while pokaze 11. Nawet jesli warunek jest nieprawdziwy to kod zostanie wykonany przynajmniej raz.

console.log();

// classes - klasa jest szablonem obiektu i zawiera zmienne i funkcje. Klasa jest używana do tworzenia wielu obiektów o podobnych właściwościach i zachowaniu.

// class Person {
//     // w teori ponizej jest funkcja, ale jesli jest ona w klasie to nazywa sie ja "metoda" klasy
//     constructor(name, age) { // w nawiasie zawieramy zmienne ktore nie sa zadeklarowane. Gdybysmy mieli this.height = 180 to nie musielibysmy podawac tej zmiennej w nawiasie
//         this.name = name;
//         this.age = age;
//     }
// }
// // konstruktor klasy Person tworzy nowy obiekt z dwoma zmiennymi "name" i "age" i przypisuje im wartosci podane w nawiasie. Przy tworzeniu nowego obiektu posiadającego zmienne z tej klasy wpisujemy np. let konrad = new Person("Konrad", 25). Więc jeśli chcemy mieć np kilka osób z takimi samymi zmiennymi to tworzymy klase zeby za kazdym razem nie pisac nowych obiektow dla kazdej osoby. Jesli chcielibysmy stworzyc 3 osoby bez uzycia klasy to wygladalo by to tak:



// const konrad = {
//     name: "Konrad",
//     age: 25
// }

// const kasia = {
//     name: "Kasia",
//     age: 24
// }

// const pawel = {
//     name: "Pawel",
//     age: 26
// }

// // teraz jesli chcemy stworzyc 3 osoby z uzyciem klasy Person to wygladalo by to tak:

// const marcin = new Person("Marcin", 25);
// const krzysiek = new Person("Krzysiek", 24);
// const marek = new Person("Marek", 26);

// // w podanym przykładzie nie robi to aż takiej różnicy choć widać, że użycie klasy jest szybsze. Ale gdybyśmy chcieli stworzyć np. 100 osób z 5 zmiennymi to wtedy użycie klasy byłoby dużo bardziej wygodne.

console.log();

// Returning values from Methods - używane do zwracania wartości z metody klasy przy uzyciu "return". Przydatne gdy np chcemy miec mozliwosc otrzymania wysokosci w calach zamiast cm, ale tylko do jednego obiektu.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         // mozna tez deklarowac wartosc zmiennej w klasie. np gdy wiemy ze kazda osoba ktora bedziemy wpisywac jest tej samej plci lub zajmuje to same stanowisko, dzieki czemu nie musimy tego pisac deklarujac tych osob. W tym przypadku by zadeklarowac osobe napiszemy tylko let konrad = new Person("Konrad", 25), a height zostanie automatycznie przypisane.
//         this.height = 180; // cm
//     }
//     heightToInches() {
//         return this.heightIn = this.height / 2.54; // Ta metoda tworzy nowa zmienna "heightIn" i przypisuje jej wartosc "height" podzielona przez 2.54, czyli wysokość w calach.
//     }
// }

// let konrad = new Person("Konrad", 25);
// console.log(konrad.heightIn); // wyswietla wysokosc w calach

console.log();

// subclasses - klasy podrzędne, które przejmują właściwości klasy ponad nimi i dodają nowe właściwości lub nadpisują stare.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.height = 180;
//         this.weight = 80;
//         this.married = false;
//         this.children = 0;
//     }
//     heightToInches() {
//         return this.heightIn = this.height / 2.54;
//     }
//     speak() {
//         console.log('parent');
//     }
// }

// class Programmer extends Person {
//     constructor(name, age, language) {
//             super(name, age);
//             this.language = language;
//         }
//         speak() {
//             // super.speak();
//             console.log('child');
//         }
// } // klasa Programmer dziedziczy wszystkie właściwości z klasy Person i dodaje nową właściwość "language". Musimy użyć "super" aby wywołać konstruktor klasy Person.

// // super - wywołuje konstruktor klasy nadrzędnej. W tym przypadku konstruktor klasy Person przyjmuje dwa argumenty "name" i "age", dlatego musimy je podać w konstruktorze klasy Programmer.

// let programmer = new Programmer("Konrad", 25, "JavaScript");
// programmer.speak(); // wywołuje metode speak z klasy Programmer. Jesli do dodamy super.speak() to wywoła ona metode speak z obu klas

console.log();