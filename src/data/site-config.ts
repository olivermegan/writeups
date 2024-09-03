export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Cyber Journey',
    subtitle: 'Oliver Megan',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/writeups'
        },
        {
            text: 'Writeups',
            href: '/OS'
        },
        //{
            //text: 'Blog',
            //href: '/blog'
        //},
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        //{
            //text: 'Download theme',
            //href: 'https://github.com/JustGoodUI/dante-astro-theme'
        //}
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Cyber Journey!',
        text: "I'm **Oli**, a Cyber Security and Linux enthusiast, dedicated to the realms of networking, troubleshooting and penetration testing. My procedural etiquette involves utilising intuition alongside mounting my own research to push boundaries in unfastening as much of the cyberspace universe as I can muster. I have a predisposition towards efficient software and excellent hardware. Please join me on my journey to becoming a cyber professional on <a href='https://olivermegan.github.io/writeups/'>GitHub</a>.",
        image: {
            src: '/writeups/hero.jpeg',
            alt: 'global system of nodes linked together by cyberspace',
            caption: 'global compute nodes'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;