// event listener to button

const btnEl = document.getElementById("btn")
console.log(btnEl);

// Eveentlistener
// based on input we can do

const birthdayEl = document.getElementById("birthday")

function calculateAge() {
    console.log("clicked");
    const birthdayValue = birthdayEl.value;
    console.log(birthdayValue);
}

if(birthdayvalue === ""){
    alert("please enter your birthday")

} else {
   function getAge(birthdayValue) {
        const currentDate = new Date();
        const birthdayDate  = new Date (birthdayValue);
        let  age = currenDate.getFullYear () - birthdayDate.getFullYear();
        console.log(age);
        const month = currentDate.getMonth()- birthdayDate.getMonth();
        if(month<0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
            age--
        
        }

        return age; 



        console.log(currentDate.getFullYear());

    }

}

btnEl.addEventListener("click",calculateAge)


