/* 1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования */

const checkAge = function(age_1, age_2, age_3) {
    // let age_1 = 10;
    age_2 = 18;
    age_3 = 60;
    if (age_1 < age_2) {
        console.log("You don't have access cause your age is " + age_1 + " It's less then " + age_2);
    } else if (age_1 >= age_2 && age_1 < age_3) {
        console.log("Welcome  !");
    } else if (age_1 > age_3) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    };
    };
    checkAge(18);