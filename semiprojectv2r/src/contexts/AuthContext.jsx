import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

// children : 컴퍼넌트의 내부컨텐츠를 나타내는 특별한 속성(prop)
// 특정 컴퍼넌트를 사용할때, 해당 컴퍼넌트 내부의 jsx를 childeren으로 전달 가능
// 즉, 특정변수를 다른 컴퍼넌트로 전달하고자 할 때 사용
export const AuthProvider = ({children}) => {
    const [login,setLogin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        console.log("", token)
        if(token) setLogin(true);
        console.log(">> AuthContext",login)
    }, []);
    return (
        <AuthContext.Provider value={login}>
            {children}
        </AuthContext.Provider>
    );
}