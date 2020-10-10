import Home from '@/pages/Home'
import Blogs from '@/pages/Blogs'
import Projects from '@/pages/Projects'
import Support from "@/pages/Support"
import Contact from "@/pages/Contact"
import Publication from "@/pages/Publication"
import Skills from "@/pages/about/Skills"
import Education from "@/pages/about/Education"
import Work from "@/pages/about/Work"
import Interest from "@/pages/about/Interest"
import Award from "@/pages/about/Award"
import Certificate from "@/pages/about/Certificate"
import Quotes from "@/pages/about/quotes"
import Services from "@/pages/Services"
import Gallery from "@/pages/Gallery"

const routes  = [
    {
       path: '/',
       name: 'index',
       component: Home,
       meta: {
           title: "Abdul Sami"
       }
    }, 
    {
        path: '/blogs',
        name: 'blogs',
        component: Blogs,
        meta: {
            title: "Blogs"
        }
    },
    {
        path: '/services',
        name: 'services',
        component: Services,
        meta: {
            title: "Services"
        }
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects,
        meta: {
            title: "Projects",
        }
    }, 
    {
        path: '/donate',
        name: 'donate',
        component: Support,
        meta: {
            title: "Support",
        }
    }, 
    {
        path: '/publication',
        name: 'publication',
        component: Publication,
        meta: {
            title: "Publication"
        }
    }, 
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
        meta: {
            title: "Contact",
        }
    }, 
    {
        path: '/skills',
        name: 'skill',
        component: Skills,
        meta: {
            title: "Skills",
        }
    },
    {
        path: '/education',
        name: 'education',
        component: Education,
        meta: {
            title: "Education"
        }
    },
    {
        path: '/experince',
        name: 'experince',
        component: Work,
        meta: {
            title: "Work Experience"
        }
    },
    {
        path: '/interests',
        name: 'interests',
        component: Interest,
        meta: {
            title: "Interest"
        }
    },
    {
        path: '/awards',
        name: 'award',
        component: Award,
        meta: {
            title: "Award"
        }
    },
    {
        path: '/certificates',
        name: 'certificate',
        component: Certificate,
        meta: {
            title: "Certificate"
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: Home,
        meta: {
            title: "Abdul Sami"
        }
    },
    {
        path: '/quotes',
        name: 'quotes',
        component: Quotes,
        meta: {
            title: "Quotes"
        }
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery,
        meta: {
            title: "Gallery"
        }
    }
]

export default routes;
