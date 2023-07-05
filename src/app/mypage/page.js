"use client"

import { useState } from "react";
import Header from "../components/common/Header";
import Post from "../components/pages/mypage/post";
import User from "../components/pages/mypage/user";
import * as S from "./style";

const Mypage = () =>{
    const [posts, setPosts] = useState([
        {
            title:"내가 모집한 줍깅",
            post: [{title:"줍깅하실분", date:"2023.07.04", time:"23:00", place:"asdasdasasdasdasasdasdasasdasdas", name:"홍길동"},{title:"asdas", date:"123.213.2", time:"23:00", place:"asdasdas", name:"asdas"},{title:"asdas", date:"123.213.2", time:"23:00", place:"asdasdas", name:"asdas"},{title:"asdas", date:"123.213.2", time:"23:00", place:"asdasdas", name:"asdas"},{title:"asdas", date:"123.213.2", time:"23:00", place:"asdasdas", name:"asdas"}],
            link:"/",
            type:1
        },{
            title:"참가 신청한 줍깅",
            post: [{title:"asdas",content:"asdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdf", name:"asdas"},{title:"asdas",content:"asdasdasdasdfasdfasdf", img:"assets/authBgImg.png", name:"asdas"},{title:"asdas",content:"asdasdasdasdfasdfasdf", img:"assets/AppLogo.png", name:"asdas"},{title:"asdas",content:"asdasdasdasdfasdfasdf", img:"assets/AppLogo.png", name:"asdas"}],
            link:"/",
            type:2
        },{
            title:"내가 작성한 후기글",
            post: [{title:"asdas",content:"asdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdfasdasdasdasdfasdfasdf", img:"assets/AppLogo.png", name:"asdas"},{title:"asdas",content:"asdasdasdasdfasdfasdf", img:"assets/AppLogo.png", name:"asdas"},{title:"asdas",content:"asdasdasdasdfasdfasdf", img:"assets/AppLogo.png",date:"123.213.2", time:"23:00", place:"asdasdas", name:"asdas"}],
            link:"/",
            type:2
        }
    ])

    return(
        <S.FlexBox>
            <Header/>
                <S.FlexBox2>
                <S.Container>
                    <User/>
                    {
                        posts.map(d=>{
                            return(
                                <Post type={d.type} title={d.title} posts={d.post} link={d.link}/>
                            )
                        })
                    }
                </S.Container>  
            </S.FlexBox2>
        </S.FlexBox>
    )
}

export default Mypage;