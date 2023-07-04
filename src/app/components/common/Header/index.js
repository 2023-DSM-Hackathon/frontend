import { usePathname, useRouter } from 'next/navigation';
import * as S from "./style";

const Header = () => {
    const router = useRouter();
    return(
        <S.Container>
            <S.Logo src="assets/AppLogo.png" onClick={() => router.push('/')}/>
            <S.RightBar>
                <S.WriteBtn onClick={() => router.push('/')}>모집글 작성</S.WriteBtn>
                <S.User>
                    <S.UserImg src="assets/user.png"/>
                </S.User>
            </S.RightBar>
        </S.Container>
    )
}
export default Header;
