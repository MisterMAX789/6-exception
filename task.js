//Задача №1.Форматтер чисел
function parseCount(value, calculate) {
	let parsed = Number.parseInt(value, calculate);
	if (isNaN(parsed)) throw new Error("Невалидное значение");
	else return parsed;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}
// Задача №2.Треугольник
class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((a > (b + c)) || (b > (a + c)) || (c > (a + b))) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}
	getPerimeter() {
		return this.a + this.b + this.c;
	}
	getArea() {
		let S = this.getPerimeter() / 2;
		return Number(Math.sqrt((S * (S - this.a) * (S - this.b) * (S - this.c))).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return new class AnswerClass {
			getArea = () => 'Ошибка! Треугольник не существует';
			getPerimeter = () => 'Ошибка! Треугольник не существует';
		}
	}
}