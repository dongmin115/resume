import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    const cardsContainer = document.querySelector(".boxes") as HTMLElement; 
    const cardsContainerInner = document.querySelector(".boxes__inner");
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
        let width = entry.borderBoxSize[0].inlineSize;
        let height = entry.borderBoxSize[0].blockSize;

        if (cardIndex >= 0) {
            const overlayChild = overlay!.children[cardIndex] as HTMLDivElement;
            overlayChild.setAttribute("style", `width: ${width}px; height: ${height}px;`);
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
          <div className="boxes__box box">
            <h2 className="box__heading">Basic</h2>
            <p className="box__price">$9.99</p>
            <ul role="list" className="box__bullets flow">
              <li>Access to standard workouts and nutrition plans</li>
              <li>Email support</li>
            </ul>
            <a href="#basic" className="box__cta cta">Get Started</a>
          </div>

          <div className="boxes__box box">
            <h2 className="box__heading">Pro</h2>
            <p className="box__price">$19.99</p>
            <ul role="list" className="box__bullets flow">
              <li>Access to advanced workouts and nutrition plans</li>
              <li>Priority Email support</li>
              <li>Exclusive access to live Q&A sessions</li>
            </ul>
            <a href="#pro" className="box__cta cta">Upgrade to Pro</a>
          </div>

          <div className="boxes__box box">
            <h2 className="box__heading">Ultimate</h2>
            <p className="box__price">$29.99</p>
            <ul role="list" className="box__bullets flow">
              <li>Access to all premium workouts and nutrition plans</li>
              <li>24/7 Priority support</li>
              <li>1-on-1 virtual coaching session every month</li>
              <li>Exclusive content and early access to new features</li>
            </ul>
            <a href="#ultimate" className="box__cta cta">Go Ultimate</a>
          </div>
        </div>
        
        <div className="overlay boxes__inner"></div>
      </div>
    </main>
  );
}
