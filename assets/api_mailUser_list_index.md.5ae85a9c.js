import{_ as s,c as n,o as a,a as l}from"./app.af28e0b7.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u83B7\u53D6\u5217\u8868","slug":"\u83B7\u53D6\u5217\u8868","link":"#\u83B7\u53D6\u5217\u8868","children":[]}],"relativePath":"api/mailUser/list/index.md"}'),p={name:"api/mailUser/list/index.md"},o=l(`<h2 id="\u83B7\u53D6\u5217\u8868" tabindex="-1">\u83B7\u53D6\u5217\u8868 <a class="header-anchor" href="#\u83B7\u53D6\u5217\u8868" aria-hidden="true">#</a></h2><p>\u6839\u636E\u4F20\u5165\u7684\u90AE\u4EF6id\u6279\u91CF\u5220\u9664\u90AE\u4EF6 \u6CE8\u610F\uFF1A\u5982\u679C\u90AE\u4EF6\u6709\u5956\u52B1\u4E5F\u4F1A\u8FDB\u884C\u5220\u9664\u64CD\u4F5C\uFF01\uFF01\u6CE8\u610F\u4E0E\u4E00\u952E\u5220\u9664\u63A5\u53E3\u7684\u533A\u522B</p><p>\u793A\u4F8B</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> mxSdk</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">http</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/mail/user/v1/mails:list</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u8BF7\u6C42\u5165\u53C2 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">requestData</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>requestData \u8BF7\u6C42\u5165\u53C2\u683C\u5F0F</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">requestData</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">/** \u7528\u6237id */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">userId</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5F53\u524D\u9875</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">page</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5206\u9875\u5927\u5C0F</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pageSize</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>response \u8FD4\u56DE\u53C2\u6570\u683C\u5F0F</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">response</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u72B6\u6001\u7801 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u670D\u52A1\u5668\u65F6\u95F4 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">serverTime</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">msg</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">mailList</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">v1MailUserServiceNameSpaceMail</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u662F\u5426\u8FD8\u6709\u4E0B\u4E00\u9875 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">hasNext</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">v1MailUserServiceNameSpaceMail</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u90AE\u4EF6id */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">mailId</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u90AE\u4EF6\u7C7B\u578B */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">mailType</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mailv1MailType</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u53D1\u9001\u8005 id */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">fromUserid</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u63A5\u6536\u4EBA id */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">toUserid</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u6807\u9898 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5185\u5BB9 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u52B1\u5217\u8868 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">mailAwardList</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">v1MailAward</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u90AE\u4EF6\u72B6\u6001 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">mailStatus</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MailUserServiceNameSpaceMailMailStatus</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u521B\u5EFA\u65F6\u95F4</span></span>
<span class="line"><span style="color:#676E95;">     * Format: double</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">createTimeStamp</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u53D1\u9001\u65F6\u95F4</span></span>
<span class="line"><span style="color:#676E95;">     * Format: double</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sendTimeStamp</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5931\u6548\u65F6\u95F4</span></span>
<span class="line"><span style="color:#676E95;">     * Format: double</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">expiredTimeStamp</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5956\u52B1\u5DF2\u9886\u53D6\u4E2A\u6570</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardReceiveCount</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5956\u52B1\u9886\u53D6\u7684\u72B6\u6001\uFF0C-1:\u6CA1\u5956\u52B1\uFF0C0\uFF1A\u6709\u5956\u52B1\u4F46\u672A\u9886\u53D6\uFF0C1\uFF1A\u90E8\u5206\u9886\u53D6\uFF0C2\uFF1A\u5168\u90E8\u9886\u53D6</span></span>
<span class="line"><span style="color:#676E95;">     * Format: int32</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">awardReceiveStatus</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * - MAIL_STATUS_READ: \u5DF2\u8BFB</span></span>
<span class="line"><span style="color:#676E95;">   *  - MAIL_STATUS_UNREAD: \u672A\u8BFB</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">MAIL_STATUS_UNSPECIFIED</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">enum</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MailUserServiceNameSpaceMailMailStatus</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MAIL_STATUS_UNSPECIFIED</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MAIL_STATUS_READ</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MAIL_STATUS_UNREAD</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">v1MailAward</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u5956\u52B1 id */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">itemId</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u9053\u5177\u6570\u91CF</span></span>
<span class="line"><span style="color:#676E95;">     * Format: double</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u663E\u793A\u7684\u540D\u79F0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">displayName</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u663E\u793A\u7684\u56FE\u7247 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">displayPic</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/** \u9886\u53D6\u72B6\u6001 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">getStatus</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">v1AwardGetStatus</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u9886\u53D6\u65F6\u95F4</span></span>
<span class="line"><span style="color:#676E95;">     * Format: double</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">getTimeStamp</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u5956\u52B1\u9886\u53D6\u72B6\u6001</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> - AWARD_GET_STATUS_SUCCESS: \u9886\u53D6\u6210\u529F</span></span>
<span class="line"><span style="color:#676E95;">   *  - AWARD_GET_STATUS_ERROR: \u9886\u53D6\u5931\u8D25</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">AWARD_GET_STATUS_UNSPECIFIED</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">enum</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">v1AwardGetStatus</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">AWARD_GET_STATUS_UNSPECIFIED</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">AWARD_GET_STATUS_SUCCESS</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">AWARD_GET_STATUS_ERROR</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u90AE\u4EF6\u7C7B\u578B</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> - MAIL_TYPE_SYS_NOTICE: \u7CFB\u7EDF\u901A\u77E5</span></span>
<span class="line"><span style="color:#676E95;">   *  - MAIL_TYPE_PLAY_MAIL: \u597D\u53CB\u90AE\u4EF6</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">MAIL_TYPE_UNSPECIFIED</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">enum</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">mailv1MailType</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MAIL_TYPE_UNSPECIFIED</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MAIL_TYPE_SYS_NOTICE</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MAIL_TYPE_PLAY_MAIL</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function c(t,r,y,D,F,C){return a(),n("div",null,e)}const E=s(p,[["render",c]]);export{i as __pageData,E as default};
