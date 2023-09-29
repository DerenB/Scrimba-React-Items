const Home = () => {

    const HandleClick = () => {
        console.log('Hello Ninjas');
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={HandleClick}>Click Me</button>

            <button onClick={() => handleClickAgain('Mario')}>Click Me Again</button>
        </div>
    );
}

export default Home;