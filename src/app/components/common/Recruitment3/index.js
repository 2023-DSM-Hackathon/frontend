import * as S from "./style";

const Recruitment3 = ({Title,text,name})  => {
  return <S.Container>
    <S.H3>{Title}</S.H3>
    
    <S.Div1><S.P>{text}</S.P>
    </S.Div1>  
    <S.Div2>
      <S.P>{name}</S.P>
    </S.Div2>
  </S.Container>
};

export default Recruitment3;
