import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const Hotel = () => {
    return (
        <div>
        <AppBar position="static" color="s">
            <Toolbar>
              <Typography variant="h6" noWrap>
                호텔 소개
              </Typography>
            </Toolbar>
        </AppBar>
        <Card>
            <Typography variant="h6" noWrap>
                &nbsp; &nbsp; &nbsp;배에힘꽉조 호텔은 이 도시의 최고의 특급 호텔로서 지역 최고의 휴식과 문화의 장소로 각광받고 있습니다.
                <br/>
                &nbsp; &nbsp; &nbsp;최대 700명을 수용할 수 있는 그랜드 홀과 300명을 수용할 수 있는 콘서트홀, 이외에도 다양한 작은 연회장을 갖추고 있습니다.
            </Typography> 
        </Card>
        </div>
    );
};

export default Hotel;