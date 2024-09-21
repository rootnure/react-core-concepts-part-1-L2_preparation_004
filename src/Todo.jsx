// function Todo({ task }) {
//   return (
//     <>
//       <li>Work on: {task}</li>
//     </>
//   )
// }

// conditional rendering
// function Todo({ task, isDone }) {
//   if (isDone) {
//     return (
//       <>
//         <li>Finished: {task}</li>
//       </>
//     )
//   }
//   return (
//     <>
//       <li>Work on: {task}</li>
//     </>
//   )
// }

// conditional rendering option 2
function Todo({ task, isDone }) {
  if (isDone) {
    return (
      <>
        <li>Finished: {task}</li>
      </>
    )
  }
  return <li>Work on: {task}</li>
}

export default Todo