import MuxPlayer from "@mux/mux-player-react";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return (
        <>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight md:mt-8 mt-5">
                Trip To Turkey
            </h2>
            <p className="leading-7">By Aslam Azad</p>
            <MuxPlayer
                className="mt-24"
                playbackId={slug}
                streamType="on-demand"
                metadata={{
                    video_id: slug,
                    video_title: "Turkey Trip",
                    player_name: "aamira.me",
                }}
            />
        </>
    );
}
