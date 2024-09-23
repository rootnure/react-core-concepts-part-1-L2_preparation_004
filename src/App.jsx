// import Actor from './Actor'
import './App.css'
import App2 from './App2'
// import Singer from './Singer'
// import Todo from './Todo';

function App() {

  // const actors = ['Sakib', 'Digbaji King', 'Manobotar Abbajan', 'Oi Bhaiya Na Please', 'Lottery King']

  // const singers = [
  //   { id: 1, name: "Mahfuz Dada", age: 51 },
  //   { id: 2, name: "Souvaw Day", age: 37 },
  //   { id: 3, name: "Baccu Dadu", age: 48 },
  //   { id: 4, name: "Priotoma Roy", age: 45 },
  //   { id: 5, name: "Kaka Kakkar", age: 34 },
  // ]

  // const handleClick = () => {
  //   alert('btn clicked');
  // }

  // const addFive = (number) => {
  //   alert(`${number + 5}`)
  // }

  return (
    <>
      <h2>Vite + React</h2>
      <App2></App2>

      {/* <button onClick={handleClick}>Click Me</button>

      <button onClick={() => alert('click me too clicked')}>Click Me Too</button>

      <button onClick={() => { alert('Also Click Me Clicked') }}>Also Click Me</button>

      <h6>parameter pass using array function wrapping</h6>
      <button onClick={() => addFive(55)}>Add Five with 55</button> */}

      {/* {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      } */}

      {/* <Actor></Actor>
      <Actor name="Kala Chan"></Actor>
      <Actor name={'Bappa Raj'}></Actor>
      {
        actors.map(actor => <Actor key={actor} name={actor}></Actor>)
      } */}

      {/* <Todo
        task="Learn React"
        isDone={true}></Todo>
      <Todo
        task="Explore Core Concepts"
        isDone={false}></Todo>
      <Todo
        task="Try JSX"
        isDone={true}></Todo> */}

      {/* <Device name="Laptop" price="55000"></Device>
      <Device name="Mobile Phone"></Device>
      <Device name="Calculator"></Device>
      <Student grade={7} score="55"></Student>
      <Person></Person>
      <Student grade="8" score="81"></Student>
      <Student score={55}></Student>
      <Developer></Developer>
      <Developer2></Developer2> */}
    </>
  )
}

// function Device(props) {
//   const { name, price = 'To be announced' } = props;
//   return (
//     <>
//       <h2>This device: {name}</h2>
//       <p>Price: {price}</p>
//     </>
//   )
// }

// function Person() {
//   const age = 25;
//   const money = 6500;
//   const person = { name: 'Habib', year: 1999 }
//   return <h3>I am {person.name}. I am {age} years old. I have {money} taka in my pocket. I was born in {person.year}.</h3>
// }

// function Student({ grade = 1, score = 0 }) {
//   const student = { name: "Sarwar", age: 22 }
//   return (
//     <div className='student'>
//       <h4>This is a student.</h4>
//       <p>Name: {student.name}</p>
//       <p>Age: {student.age}</p>
//       <p>Class: {grade}</p>
//       <p>Marks: {score}</p>
//     </div>
//   )
// }

// function Developer() {
//   const devStyle = {
//     margin: '20px',
//     padding: '20px',
//     border: '3px solid green',
//     borderRadius: '15px',
//   }
//   return (
//     <div style={devStyle}>
//       <h5>Noob Devo</h5>
//       <p>Coding: </p>
//     </div>
//   )
// }

// function Developer2() {
//   return (
//     <div style={{
//       margin: '20px',
//       padding: '20px',
//       border: '3px solid green',
//       borderRadius: '15px',
//     }}>
//       <h5>Noob Devo</h5>
//       <p>Coding: </p>
//     </div>
//   )
// }

export default App
