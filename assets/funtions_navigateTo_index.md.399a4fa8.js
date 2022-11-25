import{_ as s,c as n,o as a,a as l}from"./app.af28e0b7.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"mxSdk.navigateTo(OBJECT)","slug":"mxsdk-navigateto-object","link":"#mxsdk-navigateto-object","children":[]}],"relativePath":"funtions/navigateTo/index.md"}'),p={name:"funtions/navigateTo/index.md"},o=l(`<h3 id="mxsdk-navigateto-object" tabindex="-1">mxSdk.navigateTo(OBJECT) <a class="header-anchor" href="#mxsdk-navigateto-object" aria-hidden="true">#</a></h3><p>\u4FDD\u7559\u5F53\u524D\u9875\u9762\uFF0C\u8DF3\u8F6C\u5230\u5E94\u7528\u5185\u7684\u67D0\u4E2A\u9875\u9762\uFF0C\u4F7F\u7528<code>mxSdk.navigateBack</code>\u53EF\u4EE5\u8FD4\u56DE\u5230\u539F\u9875\u9762\u3002</p><p><strong>OBJECT \u53C2\u6570\u8BF4\u660E</strong></p><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u5FC5\u586B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">platformParams</td><td style="text-align:left;">Object</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">\u540E\u53F0\u914D\u7F6E\u7684\u6E20\u9053\u8DF3\u8F6C\u53C2\u6570</td></tr><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><p><strong>platformParams \u53C2\u6570\u8BF4\u660E</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">platformParams</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">             * AlipayPage \u652F\u4ED8\u5B9D\u52A0\u767DH5\u94FE\u63A5</span></span>
<span class="line"><span style="color:#676E95;">             * pages \u8DF3\u8F6C\u672C\u5C0F\u7A0B\u5E8F\u7684\u67D0\u4E2A\u9875\u9762 url\u793A\u4F8B\uFF1A/pages/index</span></span>
<span class="line"><span style="color:#676E95;">             * miniprogram \u8DF3\u8F6C\u5230\u53E6\u5916\u4E00\u4E2A\u5C0F\u7A0B\u5E8F</span></span>
<span class="line"><span style="color:#676E95;">             */</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">AlipayPage</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">miniprogram</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">location</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">window</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pages</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">             * \u9700\u8981\u8DF3\u8F6C\u7684\u9875\u9762\u8DEF\u5F84 , \u8DEF\u5F84\u540E\u53EF\u4EE5\u5E26\u53C2\u6570</span></span>
<span class="line"><span style="color:#676E95;">             */</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#676E95;">/** \u5C0F\u7A0B\u5E8Fid */</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">appId</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">extra</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#676E95;">/** </span></span>
<span class="line"><span style="color:#676E95;">                 * pages \u8DF3\u8F6C\u7C7B\u578B \u9ED8\u8BA4navigateTo</span></span>
<span class="line"><span style="color:#676E95;">                 * navigateTo \u4FDD\u7559\u5F53\u524D\u9875\u9762\uFF0C\u8DF3\u8F6C\u5230\u5E94\u7528\u5185\u7684\u67D0\u4E2A\u9875\u9762 \u4F46\u662F\u4E0D\u5141\u8BB8\u8DF3\u8F6C\u5230 tabbar \u9875\u9762</span></span>
<span class="line"><span style="color:#676E95;">                 * switchTab   \u8DF3\u8F6C\u5230 tabBar \u9875\u9762\uFF0C\u5E76\u5173\u95ED\u5176\u4ED6\u6240\u6709\u975E tabBar \u9875\u9762</span></span>
<span class="line"><span style="color:#676E95;">                 * redirectTo \u5173\u95ED\u5F53\u524D\u9875\u9762\uFF0C\u8DF3\u8F6C\u5230\u5E94\u7528\u5185\u7684\u67D0\u4E2A\u9875\u9762\u3002\u4F46\u662F\u4E0D\u5141\u8BB8\u8DF3\u8F6C\u5230 tabbar \u9875\u9762</span></span>
<span class="line"><span style="color:#676E95;">                 * reLaunch \u5173\u95ED\u6240\u6709\u9875\u9762\uFF0C\u6253\u5F00\u5230\u5E94\u7528\u5185\u7684\u67D0\u4E2A\u9875\u9762</span></span>
<span class="line"><span style="color:#676E95;">                 */</span></span>
<span class="line"><span style="color:#F07178;">                navagateType?</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">navigateTo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">switchTab</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">redirectTo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">reLaunch</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                [</span><span style="color:#A6ACCD;">propName</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">any</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p><strong>\u793A\u4F8B</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * AlipayPage</span></span>
<span class="line"><span style="color:#676E95;"> * \u652F\u4ED8\u5B9D\u73AF\u5883 \u5927\u90E8\u5206http\u73AF\u5883\u8DF3\u8F6C\u4F1A\u7528\u5230</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">mxSdk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">navigateTo</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">platformParams</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">AlipayPage</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://qr.alipay.com/cgx16770k64bot6bdrxsaa3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8DF3\u8F6C\u6210\u529F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * pages</span></span>
<span class="line"><span style="color:#676E95;"> * \u8DF3\u8F6C\u672C\u5C0F\u7A0B\u5E8F\u7684\u67D0\u4E2A\u9875\u9762</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">mxSdk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">navigateTo</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">platformParams</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pages</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/pages/index?a=1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">extra</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#F07178;">navagateType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">redirectTo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8DF3\u8F6C\u6210\u529F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * miniprogram</span></span>
<span class="line"><span style="color:#676E95;"> * \u8DF3\u8F6C\u53E6\u4E00\u4E2A\u5C0F\u7A0B\u5E8F</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">mxSdk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">navigateTo</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">platformParams</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">miniprogram</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/pages/index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">appId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">extra</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8DF3\u8F6C\u6210\u529F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,8),t=[o];function e(c,r,y,D,F,i){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{A as __pageData,d as default};
