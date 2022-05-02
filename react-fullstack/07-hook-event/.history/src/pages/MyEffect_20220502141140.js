import React from 'react';

import sample from '../assets/img/sample.png';

const MyEffect = () =>{
    //이미지의 밝기를 위한 상태값
    const [myBrightness, setBrightness] = React.useState(100);

    //브라우저의 넓이를 의미하는 상태값
    const [myWidth, setMyWidth] = React.useState(window.innerWidth);

    //사용자 정의 함수
    const onMyResize = () => setMyWidth(window.innerwidth);

    //이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행됨
    React.useEffect(()=>{
        console.clear();
        console.log('[MyEffect1] %s ::: 화면에 컴포넌트가 처음 로드될 때 처리되어야 할 기능', new Date());
        window.addEventListener('resize', onMyResize);
        return() => window.removeEventListener('resize', onMyResize);
    },[]);

    //이 컴포넌트가 화면에 막 등장할 때와 state, props값이 변경될 때마다 매번 실행됨
    React.useEffect(()=>{myBrightness]);

    //state값이 변경되어 화면이 다시 렌더링되거나 화면 이동 등의 이유로 이 컴포넌트가 사라질 때 실행됨
    React.useEffect(()=>{
        return()=>{
            console.log('[MyEffect3] %s ::: 이컴포넌트가 화면에서 사라지기 직전에 처리되어야 할 기능', new Date());
        }
    })

    return(
        <>
        <h2>MyEffect</h2>

        <h3>Window Width: {myWidth}</h3>

        <div>
            <input type="range" min='0' max='200' step='1' value={myBrightness} onChange={e=>{setBrightness(e.currentTarget.value);}} />
        </div>

        <img src={sea} alt="Hello React" width='480' style={{filter: 'brightness(' + myBrightness + '%)',}} />
        </>
    )
}

export default MyEffect;