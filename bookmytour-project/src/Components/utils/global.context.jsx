import { createContext, useContext, useReducer } from "react";

export const initialState = { theme: "", data: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case "":
            return;
        default:
            throw new Error("Acción inexistente");
    }
}

const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ContextGlobal.Provider value={{ state, dispatch }}>
            {children}
        </ContextGlobal.Provider>
    );
};

export const useContextGlobalStates = () => useContext(ContextGlobal);