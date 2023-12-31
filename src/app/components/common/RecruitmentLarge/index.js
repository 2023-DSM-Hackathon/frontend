import { useRouter } from "next/navigation";
import * as S from "./style";

const RecruitmentLarge = ({id,title, place, date, meeting_time, head_count, current_head_count, status}) => {
    const router = useRouter();

    return (
        <S.Container onClick={()=>router.push(`/recruitment?id=${id}`)}>
            <div>
                <S.Title>{title}</S.Title>
                <div>
                    <S.EachContainer>
                        <S.SubTitle>날짜</S.SubTitle>
                        <p>-</p>
                        <S.Content>{date}</S.Content>
                    </S.EachContainer>
                    <S.EachContainer>
                        <S.SubTitle>시간</S.SubTitle>
                        <p>-</p>
                        <S.Content>{meeting_time}</S.Content>
                    </S.EachContainer>
                    <S.EachContainer>
                        <S.SubTitle>장소</S.SubTitle>
                        <p>-</p>
                        <S.Content>{place}</S.Content>
                    </S.EachContainer>
                    <S.EachContainer>
                        <S.SubTitle>인원</S.SubTitle>
                        <p>-</p>
                        <S.Content>{current_head_count} / {head_count}</S.Content>
                    </S.EachContainer>
                </div>
            </div>
        </S.Container>
    )
}

export default RecruitmentLarge;