import Image from "next/image";

export default function ProjectItem({ data }) {
    const projectTitle = data.properties.Name.title[0].plain_text;
    const projectDescription = data.properties.Description.rich_text[0].plain_text;
    const projectTags = data.properties.Tags.multi_select;
    const projectWorkPeriod = data.properties.WorkPeriod.rich_text[0].plain_text;
    const coverImage = data.cover.file.url;

    console.log(projectTags);

    return (
        <div className="project-card flex-col bg-slate-0 dark:bg-slate-700 m-3 rounded-xl">
            <Image className="rounded-t-xl"
                src={coverImage}
                width="100%"
                height="30%"
                layout="responsive"
                objectFit="fill"
                quality={100}
                alt="project image"
            />
            <div className="p-4 flex flex-col w-full">
                <h1 className="text-2xl font-bold">{projectTitle}</h1>
                <h3 className="mt-4 text-xl">{projectDescription}</h3>
                <h6 className="mt-2">기간 : {projectWorkPeriod}</h6>
                <div className="flex items-start mt-2">
                    {projectTags.map(tag => (
                        <button className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700" key={tag.id}>{tag.name}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}