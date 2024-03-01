"use client";
import { useState } from "react";
import Lesson from "./Lesson";
import VerticalDivideder from "./ui/VerticalDivideder";

const lessons = [
  {
    videoSource: "/videos/pexels-thirdman-6502950 (1080p).mp4",
    lessonNumber: 1,
    lessonName: "Lesson Number 1",
  },
  {
    videoSource: "/videos/pexels-thirdman-6502950 (1080p).mp4",
    lessonNumber: 2,
    lessonName: "Lesson Number 2",
  },
  {
    videoSource: "/videos/pexels-thirdman-6502950 (1080p).mp4",
    lessonNumber: 3,
    lessonName: "Lesson Number 3",
  },
];

const LessonsTabs = () => {
  const [activeLesson, setActiveLesson] = useState(lessons[0].lessonNumber);

  const handleLessonActivate = (lessonNumber: number) => {
    setActiveLesson(lessonNumber);
  };
  return (
    <main className="relative h-screen bg-white flex">
      <VerticalDivideder/>
      <div className="">
        {lessons.map((lesson) => (
          <Lesson
            key={lesson.lessonNumber}
            videoSource={lesson.videoSource}
            lessonNumber={lesson.lessonNumber}
            lessonName={lesson.lessonName}
            isActive={activeLesson === lesson.lessonNumber}
            onActivate={() => handleLessonActivate(lesson.lessonNumber)}
          />
        ))}
      </div>
    </main>
  );
};
export default LessonsTabs;
