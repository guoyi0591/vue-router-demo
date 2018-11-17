<template>
    <div id="app" class="wrapper">
        <!--公用头部、导航-->
        <header class="header main_container">
            <a class="logo" href="index.html"></a>
            <div class="logo_mask"></div>
            <div style="position: absolute;top:0;font-size: 36px;">LOGO预留位置</div>
        </header>
        <div class="nav_bg">
            <nav class="main_container nav">
                <a href="index.html">网站主页</a>
                <router-link to="/pollens">花粉图库</router-link>
            </nav>
        </div>
        <!--公用头部、导航-->
        <div class="search main_container">
            <div class="type_area">
                <div class="type_title">
                    分类导航
                </div>
                <ul>
                    <li><div class="nav_title"><router-link to="/pollens">花粉库</router-link></div></li>
                    <li><div class="nav_title"><router-link to="/search">花粉特征查询</router-link></div></li>
                    <li><div class="nav_title"><router-link to="/family">植物科属查询</router-link></div></li>
                </ul>
            </div>
            <div class="pic_view">
                <router-view></router-view>
            </div>
        </div>
        <!--公用底部-->
        <footer class="footer">
            <span>版权所有 Copyright@ 2015 北京市园林科学研究院</span><br>
            <span>电话：010-64717640 传真：010-64717640</span>
        </footer>
        <!--公用底部-->
    </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
html, body {
    margin: 0;
    padding: 0;
}

a:link, a:visited {
    text-decoration: none;
}

.clear:after {
    content: '';
    display: table;
    clear: both;
}

.main_container {
    width: 1000px;
    margin: auto;
}

.header {
    position: relative;
    overflow: hidden;
}

.header .logo {
    display: block;
    height: 138px;
    text-indent: -9999px;
    background: url('./assets/images/logo_bg.jpg') no-repeat center right;
}

