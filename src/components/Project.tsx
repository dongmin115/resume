import { useEffect } from "react";

export default function Project() {
    // useEffect(() => {
    //     const overlay = document.querySelector(".overlay") as HTMLElement;
    //     if (!overlay) return;

    //     const cardsContainer = document.querySelector(".cards") as HTMLElement;
    //     const cards = Array.from(document.querySelectorAll(".box"));

    //     const applyOverlayMask = (e: any) => {
    //         const overlayEl = e.currentTarget;
    //         const rect = cardsContainer.getBoundingClientRect();
    //         const x = e.pageX - rect.left;
    //         const y = e.pageY - rect.top;

    //         overlayEl.style.setProperty("--opacity", "1");
    //         overlayEl.style.setProperty("--x", `${x}px`);
    //         overlayEl.style.setProperty("--y", `${y}px`);
    //     };

    //     const createOverlayCta = (overlayCard: any, ctaEl: any) => {
    //         const overlayCta = document.createElement("div");
    //         overlayCta.classList.add("cta");
    //         overlayCta.textContent = ctaEl.textContent;
    //         overlayCta.setAttribute("aria-hidden", "true");
    //         overlayCard.append(overlayCta);
    //     };

    //     const observer = new ResizeObserver((entries) => {
    //         entries.forEach((entry) => {
    //             const cardIndex = cards.indexOf(entry.target);
    //             let width = entry.borderBoxSize[0].inlineSize;
    //             let height = entry.borderBoxSize[0].blockSize;

    //             if (cardIndex >= 0) {
    //                 const cardElement = overlay.children[cardIndex] as HTMLElement;
    //                 cardElement.style.width = `${width}px`;
    //                 cardElement.style.height = `${height}px`;
    //             }
    //         });
    //     });

    //     const initOverlayCard = (cardEl: any) => {
    //         const overlayCard = document.createElement("div");
    //         overlayCard.classList.add("box");
    //         createOverlayCta(overlayCard, cardEl.lastElementChild);
    //         overlay.append(overlayCard);
    //         observer.observe(cardEl);
    //     };

    //     cards.forEach(initOverlayCard);
    //     document.body.addEventListener("pointermove", applyOverlayMask);
    //     return () => {
    //         document.body.removeEventListener("pointermove", applyOverlayMask);
    //     };
    // }, []);

    return (
        <div className="w-screen h-screen">
            {/* <main className="main flow">
                <h1 className="main__heading">Pricing</h1>
                <div className="main__cards cards">
                    <div className="cards__inner">
                        <div className="cards__card box">
                            <h2 className="card__heading">Basic</h2>
                            <p className="card__price">$9.99</p>
                            <ul role="list" className="card__bullets flow">
                                <li>Access to standard workouts and nutrition plans</li>
                                <li>Email support</li>
                            </ul>
                            <a href="#basic" className="card__cta cta">Get Started</a>
                        </div>

                        <div className="cards__card box">
                            <h2 className="card__heading">Pro</h2>
                            <p className="card__price">$19.99</p>
                            <ul role="list" className="card__bullets flow">
                                <li>Access to advanced workouts and nutrition plans</li>
                                <li>Priority Email support</li>
                                <li>Exclusive access to live Q&A sessions</li>
                            </ul>
                            <a href="#pro" className="card__cta cta">Upgrade to Pro</a>
                        </div>

                        <div className="cards__card box">
                            <h2 className="card__heading">Ultimate</h2>
                            <p className="card__price">$29.99</p>
                            <ul role="list" className="card__bullets flow">
                                <li>Access to all premium workouts and nutrition plans</li>
                                <li>24/7 Priority support</li>
                                <li>1-on-1 virtual coaching session every month</li>
                                <li>Exclusive content and early access to new features</li>
                            </ul>
                            <a href="#ultimate" className="card__cta cta">Go Ultimate</a>
                        </div>
                    </div>

                    <div className="overlay cards__inner"></div>
                </div>
            </main> */}
        </div>
    );
}
