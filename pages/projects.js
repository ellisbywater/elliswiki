import ProjectSection from "@/components/ProjectSection";
import { sanityClient } from "@/lib/sanity";

const projectQuery = `*[_type == "project"]{_id, title, slug, image, description, stack, link, github}`;

export default function Projects({ projects }) {
  return (
    <div className="p-6">
      <div className="text-center p-6 mb-20 mt-10">
        <h1 className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-black">
          PROJECTS
        </h1>
      </div>
      <div className="flex flex-wrap">
        <ProjectSection projects={projects} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await sanityClient.fetch(projectQuery);
  return {
    props: {
      projects: projects,
    },
  };
}
