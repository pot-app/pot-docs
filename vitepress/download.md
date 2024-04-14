---
title: Pot
titleTemplate: 下载
layout: page
---

<script setup>
import { ref,computed } from 'vue'
import axios from 'axios'

const version = '2.7.10'

const download = (arch,ext)=>{
    if(ext === 'exe'){
        open(`https://gh.pylogmon.com/https://github.com/pot-app/pot-desktop/releases/download/${version}/pot_${version}_${arch}-setup.exe`)
    }else if(ext === 'dmg'){
        open(`https://gh.pylogmon.com/https://github.com/pot-app/pot-desktop/releases/download/${version}/pot_${version}_${arch}.dmg`)
    }else{
        open(`https://gh.pylogmon.com/https://github.com/pot-app/pot-desktop/releases/download/${version}/pot_${version}_${arch}.${ext}`)
    }
}
</script>

<h1 :class="$style.version">{{version}}</h1>

<div :class="$style.wrap">
    <div :class="$style.download">
        <div :class="$style.platform">
            <button :class="$style.button" @click="download('x64','exe')">
                Windows x64
                <Badge type="warning" text=".exe" />
            </button>
            <button :class="$style.button" @click="download('x86','exe')">
                Windows x86
                <Badge type="warning" text=".exe" />
            </button>
            <button :class="$style.button" @click="download('arm64','exe')">
                Windows arm64
                <Badge type="warning" text=".exe" />
            </button>
        </div>
        <div :class="$style.platform">
            <button :class="$style.button" @click="download('x64','dmg')">
                MacOS x64
                <Badge type="warning" text=".dmg" />
            </button>
            <button :class="$style.button" @click="download('aarch64','dmg')">
                MacOS aarch64
                <Badge type="warning" text=".dmg" />
            </button>
        </div>
        <div :class="$style.platform">
            <button :class="$style.button" @click="download('amd64','deb')">
                Linux x64
                <Badge type="warning" text=".deb" />
            </button>
            <button :class="$style.button" @click="download('i386','deb')">
                Linux x86
                <Badge type="warning" text=".deb" />
            </button>
            <button :class="$style.button" @click="download('arm64','deb')">
                Linux aarch64
                <Badge type="warning" text=".deb" />
            </button>
            <button :class="$style.button" @click="download('armhf','deb')">
                Linux armv7
                <Badge type="warning" text=".deb" />
            </button>
            <button :class="$style.button" @click="download('amd64','AppImage')">
                Linux x64
                <Badge type="warning" text=".AppImage" />
            </button>
        </div>
    </div>
</div>

<div :class="$style.warn">
    
:::warning 不知道该下载哪个？
查看 [安装指南](/docs/install)
:::

</div>

<style module>

.warn {
    width: 80%;
    margin: 0 auto;
    text-align: center;
}

.version {
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    margin: 50px 0;
    color: #ffc131;
}

.info {
width: 60%;
margin: 50px auto;
padding: 10px;
font-weight: bold;
font-size: 20px;
background-color: #ffc13140;
border-radius: 4px;
}

.wrap {
display: flex;
width: 100%;
justify-content: center;
}

.download {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-column-gap: 20px;
width: 80%;
}

.platform {
display: flex;
flex-direction: column;
justify-content: space-around;
}

.button {
min-width: 250px;
width: 100%;
height: 50px;
padding: 10px;
margin-bottom: 20px;
font-weight: bold;
font-size: 20px;
background-color: #288ae2;
border-radius: 6px;
}
</style>
