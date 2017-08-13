let apiHost = '../server/project/public/api/';
// let apiHost = 'http://localhost:8000/api/';
let apiToken = 'ijdasoijds09d098';
let apiLogin = apiHost + 'login';
let apiRegister = apiHost + 'register';
let apiEndlessRunningLeaderboard = apiHost + 'endless-running/leaderboard';
let apiTetrisLeaderboard = apiHost + 'tetris/leaderboard';
let apiGenerateCaptcha = apiHost + 'captcha/generate';
let apiValidateCaptcha = apiHost + 'captcha/validate/';

$.ajaxSetup({
    headers: { 'api_token': apiToken }
});

function checkAuth() {
  let registerMenu = $('.register-menu');
  let loginMenu = $('.login-menu');
  let gamePopup = $('.popup');
  let sideRegisterMenu = $('aside').find('.auth-menu');
  let logoutMenu = $('.logout-menu');

  if (localStorage.getItem('revUserLogin') == "true" || localStorage.getItem('revUserLogin') == true) {
    registerMenu.css('display','none');
    loginMenu.css('display','none');
    sideRegisterMenu.css('display','none');
    logoutMenu.css('display','block');
  }
  else {
    registerMenu.removeAttr('style');
    loginMenu.removeAttr('style');
    sideRegisterMenu.removeAttr('style');
    logoutMenu.css('display','none');
  }
}

function logoutUser() {
  let dialog = confirm('Are you sure want to logout?');
  if (dialog == true) {
    localStorage.clear();
    checkAuth();
  }
}

function playGame(game)  {
  if (localStorage.getItem('revUserLogin') == "true" || localStorage.getItem('revUserLogin') == true) {
    let gameIframe = $('<iframe>');
    gameIframe.attr('width','804');
    gameIframe.attr('height','404');
    $('.game-place').append(gameIframe);
    gameIframe.focus();
    gameIframe.css('border','none');
    gameIframe.css('background-color', '#EEEEEE');

    $('body').css('overflow-y','hidden');
    $('#popup-game').fadeIn(350);
    $('#popup-game').find('.leaderboard').html('');
    $('#popup-game').find('.loading-text').removeClass('none');
    $('#popup-game').find('.loading-text').html('Please wait...')

    setTimeout(function() {
      if (game == 'Endless Runner') {
        gameIframe.attr('src','../games/endless-runner');
        $.ajax({
          url: apiEndlessRunningLeaderboard,
          type: 'get',
          dataType: 'json',
          success: function(data) {
            if (data.status == 1) {
              let no = 0;
              $('#popup-game').find('.loading-text').addClass('none');
              for (var i = 0; i < data.message.leaderboard.length; i++) {
                let number = no += 1;
                let list = $('<li>');
                list.html(number + ". " + data.message.leaderboard[i].name + " " + " (" + data.message.leaderboard[i].score + " point)");
                $('#popup-game').find('.leaderboard').append(list);
              }
            }
            else {
              $('#popup-game').find('.loading-text').removeClass('none');
              $('#popup-game').find('.loading-text').html(data.message);
            }
          },
          error: function () {
            console.clear();
          }
        });
      }
      else if (game == 'Tetris') {
        gameIframe.attr('src','../games/tetris');
        $.ajax({
          url: apiTetrisLeaderboard,
          type: 'get',
          dataType: 'json',
          success: function(data) {
            if (data.status == 1) {
              let no = 0;
              $('#popup-game').find('.loading-text').addClass('none');
              for (var i = 0; i < data.message.leaderboard.length; i++) {
                let number = no += 1;
                let list = $('<li>');
                list.html(number + ". " + data.message.leaderboard[i].name + " " + " (" + data.message.leaderboard[i].score + " point)");
                $('#popup-game').find('.leaderboard').append(list);
              }
            }
            else {
              $('#popup-game').find('.loading-text').removeClass('none');
              $('#popup-game').find('.loading-text').html(data.message);
            }
          },
          error: function () {
            console.clear();
          }
        });
      }
    },350);
  }
  else {
    generateCaptcha();
    $('#popup-login').fadeIn(350);
  }
}

function registerUser() {
  $('#register-form').animate({
    scrollTop: $('#register-form').find('.form-title').offset().top
  }, 500);
  generateCaptcha();
  $('#popup-login').fadeOut(350);
  setTimeout(function () {
    $('#popup-register').fadeIn(350);
  });
}

function loginUser() {
  generateCaptcha();
  $('#popup-register').fadeOut(350);
  setTimeout(function () {
    $('#popup-login').fadeIn(350);
  });
}

function registerProcess() {
  $('#register-form').find('.submit').html('Please wait...');
  $('#register-form').find('.submit').prop('disabled',true);
}

function registerSuccessResponse(user_id) {
  registerProcess();
  $('#register-form').find('.alert').removeClass('none');
  $('#register-form').find('.alert').addClass('teal');
  $('#register-form').find('.alert').html('Registration success.');
  localStorage.setItem('revUserId', user_id);
  localStorage.setItem('revUserLogin', true);
  $('#register-form').find('.error').html('');
  setTimeout(function () {
    window.location.href = '';
    // closeModal('popup-register');
    // checkAuth();
  },1000);
}

function registerFailResponse() {
  $('#register-form').find('.submit').html('Register');
  $('#register-form').find('.submit').prop('disabled',false);
}

