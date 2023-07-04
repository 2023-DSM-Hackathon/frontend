import * as S from "./style";

const Recruitment1 = ({Title,date,time,location,name})  => {
  return <S.Container>
        <S.H3>
        {Title}
        </S.H3>
        <S.Div1><S.P2>
            날짜
        </S.P2>
       <S.P1>
         {date}
        </S.P1> </S.Div1>
        <S.Div1><S.P2>
            시간
        </S.P2>
       <S.P1>
        {time}
        </S.P1> </S.Div1>
        <S.Div1><S.P2>
            장소
        </S.P2>
       <S.P1>
         {location}
        </S.P1>
         <S.Div2>
            {name}
         </S.Div2>
        </S.Div1>


        
  </S.Container>;
};

export default Recruitment1;
