export default function  Strength(){
    return (
    <div className="h-screen w-screen flex flex-col px-[10%] py-[5%]">
        <p className="text-4xl font-bold pb-10">기술</p>
        <div className="flex flex-wrap w-full h-full space-x-4 justify-evenly">
        <div className="card w-[45%] h-[25%] glass relative">
            {/* 배경 이미지 */}
            <div className="absolute inset-0 bg-cover bg-center z-0 opacity-60 rounded-2xl bg-no-repeat" style={{ backgroundImage: "url('https://i.ibb.co/jkwT3HF/ts-lettermark-blue.png')" }}/>
        <div className="card-body w-full z-10">
            <h2 className="card-title">JavaScript</h2>
            <p>자바스크립트 문법에 익숙합니다.</p>
        </div>
        </div>
            <div className="w-[45%] h-[25%] card glass">TpyeScript</div>
            <div className="w-[45%] h-[25%] card glass">React</div>
            <div className="w-[45%] h-[25%] card glass">TailwindCSS</div>
            <div className="w-[45%] h-[25%] card glass">TailwindCSS</div>
            <div className="w-[45%] h-[25%] card glass">TailwindCSS</div>
        </div>
    </div>)
}