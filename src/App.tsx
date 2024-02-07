function App() {
  return (
    <div className="w-screen flex flex-col justify-evenly h-screen items-center px-[10%] py-[5%]">
      <div className="w-full h-full">
      <p className='justify-start w-full text-2xl'>Resume</p>
      <div className="divider divider-primary"/>
      </div>
      <div className="w-full flex flex-row h-full items-center">
        <div className="card w-96 h-[90%] glass">
          <figure><img src="https://i.ibb.co/LQ05mt0/IMG-3247.jpg" alt="car!"/></figure>
          <div className="card-body">
            <h2 className="card-title">Front-End Developer</h2>
            <p>Dongmin Lim</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="w-[30%] items-center pl-[5%]">
          <ul className="steps steps-vertical">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
            <li className="step">Receive Product</li>
            <li className="step">Receive Product</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
