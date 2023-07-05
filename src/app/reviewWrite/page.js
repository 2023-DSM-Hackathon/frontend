"use client"

import { useState } from "react";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import * as S from "./style";

const ReviewWrite = () =>{

    const [userData, setUserData] = useState({
		title: "",
        content:"",
        img:""
	});

    const inputType = [
        { name: "title", title: "제목", placeholder: "제목을 입력해주세요", type:"text"},
		{ name: "content", title: "내용", placeholder: "내용을 입력해주세요" , type:"text"},
		{ name: "img", title: "이미지", type:"file"},
	];

    const onChange = (e) => {
		const { name, value } = e.target;
		setUserData({
			...userData,
			[name]: value
		})
    }


    return(
        <S.FlexBox>
            <Header/>
                <S.FlexBox2>
                <S.Container>
                    <S.InputContainer>
                        <Input onChange={onChange} title={inputType[0].title} name={inputType[0].name} placeholder={inputType[0].placeholder} type={inputType[0].type}/>
                        <S.TextAreaContainer>
                            <S.InputTitle>{inputType[1].title}</S.InputTitle>
                            <S.TextArea onChange={onChange} name={inputType[1].name} placeholder={inputType[1].placeholder}/>
                        </S.TextAreaContainer>
                        <S.TextAreaContainer>
                            <S.InputTitle></S.InputTitle>
                            <Input onChange={onChange} name={inputType[2].name} title={inputType[2].title} type={inputType[2].type} accept=".image/*"/>
                        </S.TextAreaContainer>
                    </S.InputContainer>
                    <S.Submit>등록하기</S.Submit>
                </S.Container>  
            </S.FlexBox2>
        </S.FlexBox>
    )
}

export default ReviewWrite;