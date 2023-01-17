const student ={
  name :'vijay',
  school:'xyz public school',
  grade:'A+',
  section :'B',
  rollNo : 42,
  marks:{
    math : 42,
    science:45,
    english: 50
  }
}

console.log(`report card of ${student.name}`)
console.log(`Name:${student.name}\nrollNo:${student.rollNo} grade:${student.grade} \nsection ${student.section} `)
console.log('Marks in subjects')
console.log(`Maths:${student.marks.math}\nScience:${student.marks.science}\nenglish:${student.marks.english}`)
