###CN
<article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-angularui-router-" class="anchor" href="#angularui-router-" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="AngularUI Router &nbsp;" data-dst="angularui路由器">angularui路由器</trans><a href="https://travis-ci.org/angular-ui/ui-router"><img src="https://camo.githubusercontent.com/8f9f58c39f404d6a971677f3bcd5616d9ee87a07/68747470733a2f2f7472617669732d63692e6f72672f616e67756c61722d75692f75692d726f757465722e7376673f6272616e63683d6d6173746572" alt="Build Status" data-canonical-src="https://travis-ci.org/angular-ui/ui-router.svg?branch=master" style="max-width:100%;"></a></h1>

<p><strong><trans data-src="Note: this is the Angular 1.x source for UI-Router version 1.0 alpha.  If you are looking for the source for UI-Router 
version 0.2.x, it can be found " data-dst="注：这是角1。UI路由器版本1αx射线源。如果你正在寻找路由器
 UI 0.2版本的源。X，可以发现" style="background: transparent;">注：这是角1。UI路由器版本1αx射线源。如果你正在寻找路由器
 UI 0.2版本的源。X，可以发现</trans><a href="https://github.com/angular-ui/ui-router/tree/legacy"><trans data-src="here" data-dst="在这里">在这里</trans></a></strong></p>

<hr>

<h4><a id="user-content-the-de-facto-solution-to-flexible-routing-in-angular" class="anchor" href="#the-de-facto-solution-to-flexible-routing-in-angular" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="The de-facto solution to flexible routing in angular" data-dst="事实上的解决方案，灵活的路由在角">事实上的解决方案，灵活的路由在角</trans></h4>

<hr>

<p><strong><a href="http://angular-ui.github.io/ui-router/release/angular-ui-router.js"><trans data-src="Download stable" data-dst="下载稳定">下载稳定</trans></a></strong><trans data-src=" (or " data-dst="（或">（或</trans><strong><a href="http://angular-ui.github.io/ui-router/release/angular-ui-router.min.js"><trans data-src="Minified" data-dst="缩小">缩小</trans></a></strong><trans data-src=") " data-dst="）">）</trans><strong><trans data-src="|" data-dst="|"><trans data-src="|" data-dst="|">|</trans></trans></strong>
<strong><a href="https://github.com/angular-ui/ui-router/wiki"><trans data-src="Guide" data-dst="指南">指南</trans></a><trans data-src=" |" data-dst="|">|</trans></strong>
<strong><a href="http://angular-ui.github.io/ui-router/site"><trans data-src="API" data-dst="应用程序接口">应用程序接口</trans></a><trans data-src=" |" data-dst="|">|</trans></strong>
<strong><a href="http://ui-router.github.io/sample-app/#/mymessages"><trans data-src="Sample" data-dst="样品">样品</trans></a><trans data-src=" (" data-dst="（">（</trans><a href="https://github.com/ui-router/sample-app"><trans data-src="Src" data-dst="SRC">SRC</trans></a><trans data-src=") |" data-dst="）|">）|</trans></strong>
<strong><a href="https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions"><trans data-src="FAQ" data-dst="常见问题">常见问题</trans></a><trans data-src=" |" data-dst="|">|</trans></strong>
<strong><a href="#resources"><trans data-src="Resources" data-dst="资源">资源</trans></a><trans data-src=" |" data-dst="|">|</trans></strong>
<strong><a href="https://github.com/angular-ui/ui-router/blob/master/CONTRIBUTING.md#report-an-issue"><trans data-src="Report an Issue" data-dst="报告一个问题">报告一个问题</trans></a><trans data-src=" |" data-dst="|">|</trans></strong>
<strong><a href="https://github.com/angular-ui/ui-router/blob/master/CONTRIBUTING.md#contribute"><trans data-src="Contribute" data-dst="贡献">贡献</trans></a><trans data-src=" |" data-dst="|">|</trans></strong>
<strong><a href="http://stackoverflow.com/questions/ask?tags=angularjs,angular-ui-router"><trans data-src="Help!" data-dst="帮助！">帮助！</trans></a><trans data-src=" |" data-dst="|">|</trans></strong></p>

<hr>

<p><trans data-src="Angular UI-Router is a client-side " data-dst="角UI路由器是一个客户端" style="background: transparent;">角UI路由器是一个客户端</trans><a href="https://en.wikipedia.org/wiki/Single-page_application"><trans data-src="Single Page Application" data-dst="单页应用">单页应用</trans></a><trans data-src=" 
routing framework for " data-dst="路由框架">路由框架</trans><a href="http://angularjs.org"><trans data-src="AngularJS" data-dst="AngularJS"><trans data-src="AngularJS" data-dst="AngularJS">AngularJS</trans></trans></a><trans data-src=".  " data-dst="。">。</trans></p>

<p><trans data-src="Routing frameworks for SPAs update the browser's URL as the user nagivates through the app.  Conversely, they allows 
changes to the browser's URL to drive navigation through the app, thus allowing the user to create a bookmark to a 
location deep within the SPA." data-dst="温泉路由框架更新浏览器的URL作为用户nagivates通过App。相反，他们允许
更改浏览器的URL通过应用驱动的导航，从而允许用户创建一个书签在温泉深
位置。">温泉路由框架更新浏览器的URL作为用户nagivates通过App。相反，他们允许
更改浏览器的URL通过应用驱动的导航，从而允许用户创建一个书签在温泉深
位置。</trans></p>

<p><trans data-src="UI-Router applications are modeled as a hierarchical tree of states. UI-Router provides a 
" data-dst="UI路由器应用建模为状态的分层树。路由器提供了一个用户界面">UI路由器应用建模为状态的分层树。路由器提供了一个用户界面</trans><a href="https://en.wikipedia.org/wiki/Finite-state_machine"><em><trans data-src="state machine" data-dst="状态机">状态机</trans></em></a><trans data-src=" to manage the transitions between those 
application states in a transaction-like manner. " data-dst="管理者
应用状态之间的转换在交易方式。" style="background: transparent;">管理者
应用状态之间的转换在交易方式。</trans></p>

<h2><a id="user-content-get-started" class="anchor" href="#get-started" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="Get Started" data-dst="开始">开始</trans></h2>

<p><strong><trans data-src="(1)" data-dst="（1）">（1）</trans></strong><trans data-src=" Get UI-Router in one of the following ways:" data-dst="以下列方式之一获取UI路由器：">以下列方式之一获取UI路由器：</trans></p>

