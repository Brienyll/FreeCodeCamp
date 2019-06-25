let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {

let count = 0;
for (let ol in users) {
  if (users[ol].online === true) {
    count++;
  }
}
return count;
}

console.log(countOnline(users));