import * as S from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const BASEURL = process.env.NEXT_PUBLIC_SERVER;


const Comment = ({comments}) => {
    const router = useSearchParams();
    const reviewID = router.get('id');

    const [comment, setComment] = useState("");

    const onChange = (e) => {
        setComment(e.target.value)
    }

    const SubmitComment = () => {
        const token  = localStorage.getItem('token');
        console.log("click");
        
        axios
        .request({
            url: `${BASEURL}/comments/${reviewID}`,
            method: 'post',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data:{
                "content": comment
            }
        })
        .then((res) => {
            console.log("성공")
        })
        .catch(() => {
            alert('댓글 작성 실패');
        });
    }

    return (
        <S.Container>
            <S.CountText>댓글 {comments.length}개</S.CountText>
            <S.InputContainer>
                <S.Input onChange={onChange} value={comment} placeholder="댓글을 입력해주세요"/>
                <S.Submit onClick={()=>SubmitComment()}>댓글 등록</S.Submit>
            </S.InputContainer>
            <S.CommentContainer>
                {
                    comments.map((d)=>
                    <S.EachComment key={d.id}>
                            <p>{d.content}</p>
                            <p>{d.nickname}</p>
                        </S.EachComment>
                    )
                }
            </S.CommentContainer>
        </S.Container>
    )
}

export default Comment;