.header .logo_mask {
    position: absolute;
    width: 100%;
    height: 400px;
    top: -50px;
    background: radial-gradient(closest-side ellipse at 70% 50%, rgba(255, 255, 255, 0.2), #FFF);
}

.nav_bg {
    height: 40px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 24%, #DBDBDB 28%, #DBDBDB 32%, #EEEEEE 32%, #EEEEEE 34%, #DDD 36%, #FFF 70%);
}

.nav {
    box-sizing: border-box;
    height: 100%;
    width: 1000px;
    border-bottom: 1px solid #007CD2;
    border-left: 1px solid #007CD2;
    border-right: 1px solid #007CD2;
    border-radius: 5px;
    background: linear-gradient(to right, #007CD2, #01ACE4);
    position: relative;
}

.nav a {
    display: inline-block;
    height: 100%;
    width: 20%;
    color: #ffffff;
    text-align: center;
    line-height: 39px;
    font-weight: bold;
}

.nav a:hover {
    text-decoration: underline;
}
.nav_title {
    height: 35px;
    background-repeat: no-repeat;
    background-position: 28px center;
    line-height: 35px;
    padding-left: 43px;
    font-size: 14px;
    cursor: pointer;
    position: relative;
}

.nav_title:before {
    content: '';
    position: absolute;
    border-left: 5px solid #666;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    top: 50%;
    transform: translate(-15px, -50%);
}
.nav_title a{
    color: #666;
}
.footer {
    background: linear-gradient(to right, #007CD2, #01ACE4);
    text-align: center;
    line-height: 30px;
    padding: 25px 0;
    font-size: 12px;
    color: #ffffff;
}

.search {
    overflow: hidden;
    margin-top: 15px;
    position: relative;
}

.search:before {
    content: '';
    position: absolute;
    left: 170px;
    bottom: 0;
    height: 1px;
    width: calc(100% - 170px);
    background-color: #cccccc;
}

.search>div {
    padding-bottom: 9999px;
    margin-bottom: -9999px;
}

.type_area {
    float: left;
    width: 160px;
    background-color: #F0F0F0;
}

.type_area .type_title {
    height: 48px;
    border-bottom: 1px solid #999;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #666666;
    line-height: 48px;
}

.type_area ul, .type_area li {
    margin: 0;
    padding: 0;
}
.pic_view {
    margin-left: 170px;
    outline: 1px solid #cccccc;
    outline-offset: -1px;
}
.pic_view #right_iframe{
    width: 100%;
    height: 475px;
}

.slider {
    margin: 0 auto;
    position: relative;
}

.slider_area {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
}

.slider_area .no_img {
    width: 100%;
    height: 100%;
    position: relative;
}

.slider_area .no_img span {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    margin: auto;
    color: #999;
    font-family: 'Microsoft Yahei';
    font-size: 30px;
    line-height: 50px;
    text-align: center;
}

.slider_area .no_img span:before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M420.384 64.672H974.4c24.288 0 46.176 21.952 46.176 49.44v733.152c0 27.456-19.424 49.44-46.176 49.44H46.176C21.856 896.672 0 874.72 0 847.264V114.112c0-27.456 19.424-49.44 46.176-49.44h374.208z' fill='%23FFF'/%3E%3Cpath d='M974.4 81.312H46.176C21.856 81.312 0 103.296 0 130.752v733.152c0 27.456 19.424 49.44 46.176 49.44h930.688c24.288 0 46.176-21.952 46.176-49.44V130.752c-2.464-27.456-21.888-49.44-48.64-49.44' fill='%2374B3F8'/%3E%3Cpath d='M1020.48 890.592c0 13.632-15.392 22.72-35.904 22.72H35.904C15.392 913.312 0 901.952 0 890.592v-88.608s117.952-177.216 205.12-172.672c41.024 2.272 184.608 93.152 287.168 93.152s148.704-193.152 287.168-193.152c74.368 0 243.584 118.144 243.584 118.144v243.136h-2.56z' fill='%23BBDFFF'/%3E%3Cpath d='M279.296 479.04c-33.152 0-60.288-12.096-81.408-33.312-21.088-21.184-33.152-51.456-30.144-78.688 0-60.544 51.264-112 111.552-112 33.152 0 60.288 12.096 81.408 33.312 21.088 21.184 33.152 51.456 30.144 78.688 0 63.584-51.264 112-111.552 112' fill='%23FFF'/%3E%3C/svg%3E") no-repeat center;
    background-size: cover;
    vertical-align: -14px;
    margin-right: 10px;
}

.slider ul, .slider li {
    margin: 0;
    padding: 0;
}

.slider_area li {
    width: 100%;
    height: 100%;
    display: inline-block;
    position: relative;
    transition: all .5S;
}

.slider_area .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    margin-top: -15px;
    border-top: 3px solid #ffffff;
    border-left: 3px solid #ffffff;
    opacity: 0;
    transition: all .5S;
}

.slider_area .arrow.prev {
    left: 50px;
    transform: rotate(-45deg);
}

.slider_area .arrow.next {
    right: 50px;
    transform: rotate(135deg);
}

.slider_area .arrow.fixed, .slider_area:hover .arrow.hover {
    opacity: 1;
    cursor: pointer;
}

.slider_area li .image {
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.slider_area li .desc {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    color: #FFF;
    padding: 20px;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Microsoft Yahei';
}

.slider_thumb {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
}

.slider_thumb li {
    margin: 10px;
    display: inline-block;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    transition: all .2S;
    border-radius: 5px;
}

.slider_thumb li:hover, .slider_thumb li.active {
    transform: scale(1.1);
}

.slider_point {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    text-align: center;
    bottom: 0;
}

.slider_point li {
    width: 8px;
    height: 8px;
    margin: 5px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    transition: all .2S;
}

.slider_point li:hover, .slider_point li.active {
    background-color: #ffffff;
}

.els {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
