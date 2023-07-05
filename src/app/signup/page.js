"use client"

import { useState } from "react";
import AuthLayout from "../components/common/AuthLayout";
import Input from "../components/common/Input";
import * as S from "./style";
import { useRouter } from "next/navigation";
import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_SERVER;

const SignUp = () => {
    const router= useRouter();
    const [userData, setUserData] = useState({
		birth: "",
		nick: "",
		id: "",
		password: "",
        gender:"man"
	});

    const inputType = [
        { name: "id", title: "아이디", value: "", placeholder: "아이디를 입력해 주세요", type:"text"},
		{ name: "password", title: "비밀번호", value: "", placeholder: "영·숫자·기호 포함 8자 이상 입력해 주세요" , type:"password"},
		{ name: "nick", title: "별명", value: "", placeholder: "사용하실 별명을 입력해주세요", type:"text" },
		{ name: "birth", title: "생년월일", value: "", placeholder: "실제 본인 생년월일을 입력해주세요", type:"date" },
	];

    const onChange = (e) => {
		const { name, value } = e.target;
		setUserData({
			...userData,
			[name]: value
		})
    };

    const SingUp = () => {
        axios
        .request({
            url: `${BASEURL}/users`,
            method: 'post',
            data: {
                "nickname": userData.nick,
                "birth_date": userData.birth,
                "sex": userData.gender,
                "account_id": userData.id,
                "password": userData.password,
            },
        })
        .then((res) => {
            router.push('/login');
        })
        .catch(() => {
            alert('회원가입 실패');

        });
    };


    return(
        <AuthLayout where="right" title="SIGN UP">
            <S.InputContainer>
            {
                inputType.map((d,i)=>{
                    return <Input key={i} title={d.title} width="100%" placeholder={d.placeholder} name={d.name} onChange={onChange} type={d.type}/>
                })
            }
            <S.SelectContainer>
                <S.SelectTitle>성별</S.SelectTitle>
                <S.SelectBox name="gender" onChange={onChange}>
                    <option value="MALE">남성</option>
                    <option value="FEMALE">여성</option>
                </S.SelectBox>
            </S.SelectContainer>
            </S.InputContainer>
            <S.ButtonContainer>
                <S.SubLink>
                    <p>회원이신가요?</p>
                    <S.LinkLogin onClick={()=> router.push('/login')}>로그인</S.LinkLogin>
                </S.SubLink>
                <S.SignUpBtn onClick={()=>SingUp()}>회원가입</S.SignUpBtn>
            </S.ButtonContainer>
        </AuthLayout>
    )
}

export default SignUp;

