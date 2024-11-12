import { createContext, useContext, useEffect, useReducer } from "react";

export const initialState = { theme: "", data: [], categories: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_TOURS":
            return {...state, data: action.payload };
        case "GET_CATEGORIES":
            return {...state, categories: action.payload };
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
        async function fetchCategories() {
            const response = await fetch("https://bookmytourjson.s3.us-east-1.amazonaws.com/categories.json");
            const data = await response.json();
            dispatch({ type: "GET_CATEGORIES", payload: data });
        }
        fetchCategories();
    }, []);

    return (
        <ContextGlobal.Provider value={{ state, dispatch }}>
            {children}
        </ContextGlobal.Provider>
    );
};

export const useContextGlobalStates = () => useContext(ContextGlobal);