//TASK_1
/**
 * Function to check if a person is a working age person
 * @param {number} age
 * @returns {boolean}
 */
function isWorkingAgePerson(age) {
	return age >= 18 && age <= 65
}
console.log(isWorkingAgePerson(20))
console.log(isWorkingAgePerson(4))
console.log(isWorkingAgePerson(88))

//TASK_2
/**
 * Function to check if a person is a minor
 * @param {number} num1
 * @param {number} num2
 * @returns {boolean}
 */
function checkMultiplicity(num1, num2) {
	return num1 % num2 === 0
}
console.log(checkMultiplicity(25, 5))
console.log(checkMultiplicity(15, 3))
console.log(checkMultiplicity(15, 5))
console.log(checkMultiplicity(15, 4))

//TASK_3
/**
 * Function to check if a number is prime
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */
function isCreatedTriangle(a, b, c) {
	return a + b > c && a + c > b && b + c > a
}
console.log(isCreatedTriangle(3, 4, 5))
console.log(isCreatedTriangle(1, 2, 3))
console.log(isCreatedTriangle(5, 10, 15))

//TASK_4
/**
 * Function to check if a triangle is equilateral
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */
function triangleArea(a, b, c) {
	const p = (a + b + c) / 2
	return Math.sqrt(p * (p - a) * (p - b) * (p - c))
}
/**
 * Function to check if a triangle is equilateral
 * @param {number} length
 * @param {number} width
 * @returns {number}
 */
function rectangleArea(length, width) {
	return length * width
}
/**
 * Function to check if a triangle is equilateral
 * @param {number} radius
 * @param {number} slantHeight
 * @returns {number}
 */
function coneSurfaceArea(radius, slantHeight) {
	return Math.PI * radius * (radius + slantHeight)
}
/**
 * Function to check if a triangle is equilateral
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @returns {number}
 */
function parallelepipedSurfaceArea(length, width, height) {
	return 2 * (length * width + width * height + length * height)
}
console.log('Triangle area:', triangleArea(3, 4, 5))
console.log('Rectangle area:', rectangleArea(5, 10))
console.log('Cone surface area:', coneSurfaceArea(3, 5))
console.log('Parallelepiped surface area:', parallelepipedSurfaceArea(2, 3, 4))

//TASK_5
/**
 * Function to check if a number is prime
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
	return num % num === 0 && num % 1 === 0
}
console.log(isPrime(5))
console.log(isPrime(4))

//TASK_6
let goodsIcon = 'https://cdn-icons-png.flaticon.com/512/1170/1170679.png'
let goodsName = 'Laptop'
let goodsDescription = 'A high-performance laptop with 16GB RAM and 512GB SSD.'
let goodsPrice = 1500

/**
 * Function created card goods
 * @param {string} icon
 * @param {string} name
 * @param {string} description
 * @param {number} price
 * @param {number} sale
 */
function createGoodsCard(icon, name, description, price, sale) {
	const card = document.createElement('div')
	card.classList.add('goods-card')

	const img = document.createElement('img')
	img.src = icon
	img.alt = 'Goods Icon'
	img.classList.add('goods-icon')
	card.appendChild(img)

	const title = document.createElement('h2')
	title.textContent = name
	title.classList.add('goods-name')
	card.appendChild(title)

	const desc = document.createElement('p')
	desc.textContent = description
	desc.classList.add('goods-description')
	card.appendChild(desc)

	const priceTag = document.createElement('div')
	priceTag.classList.add('goods-price')

	const priceName = document.createElement('h3')
	priceName.classList.add('goods-price-name')
	priceName.textContent = 'Price:'

	const priceMonney = document.createElement('h3')
	priceMonney.classList.add('goods-price-monney')

	const priceSale = sale

	if (priceSale === undefined || sale === 0) {
		const priceOriginal = document.createElement('span')
		priceOriginal.classList.add('goods-price-original')
		priceOriginal.textContent = price + ' $'
		priceMonney.appendChild(priceOriginal)
	} else {
		const priceOriginal = document.createElement('span')
		priceOriginal.classList.add('goods-price-original-sale')
		priceOriginal.textContent = price + ' $'
		priceMonney.appendChild(priceOriginal)

		const priceNew = document.createElement('span')
		priceNew.classList.add('goods-price-new')
		priceNew.textContent = price - priceSale + ' $'
		priceMonney.appendChild(priceNew)

		const pricePromotion = document.createElement('span')
		pricePromotion.classList.add('goods-price-promotion')
		pricePromotion.textContent =
			'Sale: ' + Math.round((priceSale * 100) / price) + '%'
		priceMonney.appendChild(pricePromotion)
	}
	priceTag.appendChild(priceName)
	priceTag.appendChild(priceMonney)

	card.appendChild(priceTag)

	document.body.appendChild(card)
}
createGoodsCard(goodsIcon, goodsName, goodsDescription, goodsPrice, 100)

//TASK_7
/**
 * Function to check if a number is prime
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */
let CreatedTriangle = function (a, b, c) {
	if (a + b > c && a + c > b && b + c > a) {
		return true
	}
	return false
}
console.log(CreatedTriangle(3, 4, 5))

/**
 * Function to check if a number is prime
 * @param {number} num
 * @returns {boolean}
 */
let Prime = function (num) {
	if (num % num === 0 && num % 1 === 0) {
		return true
	}
	return false
}
console.log(Prime(5))
