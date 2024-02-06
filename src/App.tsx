function App() {
  return (
    <div className="w-screen flex flex-col justify-evenly h-screen items-center px-[10%]">
      <div className="w-full">
      <p className='justify-start w-full text-2xl'>Resume</p>
      <div className="divider"/>
      </div>
      <div className="card w-96 h-[70%] glass">
        <figure><img src="https://i.ibb.co/LQ05mt0/IMG-3247.jpg" alt="car!"/></figure>
        <div className="card-body">
          <h2 className="card-title">Front-End Developer</h2>
          <p>Dongmin Lim</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
