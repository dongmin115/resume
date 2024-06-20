export default function Introduce() {
  return (
    <div
      className="w-full flex flex-col justify-evenly h-full items-center px-[10%] py-[5%] overflow-hidden"
      data-aos="zoom-in"
      data-aos-duration="500"
    >
      <div className="w-full">
        <p className="justify-start w-full text-4xl font-bold">Resume</p>
        <div className="divider divider-primary" />
      </div>
      <div className="w-full flex flex-row h-full items-center">
        <div
          className="card w-[30%] h-[90%] glass shrink-0"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <figure className="w-full">
            <img
              src="https://i.ibb.co/xzMdmFY/IMG-3247.jpg"
              alt="profile"
              className="w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Front-End Engineer</h2>
            <p>Dongmin Lim</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col grow h-[90%] pl-[5%] justify-start">
          <h1
            className="font-semibold text-3xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Introduce
          </h1>
          <div
            className="divider w-[80%]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          />
          <div className="mb-2 flex flex-col space-y-2 w-[80%]">
            <h1
              className="text-2xl mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              안녕하세요, 신입 프론트엔드 개발자 임동민입니다.
            </h1>

            <p
              className="text-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              제가 하는 일이 무엇이든 잘하지 못하는 것을 싫어하기 때문에,
              무엇이든지 잘해지기 위해서 스스로 연구하고 노력하여 과거의 모습과
              비교하여 성장했다고 느낄때 성취감을 얻는 성격을 가지고 있습니다.
            </p>
            <p
              className="text-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              개발자로서 문제를 해결할 때 최선의 문제 해결 방법을 선택하는 것이
              중요하다고 생각하기 때문에, 새로운 기술을 학습하고 적용하는 데
              적극적입니다.
            </p>
            <p
              className="text-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              동료들과 지속적으로 지식을 공유하고 피드백을 주고받으며 개발
              프로세스를 개선하기 위해 노력합니다.
            </p>
          </div>
          <p
            className="text-xl mt-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="divider w-[80%]">Summary</div>
            기획부터 배포까지 개발의 모든 과정에 직접 참여하고, 다양한 팀원들과
            협업하여 프로젝트를 진행한 경험이 있습니다.
            <p className="my-2">
              코드의 유지 보수성 및 확장성을 고려한 공통 컴포넌트 설계에
              집중하며, 이를 통해 팀 전체의 개발 효율성을 향상시킵니다.
            </p>
            <p className="my-2">
              성능 최적화를 위해 다양한 문제 해결 방안을 분석하고 최선의 방법을
              선별하여 적용하는 데 집중적으로 노력합니다.
            </p>
          </p>
          <ul
            className="flex flex-col space-y-1 mt-auto w-fit"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <li className="flex flex-row">
              <div className="mr-1">📧</div>
              <a
                href="https://github.com/dongmin115"
                className="underline font-medium"
              >
                dongmin11566@gmail.com
              </a>
            </li>
            <li className="flex flex-row">
              <div className="mr-1">🐱</div>
              <a
                href="https://github.com/dongmin115"
                className="underline font-medium"
              >
                GitHub
              </a>
            </li>
            <li className="flex flex-row">
              <div className="mr-1">📘</div>
              <a
                href="https://velog.io/@dongmin115/posts"
                className="underline font-medium"
              >
                Blog
              </a>
            </li>
            <li className="flex flex-row">
              <div className="mr-1">📞</div>010-XXXX-XXXX
            </li>
            <li className="flex flex-row">
              <div className="mr-1">🎂</div>2001.XX.XX
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
