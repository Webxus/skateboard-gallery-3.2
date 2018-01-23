'use strict';
/*
Задача 2. Галерея скейтбордов
В рамках домашнего задания к лекции «Объект события»
Описание
Реализовать функционал фотогалереи скейтбордов. При клике на минатюру скейтборда происходит его выбор. При этом пользователь видит увеличенную фотографию и название товара:

Галерея скейтбордов

Интерфейс
При клике на миниатюру фотографии (тег a) товар считается выбранным. Для отображения выбранного товара нужно выполнить несколько условий:

Обозначить миниатюру выбранного товара с помощью класса gallery-current, установив его на тег a. При этом только 1 товар может считаться выбранным и только 1 тег a должен иметь такой класс.

Отобразить увеличенную фотографию в теге <img id="view" class="gallery-view">, считав ссылку на неё из атрибута href тега a, при этом сама ссылка не должна открываться.
*/

const links = document.getElementsByTagName('a');
const images = document.getElementsByClassName('gallery-view')[0];

function imageSelect(event) {
	event.preventDefault();
	for (let i = 0; i < links.length; i++) {
		links[i].classList.remove('gallery-current');
	}
	this.classList.add('gallery-current');
	images.src = this.href;
}

for (let i = 0; i < links.length; i++) {
	links[i].addEventListener('click',imageSelect);
}