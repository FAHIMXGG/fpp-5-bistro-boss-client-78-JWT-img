

import './App.css'

function App() {


  return (
    <>
      <div className="tooltip tooltip-open tooltip-secondary" data-tip="secondary">
        <button className="btn btn-secondary">secondary</button>
      </div>
      <div className="tooltip tooltip-open" data-tip="hello">
  <button className="btn">Force open</button>
</div>
    </>
  )
}

export default App
