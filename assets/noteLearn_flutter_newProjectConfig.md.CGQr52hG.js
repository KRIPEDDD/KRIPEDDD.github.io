import{_ as n,c as s,o as a,a2 as p}from"./chunks/framework.2t550KrZ.js";const g=JSON.parse('{"title":"项目目录下","description":"","frontmatter":{},"headers":[],"relativePath":"noteLearn/flutter/newProjectConfig.md","filePath":"noteLearn/flutter/newProjectConfig.md"}'),e={name:"noteLearn/flutter/newProjectConfig.md"},l=p(`<h1 id="项目目录下" tabindex="-1">项目目录下 <a class="header-anchor" href="#项目目录下" aria-label="Permalink to &quot;项目目录下&quot;">​</a></h1><p>android -&gt; build.gradle</p><p>其中的classpath的gradle版本要根据项目自行变更</p><p>ext.kotlin_version、mavenCentral()和dependencies大多数情况可以删除</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>buildscript {</span></span>
<span class="line"><span>    ext.kotlin_version = &#39;1.7.10&#39;</span></span>
<span class="line"><span>    repositories {</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/public/&#39; }</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/spring/&#39;}</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/google/&#39;}</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/gradle-plugin/&#39;}</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/spring-plugin/&#39;}</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/grails-core/&#39;}</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/apache-snapshots/&#39;}</span></span>
<span class="line"><span>        google()</span></span>
<span class="line"><span>        mavenCentral()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    dependencies {</span></span>
<span class="line"><span>        classpath &#39;com.android.tools.build:gradle:8.3.0&#39;</span></span>
<span class="line"><span>        classpath &quot;org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>allprojects {</span></span>
<span class="line"><span>    repositories {</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/public/&#39; }</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/spring/&#39;}</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/google/&#39;}</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/gradle-plugin/&#39;}</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/spring-plugin/&#39;}</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/grails-core/&#39;}</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/apache-snapshots/&#39;}</span></span>
<span class="line"><span>        google()</span></span>
<span class="line"><span>        mavenCentral()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>android -&gt; gradle -&gt; wrapper</p><p>distributionUrl中的域名替换为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mirrors.cloud.tencent.com/gradle</span></span></code></pre></div><h1 id="flutter-sdk-下的配置" tabindex="-1">flutter SDK 下的配置 <a class="header-anchor" href="#flutter-sdk-下的配置" aria-label="Permalink to &quot;flutter SDK 下的配置&quot;">​</a></h1>`,9),t=[l];function i(o,r,c,u,m,d){return a(),s("div",null,t)}const v=n(e,[["render",i]]);export{g as __pageData,v as default};
