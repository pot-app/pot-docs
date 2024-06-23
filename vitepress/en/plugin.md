---
title: Pot
titleTemplate: Plugin List
layout: doc
editLink: false
---

<script setup>
import { ref,computed } from 'vue'
import axios from 'axios'

const info = ref({})

axios.get('https://gh.pylogmon.com/https://raw.githubusercontent.com/pot-app/pot-app-plugin-list/main/list.json').then(res => {
    info.value = res.data
})

const offical = "https://img.shields.io/badge/official-yellow.svg?logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48ZGVmcz48c3R5bGU+LmNscy0xIHtmaWxsOiAjMjNjOWRjO30uY2xzLTIge2ZpbGw6IHVybCgjZ3JhZGllbnQxKTt9LmNscy0zIHtmaWxsOiAjZmZjMTMxO30uY2xzLTQge2ZpbGw6IHVybCgjZ3JhZGllbnQyKTt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MiIgeDE9IjE1My44OSIgeTE9Ijg3MC4xMSIgeDI9Ijg3MC4xMSIgeTI9IjE1My44OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzBiNmE3NSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzg4NjYxMyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDEiIHgxPSI4OC4zMSIgeTE9IjQ3OC44NiIgeDI9IjQ1MS4zMyIgeTI9IjExNS44NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzIzYzlkYyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYzEzMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iMTAyIiB5PSIxMDIiIHdpZHRoPSI4MjAiIGhlaWdodD0iODIwIiByeD0iMTc3LjE1IiByeT0iMTc3LjE1Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNDU1LjUxLDgxMC45N2wtMTEuNDQtMTEzLjk2aC03NC4zNmwtMzkuNiwxMTMuOTZoLTQ3LjA4bDEzMi40NC0zNTUuNTJoNDYuNjRsMzkuNiwzNTUuNTJoLTQ2LjJabS01Mi4zNi0yMTEuMmwtMTkuMzYsNTUuNDRoNTUuODhsLTUuMjgtNTEuMDRjLS44OC03LjYyLTEuNzYtMTYuNS0yLjY0LTI2LjYycy0xLjY5LTIwLjI0LTIuNDItMzAuMzZjLS43NC0xMC4xMi0uOTYtMTguOTktLjY2LTI2LjYyLTIuMDYsNy42My00LjYyLDE2LjQzLTcuNywyNi40LTMuMDgsOS45OC02LjI0LDE5LjY2LTkuNDYsMjkuMDQtMy4yMyw5LjM5LTYuMDIsMTcuMzEtOC4zNiwyMy43NmgwWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTc2My4yNCwzNDguMDFoNTkuMjZsNi4xNy01Ni4xN2gtMTY3LjlsOC4wMi03OC4zOWgtNTYuNzlsLTguMDIsNzguMzloLTE2Ny45bC02LjE3LDU2LjE3aDU2LjE3di4wNGg1OS4yNnYtLjA0aDE1NS41NmMtMjEuNDEsNzIuNDMtNTAuNDIsMTM2LjQyLTg3LjA0LDE5MS45Ny0xMS4xOS0yMC43NC0yMS4zMi00Mi4zNy0zMC40MS02NC44OS05LjYyLTIzLjg1LTE4LjAyLTQ4LjczLTI1LjI4LTc0LjU5aC01OS45YzYuNTMsMjQuOSwxNC4wNiw0OS4zOSwyMi42OSw3My40MywxNC42LDQwLjc0LDMzLjAyLDgwLjI1LDU1LjI1LDExOC41Mi01Mi42OCw2NC42Mi0xMTkuNzUsMTE5LjU2LTIwMS4yMywxNjQuODFsMzAuMjUsNTMuN2M4MS40OC00NS4yNywxNDkuNTgtMTAwLjgxLDIwNC4zMi0xNjYuNjcsMjAuMTYsMjkuMjIsNDMuMSw1Ny41Miw2OC44Myw4NC44OCwyNS43MiwyNy4zNyw1NC40Miw1NC4wMSw4Ni4xMSw3OS45NGwzNS44LTQ5LjM4Yy0zMS4yOC0yNi4zMy01OS42OC01My4wOS04NS4xOS04MC4yNS0yNS41Mi0yNy4xNi00OC4xNS01NS4zNS02Ny45LTg0LjU3LDI0LjI3LTM0Ljk4LDQ1Ljg4LTcyLjk0LDY0LjgxLTExMy44OSwxOC45My00MC45NCwzNi04NS4yOCw1MS4yMy0xMzMuMDJoMFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Im0xOTQuNSwzNjkuOTljMC0xMC40MywxLjEtNjUuNzMsNDUuODEtMTEwLjQxLDQ0Ljc4LTQ0Ljc1LDEwMS4yOS00NS43NCwxMTEuNjktNDUuNzN2NjEuMjNjLTYwLjA5LjUtOTIuMDksNDQuOTItOTIuNTMsOTkuOWgtNjQuOTh2LTQuOThzLjAxLDAsLjAxLDBaIi8+PC9zdmc+"

const illegal = "https://img.shields.io/badge/illegal-grey"

</script>

# Plugin List

Pot app plugin collection from the community

<img style="display:inline" :src="offical"/> This plugin is <b>officially maintained</b>
<br/>
<img style="display:inline" :src="illegal"/> This plugin was implemented through <b>unconventional</b> means, Please decide for yourself whether to use it

## Template

<ul>
    <li v-for="item in info.template">
    <a :href="item.url" target="blank">{{ item.name }}</a><img v-if="item.offical" style="display:inline" :src="offical"/> <img v-if="item.illegal" style="display:inline" :src="illegal"/> - {{ item.desc_zh }}
    </li>
</ul>

## Translate

<ul>
    <li v-for="item in info.translate">
    <a :href="item.url" target="blank">{{ item.name }}</a> <img v-if="item.offical" style="display:inline" :src="offical"/> <img v-if="item.illegal" style="display:inline" :src="illegal"/> - {{ item.desc_zh }}
    </li>
</ul>

## Recognize

<ul>
    <li v-for="item in info.recognize">
    <a :href="item.url" target="blank">{{ item.name }}</a><img v-if="item.offical" style="display:inline" :src="offical"/> <img v-if="item.illegal" style="display:inline" :src="illegal"/> - {{ item.desc_zh }}
    </li>
</ul>

## TTS

<ul>
    <li v-for="item in info.tts">
    <a :href="item.url" target="blank">{{ item.name }}</a><img v-if="item.offical" style="display:inline" :src="offical"/> <img v-if="item.illegal" style="display:inline" :src="illegal"/> - {{ item.desc_zh }}
    </li>
</ul>

## Collection

<ul>
    <li v-for="item in info.collection">
    <a :href="item.url" target="blank">{{ item.name }}</a><img v-if="item.offical" style="display:inline" :src="offical"/> <img v-if="item.illegal" style="display:inline" :src="illegal"/> - {{ item.desc_zh }}
    </li>
</ul>
