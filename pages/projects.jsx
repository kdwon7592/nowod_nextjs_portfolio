import { useContext } from "react";
import { LanguageContext } from "../components/contexts/language";
import Layout from "../components/layout";
import { MemoizedProjectItems } from "../components/projects/project-item";
import { NOTION_DATABASE_ID, NOTION_DATABASE_TOKEN } from "../config";

export default function Projects({ projects }) {
    const [{ languageName }] = useContext(LanguageContext);

    return (
        <>
            <Layout>
                <section className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10">
                    <div className="flex flex-row items-center justify-center">
                        <h3 className="text-3xl font-vold a,:text-4xl pt-1">
                            {languageName === 'en' ? 'My Projects' : '나의 프로젝트'}
                        </h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full py-10 max-w-sm md:max-w-4xl">
                        {projects.results.map(project => (
                            <MemoizedProjectItems key={project.id} data={project}></MemoizedProjectItems>
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
    console.log(projects.results[0]);

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