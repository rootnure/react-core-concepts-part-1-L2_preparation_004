import { useState } from "react"

export default function Team() {

  const [team, setTeam] = useState(0);

  const teamStyle = {
    border: '1px solid cyan',
    padding: '20px',
    borderRadius: '5px',
    margin: '20px'
  }

  const handleAdd = () => {
    setTeam(team + 1);
  }

  const handleRemove = () => {
    setTeam(team - 1);
  }

  return (
    <div style={teamStyle}>
      <h3>Players: {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}