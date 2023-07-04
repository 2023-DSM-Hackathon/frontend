import * as S from "./style";

const AuthLayout = ({children, where, title}) => {
    return (
        <S.Container>
            {where ==="right"&& <S.AuthBg src="assets/authBgImg.png"/>}
            <S.Auth>
                <S.InputContainer>
                    <S.TitleContainer>
                        <S.SubT>줍깅</S.SubT>
                        <S.TitleT>{title}</S.TitleT>
                    </S.TitleContainer>
                    {children}
                </S.InputContainer>
            </S.Auth>
            {where ==="left"&& <S.AuthBg src="assets/authBgImg.png"/>}
        </S.Container>
    )
}

export default AuthLayout;
