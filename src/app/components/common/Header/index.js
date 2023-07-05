import { useRouter } from 'next/navigation';
import * as S from "./style";

const Header = () => {
    const router = useRouter();
    return(
        <S.Container>
            <S.Logo src="assets/AppLogo.png" onClick={() => router.push('/')}/>
            <S.RightBar>
                <S.ButtonContainer>

                <S.WriteBtn onClick={() => router.push('/recruitmentWrite')}>모집글 작성</S.WriteBtn>
                <S.WriteBtn onClick={() => router.push('/reviewWrite')}>후기글 작성</S.WriteBtn>
                </S.ButtonContainer>
                <S.User onClick={()=> router.push('/mypage')}>
                    <S.UserImg src="assets/user.png"/>
                </S.User>
            </S.RightBar>
        </S.Container>
    )
}
export default Header;
