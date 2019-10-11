<template>
<div>
  <div class="header_pr">   
      <header class="icon_header">
        <a class="iconfont icon-zuojiantou"  ui-back  ></a>
          <div>
            登录
          </div>
      </header>
  </div>
  <div class="layout" >
    <h1 class="col-mar text-center">
    </h1>
    <form action="" ui-login data-type="1" data-url="?r=login/login" onSubmit="return false;" data-return-url ="/index.php?r=user/index" data-mta-case="login" >
      <div class="col-mar form_input_item" error >
        <i class="iconfont tab_fl icon-phone"></i>
        <div class="inputtext">
          <input type="text" maxLength="11" name="phone" placeholder="手机号码"  />
          <i class="iconfont icon-closecircle tab col-hr close"></i>
        </div>
        <p class="input_msg">请输入正确11位的手机号码！</p>
      </div>
      <div class="col-mar form_input_item">
        <i class="iconfont tab_fl icon-path"></i>
          <div class="inputtext">
              <input type="password" maxLength="18" name="password" placeholder="密码"  />
              <i class="iconfont icon-eyeclose tab col-text showPassword"></i>
          </div>
                  <!-- <p class="input_msg password">密码由8-16个字符组成，必须包含字母、数字、符号中至少2种，且不能包含空格</p> -->
      </div>

          
      <div class="col-mar login_submit">
        <input type="submit" class="btn btn-default btn-block btn-max"  value= "登录" >
      </div>

      <div class="col-mar">
        还没有账号？立即
        <a  href="/index.php?r=login/register" class="col-link">注册</a>
      </div>
    </form>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
  .header_pr:nth-child(2) {
    z-index: 155;
  }
  .header_pr {
    background: #fff;
    border: 0;
  }
  .icon_header {
    width: 100%;
    height: 45px;
    line-height: 45px;
    position: relative;
    z-index: 5;
    zoom: 1;
  }
  .icon_header>a {
    position: absolute;
    z-index: 5;
    zoom: 1;
    top: 0;
    width: 45px;
    height: 45px;
    text-align: center;
    color: #666;
    /* font-size: 1.29rem; */
  }
  .icon_header>div {
    text-align: center;
    font-size: 16px;
    color: #333;
    position: relative;
    z-index: 2;
    zoom: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }




  .layout {
    padding-bottom: 2rem;
    background: #fff;
    position: relative;
    zoom: 1;
    z-index: 50;
    min-height: 410px;
  }
  .text-center {
    margin: 0;
    height: 50px;
  }
  .form_input_item {
    height: 1.8rem;
    border-bottom: solid 1px #eee;
    position: relative;
    z-index: 1;
    zoom: 1;
    padding: .7rem 0;
    /* transition: all .4s ease-out 0s; */
    /* -o-transition: all .4s ease-out 0s; */
    /* -moz-transition: all .4s ease-out 0s; */
    transition: all .4s ease-out 0s;
    transform-origin: center;
  }
  .form_input_item .tab_fl {
    width: 2rem;
    line-height: 1.8rem;
    text-indent: .2rem;
    color: #666;
    font-size: 1.3rem;
    position: absolute;
    z-index: 1;
    zoom: 1;
    left: 0;
    top: .7rem;
  }
  .form_input_item .inputtext {
    margin: 0 0 0 2rem;
    position: relative;
    zoom: 1;
    z-index: 5;
  }
  .form_input_item .inputtext input {
    border: 0;
    color: #333;
    font-size: 1rem;
    height: 1.8rem;
    width: 90%;
    background: 0 0;
  }
  .form_input_item .inputtext .tab {
    right: 0;
    top: 0;
    line-height: 1.8rem;
    position: absolute;
    z-index: 1;
    zoom: 1;
    text-align: center;
    width: 2rem;
  }
  .form_input_item .input_msg {
    position: absolute;
    zoom: 1;
    left: 0;
    top: 100%;
    z-index: 1;
    font-size: 1rem;
    color: #FC3F78;
    text-indent: 2rem;
    opacity: 0;
    transition: all .4s ease-out 0s;
    transform-origin: center;
    transform: translateY(-10px) translateX(0);
    line-height: 1.8rem;
  }
  .login_submit {
    padding: 1.5rem 0 1rem;
  }
  .col-mar {
    margin: 0 1rem;
  }
  .btn.btn-block {
    padding-left: 0;
    padding-right: 0;
    display: block;
    width: 100%;
  }
  .btn.btn-max {
    padding: .5rem 1.43rem;
    font-size: 1.14rem;
  }
  .btn.btn-default {
    background: #eee;
    color: #666;
    border-color: #eee;
  }
  .btn {
    -webkit-appearance: none;
    border-radius: 4px;
    touch-action: manipulation;
    user-select: none;
    border: 1px solid transparent;
    overflow: hidden;
    z-index: 1;
  }
  .col-link {
    color: #1991EB;
  }
</style>