<ul>
<li><trans data-src="clone &amp; " data-dst="与克隆">与克隆</trans><a href="/2947721120/angular-ui/blob/master/CONTRIBUTING.md#developing"><trans data-src="build" data-dst="建立">建立</trans></a><trans data-src=" this repository" data-dst="这个库">这个库</trans></li>
<li><a href="http://angular-ui.github.io/ui-router/release/angular-ui-router.js"><trans data-src="download the release" data-dst="下载的版本">下载的版本</trans></a><trans data-src=" (or " data-dst="（或">（或</trans><a href="http://angular-ui.github.io/ui-router/release/angular-ui-router.min.js"><trans data-src="minified" data-dst="缩小">缩小</trans></a><trans data-src=")" data-dst="）">）</trans></li>
<li><a href="http://cdnjs.com/libraries/angular-ui-router"><trans data-src="link to cdn" data-dst="链接到CDN">链接到CDN</trans></a></li>
<li><trans data-src="via " data-dst="通过">通过</trans><strong><a href="http://jspm.io/"><trans data-src="jspm" data-dst="jspm"><trans data-src="jspm" data-dst="jspm">jspm</trans></trans></a></strong><trans data-src=": by running " data-dst="：通过运行">：通过运行</trans><code><trans data-src="$ jspm install angular-ui-router" data-dst="jspm美元安装角UI路由器">jspm美元安装角UI路由器</trans></code><trans data-src=" from your console" data-dst="从您的控制台">从您的控制台</trans></li>
<li><trans data-src="or via " data-dst="或通过">或通过</trans><strong><a href="https://www.npmjs.org/"><trans data-src="npm" data-dst="新公共管理">新公共管理</trans></a></strong><trans data-src=": by running " data-dst="：通过运行">：通过运行</trans><code><trans data-src="$ npm install angular-ui-router" data-dst="NPM安装角UI路由器美元">NPM安装角UI路由器美元</trans></code><trans data-src=" from your console" data-dst="从您的控制台">从您的控制台</trans></li>
<li><trans data-src="or via " data-dst="或通过">或通过</trans><strong><a href="http://bower.io/"><trans data-src="Bower" data-dst="鲍尔">鲍尔</trans></a></strong><trans data-src=": by running " data-dst="：通过运行">：通过运行</trans><code><trans data-src="$ bower install angular-ui-router" data-dst="鲍尔美元安装角UI路由器">鲍尔美元安装角UI路由器</trans></code><trans data-src=" from your console" data-dst="从您的控制台">从您的控制台</trans></li>
<li><trans data-src="or via " data-dst="或通过">或通过</trans><strong><a href="https://github.com/component/component"><trans data-src="Component" data-dst="组件">组件</trans></a></strong><trans data-src=": by running " data-dst="：通过运行">：通过运行</trans><code><trans data-src="$ component install angular-ui/ui-router" data-dst="为组件安装角界面UI路由器">为组件安装角界面UI路由器</trans></code><trans data-src=" from your console" data-dst="从您的控制台">从您的控制台</trans></li>
</ul>

<p><strong><trans data-src="(2)" data-dst="（2）">（2）</trans></strong><trans data-src=" Include " data-dst="包括">包括</trans><code><trans data-src="angular-ui-router.js" data-dst="angular-ui-router.js"><trans data-src="angular-ui-router.js" data-dst="angular-ui-router.js">angular-ui-router.js</trans></trans></code><trans data-src=" (or " data-dst="（或">（或</trans><code><trans data-src="angular-ui-router.min.js" data-dst="angular-ui-router.min.js"><trans data-src="angular-ui-router.min.js" data-dst="angular-ui-router.min.js">angular-ui-router.min.js</trans></trans></code><trans data-src=") in your " data-dst="在你）">在你）</trans><code><trans data-src="index.html" data-dst="index.html"><trans data-src="index.html" data-dst="index.html">index.html</trans></trans></code><trans data-src=", after including Angular itself (For Component users: ignore this step)" data-dst="，后角本身（包括组件的用户：忽略这一步）">，后角本身（包括组件的用户：忽略这一步）</trans></p>

<p><strong><trans data-src="(3)" data-dst="（3）">（3）</trans></strong><trans data-src=" Add " data-dst="添加">添加</trans><code><trans data-src="'ui.router'" data-dst="路由器的用户界面。">路由器的用户界面。</trans></code><trans data-src=" to your main module's list of dependencies (For Component users: replace " data-dst="依赖你的主要模块的列表（用户：更换组件">依赖你的主要模块的列表（用户：更换组件</trans><code><trans data-src="'ui.router'" data-dst="路由器的用户界面。">路由器的用户界面。</trans></code><trans data-src=" with " data-dst="与">与</trans><code><trans data-src="require('angular-ui-router')" data-dst="要求（'angular-ui-router”）">要求（'angular-ui-router”）</trans></code><trans data-src=")" data-dst="）">）</trans></p>

<p><trans data-src="When you're done, your setup should look similar to the following:" data-dst="当你完成的时候，你的程序应该类似于下面的：">当你完成的时候，你的程序应该类似于下面的：</trans></p>

<blockquote>
<div class="highlight highlight-text-html-basic"><pre>&lt;!doctype html&gt;
&lt;<span class="pl-ent"><trans data-src="html" data-dst="HTML"><trans data-src="HTML" data-dst="HTML">HTML</trans></trans></span> <span class="pl-e"><trans data-src="ng-app" data-dst="天然气应用">天然气应用</trans></span>=<span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="myApp" data-dst="MyApp">MyApp</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span>&gt;
&lt;<span class="pl-ent"><trans data-src="head" data-dst="头部">头部</trans></span>&gt;
<span class="pl-s1">    &lt;<span class="pl-ent"><trans data-src="script" data-dst="脚本">脚本</trans></span> <span class="pl-e"><trans data-src="src" data-dst="SRC">SRC</trans></span>=<span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="//ajax.googleapis.com/ajax/libs/angularjs/1.1.5/angular.min.js" data-dst="ajax.googleapis.com / / / / / /的Ajax库angularjs 1.1.5 / angular.min.js">ajax.googleapis.com / / / / / /的Ajax库angularjs 1.1.5 / angular.min.js</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span>&gt;&lt;/<span class="pl-ent"><trans data-src="script" data-dst="脚本">脚本</trans></span>&gt;</span>
<span class="pl-s1">    &lt;<span class="pl-ent"><trans data-src="script" data-dst="脚本">脚本</trans></span> <span class="pl-e"><trans data-src="src" data-dst="SRC">SRC</trans></span>=<span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="js/angular-ui-router.min.js" data-dst="js / angular-ui-router.min.js">js / angular-ui-router.min.js</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span>&gt;&lt;/<span class="pl-ent"><trans data-src="script" data-dst="脚本">脚本</trans></span>&gt;</span>
<span class="pl-s1">    &lt;<span class="pl-ent"><trans data-src="script" data-dst="脚本">脚本</trans></span>&gt;</span>
<span class="pl-s1">        <span class="pl-k"><trans data-src="var" data-dst="VaR">VaR</trans></span><trans data-src=" myApp " data-dst="MyApp">MyApp</trans><span class="pl-k">=</span> <span class="pl-smi"><trans data-src="angular" data-dst="角">角</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-en"><trans data-src="module" data-dst="模块">模块</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="myApp" data-dst="MyApp">MyApp</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src=", [" data-dst="，[">，[</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="ui.router" data-dst="ui.router">ui.router</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src="]);" data-dst="]）；">]）；</trans></span>
<span class="pl-s1">        <span class="pl-c"><trans data-src="// For Component users, it should look like this:" data-dst="/ /组件的用户，它看起来应该像这样：">/ /组件的用户，它看起来应该像这样：</trans></span></span>
<span class="pl-s1">        <span class="pl-c">// var myApp = angular.module('myApp', [require('angular-ui-router')]);</span></span>
<span class="pl-s1">    &lt;/<span class="pl-ent"><trans data-src="script" data-dst="脚本">脚本</trans></span>&gt;</span>
    ...
