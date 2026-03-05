"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { slides } from "@/lib/slides";
import ProgressBar from "@/components/ui/ProgressBar";
import SlideCounter from "@/components/ui/SlideCounter";
import Navigation from "@/components/ui/Navigation";

// Slide components
import BlackSlide from "@/components/slides/BlackSlide";
import TitleSlide from "@/components/slides/TitleSlide";
import StatementSlide from "@/components/slides/StatementSlide";
import ThreeColumnsSlide from "@/components/slides/ThreeColumnsSlide";
import SplitSlide from "@/components/slides/SplitSlide";
import GridSlide from "@/components/slides/GridSlide";
import ListSlide from "@/components/slides/ListSlide";
import DemoSlide from "@/components/slides/DemoSlide";
import HorizonSlide from "@/components/slides/HorizonSlide";
import IQSlide from "@/components/slides/IQSlide";

function renderSlide(slideIndex: number) {
  const slide = slides[slideIndex];

  switch (slide.type) {
    case "black":
      return <BlackSlide key={slideIndex} />;

    case "title":
      return (
        <TitleSlide
          key={slideIndex}
          title={slide.title!}
          subtitle={slide.subtitle!}
          meta={slide.meta!}
          footer={slide.footer}
        />
      );

    case "statement":
      return (
        <StatementSlide
          key={slideIndex}
          number={slide.number!}
          label={slide.label!}
          sub={slide.sub!}
        />
      );

    case "three-columns":
      return (
        <ThreeColumnsSlide
          key={slideIndex}
          title={slide.title!}
          columns={slide.columns!}
        />
      );

    case "split":
      return (
        <SplitSlide
          key={slideIndex}
          title={slide.title!}
          leftTitle={slide.leftTitle!}
          leftItems={slide.leftItems!}
          rightTitle={slide.rightTitle!}
          rightItems={slide.rightItems!}
          footer={slide.footer}
        />
      );

    case "grid":
      return (
        <GridSlide
          key={slideIndex}
          title={slide.title!}
          items={slide.items!}
        />
      );

    case "list":
      return (
        <ListSlide
          key={slideIndex}
          title={slide.title!}
          items={slide.listItems!}
        />
      );

    case "demo":
      return (
        <DemoSlide
          key={slideIndex}
          label={slide.demoLabel!}
          title={slide.demoTitle!}
          sub={slide.demoSub!}
        />
      );

    case "horizon":
      return (
        <HorizonSlide
          key={slideIndex}
          title={slide.horizonTitle!}
          sub={slide.horizonSub!}
          small={slide.small!}
        />
      );

    case "iq":
      return (
        <IQSlide
          key={slideIndex}
          leftNumber={slide.leftNumber!}
          leftLabel={slide.leftLabel!}
          rightNumber={slide.rightNumber!}
          rightLabel={slide.rightLabel!}
          sub={slide.iqSub!}
        />
      );

    default:
      return <BlackSlide key={slideIndex} />;
  }
}

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goNext = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, total - 1));
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
          e.preventDefault();
          goNext();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          goPrev();
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, toggleFullscreen]);

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ background: "#050510" }}
    >
      {/* Progress bar */}
      <ProgressBar current={current + 1} total={total} />

      {/* Slide content */}
      <div className="w-full h-full">
        <AnimatePresence mode="wait">
          {renderSlide(current)}
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      <Navigation
        onPrev={goPrev}
        onNext={goNext}
        canPrev={current > 0}
        canNext={current < total - 1}
      />

      {/* Slide counter */}
      <SlideCounter current={current + 1} total={total} />

      {/* Keyboard hint — only on first slide */}
      {current === 0 && (
        <div
          className="fixed bottom-6 left-8 text-xs font-medium z-50"
          style={{ color: "#1e293b" }}
        >
          → / Space = volgende &nbsp;·&nbsp; F = fullscreen
        </div>
      )}
    </div>
  );
}
