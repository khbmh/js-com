let stu = {
  id: 23,
  class: 3,
};

let man = stu;
// let man = {...stu};

stu.age = 22;

/*
-------------- Shallow Copy ---------
*/
const userA = {
  firstName: 'Anurag',
  lastName: 'Sharma',
  pata: {
    city: 'Delhi',
    pincode: 123456,
  },
  subject: ['CS', 'DS', 'CN'],
};

const userB = { ...userA };

/*
-------------- Deep Copy ---------
*/
const user1 = {
  firstName: 'Anurag',
  lastName: 'Sharma',
  pata: {
    city: 'Delhi',
    pincode: 123456,
  },
  subject: ['CS', 'DS', 'CN'],
};

const user2 = JSON.parse(JSON.stringify(user1));
user1.subject[1] = 'law';
console.log(user1);
console.log(user2);