&lt;/<span class="pl-ent"><trans data-src="head" data-dst="头部">头部</trans></span>&gt;
&lt;<span class="pl-ent"><trans data-src="body" data-dst="身体">身体</trans></span>&gt;
    ...
&lt;/<span class="pl-ent"><trans data-src="body" data-dst="身体">身体</trans></span>&gt;
&lt;/<span class="pl-ent"><trans data-src="html" data-dst="HTML"><trans data-src="HTML" data-dst="HTML">HTML</trans></trans></span>&gt;</pre></div>
</blockquote>

<h3><a id="user-content-nested-states--views" class="anchor" href="#nested-states--views" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><a href="http://plnkr.co/edit/u18KQc?p=preview"><trans data-src="Nested States &amp; Views" data-dst="嵌套的状态与观点">嵌套的状态与观点</trans></a></h3>

<p><trans data-src="The majority of UI-Router's power is in its ability to nest states &amp; views." data-dst="UI的路由器的电源大部分是在其巢国与观点的能力。">UI的路由器的电源大部分是在其巢国与观点的能力。</trans></p>

<p><strong><trans data-src="(1)" data-dst="（1）">（1）</trans></strong><trans data-src=" First, follow the " data-dst="第一，遵循">第一，遵循</trans><a href="#get-started"><trans data-src="setup" data-dst="安装程序">安装程序</trans></a><trans data-src=" instructions detailed above." data-dst="详细说明以上。">详细说明以上。</trans></p>

<p><strong><trans data-src="(2)" data-dst="（2）">（2）</trans></strong><trans data-src=" Then, add a " data-dst="然后，添加一个">然后，添加一个</trans><a href="https://github.com/angular-ui/ui-router/wiki/Quick-Reference#ui-view"><code><trans data-src="ui-view" data-dst="UI视图">UI视图</trans></code><trans data-src=" directive" data-dst="指令">指令</trans></a><trans data-src=" to the " data-dst="到">到</trans><code><trans data-src="<body />" data-dst="<体>">&lt;体&gt;</trans></code><trans data-src=" of your app." data-dst="你的应用程序。">你的应用程序。</trans></p>

<blockquote>
<div class="highlight highlight-text-html-basic"><pre><span class="pl-c"><trans data-src="<!-- index.html -->" data-dst="<！——index.html - >">&lt;！——index.html - &gt;</trans></span>
&lt;<span class="pl-ent"><trans data-src="body" data-dst="身体">身体</trans></span>&gt;
    &lt;<span class="pl-ent"><trans data-src="div" data-dst="DIV">DIV</trans></span> <span class="pl-e"><trans data-src="ui-view" data-dst="UI视图">UI视图</trans></span>&gt;&lt;/<span class="pl-ent"><trans data-src="div" data-dst="DIV">DIV</trans></span>&gt;
    <span class="pl-c"><trans data-src="<!-- We'll also add some navigation: -->" data-dst="<！我们也会添加一些导航：-->">&lt;！我们也会添加一些导航：--&gt;</trans></span>
    &lt;<span class="pl-ent"><trans data-src="a" data-dst="A"><trans data-src="A" data-dst="A">A</trans></trans></span> <span class="pl-e"><trans data-src="ui-sref" data-dst="UI SREF">UI SREF</trans></span>=<span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="state1" data-dst="状态1">状态1</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span>&gt;State 1&lt;/<span class="pl-ent"><trans data-src="a" data-dst="A"><trans data-src="A" data-dst="A">A</trans></trans></span>&gt;
    &lt;<span class="pl-ent"><trans data-src="a" data-dst="A"><trans data-src="A" data-dst="A">A</trans></trans></span> <span class="pl-e"><trans data-src="ui-sref" data-dst="UI SREF">UI SREF</trans></span>=<span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="state2" data-dst="国家">国家</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span>&gt;State 2&lt;/<span class="pl-ent"><trans data-src="a" data-dst="A"><trans data-src="A" data-dst="A">A</trans></trans></span>&gt;
&lt;/<span class="pl-ent"><trans data-src="body" data-dst="身体">身体</trans></span>&gt;</pre></div>
</blockquote>

<p><strong><trans data-src="(3)" data-dst="（3）">（3）</trans></strong><trans data-src=" You'll notice we also added some links with " data-dst="你会注意到我们还添加了一些链接">你会注意到我们还添加了一些链接</trans><a href="https://github.com/angular-ui/ui-router/wiki/Quick-Reference#ui-sref"><code><trans data-src="ui-sref" data-dst="UI SREF">UI SREF</trans></code><trans data-src=" directives" data-dst="指令">指令</trans></a><trans data-src=". In addition to managing state transitions, this directive auto-generates the " data-dst="。除了管理状态的转换，该指令的自动生成">。除了管理状态的转换，该指令的自动生成</trans><code><trans data-src="href" data-dst="href"><trans data-src="href" data-dst="href">href</trans></trans></code><trans data-src=" attribute of the " data-dst="属性的">属性的</trans><code><trans data-src="<a />" data-dst="< >">&lt; &gt;</trans></code><trans data-src=" element it's attached to, if the corresponding state has a URL. Next we'll add some templates. These will plug into the " data-dst="元素的连接，如果对应的状态有一个URL。下一步我们将添加一些模板。将插头插入">元素的连接，如果对应的状态有一个URL。下一步我们将添加一些模板。将插头插入</trans><code><trans data-src="ui-view" data-dst="UI视图">UI视图</trans></code><trans data-src=" within " data-dst="在">在</trans><code><trans data-src="index.html" data-dst="index.html"><trans data-src="index.html" data-dst="index.html">index.html</trans></trans></code><trans data-src=". Notice that they have their own " data-dst="。注意到，他们有自己的">。注意到，他们有自己的</trans><code><trans data-src="ui-view" data-dst="UI视图">UI视图</trans></code><trans data-src=" as well! That is the key to nesting states and views." data-dst="以及！这是嵌套状态和视图的关键。">以及！这是嵌套状态和视图的关键。</trans></p>

