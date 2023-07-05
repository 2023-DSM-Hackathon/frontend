"use client"

import { useEffect, useState } from "react";
import AuthLayout from "../components/common/AuthLayout";
import Input from "../components/common/Input";
import * as S from "./style";
import { useRouter } from "next/navigation";
import Button from "../components/common/Button";

const Login = () => {
    const router= useRouter();
    const [userData, setUserData] = useState({
		id: "",
		password: "",
	});

    const inputType = [
        { name: "id", title: "아이디", placeholder: "아이디를 입력해 주세요", type:"text"},
		{ name: "password", title: "비밀번호", placeholder: "영·숫자·기호 포함 8자 이상 입력해 주세요" , type:"password"},
	];

    useEffect(()=>{
        console.log(userData)
    },[userData])

    const onChange = (e) => {
		const { name, value } = e.target;
		setUserData({
			...userData,
			[name]: value
		})
    }
    return(
        <AuthLayout where="left" title="LOGIN">
            <S.InputContainer>
            {
                inputType.map(d=>{
                    return <Input title={d.title} width="100%" placeholder={d.placeholder} name={d.name} onChange={onChange} type={d.type}/>
                })
            }
            </S.InputContainer>
            <S.ButtonContainer>
                <S.SubLink>
                    <p>회원이 아니신가요?</p>
                    <S.LinkLogin onClick={()=> router.push('/signup')}>회원가입</S.LinkLogin>
                </S.SubLink>
                <Button value="로그인"/>
            </S.ButtonContainer>
        </AuthLayout>
    )
}

export default Login;

