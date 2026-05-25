"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt: string;
  className: string;
  instanceId: string;
};

function buildVideoSrc(base: string, instanceId: string) {
  const path = base.split("?")[0];
  return `${path}?i=${encodeURIComponent(instanceId)}`;
}

export function InterventionVideo({ src, alt, className, instanceId }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const play = () => {
      void el.play().catch(() => {});
    };

    const onError = () => {
      const path = src.split("?")[0];
      el.src = `${path}?retry=${Date.now()}`;
      el.load();
      play();
    };

    el.addEventListener("error", onError);
    play();

    return () => el.removeEventListener("error", onError);
  }, [src, instanceId]);

  return (
    <video
      ref={ref}
      src={buildVideoSrc(src, instanceId)}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
      aria-label={alt}
    />
  );
}