<blockquote>
<div class="highlight highlight-text-html-basic"><pre><span class="pl-c"><trans data-src="<!-- partials/state1.html -->" data-dst="<！——部分/ state1.html——>">&lt;！——部分/ state1.html——&gt;</trans></span>
&lt;<span class="pl-ent"><trans data-src="h1" data-dst="H1">H1</trans></span>&gt;State 1&lt;/<span class="pl-ent"><trans data-src="h1" data-dst="H1">H1</trans></span>&gt;
&lt;<span class="pl-ent"><trans data-src="hr" data-dst="HR">HR</trans></span>/&gt;
&lt;<span class="pl-ent"><trans data-src="a" data-dst="A"><trans data-src="A" data-dst="A">A</trans></trans></span> <span class="pl-e"><trans data-src="ui-sref" data-dst="UI SREF">UI SREF</trans></span>=<span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="state1.list" data-dst="state1.list">state1.list</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span>&gt;Show List&lt;/<span class="pl-ent"><trans data-src="a" data-dst="A"><trans data-src="A" data-dst="A">A</trans></trans></span>&gt;
&lt;<span class="pl-ent"><trans data-src="div" data-dst="DIV">DIV</trans></span> <span class="pl-e"><trans data-src="ui-view" data-dst="UI视图">UI视图</trans></span>&gt;&lt;/<span class="pl-ent"><trans data-src="div" data-dst="DIV">DIV</trans></span>&gt;</pre></div>

<div class="highlight highlight-text-html-basic"><pre><span class="pl-c"><trans data-src="<!-- partials/state2.html -->" data-dst="<！——部分/ state2.html——>">&lt;！——部分/ state2.html——&gt;</trans></span>
&lt;<span class="pl-ent"><trans data-src="h1" data-dst="H1">H1</trans></span>&gt;State 2&lt;/<span class="pl-ent"><trans data-src="h1" data-dst="H1">H1</trans></span>&gt;
&lt;<span class="pl-ent"><trans data-src="hr" data-dst="HR">HR</trans></span>/&gt;
&lt;<span class="pl-ent"><trans data-src="a" data-dst="A"><trans data-src="A" data-dst="A">A</trans></trans></span> <span class="pl-e"><trans data-src="ui-sref" data-dst="UI SREF">UI SREF</trans></span>=<span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="state2.list" data-dst="state2.list">state2.list</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span>&gt;Show List&lt;/<span class="pl-ent"><trans data-src="a" data-dst="A"><trans data-src="A" data-dst="A">A</trans></trans></span>&gt;
&lt;<span class="pl-ent"><trans data-src="div" data-dst="DIV">DIV</trans></span> <span class="pl-e"><trans data-src="ui-view" data-dst="UI视图">UI视图</trans></span>&gt;&lt;/<span class="pl-ent"><trans data-src="div" data-dst="DIV">DIV</trans></span>&gt;</pre></div>
</blockquote>

<p><strong><trans data-src="(4)" data-dst="（4）">（4）</trans></strong><trans data-src=" Next, we'll add some child templates. " data-dst="下一步，我们将添加一些子模板。">下一步，我们将添加一些子模板。</trans><em><trans data-src="These" data-dst="这些">这些</trans></em><trans data-src=" will get plugged into the " data-dst="将插入">将插入</trans><code><trans data-src="ui-view" data-dst="UI视图">UI视图</trans></code><trans data-src=" of their parent state templates." data-dst="他们的父状态的模板。">他们的父状态的模板。</trans></p>

<blockquote>
<div class="highlight highlight-text-html-basic"><pre><span class="pl-c"><trans data-src="<!-- partials/state1.list.html -->" data-dst="<！——谐音/ state1.list.html -->">&lt;！——谐音/ state1.list.html --&gt;</trans></span>
&lt;<span class="pl-ent"><trans data-src="h3" data-dst="H3">H3</trans></span>&gt;List of State 1 Items&lt;/<span class="pl-ent"><trans data-src="h3" data-dst="H3">H3</trans></span>&gt;
&lt;<span class="pl-ent"><trans data-src="ul" data-dst="UL">UL</trans></span>&gt;
  &lt;<span class="pl-ent"><trans data-src="li" data-dst="李">李</trans></span> <span class="pl-e"><trans data-src="ng-repeat" data-dst="NG的重复">NG的重复</trans></span>=<span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="item in items" data-dst="项目中的项目">项目中的项目</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span>&gt;{{ item }}&lt;/<span class="pl-ent"><trans data-src="li" data-dst="李">李</trans></span>&gt;
&lt;/<span class="pl-ent"><trans data-src="ul" data-dst="UL">UL</trans></span>&gt;</pre></div>

<div class="highlight highlight-text-html-basic"><pre><span class="pl-c"><trans data-src="<!-- partials/state2.list.html -->" data-dst="<！——谐音/ state2.list.html -->">&lt;！——谐音/ state2.list.html --&gt;</trans></span>
&lt;<span class="pl-ent"><trans data-src="h3" data-dst="H3">H3</trans></span>&gt;List of State 2 Things&lt;/<span class="pl-ent"><trans data-src="h3" data-dst="H3">H3</trans></span>&gt;
&lt;<span class="pl-ent"><trans data-src="ul" data-dst="UL">UL</trans></span>&gt;
  &lt;<span class="pl-ent"><trans data-src="li" data-dst="李">李</trans></span> <span class="pl-e"><trans data-src="ng-repeat" data-dst="NG的重复">NG的重复</trans></span>=<span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="thing in things" data-dst="件事">件事</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span>&gt;{{ thing }}&lt;/<span class="pl-ent"><trans data-src="li" data-dst="李">李</trans></span>&gt;
&lt;/<span class="pl-ent"><trans data-src="ul" data-dst="UL">UL</trans></span>&gt;</pre></div>
</blockquote>

<p><strong><trans data-src="(5)" data-dst="（5）">（5）</trans></strong><trans data-src=" Finally, we'll wire it all up with " data-dst="最后，我们将线这一切了">最后，我们将线这一切了</trans><code><trans data-src="$stateProvider" data-dst="stateprovider美元">stateprovider美元</trans></code><trans data-src=". Set up your states in the module config, as in the following:" data-dst="。在模块的配置设置您的状态，如下：">。在模块的配置设置您的状态，如下：</trans></p>

