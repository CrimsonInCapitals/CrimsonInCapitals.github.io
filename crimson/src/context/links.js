import {createContext, useContext} from "react";
import Home from "../pages/home";
import About from "../pages/about";
// import CaseStudies from "../pages/casestudies";
import Contact from "../pages/contact";

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
        new Social('Instagram','xcrimson.svg','https://www.instagram.com/crimson.svg/','instagram'),
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
        constructor(name='',url='/',component=<Home/>, rank = 2){
          this.name = name
          this.url = url
          this.component = component
          this.rank = rank
        }
      }
      const pages = [
        new Page('Home','/',<Home/>,1),
        new Page('Contact','/contact',<Contact/>,1),
        new Page('About','/about',<About/>,1)
    ]
    return (
        <InternalContext.Provider value={pages}>
            {children}
        </InternalContext.Provider>
    );
};

export const useInternalContext = () => useContext(InternalContext);