function loginProcess() {
  $('#login-form').find('.submit').html('Please wait...');
  $('#login-form').find('.submit').prop('disabled',true);
}

function loginSuccessResponse(user_id) {
  loginProcess();
  $('#login-form').find('.alert').removeClass('none');
  $('#login-form').find('.alert').addClass('teal');
  $('#login-form').find('.alert').html('Authentication success.');
  localStorage.setItem('revUserId', user_id);
  localStorage.setItem('revUserLogin', true);
  setTimeout(function () {
    window.location.href = '';
    // closeModal('popup-login');
    // checkAuth();
  },1000);
}

function loginFailResponse() {
  $('#login-form').find('.submit').html('Login');
  $('#login-form').find('.submit').prop('disabled',false);
  $('#login-form').find('.alert').removeClass('none');
  $('#login-form').find('.alert').html('Username or password does not match.');
}

function readURL(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();

    $('.box-preview').removeClass('none');

    reader.onload = function (e) {
      $('.box-preview').find('img').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

function generateCaptcha() {
  $.ajax({
    url: apiGenerateCaptcha,
    type: 'get',
    dataType: 'json',
    success:function (data) {
      if (data.status == 1) {
        let captchaImage = data.message.captcha_url;
        let captchaHash = data.message.captcha_hash;
        $('.captcha').find('img').attr('src', captchaImage);
        $('.captcha').find('input[name=captcha_hash]').val(captchaHash);
      }
    },
    error: function () {
      console.clear();
    }
  });
}

function validateCaptcha(hashCaptcha, inputCaptcha) {
  $.ajax({
    url: apiValidateCaptcha + hashCaptcha,
    type: 'post',
    dataType: 'json',
    data: {
      input_user : inputCaptcha,
    },
    success:function (data) {
      if (data.status == 1) {
        return "success";
      }
      else {
        return "failed";
      }
    },
    error: function () {
      console.clear();
    }
  });
}

checkAuth();

$(document).ready(function () {
  $('.box-upload').on('click', function (e) {
    $('#photo_register').click();
  });

  $('#photo_register').on('change', function (e) {
    readURL(this);
  });

  $('#login-form').on('submit', function (e) {
    e.preventDefault();
    let captchaLogin = $(this).find('input[name=captcha_hash]').val();
    let captchaLoginUser = $(this).find('input[name=input_user]').val();

    loginProcess();

    $.ajax({
      url: apiValidateCaptcha + captchaLogin,
      type: 'post',
      dataType: 'json',
      data: {
        input_user : captchaLoginUser,
      },
      success:function (data) {
        if (data.status == 0) {
          alert("Your input does not match with captcha image.");
          $('#login-form').find('.submit').html('Login');
          $('#login-form').find('.submit').prop('disabled',false);
          return;
        }

        loginProcess();
        $.ajax({
          url: apiLogin,
          type: 'post',
          dataType: 'json',
          data: {
            username : $('#username_login').val(),
            password : $('#password_login').val(),
          },
          success:function (data) {
            if (data.status == 1) {
              loginSuccessResponse(data.message.user_id);
            }
            else {
              loginFailResponse();
            }
          },
          error: function () {
            console.clear();
            loginFailResponse();
          }
        });
      },
      error: function () {
        console.clear();
      }
    });
  });

  $('#register-form').on('submit', function (e) {
    let formData = new FormData(this);
    e.preventDefault();
    let captchaLogin = $(this).find('input[name=captcha_hash]').val();
    let captchaLoginUser = $(this).find('input[name=input_user]').val();

    registerProcess();

    $.ajax({
      url: apiValidateCaptcha + captchaLogin,
      type: 'post',
      dataType: 'json',
      data: {
        input_user : captchaLoginUser,
      },
      success:function (data) {
        if (data.status == 0) {
          alert("Your input does not match with captcha image.");
          $('#register-form').find('.submit').html('Register');
          $('#register-form').find('.submit').prop('disabled',false);
        }

        else {
          $.ajax({
            url: apiRegister,
            type: 'post',
            dataType: 'json',
            // data: {
            //   name: $('#name_register').val(),
            //   username: $('#username_register').val(),
            //   email: $('#email_register').val(),
            //   password: $('#password_register').val(),
            //   date_birth: $('#date_birth_register').val(),
            //   phone_number: $('#phone_number_register').val(),
            //   photo: $('#photo_register').val(),
            // },
            data: formData,
            cache:false,
            contentType: false,
            processData: false,
            success:function (data) {
              if (data.status == 1) {
                registerSuccessResponse(data.message.user_id);
              }
              else {
                $('#register-form').animate({
                  scrollTop: $('#register-form').find('.error').offset().top
                }, 1500);
                $('#register-form').find('.error').html('');
                for (var i = 0; i < data.message.validation_error.length; i++) {
                  let errorMsg = $('<div class="alert">');
                  errorMsg.html(data.message.validation_error[i]);
                  $('#register-form').find('.error').append(errorMsg);
                }
                registerFailResponse();
              }
            },
            error: function () {
              console.clear();
            }
          });
        }
      },
      error:function () {
        console.clear();
      }
    });
  });

  $('.refresh-captcha').on('click',function () {
    generateCaptcha();
  });
});
