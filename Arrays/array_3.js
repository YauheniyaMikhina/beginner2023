// Task 3: Given an array of the names of your friends, add the words hello to each element of the array

const friends = [ 'Monica', 'Kate', 'Alice', 'Tom'];
for (let i=0;i<friends.length;i++) {
    friends[i] = 'Hello ' + friends[i];
}
console.log(friends);
//[ 'Hello Monica', 'Hello Kate', 'Hello Alice', 'Hello Tom' ]
