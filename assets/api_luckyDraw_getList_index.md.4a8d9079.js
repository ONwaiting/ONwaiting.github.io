import{_ as s,c as n,o as a,a as p}from"./app.af28e0b7.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"C\u7AEF\u62BD\u5956\u5217\u8868","slug":"c\u7AEF\u62BD\u5956\u5217\u8868","link":"#c\u7AEF\u62BD\u5956\u5217\u8868","children":[]}],"relativePath":"api/luckyDraw/getList/index.md"}'),l={name:"api/luckyDraw/getList/index.md"},o=p(`<h2 id="c\u7AEF\u62BD\u5956\u5217\u8868" tabindex="-1">C\u7AEF\u62BD\u5956\u5217\u8868 <a class="header-anchor" href="#c\u7AEF\u62BD\u5956\u5217\u8868" aria-hidden="true">#</a></h2><p>\u793A\u4F8B</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> mxSdk</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">http</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/draw/user/v1/userDrawList</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>response \u8FD4\u56DE\u53C2\u6570\u683C\u5F0F</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">response</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u72B6\u6001\u7801 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** C\u7AEF\u62BD\u5956\u914D\u7F6E\u4FE1\u606F */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">userDrawInfo</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DrawWrapUserDrawInfo</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DrawWrapUserDrawInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u62BD\u5956\u540D\u79F0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u62BD\u5956\u5F00\u59CB\u65F6\u95F4</span></span>
<span class="line"><span style="color:#676E95;">     * Format: double</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">startTime</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u62BD\u5956\u7ED3\u675F\u65F6\u95F4</span></span>
<span class="line"><span style="color:#676E95;">     * Format: double</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">endTime</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u62BD\u5956\u5F62\u5F0F */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">shape</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DrawWrapShapeEnum</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u62BD\u5956\u5F62\u5F0F\u683C\u5B50\u6570</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">gridNum</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u62BD\u5956\u5F62\u5F0F\u683C\u5B50\u89D2\u5EA6 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">gridAngle</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u62BD\u5956\u89C4\u5219 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">drawRules</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DrawWrapDrawRulesEnum</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u62BD\u5956\u89C4\u5219\u53C2\u6570 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">drawRulesValues</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u6D3B\u52A8ID */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sActiveId</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u6D88\u8017\u9053\u5177ID */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">useItemId</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u6D88\u8017\u9053\u5177\u6570\u91CF</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">useItemNum</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5F39\u5E55\u5C55\u793A */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">openType</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">drawDrawWrapOpenTypeEnum</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5C55\u793A\u89C4\u5219 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">showRules</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DrawWrapShowEnum</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5C55\u793A\u89C4\u5219\u53C2\u6570 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">showRulesValues</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u9879\u4FE1\u606F */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardInfo</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DrawWrapUserAwardSimpleInfo</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u4E3B\u952E */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u6D88\u8017\u9053\u5177\u540D\u79F0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">useItemName</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u6D88\u8017\u9053\u5177\u56FE\u7247 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">useItemImage</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u9884\u7559\u4E09\u65B9\u5B9A\u5236\u503C */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">reserveValue</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u62BD\u5956\u5F62\u5F0F\u679A\u4E3E</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> - SHAPE_UNSPECIFIED: \u62BD\u5956\u5F62\u5F0F\u65E0\u6548</span></span>
<span class="line"><span style="color:#676E95;">   *  - DA_ZHUAN_PAN: \u5927\u8F6C\u76D8</span></span>
<span class="line"><span style="color:#676E95;">   *  - JIU_GONG_GE: \u4E5D\u5BAB\u683C</span></span>
<span class="line"><span style="color:#676E95;">   *  - NIU_DAN_JI: \u626D\u86CB\u673A</span></span>
<span class="line"><span style="color:#676E95;">   *  - OTHER: \u5176\u4ED6</span></span>
<span class="line"><span style="color:#676E95;">   *  - NONE: \u65E0\u8868\u73B0</span></span>
<span class="line"><span style="color:#676E95;">   *  - BLIND_BOX: \u76F2\u76D2</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">SHAPE_UNSPECIFIED</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">enum</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DrawWrapShapeEnum</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SHAPE_UNSPECIFIED</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">DA_ZHUAN_PAN</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">JIU_GONG_GE</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NIU_DAN_JI</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">OTHER</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NONE</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">BLIND_BOX</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u62BD\u5956\u89C4\u5219\u679A\u4E3E</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> - RULES_UNSPECIFIED: \u62BD\u5956\u89C4\u5219\u65E0\u6548</span></span>
<span class="line"><span style="color:#676E95;">   *  - TEXT: \u6587\u672C</span></span>
<span class="line"><span style="color:#676E95;">   *  - IMAGE: \u56FE\u7247</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">RULES_UNSPECIFIED</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">enum</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DrawWrapDrawRulesEnum</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">RULES_UNSPECIFIED</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">TEXT</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IMAGE</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u6253\u5F00\u5173\u95ED\u679A\u4E3E\u7C7B</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> - OPEN_TYPE_UNSPECIFIED: \u6253\u5F00\u7C7B\u578B\u65E0\u6548</span></span>
<span class="line"><span style="color:#676E95;">   *  - OPEN: \u6253\u5F00</span></span>
<span class="line"><span style="color:#676E95;">   *  - CLOSE: \u5173\u95ED</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">OPEN_TYPE_UNSPECIFIED</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">enum</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">drawDrawWrapOpenTypeEnum</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">OPEN_TYPE_UNSPECIFIED</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">OPEN</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CLOSE</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u5C55\u793A\u89C4\u5219\u7C7B\u578B\u679A\u4E3E</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> - SHOW_UNSPECIFIED: \u5C55\u793A\u89C4\u5219\u7C7B\u578B\u65E0\u6548</span></span>
<span class="line"><span style="color:#676E95;">   *  - REAL: \u771F\u5B9E\u6570\u636E</span></span>
<span class="line"><span style="color:#676E95;">   *  - HYBRID: \u6DF7\u5408\u6570\u636E</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">SHOW_UNSPECIFIED</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">enum</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DrawWrapShowEnum</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SHOW_UNSPECIFIED</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">REAL</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">HYBRID</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;">/** C\u7AEF\u62BD\u5956\u5956\u9879\u4FE1\u606F */</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DrawWrapUserAwardSimpleInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u9879\u7B49\u7EA7 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardLevel</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u54C1ID */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardId</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5956\u54C1\u6570\u91CF</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardCount</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u54C1\u540D\u79F0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardName</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u54C1\u56FE\u7247 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardImage</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u54C1\u7C7B\u578B */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardType</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">drawDrawWrapAwardTypeEnum</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5C55\u793A\u4F4D\u7F6E */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">showLocation</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u5956\u52B1\u7C7B\u578B\u679A\u4E3E\u7C7B</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> - AWARD_TYPE_UNSPECIFIED: \u5956\u52B1\u7C7B\u578B\u65E0\u6548</span></span>
<span class="line"><span style="color:#676E95;">   *  - item: \u9053\u5177</span></span>
<span class="line"><span style="color:#676E95;">   *  - benefit: \u5956\u54C1</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">AWARD_TYPE_UNSPECIFIED</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">enum</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">drawDrawWrapAwardTypeEnum</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">AWARD_TYPE_UNSPECIFIED</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">benefit</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function c(t,r,y,D,F,C){return a(),n("div",null,e)}const E=s(l,[["render",c]]);export{i as __pageData,E as default};
