"use client";

import { useEffect, useRef, useMemo, useCallback, use } from "react";
import MuxPlayer from "@mux/mux-player-react";

export default function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);

    // Ref to the <mux-player> element
    const playerRef = useRef<any>(null);

    // Storage key scoped to this video
    const storageKey = useMemo(() => `watch:${slug}:position`, [slug]);

    // Restore last position when the player metadata loads
    useEffect(() => {
        const el = playerRef.current as any;
        if (!el) return;

        const onLoadedMetadata = () => {
            try {
                const saved = localStorage.getItem(storageKey);
                const resumeAt = saved ? parseFloat(saved) : 0;
                if (!resumeAt || Number.isNaN(resumeAt)) return;

                const duration = el.duration ?? 0;
                // If the saved time is near the end, don't resume
                if (duration && resumeAt >= duration - 10) {
                    localStorage.removeItem(storageKey);
                    return;
                }

                el.currentTime = resumeAt;
            } catch {
                // no-op
            }
        };

        el.addEventListener("loadedmetadata", onLoadedMetadata);
        return () => {
            el.removeEventListener("loadedmetadata", onLoadedMetadata);
        };
    }, [storageKey]);

    // Throttled saver for current time
    const lastSavedRef = useRef(0);
    const handleTimeUpdate = useCallback(() => {
        const el = playerRef.current as any;
        if (!el) return;

        const now = Date.now();
        if (now - lastSavedRef.current < 2000) return; // ~2s throttle
        lastSavedRef.current = now;

        try {
            const t = el.currentTime ?? 0;
            localStorage.setItem(storageKey, String(Math.floor(t)));
        } catch {
            // no-op
        }
    }, [storageKey]);

    // Save immediately on page hide/visibility change so we don’t lose the last seconds
    const saveImmediately = useCallback(() => {
        const el = playerRef.current as any;
        if (!el) return;
        try {
            const t = el.currentTime ?? 0;
            localStorage.setItem(storageKey, String(Math.floor(t)));
        } catch {
            // no-op
        }
    }, [storageKey]);

    useEffect(() => {
        const onPageHide = () => saveImmediately();
        const onVisibility = () => {
            if (document.visibilityState === "hidden") saveImmediately();
        };
        window.addEventListener("pagehide", onPageHide);
        document.addEventListener("visibilitychange", onVisibility);
        return () => {
            window.removeEventListener("pagehide", onPageHide);
            document.removeEventListener("visibilitychange", onVisibility);
        };
    }, [saveImmediately]);

    const handleEnded = useCallback(() => {
        try {
            localStorage.removeItem(storageKey);
        } catch {
            // no-op
        }
    }, [storageKey]);

    // Optional: log mux errors with more context (filtered)
    const handleError = useCallback((e: any) => {
        const msg = String(e?.detail?.message ?? e?.message ?? e ?? "");
        if (msg.includes("getErrorFromHlsErrorData")) return; // suppress noisy internal log
        // console.warn("MuxPlayer error:", e?.detail ?? e);
    }, []);

    // Suppress specific noisy internal console logs from hls/mux-player
    useEffect(() => {
        const origWarn = console.warn;
        const origError = console.error;
        const shouldSuppress = (args: unknown[]) =>
            args.some(
                (a) =>
                    typeof a === "string" &&
                    a.includes("getErrorFromHlsErrorData")
            );

        console.warn = ((...args: unknown[]) => {
            if (shouldSuppress(args)) return;
            // @ts-expect-error pass-through
            origWarn(...args);
        }) as typeof console.warn;

        console.error = ((...args: unknown[]) => {
            if (shouldSuppress(args)) return;
            // @ts-expect-error pass-through
            origError(...args);
        }) as typeof console.error;

        return () => {
            console.warn = origWarn;
            console.error = origError;
        };
    }, []);

    return (
        <>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight md:mt-8 mt-5 ml-5">
                Trip To Turkey
            </h2>
            <p className="leading-7 ml-5">By Aslam Azad</p>
            <MuxPlayer
                ref={playerRef}
                defaultHiddenCaptions
                className="mt-24"
                key={slug}
                playbackId={slug}
                streamType="on-demand"
                metadata={{
                    video_id: slug,
                    video_title: "Turkey Trip",
                    player_name: "aamira.me",
                }}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
                onError={handleError}
            />
        </>
    );
}
