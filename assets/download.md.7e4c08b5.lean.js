import{_ as r,C as m,o as u,c as $,k as e,t as b,n,a as s,H as p}from"./chunks/framework.d227d6bf.js";const w="_warn_1nrxv_3",v="_version_1nrxv_9",y="_info_1nrxv_17",g="_wrap_1nrxv_27",x="_download_1nrxv_33",c="_platform_1nrxv_40",f="_button_1nrxv_46",k={warn:w,version:v,info:y,wrap:g,download:x,platform:c,button:f},C=e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"不知道该下载哪个？"),e("p",null,[s("查看 "),e("a",{href:"/docs/install.html"},"安装指南")])],-1),_=[C],P=JSON.parse('{"title":"Pot","titleTemplate":"下载","description":"","frontmatter":{"title":"Pot","titleTemplate":"下载","layout":"page"},"headers":[],"relativePath":"download.md","filePath":"download.md"}'),B={name:"download.md"},L=Object.assign(B,{setup(N){const i="3.0.5",l=(o,t)=>{open(t==="exe"?`https://dl.pot-app.com/https://github.com/pot-app/pot-desktop/releases/download/${i}/pot_${i}_${o}-setup.exe`:t==="dmg"?`https://dl.pot-app.com/https://github.com/pot-app/pot-desktop/releases/download/${i}/pot_${i}_${o}.dmg`:`https://dl.pot-app.com/https://github.com/pot-app/pot-desktop/releases/download/${i}/pot_${i}_${o}.${t}`)};return(o,t)=>{const a=m("Badge");return u(),$("div",null,[e("h1",{class:n(o.$style.version)},b(i),2),e("div",{class:n(o.$style.wrap)},[e("div",{class:n(o.$style.download)},[e("div",{class:n(o.$style.platform)},[e("button",{class:n(o.$style.button),onClick:t[0]||(t[0]=d=>l("x64","exe"))},[s(" Windows x64 "),p(a,{type:"warning",text:".exe"})],2),e("button",{class:n(o.$style.button),onClick:t[1]||(t[1]=d=>l("x86","exe"))},[s(" Windows x86 "),p(a,{type:"warning",text:".exe"})],2),e("button",{class:n(o.$style.button),onClick:t[2]||(t[2]=d=>l("arm64","exe"))},[s(" Windows arm64 "),p(a,{type:"warning",text:".exe"})],2)],2),e("div",{class:n(o.$style.platform)},[e("button",{class:n(o.$style.button),onClick:t[3]||(t[3]=d=>l("x64","dmg"))},[s(" MacOS x64 "),p(a,{type:"warning",text:".dmg"})],2),e("button",{class:n(o.$style.button),onClick:t[4]||(t[4]=d=>l("aarch64","dmg"))},[s(" MacOS aarch64 "),p(a,{type:"warning",text:".dmg"})],2)],2),e("div",{class:n(o.$style.platform)},[e("button",{class:n(o.$style.button),onClick:t[5]||(t[5]=d=>l("amd64","deb"))},[s(" Linux x64 "),p(a,{type:"warning",text:".deb"})],2),e("button",{class:n(o.$style.button),onClick:t[6]||(t[6]=d=>l("i386","deb"))},[s(" Linux x86 "),p(a,{type:"warning",text:".deb"})],2),e("button",{class:n(o.$style.button),onClick:t[7]||(t[7]=d=>l("arm64","deb"))},[s(" Linux aarch64 "),p(a,{type:"warning",text:".deb"})],2),e("button",{class:n(o.$style.button),onClick:t[8]||(t[8]=d=>l("armhf","deb"))},[s(" Linux armv7 "),p(a,{type:"warning",text:".deb"})],2),e("button",{class:n(o.$style.button),onClick:t[9]||(t[9]=d=>l("amd64","AppImage"))},[s(" Linux x64 "),p(a,{type:"warning",text:".AppImage"})],2)],2)],2)],2),e("div",{class:n(o.$style.warn)},_,2)])}}}),M={$style:k},S=r(L,[["__cssModules",M]]);export{P as __pageData,S as default};