// 3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge = function(age_1, age_2, age_3) {
    age_1 = Number(age_1);
    age_2 = 18;
    age_3 = 60;
    if ((typeof (age_1) == 'number') == true) {
    if (age_1 < age_2) {
        console.log("You don't have access cause your age is " + age_1 + " It's less then " + age_2);
    } else if (age_1 >= age_2 && age_1 < age_3) {
        console.log("Welcome  !");
    } else if (age_1 > age_3) {
        console.log("Keep calm and look Culture channel");
    } else if (age_1 == age_3) {
        console.log("Technical work");
    } else {
        console.log('Wrong data!')
    }
    }  
};
    checkAge('q');