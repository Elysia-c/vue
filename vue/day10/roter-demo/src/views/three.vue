<!-- 视图层 -->
<template>
    <van-nav-bar
    title="VR"
    left-text=""
    left-arrow
    @click-left="onClickLeft"
    />
    <div class="rooms" ref="rooms"></div>
</template>
<!-- 逻辑层 -->
<script setup>
    // 1. 引入依赖包
import * as THREE from 'three'; // 引入threeJS
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; //
import { onMounted, ref } from 'vue'; // 引入ref
const onClickLeft = () => history.back();
//引入轨道控制器
let rooms = ref(null); // 获取DOM元素
// 2. 创建场景对象Scene
const scene = new THREE.Scene();
// 3.创建几何体及其纹理
//3.1 创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(10, 10, 10);
// 3.2 创建材质对象Material的相关纹理属性
geometry.scale(1, 1, -1); //三个方向上缩放
let roomIndex = 4; // 房间索引
let imgUrl = "./imgs/living/"; // 图片路径
let imgUrlList = [
    `${roomIndex}_l`,
    `${roomIndex}_r`,
    `${roomIndex}_u`,
    `${roomIndex}_d`,
    `${roomIndex}_b`,
    `${roomIndex}_f`,
];
let boxMaterialArr = []; // 存放材质对象的数组
// 设置纹理贴图
imgUrlList.forEach((item) => {
    const texture = new THREE.TextureLoader().load(imgUrl + item + ".jpg"); // 加载纹理贴图
    if (item === `${roomIndex}_u` || item === `${roomIndex}_d`) {
        texture.rotation = Math.PI; // 旋转180度
        texture.center = new THREE.Vector2(0.5, 0.5); // 设置旋转中心
    }
    boxMaterialArr.push(new THREE.MeshBasicMaterial({ map: texture })); // 存放材质对象
});
// 3.3 两个参数分别为几何体geometry、材质material
const mesh = new THREE.Mesh(geometry, boxMaterialArr); //网格模型对象Mesh
// 3.4 网格模型添加到场景中
scene.add(mesh);
// 4. 创建相机
const camera = new THREE.PerspectiveCamera(35, window.innerWidth /
window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 10);
// 5. 创建渲染器
// 5.1 创建渲染器对象
const renderer = new THREE.WebGLRenderer();
// 5.2 设置渲染器的大小
renderer.setSize(window.innerWidth, window.innerHeight);
// 5.3 渲染函数
function render() {
    //执行渲染操作
    renderer.render(scene, camera);
    // 渲染下一帧的时候就会调用render函数
    requestAnimationFrame(render); // 递归调用
}
// 4.5 挂载
onMounted(() => {

    // 挂载到DOM上
    rooms.value.appendChild(renderer.domElement);
    render(); // 执行渲染函数
});
// 6.创建轨道控制器
// 6.1 创建控件对象
const controls = new OrbitControls(camera, renderer.domElement);
// 6.2 设置控制器阻尼，让控制器更有真实效果,必须在动画循环里调用.update()。
controls.enableDamping = true;
// 监听画面变化，更新渲染画面
window.addEventListener('resize', () => {
    // 更新摄像头
    camera.aspect = window.innerWidth / window.innerHeight;
    // 更新摄像机的投影矩阵
    camera.updateProjectionMatrix();
    // 更新渲染器
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 设置渲染器的像素比
    renderer.setPixelRatio(window.devicePixelRatio);
});
</script>
<!-- 样式层 -->
<style scoped></style>