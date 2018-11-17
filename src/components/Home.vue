<template>
    <div class="slider">
        <ul class="slider_area" style="height: 400px;">
            <li v-for="pollen in pollens">
                <div class="image">
                    <img v-bind:src="pollen.url" />
                </div>
                <div v-bind:title="pollen.desc" class="desc els">{{pollen.desc}}</div>
            </li>
            <div class="arrow hover prev"></div>
            <div class="arrow hover next"></div>
        </ul>
        <ul class="slider_thumb">
            <li v-for="pollen in pollens" class="" style="height: 50px; width: 50px;">
                <img v-bind:src="pollen.url" />
            </li>
        </ul>
        <!---->
    </div>
</template>

<script>
// mounted 钩子函数  这里去请求豆瓣数据
export default {
    name: 'pollens',
    data() {
        return {
            msg: '花粉库',
            pollens: [
                {
                    "id": "1",
                    "name": "青蒿",
                    "desc": "1,青蒿,菊科,三角形,14.1-17.8,16.10±0.38,13.3-17.9,15.09±0.44,椭圆形,13.3-17.9,15.09±0.44,3孔沟,内膜突出,10.0-15.72,12.53±0.61,1.25-4.64,2.61±0.42,2.4-4.01,3.19±0.17,刺状,0.20-0.43,0.30±0.02,0.26-0.48,0.40±0.02,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "2",
                    "name": "荠菜",
                    "desc": "2,荠菜,十字花科,圆形,14.3-18.9,16.67±0.36,椭圆形,13.1-17.2,15.46±0.74,3沟,沟内具褶皱和颗粒，稍向外突起,9.94-18.64,14.65±1.27,1.52-3.65,2.71±0.20,网状,0.39-0.85,0.63±0.06,0.31-0.51,0.38±0.02,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "3",
                    "name": "落地生根",
                    "desc": "3,落地生根,景天科,15.5-19.0,17.03±0.22,长椭圆形,42-46.6,44.07±0.270,3沟,萌发沟窄,37.0-41.0,39.61±0.35,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "4",
                    "name": "葎草",
                    "desc": "4,葎草,桑科,圆形,17.9-21.8,19.71±0.29,圆形,16.1-19.6,17.7±0.49,2-3孔,萌发孔近圆形，稍向外突起,1.14-2.2,1.71±0.06,1.08-1.63,1.30±0.10,刺状,刺密集，但分布不均匀,0.18-0.62,0.31±0.05,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "5",
                    "name": "二月兰",
                    "desc": "5,二月兰,十字花科,圆形,19.4-23.0,21.68±0.52,椭圆形,18.2-21.4,19.58±0.47,3沟,沟内具褶皱和颗粒，稍向外突起,19.26-21.80,20.62±0.55,1.39-2.64,2.03±0.20,网状,网眼多角形或近圆形,0.57-0.69,0.79±0.05,0.24-0.38,0.28±0.01,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "6",
                    "name": "甘野菊",
                    "desc": "6,甘野菊,菊科,圆形,20.2-24.6,22.51±0.39,椭圆形,28.2-31.5,30.18±0.28,3孔沟,刺状+小穴状,1.93-2.68,2.29±0.06,2.19-3.63,2.78±0.18,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "7",
                    "name": "崂峪苔草",
                    "desc": "7,崂峪苔草,莎草科,圆形,21.4-33.0,28.46±0.80,草莓形,20.3-29.7,23.79±0.61,4-5孔,萌发孔近圆形，稍凹陷,4.08-9.65,6.30±0.78,负网状,网眼细，表面具小颗粒，网脊具小穿孔,0.45-0.94,0.66±0.03,0.15-0.27,0.20±0.01,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "8",
                    "name": "铃兰",
                    "desc": "8,铃兰,百合科,椭圆形,24.2-37,28.69±1.37,14.2-26.9,21.16±1.24,近圆形,18.6-24.1,21.40±1.59,单沟,沟内具褶皱和小孔，稍向外突起,20.3-28.3,23.98±1.21,10.2-14.5,12.23±0.53,皱纹+小穴状,0.17-0.30,0.22±0.01",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "9",
                    "name": "蒲公英",
                    "desc": "9,蒲公英,菊科,圆形,23.5-37.5,29.04±1.28,21.5-35.8,27.58±1.49,多沟,刺状+小穴状,1.18-1.83,1.46±0.06,0.23-0.39,0.31±0.01,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "10",
                    "name": "阿拉伯婆婆纳",
                    "desc": "10,阿拉伯婆婆纳,玄参科,三角形或正方形,28.0-34.7,30.84±0.43,椭圆形,20.7-28.7,25.73±2.53,3-4沟,沟内具褶皱和颗粒，不向外突起,22.4-35.0,28.66±1.17,8.01-13.7,11.30±0.44,条纹状,\"条纹细，条纹间具小孔,具有平行于赤道的横向条纹和两极走向的纵向条纹\",",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "11",
                    "name": "南非万寿菊",
                    "desc": "11,南非万寿菊,菊科,圆形,25.8-39.8,31.39±0.84,椭圆形,34.0-43.0,37.50±0.69,3孔沟,7.84-11.5,9.71±0.42,刺状+小穴状,2.0-4.99,3.30±0.19,2.18-5.67,4.17±0.22,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "12",
                    "name": "紫花地丁",
                    "desc": "12,紫花地丁,堇菜科,圆形或正方形,29.5-35.5,33.77±0.66,29.9-34.9,32.63±0.52,23.0-27.2,25.77±1.38,4孔沟,沟内具褶皱和颗粒，不向外突起,25.66-38.0,30.04±0.92,4.80-8.82,6.54±0.23,7.17-8.08,7.44±0.17,皱纹+小穴状,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "13",
                    "name": "鼠尾草",
                    "desc": "13,鼠尾草,唇形科,椭圆形,34.8-42.0,39.38±0.59,30.2-34.9,31.76±0.36,圆形或椭圆形,26.3-34.0,28.45±0.66,6沟,沟内具颗粒，不向外突起,24.0-39.4,31.39±1.20,2.75-6.25,4.83±0.26,复网状,0.96-1.68,1.29±0.04,0.38-0.67,0.51±0.02,0.21-0.36,0.28±0.01,0.11-0.18,0.14±0.01,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "14",
                    "name": "一串红",
                    "desc": "14,一串红,唇形科,椭圆形,42.5-57.2,49.44±1.21,30.4-45.4,36.93±1.52,圆形或椭圆形,27.6-36.6,32.63±1.43,6沟,沟内具颗粒，不向外突起，易开裂,33.4-49.2,41.27±1.54,4.09-6.48,5.50±0.26,复网状,4.81-12.70,7.51±0.67,1.18-1.89,1.58±0.05,0.47-0.83,0.64±0.03,0.29-0.48,0.38±0.02,0.15-0.71,0.25±0.06,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "15",
                    "name": "打碗花",
                    "desc": "15,打碗花,旋花科,圆形,36.2-82.5,56.60±3.71,圆形,多孔,萌发孔椭圆形，孔膜上具颗粒,6.70-15.90,11.37±0.77,网状,网眼多角形或近圆形，脊上具颗粒,0.47-0.86,0.61±0.05,0.43-0.66,0.52±0.03,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "16",
                    "name": "马蔺",
                    "desc": "16,马蔺,鸢尾科,圆形,55.4-67.4,61.70±1.23,52.8-61.3,57.32±1.25,船形,50.8-66.3,59.02±1.79,单沟,沟膜具细网状纹饰，沟膜易向外突起成半球形,网状,网眼多角形，脊上具颗粒,0.68-2.89,1.89±0.18,0.43-0.91,0.67±0.043,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "17",
                    "name": "田旋花",
                    "desc": "17,田旋花,旋花科,圆形,64.5-97.3,73.91±4.32,椭圆形,46.5-47.1,46.8±0.30,3沟,沟内具颗粒，颗粒上具小刺，沟不向外突起,61.8-80.4,69.20±4.01,11.0-22.30,16.89±1.43,网状,网眼多角形或近圆形，脊上具颗粒,0.27-0.62,0.43±0.03,0.33-0.62,0.473±0.03,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "18",
                    "name": "萱草",
                    "desc": "18,萱草,百合科,椭圆形,72.5-87.2,79.58±1.41,48.0-54.7,52.40±0.74,近圆形,35.2-53.4,43.17±2.51,单沟,沟内粗糙，具少量颗粒,69.2-79.7,73.63±3.14,14.3-32.6,23.2±3.40,网状,粗网状，网眼多角形,2.99-8.23,5.35±0.45,1.42-2.47,1.84±0.06,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "19",
                    "name": "玉簪",
                    "desc": "19,玉簪,百合科,椭圆形,63.6-107,81.83±10.1,27.3-66.7,49.20±9.92,近圆形,单沟,网状,粗网状，网眼多角形，脊疣状,4.23-10.70,8.45±0.98,2.60-7.68,4.71±0.71,1.38-1.86,1.65±0.05,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "20",
                    "name": "美丽月见草",
                    "desc": "20,美丽月见草,柳叶菜科,三角形,106-131,117.75±3.08,69.2-101,86.08±5.53,椭圆形,44.6-63.7,57.60±4.45,3孔,5.38-12.70,8.35±0.90,皱纹+细颗粒+小穴状,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                },
                {
                    "id": "21",
                    "name": "朱顶红",
                    "desc": "21,朱顶红,石蒜科,橄榄形,109-127,119.81±1.20,37.0-43.8,40.64±0.79,橄榄形,34.6-40.3,37.59±0.73,单沟,具1远极沟，异极，沟长与极面长轴等长，沟窄,网状,网眼多角形，脊上具颗粒,2.0-3.53,3.01±0.14,0.50-0.98,0.79±0.04,",
                    "url": "http://editerupload.eepw.com.cn/201809/61001537857032.jpg",
                    "images": null
                }
            ]
        }
    },
    created: function () { // 这里mounted和created生命周期函数区别
        this.$http.get('http://localhost:8081/search/pollens')
            .then(function (response) {
                this.pollens = response.body.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
</script>

<style scoped>
.nav_title {
  height: 35px;
  background-repeat: no-repeat;
  background-position: 28px center;
  line-height: 35px;
  padding-left: 43px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  position: relative;
}

.nav_title:before {
  content: "";
  position: absolute;
  border-left: 5px solid #666;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  top: 50%;
  transform: translate(-15px, -50%);
}

.nav_child {
  background: #aaa;
  display: none;
}

.nav_child.active {
  display: block;
}

.nav_child_item {
  height: 25px;
  line-height: 25px;
  padding-left: 50px !important;
}

.nav_child_item a {
  font-size: 12px;
  color: #eaeff3;
  cursor: pointer;
}

.nav_child_item a:hover {
  text-decoration: underline;
}

html,
body {
  margin: 0;
  padding: 0;
}

a:link,
a:visited {
  text-decoration: none;
}

.clear:after {
  content: "";
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
  background: url("../assets/images/logo_bg.jpg") no-repeat center right;
}

.header .logo_mask {
  position: absolute;
  width: 100%;
  height: 400px;
  top: -50px;
  background: radial-gradient(
    closest-side ellipse at 70% 50%,
    rgba(255, 255, 255, 0.2),
    #fff
  );
}

.nav_bg {
  height: 40px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 24%,
    #dbdbdb 28%,
    #dbdbdb 32%,
    #eeeeee 32%,
    #eeeeee 34%,
    #ddd 36%,
    #fff 70%
  );
}

.nav {
  box-sizing: border-box;
  height: 100%;
  width: 1000px;
  border-bottom: 1px solid #007cd2;
  border-left: 1px solid #007cd2;
  border-right: 1px solid #007cd2;
  border-radius: 5px;
  background: linear-gradient(to right, #007cd2, #01ace4);
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

.footer {
  background: linear-gradient(to right, #007cd2, #01ace4);
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
  content: "";
  position: absolute;
  left: 170px;
  bottom: 0;
  height: 1px;
  width: calc(100% - 170px);
  background-color: #cccccc;
}

.search > div {
  padding-bottom: 9999px;
  margin-bottom: -9999px;
}

.type_area {
  float: left;
  width: 160px;
  background-color: #f0f0f0;
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

.type_area ul,
.type_area li {
  margin: 0;
  padding: 0;
}
.pic_view {
  margin-left: 170px;
  outline: 1px solid #cccccc;
  outline-offset: -1px;
}
.pic_view #right_iframe {
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
  font-family: "Microsoft Yahei";
  font-size: 30px;
  line-height: 50px;
  text-align: center;
}

.slider_area .no_img span:before {
  content: "";
  display: inline-block;
  width: 50px;
  height: 50px;
  background: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M420.384 64.672H974.4c24.288 0 46.176 21.952 46.176 49.44v733.152c0 27.456-19.424 49.44-46.176 49.44H46.176C21.856 896.672 0 874.72 0 847.264V114.112c0-27.456 19.424-49.44 46.176-49.44h374.208z' fill='%23FFF'/%3E%3Cpath d='M974.4 81.312H46.176C21.856 81.312 0 103.296 0 130.752v733.152c0 27.456 19.424 49.44 46.176 49.44h930.688c24.288 0 46.176-21.952 46.176-49.44V130.752c-2.464-27.456-21.888-49.44-48.64-49.44' fill='%2374B3F8'/%3E%3Cpath d='M1020.48 890.592c0 13.632-15.392 22.72-35.904 22.72H35.904C15.392 913.312 0 901.952 0 890.592v-88.608s117.952-177.216 205.12-172.672c41.024 2.272 184.608 93.152 287.168 93.152s148.704-193.152 287.168-193.152c74.368 0 243.584 118.144 243.584 118.144v243.136h-2.56z' fill='%23BBDFFF'/%3E%3Cpath d='M279.296 479.04c-33.152 0-60.288-12.096-81.408-33.312-21.088-21.184-33.152-51.456-30.144-78.688 0-60.544 51.264-112 111.552-112 33.152 0 60.288 12.096 81.408 33.312 21.088 21.184 33.152 51.456 30.144 78.688 0 63.584-51.264 112-111.552 112' fill='%23FFF'/%3E%3C/svg%3E")
    no-repeat center;
  background-size: cover;
  vertical-align: -14px;
  margin-right: 10px;
}

.slider ul,
.slider li {
  margin: 0;
  padding: 0;
}

.slider_area li {
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
  transition: all 0.5s;
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
  transition: all 0.5s;
}

.slider_area .arrow.prev {
  left: 50px;
  transform: rotate(-45deg);
}

.slider_area .arrow.next {
  right: 50px;
  transform: rotate(135deg);
}

.slider_area .arrow.fixed,
.slider_area:hover .arrow.hover {
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
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: "Microsoft Yahei";
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
  transition: all 0.2s;
  border-radius: 5px;
}

.slider_thumb li:hover,
.slider_thumb li.active {
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
  transition: all 0.2s;
}

.slider_point li:hover,
.slider_point li.active {
  background-color: #ffffff;
}

.els {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
