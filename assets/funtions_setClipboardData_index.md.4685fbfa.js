import{_ as t,c as s,o as a,a as l}from"./app.af28e0b7.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"mxSdk.setClipboardData(OBJECT)","slug":"mxsdk-setclipboarddata-object","link":"#mxsdk-setclipboarddata-object","children":[]}],"relativePath":"funtions/setClipboardData/index.md"}'),e={name:"funtions/setClipboardData/index.md"},n=l(`<p><strong>\u526A\u8D34\u677F</strong></p><h3 id="mxsdk-setclipboarddata-object" tabindex="-1">mxSdk.setClipboardData(OBJECT) <a class="header-anchor" href="#mxsdk-setclipboarddata-object" aria-hidden="true">#</a></h3><p>\u8BBE\u7F6E\u7CFB\u7EDF\u526A\u8D34\u677F\u7684\u5185\u5BB9\u3002</p><p><strong>OBJECT \u53C2\u6570\u8BF4\u660E</strong></p><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u5FC5\u586B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;">String</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">\u9700\u8981\u8BBE\u7F6E\u7684\u5185\u5BB9</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td><td style="text-align:left;"></td></tr></tbody></table><p><strong>\u793A\u4F8B</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mxSdk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setClipboardData</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,7),o=[n];function p(c,r,d,i,y,D){return a(),s("div",null,o)}const x=t(e,[["render",p]]);export{C as __pageData,x as default};