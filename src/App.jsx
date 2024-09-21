import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Device name="Laptop" price="55000"></Device>
      <Device name="Mobile Phone"></Device>
      <Device name="Calculator"></Device>
      <Student grade={7} score="55"></Student>
      <Person></Person>
      <Student grade="8" score="81"></Student>
      <Student score={55}></Student>
      <Developer></Developer>
      <Developer2></Developer2>
    </>
  )
}

function Device(props) {
  const { name, price = 'To be announced' } = props;
  return (
    <>
      <h2>This device: {name}</h2>
      <p>Price: {price}</p>
    </>
  )
}

function Person() {
  const age = 25;
  const money = 6500;
  const person = { name: 'Habib', year: 1999 }
  return <h3>I am {person.name}. I am {age} years old. I have {money} taka in my pocket. I was born in {person.year}.</h3>
}

function Student({ grade = 1, score = 0 }) {
  const student = { name: "Sarwar", age: 22 }
  return (
    <div className='student'>
      <h4>This is a student.</h4>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Class: {grade}</p>
      <p>Marks: {score}</p>
    </div>
  )
}

function Developer() {
  const devStyle = {
    margin: '20px',
    padding: '20px',
    border: '3px solid green',
    borderRadius: '15px',
  }
  return (
    <div style={devStyle}>
      <h5>Noob Devo</h5>
      <p>Coding: </p>
    </div>
  )
}

function Developer2() {
  return (
    <div style={{
      margin: '20px',
      padding: '20px',
      border: '3px solid green',
      borderRadius: '15px',
    }}>
      <h5>Noob Devo</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App
