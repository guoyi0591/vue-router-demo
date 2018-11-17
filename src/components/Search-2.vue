<template>
    <div>
        <div class="search">
            <div class="search_area">
                <div class="advanced_search_area">
                    <table>
                        <colgroup>
                            <col width="110px">
                            <col>
                            <col width="110px">
                            <col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <td>植物名称</td>
                                <td colspan="3">
                                    <div class="search_input">
                                        <input type="text" placeholder="请输入植物名称" v-model="pollen.name">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>所属科属</td>
                                <td colspan="3">
                                    <template v-for="(lable, index) in lables.family">
                                        <input v-if="index === 0" type="radio" name="family" :id="'family_'+index" value="0" checked>
                                        <input v-else type="radio" name="family" :id="'family_'+index" value="0">
                                        <label :for="'family_'+index" v-on:click="chooseLable('family', $event);">{{lable}}</label>
                                    </template>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="button" value="搜索" id="type_search" v-on:click="search();">
                </div>
            </div>
        </div>

        <div class="main_container">
            <table class="pollen_list">
                <colgroup>
                    <col width="150">
                    <col width="280">
                    <col>
                </colgroup>
                <tbody>
                    <tr v-for="pollen in pollens">
                        <td><img :src="pollen.url" :alt="pollen.chineseName" /></td>
                        <td><span>原文名称：</span><a href="javascript:void(0);" v-on:click="detail(pollen.name);">{{pollen.name}}</a></td>
                        <td><span>推荐中文名：</span>{{pollen.chineseName}}</td>
                    </tr>
                </tbody>
            </table>
            <div id="pollen_list_page"></div>
        </div>
    </div>
</template>

