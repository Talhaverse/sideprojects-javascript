let cup = document.getElementsByClassName(".cup"),
remained = document.querySelector(".remianed"),
litres = document.querySelector("#litres"),
percentage = document.querySelector(".percentage"),
smallCups = document.querySelectorAll(".cup-small");

// updateBigCup();//this is to update the big cup , function in end 

// smallCups.forEach((singleCup, index1) => {
//     singleCup.addEventListener("click", () => highlightCups(index1))
// // highlight cups function arrow is made for small cups to highlight.
// })

// // this is the highlightcups function 
// function highlightCups(index1){
//     if (smallCups[index1].classList.contains('full') && !smallCups[index1].nextElementSibling.classList.contains('full')){
//         index1--;
//     }
//     smallCups.forEach((singleCup, index2) =>{
//             if(index2 <= index1){
//                 singleCup.classList.add("full")
//             } else {
//                 singleCup.classList.remove("full")
//             }
//     })
//     updateBigCup();
// }

updateBigCup();

smallCups.forEach((singleCup, index1) => {
    singleCup.addEventListener("click", () => highlightCups(index1))
    // console.log(index)
})

function highlightCups(index1) {
    if  (smallCups[index1].classList.contains('full') && !smallCups[index1].nextElementSibling.classList.contains('full')) {
        index1--;
    }
    smallCups.forEach((singleCup, index2) => { // Index2 is going to be the index for each of them in this loop
        if (index2 <= index1) {
            singleCup.classList.add("full")
        } else {
            singleCup.classList.remove("full")
        }
    })
    updateBigCup()
}
// function updateBigCup() {
//     const fullCups = document.querySelectorAll(".cup-small.full").length;
//     const totalCups = smallCups.length;

//     //checking if empty or not 

//     if(fullCups === 0){
//         percentage.style.visibility = 'hidden';
//         percentage.style.height = 0;
//     }else{
//         percentage.style.visibility = 'visible';
//         percentage.style.height = (`$fullCups / totalCups *330}px`)
//         percentage.innerText = `${ (fullCups / totalCups *100)}%`;
//     }
// if (fullCups === totalCups){
//     remained.style.visibility = 'hidden';
//     remained.style.height = 0;
// }else{
//     remained.style.visibility = 'visible';
//     litres.innerText = `${2-(250 * fullCups / 1000)}L`
// }
    

// }

function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    // Let's check to see if it's empty or not
    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = (`${fullCups / totalCups * 330 }px`)
        percentage.innerText = `${ (fullCups / totalCups * 100)}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        litres.innerText = `${2 - (250 * fullCups / 1000)}L`
    }

}


