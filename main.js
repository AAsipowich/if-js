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

let result = 1;
let arr = [2, 3, 5, 8]
for (let i = 0; i <= arr.length; i++) {
    result *= arr[i]
    console.log(result);
}

let arr1 = [2, 5, 8, 15, 0, 6, 20, 3]
for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] > 5 && arr1[i] < 10)
        console.log(arr1[i]);
}

let arr2 = [2, 5, 8, 15, 0, 6, 20, 3]
for (let i = 0; i <= arr2.length; i++) {
    if (arr2[i] % 2 == 0)
        console.log(arr2[i]);
}