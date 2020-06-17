import React, { useRef, useReducer } from "react";


function App() {
  const inputRef = useRef();

  const [items, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case "add":
        return [...state, parseFloat(action.name)]
      case "remove":
        return state.filter((_, index) => {
          return index !== action.index
        })
      default: 
        return state
    }
  }, []);

  const total = items.reduce((a, b) => a + b, 0)
  
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }

  return (
    <div className="container text-center">
      <h1>Create a Budget List!</h1>
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input className="form-control" ref={inputRef} type="number" step=".01" placeholder="$20.00" />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Add to List
        </button>
      </form>
      <h4>My Transaction List:</h4>
      <h6>Total Amount Spent: {total}</h6>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item">
            {item}{" "}
            <button className="btn btn-danger ml-5" onClick = {() => dispatch({type: "remove", index})}>
          Remove
        </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
