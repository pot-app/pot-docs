import{_ as e,c as i,o as t,a6 as a}from"./chunks/framework.CuWwSu3D.js";const f=JSON.parse('{"title":"Pot","titleTemplate":"FAQ","description":"","frontmatter":{"title":"Pot","titleTemplate":"FAQ"},"headers":[],"relativePath":"en/docs/faq.md","filePath":"en/docs/faq.md"}'),o={name:"en/docs/faq.md"},s=a('<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><h2 id="windows-7-not-supported" tabindex="-1">Windows 7 Not Supported <a class="header-anchor" href="#windows-7-not-supported" aria-label="Permalink to &quot;Windows 7 Not Supported&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Windows 7 Not Supported</p><ul><li><p>Reason</p><p>Pot always uses the latest version of Rust for compilation, which no longer supports Windows 7.</p></li><li><p>Solution</p><p>Run using the <a href="https://github.com/vxiiduu/VxKex" target="_blank" rel="noreferrer">vxiiduu/VxKex</a> project. Follow these steps:</p><ol><li>Download <code>KexSetup_Release_x_x_x_xxxx.exe</code> from <a href="https://github.com/vxiiduu/VxKex/releases" target="_blank" rel="noreferrer">Releases</a> and install it.</li><li>Navigate to the Pot installation directory, right-click <code>pot.exe</code>, and open Properties.</li><li>Find the <code>VxKex</code> tab, check the options <code>Enable VxKex for this program</code> and <code>Disable VxKex for child processes</code>, then click Apply.</li><li>You can now use Pot normally.</li></ol></li></ul></div><h2 id="deleted-by-antivirus-software" tabindex="-1">Deleted by antivirus software <a class="header-anchor" href="#deleted-by-antivirus-software" aria-label="Permalink to &quot;Deleted by antivirus software&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Deleted by antivirus software</p><ul><li><p>Reason</p><p>The software has been falsely reported by some antivirus software. The author has encountered this issue twice but is still unsure of the specific reason. Looking at the issues on Tauri, there are also others who have experienced the same problem, but no specific reason has been found yet.</p></li><li><p>Solution</p><p>Restore in antivirus software and add the software to the whitelist.</p></li></ul></div><h2 id="system-webview2-has-been-disabled-or-removed-windows" tabindex="-1">System WebView2 has been disabled or removed (Windows) <a class="header-anchor" href="#system-webview2-has-been-disabled-or-removed-windows" aria-label="Permalink to &quot;System WebView2 has been disabled or removed (Windows)&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">System WebView2 has been disabled or removed (Windows)</p><ul><li><p>Reason</p><p>The Tauri framework relies on WebView2. If WebView2 is uninstalled or disabled, the interface will not be displayed. This will manifest as the application being able to launch, but there will be no response when clicking on the tray menu.</p></li><li><p>Solution</p><p>If Edge has been disabled using third-party software, please check if WebView2 has also been disabled at the same time. Please enable WebView2.</p><p>If WebView2 has been uninstalled, you can download the installation package from the Microsoft official website and reinstall WebView2.</p><p>If the enterprise edition system is inconvenient to install or cannot install WebView2, please try to download the fix WebView2 version <code>pot_{version}_{arch}_fix_webview2_runtime-setup.exe</code> at <a href="https://github.com/pot-app/pot-desktop/releases/latest" target="_blank" rel="noreferrer">Release</a></p><p>If the problem persists, try booting in Windows 7 compatibility mode.</p></li></ul></div><h2 id="configuration-file-format-error" tabindex="-1">Configuration file format error <a class="header-anchor" href="#configuration-file-format-error" aria-label="Permalink to &quot;Configuration file format error&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Configuration file format error</p><ul><li><p>Reason</p><p>If the configuration file format is incorrect due to various reasons (such as your own modifications or abnormal software termination), the software will not be able to start.</p></li><li><p>Solution</p><p>After backing up the configuration file, delete the original configuration file. When you open the application again, it will work normally.</p></li></ul></div><h2 id="nvidia-driver-issues-linux" tabindex="-1">Nvidia driver issues (Linux) <a class="header-anchor" href="#nvidia-driver-issues-linux" aria-label="Permalink to &quot;Nvidia driver issues (Linux)&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Nvidia driver issues (Linux)</p><ul><li><p>Reason</p><p>In the latest version of <a href="https://archlinux.org/packages/extra/x86_64/webkit2gtk" target="_blank" rel="noreferrer">Webkit2Gtk</a> (2.42.0), due to incomplete implementation of DMABUF by Nvidia proprietary drivers, there may be issues with startup failure and crashes.</p></li><li><p>Solution</p><p>If you encounter a &quot;Segmentation fault&quot; or Pot fails to start, please try adding the environment variable <code>WEBKIT_DISABLE_DMABUF_RENDERER=1</code> in <code>/etc/environment</code> (or any other place where environment variables can be set) to disable the use of DMABUF.</p></li></ul></div><h2 id="the-application-is-not-signed-macos" tabindex="-1">The application is not signed (MacOS) <a class="header-anchor" href="#the-application-is-not-signed-macos" aria-label="Permalink to &quot;The application is not signed (MacOS)&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">The application is not signed (MacOS)</p><ul><li><p>Reason</p><p>Due to the lack of a signature for the application, MacOS may display a message stating that the developer cannot be verified or that the application is damaged.</p></li><li><p>Solution</p><p>Click the <code>Cancel</code> button, then go to the <code>Settings -&gt; Privacy &amp; Security</code> page, click the <code>Still Open</code> button, and then click the <code>Open</code> button in the pop-up window. After that, there will be no more pop-up warnings when opening pot.</p><p>If you cannot find the above options in <code>Privacy &amp; Security</code>, or get error prompts such as broken files with Apple Silicon machines. Open <code>Terminal.app</code> and enter the following command (you may need to enter a password halfway through), then restart pot:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xattr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.apple.quarantine</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Applications/pot.app</span></span></code></pre></div></li></ul></div>',13),n=[s];function r(l,p,d,c,h,u){return t(),i("div",null,n)}const m=e(o,[["render",r]]);export{f as __pageData,m as default};