<blockquote>
<div class="highlight highlight-source-js"><pre><span class="pl-smi"><trans data-src="myApp" data-dst="MyApp">MyApp</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-en"><trans data-src="config" data-dst="配置">配置</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-k"><trans data-src="function" data-dst="功能">功能</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-smi"><trans data-src="$stateProvider" data-dst="stateprovider美元">stateprovider美元</trans></span><trans data-src=", " data-dst="，">，</trans><span class="pl-smi"><trans data-src="$urlRouterProvider" data-dst="urlrouterprovider美元">urlrouterprovider美元</trans></span><trans data-src=") {
  " data-dst="）{">）{</trans><span class="pl-c"><trans data-src="//" data-dst="/ /">/ /</trans></span>
  <span class="pl-c"><trans data-src="// For any unmatched url, redirect to /state1" data-dst="/ /任何无与伦比的URL重定向到/状态1">/ /任何无与伦比的URL重定向到/状态1</trans></span>
  <span class="pl-smi"><trans data-src="$urlRouterProvider" data-dst="urlrouterprovider美元">urlrouterprovider美元</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-en"><trans data-src="otherwise" data-dst="否则">否则</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="/state1" data-dst="state1 /">state1 /</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=");
  " data-dst="）；">）；</trans><span class="pl-c"><trans data-src="//" data-dst="/ /">/ /</trans></span>
  <span class="pl-c"><trans data-src="// Now set up the states" data-dst="/ /现在成立了美国">/ /现在成立了美国</trans></span><trans data-src="
  $stateProvider
    ." data-dst="stateprovider美元。">stateprovider美元。</trans><span class="pl-en"><trans data-src="state" data-dst="状态">状态</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="state1" data-dst="状态1">状态1</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src=", {
      url" data-dst="{ 
 URL">{ 
 URL</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="/state1" data-dst="state1 /">state1 /</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=",
      templateUrl" data-dst="templateurl，
">templateurl，
</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="partials/state1.html" data-dst="谐音/ state1.html">谐音/ state1.html</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src="
    })
    ." data-dst="}）。">}）。</trans><span class="pl-en"><trans data-src="state" data-dst="状态">状态</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="state1.list" data-dst="state1.list">state1.list</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src=", {
      url" data-dst="{ 
 URL">{ 
 URL</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="/list" data-dst="/听.">/听.</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=",
      templateUrl" data-dst="templateurl，
">templateurl，
</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="partials/state1.list.html" data-dst="谐音/ state1.list.html">谐音/ state1.list.html</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=",
      " data-dst="，">，</trans><span class="pl-en"><trans data-src="controller" data-dst="控制器">控制器</trans></span><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-k"><trans data-src="function" data-dst="功能">功能</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-smi"><trans data-src="$scope" data-dst="美元的范围">美元的范围</trans></span><trans data-src=") {
        " data-dst="）{">）{</trans><span class="pl-smi"><trans data-src="$scope" data-dst="美元的范围">美元的范围</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-smi"><trans data-src="items" data-dst="项目">项目</trans></span> <span class="pl-k">=</span><trans data-src=" [" data-dst="【">【</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="A" data-dst="A">A</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=", " data-dst="，">，</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="List" data-dst="列表">列表</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=", " data-dst="，">，</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="Of" data-dst="对">对</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=", " data-dst="，">，</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="Items" data-dst="项目">项目</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src="];
      }
    })
    ." data-dst="]；
 
 }）}。">]；
 
 }）}。</trans><span class="pl-en"><trans data-src="state" data-dst="状态">状态</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="state2" data-dst="国家">国家</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src=", {
      url" data-dst="{ 
 URL">{ 
 URL</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="/state2" data-dst="state2 /">state2 /</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=",
      templateUrl" data-dst="templateurl，
">templateurl，
</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="partials/state2.html" data-dst="谐音/ state2.html">谐音/ state2.html</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src="
    })
    ." data-dst="}）。">}）。</trans><span class="pl-en"><trans data-src="state" data-dst="状态">状态</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="state2.list" data-dst="state2.list">state2.list</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src=", {
      url" data-dst="{ 
 URL">{ 
 URL</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="/list" data-dst="/听.">/听.</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=",
      templateUrl" data-dst="templateurl，
">templateurl，
</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="partials/state2.list.html" data-dst="谐音/ state2.list.html">谐音/ state2.list.html</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=",
      " data-dst="，">，</trans><span class="pl-en"><trans data-src="controller" data-dst="控制器">控制器</trans></span><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-k"><trans data-src="function" data-dst="功能">功能</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-smi"><trans data-src="$scope" data-dst="美元的范围">美元的范围</trans></span><trans data-src=") {
        " data-dst="）{">）{</trans><span class="pl-smi"><trans data-src="$scope" data-dst="美元的范围">美元的范围</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-smi"><trans data-src="things" data-dst="东西">东西</trans></span> <span class="pl-k">=</span><trans data-src=" [" data-dst="【">【</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="A" data-dst="A">A</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=", " data-dst="，">，</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="Set" data-dst="配置">配置</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=", " data-dst="，">，</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="Of" data-dst="对">对</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=", " data-dst="，">，</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="Things" data-dst="东西">东西</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src="];
      }
    });
});" data-dst="]；
 } 
 }）；
 }）；">]；
 } 
 }）；
 }）；</trans></pre></div>
</blockquote>

<p><strong><trans data-src="(6)" data-dst="（6）">（6）</trans></strong><trans data-src=" See this quick start example in action." data-dst="看到这个动作快速入门示例。">看到这个动作快速入门示例。</trans></p>

<blockquote>
<p><strong><a href="http://plnkr.co/edit/u18KQc?p=preview"><trans data-src="Go to Quick Start Plunker for Nested States &amp; Views" data-dst="去嵌套的状态与观点的快速启动plunker">去嵌套的状态与观点的快速启动plunker</trans></a></strong></p>
</blockquote>

<p><strong><trans data-src="(7)" data-dst="（7）">（7）</trans></strong><trans data-src=" This only scratches the surface" data-dst="这只是表面的划痕">这只是表面的划痕</trans></p>

<blockquote>
<p><strong><a href="https://github.com/angular-ui/ui-router/wiki"><trans data-src="Dive Deeper!" data-dst="潜得更深！">潜得更深！</trans></a></strong></p>
</blockquote>

