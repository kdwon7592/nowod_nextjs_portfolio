const menu = {
  en: {
    home: 'home',
    projects: 'projects',
    skills: 'my skills',
    contact: 'contact',
  },
  kr: {
    home: '홈',
    projects: '프로젝트',
    skills: '나의 기술',
    contact: '연락하기',
  }
}

const about = {
  en: {
    name: 'My name is Dowon Kim',
    intro: 'Thank you for coming',
    role: 'A Software Developer',
    description:
      'I am a developer with quick skill acquisition, a variety of experiences (web, app, server, etc.), and curiosity about technology. I responds positively and quickly to given tasks and issues, and can easily adapt to any task. I strive for better performance, readability, and efficient development.',
    description2: 'This page built with Next.js, tailwindcss, loti-animation, Notion API',
  },
  kr: {
    name: '저는 김도원이라고 합니다.',
    intro: '방문해주셔서 감사합니다.',
    role: 'A Software Developer',
    description:
      '저는 빠른 기술 습득력과 다양한 경험(웹, 앱, 서버 등), 기술에 대한 호기심을 갖고 있는 개발자입니다. 주어진 업무와 이슈에 대해 적극적이고 빠르게 대응하며, 어떤 업무든 쉽게 적응할 수 있습니다. 더 나은 성능과 가독성, 효율적인 개발을 하고자 노력합니다.',
    description2: '이 페이지는 Next.js, tailwindcss, loti-animation, Notion API로 만들어졌습니다.',
  },
  blog: 'https://velog.io/@nowod_it',
  social: {
    linkedin: 'https://www.linkedin.com/in/%EB%8F%84%EC%9B%90-%EA%B9%80-b45158170/',
    github: 'https://github.com/kdwon7592?tab=repositories',
  },
}


// const skills = {
//   good: {
//     skill: ['Javascript', 'Java', 'Spring', 'Oracle', 'MS-SQL', 'Web', 'jquery'],
//     image: [''],
//     kr: '실무에서 자주 사용하고, 익숙하게 쓰고 있어요.'
//   },

//   can: {
//     skill: ['React', 'Android', 'My-SQL'],
//     kr: '실무에서 써본적도 있고, 어느정도 할 줄 알아요.'
//   },

//   readable: {
//     skill: ['Python', 'SWIFT', 'C#', 'PHP'],
//     kr: "코드를 읽고 이해할 수 있어요."
//   },

//   tools: {
//     skill: ['svn', 'git', 'AWS', 'MS-AZURE', 'Jenkins', 'Confluence', 'Trello', 'Intermax'],
//     kr: "제가 사용하고 있고, 사용했던 경험이 있어요."
//   }
// }

