import "./styles.css"
import { useState } from "react";

export default function App() {
  const [newItem , setNewItem] = useState("");

  return(
  <>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)}
        type="text" 
        id="item" />
    </div>
    <button className="btn">Add</button>
   
  </form>
  <h1 className="header">Your Tasks </h1>
  <br />
  <ul>
    <li>
      <label >
        <input type="checkbox"/>
        item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
     <li>
      <label >
        <input type="checkbox"/>
        item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  );
} 