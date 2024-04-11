import "./Jsx.css";

const Jsx = () => {
  let counter = 0;

  const printHi = () => {
    console.log("Hi");
  };

  const array = [
    {
      id: 1,
      name: "Houssein",
    },
    {
      id: 2,
      name: "John",
    },
    {
      id: 3,
      name: "Yasser",
    },
  ];

  return (
    <>
      {/* Style */}

      <h1
        style={{
          color: "red",
        }}
      >
        Hello world
      </h1>
      {/* ClassName */}

      <h1 className="green">This is h1 with color green</h1>

      {/* Counter */}

      <h1>Hi, the counter is {counter}</h1>

      {/* Button with named function*/}

      <button onClick={printHi}>Click me</button>

      {/* Button with anonymous function*/}

      <button
        onClick={() => {
          console.log("Hi");
        }}
      >
        Click me
      </button>

      {/* Input with anonymous function*/}

      <div>
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>

      {/* Map */}

      {array.map((element) => (
        <h1 key={element.id}>{element.name}</h1>
      ))}
    </>
  );
};

// ! Jsx stands for JS XML, it's an HTML-like code

export default Jsx;
