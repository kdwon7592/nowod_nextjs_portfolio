import Layout from "../components/layout";
import ProjectItem from "../components/projects/project-item";
import { NOTION_DATABASE_ID, NOTION_DATABASE_TOKEN } from "../config";

export default function Projects({ projects }) {
    return (
        <>
            <Layout>
                <section className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10">
                    <h1 className="text-4xl font-vold a,:text-6xl">
                        나의 프로젝트
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full py-10 max-w-sm md:max-w-4xl">
                        {projects.results.map(project => (
                            <ProjectItem key={project.id} data={project}></ProjectItem>
                        ))}
                    </div>
                </section>
            </Layout>
        </>
    )
}

// 빌드 타임에 호출된다.
export async function getStaticProps() {
    console.log("getStaticProps");
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${NOTION_DATABASE_TOKEN}`
        },
        body: JSON.stringify({
            // sorts: {
            //     "property":"Name",
            //     "direction""
            // },
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, options);
    const projects = await res.json();
    // console.log(result);

    // const projects = result.results.map(val => val.properties.Name.title[0].plain_text);
    // const projectProps = result.results.map(val => val.properties);
    // const projects = result.results.map
    // console.log(projectNames);

    return {
        props: {
            projects
        },
    }
}