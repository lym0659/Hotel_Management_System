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
                ● 객실 정보<br/>
                        도시의 야경을 즐길 수 있는 편안하고 여유로운 객실에서 포근하게 휴식을 경험하실 수 있습니다.<br/><br/>
                        1) Deluxe Double (디럭스 더블)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;층수/면적: 1~8층/32.34m² (9.8평)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;객실료: 363,000원<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;침대: 더블 사이즈 1개<br/><br/>

                        2) Deluxe Twin (디럭스 트윈)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;층수/면적: 4~5층/32.34m² (9.8평)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;객실료: 363,000원<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;침대: 싱글 사이즈 2개<br/><br/>

                        3) Deluxe Family A (디럭스 패밀리 A)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;층수/면적: 3~4층/32.34m² (9.8평)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;객실료: 444,000원<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;침대: 킹 사이즈 1개, 슈퍼 싱글 사이즈 1개<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;최대 투숙 인원: 성인 2인, 소아 2인<br/><br/>

                        4) Deluxe Family B (디럭스 패밀리 B)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;층수/면적: 3~4층/32.34m² (9.8평)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;객실료: 396,000원<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;침대: 퀸 사이즈 1개, 슈퍼 싱글 사이즈 1개<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;최대 투숙 인원: 성인 2인, 소아 1인<br/><br/>

                        5) Conor Suite (코너 스위트)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 고객님의 품위를 지켜 드리기 위한 조금 더 여유롭고, 고급스러운 객실 환경이 조성되어 있는 객실입니다.<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;품격있는 안락함을 만끽해보시기 바랍니다.<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;층수/면적: 3~8층/39.6m² (12평)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;객실료: 495,000원<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;침대: 퀸 사이즈 1개<br/><br/>

                        6) Premier Suite (프리미어 스위트)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;최상층에 위치한 프리미어 스위트룸은 고객님의 사무공간과 침실 공간으로 구성되어 있어, 내집 같은 편안함을 경험할 수 있습니다.<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;층수/면적: 10층/64.68m² (19.6평)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;가격: 1,100,000원<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;침대: 퀸 사이즈 1개, 슈퍼 싱글 사이즈 1개<br/><br/>

                        7) Royal Suite (로열 스위트)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;호텔의 최상층에 위치한 Royal Suite는 품격있는 응접실, 넓은 부엌, 깊은 숙면을 유도하는 최고급 침구류를 갖춘 안락한 침실로 구성되어 있습니다.<br/> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VVIP를 위해 준비한 특별한 공간에서 최상의 남다름을 경험하십시오.<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;층수: 10층/161.7m² (49평)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;가격: 3,850,000원<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;추가 서비스: Turn Down 서비스<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;추가 시설: 75인치 이동식 대형 TV<br/><br/>
            </Typography> 
        </Card>
                
        </div>
    );
};

export default Facilities;