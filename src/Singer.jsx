function Singer({ singer }) {
    const { name, age } = singer;
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
        </>
    )
}

export default Singer