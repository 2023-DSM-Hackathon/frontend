import { useRouter } from "next/navigation";
import * as S from "./style";

const Recruitment = ({id, title, date, time, place, nickname}) => {    
    const router = useRouter();
    console.log(id)

    return(
        <S.Container onClick={()=>router.push(`/recruitment?id=${id}`)}>
            <div>
                <S.Title>{title}</S.Title>
                <S.EachContainer>
                    <S.SubTitle>날짜</S.SubTitle>
                    <S.Content>{date}</S.Content>
                </S.EachContainer>
                <S.EachContainer>
                    <S.SubTitle>시간</S.SubTitle>
                    <S.Content>{time}</S.Content>
                </S.EachContainer>
                <S.EachContainer>
                    <S.SubTitle>장소</S.SubTitle>
                    <S.Content>{place}</S.Content>
                </S.EachContainer>
            </div>
        </S.Container>
    )
}

export default Recruitment;