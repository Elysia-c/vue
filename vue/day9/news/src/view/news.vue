<!-- 视图层 -->
<template>
    <div class="top">
        <button>
            <van-icon name="arrow-left" />
        </button>
        <span class="name">张璇</span>
        <div class="evaluate">
            <span>评价</span>
            <van-icon name="manager-o" />
        </div>
    </div>
    <div class="chatting-records">
        <div class="imgList">
            <div class="head-portrait">
                <img src="../assets/tx5.jpg" alt="">
            </div>
            <div class="info">
                <div class="title">
                    板楼交通便利精装可拎包入住
                    满五 双卫格局 环境优美
                </div>
                <div class="details">
                    <div class="img">
                        <img src="../assets/images/esf8.jpg" alt="">
                    </div>
                    <div class="condition">
                        <div>4室2厅2卫119.15平</div>
                        <div class="area">132.8万</div>
                    </div>
                </div>
                <div class="good">
                    <span>安选</span>
                    <span>二手房</span>
                </div>
                <div class="voice">
                    <span>足不出户,专家讲解</span>
                    <button>语音带看</button>
                </div>
            </div>
            <div class="read">
                <span>已读</span>
            </div>
        </div>
        <div class="warning">
            <div>
                温馨提示:平台不会以官方客服身份发送不明跳转链接、二维码支付及其他联系方式,遇到问题建议在线举报,如果遇到钱财损失,建议您立即报警
            </div>
        </div>
        <div class="time">
            07-10 18:20
        </div>
        <div class="img-list">
            <div class="head-portrait">
                <img src="../assets/tx4.jpg" alt="">
            </div>
            <div class="chat">
                <span>你好，这套房子还在的</span>
            </div>
        </div>
        <div class="img-list">
            <div class="head-portrait">
                <img src="../assets/tx4.jpg" alt="">
            </div>
            <div class="chat">
                <span>老板，您这边是要租房还是要买房?</span>
            </div>
        </div>
        <div class="img-list">
            <div class="head-portrait">
                <img src="../assets/tx4.jpg" alt="">
            </div>
            <div class="chat">
                <span>我看您这边是找房预算是5到8千</span>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="scroll-bar">
            <div>常用语</div>
            <div>购房意向</div>
            <div>电话咨询</div>
            <div>购房百科</div>
            <div>视频语句</div>
        </div>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>
</script>

<!-- 样式层 -->
<style lang="less" scoped>
.top{
    display: flex;
    justify-content: space-between;
    height: 9vw;
    font-size: 5vw;
    align-items: center;
    button{
        margin-left: 2vw;
        border: none;
        background-color: transparent;
    }
    .name{
        font-weight: bold;
    }
    .evaluate{
        span{
            color: #78998e;
        }
        margin-right: 2vw;
    }
}
.chatting-records{
    background-color: #e7eced;
    height: 100vh;
    .imgList{
        display: flex;
        flex-direction: row-reverse;
        margin: 2vw;
        .head-portrait{
            img{
                width: 12vw;
                height: 12vw;
                margin-top: 2vw;
                border-radius: 6vw;
            }
        }
        .info{
            width: 60vw;
            padding: 2vw;
            margin: 2vw;
            border-radius: 2vw;
            background-color: #fff;
            .title{
                font-size: 4vw;
                font-weight: bold;
            }
            .details{
                display: flex;
                font-size: 4vw;
                .img{
                    display: flex;
                    align-items: center;
                    img{
                        width: 10vw;
                        height: 8vw;
                    }
                }
                .condition{
                    .area{
                        color: #c5947c;
                    }
                }
            }
            .good{
                span{
                    font-size: 2vw;
                    margin-right: 2vw;
                    margin-top: 1vw;
                    background-color: #f1f1f2;
                }
            }
            .voice{
                font-size: 2vw;
                display: flex;
                justify-content: space-between;
                margin-top: 1vw;
                button{
                    padding: 1vw;
                    border: none;
                    background-color: #5bc698;
                    color: #fff;
                    border-radius: 1vw;
                }
            }
        }
        .read{
            display: flex;
            align-items: end;
        }
    }
}
.warning{
    display: flex;
    justify-content: center;
    div{
        width: 80vw;
        text-align: center;
        font-size: 2vw;
        margin-top: 2vw;
        color: #b2b7b8;
    }
}
.time{
    text-align: center;
    color: #b2b7b8;
    margin-top: 3vw;
    font-size: 2vw;
}
.img-list{
    display: flex;
    margin-top: 2vw;
    align-items: center;
    .head-portrait{
        img{
            width: 12vw;
            height: 12vw;
            margin-top: 2vw;
            border-radius: 6vw;
        }
    }
    .chat{
        border-radius: 1vw;
        display: flex;
        margin: 2vw;
        font-size: 2vw;
        align-items: center;
        height: 8vw;
        padding: 1vw;
        background-color: #fff;
    }
}
.footer{
    position:fixed;
    left: 0;
    bottom: 0;
    .scroll-bar{
        display: flex;
        overflow-x: scroll;
        div{
            margin-left: 20px;
            font-size: 12px;
            height: 20px;
            padding: 10px;
        }
    }
}
</style>