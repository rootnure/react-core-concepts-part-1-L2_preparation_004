import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Person></Person>
    </>
  )
}

function Person() {
  const age = 25;
  const money = 6500;
  const person = { name: 'Habib', year: 1999 }
  return <h3>I am {person.name}. I am {age} years old. I have {money}taka in my pocket. I was born in {person.year}.</h3>
}

function Student() {
  const student = { name: "Sarwar", age: 22 }
  return (
    <div>
      <h4>This is a student.</h4>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
    </div>
  )
}

export default App
