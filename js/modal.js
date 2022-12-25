const xbtn = document.querySelector('.xmark');
const gybbpr = document.querySelector('.gybbpr');
const counseApp = document.querySelector('.counseApp');
const naverBtn = document.querySelector('.naver_btn');
const phone = document.querySelector('.phone_box');
const sidebar = document.querySelector('#sidebar_container');
const sidebarBtn = document.querySelector('.side_btn');
const btnCheck = document.querySelector('.btn_check');

gybbpr.addEventListener('click', () => {
   counseApp.classList.add('on');
   gybbpr.classList.add('off');
});
xbtn.addEventListener('click', () => {
   counseApp.classList.remove('on');
   gybbpr.classList.remove('off');
});

naverBtn.addEventListener('mouseover', () => {
   document.getElementById('naver_talk').style.display = 'block';
});
naverBtn.addEventListener('mouseout', () => {
   document.getElementById('naver_talk').style.display = 'none';
});

phone.addEventListener('mouseover', () => {
   document.getElementById('phone_num').style.display = 'block';
});
phone.addEventListener('mouseout', () => {
   document.getElementById('phone_num').style.display = 'none';
});

sidebarBtn.addEventListener('click', () => {
   sidebar.classList.toggle('open');
});

btnCheck.addEventListener('click', e => {
   alert('비밀글 비밀번호가 틀립니다.');
});
