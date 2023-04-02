import {createContext, useContext} from "react";
const difficultyContext = createContext(undefined);

export const difficultyProvider = ({ children }) => {
        let cmines = 100
    let cwidth = 20
    let chight = 20

    const dificulty = [{name: 'Beginner',width: 8, hight: 8,mines:10},{name: 'Intermediate',width:16,hight:16,mines:40},{name:'Expert',width:30,hight:16,mines:99},{name: 'Custom',width: cwidth,hight: chight,mines: cmines}]

    return (
        <difficultyContext.Provider value={apps}>
            {children}
        </difficultyContext.Provider>
    );
};

export const usedifficultyContext = () => useContext(difficultyContext);