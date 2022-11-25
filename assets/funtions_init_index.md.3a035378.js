import{_ as s,c as n,o as a,a as l}from"./app.af28e0b7.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Init","slug":"init","link":"#init","children":[{"level":3,"title":"web\u73AF\u5883\u4E2D \u521D\u59CB\u5316\u4F1A\u81EA\u52A8\u6293\u53D6\u5730\u5740\u680F\u53C2\u6570\u8FDB\u884C\u767B\u5F55","slug":"web\u73AF\u5883\u4E2D-\u521D\u59CB\u5316\u4F1A\u81EA\u52A8\u6293\u53D6\u5730\u5740\u680F\u53C2\u6570\u8FDB\u884C\u767B\u5F55","link":"#web\u73AF\u5883\u4E2D-\u521D\u59CB\u5316\u4F1A\u81EA\u52A8\u6293\u53D6\u5730\u5740\u680F\u53C2\u6570\u8FDB\u884C\u767B\u5F55","children":[]}]}],"relativePath":"funtions/init/index.md"}'),p={name:"funtions/init/index.md"},e=l(`<h2 id="init" tabindex="-1">Init <a class="header-anchor" href="#init" aria-hidden="true">#</a></h2><h3 id="web\u73AF\u5883\u4E2D-\u521D\u59CB\u5316\u4F1A\u81EA\u52A8\u6293\u53D6\u5730\u5740\u680F\u53C2\u6570\u8FDB\u884C\u767B\u5F55" tabindex="-1">web\u73AF\u5883\u4E2D \u521D\u59CB\u5316\u4F1A\u81EA\u52A8\u6293\u53D6\u5730\u5740\u680F\u53C2\u6570\u8FDB\u884C\u767B\u5F55 <a class="header-anchor" href="#web\u73AF\u5883\u4E2D-\u521D\u59CB\u5316\u4F1A\u81EA\u52A8\u6293\u53D6\u5730\u5740\u680F\u53C2\u6570\u8FDB\u884C\u767B\u5F55" aria-hidden="true">#</a></h3><p>mx.init(Object) Object\u7C7B\u578B</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">/** \u9ED8\u8BA4online */</span></span>
<span class="line"><span style="color:#A6ACCD;">        env?: Env,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">/** \u6D3B\u52A8id */</span></span>
<span class="line"><span style="color:#A6ACCD;">        activeid?: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">/** \u662F\u5426\u52A0\u5BC6 */</span></span>
<span class="line"><span style="color:#A6ACCD;">        encode?: boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">/** \u6469\u897F\u4E2D\u53F0\u6E20\u9053\u7801 \u9ED8\u8BA4\u4E3A\u6B63\u5F0F\u6E20\u9053   */</span></span>
<span class="line"><span style="color:#A6ACCD;">        channel?: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">/** \u989D\u5916\u6570\u636E */</span></span>
<span class="line"><span style="color:#A6ACCD;">        extra?: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;">/** \u6A21\u62DF\u767B\u9646 \u8D26\u53F7 */</span></span>
<span class="line"><span style="color:#A6ACCD;">            uName?: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;">/** \u6A21\u62DF\u767B\u9646 \u5BC6\u7801 */</span></span>
<span class="line"><span style="color:#A6ACCD;">            pwd?: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;">/** \u7B2C\u4E09\u65B9\u767B\u9646 \u5DF2\u7ECF\u83B7\u53D6\u7B2C\u4E09\u65B9code/\u7B2C\u4E09\u65B9token */</span></span>
<span class="line"><span style="color:#A6ACCD;">            jscode?: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;">/** \u7B2C\u4E09\u65B9\u767B\u9646 \u5DF2\u7ECF\u83B7\u53D6\u7B2C\u4E09\u65B9\u7684\u989D\u5916\u4FE1\u606F \u6CA1\u6709\u7684\u5FFD\u7565\u6B64\u5B57\u6BB5 */</span></span>
<span class="line"><span style="color:#A6ACCD;">            jscode2?: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;">/** \u6E38\u620F\u767B\u9646\u83B7\u53D6\u7684 \u7528\u6237id */</span></span>
<span class="line"><span style="color:#A6ACCD;">            roleId?: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;">/** \u6E38\u620F\u767B\u9646\u83B7\u53D6\u7684 \u7528\u6237token */</span></span>
<span class="line"><span style="color:#A6ACCD;">            token?: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span></code></pre></div><p>\u793A\u4F8B</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> userInfo</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> mx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dev</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">encode</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">activeid</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">={</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">roleId</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">token</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    + </span><span style="color:#F07178;">\u5730\u5740\u680F\u53C2\u6570</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><p><a href="http://10.0.1.40:31123/user" target="_blank" rel="noreferrer">documentations</a></p>`,7),o=[e];function t(c,r,i,C,y,A){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
