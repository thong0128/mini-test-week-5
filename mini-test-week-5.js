// Bài 1
// Thay đổi mảng ban đầu không có x
function removeX(arr,x) {
    let index = arr.indexOf(x);
    if (index === -1) {
        return;
    }else {
        arr.splice(index, 1);
        removeX(arr,x);
    }
}
// Trả về 1 mảng khác không có x
function removeXfrom(arr,x) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== x)
            newArr.push(arr[i]);
    }
    return newArr;
}
let arr = [16, 8, 1, 12, 14, 7, 18, 5, 4, 7, 7, 3, 4, 5, 19, 8, 1, 1, 4, 1];
let x = 1;
console.log(removeXfrom(arr,x));
removeX(arr,x);
console.log(arr);

// Bài 2
function evaluate(math,eng,lit) {
    let avr = (math + eng + lit)/3;
    if (avr < 5)
        return "Không đạt";
    else if (avr < 8)
        return "Đạt";
    else
        return "Tốt";
}
console.log(evaluate(1,2,3));

// Bài 3
class Customer {
    constructor(name, age, point) {
        this.name = name;
        this.age = age;
        this.point = point;
    }
    discount() {
        if (this.point >100)
            return 0.95;
        else
            return 1;
    }
}
let thong = new Customer("Thong",30, 200),
    loc = new Customer("Loc", 30, 99);
let price = 1000000;
let thongPrice = price*thong.discount();
let locPrice = price*loc.discount();
console.log(thongPrice);
console.log(locPrice);

// Bài 4
class Rectangle {
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }
    getPerimeter() {
        return (this.width + this.height)*2;
    }
    getArea() {
        return this.width * this.height;
    }
    draw(id, x, y){
        let canvas = document.getElementById(id);
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(x, y, this.width, this.height);
        ctx.stroke();
    }
}
let rectA = new Rectangle(20, 40),
    rectB = new Rectangle(60, 25);
rectA.draw("myCanvas",10,10);
rectB.draw("myCanvas",20,20);
console.log(rectA.getArea())
console.log(rectA.getPerimeter())
console.log(rectB.getArea())
console.log(rectB.getPerimeter())

// Bài 5
function countPrime(arr) {
    let count = 0;
    let countDiv = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            continue;
        }else if (arr[i] > 1) {
            for (let j = 2; j < arr[i]; j++) {
                if (arr[i] % j === 0) {
                    countDiv++;
                    break;
                }
            }
            if (countDiv === 0) {
                count++;
            }
        }
        countDiv = 0;
    }
    return count;
}
console.log(countPrime(arr));