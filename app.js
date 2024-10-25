/* 11- MASALA */
////Bir nechta shahar nomlari ro'yxatini yarating va foydalanuvchi input orqali qidirganda faqat mos keladigan shaharlarni ko'rsating

// const cityInput = document.getElementById("cityInput");
// const cityList = document.getElementById("cityList").children;
// cityInput.addEventListener("input", () => {
//   const inputVal = cityInput.value.toLocaleLowerCase();
//   Array.from(cityList).forEach((li) => {
//     !li.textContent.toLocaleLowerCase().includes(inputVal)
//       ? (li.style.display = "none")
//       : (li.style.display = "");
//   });
// });

/* 12- MASALA */
/////Bir nechta rasmni o'z ichiga olgan slayder yarating. Foydalanuvchi "keyingi" va "oldingi" tugmalarni bosganda rasm o'zgarib tursin.

// const counter = document.querySelector("p");
// const sliderImage = document.getElementById("sliderImage");
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
// const image = document.querySelector("img");

// let currentImage = 1;
// counter.textContent = `Image - ${currentImage}/10`;

// prev.addEventListener("click", () => {
//   currentImage--;
//   counter.textContent = `Image - ${currentImage}/10`;
//   image.src = `https://picsum.photos/id/${currentImage}/1200`;
//   if (currentImage == 0) {
//     currentImage = 10;
//     counter.textContent = `Image - ${currentImage}/10 `;
//   }
// });

// next.addEventListener("click", () => {
//   if (currentImage >= 10) {
//     currentImage = 1;
//     counter.textContent = `Image - ${currentImage}/10 `;
//   } else {
//     currentImage++;
//     counter.textContent = `Image - ${currentImage}/10`;
//     image.src = `https://picsum.photos/id/${currentImage}/1200`;
//   }
// });

/* 13- MASALA */
////Sahifadagi matndan biror qismini tanlang va ustiga chiziq tortish yoki shrift hajmini o'zgartirish imkoniyatini qo'shing.
// const button = document.getElementById("boldButton");
// const paragraph = document.getElementById("paragraph");

// let text = paragraph.textContent;
// button.addEventListener("click", () => {
//   const selectedText = window.getSelection().toString();
//   text = text.replace(selectedText, `<b>${selectedText}</b>`);
//   paragraph.innerHTML = text;
// });

/* 15- MASALA */
////Foydalanuvchi raqamlar kiritadi, tugmani bosganda kiritilgan raqamlar orasidan faqat juft raqamlar ekranga chiqariladi.

// const numbersInput = document.getElementById("numbersInput");
// const showEvens = document.getElementById("showEvens");
// const evensOutput = document.getElementById("evensOutput");

// showEvens.addEventListener("click", () => {
//   const splitInput = numbersInput.value.split(",").map(Number);
//   const evenNumbers = splitInput.filter((num) => num % 2 === 0);
//   evensOutput.textContent = `Juft raqamlar: ${evenNumbers.join(", ")}`;
// });

/* 16- MASALA */
/////JavaScript yordamida oddiy kalkulyator tuzing, foydalanuvchi ikki sonni kiritadi va qo'shish , ayirish , ko'paytirish va bo'lish amallarini bajaradi.

// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const add = document.getElementById("add");
// const subtract = document.getElementById("subtract");
// const multiply = document.getElementById("multiply");
// const divide = document.getElementById("divide");
// const result = document.getElementById("result");

// add.addEventListener("click", () => {
//   const number1 = num1.value.split(",").map(Number);
//   const number2 = num2.value.split(",").map(Number);
//   result.textContent = Number(number1) + Number(number2);
// });

// subtract.addEventListener("click", () => {
//   const number1 = num1.value.split(",").map(Number);
//   const number2 = num2.value.split(",").map(Number);
//   result.textContent = Number(number1) - Number(number2);
// });

// multiply.addEventListener("click", () => {
//   const number1 = num1.value.split(",").map(Number);
//   const number2 = num2.value.split(",").map(Number);
//   result.textContent = Number(number1) * Number(number2);
// });

// divide.addEventListener("click", () => {
//   const number1 = num1.value.split(",").map(Number);
//   const number2 = num2.value.split(",").map(Number);
//   result.textContent = Number(number1) / Number(number2);
// });

/* 17- MASALA */
/////Sahifada biror matn bo'lsin. Foydalanuvchi slayderni harakatlantirganida, matn hajmi o'zgaradi

// const resizableText = document.getElementById("resizableText");
// const fontSizeSlider = document.getElementById("fontSizeSlider");

// fontSizeSlider.addEventListener("input", () => {
//   resizableText.style.fontSize = `${fontSizeSlider.value}px`;
// });

/* 18- MASALA */
////Ko'rsatmalar tugmasini bosganda ma'lumotlar paydo bo'lib, yana bosganda yashirinadi.
// const toggleInstructions = document.getElementById("toggleInstructions");
// const instructions = document.getElementById("instructions");

// toggleInstructions.addEventListener("click", () => {
//   instructions.style.display.split(",") == "none"
//     ? (instructions.style.display = "")
//     : (instructions.style.display = "none");
// });

/* 19- MASALA */
////Bir nechta tab oynalari yarating. Foydalanuvchi har bir tabga bosganda tegishli mazmun ko'rsatilishi kerak.

/* 20- MASALA */
////Har bir tugma bosilganda matn rangi yoki fon rangi o'zgarib tursin.

// const coloredText = document.getElementById("coloredText");
// const changeTextColor = document.getElementById("changeTextColor");
// const changeBgColor = document.getElementById("changeBgColor");

// changeTextColor.addEventListener("click", () => {
//   coloredText.style.color = `${getRandomColor()}`;
// });
// changeBgColor.addEventListener("click", () => {
//   coloredText.style.backgroundColor = `${getRandomColor()}`;
// });

// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

/* 21- MASALA */
/////Foydalanuvchi raqam kiritadi, va agar raqam musbat bo'lsa "Musbat raqam", manfiy bo'lsa "Manfiy raqam", 0 bo'lsa esa "Nol" deb chiqaradi.

const numberInput = document.getElementById("numberInput");
const checkNumber = document.getElementById("checkNumber");
const numberOutput = document.getElementById("numberOutput");

checkNumber.addEventListener("click", () => {
  const number = numberInput.value.split(",").map(Number);
  if (number > 0) {
    numberOutput.textContent = `Musbat raqam!!!!!`;
  } else if (number < 0) {
    numberOutput.textContent = `Manfiy raqam!!!!!`;
  } else {
    numberOutput.textContent = `nol`;
  }
});
