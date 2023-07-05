"use client"
import { useState } from "react";
import Header from "../components/common/Header";
import { TitleLarge } from "../text";
import * as S from "./style";

const Info = () => {
    const [page, setPage] = useState(1);
    return(
        <S.FlexBox>
            <Header/>
                <S.FlexBox2>
                <S.Container>
                    <S.HeadContainer>
                        <S.Title>{page === 1 ? "플로깅": "분리수거"}</S.Title>
                        {
                            page === 1 ?
                            <p onClick={() => setPage(2)}>{">"}</p>
                            :
                            <p onClick={() => setPage(1)}>{"<"}</p>
                        }
                    </S.HeadContainer>
                    {
                        page === 1 ?
                        <S.Content>
                            <S.EachContent>
                                <h2>플로깅?</h2>
                                <div>
                                    <p>‘이삭을 줍는다’는 뜻의 스웨덴어 Plocka upp과 영단어 Jogging의 합성어로 달리면서 쓰레기를 줍는 친환경 조깅</p>
                                </div>
                            </S.EachContent>
                            <S.EachContent>
                                <h2>장점</h2>
                                <div>
                                    <p>쓰레기를 주울 때 다리를 구부리면서 스쿼트 동작을 자연스럽게 할 수 있어 칼로리를 더 소모할 수 있는데 30분 동안 조깅만 하는 사람은 평균 235칼로리를 태우지만, 같은 시간 플로깅을 하는 사람은 288칼로리를 태우며 일반 조깅보다 더 높은 칼로리 소모와 근력 강화 효과가 있습니다.</p>
                                    <p>플로깅을 할 때 쓰레기 1개를 줍는 것은 스쿼트 1개, 런지 1개와 같은 효과를 기대할 수 있는 유산소운동과 하체 웨이트 트레이닝까지 한 동작이 자연스럽게 이어지는 것이랍니다</p>
                                    <p>특히 산이나 오르막 경사 길을 오르면서 지속적인 런지 동작을 반복하면 한자리에서 실시하는 런지 운동에 비해 코어근육과 하체 단련효과가 월등히 높아집니다</p>
                                </div>
                            </S.EachContent>
                            <S.EachContent>
                                <h2>준비물</h2>
                                <div>
                                    <p>- 쓰레기 담을 봉투: 환경 보호를 위해 에코백이나 못 쓰는 가방을 사용하는 것을 추천한다. 종량제 봉투를 사용할 수도 있다.</p>
                                    <p>- 다회용 장갑, 집게: 위생을 지키고 부상을 방지하기 위해 장갑과 집게가 필요하다.</p>
                                    <p>- 편한 옷차림과 편한 신발: 벌레 물림이나 풀독을 방지하기 위해 하체가 노출되지 않는 긴 바지 차림이 좋다.</p>
                                </div>
                            </S.EachContent>
                            <S.EachContent>
                                <h2>방법</h2>
                                <div>
                                    <p>1. 시작 전 가볍게 스트레칭을 한다</p>
                                    <p>2. 봉투와 집게를 들고 조깅한다</p>
                                    <p>3. 쓰레기를 발견하면 봉투에 주워 담는다</p>
                                    <p>4. 플로깅 후 다 모은 쓰레기는 분리수거 해준다</p>
                                </div>
                            </S.EachContent>
                            <S.EachContent>
                                <h2>유의사항</h2>
                                <div>
                                    <p>요즘같이 햇볕이 강한 날씨에는 피부 화상을 주의하여 선크림은 꼼꼼히 발라주시고 모은 쓰레기는 아무 곳이나 버리지 말고 꼭 분리수거를 해주어야 합니다</p>
                                    <p>쓰레기를 주울 때도 주의사항이 있습니다 </p>
                                    <p>바로 허리가 아닌 하체의 힘을 사용하는 것으로 바닥에 있는 쓰레기를 주울 때 허리를 잘못 구부리면 허리에 무리가 올 수 있으므로 허리는 똑바로 펴고 고관절과 무릎을 굽혀 스쿼트나 런지 자세로 줍는 것이 좋습니다.</p>
                                    <p>이때 다리 근육만 사용하면 무릎 앞쪽에 손상을 일으킬 수 있기 때문에 허벅지와 엉덩이 근육을 사용해야 합니다</p>
                                </div>
                            </S.EachContent>
                            <S.EachContent>
                                <h2>TIP.</h2>
                                <div>
                                    <p>1. 시작 전 스트레칭 잊지 말기</p>
                                    <p>2. 쓰레기 주울 땐 허리가 아닌 허벅지와 엉덩이의 힘으로</p>
                                    <p>3. 빠르고 크게 움직이기</p>
                                </div>
                            </S.EachContent>
                        </S.Content>
                    :
                        <S.Content>
                            <S.EachContent>
                                <img src="assets/recycle.png"/>
                            </S.EachContent>
                            <S.EachContent>
                                <h2>플라스틱류</h2>
                                <div>
                                    <p>페트병과 플라스틱은 분리배출 시, 용기에 든 내용물을 깨끗이 비우는 것이 중요하다. 그리고 부착 상표와 뚜껑 등 다른 재질은 모두 제거해야 한다. 단, 여러 재질이 섞이고 분리가 어려운 제품이라면 종량제 봉투에 담아서 버려야 한다.</p>
                                </div>
                            </S.EachContent>
                            <S.EachContent>
                                <h2>비닐류</h2>
                                <div>
                                    <p>일회용 비닐봉지에 음식물 혹은 이물질이 묻었을 경우에는 물로 헹궈 잔여물은 없애고 버려야 한다. 이물질 제거가 어렵다면 종량제 봉투에 배출한다.</p>
                                </div>
                            </S.EachContent>
                            <S.EachContent>
                                <h2>스티로품</h2>
                                <div>
                                    <p>라면 국물이 밴 컵라면 용기나 음식물이 묻어있는 용기도 물로 헹군 후 배출해야 한다. 그리고 제품 포장에 사용된 스티로폼의 경우 내용물을 모두 비우고 테이프나 운송장, 상표 등을 완전히 제거한 뒤 버려야 한다. 하지만 이물질이 많이 묻어있다면 스티로폼을 쪼갠 후 쓰레기 종량제 봉투에 담아서 버린다.</p>
                                </div>
                            </S.EachContent>
                            <S.EachContent>
                                <h2>유리병류</h2>
                                <div>
                                    <p>맥주병, 소주 병은 분리배출 시 이물질을 넣지 말고 빈 병으로 버려야 한다. 그리고 기억해야 할 것은 깨진 유리, 도자기류, 거울, 유리 식기류는 유리병류가 아니라는 것! 때문에 종량제 봉투 혹은 전용 마대에 버리면 된다.</p>
                                </div>
                            </S.EachContent>
                            <S.EachContent>
                                <h2>캔류</h2>
                                <div>
                                    <p>내용물을 비우고 압착해서 부피를 줄여 배출한다.부탄가스나 스프레이 등은 환기가 잘 되는 곳에서 구멍을 뚫어 가스를 빼준 후 배출한다.</p>
                                </div>
                            </S.EachContent>
                            <S.EachContent>
                                <h2>고철류</h2>
                                <div>
                                    <p>고철(공기구, 철사, 못, 철판 등) 비철금속(양은·스텐류, 전선, 알루미늄샷시류) 이물질이 섞이지 않도록 한 후 봉투에 넣거나 끈으로 묶어서 배출</p>
                                </div>
                            </S.EachContent>
                            <S.EachContent>
                                <h2>의류</h2>
                                <div>
                                    <p>물기에 젖지 않도록 마대 등에 담거나 묶어서 배출※ 곰팡이 피거나 물에 젖은 의류는 제외</p>
                                </div>
                            </S.EachContent>
                            <S.EachContent>
                                <h2>영농폐기물류</h2>
                                <div>
                                    <p>흙과 자갈, 잡초를 털어낸 후 운반이 쉽도록 묶어서 지정된 마을공동집하장에 보관</p>
                                </div>
                            </S.EachContent>
                        </S.Content>
                    }
                    
                </S.Container>  
            </S.FlexBox2>
        </S.FlexBox>
    )
}

export default Info;