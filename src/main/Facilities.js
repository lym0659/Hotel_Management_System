import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const Facilities = () => {
    return (
        <div>
        <AppBar position="static" color="s">
            <Toolbar>
              <Typography variant="h6" noWrap>
                호텔시설 소개
              </Typography>
            </Toolbar>
        </AppBar>
        <Card>
            <Typography variant="h6" noWrap>
            ● 호텔 피트니스<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;200평 규모의 여유로운 공간을 자랑하는 호텔 피트니스 클럽은 최신식의 고급 유산소 및 근력운동 기구를 구비 하여<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;투숙객과 회원의 건강한 생활의 동반자가 되어 드립니다.<br/><br/>
                    
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;운영시간: 월~토 9시~22시 (매주 일요일은 휴관)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;주차: 3시간까지 무료<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;요금: 매달 25만원 또는 매년 180만원<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;회원제 혜택: 무료 개인 지도사 제공, 재활성 근육강화 운동지도, 미국 명품 헬스기구업체 PRECO의 최고급 유산소 기구 및 머신<br/><br/>

                ● 비즈니스 센터<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;투숙객 전용의 무료 이용 가능한 비즈니스 센터는 호텔 본관 1층에 위치하고 있으며, 24시간 이용 가능 합니다.<br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비즈니스 센터는 고객님께서 필요한 업무를 신속하고 편리하게 처리할 수 있도록 완벽한 서비스를 제공하고 있습니다.<br/><br/>

                ● 콘서트홀 / 연회장<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;700명을 수용할 수 있는 그랜드 홀과 300명을 수용할 수 있는 콘서트홀, 이외에도 다양한 작은 연회장을 갖추고 있습니다.<br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;결혼식 외에 다양한 이벤트에 사용할 수 있는 시설을 갖추고 있습니다.<br/><br/>

                ● 객실<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;초고속 유무선 인터넷 서비스 (LAN & WIFI)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;다양한 위성방송채널, 자동냉난방 조절장치, 다양한 구성의 미니바, 개인용 금고<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;노트북 유료 렌탈 서비스, 1회용 커피, 녹차, 무료생수 1일 2병 제공, 세탁 서비스<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;투숙객 무료주차 서비스, 부대시설, 샴푸, 린스, 샤워젤, 비누, 샤워캡, 빗, 면봉,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;헤어드라이어, 목욕용 가운, 구두클리너, 구둣주걱, 슬리퍼<br/><br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;체크인/체크아웃<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check in 오후 3시 이후<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check out 오후 12시(정오) 까지<br/><br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check out시간 초과 시 추가 요금이 발생 합니다.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1) 오후 12시(정오) ~ 오후 3시까지 :객실요금의 30%<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2) 오후 3시부터 오후 6시까지 : 객실 요금의 50%<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3) 오후 6시를 경과할 시 : 해당일 객실 요금의 전액<br/><br/>

                ● 웨딩홀<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;높은 천고, 넓은 공간이 가지고 있는 웅장함이 최첨단 조명과 더해진 그랜드 볼룸은<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정통호텔 웨딩으로 평생 잊지 못할 의미있는 예식으로 만들어 드릴 공간입니다.<br/>
            </Typography> 
        </Card>
                
        </div>
    );
};

export default Facilities;