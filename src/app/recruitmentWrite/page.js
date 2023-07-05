"use client"

import { useState } from "react";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import * as S from "./style";
import axios from "axios";
import { useRouter } from "next/navigation";

const BASEURL = process.env.NEXT_PUBLIC_SERVER;


const RecruitmentWrite = () =>{
    const router = useRouter();


    const [userData, setUserData] = useState({
		title: "",
		date: "",
        time:"",
        place:"",
        person:0,
        content:""
	});

    const inputType = [
        { name: "title", title: "제목", placeholder: "제목을 입력해주세요", type:"text"},
		{ name: "date", title: "날짜", placeholder: "날짜를 입력해주세요" , type:"date"},
		{ name: "time", title: "시간", placeholder: "시간을 입력해주세요" , type:"time"},
		{ name: "place", title: "장소", placeholder: "장소를 입력해주세요 (자세히)" , type:"text"},
		{ name: "person", title: "모집 인원수", placeholder: "모집 인원수를 입력해주세요" , type:"number"},
		{ name: "content", title: "내용", placeholder: "내용을 입력해주세요" , type:"text"},
	];

    const onChange = (e) => {
		const { name, value } = e.target;
		setUserData({
			...userData,
			[name]: value
		})
    }

    const write = () =>{
        const token = localStorage.getItem('token');
        
        axios
        .request({
            url: `${BASEURL}/feeds`,
            method: 'post',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data:{
                "title": userData.time,
                "place": userData.place,
                "date": userData.date,
                "head_count": userData.person,
                "meeting_time": userData.time,
                "content": userData.content
            }
        })
        .then((res) => {
            router.push('/')
        })
        .catch(() => {
            alert('작성 실패');
        });
    }

    return(
        <S.FlexBox>
            <Header/>
                <S.FlexBox2>
                <S.Container>
                    <S.InputContainer>
                        <Input onChange={onChange} title={inputType[0].title} name={inputType[0].name} placeholder={inputType[0].placeholder} type={inputType[0].type}/>
                        <S.SmallInput>
                            <Input onChange={onChange} title={inputType[1].title} name={inputType[1].name} placeholder={inputType[1].placeholder} type={inputType[1].type}/>
                            <Input onChange={onChange} title={inputType[2].title} name={inputType[2].name} placeholder={inputType[2].placeholder} type={inputType[2].type}/>
                        </S.SmallInput>
                        <S.SmallInput>
                            <Input onChange={onChange} title={inputType[3].title} name={inputType[3].name} placeholder={inputType[3].placeholder} type={inputType[3].type}/>
                            <Input onChange={onChange} title={inputType[4].title} name={inputType[4].name} placeholder={inputType[4].placeholder} type={inputType[4].type}/>
                        </S.SmallInput>
                        <S.TextAreaContainer>
                            <S.InputTitle>{inputType[5].title}</S.InputTitle>
                            <S.TextArea onChange={onChange} name={inputType[5].name} placeholder={inputType[5].placeholder}/>
                        </S.TextAreaContainer>
                    </S.InputContainer>
                    <S.Submit onClick={()=>write()}>등록하기</S.Submit>
                </S.Container>  
            </S.FlexBox2>
        </S.FlexBox>
    )
}

export default RecruitmentWrite;