<script>
// mounted 钩子函数  这里去请求豆瓣数据
export default {
    name: 'pollenFamilySearch',
    data() {
        return {
            msg: '花粉科属查询',
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
            ],
            lables: {
                family: ["不限", "蝶形花科", "忍冬科", "蔷薇科", "虎耳草科", "柽柳科", "悬铃木科", "杨柳科", "鼠李科", "马鞭草科", "木犀科", "玄参科", "云实科", "卫矛科", "七叶树科", "苦木科", "山茱萸科", "石榴科", "无患子科", "槭树科", "蝶形花科", "椴树科", "柿树科", "菊科", "十字花科", "景天科", "桑科", "莎草科", "百合科", "堇菜科", "唇形科", "旋花科", "鸢尾科", "柳叶菜科", "石蒜科", "桦木科", "榆科", "紫葳科", "楝科", "木兰科", "银杏科", "小檗科", "柏科", "含羞草科", "红豆杉科", "三尖杉科", "松科"]
            },
            pollen: {
                name: null,
                family: null,
                page: 1
            }
        }
    },
    created: function () { // 这里mounted和created生命周期函数区别
        this.search();
    },
    methods: {
        search: function () {// 根据花粉科属查询
            this.$http.get('http://localhost:8081/search/family', {
                params: this.pollen
            })
                .then(function (response) {
                    let pageable = response.body.data;
                    this.pollens = pageable.pollens;

                    this.initPage(pageable);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        detail: function (name) {
            this.$router.push({ path: '/pollen', query: { name: name } });
        },
        chooseLable: function (type, event) {
            let vm = this;
            vm.$(event.target).parent().children("label").removeClass(".search_area .advanced_search_area table tr td input[type=radio]:checked+label");
            vm.$(event.target).attr("class", ".search_area .advanced_search_area table tr td input[type=radio]:checked+label");
            vm.pollen.family = event.target.innerHTML
        },
        initPage: function (pageData) {
            let vm = this;
            layui.use('laypage', function () {
                var laypage = layui.laypage;
                laypage.render({
                    elem: 'pollen_list_page',
                    count: pageData.total,
                    limit: pageData.limit,
                    layout: ['prev', 'page', 'next', 'count'],
                    jump: function (obj, first) {
                        if (!first) {
                            this.count = pageData.total;
                            vm.$set(vm.pollen, 'page', obj.curr);
                            vm.search();
                        }
                    }
                });
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  overflow: hidden;
  margin-top: 0;
  position: relative;
  outline: 1px solid #cccccc;
  outline-offset: -1px;
}

.search_area .search_input {
  line-height: 30px;
  position: relative;
}

.search_area .search_input:before {
  content: "";
  position: absolute;
  top: 7px;
  left: 7px;
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M128.39 126.866c164.054-162.085 430.016-162.085 594.094 0 151.47 149.656 162.938 385.068 34.703 547.88l67.125 66.298c10.938-3.75 22.688-2.047 30.344 5.61l156.375 154.437c11.516 11.422 9.797 31.562-3.89 45.03l-61.907 61.157c-13.625 13.547-34.047 15.266-45.593 3.89L743.297 856.732c-7.719-7.625-9.406-19.234-5.64-30.125l-68.907-68.015C504.728 874.075 275.562 859.2 128.39 713.794c-164.068-162.044-164.068-424.85 0-586.928zm86.641 501.365c116.188 114.797 304.625 114.797 420.797 0 116.203-114.828 116.203-300.943 0-415.781-116.203-114.812-304.61-114.797-420.797 0-116.212 114.806-116.212 300.956 0 415.781zM604.86 243.006c10.313 10.163 10.313 26.538 0 36.694-10.234 10.131-26.859 10.147-37.109 0l.031-.016c-78.772-77.515-205.968-77.515-284.672.016-10.24 10.131-26.896 10.131-37.109 0-10.256-10.14-10.234-26.531 0-36.678 99.125-97.913 259.75-97.913 358.86-.016z' fill='%23BBB'/%3E%3C/svg%3E");
  background-size: cover;
}

.search_area .search_input input[type="text"] {
  width: 594px;
  height: 28px;
  border: 1px solid #bbbbbb;
  outline: none;
  padding: 0;
  padding-left: 30px;
  line-height: 30px;
  vertical-align: middle;
}

.search_area input[type="button"] {
  width: 46px;
  height: 30px;
  background-color: #4faff4;
  border: none;
  color: #ffffff;
  font-size: 14px;
  line-height: 30px;
  vertical-align: middle;
  cursor: pointer;
}

.search_area .search_keyword {
  padding: 0 12px;
  margin: 8px 0 20px;
  font-size: 14px;
}

.search_area .search_keyword a {
  margin: 0 3px 0 2px;
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #cccccc;
  color: #808080;
  font-weight: bold;
  line-height: 15px;
  text-align: center;
}

.search_area .advanced_search_area {
  background-color: #f0f0f0;
}

.search_area .advanced_search_area .advanced_search_text {
  font-size: 14px;
  font-weight: bold;
  margin: 20px 0 10px;
  display: block;
  padding-left: 5px;
}

.search_area .advanced_search_area table {
  width: 100%;
}

.search_area .advanced_search_area table tr td {
  height: 37px;
  padding: 0 5px;
  border-bottom: 1px dashed #e4e4e4;
}

.search_area .advanced_search_area table tr td:nth-child(odd) {
  background-color: #dedede;
  font-size: 14px;
  text-align: center;
}

.search_area .advanced_search_area table tr td input[type="radio"] {
  display: none;
}

.search_area .advanced_search_area table tr td input[type="radio"] + label {
  font-size: 12px;
  padding: 8px 10px;
  cursor: pointer;
  display:inline-block;
  width:70px;
  text-align:center;
}
.search_area .advanced_search_area table tr td input[type="radio"]:checked + label {
  background-color: #4faff4;
  color: #ffffff;
}

#type_search {
  margin: 5px auto;
  display: block;
}

.pollen_list {
  margin-top: 30px;
  width: 100%;
  border-collapse: collapse;
}

.pollen_list tr:nth-child(odd) td {
  background-color: #eeeeee;
}

.pollen_list td {
  font-size: 14px;
  line-height: 124px;
}

.pollen_list td img {
  width: 120px;
  height: 80px;
  vertical-align: middle;
  margin-left: 15px;
}

.pollen_list td span {
  font-weight: bold;
}

.pollen_list td a {
  color: #000000;
}

.pollen_list td a:hover {
  text-decoration: underline;
}

#pollen_list_page {
  text-align: right;
  margin: 10px 0;
}

#pollen_list_page .layui-laypage > * {
  display: inline-block;
  margin-left: 4px;
  padding: 0 8px;
  height: 26px;
  line-height: 26px;
  font-size: 14px;
  border: 1px solid;
  border-color: #c2d5e3;
  background-color: #fff;
  color: #333;
  overflow: hidden;
  text-decoration: none;
}

#pollen_list_page .layui-laypage .layui-laypage-curr {
  background-color: #e5edf2;
}

#pollen_list_page .layui-laypage .layui-laypage-curr em {
  font-weight: bold;
  font-style: normal !important;
}
</style>