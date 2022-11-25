import{_ as s,c as n,o as a,a as p}from"./app.af28e0b7.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"mxSdk.postMessage(OBJECT)","slug":"mxsdk-postmessage-object","link":"#mxsdk-postmessage-object","children":[]}],"relativePath":"funtions/postMessage/index.md"}'),l={name:"funtions/postMessage/index.md"},o=p(`<h3 id="mxsdk-postmessage-object" tabindex="-1">mxSdk.postMessage(OBJECT) <a class="header-anchor" href="#mxsdk-postmessage-object" aria-hidden="true">#</a></h3><h4 id="\u5411\u5C0F\u7A0B\u5E8F\u53D1\u9001\u6D88\u606F" tabindex="-1">\u5411\u5C0F\u7A0B\u5E8F\u53D1\u9001\u6D88\u606F <a class="header-anchor" href="#\u5411\u5C0F\u7A0B\u5E8F\u53D1\u9001\u6D88\u606F" aria-hidden="true">#</a></h4><h4 id="\uFF08\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF09\uFF1A\u4F1A\u5728\u7279\u5B9A\u65F6\u673A\uFF08\u5C0F\u7A0B\u5E8F\u540E\u9000\u3001\u7EC4\u4EF6\u9500\u6BC1\u3001\u5206\u4EAB\uFF09\u89E6\u53D1\u7EC4\u4EF6\u7684-message-\u4E8B\u4EF6" tabindex="-1">\uFF08\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF09\uFF1A\u4F1A\u5728\u7279\u5B9A\u65F6\u673A\uFF08\u5C0F\u7A0B\u5E8F\u540E\u9000\u3001\u7EC4\u4EF6\u9500\u6BC1\u3001\u5206\u4EAB\uFF09\u89E6\u53D1\u7EC4\u4EF6\u7684 message \u4E8B\u4EF6 <a class="header-anchor" href="#\uFF08\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF09\uFF1A\u4F1A\u5728\u7279\u5B9A\u65F6\u673A\uFF08\u5C0F\u7A0B\u5E8F\u540E\u9000\u3001\u7EC4\u4EF6\u9500\u6BC1\u3001\u5206\u4EAB\uFF09\u89E6\u53D1\u7EC4\u4EF6\u7684-message-\u4E8B\u4EF6" aria-hidden="true">#</a></h4><p><strong>OBJECT\u53C2\u6570\u8BF4\u660E</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u53C2\u6570\u8BF4\u660E</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">	 * \u6D88\u606F\u7C7B\u578B</span></span>
<span class="line"><span style="color:#676E95;">     * AlipayPage \u652F\u4ED8\u5B9D\u52A0\u767D\u94FE\u63A5 \u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 navigateTo \u65B9\u6CD5\u8FDB\u884C\u8DF3\u8F6C</span></span>
<span class="line"><span style="color:#676E95;">     * webview \u5C0F\u7A0B\u5E8Fwebview \u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 navigateTo \u65B9\u6CD5\u8FDB\u884C\u8DF3\u8F6C</span></span>
<span class="line"><span style="color:#676E95;">     * miniprogram \u8DF3\u8F6C\u5230\u53E6\u5916\u4E00\u4E2A\u5C0F\u7A0B\u5E8F \u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 navigateTo \u65B9\u6CD5\u8FDB\u884C\u8DF3\u8F6C</span></span>
<span class="line"><span style="color:#676E95;">     * initShare \u521D\u59CB\u5316\u5206\u4EAB\u53C2\u6570</span></span>
<span class="line"><span style="color:#676E95;">     * share \u89E6\u53D1\u5206\u4EAB</span></span>
<span class="line"><span style="color:#676E95;">	 * clearCache \u6E05\u9664\u5C0F\u7A0B\u5E8F\u7AEF\u7F13\u5B58</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">initShare</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">share</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">clearCache</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">/** </span></span>
<span class="line"><span style="color:#676E95;">	 * \u53D1\u9001\u5185\u5BB9</span></span>
<span class="line"><span style="color:#676E95;">	 * \u4E0D\u540C\u7684\u6D88\u606F\u7C7B\u578B\u9700\u8981\u4F20\u9012\u4E0D\u540C\u7684\u53C2\u6570\uFF0C\u683C\u5F0F\u53C2\u8003\u793A\u4F8B</span></span>
<span class="line"><span style="color:#676E95;">	 */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">info</span><span style="color:#89DDFF;">?:</span><span style="color:#FFCB6B;">any</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>\u793A\u4F8B</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/** \u521D\u59CB\u5316\u5206\u4EAB\u4FE1\u606F */</span></span>
<span class="line"><span style="color:#A6ACCD;">mxSdk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">postMessage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">initShare</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">info</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">/** \u81EA\u5B9A\u4E49\u5206\u4EAB\u9884\u89C8\u5927\u56FE\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8 750x825\uFF08\u652F\u4ED8\u5B9D\u72EC\u6709\uFF09 */</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">scImgUrl</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">/** \u81EA\u5B9A\u4E49\u793E\u4EA4\u56FE\u7247\u94FE\u63A5\uFF0C\u4F5C\u4E3A\u5206\u4EAB\u5230\u652F\u4ED8\u5B9D\u597D\u53CB\u65F6\u7684\u4E3B\u4F53\u56FE\u7247\u3002\u5EFA\u8BAE\u5C3A\u5BF8 376x330 */</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">bgImgUrl</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">/** \u5206\u4EAB\u56FE\u7247 */</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">imageUrl</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">/** \u5206\u4EAB\u6807\u9898 */</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">/** \u5206\u4EAB\u63CF\u8FF0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">desc</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">/** \u5206\u4EAB\u8DEF\u5F84\u9700\u8981\u643A\u5E26\u7684\u53C2\u6570 \u683C\u5F0F\u4E3A\u5BF9\u8C61 , query\u53C2\u6570\u4F1A\u62FC\u5728\u5730\u5740\u680F\u4E0A\uFF0C\u53EF\u4EE5\u5728init\u65B9\u6CD5\u56DE\u8C03\u4E2D\u62FF\u5230*/</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">query</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5F20\u4E09</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/** \u5524\u8D77\u5206\u4EAB */</span></span>
<span class="line"><span style="color:#A6ACCD;">mxSdk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">postMessage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">share</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">/** info\u4F20\u5165\u7A7A\u5BF9\u8C61\u5219\u91C7\u7528\u9ED8\u8BA4\u5206\u4EAB\u4FE1\u606F\uFF0C\u5426\u5219\u91C7\u7528\u4F20\u5165\u5206\u4EAB\u4FE1\u606F */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">info</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">/** \u5206\u4EAB\u56FE\u7247 */</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">imageUrl</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">/** \u5206\u4EAB\u6807\u9898 */</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">/** \u5206\u4EAB\u63CF\u8FF0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">desc</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function t(c,r,D,y,F,i){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{A as __pageData,d as default};