const mySkill = {
  language: {
    javascript: {
      name: 'Javascript',
      description1: '웹, 모바일 화면 개발 등 실무에서 자주 사용하고 있어요.',
      description2: 'ES6에 대한 이해와 Closre, 비동기처리 등에 대해 이해하고 있어요.',
      imgSrc: 'https://www.svgrepo.com/show/355081/js.svg',
    },
    java: {
      name: 'Java',
      description1: '웹서비스, DB처리 등 실무에서 자주 사용하고 있어요.',
      description2: 'Spring활용, 암호화 처리, Rest API, Soap 통신등에 활용해요.',
      imgSrc: 'https://www.svgrepo.com/show/349418/java.svg',
    },
    html: {
      name: 'Html/css',
      description1: '웹, 모바일 화면 개발 등 실무에서 자주 사용하고 있어요.',
      description2: 'Html5에 대한 이해와 미디어쿼리, flex, grid등 css를 이해하고 있어요. ',
      imgSrc: 'https://www.svgrepo.com/show/22009/html5.svg',
    },
    php: {
      name: 'PHP',
      description1: '쇼핑몰, 웹서비스를 만들어본적 있어요.',
      description2: '',
      imgSrc: 'https://www.svgrepo.com/show/314464/php.svg',
    },
    python: {
      name: 'Python',
      description1: '간단한 크롤링 프로그램을 만들어본적 있어요',
      description2: '',
      imgSrc: 'https://www.svgrepo.com/show/19538/py.svg',
    }
  },

  framework: {
    spring: {
      name: 'Spring',
      description1: 'Rest API, SOAP, DB 등 다양하게 실무에서 활용하고 있어요.',
      description2: 'MVC 모델, filter, DB connection, DI 등 개념을 이해하고 있어요.',
      imgSrc: 'https://www.svgrepo.com/show/376350/spring.svg',
    },
    react: {
      name: 'React',
      description1: '개인 프로젝트 경험이 있고, 실무 경험은 적어요',
      description2: 'Hook, Context API, Redux, Next.js 등의 개념을 이해하고 활용해요.',
      imgSrc: 'https://www.svgrepo.com/show/354259/react.svg',
    },
    jquery: {
      name: 'jquery',
      description1: '웹, 모바일 화면개발 등 실무에서 활용해요.',
      description2: 'jquery 문법, event 핸들링 등 무난히 사용해요.',
      imgSrc: 'https://www.svgrepo.com/show/353940/jquery.svg',
    },
    android: {
      name: 'Android',
      description1: '하이브리드 앱으로 실무에서 활용하고 있어요.',
      description2: '웹뷰, API 수준 대응, 보안, 앱링크 등 여러 경험을 갖고 있어요.',
      imgSrc: 'https://www.svgrepo.com/show/184140/android.svg',
    },
    ios: {
      name: 'IOS',
      description1: '하이브리드 앱으로 실무에서 활용하고 있어요.',
      description2: '웹뷰, 보안, 앱링크 등 여러 경험을 갖고 있어요.',
      imgSrc: 'https://www.svgrepo.com/show/379470/ios.svg',
    },
  },

  system: {
    oracle: {
      name: 'Oracle',
      description1: '기간계, 이미지 시스템 등 실무에서 활용해요.',
      description2: '',
      imgSrc: 'https://www.svgrepo.com/show/355152/oracle.svg',
    },
    mysql: {
      name: 'MySQL',
      description1: '파싱 데이터 저장, 영수증 데이터 저장, 웹 서비스 등 활용 경험이 있어요.',
      description2: '',
      imgSrc: 'https://www.svgrepo.com/show/355133/mysql.svg',
    },
    mssql: {
      name: 'MS-SQL',
      description1: '대고객 채널 시스템등 실무에서 활용하고 있어요.',
      description2: '',
      imgSrc: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg',
    },
    aws: {
      name: 'AWS',
      description1: '신규 서버 도입, DataBase 이전 등 경험이 있어요.',
      description2: 'AWS CCP 자격증이 있으며 EC2, RDBMS, 네트워크에 대한 이해가 있어요.',
      imgSrc: 'https://www.svgrepo.com/show/376356/aws.svg',
    },
    azure: {
      name: 'Azure',
      description1: '서버 유지보수, DataBase 이전 등 경험이 있어요.',
      description2: '',
      imgSrc: 'https://www.svgrepo.com/show/373455/azure.svg',
    },
  },

  tool: {
    git: {
      name: 'Git',
      description1: '웹, 앱, 개인프로젝트 등에서 사용한 경험이 있어요.',
      description2: 'branch, merge, pull request등 git 전략에 대해 이해하고 있어요.',
      imgSrc: 'https://www.svgrepo.com/show/373623/git.svg',
    },
    svn: {
      name: 'SVN',
      description1: '기간계, 대고객 채널 등 현재 실무에서 활용하고 있어요.',
      description2: '각종 plugin 활용, svn 보안 체계에 대해 이해하고 있어요.',
      imgSrc: 'https://www.svgrepo.com/show/354409/subversion.svg',
    },
    jenkins: {
      name: 'Jenkins',
      description1: 'svn 연동, CI/CD 구축 등 실무에서 활용하고 있어요.',
      description2: 'Ant를 활용한 CI/CD 구축, gitlab 연동을 통한 CI/CD 구축 경험이 있어요.',
      imgSrc: 'https://www.svgrepo.com/show/353929/jenkins.svg',
    },
    confluence: {
      name: 'Confluence',
      description1: '서버 환경 세팅, 개발 환경 세팅 등 각종 문서들을 생성 및 관리하고 있어요.',
      description2: '',
      imgSrc: 'https://www.svgrepo.com/show/373525/confluence.svg',
    },
  },
}

const contact = {
  email: 'kdwon7592@naver.com',
}

export { about, menu, contact, mySkill }
