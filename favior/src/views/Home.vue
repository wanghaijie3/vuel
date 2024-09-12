<template>
    <div>
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                       <div class="card-container">
                        <div>
                            <img class="img-style" src="../assets/images/user.jpg" >
                        </div>
                        <div class="user-style">
                             <p class="account-name">Admin</p>
                             <p class="role-name">超级管理员</p>
                        </div>
                       </div>
                       <div class="login-style">
                        <p>上次登录时间：<span>2024-09-12</span></p>
                        <p>上次登录地点：<span>武汉</span></p>
                       </div>
                        </el-card>
                </div>
                <div class="table-style">
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        <el-table-column
                        prop="name"
                        label="品牌">
                        </el-table-column>
                        <el-table-column
                        prop="todayBuy"
                        label="今日购买"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="monthBuy"
                        label="本月购买">
                        </el-table-column>
                        <el-table-column
                        prop="totalBuy"
                        label="总购买">
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="grid-content bg-purple-light">
                    <div class="num" >
                        <el-card class="card" v-for="item in cardData" :key="item.name" :body-style="{display:'flex'}">
                            <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
                            <div class="detail">
                                <p class="price">￥ {{item.value}}</p>
                                <p class="name">{{item.name}}</p>
                            </div>
                        </el-card>
                    </div>

                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData:[{
                name:'oppo',
                todayBuy:'100',
                monthBuy:'200',
                totalBuy:'300'
            },
            {
                name:'apple',
                todayBuy:'100',
                monthBuy:'200',
                totalBuy:'300'
            },
            {
                name:'xiaomi',
                todayBuy:'100',
                monthBuy:'200',
                totalBuy:'300'
            },
            {
                name:'hw',
                todayBuy:'100',
                monthBuy:'200',
                totalBuy:'300'
            },
            {
                name:'sansang',
                todayBuy:'100',
                monthBuy:'200',
                totalBuy:'300'
            }],
            cardData:[{
                name:"本月支付订单",
                value:1234,
                icon:"success",
                color:"#2ec7c9",
            },
            {
                name:"本月收藏订单",
                value:234,
                icon:"star-on",
                color:"#ffb980",
            },
            {
                name:"本月未支付订单",
                value:1234,
                icon:"s-goods",
                color:"#5ab1ef",
            },
            {
                name:"本月支付订单",
                value:1234,
                icon:"success",
                color:"#2ec7c9",
            },
            {
                name:"本月支付订单",
                value:1234,
                icon:"success",
                color:"#2ec7c9",
            },
            {
                name:"本月支付订单",
                value:1234,
                icon:"success",
                color:"#2ec7c9",
            }]
        }
    }
}
</script>

<style lang="less" scoped>
    .card-container {
        display: flex;
        align-items: center;
        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
        .user-style {
            .account-name {
                font-size: 20px;
                margin-bottom: 10px;
            }
            .role-name {
                color: #999999;
                font-size: 16px;
            }
            margin-left: 40px;
        }
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }
    .login-style {
        margin-top: 10px;
        p {
            font-size: 14px;
            line-height: 28px;
            color: #999999;
        }
        span {
            margin-left: 40px;
            color: #666666;
        }
    }

    .table-style{
        .el-table {
            margin-top: 40px;
        }
    }

    .num{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-left: 10px;

        .card{
            margin-bottom: 20px;
            width: 32%;
            padding: 0;
        }
     
        .icon{
            text-align: center;
            width: 80px;
            height: 80px;
            font-size: 30px;
            line-height: 80px;
            color: aliceblue;
        }
        .detail{
        
            display: flex;
            flex-direction: column;
            justify-content: center;

            .price{
                font-size: 30px;
                line-height: 30px;
                margin-bottom: 10px;
                height: 30px;
            }

            .name{
                font-size: 14px;
                color: #ccc;
                text-align: center;
            }

        }
    }
</style>