

♥️

프로젝트 개요 - 랜딩페이지를 만들어보는 프로젝트입니다.

기술 스택 - HTML, CSS, JavaScript

목표 - -1. 스크롤시 헤더고정 (처음에는 고정상태가 아님) <br>
            => 스크롤값에 따라 if문으로 분기 header태그에 class="active" 삽입으로 position:fixed 함.<br><br>
        2. 스크롤 탑 버튼을 누르면 스크롤이 최상단으로 부드럽게 올라갑니다.<br>
            => e.preventDefault()으로 href 기본기능 정지시키고, window.scrollTo 매소드를 사용하여, 목표지점과 동작방식을 지정합니다.<br><br>
        3. 이메일을 입력 => `Subscribe` 버튼을 클릭 => 모달창open<br>
           이메일 유효성 검사를 진행하여 if문으로 분기하여 처리함<br>
           => 유효성검사는 email패턴을 정규식으로 찾아서 사용함(정규식 무지)<br><br>

버전 및 업데이트 정보 - 1.0

참고 및 출처 - 주식회사 위니브
