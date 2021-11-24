import ProjectSection from "@/components/ProjectSection";

export default function Projects() {
  return (
    <div className="p-6">
      <div className="text-center p-6 mb-20 mt-10">
        <h1 className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-black">
          PROJECTS
        </h1>
      </div>
      <div className="flex flex-wrap">
        <ProjectSection />
      </div>
    </div>
  );
}
