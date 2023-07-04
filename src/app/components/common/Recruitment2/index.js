import * as S from "./style";

const Recruitment2 = ({Title, date , time , location})  => {
  return <S.Container>
    <S.H3>{Title} </S.H3>
    <S.Div1>
        <S.P>날짜 - {date} </S.P>
        <S.P>시간 - {time} </S.P>
        <S.P1>장소 - {location} </S.P1>
        <S.Div2>홍길동</S.Div2>
    </S.Div1>
  </S.Container>
};

export default Recruitment2;
