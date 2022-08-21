import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
    return (
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                안녕하세요. 김도원입니다.
                <br className="hidden lg:inline-block" />
                Next.js, tailwindcss, Loti-animation을 사용한 포트폴리오 입니다.
            </h1>
            <p className="mb-8 leading-relaxed">
                저는 빠른 기술 습득력과 다양한 경험(웹, 앱, 서버 등), 기술에 대한 호기심을 갖고 있는 개발자입니다. 주어진 업무와 이슈에 대해 적극적이고 빠르게 대응하며, 어떤 업무든 쉽게 적응할 수 있습니다. 더 나은 성능과 가독성, 효율적인 개발을 하고자 노력합니다.
            </p>
            <div className="flex justify-center">
                <Link href="/projects">
                    <a className="btn-project">
                        프로젝트 보러가기
                    </a>
                </Link>
            </div>
        </div>
    )
}