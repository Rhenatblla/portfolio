// app/components/SplitText.jsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SplitText({ text, className = "", delay = 0.06, duration = 1.2, splitType = "words", from = {}, to = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const units = splitType === "chars" ? text.split("") : text.split(" ");

    el.innerHTML = units.map((unit) => `<span class="inline-block">${unit === " " ? "&nbsp;" : unit}</span>`).join(splitType === "chars" ? "" : " ");

    gsap.fromTo(
      el.children,
      { opacity: 0, y: 30, filter: "blur(8px)", ...from },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration,
        stagger: delay,
        ease: "power4.out",
        ...to,
      }
    );
  }, []);

  return <div ref={ref} className={className} />;
}
