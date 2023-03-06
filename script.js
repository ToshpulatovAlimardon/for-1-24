// For1
// let n = 3, k = 10;
// for (let i = 0; i < n; i++) {
//     console.log("k");
// }

// For2
// let a = 8, b = 14, k = 0;
// for (let i = a; i <= b; i++) {
//     k += 1;
//     console.log(i);
// }
// console.log(`${k} ta son bor`);

// For3
// let a = 7, b = 13;
// for (let i = b - 1; i > a; i--) {
//     console.log(i);
// }

// For4
// let sum = 20000;
// for (let i = 1; i <= 10; i++) {
//     console.log(i * sum);
// }

// For5
// let sum = 20000;
// for (let i = 1; i <= 10; i++) {
//     console.log((i * sum) / 10);
// }

// For6
// let sum = 20000;
// for (let i = 12; i <= 20; i++) {
//     console.log((i * sum) / 10);
// }

// For7
// let a = 3, b = 6, s = 0;
// for (let i = a; i <= b; i++) {
//     s += i;
// }
// console.log(s);

// For8
// let a = 3, b = 5, s = 1;
// for (let i = a; i <= b; i++) {
//     s *= i;
// }
// console.log(s);

// For9
// let a = 1, b = 3, s = 0;
// for (let i = a; i <= b; i++) {
//     s += i**2;
// }
// console.log(s);

// For10
// let n = 2, s = 0;
// for (let i = 1; i <= n; i++) {
//     s += 1 / i;
// }
// console.log(s);

// For11
// let n = 1, s = 0;
// for (let i = 0; i <= n; i++) {
//     s += (n + i) ** 2;
// }
// console.log(s);

// For12
// let n = 1.3, s = 1;
// for (let i = 1; i <= (n * 10) % 10; i++) {
//     s *= (1 + i / 10);
// }
// console.log(s);

// For13
// let n = 4,
//     s = 0;

// for (let i = 1; i <= n; i++) {
//     s += Math.pow(-1, i + 1) * (1 + i / 10);
// }
// console.log(s);

// For14
// let n = 3, s = 0;
// for (let i = 1; i <= n; i++) {
//     s += (2 * i - 1);
// }
// console.log(s);

// For15
// let n = 4, a = 2, s = 1;
// for (let i = 1; i <= n; i++) {
//     s *= a;
// }
// console.log(s);

// For16
// let n = 4, a = 2;
// for (let i = 0; i <= n; i++) {
//     console.log(a ** i);
// }

// For17
// let n = 3, a = 2, s = 0;
// for (let i = 0; i <= n; i++) {
//     s += a ** i;
// }
// console.log(s);

// For18
// let n = 3, a = 2, s = 0;
// for (let i = 0; i <= n; i++) {
//     s += ((-1) ** i) * a ** i;
// }
// console.log(s);

// For19
// let n = 3, s = 1;
// for (let i = 1; i <= n; i++) {
//     s *= i;
// }
// console.log(s);

// For20
// let n = 4, s = 0, k = 1;
// for (let i = 1; i <= n; i++) {
//     k *= i;
//     s += k;
// }
// console.log(s);

// For21
// let n = 4, s = 0, k = 1;
// for (let i = 1; i <= n; i++) {
//     k *= i;
//     s += 1 / k;
// }
// console.log(s + 1);

// For22
// let n = 3, s = 0, k = 1, x = 2;
// for (let i = 1; i <= n; i++) {
//     k *= i;
//     s += x ** i / k;
// }
// console.log(s + 1);

// For23
// let n = 3, s = 0, k = 1, x = 2;
// for (let i = 1; i <= n; i++) {
//     k *= 2 * i + 1;
//     s += ((-1) ** i) * x ** (2 * i + 1) / k;
// }
// console.log(s + 1);

// For24
let n = 3, s = 0, k = 1, x = 2;
for (let i = 1; i <= n; i++) {
    k *= 2 * i + 1;
    s += ((-1) ** i) * x ** (2 * i + 1) / k;
}
console.log(s + 1);