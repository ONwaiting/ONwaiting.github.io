import{_ as s,c as n,o as a,a as p}from"./app.af28e0b7.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"C\u7AEF\u67E5\u8BE2\u6295\u653E\u7BA1\u7406\u5185\u5BB9","slug":"c\u7AEF\u67E5\u8BE2\u6295\u653E\u7BA1\u7406\u5185\u5BB9","link":"#c\u7AEF\u67E5\u8BE2\u6295\u653E\u7BA1\u7406\u5185\u5BB9","children":[]}],"relativePath":"api/advert/getList/index.md"}'),l={name:"api/advert/getList/index.md"},o=p(`<h2 id="c\u7AEF\u67E5\u8BE2\u6295\u653E\u7BA1\u7406\u5185\u5BB9" tabindex="-1">C\u7AEF\u67E5\u8BE2\u6295\u653E\u7BA1\u7406\u5185\u5BB9 <a class="header-anchor" href="#c\u7AEF\u67E5\u8BE2\u6295\u653E\u7BA1\u7406\u5185\u5BB9" aria-hidden="true">#</a></h2><p>C\u7AEF\u8BF7\u6C42\u7684\u65F6\u5019 \u6570\u636E\u6709\u4E00\u4E2A1\u5206\u949F\u7684\u7F13\u5B58\uFF0C\u53D8\u66F4\u4FE1\u606F1\u5206\u949F\u5185\u751F\u6548</p><p>\u793A\u4F8B</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> mxSdk</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">http</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/advert/user/v1/output/list</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u8BF7\u6C42\u5165\u53C2 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">requestData</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>requestData \u8BF7\u6C42\u5165\u53C2\u683C\u5F0F</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">requestData</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u6295\u653E\u7EC4id */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sId</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u6295\u653E\u4F4D\u7F6E */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sPos</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5F00\u59CB\u65F6\u95F4 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">iBeginTime</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u7ED3\u675F\u65F6\u95F4 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">iEndTime</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** </span></span>
<span class="line"><span style="color:#676E95;">     * \u5F53\u524D\u8425\u9500\u80FD\u529B\u72B6\u6001  </span></span>
<span class="line"><span style="color:#676E95;">     * - unknow: \u672A\u77E5 </span></span>
<span class="line"><span style="color:#676E95;">     * - running: \u6295\u653E\u4E2D </span></span>
<span class="line"><span style="color:#676E95;">     * - finish: \u5DF2\u7ED3\u675F </span></span>
<span class="line"><span style="color:#676E95;">     * - wait: \u5F85\u6295\u653E </span></span>
<span class="line"><span style="color:#676E95;">     * - pause: \u53D6\u6D88\u6295\u653E </span></span>
<span class="line"><span style="color:#676E95;">     **/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">eStatus</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u6240\u5904\u9875\u9762\u6570 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">page</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5355\u9875\u6570\u636E\u6761\u6570 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pageSize</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u6295\u653E\u540D\u5B57 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sName</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>response \u8FD4\u56DE\u53C2\u6570\u683C\u5F0F</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">response</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5E7F\u544A\u6295\u653E\u6570\u636E */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IMX_AdvertConfigInfoItem</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u603B\u9875\u6570 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">totalPage</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u603B\u6761\u6570 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">totalSize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5F53\u524D\u9875\u9762\u6570 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">current</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5F53\u524D\u6761\u6570 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">limit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u72B6\u6001\u7801 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u670D\u52A1\u5668\u65F6\u95F4 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">serverTime</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u9519\u8BEF\u4FE1\u606F */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function c(t,r,y,D,C,F){return a(),n("div",null,e)}const d=s(l,[["render",c]]);export{i as __pageData,d as default};
