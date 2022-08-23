import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({ data }) {
    const projectTitle = data.properties.Name.title[0].plain_text;
    const projectDescription = data.properties.Description.rich_text[0].plain_text;
    const projectTags = data.properties.Tags.multi_select;
    const projectWorkPeriod = data.properties.WorkPeriod.rich_text[0].plain_text;
    const coverImage = data.cover.file.url;
    const notionUrl = data.url;

    // console.log(notionUrl);

    return (
        <Link href={notionUrl}>
            <section className="project-card text-gray-600 body-font ">
                <a target="_blank">
                    <Image className="rounded-t-xl"
                        src={coverImage}
                        width="100%"
                        height="30%"
                        layout="responsive"
                        objectFit="fill"
                        quality={100}
                        alt="project image"
                    />
                    <div className="container px-5 mx-auto">
                        <div className="flex flex-wrap flex-col w-full mb-5">
                            <div className="w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 mt-2">
                                    {projectTitle}
                                </h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                            <p className="w-full leading-relaxed">
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
            </section >

        </Link>
    )
}