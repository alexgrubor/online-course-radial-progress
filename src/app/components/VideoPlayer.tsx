import { useRef, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
  onTimeUpdate: (currentTime: number, duration: number) => void;
}
const VideoPlayer = ({ src, onTimeUpdate }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      onTimeUpdate(video!.currentTime, video!.duration);
    };

    if (video) {
      video.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (video) {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [onTimeUpdate]);
  return (
    <div >
      <video ref={videoRef} src={src} controls width={400} height={300} />{" "}
    </div>
  );
};
export default VideoPlayer;
