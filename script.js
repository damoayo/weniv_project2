document.querySelector('.subscribe_form').addEventListener('submit', function (e) {
  e.preventDefault(); // 기본 폼 제출 막기
  console.log('여기까지 왔어요');
  const email = document.querySelector('.subscribe_form input[name="email"]');
  const modalContent = document.querySelector('#modal .modalContent');

  // 정규식으로 email패턴 유효검사
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 이메일 유효성 검사
  if (emailPattern.test(email.value)) {
    modalContent.style.display = 'flex'; // 모달 열기
  } else {
    alert('유효한 이메일 주소를 기입해 주세요!');
  }
});

document.querySelector('.btn-go').addEventListener('click', function (e) {
  e.preventDefault(); // 기본 링크 동작 막기
  const modalContent = document.querySelector('#modal .modalContent');
  modalContent.style.display = 'none'; // 모달 닫기
});

/* Scroll Top */
document.querySelector('.scrollTop').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

/* 스크롤을 50이상 Y축으로 커지면 active추가 */
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');

  if (window.scrollY > 70) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

