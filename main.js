'use strict'
let k = 0;
function formattedPhone(phone) {
	phone = phone.split('');
	for (let i = 0; i < phone.length; i++) {
		if (phone[i] == ' ') {
			phone.splice(i, 1)
			i--;
		};
	};
	if (phone.length == 12) {
		if (phone[0] != "+") {
			alert("Неверный формат номера");
			return '';
		};
	};
	if (phone.length == 11) {
		if (phone[0] != "8" && phone[0] != "7") {
			alert("Неверный формат номера");
			return '';
		};
	};
	if (phone.length > 12 || phone.length < 10) {
		alert("Неверный формат номера");
		return '';
	};
	for (let i = 0; i < phone.length; i++) {
		if (phone.length != 12) {
			if (isNaN(Number(phone[i]))) {
				alert("В номере введен не верный символ");
				return '';
			}
		} else {
			if (isNaN(Number(phone[i])) && i > 0) {
				alert("В номере введен не верный символ");
				return '';
			}
		}
	};
	k = 1;
	if (phone.length == 12) {
		phone.splice(2, 0, " (");
		phone.splice(6, 0, ") ");
		phone.splice(10, 0, "-");
		phone.splice(13, 0, "-");
	} else if (phone.length == 11) {
		phone.splice(0, 0, "+");
		phone.splice(1, 1, "7");
		phone.splice(2, 0, " (");
		phone.splice(6, 0, ") ");
		phone.splice(10, 0, "-");
		phone.splice(13, 0, "-");
	} else if (phone.length == 10) {
		phone.splice(0, 0, "+");
		phone.splice(1, 0, "7");
		phone.splice(2, 0, " (");
		phone.splice(6, 0, ") ");
		phone.splice(10, 0, "-");
		phone.splice(13, 0, "-");
	};
	phone = phone.join('');
	alert(phone);
};
circle: while (k != 1) {
	let phone = prompt(`Введите номер:`);
	if (phone == null) {
		break circle;
	}
	formattedPhone(phone); // +7 (123) 456-78-90
}
