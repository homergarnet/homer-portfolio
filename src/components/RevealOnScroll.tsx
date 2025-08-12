import { useEffect, useRef } from "react";

const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && ref.current) {
        ref.current.classList.add("visible");
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};

export default RevealOnScroll;
