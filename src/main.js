import './style.css';

// 모달 닫기 기능
document.getElementById('closeButton').addEventListener('click', function () {
    document.getElementById('modalBackdrop').classList.add('hidden');
});
