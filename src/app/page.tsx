import LessonsTabs from "./components/LessonsTabs";

export default function Home() {
  return (
    <>
    <main className="hidden md:block min-h-screen bg-slate-100 p-4">
      <h1 className="text-4xl mb-10">Name of the course</h1>
      <div className="border border-gray-300 rounded  shadow-md">
        <LessonsTabs />
      </div>
    </main>
    <p className="md:hidden text-center text-gray-600 p-4">
        We are only available on desktop. Please use a larger screen for the best experience.
      </p>
    </>
  );
}