<h3><a id="user-content-multiple--named-views" class="anchor" href="#multiple--named-views" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><a href="http://plnkr.co/edit/SDOcGS?p=preview"><trans data-src="Multiple &amp; Named Views" data-dst="多与命名视图">多与命名视图</trans></a></h3>

<p><trans data-src="Another great feature is the ability to have multiple " data-dst="另一大特点是有多个能力">另一大特点是有多个能力</trans><code><trans data-src="ui-view" data-dst="UI视图">UI视图</trans></code><trans data-src="s view per template." data-dst="每个模板的视图。">每个模板的视图。</trans></p>

<p><strong><trans data-src="Pro Tip:" data-dst="尖端：每">尖端：每</trans></strong> <em><trans data-src="While multiple parallel views are a powerful feature, you'll often be able to manage your
interfaces more effectively by nesting your views, and pairing those views with nested states." data-dst="在多个并行的观点是一个强大的功能，你会经常能够管理你的
接口更有效地通过嵌套视图，和嵌套状态配对的那些观点。">在多个并行的观点是一个强大的功能，你会经常能够管理你的
接口更有效地通过嵌套视图，和嵌套状态配对的那些观点。</trans></em></p>

<p><strong><trans data-src="(1)" data-dst="（1）">（1）</trans></strong><trans data-src=" Follow the " data-dst="遵循">遵循</trans><a href="#get-started"><trans data-src="setup" data-dst="安装程序">安装程序</trans></a><trans data-src=" instructions detailed above." data-dst="详细说明以上。">详细说明以上。</trans></p>

<p><strong><trans data-src="(2)" data-dst="（2）">（2）</trans></strong><trans data-src=" Add one or more " data-dst="添加一个或多个">添加一个或多个</trans><code><trans data-src="ui-view" data-dst="UI视图">UI视图</trans></code><trans data-src=" to your app, give them names." data-dst="你的应用程序，给他们的名字。">你的应用程序，给他们的名字。</trans></p>

<blockquote>
<div class="highlight highlight-text-html-basic"><pre><span class="pl-c"><trans data-src="<!-- index.html -->" data-dst="<！——index.html - >">&lt;！——index.html - &gt;</trans></span>
&lt;<span class="pl-ent"><trans data-src="body" data-dst="身体">身体</trans></span>&gt;
    &lt;<span class="pl-ent"><trans data-src="div" data-dst="DIV">DIV</trans></span> <span class="pl-e"><trans data-src="ui-view" data-dst="UI视图">UI视图</trans></span>=<span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="viewA" data-dst="一">一</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span>&gt;&lt;/<span class="pl-ent"><trans data-src="div" data-dst="DIV">DIV</trans></span>&gt;
    &lt;<span class="pl-ent"><trans data-src="div" data-dst="DIV">DIV</trans></span> <span class="pl-e"><trans data-src="ui-view" data-dst="UI视图">UI视图</trans></span>=<span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="viewB" data-dst="viewb">viewb</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span>&gt;&lt;/<span class="pl-ent"><trans data-src="div" data-dst="DIV">DIV</trans></span>&gt;
    <span class="pl-c"><trans data-src="<!-- Also a way to navigate -->" data-dst="<！also A Way to——浏览——>">&lt;！also A Way to——浏览——&gt;</trans></span>
    &lt;<span class="pl-ent"><trans data-src="a" data-dst="A"><trans data-src="A" data-dst="A">A</trans></trans></span> <span class="pl-e"><trans data-src="ui-sref" data-dst="UI SREF">UI SREF</trans></span>=<span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="route1" data-dst="第一">第一</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span>&gt;Route 1&lt;/<span class="pl-ent"><trans data-src="a" data-dst="A"><trans data-src="A" data-dst="A">A</trans></trans></span>&gt;
    &lt;<span class="pl-ent"><trans data-src="a" data-dst="A"><trans data-src="A" data-dst="A">A</trans></trans></span> <span class="pl-e"><trans data-src="ui-sref" data-dst="UI SREF">UI SREF</trans></span>=<span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="route2" data-dst="Route2">Route2</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span>&gt;Route 2&lt;/<span class="pl-ent"><trans data-src="a" data-dst="A"><trans data-src="A" data-dst="A">A</trans></trans></span>&gt;
&lt;/<span class="pl-ent"><trans data-src="body" data-dst="身体">身体</trans></span>&gt;</pre></div>
</blockquote>

<p><strong><trans data-src="(3)" data-dst="（3）">（3）</trans></strong><trans data-src=" Set up your states in the module config:" data-dst="在模块的配置设置您的状态：">在模块的配置设置您的状态：</trans></p>

<blockquote>
<div class="highlight highlight-source-js"><pre><span class="pl-smi"><trans data-src="myApp" data-dst="MyApp">MyApp</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-en"><trans data-src="config" data-dst="配置">配置</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-k"><trans data-src="function" data-dst="功能">功能</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-smi"><trans data-src="$stateProvider" data-dst="stateprovider美元">stateprovider美元</trans></span><trans data-src=") {
  $stateProvider
    ." data-dst="
 stateprovider美元）{。">
 stateprovider美元）{。</trans><span class="pl-en"><trans data-src="state" data-dst="状态">状态</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="index" data-dst="指数">指数</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src=", {
      url" data-dst="{ 
 URL">{ 
 URL</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=",
      views" data-dst="，
">，
</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span><trans data-src=" {
        " data-dst="{">{</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="viewA" data-dst="一">一</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span><trans data-src=" { template" data-dst="{模板">{模板</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="index.viewA" data-dst="index.viewa">index.viewa</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=" },
        " data-dst="}，">}，</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="viewB" data-dst="viewb">viewb</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span><trans data-src=" { template" data-dst="{模板">{模板</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="index.viewB" data-dst="index.viewb">index.viewb</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=" }
      }
    })
    ." data-dst="
 
 } } }）。">
 
 } } }）。</trans><span class="pl-en"><trans data-src="state" data-dst="状态">状态</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="route1" data-dst="第一">第一</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src=", {
      url" data-dst="{ 
 URL">{ 
 URL</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="/route1" data-dst="/第一">/第一</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=",
      views" data-dst="，
">，
</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span><trans data-src=" {
        " data-dst="{">{</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="viewA" data-dst="一">一</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span><trans data-src=" { template" data-dst="{模板">{模板</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="route1.viewA" data-dst="route1.viewa">route1.viewa</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=" },
        " data-dst="}，">}，</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="viewB" data-dst="viewb">viewb</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span><trans data-src=" { template" data-dst="{模板">{模板</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="route1.viewB" data-dst="route1.viewb">route1.viewb</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=" }
      }
    })
    ." data-dst="
 
 } } }）。">
 
 } } }）。</trans><span class="pl-en"><trans data-src="state" data-dst="状态">状态</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="route2" data-dst="Route2">Route2</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src=", {
      url" data-dst="{ 
 URL">{ 
 URL</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="/route2" data-dst="/ Route2">/ Route2</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=",
      views" data-dst="，
">，
</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span><trans data-src=" {
        " data-dst="{">{</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="viewA" data-dst="一">一</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span><trans data-src=" { template" data-dst="{模板">{模板</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="route2.viewA" data-dst="route2.viewa">route2.viewa</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=" },
        " data-dst="}，">}，</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="viewB" data-dst="viewb">viewb</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span><trans data-src=" { template" data-dst="{模板">{模板</trans><span class="pl-k"><trans data-src=":" data-dst="：">：</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="route2.viewB" data-dst="route2.viewb">route2.viewb</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=" }
      }
    })
});" data-dst="} } }）
 
 
 }）；">} } }）
 
 
 }）；</trans></pre></div>
