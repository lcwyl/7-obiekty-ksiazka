class Ksiazka {
    constructor(tytul, autor, przeczytana){
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    opiszKsiazke(){
       let text;

       if(this.przeczytana === true){
          text = 'przeczytana';
       }
       else{
           text = 'nie przeczytana'
       }


        console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została ${text}`);
    }
}

let pierwszaKsiazka = new Ksiazka('Wiedźmin','Andrzej Sapkowski',true);
let drugaKsiazka = new Ksiazka('Wiedźmin','Andrzej Sapkowski',false);
let trzeciaKsiazka = new Ksiazka('Wiedzmin', 'Andrzej Sapkowski',false);

//pierwszKsiazka.opiszKsiazke()

let newArr = [pierwszaKsiazka,drugaKsiazka,trzeciaKsiazka]

let wynik = 0;//start
function iloscPrzeczytanych(na){
na.forEach(function(ksiazka){
    ksiazka.opiszKsiazke();//wypisz kazdy elemen tablicy

    if(ksiazka.przeczytana){
     ++wynik;
    }


});
}
iloscPrzeczytanych(newArr)//wywołanie
let res = wynik;//wynik
console.log(res)//wypisz wynik


