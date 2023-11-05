---
title: Pot
titleTemplate: 关于
layout: doc
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
const emailIcon = '<svg viewBox="0.48 0.48 23.04 23.04"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>'
const moneyIcon = '<svg viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-9v-1h3v-2h-2.586l2.122-2.121-1.415-1.415L12 8.586 9.879 6.464 8.464 7.88 10.586 10H8v2h3v1H8v2h3v2h2v-2h3v-2h-3z"></path></svg>'

const members = [
  {
    avatar: 'https://www.github.com/pylogmon.png',
    name: 'Pylogmon',
    title: '发起者',
    links: [
      { icon: 'github', link: 'https://github.com/Pylogmon' },
      { icon: {svg: emailIcon }, link:'mailto:pylogmon@pot-app.com' },
      { icon: {svg: moneyIcon }, link:'https://afdian.net/a/pylogmon' }
    ]
  },
  {
    avatar: 'https://www.github.com/ccslykx.png',
    name: 'Ccslykx',
    title: '成员',
    links: [
      { icon: 'github', link: 'https://github.com/ccslykx' },
      { icon: {svg: emailIcon }, link:'mailto:ccslykx@pot-app.com' }
    ]
  },
  {
    avatar: 'https://www.github.com/xtyuns.png',
    name: 'xtyuns',
    title: '成员',
    links: [
      { icon: 'github', link: 'https://github.com/xtyuns' },
      { icon: {svg: emailIcon }, link:'mailto:xtyuns@pot-app.com' }
    ]
  },
  {
    avatar: 'https://www.github.com/Layouwen.png',
    name: 'Avan',
    title: '成员',
    links: [
      { icon: 'github', link: 'https://github.com/Layouwen' },
      { icon: {svg: emailIcon }, link:'mailto:avan@pot-app.com' }
    ]
  },
  {
    avatar: 'https://www.github.com/Integral-Tech.png',
    name: 'Integral',
    title: '成员',
    links: [
      { icon: 'github', link: 'https://github.com/Integral-Tech' },
      { icon: {svg: emailIcon }, link:'mailto:integral@pot-app.com' }
    ]
  }
]
</script>

# 关于

## 我们的团队成员

<VPTeamMembers size="small" :members="members" />

## 更多贡献者

<img src='https://github.com/pot-app/.github/blob/master/pot-desktop-contributions.svg?raw=true' alt='贡献者' style='width: 100%' />
