import{_ as e,o,c as s,Q as a}from"./chunks/framework.d227d6bf.js";const y=JSON.parse('{"title":"Pot","titleTemplate":"Wayland","description":"","frontmatter":{"title":"Pot","titleTemplate":"Wayland"},"headers":[],"relativePath":"en/docs/wayland.md","filePath":"en/docs/wayland.md"}'),t={name:"en/docs/wayland.md"},n=a(`<h1 id="wayland" tabindex="-1">Wayland <a class="header-anchor" href="#wayland" aria-label="Permalink to &quot;Wayland&quot;">​</a></h1><p>Due to the varying levels of support for Wayland among different distributions, pot itself cannot achieve perfect compatibility. Here are some solutions to common issues that can be implemented through proper configuration, allowing pot to run perfectly on Wayland.</p><h2 id="shortcut-can-t-be-used" tabindex="-1">Shortcut can&#39;t be used <a class="header-anchor" href="#shortcut-can-t-be-used" aria-label="Permalink to &quot;Shortcut can&#39;t be used&quot;">​</a></h2><p>Due to the fact that Tauri&#39;s shortcut scheme does not support Wayland, the shortcut settings within the pot application cannot be used under Wayland. You can set system shortcuts to trigger pot by sending a request with curl. For more details, please refer to <a href="/en/docs/invoke.html">External Calls</a>.</p><h2 id="screenshot-cannot-be-used" tabindex="-1">Screenshot cannot be used <a class="header-anchor" href="#screenshot-cannot-be-used" aria-label="Permalink to &quot;Screenshot cannot be used&quot;">​</a></h2><p>In some pure Wayland DE/WM (such as Hyprland), the built-in screenshot feature of pot cannot be used. In this case, you can use other screenshot tools instead. For more details, please refer to <a href="/en/docs/invoke.html#ocr-without-internal-screenshot">OCR without internal screenshot</a>.</p><p>Below is an example of configuration in Hyprland (capturing screenshots using <code>grim</code> and <code>slurp</code>):</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">bind</span><span style="color:#E1E4E8;"> = ALT, X, exec, grim -g </span><span style="color:#9ECBFF;">&quot;$(slurp)&quot;</span><span style="color:#E1E4E8;"> ~/.cache/com.pot-app.desktop/pot_screenshot_cut.png &amp;&amp; curl </span><span style="color:#9ECBFF;">&quot;127.0.0.1:60828/ocr_recognize?screenshot=false&quot;</span></span>
<span class="line"><span style="color:#F97583;">bind</span><span style="color:#E1E4E8;"> = ALT, C, exec, grim -g </span><span style="color:#9ECBFF;">&quot;$(slurp)&quot;</span><span style="color:#E1E4E8;"> ~/.cache/com.pot-app.desktop/pot_screenshot_cut.png &amp;&amp; curl </span><span style="color:#9ECBFF;">&quot;127.0.0.1:60828/ocr_translate?screenshot=false&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">bind</span><span style="color:#24292E;"> = ALT, X, exec, grim -g </span><span style="color:#032F62;">&quot;$(slurp)&quot;</span><span style="color:#24292E;"> ~/.cache/com.pot-app.desktop/pot_screenshot_cut.png &amp;&amp; curl </span><span style="color:#032F62;">&quot;127.0.0.1:60828/ocr_recognize?screenshot=false&quot;</span></span>
<span class="line"><span style="color:#D73A49;">bind</span><span style="color:#24292E;"> = ALT, C, exec, grim -g </span><span style="color:#032F62;">&quot;$(slurp)&quot;</span><span style="color:#24292E;"> ~/.cache/com.pot-app.desktop/pot_screenshot_cut.png &amp;&amp; curl </span><span style="color:#032F62;">&quot;127.0.0.1:60828/ocr_translate?screenshot=false&quot;</span></span></code></pre></div><p>Other desktop environments/window managers also have similar operations.</p><h2 id="the-translation-window-follows-the-mouse-position" tabindex="-1">The translation window follows the mouse position <a class="header-anchor" href="#the-translation-window-follows-the-mouse-position" aria-label="Permalink to &quot;The translation window follows the mouse position&quot;">​</a></h2><p>Due to the current inability of pot to obtain correct mouse coordinates under Wayland, its internal implementation cannot work. For certain desktop environments/window managers, window rules can be set to achieve window following mouse position. Here we take Hyprland as an example:</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">windowrulev2</span><span style="color:#E1E4E8;"> = float, class:(pot), title:(Translator|OCR|PopClip|Screenshot Translate) </span><span style="color:#6A737D;"># Translation window floating</span></span>
<span class="line"><span style="color:#F97583;">windowrulev2</span><span style="color:#E1E4E8;"> = move cursor 0 0, class:(pot), title:(Translator|PopClip|Screenshot Translate) </span><span style="color:#6A737D;"># Translation window follows the mouse position.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">windowrulev2</span><span style="color:#24292E;"> = float, class:(pot), title:(Translator|OCR|PopClip|Screenshot Translate) </span><span style="color:#6A737D;"># Translation window floating</span></span>
<span class="line"><span style="color:#D73A49;">windowrulev2</span><span style="color:#24292E;"> = move cursor 0 0, class:(pot), title:(Translator|PopClip|Screenshot Translate) </span><span style="color:#6A737D;"># Translation window follows the mouse position.</span></span></code></pre></div>`,12),l=[n];function r(p,c,i,d,u,h){return o(),s("div",null,l)}const w=e(t,[["render",r]]);export{y as __pageData,w as default};