if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const d=e=>i(e,c),o={module:{uri:c},exports:n,require:d};s[c]=Promise.all(r.map((e=>o[e]||d(e)))).then((e=>(a(...e),n)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_astro/_slug_.048ddb1a.css",revision:null},{url:"_astro/_slug_.04e9cb4c.css",revision:null},{url:"_astro/_slug_.4573d11d.css",revision:null},{url:"_astro/_slug_.65ea14f0.css",revision:null},{url:"_astro/_slug_.b67f8034.css",revision:null},{url:"_astro/_slug_.d3b5a1f2.css",revision:null},{url:"_astro/_slug_.dc630398.css",revision:null},{url:"_astro/archive.04a11f0f.css",revision:null},{url:"_astro/archive.53b3eb88.css",revision:null},{url:"_astro/archive.9da1f251.css",revision:null},{url:"_astro/archive.b46f5e8f.css",revision:null},{url:"_astro/client.38423ee9.js",revision:null},{url:"_astro/gallery.2178033b.css",revision:null},{url:"_astro/gallery.95d0d27d.css",revision:null},{url:"_astro/hoisted.603cc2ab.js",revision:null},{url:"_astro/hoisted.9c51dacf.js",revision:null},{url:"_astro/hoisted.c2e808df.js",revision:null},{url:"_astro/hoisted.cae5b855.js",revision:null},{url:"_astro/index.069256eb.css",revision:null},{url:"_astro/index.0a0aa722.css",revision:null},{url:"_astro/index.0ac9adce.css",revision:null},{url:"_astro/index.1ccc6e4c.css",revision:null},{url:"_astro/index.45a47ed6.js",revision:null},{url:"_astro/index.54c80937.css",revision:null},{url:"_astro/index.64ca6944.css",revision:null},{url:"_astro/index.6de554dd.css",revision:null},{url:"_astro/index.71f926f9.css",revision:null},{url:"_astro/index.8d91d701.css",revision:null},{url:"_astro/index.9d30a9ab.css",revision:null},{url:"_astro/index.b2c339ef.css",revision:null},{url:"_astro/index.db4b8741.css",revision:null},{url:"_astro/index.ffe419e8.css",revision:null},{url:"_astro/Navbar.astro_astro_type_script_index_0_lang.8adbaaf0.js",revision:null},{url:"_astro/react.f6daaf8e.js",revision:null},{url:"archive",revision:"b9d9aa221b99038af9e499a795e79d78"},{url:"cn/archive",revision:"f79c8fcfe19419a262b68950d5da902f"},{url:"cn/gallery",revision:"68d7a67cec21173727dfe22deaf5f97b"},{url:"cn",revision:"b47fb87243724b23793f58d6e4b3d646"},{url:"cn/posts/1984-after-reading",revision:"c2d971fb664c794aca8a0f56e7c665f7"},{url:"cn/posts/2021-ending",revision:"64f456cf20fc41461d94c75cb565ed95"},{url:"cn/posts/2022-ending",revision:"0d374f7e3af04e0695b7998de9592c33"},{url:"cn/posts/archlinux-install-guide",revision:"9fe304dcce1d4ac9e68ea451d6a74ff2"},{url:"cn/posts/beancount-introduce",revision:"7bed2984b71185eab5052a0a40de76bf"},{url:"cn/posts/improving-your-code-review-process-with-semgrep",revision:"b7d6e6a4db7ede50ccbcc6fbd9ee3398"},{url:"cn/posts",revision:"44c39839ea9b18a461d68a18002f75b6"},{url:"cn/posts/introspection",revision:"f282924b8af0e6333f7e3d4d783d01f5"},{url:"cn/posts/inverted-index",revision:"6cfe54689415216c08ddb8c54d7e78bd"},{url:"cn/posts/kmp",revision:"a4b89c4f6f093aa6cf9d3dd368bda0d2"},{url:"cn/posts/liner-in-python",revision:"0b85206669a066f0617d891f3535b571"},{url:"cn/posts/my-homelab-introduce",revision:"d42a64589bdd0faeede73b0815ad18c4"},{url:"cn/posts/one-hundred-line-async-crawler",revision:"4bdfe5f1d8f542671ee02409be909252"},{url:"cn/posts/pipenv-autoenv",revision:"6317eff8bb59ef8dd51cc27433185647"},{url:"cn/posts/sort-in-python",revision:"5bf3ec0fb9b592ebe93f437310bff84f"},{url:"cn/posts/thoughtworks-one-month",revision:"ed2f248ab1979bb5d5371bd0c01b3db4"},{url:"cn/posts/tornado-auto-etag",revision:"f8440e567c8ac888dfc0c25ec12d27dc"},{url:"cn/posts/tree-in-python",revision:"1f7567a3ef3e6aa23b59b71957005a6b"},{url:"cn/posts/webmentions",revision:"841b84de05de15c54a7009b42bc9b128"},{url:"cn/tags/after-reading",revision:"12fe38e6a15992e5155b8a72b08d90e5"},{url:"cn/tags/annual-summary",revision:"55051968bce32313ebd41143fb744952"},{url:"cn/tags/archlinux",revision:"07b60c8cbc3afa7d4461a452d200b845"},{url:"cn/tags/async",revision:"6c3634b7c4dede2d443410e471cc218c"},{url:"cn/tags/autoenv",revision:"70cafc61ed0bc9f6a92b3d021f995a4f"},{url:"cn/tags/beancount",revision:"9632ee536901eb01c7af2f69454a29f9"},{url:"cn/tags/beginner's-guide",revision:"e1dbfd588b2c6677b699c9a7ec400beb"},{url:"cn/tags/best-practices",revision:"79d26d38872b2088a5c15723cf73cec5"},{url:"cn/tags/browser-extension",revision:"ec31a0a44edf542e85c5f139524bf9e6"},{url:"cn/tags/build-security-in",revision:"5652bcb663972e232aa38293c4dc1c45"},{url:"cn/tags/cache",revision:"1e8c7257c3fb608ec1b59b7fae0ac3b1"},{url:"cn/tags/chatgpt",revision:"0ae8b3beaf57b5fc6355604803631690"},{url:"cn/tags/ci",revision:"a4619fe26b17242c495b5741d635045f"},{url:"cn/tags/code-review",revision:"69c4ffa4dec064ed533914f4a2801ee3"},{url:"cn/tags/community",revision:"96ac9fea058e81319aee1a5ab849aaaa"},{url:"cn/tags/connectivity",revision:"7943a802445525d890e6a04e05a5ae4e"},{url:"cn/tags/crawler",revision:"3c859d1c22df655fcbe6189122d814a4"},{url:"cn/tags/data-structure",revision:"f975d79a3d2bdc9a785051abe2488acc"},{url:"cn/tags/devops",revision:"47d05cde4ca51b4f21c21b8d1b252c92"},{url:"cn/tags/devsecops",revision:"5bbdca254c5fcb472abf155e44602822"},{url:"cn/tags/docker",revision:"f55d1a860600bb25115907158a3154b7"},{url:"cn/tags/ending",revision:"9b2128dce7c7f7037e23cc44cf102769"},{url:"cn/tags/engagement",revision:"3064129e31abd708c0c107d379662fd4"},{url:"cn/tags/environment",revision:"02db8da6c545195005f56d9d5de21d3b"},{url:"cn/tags/etag",revision:"4863420d2287d111fa2f06ca7df42cd3"},{url:"cn/tags/flyio",revision:"6d0bb9c4d7aaf4c252c8fe55ca1964a5"},{url:"cn/tags/github-actions",revision:"4363c715476f44cc915ed931bcc8b6e6"},{url:"cn/tags",revision:"79bd41269b6889d56a6748a5eb4f4d22"},{url:"cn/tags/index",revision:"65ba2518dd6a3ff3dbaedb442635ee2e"},{url:"cn/tags/indie-web",revision:"3f0d117caf11a4f0e54ddfc7ca30d8ad"},{url:"cn/tags/introspection",revision:"a6ad97116078b6229635fc5b8c1550fc"},{url:"cn/tags/javascript",revision:"5891156b019132a25aa1c0570417da4d"},{url:"cn/tags/k3s",revision:"40fab751f9375fb8c67e0d30b6d8a61c"},{url:"cn/tags/kmp",revision:"25844995c53bfe5076f78d084fdf572a"},{url:"cn/tags/linear",revision:"057dc23d9ae2ca2ea13c2866c7a2db20"},{url:"cn/tags/logseq-plugin",revision:"0bd757e2a4a884972e4cfe878f37a149"},{url:"cn/tags/logseq",revision:"94a8e51cc99af82541ae1c270087db1d"},{url:"cn/tags/meilisearch",revision:"e34d48a6c8c7abad6e4e1783f70fbe7c"},{url:"cn/tags/memos",revision:"ec10c311f66d9c1bedd9260f036d0214"},{url:"cn/tags/microformats2",revision:"6fba5532d5620fdc463a503de54d6576"},{url:"cn/tags/open-source",revision:"314059431ae5e4124ab610cc93613393"},{url:"cn/tags/pipenv",revision:"c39fb5ee78a63ab7c035c1392d1b86a7"},{url:"cn/tags/proxmox-ve",revision:"f7711ff7cececd368c915462e72560c5"},{url:"cn/tags/python",revision:"1c3d52ccd63771e981bbd597549817f5"},{url:"cn/tags/sast",revision:"d6c5a399141bc0effd70e01ed2bdc9ae"},{url:"cn/tags/search-engine",revision:"762f310be26bdf0faf16fe6adb7af9ae"},{url:"cn/tags/security",revision:"a6585386d23d8b702b99df9fff982b69"},{url:"cn/tags/self-hosted",revision:"3068646387b8d272ccdbc9e9fda169e3"},{url:"cn/tags/semgrep",revision:"bc428ab785d44ad27e491b1789a4ae5a"},{url:"cn/tags/sort",revision:"f83c6566c49992e5af750dd34a455448"},{url:"cn/tags/static-analysis",revision:"3ddd83bc34d3df3c2018e980af6e7853"},{url:"cn/tags/thoughtworks",revision:"91160df8252f9136bc5825eb32ebb4bc"},{url:"cn/tags/umami",revision:"af08117ea227a00705a4746fc05b3f58"},{url:"cn/tags/webmentions",revision:"8944f7f72926fb34a10b14bfc28bbeae"},{url:"cn/thoughts/26",revision:"6aabf89c65e61b7e57a5b797cd459423"},{url:"cn/thoughts/29",revision:"4dfa0ee19446ab9a22cc81413f117e5e"},{url:"cn/thoughts/32",revision:"652f80b15ca0a82d1aaca694c9f637f7"},{url:"cn/thoughts",revision:"4812020dfb6242bde7f106247b28526a"},{url:"gallery",revision:"3dbc0d84b455d2bbe8d28833af78d504"},{url:"/",revision:"4971039496f21379718cbc57887d4686"},{url:"katex.min.css",revision:"caf1062309e21ed583d00d24cac20912"},{url:"posts/improving-your-code-review-process-with-semgrep",revision:"def91d0292b4614e83ea17a12cff4883"},{url:"posts",revision:"f38a70451bcac0ced571d00442b9eeb2"},{url:"posts/semgrep-with-custom-rules",revision:"0fe1534d09dd901082784c70d90bec64"},{url:"posts/webmentions",revision:"c15e247d4e5dc6f873bdb84af34db703"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"tags/beginner's-guide",revision:"0cf1ea56bc7130deef0b268f2d6b258f"},{url:"tags/best-practices",revision:"35194c7f084a240f93f51cf2d115de3e"},{url:"tags/browser-extension",revision:"49f01ff2598928052a404302b6d2b09e"},{url:"tags/build-security-in",revision:"5f29479a00195611da3a4d944a9aae50"},{url:"tags/ci",revision:"0b31096764b536b903fd735b2f041bde"},{url:"tags/code-consistency",revision:"aeb5f79e965c7efb7ce1ef57dd06a772"},{url:"tags/code-quality",revision:"e1add6d47f1350765e7bf06dd26d46f4"},{url:"tags/code-review",revision:"ca98b41504c91fcb4ae972023a3a7cd6"},{url:"tags/coding-standards",revision:"9eb3192a7e920d22286985b2a8e1753a"},{url:"tags/community",revision:"32dd3158edd0ea9e703a07a1822e4afa"},{url:"tags/connectivity",revision:"312da9a6adb706fc055d25032a05d145"},{url:"tags/custom-rules",revision:"37784c258c8b362ce92d743a7f0d0c81"},{url:"tags/devops",revision:"94b70e74bc9a6c7a4372958b380b180e"},{url:"tags/devsecops",revision:"2711368467487bed9e3545c14de5412d"},{url:"tags/engagement",revision:"a0a72ececff6923a467c332007b22f53"},{url:"tags/flyio",revision:"2b0e70232510d593152384875f307118"},{url:"tags/github-actions",revision:"23c696feb386b878855b8bf4e8e4d497"},{url:"tags",revision:"6050ec4d066d5d0c99c22c7735e48823"},{url:"tags/indie-web",revision:"beca7a8dad7197e9908c6acc19677ef8"},{url:"tags/javascript",revision:"f1c093f4592c60b6054d3e8ed3d72264"},{url:"tags/logseq-plugin",revision:"a0f6d9fd89bad74f0f3113a37a3e3823"},{url:"tags/logseq",revision:"c8bed662232598639da7bdcb71094e07"},{url:"tags/meilisearch",revision:"391ecb29ed5d662b1a28ed87c8e43fad"},{url:"tags/memos",revision:"db4a429202c71077e19af2568fcd8c33"},{url:"tags/microformats2",revision:"d957d9569d2849796577de964c9c6b50"},{url:"tags/open-source",revision:"80d2585286be8f9455d946d61030b7f4"},{url:"tags/sast",revision:"66c808b134483a2aaee99562afabf594"},{url:"tags/security",revision:"671dce65e89fdd17f3a24c0b2c9c473b"},{url:"tags/semgrep",revision:"50750aab19772bdce068f29ec0bd88a6"},{url:"tags/software-development",revision:"d0eb4e973ac75a525caaf154fcc5448e"},{url:"tags/static-analysis",revision:"92a86d24e414c5c49a12839c7d7bf995"},{url:"tags/umami",revision:"e4ac109b725b33ff49eb32c40ed1db43"},{url:"tags/vulnerability-detection",revision:"ee323fa0d33671f8b8263f601245b370"},{url:"tags/webmentions",revision:"bf5d97e4d2cce8270f56dda7ada53a63"},{url:"tags/workflow",revision:"c0375a8243da50d5d7722ce308f8c05f"},{url:"thoughts/27",revision:"7d229c8e751bc3bcd0c8ec67e6bd83f0"},{url:"thoughts/30",revision:"adef62f6b029b99eb2a37b7b2e3c5f4b"},{url:"thoughts/31",revision:"893a37cd0539be1d094c5b3740fee250"},{url:"thoughts",revision:"6d5487c2a424e8bdb5ee0552803913e4"},{url:"manifest.webmanifest",revision:"7b18dc105c7098a63f4808282fe6b3e5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
