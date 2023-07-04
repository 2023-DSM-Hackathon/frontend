import Button from "@/app/components/common/Button";
import * as S from "./style";
import { useState } from "react";

const Comment = () => {
    const [comment, setComment] = useState([
        {name:"홍길동", content:"우와 열심히 하셨네여! 짝짝"},
        {name:"가나다", content:"이야야야ㅑ야야ㅑ양야ㅑ야야야야ㅑ야야 기깔납니다이야야야ㅑ야야ㅑ양야ㅑ야야야야ㅑ야야 기깔납니다이야야야ㅑ야야ㅑ양야ㅑ야야야야ㅑ야야 기깔납니다이야야야ㅑ야야ㅑ양야ㅑ야야야야ㅑ야야 기깔납니다이야야야ㅑ야야ㅑ양야ㅑ야야야야ㅑ야야 기깔납니다앞으로도 더 열심히 하세요"}
    ]);

    return (
        <S.Container>
            <S.CountText>댓글 {comment.length}개</S.CountText>
            <S.InputContainer>
                <S.Input placeholder="댓글을 입력해주세요"/>
                <S.Submit>댓글 등록</S.Submit>
            </S.InputContainer>
            <S.CommentContainer>
                {
                    comment.map(d=>
                        <S.EachComment>
                            <p>{d.name}</p>
                            <p>{d.content}</p>
                        </S.EachComment>
                    )
                }
            </S.CommentContainer>
        </S.Container>
    )
}

export default Comment;