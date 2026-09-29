// const user = new Object();

const user = {};

user.id = "hbf567";
user.name = "Abeer";

// console.log(user);

const newUser = 
{
    email: "xyz@gmail.com",
    fullName: 
    {
        userFullName: 
        {
            firstName: "Abeer",
            lastName: "Dhoke"
        }
    } 
}

// console.log(newUser);
// console.log(newUser.fullName);
console.log(newUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

// const obj3 = {obj1, obj2};
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj3 = {...obj1, ...obj2};
console.log(obj3);

const anotherUser = [
    {
        id: 1,
        email: "hkn@gmail.com"
    },
    {
        id: 1,
        email: "hkn@gmail.com"
    },
    {
        id: 1,
        email: "hkn@gmail.com"
    },
    {
        id: 1,
        email: "hkn@gmail.com"
    },
]
console.log(anotherUser[1].email);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('name'));

