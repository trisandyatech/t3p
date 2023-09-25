let array = [];

array.push('Ganesh');

// ['Ganesh']
//console.log({array});

let obj = {};
//console.log(obj);

obj.name = 'Jyothi';
//console.log(obj);
obj.students = array;
//console.log(obj);
obj.students.push('Shiva');
//console.log(obj);
obj.students = [...obj.students, 'Durga', 'Tulasi'];// obj.students.concat(['Durga', 'Tulsi']);
//console.log(obj);
obj.studentQualifications = ['B-Com', 'B-Tech', 'B-Tech', 'B-Tech'];
//console.log(obj);
obj.students = obj.students.map((student, i) => {
    return {name: student, qualification: obj.studentQualifications[i]};
});
//console.log(obj);
//obj.students[2].address = '3-51, PKPL';
obj.students = obj.students.map(studentObj => {
   if(studentObj.name === 'Durga'){
       return {...studentObj, address: '3-51, PKPL'};
   } 
   if(studentObj.name === 'Tulasi'){
       return {...studentObj, address: '3-15, PKPL'};
   } 
   if(studentObj.name === 'Ganesh'){
       return {...studentObj, address: '3-02, PKPL'};
   } 
   if(studentObj.name === 'Shiva'){
       return {...studentObj, address: '3-30, PKPL'};
   } 
   return studentObj;
});
//console.log(obj);
obj.getStudentsByQualification = function(qualification){
  return this.students.filter(studentObj => studentObj.qualification === qualification); 
};
console.log(obj);
const bComStudents = obj.getStudentsByQualification('B-Com');
const bTechStudents = obj.getStudentsByQualification('B-Tech');
const mTechStudents = obj.getStudentsByQualification('M-Tech');
console.log({bComStudents, bTechStudents, mTechStudents});
delete obj.studentQualifications;
console.log(obj);

obj.students.push({
    name: 'Samvida',
    qualification: 'B-Sc',
    address: '2-13, CPL'
});
console.log(obj);

obj.getStudentsByPlace = function(place){
  return this.students.filter(studentObj => studentObj.address.includes(place)); 
};

const pkplStudents = obj.getStudentsByPlace('PKPL');
const cplStudents = obj.getStudentsByPlace('CPL');
console.log({pkplStudents, cplStudents});

obj.students[4].qualification = 'Bsc-Com';
console.log(obj);
