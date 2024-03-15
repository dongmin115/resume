import { useEffect, useState } from "react";
import Introduce from "./Introduce";
import Three from "./Three";
import Project from "./Project";

export default function Main() {
  const [scaleFactor, setScaleFactor] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showContent, setShowContent] = useState(true);
  const [showIntroduce, setShowIntroduce] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [isfixed, setIsFixed] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);

  //랜덤으로 색이 바뀌는 그라데이션 효과
  useEffect(() => {
    const colors = [
      [62, 35, 255],
      [60, 255, 60],
      [255, 35, 98],
      [45, 175, 230],
      [255, 0, 255],
      [255, 128, 0],
    ];

    let step = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    const colorIndices = [0, 1, 2, 3];

    //transition speed
    const gradientSpeed = 0.002;

    function updateGradient() {
      if ($ === undefined) return;

      const c0_0 = colors[colorIndices[0]];
      const c0_1 = colors[colorIndices[1]];
      const c1_0 = colors[colorIndices[2]];
      const c1_1 = colors[colorIndices[3]];

      const istep = 1 - step;
      const r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
      const g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
      const b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
      const color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

      const r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
      const g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
      const b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
      const color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

      $("#gradient")
        .css({
          background:
            "-webkit-gradient(linear, left top, right top, from(" +
            color1 +
            "), to(" +
            color2 +
            "))",
        })
        .css({
          background:
            "-moz-linear-gradient(left, " +
            color1 +
            " 0%, " +
            color2 +
            " 100%)",
        });

      step += gradientSpeed;
      if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] =
          (colorIndices[1] +
            Math.floor(1 + Math.random() * (colors.length - 1))) %
          colors.length;
        colorIndices[3] =
          (colorIndices[3] +
            Math.floor(1 + Math.random() * (colors.length - 1))) %
          colors.length;
      }
      requestAnimationFrame(updateGradient);
    }
    updateGradient();
  }, []);

  useEffect(() => {
    const gradient = document.getElementById("gradient");
    const introduce = document.getElementById("introduce");
    const three = document.getElementById("three");
    const project = document.getElementById("project");

    // Intersection Observer 콜백 함수
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "gradient" && entry.isIntersecting) {
          // gradient가 화면에 보일 때
          setShowContent(true);
          setShowIntroduce(false);
        } else if (entry.target.id === "gradient" && !entry.isIntersecting) {
          // gradient가 화면에서 사라질 때
          setShowContent(false);
          setShowIntroduce(true);
          setShowTech(true);
        }
        if (entry.target.id === "three" && entry.intersectionRatio > 0.9) {
          setIsFixed(true);
        }
        if (entry.target.id === "project" && entry.intersectionRatio > 0.5) {
          setIsShow(true);
        } else if (
          entry.target.id === "project" &&
          entry.intersectionRatio < 0.5
        ) {
          setIsShow(false);
        }
      });
    });

    // 각 요소를 주시
    observer.observe(gradient!);
    observer.observe(introduce!);
    observer.observe(three!);
    observer.observe(project!);

    // 스크롤 이벤트 핸들러
    function handleScroll() {
      const scrollPosition = window.scrollY;
      setScrollPosition(scrollPosition);
      // 확대 비율 조절
      const maxScaleFactor = 1.4;
      const scaleFactor = Math.min(1 + scrollPosition / 3000, maxScaleFactor);
      setScaleFactor(scaleFactor);
    }

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [isfixed, scrollPosition]);
  return (
    <div className="w-screen h-[500vh]">
      <div id="gradient" className="w-screen h-[120vh]">
        {/* 마우스 따라다니는 그라데이션 애니메이션
            <div id="gradient" className={`size-10 rounded-full`} 
            style={{
                position: 'fixed',
                left: mousePosition.x,
                top: mousePosition.y,
                transform: 'translate(-50%, -50%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                pointerEvents: 'none',
                opacity: '70%',
            }}/> */}
        {showContent && (
          <div className="flex justify-center items-center w-screen h-screen overflow-hidden">
            <div
              className="mockup-browser bg-base-300 w-[70%] h-[70%] shadow-2xl"
              style={{ position: "fixed", transform: `scale(${scaleFactor})` }}
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <div className="mockup-browser-toolbar">
                <div className="input">https://dongminlim/resume.com</div>
              </div>
              <div className="flex bg-base-200 h-[91%] items-center flex-col px-[10%] pt-[5%]">
                <p className="justify-start w-full text-2xl font-bold">
                  Resume
                </p>
                <div className="divider divider-primary" />
                <div className="flex flex-row w-full h-[75%] mb-auto">
                  <div className="skeleton w-2/5 h-full shrink-0" />
                  <div className="flex flex-col h-full w-[55%] space-y-4 ml-auto">
                    <div className="skeleton w-[45%] h-[9%] mb-1" />
                    <div className="skeleton w-full h-[7%]" />
                    <div className="skeleton w-full h-[7%]" />
                    <div className="skeleton w-full h-[7%]" />
                    <div className="skeleton w-full h-[7%]" />
                    <div className="skeleton w-[70%] h-[7%]" />
                    <div className="flex flex-col w-full h-1/3 space-y-3 justify-end">
                      <div className="skeleton w-[40%] h-[13%]" />
                      <div className="skeleton w-[40%] h-[13%]" />
                      <div className="skeleton w-[40%] h-[13%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div id="introduce" className="w-screen h-[110vh]">
        {showIntroduce && <Introduce />}
      </div>
      <div
        id="three"
        className={`w-screen h-screen ${isfixed ? "fixed inset-0" : ""}`}
      >
        {showTech && <Three isfixed={isfixed} setIsFixed={setIsFixed} />}
      </div>
      <div>
        <div id="project">{isShow && <Project />}</div>
      </div>
    </div>
  );
}
