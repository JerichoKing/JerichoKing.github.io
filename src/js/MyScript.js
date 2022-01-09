"use strict"
/*Console log - для проверки*/
let typeOfSite = prompt("Выберите тип сайта (напишите цифру): 0. Интернет-представительства; 1. Информационные сайты и порталы; 2. Веб-сервис");
console.log(typeOfSite); 
let design = prompt("Выберите дизайн сайта (напишите цифру): 0. Минимализм; 1. Яркий (детский); 2. Киберпанк");
console.log(design);
let adaptation = prompt("Выберите тип адаптивности сайта (напишите цифру): 0. Отсутствие адаптивности; 1. Кроссплатформенность");
console.log(adaptation);

let cost = [
	[5000, 7000, 10000],
	[2000, 7000, 8000],
	[0, 15000],
];
let costOfType = cost[0][typeOfSite],
	costOfDsn = cost[1][design],
	costOfAdapt = cost[2][adaptation];
let totalCost = costOfType + costOfDsn + costOfAdapt;
console.log(totalCost);


let deadline = [
	[3, 5, 7],
	[3, 7, 8],
	[0, 10],
];
let dateForType = deadline[0][typeOfSite],
	dateForDsn = deadline[1][design],
	dateForAdapt = deadline[2][adaptation];
let totalDate = dateForType + dateForDsn + dateForAdapt;
console.log(totalDate);

alert("Стоимость заказа составляет: " + totalCost + " руб. " + "Сроки выполнения заказа: " + totalDate + " дня (дней).");
