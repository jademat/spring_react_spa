'use client'
import React, {createContext, useEffect, useState} from "react";

// createContext : 컴포넌트 전체에 데이터를 전달할 수 있는 컨텍스트 API 생성에 사용
// 보통 전역상태, 인증정보, 기타 프로그램 내에서 공유하고 싶은 값을 생성할때 주로 사용
// context : 전체 컴퍼넌트 구조에서 사용할 수 있는 자료구조
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