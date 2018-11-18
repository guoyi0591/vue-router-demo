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
                                    <div class="item_limit">
                                        <div class="more" @click="toggleSearchItem($event)"></div>
                                        <template v-for="(lable, index) in lables.family">
                                            <input v-if="index === 0" type="radio" name="family" :id="'family_'+index" value="0" checked>
                                            <input v-else type="radio" name="family" :id="'family_'+index" value="0">
                                            <label :for="'family_'+index" v-on:click="chooseLable('family', $event);">{{lable}}</label>
                                        </template>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="button" value="搜索" id="type_search" v-on:click="search();">
                </div>
            </div>
        </div>

        <div>
            <table class="pollen_list">
                <colgroup>
                    <col width="150">
                    <col width="280">
                    <col>
                </colgroup>
                <tbody>
                    <tr v-for="pollen in pollens">
                        <td><img :src="pollen.url" :alt="pollen.chineseName" /></td>
                        <td><span>原文名称：</span><a href="javascript:void(0);" v-on:click="detail(pollen.id);">{{pollen.name}}</a></td>
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
            pollens: [],
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
        detail: function (id) {
            this.$router.push({ path: '/pollen', query: { id: id } });
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
                    curr: pageData.page,
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
        },
        toggleSearchItem:function(event){
            let vm=this;
            vm.$(event.target).parent().toggleClass('show');
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
  padding: 0 5px;
  border-bottom: 1px dashed #e4e4e4;
}

.search_area .advanced_search_area table tr td:nth-child(odd) {
  background-color: #dedede;
  font-size: 14px;
  text-align: center;
}
.search_area .advanced_search_area table tr td .item_limit{
    overflow:hidden;
    height:32px;
    transition: height .2S;
}
.search_area .advanced_search_area table tr td .item_limit .more{
    display:inline-block;
    float: right;
    font-size: 12px;
    line-height:32px;
    color: #4FAFF4;
    padding:0 10px 0 25px;
    cursor: pointer;
    position: relative;
}
.search_area .advanced_search_area table tr td .item_limit .more:before{
    content: '更多';
}
.search_area .advanced_search_area table tr td .item_limit .more:after{
    content: '';
    width: 7px;
    height: 7px;
    border-top: 1px solid #4faff4;
    border-right: 1px solid #4faff4;
    position: absolute;
    top: 10px;
    left: 10px;
    transform: rotate(135deg);
}
.search_area .advanced_search_area table tr td .item_limit.show{
    height: auto !important;
}
.search_area .advanced_search_area table tr td .item_limit.show .more:before{
    content: '收起';
}
.search_area .advanced_search_area table tr td .item_limit.show .more:after{
    content: '';
    width: 7px;
    height: 7px;
    border-top: 1px solid #4faff4;
    border-right: 1px solid #4faff4;
    position: absolute;
    top: 14px;
    left: 10px;
    transform: rotate(-45deg);
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
</style>
<style>
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
#pollen_list_page .layui-laypage .layui-laypage-count {
    border: none;
}
</style>