import { createContext, useContext, useEffect, useReducer } from "react";

export const initialState = { theme: "", data: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_TOURS":
            return {...state, data: action.payload };
        default:
            throw new Error("Acción inexistente");
    }
}

const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://bookmytourjson.s3.us-east-1.amazonaws.com/tours.json");
            const data = await response.json();
            dispatch({ type: "GET_TOURS", payload: data });
        }
        fetchData();
    }, []);

    return (
        <ContextGlobal.Provider value={{ state, dispatch }}>
            {children}
        </ContextGlobal.Provider>
    );
};

export const useContextGlobalStates = () => useContext(ContextGlobal);