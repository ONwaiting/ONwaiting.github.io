import{_ as s,c as n,o as a,a as l}from"./app.af28e0b7.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"C\u7AEF\u5956\u54C1\u5217\u8868(\u5168\u90E8)","slug":"c\u7AEF\u5956\u54C1\u5217\u8868-\u5168\u90E8","link":"#c\u7AEF\u5956\u54C1\u5217\u8868-\u5168\u90E8","children":[]}],"relativePath":"api/ultimatePrize/userAwardListAll/index.md"}'),p={name:"api/ultimatePrize/userAwardListAll/index.md"},o=l(`<h2 id="c\u7AEF\u5956\u54C1\u5217\u8868-\u5168\u90E8" tabindex="-1">C\u7AEF\u5956\u54C1\u5217\u8868(\u5168\u90E8) <a class="header-anchor" href="#c\u7AEF\u5956\u54C1\u5217\u8868-\u5168\u90E8" aria-hidden="true">#</a></h2><p>\u793A\u4F8B</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> mxSdk</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">http</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/prize/user/v1/userAwardListAll</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u8BF7\u6C42\u5165\u53C2 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">requestData</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>requestData \u8BF7\u6C42\u5165\u53C2\u683C\u5F0F</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">requestData</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u7528\u6237ID */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">userId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>response \u8FD4\u56DE\u53C2\u6570\u683C\u5F0F</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">response</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u72B6\u6001\u7801 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u670D\u52A1\u5668\u65F6\u95F4 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">serverTime</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5217\u8868\u4FE1\u606F */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">prizeAward</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PrizeWrapUserPrizeAwardInfo</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PrizeWrapUserPrizeAwardInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u914D\u7F6EID */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u4F7F\u7528\u573A\u666F HUO_BI/CHENG_JIU */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">scenes</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5927\u5956\u540D\u79F0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u89C4\u5219 TEXT/IMAGE */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u89C4\u5219\u53C2\u6570 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rulesValues</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5269\u4F59\u6362\u5956\u603B\u6B21\u6570</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">exchangePrizeCount</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5F53\u524D\u9009\u4E2D\u5956\u54C1ID */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">currentPrizeAwardId</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u54C1\u96C6\u5408 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awards</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">prizePrizeWrapAwardSimpleInfo</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u8D27\u5E01\u6216\u79EF\u5206</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u9053\u5177ID */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">useItemId</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u9053\u5177\u56FE\u7247 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">useItemImage</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u9053\u5177\u540D\u79F0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">useItemName</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5269\u4F59\u53EF\u9886\u5956\u6B21\u6570</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">canGetAwardCount</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u9884\u7559\u4E09\u65B9\u5B9A\u5236\u503C */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">reserveValue</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5956\u52B1\u5151\u6362\u6709\u6548\u5929\u6570</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardValidDay</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5F53\u524D\u9009\u4E2D\u5956\u54C1\u65F6\u95F4</span></span>
<span class="line"><span style="color:#676E95;">     * Format: double</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">currentPrizeAwardTime</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u7ED3\u675F\u65F6\u95F4</span></span>
<span class="line"><span style="color:#676E95;">     * Format: double</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">endTime</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5355\u8F6E\u5269\u4F59\u6362\u5956\u6B21\u6570</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">singleExchangePrizeCount</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5355\u8F6E\u6362\u5956\u6B21\u6570\u9650\u5236\u5F00\u5173 OPEN/CLOSE */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">singleExchangePrizeLimitSwitch</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u6362\u5956\u603B\u6B21\u6570\u9650\u5236\u5F00\u5173 OPEN/CLOSE */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">exchangePrizeLimitSwitch</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">prizePrizeWrapAwardSimpleInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u54C1\u7C7B\u578B */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardType</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5173\u8054\u7684\u5956\u54C1ID */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardId</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u54C1\u540D\u79F0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardName</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u54C1\u56FE\u7247 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardImage</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5956\u54C1\u5E93\u5B58</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardCount</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u4E3B\u52A8\u6362\u5956\u7EE7\u627F\u503C \u8D27\u5E01\u5956\u54C1\u5FC5\u586B</span></span>
<span class="line"><span style="color:#676E95;">     * Format: double</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">takeExtendsValue</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u88AB\u52A8\u6362\u5956\u7EE7\u627F\u503C \u8D27\u5E01\u5956\u54C1\u5FC5\u586B</span></span>
<span class="line"><span style="color:#676E95;">     * Format: double</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">passiveExtendsValue</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u4EFB\u52A1ID \u6210\u5C31\u5956\u54C1\u5FC5\u586B */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">taskId</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u76EE\u6807\u63CF\u8FF0 \u6210\u5C31\u5956\u54C1\u5FC5\u586B */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">targetRemark</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u662F\u5426\u8FD8\u80FD\u9009\u4E2D true\u8FBE\u5230\u4E0A\u7EBF */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">selected</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u54C1\u4E3B\u952E */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u76EE\u6807\u503C</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">targetValue</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u54C1\u5E93\u5B58\u9650\u5236\u7C7B\u578B */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardLimitType</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u6807\u7B7E */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">tag</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5956\u54C1\u4EF7\u503C</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardPrice</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5217\u8868\u5C55\u793A\u72B6\u6001 NOT_AT/ING/END */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">shelfStatus</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function c(r,t,y,D,C,F){return a(),n("div",null,e)}const E=s(p,[["render",c]]);export{i as __pageData,E as default};
