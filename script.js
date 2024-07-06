

document.querySelector('.subscribe_form').addEventListener('submit', function (e) {
  e.preventDefault(); // 기본 폼 제출 막기
  console.log('여기까지 왔어요');
  const email = document.querySelector('.subscribe_form input[name="email"]');
  const modal = document.querySelector('.modal');

  // email.checkValidity()로 검사하니 일반텍스트 오류
  // 정규식으로 email패턴 유효검사
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 이메일 유효성 검사
  if (emailPattern.test(email.value)) {
    modal.classList.add('on'); // 모달 열기
  } else {
    alert('유효한 이메일 주소를 기입해 주세요!');
  }
});
