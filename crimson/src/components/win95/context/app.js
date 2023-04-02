import {createContext, useContext, useReducer} from "react";
import Minesweeper from "../minesweeper/game";
import Window from "../window";
const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
    const defaultimg = 'minesweeper'
    class app{
        constructor(name,component,menu=[],open = false,icon = defaultimg,header=['minimise','maximise','close']){
            this.name = name
            // this.icon = require('../icon/'+name+'.svg')
            this.menu = menu
            this.component = component
            this.open = open
            this.icon = icon
            this.header = header
        }
    }
    const open=(apps,action)=>{
        apps.forEach(app => {
            if(app.name === action.app){
                switch(action.do){
                    case 'minimise':
                        app.open=false
                        break
                    case 'open':
                        app.open =true
                        break;
                    case 'close':
                        app.open = false
                }
                return
            }
        });
        return[...apps]
    }
    const [apps,displatchApps] = useReducer(open,[
        new app('Minesweeper',<Minesweeper/>, [
            {display: 'Game',content:[
                {display: 'Rules', action: ''},
                {display: 'settings', action: ''}
            ]},
            {display: 'Help',Content:[
                {display: 'Rules', action: ''}
            ]}],false,'minesweeper',['minimise','close']),
        new app('Snake',<Minesweeper/>)
        ])
    const isOpen=app=>{
        return app.open
    }
    return (
        <AppContext.Provider value={[apps,displatchApps]}>
            {apps.filter(isOpen).map((app,index)=>(<Window index={index} key={app.name}app={app}/>))}
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);