import{_ as s,c as n,o as a,a as p}from"./app.af28e0b7.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0A\u62A5\u52A9\u529B\u9636\u68AF\u5206\u4EAB","slug":"\u4E0A\u62A5\u52A9\u529B\u9636\u68AF\u5206\u4EAB","link":"#\u4E0A\u62A5\u52A9\u529B\u9636\u68AF\u5206\u4EAB","children":[]}],"relativePath":"api/share/uploadHelpStageShare/index.md"}'),l={name:"api/share/uploadHelpStageShare/index.md"},o=p(`<h2 id="\u4E0A\u62A5\u52A9\u529B\u9636\u68AF\u5206\u4EAB" tabindex="-1">\u4E0A\u62A5\u52A9\u529B\u9636\u68AF\u5206\u4EAB <a class="header-anchor" href="#\u4E0A\u62A5\u52A9\u529B\u9636\u68AF\u5206\u4EAB" aria-hidden="true">#</a></h2><p>\u793A\u4F8B</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> mxSdk</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">http</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/share/user/v1/uploadHelpStageShare</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u8BF7\u6C42\u5165\u53C2 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">requestData</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>requestData \u8BF7\u6C42\u5165\u53C2\u683C\u5F0F</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">requestData</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5206\u4EABid */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">shareId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u9080\u8BF7\u7528\u6237id */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">inviteRoleId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>response \u8FD4\u56DE\u53C2\u6570\u683C\u5F0F</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">response</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u72B6\u6001\u7801 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u670D\u52A1\u5668\u65F6\u95F4 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">serverTime</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u52A9\u529B\u5956\u52B1\u914D\u7F6E */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">helpAwardList</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ShareWrapListShareStageShareHelpAward</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ShareWrapListShareStageShareHelpAward</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u52A9\u529B\u5956\u52B1id */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">helpAwardId</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u52A9\u529B\u5956\u52B1\u7C7B\u578B */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">helpAwardType</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u52A9\u529B\u5956\u52B1\u53D1\u653E\u6570\u91CF</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">helpAwardSendCount</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u52B1\u540D\u79F0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardName</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u52B1\u56FE\u7247 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardImg</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u4EF7\u683C</span></span>
<span class="line"><span style="color:#676E95;">     * Format: double</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardPrice</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5956\u52B1\u5269\u4F59\u6570\u91CF</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardLeftCount</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u6570\u91CF\u662F\u5426\u662F\u65E0\u9650\u7684 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">isAwardCountInfinite</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5956\u52B1\u603B\u91CF</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardTotalCount</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function c(t,r,y,D,C,F){return a(),n("div",null,e)}const d=s(l,[["render",c]]);export{i as __pageData,d as default};
