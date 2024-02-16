import { useEffect, useRef } from "react";

export default function Tech() {

    return (
        <div className="w-screen h-screen">
            <div className="flex justify-center items-center w-full h-full">
                <div className="flex flex-col items-center justify-center mask mask-hexagon-2 overflow-hidden bg-accent" style={{ width: '10%', height: '10%' }}>
                    <p className="text-sm font-bold text-accent-content">TypeScript</p>
                </div>
            </div>
        </div>
    );
}
