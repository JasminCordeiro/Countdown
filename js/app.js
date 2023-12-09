document.addEventListener('DOMContentLoaded', function () {
const endDate = "24 December 2023 00:00 PM"

document.getElementById("end-date").innerText = endDate; 
const inputs = document.querySelectorAll("input")
// const clock = () => {
    
// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
   
    if(diff < 0){
        document.getElementById("end-date").innerText = "Happy New Year!";
        return;
    }
    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24)
    //convert into hours;
    inputs[1].value = Math.floor((diff / 3600) % 24) 
    //convert into minutes;
    inputs[2].value = Math.floor((diff / 60) % 60)
    //convert into seconds
    inputs[3].value = Math.floor((diff) % 60)
}

clock()

/**
 *  1 day = 24 hours
 *  1 hour = 60 minutes
 *  60 minutes = 3600 seconds
 */

setInterval(
    () => {
        clock()

    }, 
    1000
)



})