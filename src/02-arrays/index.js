const list = [0, 1, 2, 3]

const list2 = [ ...list, 100 ]

const list3 = list2.map(item => item * 2)

console.log(list);
console.log(list2);
console.log(list3);
