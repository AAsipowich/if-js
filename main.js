let user = "John Doe";
console.log(user);

let student = "Anya";
console.log(student);
//В переменной user переменная student
student = user;
console.log(user);

let test = 1;

test = ++test;

test = test + '1';
// В переменной test значение 21
console.log(test);

test = --test;

// В переменной test значение 20
console.log(test);

test = !test;
// В переменной test значение false
console.log(test);

let bol = 1;
let bal = [2, 3, 5, 8]
for (let i = 0; i <= bal.length; i++) {
    bol *= bal[i]
    console.log(bol);
}

let bac = [2, 5, 8, 15, 0, 6, 20, 3]
for (let i = 0; i <= bac.length; i++) {
    if (bac[i] > 5 && bac[i] < 10)
        console.log(bac[i]);
}

let tro = [2, 5, 8, 15, 0, 6, 20, 3]
for (let i = 0; i <= tro.length; i++) {
    if (tro[i] % 2 == 0)
        console.log(tro[i]);
}