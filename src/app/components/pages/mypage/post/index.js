import Recruitment from "@/app/components/common/Recruitment";
import * as S from "./style";
import { useRouter } from "next/navigation";
import Review from "@/app/components/common/Review";

const Post = ({title, posts, link, type}) =>{
    const router = useRouter();

    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>{title}</S.Title>
                <S.Link onClick={() => router.push(link)}>모두보기</S.Link>
            </S.TitleContainer>
            <S.PostContainer>
                {posts.map(d=>
                    type === 1 ?
                        <Recruitment title={d.title} date={d.date} time={d.meeting_time} place={d.place}/>
                        :
                        <Review title={d.title} content={d.content} image_url={d.image_url}/>
                        )}
            </S.PostContainer>
        </S.Container>
    )
}

export default Post;