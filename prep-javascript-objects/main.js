var person = {
  firstName: 'John',
  lastName: 'Bridge',
  hobby: 'Programming'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
person.job = 'Programmer';
console.log("The person's current job is:", person.job);
person.previousJob = 'Student';
console.log("The person's previous job is:", person.previousJob);
console.log('The complete person object:', person);
