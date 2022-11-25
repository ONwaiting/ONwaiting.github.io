import{_ as s,c as n,o as a,a as l}from"./app.af28e0b7.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5546\u57CE\u5217\u8868","slug":"\u5546\u57CE\u5217\u8868","link":"#\u5546\u57CE\u5217\u8868","children":[]}],"relativePath":"api/playMall/getList/index.md"}'),p={name:"api/playMall/getList/index.md"},o=l(`<h2 id="\u5546\u57CE\u5217\u8868" tabindex="-1">\u5546\u57CE\u5217\u8868 <a class="header-anchor" href="#\u5546\u57CE\u5217\u8868" aria-hidden="true">#</a></h2><p>\u67E5\u8BE2\u5217\u8868\u9ED8\u8BA4\u4F1A\u8FC7\u6EE4\u6389\u6240\u6709\u65F6\u95F4\u672A\u5230\u7684\u5546\u54C1\uFF0C\u901A\u8FC7 isNeedLimitTimeGoods \u4F20\u9012 true \u6765\u67E5\u8BE2\u51FA\u8FC7\u671F\u6216\u8005\u5373\u5C06\u5F00\u542F\u7684\u5546\u54C1\u3002</p><p>\u793A\u4F8B</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> mxSdk</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">http</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/mall/user/v1/goods/list</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u8BF7\u6C42\u5165\u53C2 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">requestData</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>requestData \u8BF7\u6C42\u5165\u53C2\u683C\u5F0F</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">requestData</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5546\u57CEid */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">mallId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u9875\u7801</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">page</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u9875\u6570</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pageSize</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u662F\u5426\u9700\u8981\u67E5\u8BE2\u9650\u65F6\u7684\u5546\u54C1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">isNeedLimitTimeGoods</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>response \u8FD4\u56DE\u53C2\u6570\u683C\u5F0F</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">response</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u72B6\u6001\u7801 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u670D\u52A1\u5668\u65F6\u95F4 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">serverTime</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">list</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mallGoodsInfoForC</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u603B\u9875\u6570</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">totalPage</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u603B\u6761\u6570</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">totalSize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5F53\u524D\u9875\u6570</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">current</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5F53\u524D\u6761\u6570</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">limit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5546\u57CE\u540D\u79F0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">mallName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5546\u57CE\u63CF\u8FF0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">mallDesc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u81EA\u5B9A\u4E49\u5B57\u6BB5 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">customField</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mallGoodsInfoForC</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5151\u6362id */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">mallGoodsId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5546\u54C1\u72B6\u6001 &quot;onShelf&quot;=\u4E0A\u67B6,&quot;offShelf&quot;=\u4E0B\u67B6 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">status</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u8D2D\u4E70\u5546\u54C1\u7684\u5956\u52B1id */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u8D2D\u4E70\u5546\u54C1\u7684\u5956\u52B1\u7C7B\u578B */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u8D2D\u4E70\u9700\u8981\u7684\u5956\u52B1\uFF08\u591A\u4E2A\uFF09 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">moneys</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mallMoney</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u7528\u6237\u9886\u53D6\u9650\u5236</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">userGetLimit</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5355\u65E5\u5206\u914D\u6570\u91CF</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dayGetLimit</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u4E0A\u67B6\u72B6\u6001 &quot;now&quot;\u7ACB\u5373\u4E0A\u67B6,&quot;limitTime&quot;\u9650\u65F6\u4E0A\u67B6 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">onShelfStatus</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u9650\u65F6\u4E0A\u67B6\u5F00\u59CB\u65F6\u95F4\uFF08onShelfStatus=&quot;limitTime&quot;\uFF09</span></span>
<span class="line"><span style="color:#676E95;">     * Format: double</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">limitOnShelfStartTime</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u9650\u65F6\u4E0A\u67B6\u7ED3\u675F\u65F6\u95F4\uFF08onShelfStatus=&quot;limitTime&quot;\uFF09</span></span>
<span class="line"><span style="color:#676E95;">     * Format: double</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">limitOnShelfEndTime</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5151\u6362\u63CF\u8FF0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">desc</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5546\u54C1\u6570\u91CF</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardCount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5546\u54C1\u5269\u4F59\u6570\u91CF</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardLeftCount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5546\u54C1\u540D\u79F0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5546\u54C1\u56FE\u7247 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardImg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u662F\u5426\u8FBE\u5230\u8D2D\u4E70\u9650\u5236 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">canReachBuyLimit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u6570\u91CF\u662F\u5426\u662F\u65E0\u9650\u7684 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">isAwardCountInfinite</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u81EA\u5B9A\u4E49\u5B57\u6BB5 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">customField</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u6807\u7B7E */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">tags</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u6743\u76CAid */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">benefitId</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mallMoney</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u8D2D\u4E70\u9700\u8981\u7684\u5956\u52B1id */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u52B1\u7C7B\u578B &quot;item&quot;=\u9053\u5177,&quot;benefit&quot;=\u5956\u6C60\u5956\u52B1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u8D2D\u4E70\u9700\u8981\u7684\u5956\u52B1\u6570\u91CF</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u540D\u5B57 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u56FE\u7247 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">img</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function c(t,r,y,C,D,F){return a(),n("div",null,e)}const B=s(p,[["render",c]]);export{i as __pageData,B as default};
