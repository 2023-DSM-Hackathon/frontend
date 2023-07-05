"use client"

import { useState } from "react";
import AuthLayout from "../components/common/AuthLayout";
import Input from "../components/common/Input";
import * as S from "./style";
import { useRouter } from "next/navigation";
import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_SERVER;

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

    const onChange = (e) => {
		const { name, value } = e.target;
		setUserData({
			...userData,
			[name]: value
		})
    };

    const Login = () => {
        axios
        .request({
            url: `${BASEURL}/users/token`,
            method: 'post',
            data: {
                "account_id": userData.id,
                "password": userData.password
            },
        })
        .then((res) => {
            const token = res.data.access_token;
            localStorage.setItem("token", token);
            router.push('/');
        })
        .catch(() => {
            alert('로그인 실패');
        });
    };

    return(
        <AuthLayout where="left" title="LOGIN">
            <S.InputContainer>
            {
                inputType.map((d,i)=>{
                    return <Input key={i} title={d.title} width="100%" placeholder={d.placeholder} name={d.name} onChange={onChange} type={d.type}/>
                })
            }
            </S.InputContainer>
            <S.ButtonContainer>
                <S.SubLink>
                    <p>회원이 아니신가요?</p>
                    <S.LinkLogin onClick={()=> router.push('/signup')}>회원가입</S.LinkLogin>
                </S.SubLink>
                <S.Loginbtn onClick={()=>Login()}>로그인</S.Loginbtn>
            </S.ButtonContainer>
        </AuthLayout>
    )
}

export default Login;

