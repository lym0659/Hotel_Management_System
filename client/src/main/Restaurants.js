import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const Restaurants = () => {
    return (
        <div>
        <AppBar position="static" color="s">
            <Toolbar>
              <Typography variant="h6" noWrap>
                호텔 내 식당
              </Typography>
            </Toolbar>
        </AppBar>
        <Card>
            <Typography variant="h6" noWrap>
                    ● Buffet Cook King <br/>
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;- 이태리식 WESTERN BAR 스타일의 SEFA는 고전적인 인테리어 양식을 현대적으로 표현한 공간입니다.<br/><br/>

                    ● Hwang Ha <br/>
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;- 동양적인 감성과 트렌디한 느낌의 황하는 식재료 본연의 맛을 살리며 중국 전통의 향취를 경험하실 수 있는 차이니즈 레스토랑 입니다. <br/>
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;다이닝 룸 또한 다양하게 구비되어 있어 개별 가족모임, 비즈니스 미팅, 소규모의 약혼식 모임에도 최상의 장소입니다.<br/><br/>
                    
                    ● 한식당 <br/>
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;– 한국 전통의 맛을 살린, 편안한 분위기 속에서 식사를 할 수 있는 한식당입니다.<br/><br/>
                    
                    ● Notting Hill <br/>
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;– 다양한 맥주와 요리들을 접할 수 있는 펍 분위기의 레스토랑입니다.<br/><br/>
                    
                    ● Cafee Hall <br/>
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;– 넓은 창문으로 들어오는 햇살과 함께 우아한 분위기 속에서 커피를 마시면서 마음을 치유할 수 있는 공간입니다.<br/><br/>
                    
                    ● Bar Vine <br/>
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;– 클래식한 분위기 속에서 와인류의 주류를 마실 수 있는 공간입니다.
            </Typography> 
        </Card>
                
        </div>
    );
};

export default Restaurants;