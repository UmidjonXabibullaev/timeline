// let aaa = document.getElementsByClassName('aaa')[0]

 

// aaa.textContent = Math.trunc(Math.random() *10 )+10

// console.log(aaa);

// if (aaa.textContent <= 13) {
//     document.body.style.backgroundColor= 'red'
// } if  (aaa.textContent >13){
//     document.body.style.backgroundColor= 'green'
// } if (aaa.textContent >17){
//     document.body.style.backgroundColor= 'orange'
// }



// setInterval(()=>{
//     let aaa = document.querySelector("h1")
//     aaa.textContent = new Date().toLocaleTimeString()
// },1000)
const sana = document.getElementById('h4')
const body = document.querySelector('body')

let tim = new Date().toLocaleTimeString()
let rasm = Number(tim.slice(0, 2))

if (rasm =>5 && rasm< 12) {
    body.style.backgroundImage = "url('./images/morning.jpg')"
} if (rasm =>12 && rasm<17) {
    body.style.backgroundImage = "url('./images/afternoon.jpg'"
} if (rasm =>17 && rasm<20){
    body.style.backgroundImage = "url('./images/evening.jpg'"
} if (rasm =>20 && rasm<5) {
    body.style.backgroundImage = "url('./images/night.jpg'"
    time.style.color = 'white'
    sana.style.color = 'white'
}

setInterval(() => {
    time.textContent = new Date().toLocaleTimeString()
}, 1000)

setInterval(() => {
    sana.textContent = new Date().toLocaleDateString()
}, 1000)

