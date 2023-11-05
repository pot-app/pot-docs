---
title: Pot
titleTemplate: About
layout: doc
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
const emailIcon = '<svg viewBox="0.48 0.48 23.04 23.04"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>'

const members = [
  {
    avatar: 'https://www.github.com/pylogmon.png',
    name: 'Pylogmon',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Pylogmon' },
      { icon: {svg: emailIcon }, link:'mailto:pylogmon@pot-app.com' }
    ]
  },
  {
    avatar: 'https://www.github.com/ccslykx.png',
    name: 'Ccslykx',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/ccslykx' },
      { icon: {svg: emailIcon }, link:'mailto:ccslykx@pot-app.com' }
    ]
  },
  {
    avatar: 'https://www.github.com/xtyuns.png',
    name: 'xtyuns',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/xtyuns' },
      { icon: {svg: emailIcon }, link:'mailto:xtyuns@pot-app.com' }
    ]
  },
  {
    avatar: 'https://www.github.com/Layouwen.png',
    name: 'Avan',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/Layouwen' },
      { icon: {svg: emailIcon }, link:'mailto:avan@pot-app.com' }
    ]
  },
  {
    avatar: 'https://www.github.com/Integral-Tech.png',
    name: 'Integral',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/Integral-Tech' },
      { icon: {svg: emailIcon }, link:'mailto:integral@pot-app.com' }
    ]
  }
]
</script>

# About

## Our team members

<VPTeamMembers size="small" :members="members" />

## More contributors

<img src='https://github.com/pot-app/.github/blob/master/pot-desktop-contributions.svg?raw=true' alt='contributors' style='width: 100%' />
