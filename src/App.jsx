import "./styles.css"
export default function App() {
  return(
  <>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" />
      <button className="btn">Add</button>
    </div>
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