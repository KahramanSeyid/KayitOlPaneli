"use strict";
  const newAccount = document.querySelector('.new-account'); // Yeni hesap butonu
  const login = document.querySelector('.login'); // Giriş yap paneli
  const register = document.querySelector('.register'); // Kayıt ol paneli
  const resetPass = document.querySelector('.reset-pass'); // Şifremi unuttum butonu
  const closeBtn = document.querySelector('.close-btn'); // Şifre paneli kapatma butonu
  const overlay = document.querySelector('.overlay'); // Arka plan blur alanı
  const allreadyAccount=document.querySelector(".come-back"); // Zaten hesabım var
  const forgotPassPanel = document.querySelector('.forgot-pass'); // Şifremi unuttum paneli

  // Yeni hesap oluştur butonuna tıklayınca
  newAccount.addEventListener("click", function () {
    login.style.animation = "toLogin 0.5s forwards"; // Giriş yap paneli animasyonu
    setTimeout(function () {
      login.style.display = "none"; // Giriş yap panelini gizle
      register.style.display = "flex"; // Kayıt ol panelini göster
      register.style.animation = "toRegister 0.5s forwards";
    }, 600); // 600 milisaniye sonra değiştir
  });

  // Zaten Hesabım var butonuna tıklayınca
  allreadyAccount.addEventListener("click", function () {
    register.style.animation = "toLogin 0.5s forwards"; // Kayıt ol paneli animasyonu
    setTimeout(function () {
      register.style.display = "none"; // Kayıt ol panelini gizle
      login.style.display = "flex"; // Giriş yap panelini göster
      login.style.animation = "toRegister 0.5s forwards";
    }, 600); // 600 milisaniye sonra değiştir
  });

  // Şifremi unuttum butonuna tıklayınca
  resetPass.addEventListener("click", function () {
    overlay.style.display="block"; //arkaplan siyahlığını göster.
    forgotPassPanel.style.display="block";
    forgotPassPanel.style.display="showPasswordPanel 0.5 forwards";
    login.style.filter="blur(5px)";
  });

  // X butonuna tıklayınca
  closeBtn.addEventListener("click", function (event) {
    forgotPassPanel.style.animation = "hidePasswordResetPanel 0.5s forwards"; // Şifremi unuttum paneli animasyonu
    overlay.style.display="none";// Arka plan blur alanını gizle
    login.style.filter = "none"; // Giriş yap panelini göster
    setTimeout(function () {
      forgotPassPanel.style.display = "none"; // Şifremi unuttum panelini gizle
    }, 600); // 500 milisaniye sonra değiştir
    event.preventDefault();
  });

//Şifremi unuttum kısmına tıklayınca 