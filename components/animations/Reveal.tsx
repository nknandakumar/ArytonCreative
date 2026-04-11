"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export function RevealContainer({ 
  children, 
  className, 
  delay = 0, 
  staggerChildren = 0.1 
}: { 
  children: ReactNode, 
  className?: string, 
  delay?: number, 
  staggerChildren?: number 
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay, staggerChildren, delayChildren: delay }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ 
  children, 
  className,
  yOffset = 30,
  delay = 0
}: { 
  children: ReactNode, 
  className?: string,
  yOffset?: number,
  delay?: number
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { type: "spring", stiffness: 50, damping: 20, delay } 
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ 
  children, 
  className = "",
  delay = 0,
  duration = 1.5
}: { 
  children: ReactNode, 
  className?: string,
  delay?: number,
  duration?: number
}) {
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || !container.current || hasAnimated.current || !container.current.firstElementChild) return;
    hasAnimated.current = true;

    const target = container.current.firstElementChild as HTMLElement;

    const ctx = gsap.context(() => {
      // Make it visible right before starting animation
      gsap.set(container.current, { visibility: "visible" });

      const split = new SplitType(target, { types: 'lines', lineClass: 'split-child' });
      
      if (split.lines) {
        split.lines.forEach(line => {
          const wrapper = document.createElement('div');
          wrapper.className = 'split-parent';
          wrapper.style.overflow = 'hidden';
          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });

        gsap.from(split.lines, {
          yPercent: 100,
          duration: duration,
          ease: "power4.out",
          stagger: 0.1,
          delay: delay
        });
      }
    }, container);

    return () => ctx.revert();
  }, [isInView, delay, duration]);

  return (
    <div ref={container} className={className} style={{ visibility: "hidden" }}>
      {children}
    </div>
  );
}