</blockquote>

<p><strong><trans data-src="(4)" data-dst="（4）">（4）</trans></strong><trans data-src=" See this quick start example in action." data-dst="看到这个动作快速入门示例。">看到这个动作快速入门示例。</trans></p>

<blockquote>
<p><strong><a href="http://plnkr.co/edit/SDOcGS?p=preview"><trans data-src="Go to Quick Start Plunker for Multiple &amp; Named Views" data-dst="去多命名视图快速启动plunker">去多命名视图快速启动plunker</trans></a></strong></p>
</blockquote>

<h2><a id="user-content-resources" class="anchor" href="#resources" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="Resources" data-dst="资源">资源</trans></h2>

<ul>
<li><a href="https://github.com/angular-ui/ui-router/wiki"><trans data-src="In-Depth Guide" data-dst="在深度指南">在深度指南</trans></a></li>
<li><a href="http://angular-ui.github.io/ui-router/site"><trans data-src="API Reference" data-dst="API参考">API参考</trans></a></li>
<li><a href="http://angular-ui.github.com/ui-router/sample/"><trans data-src="Sample App" data-dst="示例应用程序">示例应用程序</trans></a><trans data-src=" (" data-dst="（">（</trans><a href="https://github.com/angular-ui/ui-router/tree/gh-pages/sample"><trans data-src="Source" data-dst="来源">来源</trans></a><trans data-src=")" data-dst="）">）</trans></li>
<li><a href="https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions"><trans data-src="FAQ" data-dst="常见问题">常见问题</trans></a></li>
<li><a href="http://slid.es/timkindberg/ui-router#/"><trans data-src="Slides comparing ngRoute to ui-router" data-dst="幻灯片比较ngroute UI路由器">幻灯片比较ngroute UI路由器</trans></a></li>
<li><a href="http://christopherthielen.github.io/ui-router-extras/#/home"><trans data-src="UI-Router Extras / Addons" data-dst="额外的UI插件路由器">额外的UI插件路由器</trans></a><trans data-src=" (@christopherthielen)" data-dst="（@ christopherthielen）">（@ christopherthielen）</trans></li>
</ul>

<h3><a id="user-content-videos" class="anchor" href="#videos" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="Videos" data-dst="视频">视频</trans></h3>

<ul>
<li><a href="https://egghead.io/lessons/angularjs-introduction-ui-router"><trans data-src="Introduction Video" data-dst="介绍视频">介绍视频</trans></a><trans data-src=" (egghead.io)" data-dst="（egghead.io）">（egghead.io）</trans></li>
<li><a href="https://www.youtube.com/watch?v=lBqiZSemrqg"><trans data-src="Tim Kindberg on Angular UI-Router" data-dst="提姆-金二氏综合征角UI路由器">提姆-金二氏综合征角UI路由器</trans></a></li>
<li><a href="https://egghead.io/lessons/angularjs-ui-router-activating-states"><trans data-src="Activating States" data-dst="激活状态">激活状态</trans></a><trans data-src=" (egghead.io)" data-dst="（egghead.io）">（egghead.io）</trans></li>
<li><a href="http://youtu.be/QETUuZ27N0w"><trans data-src="Learn Angular.js using UI-Router" data-dst="学习使用路由器angular.js UI">学习使用路由器angular.js UI</trans></a><trans data-src=" (LearnCode.academy)" data-dst="（learncode.academy）">（learncode.academy）</trans></li>
</ul>

<h2><a id="user-content-reporting-issues-and-contributing" class="anchor" href="#reporting-issues-and-contributing" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="Reporting issues and Contributing" data-dst="报告问题和贡献">报告问题和贡献</trans></h2>

<p><trans data-src="Please read our " data-dst="请阅读我们的">请阅读我们的</trans><a href="/2947721120/angular-ui/blob/master/CONTRIBUTING.md"><trans data-src="Contributor guidelines" data-dst="投稿指南">投稿指南</trans></a><trans data-src=" before reporting an issue or creating a pull request." data-dst="报告前一个问题或创建拉请求。">报告前一个问题或创建拉请求。</trans></p>
</article>

###EN
#AngularUI Router &nbsp;[![Build Status](https://travis-ci.org/angular-ui/ui-router.svg?branch=master)](https://travis-ci.org/angular-ui/ui-router)

