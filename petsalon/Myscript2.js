// object literal

const salon = {
    name:"The Fashion Pets",
    phone: 679789912,
    address:{
        street:"University Av",
        number:"262-G"
    },
    workingHours:{
        days:"Mon-Fri",
        open:"9:00 am",
        close:"5:00 pm"

    },
    pets:[],
    count:function(){
        alert("We have:" + salon.pets.length + "pets registered.");
    }
}

// Object destructing
let {name,phone,address:{street,number},workingHours:{days,open,close}}=salon;
//console.log(name,phone,street);

document.querySelector(".info").innerHTML=`<p> ${name} <br> ${street}, ${number} <br> ${days} from ${open} to ${close} <br> ${phone} </p>`;
document.querySelector("footer .info").innerHTML =`<p> ${name} <br> $(street),${number} <br> ${days} from ${open} to ${close} <b>${phone} </p>`;
// Object constructor

var petId=0
var petc = 0
class Pet{
    constructor(name,age,breed,gender,service,ownerName,phoneContact)
    {
        this.name=name; 
        this.age=age;
        this.breed=breed;
        this.gender=gender; 
        this.service=service;
        this.ownerName=ownerName;
        this.phoneContact=phoneContact;
        this.id="pet+petc";
        petc+=1;
        this.hunger=10;
        this.happiness=5;
        this.id="pet"+petId;
        petId+=1;



    }
    ownerInfo = function(){
        console.log("Owner name: "+ this.ownerName + "\n" + "Contact Phone: " + this.phoneContact);

    }
    feed =function(){
        this.hunger-=10
        this.happiness+=10;
        console.log("Feeding")
        


    }
    status = function(){
        console.log("hunger: " + this.hunger + "\n"+ "happiness " + this.happiness);
    }
    count = function(){
        alert("We have: " + salon.pets.length);
    }
            
}

const pet1 = new Pet("Shaggy",2,"Boxer","Male","Shower","Lois","6192889456");
const pet2 = new Pet("janice",3,"Boxer","Female","Wash","Lois","6192889456");
const pet3 = new Pet("Ozzy",6,"Mixed","Male","Nail","Stacy","6197355095"); 


salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);
//console.log(salon.pets);

displayPet(pet1);
displayPet(pet2);
displayPet(pet3);






//linking the salon and pets, we will use the push action into the array
//console.log(salon);

//console.log(pet1.ownerInfo());

//salon.pets.push(pet1);
/* salon.pets.push(pet2);
salon.pets.push(pet3); */
//console.log(salon);
//console.table(salon.pets);

//display in alert message the number of the pets(length)

//salon.count();

//print in a division the information of the pets (use a loop for)
/* var text="";
for(var i=0;i<salon.pets.length;i++)
{
    text +=`<p> Name: ${salon.pets[i].name} <br> Age: ${salon.pets[i].age} <br> Breed: ${salon.pets[i].breed} <br> Gender: ${salon.pets[i].gender} <br> Service: Name: ${salon.pets[i].service}</p>`;

} */
//document.getElementById("content").innerHTML=text;
var textname = document.getElementById('petName');
var textage = document.getElementById('petAge');
var textbreed = document.getElementById('petBreed');
var textgender = document.getElementById('petGender');
var textservice = document.getElementById('petService');
var textowner = document.getElementById('ownerName');
var textphone = document.getElementById('phoneContact');


function register(){
    const thePet = new Pet(textname.value, textage.value, textbreed.value, textgender.value, textservice.value, textowner.value, textphone.value);
    salon.pets.push(thePet);
    //console.log(thePet);
    alert("You have registered a pet.");
    clean();
    displayPet(thePet);
}
    
function clean(){
    textname.value="";
    textage.value="";
    textbreed.value="";
    textgender.value="";
    textservice.value="";
    textowner.value="";
    textphone.value="";
    
}



//pet1.feed();
//pet1.status();
//pet1.status();
//pet1.status();

function displayPet(aPet){
    var tBody = document.getElementById("rowPet");
    var row = `<tr id="${aPet.id}">
               <td>${aPet.name} </td>
               <td>${aPet.age} </td> 
               <td>${aPet.breed} </td> 
               <td>${aPet.gender} </td> 
               <td>${aPet.service} </td> 
               <td>${aPet.ownerName} </td> 
               <td>${aPet.phoneContact} </td> 
               <td>
               <button onclick='remove("${aPet.id}");'> Delete </button>               
               </td>`;

    tBody.innerHTML += row;
            

}



function remove(petId){
    var tr =document.getElementById(petId);
    tr.remove();
   
    var indexDelete;
    //searching the pet using the Id 
    for(i=0;i<salon.pets.length;i++){
        var selectedPet = salon.pets[i];
        if(selectedPet.id == petId)
        {
            indexDelete=i;
        }
    }
    //deletE in the array
    salon.pets.splice(indexDelete,1);
    //delete on the HTML
    tr.remove();

}

function search(petId) {

    for (var j = 0; j < salon.pets.length; j++) {
     //     document.getElementById('pet'+j).setAttribute('class', 'x');
  $('#pet'+j).show();
 }
 
     var lowercasetext = document.getElementById('petSearch').value;
     var textSearch = lowercasetext.toLowerCase();
     var flag = false;
     for (var i = 0; i < salon.pets.length; i++) {
         var foundPet = salon.pets[i];
         if (foundPet.name.toLowerCase() == textSearch || foundPet.service.toLowerCase() == textSearch) {
             flag = true;
             index = i;
             //document.getElementById('pet' + index).setAttribute('class', 'found');
             //document.getElementById("result").innerHTML = `<h3>${salon.pets[i].name} was found.</h3>`;
             //console.log(i);
             $('#pet'+i).show();
             
         }
         else{
             $('#pet'+i).hide();
         }
        
     }
 
     document.getElementById("petSearch").value = "";
 }
 
 function reset(petId) {
 
     for (var k = 0; k < salon.pets.length; k++) {
      //     document.getElementById('pet'+j).setAttribute('class', 'x');
   $('#pet'+k).show();
  }
 }














