// // Function
// // let const(var)

// const number='+996 500 255 215'
// let Begymai = checkNumber(number, "+996 500 255 215")

// const number2='+996 222 222 555'
// let Begymai2 = checkNumber(number2, "+996 222 222 555")


// console.log(Begymai);
// console.log(Begymai2);

// function checkNumber(num, phone){
//     if(num === phone){
//         return true
//     }
// }

// DOM Document Object Modal
// ----->Old<------
// Find Element (h1-h6, p, div)
// getElementById() #id
// getElementByTagName(div) div button img ul
// getElementByClassName() text-center-class
// ----->New<------
// querySelector() div.text-center
// querySelectorAll() div button img

const h1Tag = document.querySelectorAll('h1') //[h1,h1,h1]
console.dir(h1Tag);

for(let i = 0; i< h1Tag.length; i++){
    if(i< 2){
        h1Tag[i].style.background = 'blue'
    }else if(i< 4){
        h1Tag[i].style.background = 'yellow'
    }
    h1Tag[i].innerText = h1Tag[i].innerText + " World!"
    h1Tag[i].style.color = 'aqua ' 
    h1Tag[i].style.fontSize = '56px'
    h1Tag[i].style.textAlign = 'center'
}

const cars = [ {
    model: "Audi",
    price: 2200,
    color: "Black",
    img:"https://mobimg.b-cdn.net/v3/fetch/ee/eeac1f78e2012e8b24e6ec4c3a725f59.jpeg"
    },   
    {
    model: "Bmw",
    price: 4200,
    color: "Black",
    img:"https://sportishka.com/uploads/posts/2022-11/1667506429_6-sportishka-com-p-samaya-krutaya-bmv-v-mire-instagram-6.jpg"
    }]

    const div = document.querySelector('#list')

    for(const car of cars){
        div.innerHTML += `
        <div class='card'>
            <div>
                <img src=${car.img} width="200" />
            </div>
            <div>
            <h1>${car.model}</h1>
            <p>${car.price} $ </p>
            <p>${car.color}</p>
            </div>
        </div>
        `
    }