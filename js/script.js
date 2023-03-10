const gridElem = document.querySelector(".grid");

//Ciclo numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    let number;
    let classColor;
    if (i % 15 === 0) {
        number = "fizzbuzz";
        classColor = "fizzbuzz";
    } else if (i % 3 === 0) {
        number = "fizz";
        classColor = "fizz";
    } else if (i % 5 === 0) {
        number = "buzz";
        classColor = "buzz";
    } else {
        number = i;
        classColor = "numero";
    }

    //Stampo dei numeri in html
    console.log(i, number);
    gridElem.innerHTML += `<div class="box ${classColor}">${number}</div>`;
}

