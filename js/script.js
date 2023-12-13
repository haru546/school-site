
document.addEventListener('DOMContentLoaded', function () {
    let menuToggle = document.querySelector('.menu-toggle');
    let navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        if (navMenu.style.display === 'none' || navMenu.style.display === '') {
            navMenu.style.display = 'flex';
            menuToggle.innerHTML = '&#10006;'; // ハンバーガーアイコンからばつに変更
        } else {
            navMenu.style.display = 'none';
            menuToggle.innerHTML = '&#9776;'; // ばつからハンバーガーアイコンに変更
        }
    });
});

function validateForm() {
    // チェックボックスの状態を取得
    let privacyCheckbox = document.getElementById("privacy_agree");
    let privacyError = document.getElementById("privacyError");

    // チェックが入っていない場合にエラーメッセージを表示
    if (!privacyCheckbox.checked) {
      privacyError.textContent = "※プライバシーポリシーに同意してください";
      return false; // 送信を中止
    } else {
      privacyError.textContent = ""; // エラーメッセージをクリア
      return true; // 送信を許可
    }
  }
