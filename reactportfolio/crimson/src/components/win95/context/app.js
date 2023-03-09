import {createContext, useContext, useEffect, useReducer, useState} from "react";
import Minesweeper from "../minesweeper/game";
const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
    class app{
        constructor(name,component,menu=[]){
            this.name = name
            // this.icon = require('../icon/'+name+'.svg')
            this.menu = [
                {display: 'Game',content:[
                    {display: 'Rules', action: ''},
                    {display: 'settings', action: ''}
                ]},
                {display: 'Help',Content:[
                    {display: 'Rules', action: ''}
                ]}]
            this.component = component
        }
    }
    const apps = {
        minesweeper: new app('Minesweeper',<Minesweeper/>),
        snake: new app('Snake',<Minesweeper/>)
    }
    return (
        <AppContext.Provider value={apps}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);