**Note: this is the Angular 1.x source for UI-Router version 1.0 alpha.  If you are looking for the source for UI-Router 
version 0.2.x, it can be found [here](https://github.com/angular-ui/ui-router/tree/legacy)**

---


#### The de-facto solution to flexible routing in angular
---
**[Download stable](http://angular-ui.github.io/ui-router/release/angular-ui-router.js)** (or **[Minified](http://angular-ui.github.io/ui-router/release/angular-ui-router.min.js)**) **|**
**[Guide](https://github.com/angular-ui/ui-router/wiki) |**
**[API](http://angular-ui.github.io/ui-router/site) |**
**[Sample](http://ui-router.github.io/sample-app/#/mymessages) ([Src](https://github.com/ui-router/sample-app)) |**
**[FAQ](https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions) |**
**[Resources](#resources) |**
**[Report an Issue](https://github.com/angular-ui/ui-router/blob/master/CONTRIBUTING.md#report-an-issue) |**
**[Contribute](https://github.com/angular-ui/ui-router/blob/master/CONTRIBUTING.md#contribute) |**
**[Help!](http://stackoverflow.com/questions/ask?tags=angularjs,angular-ui-router) |**


---

Angular UI-Router is a client-side [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application) 
routing framework for [AngularJS](http://angularjs.org).  
  
Routing frameworks for SPAs update the browser's URL as the user nagivates through the app.  Conversely, they allows 
changes to the browser's URL to drive navigation through the app, thus allowing the user to create a bookmark to a 
location deep within the SPA.

UI-Router applications are modeled as a hierarchical tree of states. UI-Router provides a 
[*state machine*](https://en.wikipedia.org/wiki/Finite-state_machine) to manage the transitions between those 
application states in a transaction-like manner. 

## Get Started

**(1)** Get UI-Router in one of the following ways:
 - clone & [build](CONTRIBUTING.md#developing) this repository
 - [download the release](http://angular-ui.github.io/ui-router/release/angular-ui-router.js) (or [minified](http://angular-ui.github.io/ui-router/release/angular-ui-router.min.js))
 - [link to cdn](http://cdnjs.com/libraries/angular-ui-router)
 - via **[jspm](http://jspm.io/)**: by running `$ jspm install angular-ui-router` from your console
 - or via **[npm](https://www.npmjs.org/)**: by running `$ npm install angular-ui-router` from your console
 - or via **[Bower](http://bower.io/)**: by running `$ bower install angular-ui-router` from your console
 - or via **[Component](https://github.com/component/component)**: by running `$ component install angular-ui/ui-router` from your console

**(2)** Include `angular-ui-router.js` (or `angular-ui-router.min.js`) in your `index.html`, after including Angular itself (For Component users: ignore this step)

**(3)** Add `'ui.router'` to your main module's list of dependencies (For Component users: replace `'ui.router'` with `require('angular-ui-router')`)

When you're done, your setup should look similar to the following:

>
```html
<!doctype html>
<html ng-app="myApp">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.1.5/angular.min.js"></script>
    <script src="js/angular-ui-router.min.js"></script>
    <script>
        var myApp = angular.module('myApp', ['ui.router']);
        // For Component users, it should look like this:
        // var myApp = angular.module('myApp', [require('angular-ui-router')]);
    </script>
    ...
</head>
<body>
    ...
</body>
</html>
```

### [Nested States & Views](http://plnkr.co/edit/u18KQc?p=preview)

The majority of UI-Router's power is in its ability to nest states & views.

**(1)** First, follow the [setup](#get-started) instructions detailed above.

**(2)** Then, add a [`ui-view` directive](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#ui-view) to the `<body />` of your app.

>
```html
<!-- index.html -->
<body>
    <div ui-view></div>
    <!-- We'll also add some navigation: -->
    <a ui-sref="state1">State 1</a>
    <a ui-sref="state2">State 2</a>
</body>
```

**(3)** You'll notice we also added some links with [`ui-sref` directives](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#ui-sref). In addition to managing state transitions, this directive auto-generates the `href` attribute of the `<a />` element it's attached to, if the corresponding state has a URL. Next we'll add some templates. These will plug into the `ui-view` within `index.html`. Notice that they have their own `ui-view` as well! That is the key to nesting states and views.

>
```html
<!-- partials/state1.html -->
<h1>State 1</h1>
<hr/>
<a ui-sref="state1.list">Show List</a>
<div ui-view></div>
```
```html
<!-- partials/state2.html -->
<h1>State 2</h1>
<hr/>
<a ui-sref="state2.list">Show List</a>
<div ui-view></div>
```

**(4)** Next, we'll add some child templates. *These* will get plugged into the `ui-view` of their parent state templates.

>
```html
<!-- partials/state1.list.html -->
<h3>List of State 1 Items</h3>
<ul>
  <li ng-repeat="item in items">{{ item }}</li>
</ul>
```

>
```html
<!-- partials/state2.list.html -->
<h3>List of State 2 Things</h3>
<ul>
  <li ng-repeat="thing in things">{{ thing }}</li>
</ul>
```

**(5)** Finally, we'll wire it all up with `$stateProvider`. Set up your states in the module config, as in the following:


>
```javascript
myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "partials/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
});
```

**(6)** See this quick start example in action.
>**[Go to Quick Start Plunker for Nested States & Views](http://plnkr.co/edit/u18KQc?p=preview)**

**(7)** This only scratches the surface
>**[Dive Deeper!](https://github.com/angular-ui/ui-router/wiki)**


### [Multiple & Named Views](http://plnkr.co/edit/SDOcGS?p=preview)

Another great feature is the ability to have multiple `ui-view`s view per template.

**Pro Tip:** *While multiple parallel views are a powerful feature, you'll often be able to manage your
interfaces more effectively by nesting your views, and pairing those views with nested states.*

**(1)** Follow the [setup](#get-started) instructions detailed above.

**(2)** Add one or more `ui-view` to your app, give them names.
>
```html
<!-- index.html -->
<body>
    <div ui-view="viewA"></div>
    <div ui-view="viewB"></div>
    <!-- Also a way to navigate -->
    <a ui-sref="route1">Route 1</a>
    <a ui-sref="route2">Route 2</a>
</body>
```

**(3)** Set up your states in the module config:
>
```javascript
myApp.config(function($stateProvider) {
  $stateProvider
    .state('index', {
      url: "",
      views: {
        "viewA": { template: "index.viewA" },
        "viewB": { template: "index.viewB" }
      }
    })
    .state('route1', {
      url: "/route1",
      views: {
        "viewA": { template: "route1.viewA" },
        "viewB": { template: "route1.viewB" }
      }
    })
    .state('route2', {
      url: "/route2",
      views: {
        "viewA": { template: "route2.viewA" },
        "viewB": { template: "route2.viewB" }
      }
    })
});
```

**(4)** See this quick start example in action.
>**[Go to Quick Start Plunker for Multiple & Named Views](http://plnkr.co/edit/SDOcGS?p=preview)**


## Resources

* [In-Depth Guide](https://github.com/angular-ui/ui-router/wiki)
* [API Reference](http://angular-ui.github.io/ui-router/site)
* [Sample App](http://angular-ui.github.com/ui-router/sample/) ([Source](https://github.com/angular-ui/ui-router/tree/gh-pages/sample))
* [FAQ](https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions)
* [Slides comparing ngRoute to ui-router](http://slid.es/timkindberg/ui-router#/)
* [UI-Router Extras / Addons](http://christopherthielen.github.io/ui-router-extras/#/home) (@christopherthielen)
 
### Videos

* [Introduction Video](https://egghead.io/lessons/angularjs-introduction-ui-router) (egghead.io)
* [Tim Kindberg on Angular UI-Router](https://www.youtube.com/watch?v=lBqiZSemrqg)
* [Activating States](https://egghead.io/lessons/angularjs-ui-router-activating-states) (egghead.io)
* [Learn Angular.js using UI-Router](http://youtu.be/QETUuZ27N0w) (LearnCode.academy)



## Reporting issues and Contributing

Please read our [Contributor guidelines](CONTRIBUTING.md) before reporting an issue or creating a pull request.
