<template>
    <div>
        <div class="detail main_container">
            <div class="position"><b>您的位置：</b>XXX>><a href="javascript:void(0);" v-on:click="home();">花粉图库</a>>><span id="pollen_name">{{pollen.name}}</span></div>
            <table>
                <colgroup>
                    <col width="50%">
                    <col width="50%">
                </colgroup>
                <tbody>
                    <tr>
                        <td><span>名称：</span>{{pollen.name}}</td>
                        <td><span>属性1：</span>{{pollen.name}}</td>
                    </tr>
                    <tr>
                        <td><span>属性2：</span>{{pollen.name}}</td>
                        <td><span>属性3：</span>{{pollen.name}}</td>
                    </tr>
                    <tr>
                        <td><span>属性4：</span>{{pollen.name}}</td>
                        <td><span>属性5：</span>{{pollen.name}}</td>
                    </tr>
                    <tr>
                        <td><span>属性6：</span>{{pollen.name}}</td>
                        <td><span>属性7：</span>{{pollen.name}}</td>
                    </tr>
                    <tr>
                        <td><span>属性8：</span>{{pollen.name}}</td>
                        <td><span>属性9：</span>{{pollen.name}}</td>
                    </tr>
                    <tr>
                        <td><span>属性10：</span>{{pollen.name}}</td>
                        <td><span>属性11：</span>{{pollen.name}}</td>
                    </tr>
                    <tr>
                        <td><span>属性12：</span>{{pollen.name}}</td>
                        <td><span>属性13：</span>{{pollen.name}}</td>
                    </tr>
                    <tr>
                        <td><span>属性14：</span>{{pollen.name}}</td>
                        <td><span>属性15：</span>{{pollen.name}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="picture main_container">
            <img v-for="image in pollen.images" :src="image" @click="showPicView(image)">
        </div>
        <div :class="{pic_view:true,show:picView}" @click="picView=false">
            <img :src="picViewSrc">
        </div>
    </div>
</template>

<script>
export default {
    name: 'pollen',
    data() {
        return {
            msg: '花粉',
            picView: false,
            picViewSrc: '',
            pollen: {}
        }
    },
    created: function () {
        this.$http.get('http://localhost:8081/search/pollen', {
            params: {
                id: this.$route.query.id
            }
        })
            .then(function (response) {
                this.pollen = response.body.data;
                console.log(this.pollen);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    methods: {
        showPicView: function (src) {
            this.picViewSrc = src;
            this.picView = true;
        },
        home: function () {
            this.$router.push({ path: '/pollens' });
        }
    }
}
</script>
<style scoped>
.main_container {
  width: 1000px;
  margin: auto;
}

.detail .position {
  font-size: 12px;
  padding: 10px;
}

.detail .position a {
  color: #000000;
}

.detail .position a:hover {
  text-decoration: underline;
}

.detail table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #cccccc;
}

.detail table td {
  border-bottom: 1px dashed #cccccc;
  font-size: 14px;
  color: #0faff4;
  font-weight: bold;
  padding: 5px 10px;
}

.detail table td span {
  color: #000000;
}

.picture {
  margin-top: 20px;
}

.picture img {
  padding: 2px;
  border: 1px solid #cccccc;
  width: 150px;
  height: 100px;
  margin: 5px;
}

.pic_view {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
}

.pic_view.show {
  display: block;
}

.pic_view img {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 5px solid #fff;
  transform: translateX(-50%) translateY(-50%);
}
</style>
