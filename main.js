/********** lev1_1 *********
let europäischeUnion = {
    Belgien: '(BE)',
    Griechenland: '(EL)',
    Litauen: '(LT)',
    Portugal: '(PT)',
    Bulgarien: '(BG)',
    Spanien: '(ES)',
    Luxemburg: '(LU)',
    Rumänien: '(RO)',
    Tschechien: '(CZ)',
    Frankreich: '(FR)',
    Ungarn: '(HU)',
    Slowenien: '(SI)',
    Dänemark: '(DK)',
    Kroatien: '(HR)',
    Malta: '(MT)',
    Slowakei: '(SK)',
    Deutschland: '(DE)',
    Italien: '(IT)',
    Niederlände: '(NL)',
    Finnland: '(FI)',
    Estland: '(EE)',
    Zypern: '(CY)',
    Österreich: '(AT)',
    Schweden: '(SE)',
    Irland:'(IE)',
    Lettland:'(LV)',
    Polen:'(PL)',
    VereinigtesKönigreich:'(UK)'
}

console.log(europäischeUnion);
console.log("%c-----------------------------------------------", "color: red");
console.log(europäischeUnion.Bulgarien);
console.log(europäischeUnion.Niederlände);
console.log(europäischeUnion.Luxemburg);
console.log("%c-----------------------------------------------", "color: red");
europäischeUnion.BeneluxUnion = {
    Belgien: '(BE)',
    Niederlände: '(NL)',
    Luxemburg: '(LU)'
}
console.log(europäischeUnion);
console.log("%c-----------------------------------------------", "color: red");
delete europäischeUnion.Belgien;
delete europäischeUnion.Niederlände;
delete europäischeUnion.Luxemburg;
console.log(europäischeUnion);
console.log("%c-----------------------------------------------", "color: red");
*/



/********** lev1_2 *********
let person = {
    name: 'Marius',
    alter: '18',
    sagNameAlter() {
        alert(`Dein name lautet: ${this.name} und du bist: ${this.alter} jahre alt.😀`);
        console.log(this.name);
        console.log(this.alter);
    }
}

person.sagNameAlter();
*/


/********** lev1_4 *********
var unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        changeName(nameToChange, newName){
            let indexNameToChange = this.names.indexOf(nameToChange);
            this.names[indexNameToChange] = newName;
        },
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);


unsereHaustiere[1].changeName("Droopy", "Geiler Hund");
console.log(unsereHaustiere[1].names);
*/



/********** lev1_5 *********
let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "eine Datei",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);
*/



/********** lev1_6 *********
let myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

console.log(myMusic[0].kunstler);
console.log(myMusic[1].kunstler +' ' + myMusic[1].formate[3]);
console.log(myMusic[0].gold);
console.log(myMusic[2].release_jahr + ' ' + myMusic[3].release_jahr);
console.log(myMusic[3].formate[2]);
console.log(myMusic[3].title.slice(17, 21));
console.log(myMusic[2].title.slice(13, 15));
console.log(myMusic[1].kunstler.slice(5, 10));
*/



/********** lev1_7 *********
var myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

const result = document.getElementById("music");

myMusic.forEach(element => {
   result.innerHTML += `
   <h1>${element.kunstler}</h1>
   <ul>
    <li>${element.title}</li>
   </ul>
   <ul>
    <li>${element.formate}</li>
   </ul>
   `; 
});
*/



/********** lev1_8 *********
var studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"],
        printName() {
            return this.name;
        },
        printCoop() {
            return this.coop;
        },
        printCity() {
            return this.address.city;
        },
        printEmails() {
            this.emails.forEach(element => {
                console.log(element);
                return element;
            })
        }
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"],
        printName() {
            return this.name;
        },
        printCoop() {
            return this.coop;
        },
        printCity() {
            return this.address.city;
        },
        printEmails() {
            this.emails.forEach(element => {
                console.log(element);
                return element;
            })
        }
    }
];

result = document.getElementById("student-data");

studentData.forEach(element => {
    console.log(element.printName());
    result.innerHTML += `<h1>Name: ${element.printName()}</h1>`;
    console.log(element.printCoop());
    result.innerHTML += `<h2>Coop: ${element.printCoop()}</h2>`;
    console.log(element.printCity());
    result.innerHTML += `<h2>City: ${element.printCity()}</h2><hr>`;
    console.log(element.printEmails());
    //result.innerHTML += `<h3>E-Mails: ${element.printEmails()}</h3><hr>`
})
*/
