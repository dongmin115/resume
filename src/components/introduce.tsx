export default function Introduce(){
    return (
    <div className="w-screen flex flex-col justify-evenly h-screen items-center px-[10%] py-[5%]" data-aos="zoom-in" data-aos-duration="1000">
    <div className="w-full">
    <p className='justify-start w-full text-4xl font-bold'>Resume</p>
    <div className="divider divider-primary"/>
    </div>
    <div className="w-full flex flex-row h-full items-center">
      <div className="card w-[30%] h-[90%] glass shrink-0" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="100">
        <figure><img src="https://i.ibb.co/LQ05mt0/IMG-3247.jpg" alt="profile"/></figure>
        <div className="card-body">
          <h2 className="card-title">Front-End Developer</h2>
          <p>Dongmin Lim</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
      {/* <div className="w-[30%] items-center pl-[5%]">
        <ul className="steps steps-vertical">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
          <li className="step">Receive Product</li>
          <li className="step">Receive Product</li>
        </ul>
      </div> */}
      <div className="flex flex-col grow h-[90%] pl-[5%] justify-start">
        <h1 className="font-semibold text-3xl">Introduce</h1>
        <div className="divider"/>
        <div className="mb-2 flex flex-col space-y-2">
          <h1 className="text-2xl mb-4">안녕하세요, 웹 프론트엔드 개발자 임동민입니다.</h1>
          <p className="text-md">신입 프론트엔드 개발자입니다.</p>
          <p className="text-md">개발자 직무를 선택한 이유</p>
          <p className="text-md">개발자로써의 성격적 장점 어필</p>
          <p className="text-md">이루고싶은 것</p>
          <p className="text-md">현재하고있는 노력</p>
        </div>
        <ul className="flex flex-col space-y-1 mt-auto w-fit">
          <li className="flex flex-row"><div className="mr-1">📧</div><a href="https://github.com/dongmin115" className="underline font-medium">dongmin11566@gmail.com</a></li>
          <li className="flex flex-row"><div className="mr-1">🐱</div><a href="https://github.com/dongmin115" className="underline font-medium">GitHub</a></li>
          <li className="flex flex-row"><div className="mr-1">📘</div><a href="https://velog.io/@dongmin115/posts" className="underline font-medium">Blog</a></li>
          <li className="flex flex-row"><div className="mr-1">📞</div>010-XXXX-XXXX</li>
          <li className="flex flex-row"><div className="mr-1">🎂</div>2001.XX.XX</li>
        </ul>
      </div>
    </div>
  </div>)
}