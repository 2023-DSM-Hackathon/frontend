import * as S from "./style";

const Recruitment = ({title, date, time, place, name}) => {    
    return(
        <S.Container>
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
            <S.NameContainer>
                <p>{name}</p>
            </S.NameContainer>
        </S.Container>
    )
}

export default Recruitment;