import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const Tour = () => {
    return (
        <div>
        <AppBar position="static" color="s">
            <Toolbar>
              <Typography variant="h6" noWrap>
                주변 시설/관광지
              </Typography>
            </Toolbar>
        </AppBar>
        <Card>
            <Typography variant="h6" noWrap>
                ● 시외버스 터미널<br/>
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;택시로 10분 정도 거리. 호텔 건너편 버스 정류장에서 2번 버스를 타고 시외버스 터미널에서 하차.<br/><br/>

                    ● 국립박물관<br/>
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;호텔 건너편 정류장에서 2번 버스를 타고 15분 정도 이동 뒤 10분 보도로 이동.<br/><br/>

                    ● 해수욕장<br/>
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;호텔 앞 버스 정류장에서 3번 버스를 타고 해수욕장 정류장에서 하차.<br/><br/>

                    ● 국제공항<br/>
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;15분 간격으로 공항에서 호텔 간 셔틀버스를 운행하고 있음.<br/><br/>

                    ● 워터파크<br/>
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;7월과 8월에 한해 30분 간격으로 금, 토, 일요일에 셔틀 버스를 운영하고 있음.
            </Typography> 
        </Card>
        </div>
    );
};

export default Tour;