import Image from "next/image";
import Link from "next/link";
import React from "react";

const projectCache = [];

export default function ProjectItem({ data }) {

    let projectTitle = '';
    let projectDescription = '';
    let projectTags = '';
    let projectWorkPeriod = '';
    let coverImage = '';
    let notionUrl = '';

    if (projectCache[data.id]) {
        projectTitle = data.properties.Name?.title[0].plain_text;
        projectDescription = data.properties.Description?.rich_text[0].plain_text;
        projectTags = data.properties.Tags?.multi_select;
        projectWorkPeriod = data.properties.WorkPeriod?.rich_text[0].plain_text;
        coverImage = data.properties.cover?.rich_text[0].plain_text;
        notionUrl = data.url;
    } else {
        projectTitle = data.properties.Name?.title[0].plain_text;
        projectDescription = data.properties.Description?.rich_text[0].plain_text;
        projectTags = data.properties.Tags?.multi_select;
        projectWorkPeriod = data.properties.WorkPeriod?.rich_text[0].plain_text;
        coverImage = data.properties.cover?.rich_text[0].plain_text;
        notionUrl = data.url;

        projectCache[data.id] = {
            projectTitle,
            projectDescription,
            projectTags,
            projectWorkPeriod,
            coverImage,
            notionUrl
        }

    }

    return (

        <section className="project-card text-gray-600 body-font ">
            <Link href={notionUrl}>
                <a target="blank">
                    <Image className="rounded-t-xl"
                        src={`/${coverImage}`}
                        width="100%"
                        height="45%"
                        layout="responsive"
                        objectFit="fill"
                        quality={100}
                        alt="project image"
                    />
                    <div className="container px-5 mx-auto">
                        <div className="flex flex-wrap flex-col w-full mb-3">
                            <div className="w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 mt-2">
                                    {projectTitle}
                                </h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                            <p className="w-full leading-relaxed mt-2">
                                {projectDescription}
                            </p>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">기간 : {projectWorkPeriod}</h3>
                            <h2 className="text-xs font-medium title-font mt-2">[사용 기술]</h2>
                            <div className="flex items-start mt-2 mb-2">
                                {projectTags.map(tag => (
                                    <button className="px-2 py-1 text-xs mr-2 mb-1 mt-1 rounded-md bg-sky-200 dark:bg-sky-700" key={tag.id}>{tag.name}</button>
                                ))}
                            </div>

                        </div>
                    </div>
                </a >
            </Link>
        </section >
    )
}

export const MemoizedProjectItems = React.memo(ProjectItem);
