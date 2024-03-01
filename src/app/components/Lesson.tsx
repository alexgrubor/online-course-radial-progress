"use client";
import { useState } from "react";
import RadialProgressBar from "./RadialProgressBar";
import VideoPlayer from "./VideoPlayer";

interface LessonProps {
  videoSource: string;
  lessonNumber: number;
  lessonName: string;
  isActive: boolean;
  onActivate: () => void;
}
const Lesson = ({
  videoSource,
  lessonNumber,
  lessonName,
  isActive,
  onActivate,
}: LessonProps) => {
  const [progress, setProgress] = useState<number>(0);
  const handleVideoTimeChange = (currentTime: number, duration: number) => {
    const newProgress = currentTime / duration;
    setProgress(newProgress);
  };
  return (
    <div className="flex flex-col md:flex-row bg-white p-3">
      <div onClick={onActivate}>
        <RadialProgressBar isActive={isActive}  progress={progress} lessonNumber={lessonNumber} />
      </div>
      {isActive && (
        <div className="absolute top-10 left-[15%] flex flex-col gap-5">
          <h2 className="text-3xl">{lessonName}</h2>
          <VideoPlayer src={videoSource} onTimeUpdate={handleVideoTimeChange} />
          <p className="max-w-[30%]">
            Description: Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Ex officiis tempora vero modi necessitatibus consequuntur illo
            labore molestias qui rem voluptatibus eveniet minima doloremque
            aliquam quia deleniti, obcaecati, quas expedita! Repudiandae laborum
            molestiae cupiditate cumque nemo, id ab consequuntur? Ad veritatis,
            totam magni officiis nobis excepturi? Commodi autem praesentium
            magni cupiditate, enim sed facilis ipsum architecto nulla eligendi
            
          </p>
        </div>
      )}
    </div>
  );
};
export default Lesson;
