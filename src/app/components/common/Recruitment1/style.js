import { Body, SubTitle } from "@/app/text";
import styled from "@emotion/styled";

export const Container = styled.div`
    box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  width : 277px;
  gap: 10px;
  
  border-radius: 10px;
  padding: 24px;
  box-shadow : 0 6px 14px -8px rgba(0, 0, 0, 1);
`;
export const H3 = styled(SubTitle)`
`
export const P2 = styled(Body)`
    font-weight: bold;
`
export const P1 = styled(Body)`
     width: 14rem;
   text-overflow: ellipsis;
   overflow: hidden;
   word-break: break-word;
    height :30px;
   display: -webkit-box;
   -webkit-line-clamp: 2; // 원하는 라인수
   -webkit-box-orient: vertical
`
export const Div1 = styled.div`
    gap: ;
`
export const Div2 = styled.div`
    text-align: right;
    font-size : 12px;
    padding: 4px;
    color: gray;
`
