import {createContext, useContext} from "react";
import {Home} from "../pages/home";
import About from "../pages/about";
import CaseStudies from "../pages/casestudies";
import Contact from "../pages/contact";
import AmazingGrace from "../pages/caseStudies/AmazingGrace";
import AskItalian from "../pages/caseStudies/AskItalian";
import AspinalofLondon from "../pages/caseStudies/AspinalofLondon";
import BobbinEm from "../pages/caseStudies/Bobbin&Em";
import Cudoni from "../pages/caseStudies/Cudoni";
import Icons from "../pages/caseStudies/Icons";
import MinecraftDisplate from "../pages/caseStudies/MinecraftDisplate";
import TheDogRoom from "../pages/caseStudies/TheDogRoom";
import VectorIllustration from "../pages/caseStudies/VectorIllustration";
import Minesweeperpage from "../pages/caseStudies/Minesweeper";
import { Analytics } from "../pages/analytics";
import PrivacyPolicy from "../pages/privicypolicy";
import { ThemeShow } from "../pages/theme";

const SocialContext = createContext(undefined);

export const SocialProvider = ({ children }) => {
    class Social {
        constructor(name,handle,link,icon){
            this.name=name
            this.handle=handle
            this.link=link
            if(icon){this.icon=icon}else{this.icon=name}
        }
    }
    const Socials = [
        new Social('Instagram','crimson.svg','https://www.instagram.com/crimson.svg/','instagram'),
        new Social('Facebook','Crimson in capitals art','https://www.facebook.com/Crimsonincapitals','facebook'),
        new Social('LinkedIn','Harrison (Adam) Cole','https://www.linkedin.com/in/harrison-cole-crimson-in-capitals/','linkedin'),
        new Social('Displate','Displate','https://displate.com/crimsonincapitals1?art=5f0d09c08e6b6','displate')
    ]
    return (
        <SocialContext.Provider value={Socials}>
            {children}
        </SocialContext.Provider>
    );
};

export const useSocialContext = () => useContext(SocialContext);


const InternalContext = createContext(undefined);

export const InternalProvider = ({ children }) => {
    class Page {
        constructor(name='',to='/',component=<Home/>, rank = 2){
          this.name = name
          this.to = to
          this.component = component
          this.rank = rank
        }
      }
      const pages = [
        new Page('Home','/',<Home/>,1),
        new Page('Contact','/contact',<Contact/>,1),
        new Page('About','/about',<About/>,1),
        new Page('Case Studies','/casestudies',<CaseStudies/>,1),
        new Page('Case Study: Amazing Grace','/casestudies/amazinggrace',<AmazingGrace/>,2),
        new Page('Case Study: Ask Italian','/casestudies/askitalian',<AskItalian/>,2),
        new Page('Case Study: Aspinal of London','/casestudies/aspinaloflondon',<AspinalofLondon/>,2),
        new Page('Case Study: Bobbin & Em','/casestudies/bobbin&em',<BobbinEm/>,2),
        new Page('Case Study: Cudoni','/casestudies/cudoni',<Cudoni/>,2),
        new Page('Minesweeper','/casestudies/minesweeper',<Minesweeperpage/>,2),
        new Page('Case Study: Icon Design','/casestudies/icondesign',<Icons/>,2),
        new Page('Case Study: Minecraft Displates','/casestudies/minecraaftdisplates',<MinecraftDisplate/>,2),
        new Page('Case Study: The Dog Room','/casestudies/thedogroom',<TheDogRoom/>,2),
        new Page('Case Study: Vector Illustration','/casestudies/vectorillustration',<VectorIllustration/>,2),
        new Page('Analytics Preview','/analytics',<Analytics/>,2),
        new Page('Privacy Policy','/privacypolicy',<PrivacyPolicy/>,2),
        new Page('Theme','/theme',<ThemeShow/>,3)


    ]
    return (
        <InternalContext.Provider value={pages}>
            {children}
        </InternalContext.Provider>
    );
};

export const useInternalContext = () => useContext(InternalContext);