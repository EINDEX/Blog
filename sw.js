if(!self.define){let s,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(i,n)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let a={};const l=s=>r(s,o),c={module:{uri:o},exports:a,require:l};e[o]=Promise.all(i.map((s=>c[s]||l(s)))).then((s=>(n(...s),a)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"_astro/_slug_.69b1bf75.css",revision:null},{url:"_astro/_slug_.6d1f44d6.css",revision:null},{url:"_astro/_slug_.b67f8034.css",revision:null},{url:"_astro/_slug_.bc9c98d6.css",revision:null},{url:"_astro/_slug_.c6ea45b9.css",revision:null},{url:"_astro/client.97e10384.js",revision:null},{url:"_astro/gallery.2178033b.css",revision:null},{url:"_astro/gallery.95d0d27d.css",revision:null},{url:"_astro/hoisted.603cc2ab.js",revision:null},{url:"_astro/hoisted.9c51dacf.js",revision:null},{url:"_astro/hoisted.c2e808df.js",revision:null},{url:"_astro/hoisted.cae5b855.js",revision:null},{url:"_astro/index.018d1c21.css",revision:null},{url:"_astro/index.069256eb.css",revision:null},{url:"_astro/index.0a0aa722.css",revision:null},{url:"_astro/index.29814cab.css",revision:null},{url:"_astro/index.71f926f9.css",revision:null},{url:"_astro/index.8d91d701.css",revision:null},{url:"_astro/index.db4b8741.css",revision:null},{url:"_astro/Navbar.astro_astro_type_script_index_0_lang.8adbaaf0.js",revision:null},{url:"cn/gallery",revision:"7407da4f72e52bde84991bc545831620"},{url:"cn",revision:"b5cab750de054f1b08ce60f809ddd84a"},{url:"cn/posts/1984-after-reading",revision:"f2d8900ac68578d3b22975b8888a9f44"},{url:"cn/posts/2021-ending",revision:"d7167db4421ca71b1db3fbce08b95e70"},{url:"cn/posts/2022-ending",revision:"b999550829f7e4a2636c4e55be2b2325"},{url:"cn/posts/archlinux-install-guide",revision:"dc233e3dadb41d563664f70ff34e03a7"},{url:"cn/posts/beancount-introduce",revision:"53a835dc24e867d1d422231381ac9bb7"},{url:"cn/posts/improving-your-code-review-process-with-semgrep",revision:"85e153b4b2150560c50df6fb18430fc5"},{url:"cn/posts",revision:"8e90a4ca596f7d6878fcbbc1b1676b62"},{url:"cn/posts/introspection",revision:"e1a3369822657617397b3904d6696602"},{url:"cn/posts/inverted-index",revision:"aa385d4a3b0cdc8b9087802c74c6ea80"},{url:"cn/posts/kmp",revision:"d0118aef980e1aab13df0fb6846adf90"},{url:"cn/posts/liner-in-python",revision:"39a219be85ab534e00794cdaa7ad033f"},{url:"cn/posts/my-homelab-introduce",revision:"a6d0ca925fbd1101baa345dbcef9d251"},{url:"cn/posts/one-hundred-line-async-crawler",revision:"0d9e310094f086a0530a5410a4994472"},{url:"cn/posts/pipenv-autoenv",revision:"a8b95bcbab29d9ac41b781356ebe994d"},{url:"cn/posts/sort-in-python",revision:"d3e45a5d01993cdf40987ddb73b7c9cb"},{url:"cn/posts/thoughtworks-one-month",revision:"b563657944d089a65fa8e9733bb370b7"},{url:"cn/posts/tornado-auto-etag",revision:"48eca39b0dd0106e16dec1b7bf3f78ff"},{url:"cn/posts/tree-in-python",revision:"08c8417faabedaa7df5a562be3211338"},{url:"cn/posts/webmentions",revision:"ad8650c808f8fdf05bed94a86d6518ca"},{url:"gallery",revision:"54daf375ac4527e57a86698f80a6fc92"},{url:"/",revision:"17190b3d0317abdaf4dc3fb3a6ada037"},{url:"katex.min.css",revision:"caf1062309e21ed583d00d24cac20912"},{url:"posts/improving-your-code-review-process-with-semgrep",revision:"42360b2b670113936059833506bdaf73"},{url:"posts",revision:"1d356ae9a1f21bddacdc7ca3a267531d"},{url:"posts/semgrep-with-custom-rules",revision:"8b132017812a8932052400ed52bfe0b5"},{url:"posts/webmentions",revision:"d7291af4ff84234ed77c888d35eac893"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"7b18dc105c7098a63f4808282fe6b3e5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
