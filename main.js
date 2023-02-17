window.addEventListener("load", init)
function init(){

console.log("Itt vagyok!")
// alt shift a-> több soros komment
/* console.log(document.querySelector("button"))
document.querySelector("button").addEventListener("click", udvozlet)
 */
valtozok()
elagazaseok()
ciklusok()
}
function valtozok() { var vnev1; 
    let vnev2 = 3.45; 
    const VNEV3 = "4"; 
/**konstans, az értéke később nem változtatható meg*/
 vnev1 = "kettő"; 
 let vmi = 3 <2; 
 console.log("vnev1", parseFloat(vnev1), typeof (vnev1)); 
 console.log("vnev2 ",parseInt(vnev2), typeof parseInt(vnev2)); 
 console.log("VNEV3 ", VNEV3, typeof VNEV3); 
 console.log("vmi ", vmi, typeof vmi); 
 /*Műveletek */ 
 var eredmeny= parseFloat(vnev1)+parseFloat(vnev2);
/**NEM JELEZ hibát! */
  eredmeny = vnev1/vnev2 ;
  console.log("eredmeny ", eredmeny, typeof eredmeny);
}


function elagazaseok() { 
    /**Adott egy szám, döntsük el róla, hogy 2, 3-mal, vagy mindkettővel, * vagy egyikkel sem osztható! */ 
var szam1 = 6; 
if (szam1 % 2 === 0 && szam1 % 3 === 0) {
     console.log("kettővel is és hárommal is osztható"); 
    }
    else if (szam1 % 2=== 0) {
         console.log("kettővel osztható"); 
        }
        else if (szam1 % 3 === 0) {
             console.log("hárommal osztható"); 
        } 
        else { 
                console.log("se kettővel, se hárommal nem osztható"); 
        }

        console.log("2"===2); //false nem azonos a típusuk! console.log("2"==2) //true típus egyezést nem nézi
        }

//többágú elágazás //Hét napjait bekérek egy egész számot - 1- hétfő, 7- vasárnap
 var nap = 2; 
  switch (nap) {
     case 1: 
     console.log("Hétfő"); 
     break;
     case 2: 
     console.log("Kedd"); 
     break;
     case 3: 
     console.log("Szerda");
      break;
      case 4: 
    console.log("Csütörtök");
     break; 
    case 5:
    console.log("Péntek");
          break;
           case 6: 
           console.log("Szombat");
            break;
             case 7: 
             console.log("Vasárnap");
              break; }

              function ciklusok() {
                 /* * for pontosan tudom hányszor fut le számlálós - /** * 
                while - elöltesztelős * do while-hátultesztelős biztos, hogy egyszer lefut! 
                /**generáljuk 10 db véletlen egész számot 60 és 100 között */ 
                let index =0; 
                while (index < 10) { 
                    let vel = Math.floor(Math.random() * (100 - 60 + 1)) + 60; 
                    console.log(vel); index++; 
                }
                 for (let index = 0; index < 10; index++) { 
                    let vel = Math.floor(Math.random() * (100 - 60+ 1)) + 60;
                     console.log(vel);}
                 }












