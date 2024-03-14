import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    const cardsContainer = document.querySelector(".boxes") as HTMLElement;
    const cards = Array.from(document.querySelectorAll(".box"));
    const overlay = document.querySelector(".overlay");

    const applyOverlayMask = (e: MouseEvent) => {
      const overlayEl = e.currentTarget as HTMLElement;
      const x = e.pageX - cardsContainer.offsetLeft;
      const y = e.pageY - cardsContainer.offsetTop;

      overlayEl.style.setProperty("--opacity", "1");
      overlayEl.style.setProperty("--x", `${x}px`);
      overlayEl.style.setProperty("--y", `${y}px`);
    };

    const createOverlayCta = (overlayCard: HTMLElement, ctaEl: HTMLElement) => {
      const overlayCta = document.createElement("div");
      overlayCta.classList.add("cta");
      overlayCta.textContent = ctaEl.textContent!;
      overlayCta.setAttribute("aria-hidden", "true");
      overlayCard.append(overlayCta);
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = cards.indexOf(entry.target as HTMLElement);
        const width = entry.borderBoxSize[0].inlineSize;
        const height = entry.borderBoxSize[0].blockSize;

        if (cardIndex >= 0) {
          const overlayChild = overlay!.children[cardIndex] as HTMLDivElement;
          if (overlayChild) {
            overlayChild.setAttribute(
              "style",
              `width: ${width}px; height: ${height}px;`
            );
          }
        }
      });
    });

    const initOverlayCard = (cardEl: HTMLElement) => {
      const overlayCard = document.createElement("div");
      overlayCard.classList.add("box");
      createOverlayCta(overlayCard, cardEl.lastElementChild as HTMLElement);
      // overlay 요소에 자식 요소가 없을 때만 자식 요소를 추가합니다.
      if (overlay!.children.length < 3) {
        overlay!.append(overlayCard);
      }

      observer.observe(cardEl);
    };

    cards.forEach((cardEl) => initOverlayCard(cardEl as HTMLElement));
    document.body.addEventListener("pointermove", applyOverlayMask);

    return () => {
      document.body.removeEventListener("pointermove", applyOverlayMask);
    };
  }, []);

  return (
    <main className="main flow bg-[#212121]">
      <h1 className="main__heading">Project</h1>
      <div className="main__boxes boxes">
        <div className="boxes__inner">
          {/* 1번째 프로젝트 */}
          <div className="boxes__box box">
            <div className="flex flex-row items-center justify-between">
              <h2 className="box__heading">Clip Tab!</h2>
              <h1 className="box_bullets">2023.12 ~ 2024.02</h1>
            </div>
            <p className="box__price">
              유용한 북마크 관리, url 이미지 추출 익스텐션
            </p>
            <ul role="list" className="box__bullets flow">
              <li>프로젝트에 기여하고 사용한 기술 설명</li>
              <li>
                <a href="https://medium.com/@vitash1215/2023-siliconvalley-winter-bootcamp-cliptab-korean-755b3448266b">
                  Medium
                </a>
              </li>
            </ul>
            <a
              href="https://github.com/2023-WinterBootcamp-Team-M"
              className="box__cta cta"
            >
              GitHub
            </a>
          </div>
          {/* 2번째 프로젝트 */}
          <div className="boxes__box box">
            <h2 className="box__heading">DreamVault</h2>
            <p className="box__price">AI가 생성한 음악 저장소</p>
            <ul role="list" className="box__bullets flow">
              <li>Access to advanced workouts and nutrition plans</li>
              <li>Priority Email support</li>
              <li>Exclusive access to live Q&A sessions</li>
            </ul>
            <a href="#pro" className="box__cta cta">
              Upgrade to Pro
            </a>
          </div>
          {/* 3번째 프로젝트 */}
          <div className="boxes__box box">
            <h2 className="box__heading">On My Desk</h2>
            <p className="box__price">데스크탑 셋업 공유 플랫폼</p>
            <ul role="list" className="box__bullets flow">
              <li>Access to all premium workouts and nutrition plans</li>
              <li>24/7 Priority support</li>
              <li>1-on-1 virtual coaching session every month</li>
              <li>Exclusive content and early access to new features</li>
            </ul>
            <a href="#ultimate" className="box__cta cta">
              Go Ultimate
            </a>
          </div>
        </div>

        <div className="overlay boxes__inner"></div>
      </div>
    </main>
  );
}
