globalThis.process = {
  argv: [],
  env: {},
};
var Bf = Object.create;
var c0 = Object.defineProperty;
var Tf = Object.getOwnPropertyDescriptor;
var Nf = Object.getOwnPropertyNames;
var Mf = Object.getPrototypeOf,
  Of = Object.prototype.hasOwnProperty;
var qe = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
  _f = (t, e) => {
    for (var n in e) c0(t, n, { get: e[n], enumerable: !0 });
  },
  zf = (t, e, n, r) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let o of Nf(e))
        !Of.call(t, o) &&
          o !== n &&
          c0(t, o, {
            get: () => e[o],
            enumerable: !(r = Tf(e, o)) || r.enumerable,
          });
    return t;
  };
var Qt = (t, e, n) => (
  (n = t != null ? Bf(Mf(t)) : {}),
  zf(
    e || !t || !t.__esModule
      ? c0(n, "default", { value: t, enumerable: !0 })
      : n,
    t
  )
);
var mu = qe((x2, hu) => {
  "use strict";
  function Pa() {
    (this._types = Object.create(null)),
      (this._extensions = Object.create(null));
    for (let t = 0; t < arguments.length; t++) this.define(arguments[t]);
    (this.define = this.define.bind(this)),
      (this.getType = this.getType.bind(this)),
      (this.getExtension = this.getExtension.bind(this));
  }
  Pa.prototype.define = function (t, e) {
    for (let n in t) {
      let r = t[n].map(function (o) {
        return o.toLowerCase();
      });
      n = n.toLowerCase();
      for (let o = 0; o < r.length; o++) {
        let l = r[o];
        if (l[0] !== "*") {
          if (!e && l in this._types)
            throw new Error(
              'Attempt to change mapping for "' +
                l +
                '" extension from "' +
                this._types[l] +
                '" to "' +
                n +
                '". Pass `force=true` to allow this, otherwise remove "' +
                l +
                '" from the list of extensions for "' +
                n +
                '".'
            );
          this._types[l] = n;
        }
      }
      if (e || !this._extensions[n]) {
        let o = r[0];
        this._extensions[n] = o[0] !== "*" ? o : o.substr(1);
      }
    }
  };
  Pa.prototype.getType = function (t) {
    t = String(t);
    let e = t.replace(/^.*[/\\]/, "").toLowerCase(),
      n = e.replace(/^.*\./, "").toLowerCase(),
      r = e.length < t.length;
    return ((n.length < e.length - 1 || !r) && this._types[n]) || null;
  };
  Pa.prototype.getExtension = function (t) {
    return (
      (t = /^\s*([^;\s]*)/.test(t) && RegExp.$1),
      (t && this._extensions[t.toLowerCase()]) || null
    );
  };
  hu.exports = Pa;
});
var vu = qe((b2, gu) => {
  gu.exports = {
    "application/andrew-inset": ["ez"],
    "application/applixware": ["aw"],
    "application/atom+xml": ["atom"],
    "application/atomcat+xml": ["atomcat"],
    "application/atomdeleted+xml": ["atomdeleted"],
    "application/atomsvc+xml": ["atomsvc"],
    "application/atsc-dwd+xml": ["dwd"],
    "application/atsc-held+xml": ["held"],
    "application/atsc-rsat+xml": ["rsat"],
    "application/bdoc": ["bdoc"],
    "application/calendar+xml": ["xcs"],
    "application/ccxml+xml": ["ccxml"],
    "application/cdfx+xml": ["cdfx"],
    "application/cdmi-capability": ["cdmia"],
    "application/cdmi-container": ["cdmic"],
    "application/cdmi-domain": ["cdmid"],
    "application/cdmi-object": ["cdmio"],
    "application/cdmi-queue": ["cdmiq"],
    "application/cu-seeme": ["cu"],
    "application/dash+xml": ["mpd"],
    "application/davmount+xml": ["davmount"],
    "application/docbook+xml": ["dbk"],
    "application/dssc+der": ["dssc"],
    "application/dssc+xml": ["xdssc"],
    "application/ecmascript": ["es", "ecma"],
    "application/emma+xml": ["emma"],
    "application/emotionml+xml": ["emotionml"],
    "application/epub+zip": ["epub"],
    "application/exi": ["exi"],
    "application/express": ["exp"],
    "application/fdt+xml": ["fdt"],
    "application/font-tdpfr": ["pfr"],
    "application/geo+json": ["geojson"],
    "application/gml+xml": ["gml"],
    "application/gpx+xml": ["gpx"],
    "application/gxf": ["gxf"],
    "application/gzip": ["gz"],
    "application/hjson": ["hjson"],
    "application/hyperstudio": ["stk"],
    "application/inkml+xml": ["ink", "inkml"],
    "application/ipfix": ["ipfix"],
    "application/its+xml": ["its"],
    "application/java-archive": ["jar", "war", "ear"],
    "application/java-serialized-object": ["ser"],
    "application/java-vm": ["class"],
    "application/javascript": ["js", "mjs"],
    "application/json": ["json", "map"],
    "application/json5": ["json5"],
    "application/jsonml+json": ["jsonml"],
    "application/ld+json": ["jsonld"],
    "application/lgr+xml": ["lgr"],
    "application/lost+xml": ["lostxml"],
    "application/mac-binhex40": ["hqx"],
    "application/mac-compactpro": ["cpt"],
    "application/mads+xml": ["mads"],
    "application/manifest+json": ["webmanifest"],
    "application/marc": ["mrc"],
    "application/marcxml+xml": ["mrcx"],
    "application/mathematica": ["ma", "nb", "mb"],
    "application/mathml+xml": ["mathml"],
    "application/mbox": ["mbox"],
    "application/mediaservercontrol+xml": ["mscml"],
    "application/metalink+xml": ["metalink"],
    "application/metalink4+xml": ["meta4"],
    "application/mets+xml": ["mets"],
    "application/mmt-aei+xml": ["maei"],
    "application/mmt-usd+xml": ["musd"],
    "application/mods+xml": ["mods"],
    "application/mp21": ["m21", "mp21"],
    "application/mp4": ["mp4s", "m4p"],
    "application/msword": ["doc", "dot"],
    "application/mxf": ["mxf"],
    "application/n-quads": ["nq"],
    "application/n-triples": ["nt"],
    "application/node": ["cjs"],
    "application/octet-stream": [
      "bin",
      "dms",
      "lrf",
      "mar",
      "so",
      "dist",
      "distz",
      "pkg",
      "bpk",
      "dump",
      "elc",
      "deploy",
      "exe",
      "dll",
      "deb",
      "dmg",
      "iso",
      "img",
      "msi",
      "msp",
      "msm",
      "buffer",
    ],
    "application/oda": ["oda"],
    "application/oebps-package+xml": ["opf"],
    "application/ogg": ["ogx"],
    "application/omdoc+xml": ["omdoc"],
    "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"],
    "application/oxps": ["oxps"],
    "application/p2p-overlay+xml": ["relo"],
    "application/patch-ops-error+xml": ["xer"],
    "application/pdf": ["pdf"],
    "application/pgp-encrypted": ["pgp"],
    "application/pgp-signature": ["asc", "sig"],
    "application/pics-rules": ["prf"],
    "application/pkcs10": ["p10"],
    "application/pkcs7-mime": ["p7m", "p7c"],
    "application/pkcs7-signature": ["p7s"],
    "application/pkcs8": ["p8"],
    "application/pkix-attr-cert": ["ac"],
    "application/pkix-cert": ["cer"],
    "application/pkix-crl": ["crl"],
    "application/pkix-pkipath": ["pkipath"],
    "application/pkixcmp": ["pki"],
    "application/pls+xml": ["pls"],
    "application/postscript": ["ai", "eps", "ps"],
    "application/provenance+xml": ["provx"],
    "application/pskc+xml": ["pskcxml"],
    "application/raml+yaml": ["raml"],
    "application/rdf+xml": ["rdf", "owl"],
    "application/reginfo+xml": ["rif"],
    "application/relax-ng-compact-syntax": ["rnc"],
    "application/resource-lists+xml": ["rl"],
    "application/resource-lists-diff+xml": ["rld"],
    "application/rls-services+xml": ["rs"],
    "application/route-apd+xml": ["rapd"],
    "application/route-s-tsid+xml": ["sls"],
    "application/route-usd+xml": ["rusd"],
    "application/rpki-ghostbusters": ["gbr"],
    "application/rpki-manifest": ["mft"],
    "application/rpki-roa": ["roa"],
    "application/rsd+xml": ["rsd"],
    "application/rss+xml": ["rss"],
    "application/rtf": ["rtf"],
    "application/sbml+xml": ["sbml"],
    "application/scvp-cv-request": ["scq"],
    "application/scvp-cv-response": ["scs"],
    "application/scvp-vp-request": ["spq"],
    "application/scvp-vp-response": ["spp"],
    "application/sdp": ["sdp"],
    "application/senml+xml": ["senmlx"],
    "application/sensml+xml": ["sensmlx"],
    "application/set-payment-initiation": ["setpay"],
    "application/set-registration-initiation": ["setreg"],
    "application/shf+xml": ["shf"],
    "application/sieve": ["siv", "sieve"],
    "application/smil+xml": ["smi", "smil"],
    "application/sparql-query": ["rq"],
    "application/sparql-results+xml": ["srx"],
    "application/srgs": ["gram"],
    "application/srgs+xml": ["grxml"],
    "application/sru+xml": ["sru"],
    "application/ssdl+xml": ["ssdl"],
    "application/ssml+xml": ["ssml"],
    "application/swid+xml": ["swidtag"],
    "application/tei+xml": ["tei", "teicorpus"],
    "application/thraud+xml": ["tfi"],
    "application/timestamped-data": ["tsd"],
    "application/toml": ["toml"],
    "application/trig": ["trig"],
    "application/ttml+xml": ["ttml"],
    "application/ubjson": ["ubj"],
    "application/urc-ressheet+xml": ["rsheet"],
    "application/urc-targetdesc+xml": ["td"],
    "application/voicexml+xml": ["vxml"],
    "application/wasm": ["wasm"],
    "application/widget": ["wgt"],
    "application/winhlp": ["hlp"],
    "application/wsdl+xml": ["wsdl"],
    "application/wspolicy+xml": ["wspolicy"],
    "application/xaml+xml": ["xaml"],
    "application/xcap-att+xml": ["xav"],
    "application/xcap-caps+xml": ["xca"],
    "application/xcap-diff+xml": ["xdf"],
    "application/xcap-el+xml": ["xel"],
    "application/xcap-ns+xml": ["xns"],
    "application/xenc+xml": ["xenc"],
    "application/xhtml+xml": ["xhtml", "xht"],
    "application/xliff+xml": ["xlf"],
    "application/xml": ["xml", "xsl", "xsd", "rng"],
    "application/xml-dtd": ["dtd"],
    "application/xop+xml": ["xop"],
    "application/xproc+xml": ["xpl"],
    "application/xslt+xml": ["*xsl", "xslt"],
    "application/xspf+xml": ["xspf"],
    "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
    "application/yang": ["yang"],
    "application/yin+xml": ["yin"],
    "application/zip": ["zip"],
    "audio/3gpp": ["*3gpp"],
    "audio/adpcm": ["adp"],
    "audio/amr": ["amr"],
    "audio/basic": ["au", "snd"],
    "audio/midi": ["mid", "midi", "kar", "rmi"],
    "audio/mobile-xmf": ["mxmf"],
    "audio/mp3": ["*mp3"],
    "audio/mp4": ["m4a", "mp4a"],
    "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
    "audio/ogg": ["oga", "ogg", "spx", "opus"],
    "audio/s3m": ["s3m"],
    "audio/silk": ["sil"],
    "audio/wav": ["wav"],
    "audio/wave": ["*wav"],
    "audio/webm": ["weba"],
    "audio/xm": ["xm"],
    "font/collection": ["ttc"],
    "font/otf": ["otf"],
    "font/ttf": ["ttf"],
    "font/woff": ["woff"],
    "font/woff2": ["woff2"],
    "image/aces": ["exr"],
    "image/apng": ["apng"],
    "image/avif": ["avif"],
    "image/bmp": ["bmp"],
    "image/cgm": ["cgm"],
    "image/dicom-rle": ["drle"],
    "image/emf": ["emf"],
    "image/fits": ["fits"],
    "image/g3fax": ["g3"],
    "image/gif": ["gif"],
    "image/heic": ["heic"],
    "image/heic-sequence": ["heics"],
    "image/heif": ["heif"],
    "image/heif-sequence": ["heifs"],
    "image/hej2k": ["hej2"],
    "image/hsj2": ["hsj2"],
    "image/ief": ["ief"],
    "image/jls": ["jls"],
    "image/jp2": ["jp2", "jpg2"],
    "image/jpeg": ["jpeg", "jpg", "jpe"],
    "image/jph": ["jph"],
    "image/jphc": ["jhc"],
    "image/jpm": ["jpm"],
    "image/jpx": ["jpx", "jpf"],
    "image/jxr": ["jxr"],
    "image/jxra": ["jxra"],
    "image/jxrs": ["jxrs"],
    "image/jxs": ["jxs"],
    "image/jxsc": ["jxsc"],
    "image/jxsi": ["jxsi"],
    "image/jxss": ["jxss"],
    "image/ktx": ["ktx"],
    "image/ktx2": ["ktx2"],
    "image/png": ["png"],
    "image/sgi": ["sgi"],
    "image/svg+xml": ["svg", "svgz"],
    "image/t38": ["t38"],
    "image/tiff": ["tif", "tiff"],
    "image/tiff-fx": ["tfx"],
    "image/webp": ["webp"],
    "image/wmf": ["wmf"],
    "message/disposition-notification": ["disposition-notification"],
    "message/global": ["u8msg"],
    "message/global-delivery-status": ["u8dsn"],
    "message/global-disposition-notification": ["u8mdn"],
    "message/global-headers": ["u8hdr"],
    "message/rfc822": ["eml", "mime"],
    "model/3mf": ["3mf"],
    "model/gltf+json": ["gltf"],
    "model/gltf-binary": ["glb"],
    "model/iges": ["igs", "iges"],
    "model/mesh": ["msh", "mesh", "silo"],
    "model/mtl": ["mtl"],
    "model/obj": ["obj"],
    "model/step+xml": ["stpx"],
    "model/step+zip": ["stpz"],
    "model/step-xml+zip": ["stpxz"],
    "model/stl": ["stl"],
    "model/vrml": ["wrl", "vrml"],
    "model/x3d+binary": ["*x3db", "x3dbz"],
    "model/x3d+fastinfoset": ["x3db"],
    "model/x3d+vrml": ["*x3dv", "x3dvz"],
    "model/x3d+xml": ["x3d", "x3dz"],
    "model/x3d-vrml": ["x3dv"],
    "text/cache-manifest": ["appcache", "manifest"],
    "text/calendar": ["ics", "ifb"],
    "text/coffeescript": ["coffee", "litcoffee"],
    "text/css": ["css"],
    "text/csv": ["csv"],
    "text/html": ["html", "htm", "shtml"],
    "text/jade": ["jade"],
    "text/jsx": ["jsx"],
    "text/less": ["less"],
    "text/markdown": ["markdown", "md"],
    "text/mathml": ["mml"],
    "text/mdx": ["mdx"],
    "text/n3": ["n3"],
    "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"],
    "text/richtext": ["rtx"],
    "text/rtf": ["*rtf"],
    "text/sgml": ["sgml", "sgm"],
    "text/shex": ["shex"],
    "text/slim": ["slim", "slm"],
    "text/spdx": ["spdx"],
    "text/stylus": ["stylus", "styl"],
    "text/tab-separated-values": ["tsv"],
    "text/troff": ["t", "tr", "roff", "man", "me", "ms"],
    "text/turtle": ["ttl"],
    "text/uri-list": ["uri", "uris", "urls"],
    "text/vcard": ["vcard"],
    "text/vtt": ["vtt"],
    "text/xml": ["*xml"],
    "text/yaml": ["yaml", "yml"],
    "video/3gpp": ["3gp", "3gpp"],
    "video/3gpp2": ["3g2"],
    "video/h261": ["h261"],
    "video/h263": ["h263"],
    "video/h264": ["h264"],
    "video/iso.segment": ["m4s"],
    "video/jpeg": ["jpgv"],
    "video/jpm": ["*jpm", "jpgm"],
    "video/mj2": ["mj2", "mjp2"],
    "video/mp2t": ["ts"],
    "video/mp4": ["mp4", "mp4v", "mpg4"],
    "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"],
    "video/ogg": ["ogv"],
    "video/quicktime": ["qt", "mov"],
    "video/webm": ["webm"],
  };
});
var Du = qe((w2, yu) => {
  yu.exports = {
    "application/prs.cww": ["cww"],
    "application/vnd.1000minds.decision-model+xml": ["1km"],
    "application/vnd.3gpp.pic-bw-large": ["plb"],
    "application/vnd.3gpp.pic-bw-small": ["psb"],
    "application/vnd.3gpp.pic-bw-var": ["pvb"],
    "application/vnd.3gpp2.tcap": ["tcap"],
    "application/vnd.3m.post-it-notes": ["pwn"],
    "application/vnd.accpac.simply.aso": ["aso"],
    "application/vnd.accpac.simply.imp": ["imp"],
    "application/vnd.acucobol": ["acu"],
    "application/vnd.acucorp": ["atc", "acutc"],
    "application/vnd.adobe.air-application-installer-package+zip": ["air"],
    "application/vnd.adobe.formscentral.fcdt": ["fcdt"],
    "application/vnd.adobe.fxp": ["fxp", "fxpl"],
    "application/vnd.adobe.xdp+xml": ["xdp"],
    "application/vnd.adobe.xfdf": ["xfdf"],
    "application/vnd.ahead.space": ["ahead"],
    "application/vnd.airzip.filesecure.azf": ["azf"],
    "application/vnd.airzip.filesecure.azs": ["azs"],
    "application/vnd.amazon.ebook": ["azw"],
    "application/vnd.americandynamics.acc": ["acc"],
    "application/vnd.amiga.ami": ["ami"],
    "application/vnd.android.package-archive": ["apk"],
    "application/vnd.anser-web-certificate-issue-initiation": ["cii"],
    "application/vnd.anser-web-funds-transfer-initiation": ["fti"],
    "application/vnd.antix.game-component": ["atx"],
    "application/vnd.apple.installer+xml": ["mpkg"],
    "application/vnd.apple.keynote": ["key"],
    "application/vnd.apple.mpegurl": ["m3u8"],
    "application/vnd.apple.numbers": ["numbers"],
    "application/vnd.apple.pages": ["pages"],
    "application/vnd.apple.pkpass": ["pkpass"],
    "application/vnd.aristanetworks.swi": ["swi"],
    "application/vnd.astraea-software.iota": ["iota"],
    "application/vnd.audiograph": ["aep"],
    "application/vnd.balsamiq.bmml+xml": ["bmml"],
    "application/vnd.blueice.multipass": ["mpm"],
    "application/vnd.bmi": ["bmi"],
    "application/vnd.businessobjects": ["rep"],
    "application/vnd.chemdraw+xml": ["cdxml"],
    "application/vnd.chipnuts.karaoke-mmd": ["mmd"],
    "application/vnd.cinderella": ["cdy"],
    "application/vnd.citationstyles.style+xml": ["csl"],
    "application/vnd.claymore": ["cla"],
    "application/vnd.cloanto.rp9": ["rp9"],
    "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
    "application/vnd.cluetrust.cartomobile-config": ["c11amc"],
    "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"],
    "application/vnd.commonspace": ["csp"],
    "application/vnd.contact.cmsg": ["cdbcmsg"],
    "application/vnd.cosmocaller": ["cmc"],
    "application/vnd.crick.clicker": ["clkx"],
    "application/vnd.crick.clicker.keyboard": ["clkk"],
    "application/vnd.crick.clicker.palette": ["clkp"],
    "application/vnd.crick.clicker.template": ["clkt"],
    "application/vnd.crick.clicker.wordbank": ["clkw"],
    "application/vnd.criticaltools.wbs+xml": ["wbs"],
    "application/vnd.ctc-posml": ["pml"],
    "application/vnd.cups-ppd": ["ppd"],
    "application/vnd.curl.car": ["car"],
    "application/vnd.curl.pcurl": ["pcurl"],
    "application/vnd.dart": ["dart"],
    "application/vnd.data-vision.rdz": ["rdz"],
    "application/vnd.dbf": ["dbf"],
    "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
    "application/vnd.dece.ttml+xml": ["uvt", "uvvt"],
    "application/vnd.dece.unspecified": ["uvx", "uvvx"],
    "application/vnd.dece.zip": ["uvz", "uvvz"],
    "application/vnd.denovo.fcselayout-link": ["fe_launch"],
    "application/vnd.dna": ["dna"],
    "application/vnd.dolby.mlp": ["mlp"],
    "application/vnd.dpgraph": ["dpg"],
    "application/vnd.dreamfactory": ["dfac"],
    "application/vnd.ds-keypoint": ["kpxx"],
    "application/vnd.dvb.ait": ["ait"],
    "application/vnd.dvb.service": ["svc"],
    "application/vnd.dynageo": ["geo"],
    "application/vnd.ecowin.chart": ["mag"],
    "application/vnd.enliven": ["nml"],
    "application/vnd.epson.esf": ["esf"],
    "application/vnd.epson.msf": ["msf"],
    "application/vnd.epson.quickanime": ["qam"],
    "application/vnd.epson.salt": ["slt"],
    "application/vnd.epson.ssf": ["ssf"],
    "application/vnd.eszigno3+xml": ["es3", "et3"],
    "application/vnd.ezpix-album": ["ez2"],
    "application/vnd.ezpix-package": ["ez3"],
    "application/vnd.fdf": ["fdf"],
    "application/vnd.fdsn.mseed": ["mseed"],
    "application/vnd.fdsn.seed": ["seed", "dataless"],
    "application/vnd.flographit": ["gph"],
    "application/vnd.fluxtime.clip": ["ftc"],
    "application/vnd.framemaker": ["fm", "frame", "maker", "book"],
    "application/vnd.frogans.fnc": ["fnc"],
    "application/vnd.frogans.ltf": ["ltf"],
    "application/vnd.fsc.weblaunch": ["fsc"],
    "application/vnd.fujitsu.oasys": ["oas"],
    "application/vnd.fujitsu.oasys2": ["oa2"],
    "application/vnd.fujitsu.oasys3": ["oa3"],
    "application/vnd.fujitsu.oasysgp": ["fg5"],
    "application/vnd.fujitsu.oasysprs": ["bh2"],
    "application/vnd.fujixerox.ddd": ["ddd"],
    "application/vnd.fujixerox.docuworks": ["xdw"],
    "application/vnd.fujixerox.docuworks.binder": ["xbd"],
    "application/vnd.fuzzysheet": ["fzs"],
    "application/vnd.genomatix.tuxedo": ["txd"],
    "application/vnd.geogebra.file": ["ggb"],
    "application/vnd.geogebra.tool": ["ggt"],
    "application/vnd.geometry-explorer": ["gex", "gre"],
    "application/vnd.geonext": ["gxt"],
    "application/vnd.geoplan": ["g2w"],
    "application/vnd.geospace": ["g3w"],
    "application/vnd.gmx": ["gmx"],
    "application/vnd.google-apps.document": ["gdoc"],
    "application/vnd.google-apps.presentation": ["gslides"],
    "application/vnd.google-apps.spreadsheet": ["gsheet"],
    "application/vnd.google-earth.kml+xml": ["kml"],
    "application/vnd.google-earth.kmz": ["kmz"],
    "application/vnd.grafeq": ["gqf", "gqs"],
    "application/vnd.groove-account": ["gac"],
    "application/vnd.groove-help": ["ghf"],
    "application/vnd.groove-identity-message": ["gim"],
    "application/vnd.groove-injector": ["grv"],
    "application/vnd.groove-tool-message": ["gtm"],
    "application/vnd.groove-tool-template": ["tpl"],
    "application/vnd.groove-vcard": ["vcg"],
    "application/vnd.hal+xml": ["hal"],
    "application/vnd.handheld-entertainment+xml": ["zmm"],
    "application/vnd.hbci": ["hbci"],
    "application/vnd.hhe.lesson-player": ["les"],
    "application/vnd.hp-hpgl": ["hpgl"],
    "application/vnd.hp-hpid": ["hpid"],
    "application/vnd.hp-hps": ["hps"],
    "application/vnd.hp-jlyt": ["jlt"],
    "application/vnd.hp-pcl": ["pcl"],
    "application/vnd.hp-pclxl": ["pclxl"],
    "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"],
    "application/vnd.ibm.minipay": ["mpy"],
    "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"],
    "application/vnd.ibm.rights-management": ["irm"],
    "application/vnd.ibm.secure-container": ["sc"],
    "application/vnd.iccprofile": ["icc", "icm"],
    "application/vnd.igloader": ["igl"],
    "application/vnd.immervision-ivp": ["ivp"],
    "application/vnd.immervision-ivu": ["ivu"],
    "application/vnd.insors.igm": ["igm"],
    "application/vnd.intercon.formnet": ["xpw", "xpx"],
    "application/vnd.intergeo": ["i2g"],
    "application/vnd.intu.qbo": ["qbo"],
    "application/vnd.intu.qfx": ["qfx"],
    "application/vnd.ipunplugged.rcprofile": ["rcprofile"],
    "application/vnd.irepository.package+xml": ["irp"],
    "application/vnd.is-xpr": ["xpr"],
    "application/vnd.isac.fcs": ["fcs"],
    "application/vnd.jam": ["jam"],
    "application/vnd.jcp.javame.midlet-rms": ["rms"],
    "application/vnd.jisp": ["jisp"],
    "application/vnd.joost.joda-archive": ["joda"],
    "application/vnd.kahootz": ["ktz", "ktr"],
    "application/vnd.kde.karbon": ["karbon"],
    "application/vnd.kde.kchart": ["chrt"],
    "application/vnd.kde.kformula": ["kfo"],
    "application/vnd.kde.kivio": ["flw"],
    "application/vnd.kde.kontour": ["kon"],
    "application/vnd.kde.kpresenter": ["kpr", "kpt"],
    "application/vnd.kde.kspread": ["ksp"],
    "application/vnd.kde.kword": ["kwd", "kwt"],
    "application/vnd.kenameaapp": ["htke"],
    "application/vnd.kidspiration": ["kia"],
    "application/vnd.kinar": ["kne", "knp"],
    "application/vnd.koan": ["skp", "skd", "skt", "skm"],
    "application/vnd.kodak-descriptor": ["sse"],
    "application/vnd.las.las+xml": ["lasxml"],
    "application/vnd.llamagraphics.life-balance.desktop": ["lbd"],
    "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"],
    "application/vnd.lotus-1-2-3": ["123"],
    "application/vnd.lotus-approach": ["apr"],
    "application/vnd.lotus-freelance": ["pre"],
    "application/vnd.lotus-notes": ["nsf"],
    "application/vnd.lotus-organizer": ["org"],
    "application/vnd.lotus-screencam": ["scm"],
    "application/vnd.lotus-wordpro": ["lwp"],
    "application/vnd.macports.portpkg": ["portpkg"],
    "application/vnd.mapbox-vector-tile": ["mvt"],
    "application/vnd.mcd": ["mcd"],
    "application/vnd.medcalcdata": ["mc1"],
    "application/vnd.mediastation.cdkey": ["cdkey"],
    "application/vnd.mfer": ["mwf"],
    "application/vnd.mfmp": ["mfm"],
    "application/vnd.micrografx.flo": ["flo"],
    "application/vnd.micrografx.igx": ["igx"],
    "application/vnd.mif": ["mif"],
    "application/vnd.mobius.daf": ["daf"],
    "application/vnd.mobius.dis": ["dis"],
    "application/vnd.mobius.mbk": ["mbk"],
    "application/vnd.mobius.mqy": ["mqy"],
    "application/vnd.mobius.msl": ["msl"],
    "application/vnd.mobius.plc": ["plc"],
    "application/vnd.mobius.txf": ["txf"],
    "application/vnd.mophun.application": ["mpn"],
    "application/vnd.mophun.certificate": ["mpc"],
    "application/vnd.mozilla.xul+xml": ["xul"],
    "application/vnd.ms-artgalry": ["cil"],
    "application/vnd.ms-cab-compressed": ["cab"],
    "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"],
    "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"],
    "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"],
    "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"],
    "application/vnd.ms-excel.template.macroenabled.12": ["xltm"],
    "application/vnd.ms-fontobject": ["eot"],
    "application/vnd.ms-htmlhelp": ["chm"],
    "application/vnd.ms-ims": ["ims"],
    "application/vnd.ms-lrm": ["lrm"],
    "application/vnd.ms-officetheme": ["thmx"],
    "application/vnd.ms-outlook": ["msg"],
    "application/vnd.ms-pki.seccat": ["cat"],
    "application/vnd.ms-pki.stl": ["*stl"],
    "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"],
    "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"],
    "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"],
    "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"],
    "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"],
    "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"],
    "application/vnd.ms-project": ["mpp", "mpt"],
    "application/vnd.ms-word.document.macroenabled.12": ["docm"],
    "application/vnd.ms-word.template.macroenabled.12": ["dotm"],
    "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
    "application/vnd.ms-wpl": ["wpl"],
    "application/vnd.ms-xpsdocument": ["xps"],
    "application/vnd.mseq": ["mseq"],
    "application/vnd.musician": ["mus"],
    "application/vnd.muvee.style": ["msty"],
    "application/vnd.mynfc": ["taglet"],
    "application/vnd.neurolanguage.nlu": ["nlu"],
    "application/vnd.nitf": ["ntf", "nitf"],
    "application/vnd.noblenet-directory": ["nnd"],
    "application/vnd.noblenet-sealer": ["nns"],
    "application/vnd.noblenet-web": ["nnw"],
    "application/vnd.nokia.n-gage.ac+xml": ["*ac"],
    "application/vnd.nokia.n-gage.data": ["ngdat"],
    "application/vnd.nokia.n-gage.symbian.install": ["n-gage"],
    "application/vnd.nokia.radio-preset": ["rpst"],
    "application/vnd.nokia.radio-presets": ["rpss"],
    "application/vnd.novadigm.edm": ["edm"],
    "application/vnd.novadigm.edx": ["edx"],
    "application/vnd.novadigm.ext": ["ext"],
    "application/vnd.oasis.opendocument.chart": ["odc"],
    "application/vnd.oasis.opendocument.chart-template": ["otc"],
    "application/vnd.oasis.opendocument.database": ["odb"],
    "application/vnd.oasis.opendocument.formula": ["odf"],
    "application/vnd.oasis.opendocument.formula-template": ["odft"],
    "application/vnd.oasis.opendocument.graphics": ["odg"],
    "application/vnd.oasis.opendocument.graphics-template": ["otg"],
    "application/vnd.oasis.opendocument.image": ["odi"],
    "application/vnd.oasis.opendocument.image-template": ["oti"],
    "application/vnd.oasis.opendocument.presentation": ["odp"],
    "application/vnd.oasis.opendocument.presentation-template": ["otp"],
    "application/vnd.oasis.opendocument.spreadsheet": ["ods"],
    "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"],
    "application/vnd.oasis.opendocument.text": ["odt"],
    "application/vnd.oasis.opendocument.text-master": ["odm"],
    "application/vnd.oasis.opendocument.text-template": ["ott"],
    "application/vnd.oasis.opendocument.text-web": ["oth"],
    "application/vnd.olpc-sugar": ["xo"],
    "application/vnd.oma.dd2+xml": ["dd2"],
    "application/vnd.openblox.game+xml": ["obgx"],
    "application/vnd.openofficeorg.extension": ["oxt"],
    "application/vnd.openstreetmap.data+xml": ["osm"],
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      ["pptx"],
    "application/vnd.openxmlformats-officedocument.presentationml.slide": [
      "sldx",
    ],
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow": [
      "ppsx",
    ],
    "application/vnd.openxmlformats-officedocument.presentationml.template": [
      "potx",
    ],
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
      "xlsx",
    ],
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template": [
      "xltx",
    ],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
      "docx",
    ],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template": [
      "dotx",
    ],
    "application/vnd.osgeo.mapguide.package": ["mgp"],
    "application/vnd.osgi.dp": ["dp"],
    "application/vnd.osgi.subsystem": ["esa"],
    "application/vnd.palm": ["pdb", "pqa", "oprc"],
    "application/vnd.pawaafile": ["paw"],
    "application/vnd.pg.format": ["str"],
    "application/vnd.pg.osasli": ["ei6"],
    "application/vnd.picsel": ["efif"],
    "application/vnd.pmi.widget": ["wg"],
    "application/vnd.pocketlearn": ["plf"],
    "application/vnd.powerbuilder6": ["pbd"],
    "application/vnd.previewsystems.box": ["box"],
    "application/vnd.proteus.magazine": ["mgz"],
    "application/vnd.publishare-delta-tree": ["qps"],
    "application/vnd.pvi.ptid1": ["ptid"],
    "application/vnd.quark.quarkxpress": [
      "qxd",
      "qxt",
      "qwd",
      "qwt",
      "qxl",
      "qxb",
    ],
    "application/vnd.rar": ["rar"],
    "application/vnd.realvnc.bed": ["bed"],
    "application/vnd.recordare.musicxml": ["mxl"],
    "application/vnd.recordare.musicxml+xml": ["musicxml"],
    "application/vnd.rig.cryptonote": ["cryptonote"],
    "application/vnd.rim.cod": ["cod"],
    "application/vnd.rn-realmedia": ["rm"],
    "application/vnd.rn-realmedia-vbr": ["rmvb"],
    "application/vnd.route66.link66+xml": ["link66"],
    "application/vnd.sailingtracker.track": ["st"],
    "application/vnd.seemail": ["see"],
    "application/vnd.sema": ["sema"],
    "application/vnd.semd": ["semd"],
    "application/vnd.semf": ["semf"],
    "application/vnd.shana.informed.formdata": ["ifm"],
    "application/vnd.shana.informed.formtemplate": ["itp"],
    "application/vnd.shana.informed.interchange": ["iif"],
    "application/vnd.shana.informed.package": ["ipk"],
    "application/vnd.simtech-mindmapper": ["twd", "twds"],
    "application/vnd.smaf": ["mmf"],
    "application/vnd.smart.teacher": ["teacher"],
    "application/vnd.software602.filler.form+xml": ["fo"],
    "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
    "application/vnd.spotfire.dxp": ["dxp"],
    "application/vnd.spotfire.sfs": ["sfs"],
    "application/vnd.stardivision.calc": ["sdc"],
    "application/vnd.stardivision.draw": ["sda"],
    "application/vnd.stardivision.impress": ["sdd"],
    "application/vnd.stardivision.math": ["smf"],
    "application/vnd.stardivision.writer": ["sdw", "vor"],
    "application/vnd.stardivision.writer-global": ["sgl"],
    "application/vnd.stepmania.package": ["smzip"],
    "application/vnd.stepmania.stepchart": ["sm"],
    "application/vnd.sun.wadl+xml": ["wadl"],
    "application/vnd.sun.xml.calc": ["sxc"],
    "application/vnd.sun.xml.calc.template": ["stc"],
    "application/vnd.sun.xml.draw": ["sxd"],
    "application/vnd.sun.xml.draw.template": ["std"],
    "application/vnd.sun.xml.impress": ["sxi"],
    "application/vnd.sun.xml.impress.template": ["sti"],
    "application/vnd.sun.xml.math": ["sxm"],
    "application/vnd.sun.xml.writer": ["sxw"],
    "application/vnd.sun.xml.writer.global": ["sxg"],
    "application/vnd.sun.xml.writer.template": ["stw"],
    "application/vnd.sus-calendar": ["sus", "susp"],
    "application/vnd.svd": ["svd"],
    "application/vnd.symbian.install": ["sis", "sisx"],
    "application/vnd.syncml+xml": ["xsm"],
    "application/vnd.syncml.dm+wbxml": ["bdm"],
    "application/vnd.syncml.dm+xml": ["xdm"],
    "application/vnd.syncml.dmddf+xml": ["ddf"],
    "application/vnd.tao.intent-module-archive": ["tao"],
    "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
    "application/vnd.tmobile-livetv": ["tmo"],
    "application/vnd.trid.tpt": ["tpt"],
    "application/vnd.triscape.mxs": ["mxs"],
    "application/vnd.trueapp": ["tra"],
    "application/vnd.ufdl": ["ufd", "ufdl"],
    "application/vnd.uiq.theme": ["utz"],
    "application/vnd.umajin": ["umj"],
    "application/vnd.unity": ["unityweb"],
    "application/vnd.uoml+xml": ["uoml"],
    "application/vnd.vcx": ["vcx"],
    "application/vnd.visio": ["vsd", "vst", "vss", "vsw"],
    "application/vnd.visionary": ["vis"],
    "application/vnd.vsf": ["vsf"],
    "application/vnd.wap.wbxml": ["wbxml"],
    "application/vnd.wap.wmlc": ["wmlc"],
    "application/vnd.wap.wmlscriptc": ["wmlsc"],
    "application/vnd.webturbo": ["wtb"],
    "application/vnd.wolfram.player": ["nbp"],
    "application/vnd.wordperfect": ["wpd"],
    "application/vnd.wqd": ["wqd"],
    "application/vnd.wt.stf": ["stf"],
    "application/vnd.xara": ["xar"],
    "application/vnd.xfdl": ["xfdl"],
    "application/vnd.yamaha.hv-dic": ["hvd"],
    "application/vnd.yamaha.hv-script": ["hvs"],
    "application/vnd.yamaha.hv-voice": ["hvp"],
    "application/vnd.yamaha.openscoreformat": ["osf"],
    "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"],
    "application/vnd.yamaha.smaf-audio": ["saf"],
    "application/vnd.yamaha.smaf-phrase": ["spf"],
    "application/vnd.yellowriver-custom-menu": ["cmp"],
    "application/vnd.zul": ["zir", "zirz"],
    "application/vnd.zzazz.deck+xml": ["zaz"],
    "application/x-7z-compressed": ["7z"],
    "application/x-abiword": ["abw"],
    "application/x-ace-compressed": ["ace"],
    "application/x-apple-diskimage": ["*dmg"],
    "application/x-arj": ["arj"],
    "application/x-authorware-bin": ["aab", "x32", "u32", "vox"],
    "application/x-authorware-map": ["aam"],
    "application/x-authorware-seg": ["aas"],
    "application/x-bcpio": ["bcpio"],
    "application/x-bdoc": ["*bdoc"],
    "application/x-bittorrent": ["torrent"],
    "application/x-blorb": ["blb", "blorb"],
    "application/x-bzip": ["bz"],
    "application/x-bzip2": ["bz2", "boz"],
    "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"],
    "application/x-cdlink": ["vcd"],
    "application/x-cfs-compressed": ["cfs"],
    "application/x-chat": ["chat"],
    "application/x-chess-pgn": ["pgn"],
    "application/x-chrome-extension": ["crx"],
    "application/x-cocoa": ["cco"],
    "application/x-conference": ["nsc"],
    "application/x-cpio": ["cpio"],
    "application/x-csh": ["csh"],
    "application/x-debian-package": ["*deb", "udeb"],
    "application/x-dgc-compressed": ["dgc"],
    "application/x-director": [
      "dir",
      "dcr",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa",
    ],
    "application/x-doom": ["wad"],
    "application/x-dtbncx+xml": ["ncx"],
    "application/x-dtbook+xml": ["dtb"],
    "application/x-dtbresource+xml": ["res"],
    "application/x-dvi": ["dvi"],
    "application/x-envoy": ["evy"],
    "application/x-eva": ["eva"],
    "application/x-font-bdf": ["bdf"],
    "application/x-font-ghostscript": ["gsf"],
    "application/x-font-linux-psf": ["psf"],
    "application/x-font-pcf": ["pcf"],
    "application/x-font-snf": ["snf"],
    "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"],
    "application/x-freearc": ["arc"],
    "application/x-futuresplash": ["spl"],
    "application/x-gca-compressed": ["gca"],
    "application/x-glulx": ["ulx"],
    "application/x-gnumeric": ["gnumeric"],
    "application/x-gramps-xml": ["gramps"],
    "application/x-gtar": ["gtar"],
    "application/x-hdf": ["hdf"],
    "application/x-httpd-php": ["php"],
    "application/x-install-instructions": ["install"],
    "application/x-iso9660-image": ["*iso"],
    "application/x-iwork-keynote-sffkey": ["*key"],
    "application/x-iwork-numbers-sffnumbers": ["*numbers"],
    "application/x-iwork-pages-sffpages": ["*pages"],
    "application/x-java-archive-diff": ["jardiff"],
    "application/x-java-jnlp-file": ["jnlp"],
    "application/x-keepass2": ["kdbx"],
    "application/x-latex": ["latex"],
    "application/x-lua-bytecode": ["luac"],
    "application/x-lzh-compressed": ["lzh", "lha"],
    "application/x-makeself": ["run"],
    "application/x-mie": ["mie"],
    "application/x-mobipocket-ebook": ["prc", "mobi"],
    "application/x-ms-application": ["application"],
    "application/x-ms-shortcut": ["lnk"],
    "application/x-ms-wmd": ["wmd"],
    "application/x-ms-wmz": ["wmz"],
    "application/x-ms-xbap": ["xbap"],
    "application/x-msaccess": ["mdb"],
    "application/x-msbinder": ["obd"],
    "application/x-mscardfile": ["crd"],
    "application/x-msclip": ["clp"],
    "application/x-msdos-program": ["*exe"],
    "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"],
    "application/x-msmediaview": ["mvb", "m13", "m14"],
    "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"],
    "application/x-msmoney": ["mny"],
    "application/x-mspublisher": ["pub"],
    "application/x-msschedule": ["scd"],
    "application/x-msterminal": ["trm"],
    "application/x-mswrite": ["wri"],
    "application/x-netcdf": ["nc", "cdf"],
    "application/x-ns-proxy-autoconfig": ["pac"],
    "application/x-nzb": ["nzb"],
    "application/x-perl": ["pl", "pm"],
    "application/x-pilot": ["*prc", "*pdb"],
    "application/x-pkcs12": ["p12", "pfx"],
    "application/x-pkcs7-certificates": ["p7b", "spc"],
    "application/x-pkcs7-certreqresp": ["p7r"],
    "application/x-rar-compressed": ["*rar"],
    "application/x-redhat-package-manager": ["rpm"],
    "application/x-research-info-systems": ["ris"],
    "application/x-sea": ["sea"],
    "application/x-sh": ["sh"],
    "application/x-shar": ["shar"],
    "application/x-shockwave-flash": ["swf"],
    "application/x-silverlight-app": ["xap"],
    "application/x-sql": ["sql"],
    "application/x-stuffit": ["sit"],
    "application/x-stuffitx": ["sitx"],
    "application/x-subrip": ["srt"],
    "application/x-sv4cpio": ["sv4cpio"],
    "application/x-sv4crc": ["sv4crc"],
    "application/x-t3vm-image": ["t3"],
    "application/x-tads": ["gam"],
    "application/x-tar": ["tar"],
    "application/x-tcl": ["tcl", "tk"],
    "application/x-tex": ["tex"],
    "application/x-tex-tfm": ["tfm"],
    "application/x-texinfo": ["texinfo", "texi"],
    "application/x-tgif": ["*obj"],
    "application/x-ustar": ["ustar"],
    "application/x-virtualbox-hdd": ["hdd"],
    "application/x-virtualbox-ova": ["ova"],
    "application/x-virtualbox-ovf": ["ovf"],
    "application/x-virtualbox-vbox": ["vbox"],
    "application/x-virtualbox-vbox-extpack": ["vbox-extpack"],
    "application/x-virtualbox-vdi": ["vdi"],
    "application/x-virtualbox-vhd": ["vhd"],
    "application/x-virtualbox-vmdk": ["vmdk"],
    "application/x-wais-source": ["src"],
    "application/x-web-app-manifest+json": ["webapp"],
    "application/x-x509-ca-cert": ["der", "crt", "pem"],
    "application/x-xfig": ["fig"],
    "application/x-xliff+xml": ["*xlf"],
    "application/x-xpinstall": ["xpi"],
    "application/x-xz": ["xz"],
    "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
    "audio/vnd.dece.audio": ["uva", "uvva"],
    "audio/vnd.digital-winds": ["eol"],
    "audio/vnd.dra": ["dra"],
    "audio/vnd.dts": ["dts"],
    "audio/vnd.dts.hd": ["dtshd"],
    "audio/vnd.lucent.voice": ["lvp"],
    "audio/vnd.ms-playready.media.pya": ["pya"],
    "audio/vnd.nuera.ecelp4800": ["ecelp4800"],
    "audio/vnd.nuera.ecelp7470": ["ecelp7470"],
    "audio/vnd.nuera.ecelp9600": ["ecelp9600"],
    "audio/vnd.rip": ["rip"],
    "audio/x-aac": ["aac"],
    "audio/x-aiff": ["aif", "aiff", "aifc"],
    "audio/x-caf": ["caf"],
    "audio/x-flac": ["flac"],
    "audio/x-m4a": ["*m4a"],
    "audio/x-matroska": ["mka"],
    "audio/x-mpegurl": ["m3u"],
    "audio/x-ms-wax": ["wax"],
    "audio/x-ms-wma": ["wma"],
    "audio/x-pn-realaudio": ["ram", "ra"],
    "audio/x-pn-realaudio-plugin": ["rmp"],
    "audio/x-realaudio": ["*ra"],
    "audio/x-wav": ["*wav"],
    "chemical/x-cdx": ["cdx"],
    "chemical/x-cif": ["cif"],
    "chemical/x-cmdf": ["cmdf"],
    "chemical/x-cml": ["cml"],
    "chemical/x-csml": ["csml"],
    "chemical/x-xyz": ["xyz"],
    "image/prs.btif": ["btif"],
    "image/prs.pti": ["pti"],
    "image/vnd.adobe.photoshop": ["psd"],
    "image/vnd.airzip.accelerator.azv": ["azv"],
    "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
    "image/vnd.djvu": ["djvu", "djv"],
    "image/vnd.dvb.subtitle": ["*sub"],
    "image/vnd.dwg": ["dwg"],
    "image/vnd.dxf": ["dxf"],
    "image/vnd.fastbidsheet": ["fbs"],
    "image/vnd.fpx": ["fpx"],
    "image/vnd.fst": ["fst"],
    "image/vnd.fujixerox.edmics-mmr": ["mmr"],
    "image/vnd.fujixerox.edmics-rlc": ["rlc"],
    "image/vnd.microsoft.icon": ["ico"],
    "image/vnd.ms-dds": ["dds"],
    "image/vnd.ms-modi": ["mdi"],
    "image/vnd.ms-photo": ["wdp"],
    "image/vnd.net-fpx": ["npx"],
    "image/vnd.pco.b16": ["b16"],
    "image/vnd.tencent.tap": ["tap"],
    "image/vnd.valve.source.texture": ["vtf"],
    "image/vnd.wap.wbmp": ["wbmp"],
    "image/vnd.xiff": ["xif"],
    "image/vnd.zbrush.pcx": ["pcx"],
    "image/x-3ds": ["3ds"],
    "image/x-cmu-raster": ["ras"],
    "image/x-cmx": ["cmx"],
    "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
    "image/x-icon": ["*ico"],
    "image/x-jng": ["jng"],
    "image/x-mrsid-image": ["sid"],
    "image/x-ms-bmp": ["*bmp"],
    "image/x-pcx": ["*pcx"],
    "image/x-pict": ["pic", "pct"],
    "image/x-portable-anymap": ["pnm"],
    "image/x-portable-bitmap": ["pbm"],
    "image/x-portable-graymap": ["pgm"],
    "image/x-portable-pixmap": ["ppm"],
    "image/x-rgb": ["rgb"],
    "image/x-tga": ["tga"],
    "image/x-xbitmap": ["xbm"],
    "image/x-xpixmap": ["xpm"],
    "image/x-xwindowdump": ["xwd"],
    "message/vnd.wfa.wsc": ["wsc"],
    "model/vnd.collada+xml": ["dae"],
    "model/vnd.dwf": ["dwf"],
    "model/vnd.gdl": ["gdl"],
    "model/vnd.gtw": ["gtw"],
    "model/vnd.mts": ["mts"],
    "model/vnd.opengex": ["ogex"],
    "model/vnd.parasolid.transmit.binary": ["x_b"],
    "model/vnd.parasolid.transmit.text": ["x_t"],
    "model/vnd.sap.vds": ["vds"],
    "model/vnd.usdz+zip": ["usdz"],
    "model/vnd.valve.source.compiled-map": ["bsp"],
    "model/vnd.vtu": ["vtu"],
    "text/prs.lines.tag": ["dsc"],
    "text/vnd.curl": ["curl"],
    "text/vnd.curl.dcurl": ["dcurl"],
    "text/vnd.curl.mcurl": ["mcurl"],
    "text/vnd.curl.scurl": ["scurl"],
    "text/vnd.dvb.subtitle": ["sub"],
    "text/vnd.fly": ["fly"],
    "text/vnd.fmi.flexstor": ["flx"],
    "text/vnd.graphviz": ["gv"],
    "text/vnd.in3d.3dml": ["3dml"],
    "text/vnd.in3d.spot": ["spot"],
    "text/vnd.sun.j2me.app-descriptor": ["jad"],
    "text/vnd.wap.wml": ["wml"],
    "text/vnd.wap.wmlscript": ["wmls"],
    "text/x-asm": ["s", "asm"],
    "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
    "text/x-component": ["htc"],
    "text/x-fortran": ["f", "for", "f77", "f90"],
    "text/x-handlebars-template": ["hbs"],
    "text/x-java-source": ["java"],
    "text/x-lua": ["lua"],
    "text/x-markdown": ["mkd"],
    "text/x-nfo": ["nfo"],
    "text/x-opml": ["opml"],
    "text/x-org": ["*org"],
    "text/x-pascal": ["p", "pas"],
    "text/x-processing": ["pde"],
    "text/x-sass": ["sass"],
    "text/x-scss": ["scss"],
    "text/x-setext": ["etx"],
    "text/x-sfv": ["sfv"],
    "text/x-suse-ymp": ["ymp"],
    "text/x-uuencode": ["uu"],
    "text/x-vcalendar": ["vcs"],
    "text/x-vcard": ["vcf"],
    "video/vnd.dece.hd": ["uvh", "uvvh"],
    "video/vnd.dece.mobile": ["uvm", "uvvm"],
    "video/vnd.dece.pd": ["uvp", "uvvp"],
    "video/vnd.dece.sd": ["uvs", "uvvs"],
    "video/vnd.dece.video": ["uvv", "uvvv"],
    "video/vnd.dvb.file": ["dvb"],
    "video/vnd.fvt": ["fvt"],
    "video/vnd.mpegurl": ["mxu", "m4u"],
    "video/vnd.ms-playready.media.pyv": ["pyv"],
    "video/vnd.uvvu.mp4": ["uvu", "uvvu"],
    "video/vnd.vivo": ["viv"],
    "video/x-f4v": ["f4v"],
    "video/x-fli": ["fli"],
    "video/x-flv": ["flv"],
    "video/x-m4v": ["m4v"],
    "video/x-matroska": ["mkv", "mk3d", "mks"],
    "video/x-mng": ["mng"],
    "video/x-ms-asf": ["asf", "asx"],
    "video/x-ms-vob": ["vob"],
    "video/x-ms-wm": ["wm"],
    "video/x-ms-wmv": ["wmv"],
    "video/x-ms-wmx": ["wmx"],
    "video/x-ms-wvx": ["wvx"],
    "video/x-msvideo": ["avi"],
    "video/x-sgi-movie": ["movie"],
    "video/x-smv": ["smv"],
    "x-conference/x-cooltalk": ["ice"],
  };
});
var d0 = qe((C2, xu) => {
  "use strict";
  var $f = mu();
  xu.exports = new $f(vu(), Du());
});
var f0 = qe((p0) => {
  "use strict";
  p0.parse = Hf;
  p0.serialize = Uf;
  var qf = Object.prototype.toString,
    Ia = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function Hf(t, e) {
    if (typeof t != "string")
      throw new TypeError("argument str must be a string");
    for (var n = {}, r = e || {}, o = r.decode || Vf, l = 0; l < t.length; ) {
      var d = t.indexOf("=", l);
      if (d === -1) break;
      var m = t.indexOf(";", l);
      if (m === -1) m = t.length;
      else if (m < d) {
        l = t.lastIndexOf(";", d - 1) + 1;
        continue;
      }
      var v = t.slice(l, d).trim();
      if (n[v] === void 0) {
        var w = t.slice(d + 1, m).trim();
        w.charCodeAt(0) === 34 && (w = w.slice(1, -1)), (n[v] = Zf(w, o));
      }
      l = m + 1;
    }
    return n;
  }
  function Uf(t, e, n) {
    var r = n || {},
      o = r.encode || Wf;
    if (typeof o != "function") throw new TypeError("option encode is invalid");
    if (!Ia.test(t)) throw new TypeError("argument name is invalid");
    var l = o(e);
    if (l && !Ia.test(l)) throw new TypeError("argument val is invalid");
    var d = t + "=" + l;
    if (r.maxAge != null) {
      var m = r.maxAge - 0;
      if (isNaN(m) || !isFinite(m))
        throw new TypeError("option maxAge is invalid");
      d += "; Max-Age=" + Math.floor(m);
    }
    if (r.domain) {
      if (!Ia.test(r.domain)) throw new TypeError("option domain is invalid");
      d += "; Domain=" + r.domain;
    }
    if (r.path) {
      if (!Ia.test(r.path)) throw new TypeError("option path is invalid");
      d += "; Path=" + r.path;
    }
    if (r.expires) {
      var v = r.expires;
      if (!Gf(v) || isNaN(v.valueOf()))
        throw new TypeError("option expires is invalid");
      d += "; Expires=" + v.toUTCString();
    }
    if (
      (r.httpOnly && (d += "; HttpOnly"),
      r.secure && (d += "; Secure"),
      r.priority)
    ) {
      var w =
        typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority;
      switch (w) {
        case "low":
          d += "; Priority=Low";
          break;
        case "medium":
          d += "; Priority=Medium";
          break;
        case "high":
          d += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (r.sameSite) {
      var S =
        typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite;
      switch (S) {
        case !0:
          d += "; SameSite=Strict";
          break;
        case "lax":
          d += "; SameSite=Lax";
          break;
        case "strict":
          d += "; SameSite=Strict";
          break;
        case "none":
          d += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return d;
  }
  function Vf(t) {
    return t.indexOf("%") !== -1 ? decodeURIComponent(t) : t;
  }
  function Wf(t) {
    return encodeURIComponent(t);
  }
  function Gf(t) {
    return qf.call(t) === "[object Date]" || t instanceof Date;
  }
  function Zf(t, e) {
    try {
      return e(t);
    } catch {
      return t;
    }
  }
});
var Tu = qe((X2, m0) => {
  var br = {};
  typeof m0 > "u" ? (window.eastasianwidth = br) : (m0.exports = br);
  br.eastAsianWidth = function (t) {
    var e = t.charCodeAt(0),
      n = t.length == 2 ? t.charCodeAt(1) : 0,
      r = e;
    return (
      55296 <= e &&
        e <= 56319 &&
        56320 <= n &&
        n <= 57343 &&
        ((e &= 1023), (n &= 1023), (r = (e << 10) | n), (r += 65536)),
      r == 12288 || (65281 <= r && r <= 65376) || (65504 <= r && r <= 65510)
        ? "F"
        : r == 8361 ||
          (65377 <= r && r <= 65470) ||
          (65474 <= r && r <= 65479) ||
          (65482 <= r && r <= 65487) ||
          (65490 <= r && r <= 65495) ||
          (65498 <= r && r <= 65500) ||
          (65512 <= r && r <= 65518)
        ? "H"
        : (4352 <= r && r <= 4447) ||
          (4515 <= r && r <= 4519) ||
          (4602 <= r && r <= 4607) ||
          (9001 <= r && r <= 9002) ||
          (11904 <= r && r <= 11929) ||
          (11931 <= r && r <= 12019) ||
          (12032 <= r && r <= 12245) ||
          (12272 <= r && r <= 12283) ||
          (12289 <= r && r <= 12350) ||
          (12353 <= r && r <= 12438) ||
          (12441 <= r && r <= 12543) ||
          (12549 <= r && r <= 12589) ||
          (12593 <= r && r <= 12686) ||
          (12688 <= r && r <= 12730) ||
          (12736 <= r && r <= 12771) ||
          (12784 <= r && r <= 12830) ||
          (12832 <= r && r <= 12871) ||
          (12880 <= r && r <= 13054) ||
          (13056 <= r && r <= 19903) ||
          (19968 <= r && r <= 42124) ||
          (42128 <= r && r <= 42182) ||
          (43360 <= r && r <= 43388) ||
          (44032 <= r && r <= 55203) ||
          (55216 <= r && r <= 55238) ||
          (55243 <= r && r <= 55291) ||
          (63744 <= r && r <= 64255) ||
          (65040 <= r && r <= 65049) ||
          (65072 <= r && r <= 65106) ||
          (65108 <= r && r <= 65126) ||
          (65128 <= r && r <= 65131) ||
          (110592 <= r && r <= 110593) ||
          (127488 <= r && r <= 127490) ||
          (127504 <= r && r <= 127546) ||
          (127552 <= r && r <= 127560) ||
          (127568 <= r && r <= 127569) ||
          (131072 <= r && r <= 194367) ||
          (177984 <= r && r <= 196605) ||
          (196608 <= r && r <= 262141)
        ? "W"
        : (32 <= r && r <= 126) ||
          (162 <= r && r <= 163) ||
          (165 <= r && r <= 166) ||
          r == 172 ||
          r == 175 ||
          (10214 <= r && r <= 10221) ||
          (10629 <= r && r <= 10630)
        ? "Na"
        : r == 161 ||
          r == 164 ||
          (167 <= r && r <= 168) ||
          r == 170 ||
          (173 <= r && r <= 174) ||
          (176 <= r && r <= 180) ||
          (182 <= r && r <= 186) ||
          (188 <= r && r <= 191) ||
          r == 198 ||
          r == 208 ||
          (215 <= r && r <= 216) ||
          (222 <= r && r <= 225) ||
          r == 230 ||
          (232 <= r && r <= 234) ||
          (236 <= r && r <= 237) ||
          r == 240 ||
          (242 <= r && r <= 243) ||
          (247 <= r && r <= 250) ||
          r == 252 ||
          r == 254 ||
          r == 257 ||
          r == 273 ||
          r == 275 ||
          r == 283 ||
          (294 <= r && r <= 295) ||
          r == 299 ||
          (305 <= r && r <= 307) ||
          r == 312 ||
          (319 <= r && r <= 322) ||
          r == 324 ||
          (328 <= r && r <= 331) ||
          r == 333 ||
          (338 <= r && r <= 339) ||
          (358 <= r && r <= 359) ||
          r == 363 ||
          r == 462 ||
          r == 464 ||
          r == 466 ||
          r == 468 ||
          r == 470 ||
          r == 472 ||
          r == 474 ||
          r == 476 ||
          r == 593 ||
          r == 609 ||
          r == 708 ||
          r == 711 ||
          (713 <= r && r <= 715) ||
          r == 717 ||
          r == 720 ||
          (728 <= r && r <= 731) ||
          r == 733 ||
          r == 735 ||
          (768 <= r && r <= 879) ||
          (913 <= r && r <= 929) ||
          (931 <= r && r <= 937) ||
          (945 <= r && r <= 961) ||
          (963 <= r && r <= 969) ||
          r == 1025 ||
          (1040 <= r && r <= 1103) ||
          r == 1105 ||
          r == 8208 ||
          (8211 <= r && r <= 8214) ||
          (8216 <= r && r <= 8217) ||
          (8220 <= r && r <= 8221) ||
          (8224 <= r && r <= 8226) ||
          (8228 <= r && r <= 8231) ||
          r == 8240 ||
          (8242 <= r && r <= 8243) ||
          r == 8245 ||
          r == 8251 ||
          r == 8254 ||
          r == 8308 ||
          r == 8319 ||
          (8321 <= r && r <= 8324) ||
          r == 8364 ||
          r == 8451 ||
          r == 8453 ||
          r == 8457 ||
          r == 8467 ||
          r == 8470 ||
          (8481 <= r && r <= 8482) ||
          r == 8486 ||
          r == 8491 ||
          (8531 <= r && r <= 8532) ||
          (8539 <= r && r <= 8542) ||
          (8544 <= r && r <= 8555) ||
          (8560 <= r && r <= 8569) ||
          r == 8585 ||
          (8592 <= r && r <= 8601) ||
          (8632 <= r && r <= 8633) ||
          r == 8658 ||
          r == 8660 ||
          r == 8679 ||
          r == 8704 ||
          (8706 <= r && r <= 8707) ||
          (8711 <= r && r <= 8712) ||
          r == 8715 ||
          r == 8719 ||
          r == 8721 ||
          r == 8725 ||
          r == 8730 ||
          (8733 <= r && r <= 8736) ||
          r == 8739 ||
          r == 8741 ||
          (8743 <= r && r <= 8748) ||
          r == 8750 ||
          (8756 <= r && r <= 8759) ||
          (8764 <= r && r <= 8765) ||
          r == 8776 ||
          r == 8780 ||
          r == 8786 ||
          (8800 <= r && r <= 8801) ||
          (8804 <= r && r <= 8807) ||
          (8810 <= r && r <= 8811) ||
          (8814 <= r && r <= 8815) ||
          (8834 <= r && r <= 8835) ||
          (8838 <= r && r <= 8839) ||
          r == 8853 ||
          r == 8857 ||
          r == 8869 ||
          r == 8895 ||
          r == 8978 ||
          (9312 <= r && r <= 9449) ||
          (9451 <= r && r <= 9547) ||
          (9552 <= r && r <= 9587) ||
          (9600 <= r && r <= 9615) ||
          (9618 <= r && r <= 9621) ||
          (9632 <= r && r <= 9633) ||
          (9635 <= r && r <= 9641) ||
          (9650 <= r && r <= 9651) ||
          (9654 <= r && r <= 9655) ||
          (9660 <= r && r <= 9661) ||
          (9664 <= r && r <= 9665) ||
          (9670 <= r && r <= 9672) ||
          r == 9675 ||
          (9678 <= r && r <= 9681) ||
          (9698 <= r && r <= 9701) ||
          r == 9711 ||
          (9733 <= r && r <= 9734) ||
          r == 9737 ||
          (9742 <= r && r <= 9743) ||
          (9748 <= r && r <= 9749) ||
          r == 9756 ||
          r == 9758 ||
          r == 9792 ||
          r == 9794 ||
          (9824 <= r && r <= 9825) ||
          (9827 <= r && r <= 9829) ||
          (9831 <= r && r <= 9834) ||
          (9836 <= r && r <= 9837) ||
          r == 9839 ||
          (9886 <= r && r <= 9887) ||
          (9918 <= r && r <= 9919) ||
          (9924 <= r && r <= 9933) ||
          (9935 <= r && r <= 9953) ||
          r == 9955 ||
          (9960 <= r && r <= 9983) ||
          r == 10045 ||
          r == 10071 ||
          (10102 <= r && r <= 10111) ||
          (11093 <= r && r <= 11097) ||
          (12872 <= r && r <= 12879) ||
          (57344 <= r && r <= 63743) ||
          (65024 <= r && r <= 65039) ||
          r == 65533 ||
          (127232 <= r && r <= 127242) ||
          (127248 <= r && r <= 127277) ||
          (127280 <= r && r <= 127337) ||
          (127344 <= r && r <= 127386) ||
          (917760 <= r && r <= 917999) ||
          (983040 <= r && r <= 1048573) ||
          (1048576 <= r && r <= 1114109)
        ? "A"
        : "N"
    );
  };
  br.characterLength = function (t) {
    var e = this.eastAsianWidth(t);
    return e == "F" || e == "W" || e == "A" ? 2 : 1;
  };
  function Bu(t) {
    return t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
  }
  br.length = function (t) {
    for (var e = Bu(t), n = 0, r = 0; r < e.length; r++)
      n = n + this.characterLength(e[r]);
    return n;
  };
  br.slice = function (t, e, n) {
    (textLen = br.length(t)),
      (e = e || 0),
      (n = n || 1),
      e < 0 && (e = textLen + e),
      n < 0 && (n = textLen + n);
    for (var r = "", o = 0, l = Bu(t), d = 0; d < l.length; d++) {
      var m = l[d],
        v = br.length(m);
      if (o >= e - (v == 2 ? 1 : 0))
        if (o + v <= n) r += m;
        else break;
      o += v;
    }
    return r;
  };
});
var Mu = qe((K2, Nu) => {
  "use strict";
  Nu.exports = function () {
    return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
  };
});
var ms = qe((sr) => {
  "use strict";
  var Wc =
      ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
    Fm = Wc + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
    Gc = "[" + Wc + "][" + Fm + "]*",
    Bm = new RegExp("^" + Gc + "$"),
    Tm = function (t, e) {
      let n = [],
        r = e.exec(t);
      for (; r; ) {
        let o = [];
        o.startIndex = e.lastIndex - r[0].length;
        let l = r.length;
        for (let d = 0; d < l; d++) o.push(r[d]);
        n.push(o), (r = e.exec(t));
      }
      return n;
    },
    Nm = function (t) {
      let e = Bm.exec(t);
      return !(e === null || typeof e > "u");
    };
  sr.isExist = function (t) {
    return typeof t < "u";
  };
  sr.isEmptyObject = function (t) {
    return Object.keys(t).length === 0;
  };
  sr.merge = function (t, e, n) {
    if (e) {
      let r = Object.keys(e),
        o = r.length;
      for (let l = 0; l < o; l++)
        n === "strict" ? (t[r[l]] = [e[r[l]]]) : (t[r[l]] = e[r[l]]);
    }
  };
  sr.getValue = function (t) {
    return sr.isExist(t) ? t : "";
  };
  sr.isName = Nm;
  sr.getAllMatches = Tm;
  sr.nameRegexp = Gc;
});
var vs = qe((Yc) => {
  "use strict";
  var gs = ms(),
    Mm = { allowBooleanAttributes: !1, unpairedTags: [] };
  Yc.validate = function (t, e) {
    e = Object.assign({}, Mm, e);
    let n = [],
      r = !1,
      o = !1;
    t[0] === "\uFEFF" && (t = t.substr(1));
    for (let l = 0; l < t.length; l++)
      if (t[l] === "<" && t[l + 1] === "?") {
        if (((l += 2), (l = Jc(t, l)), l.err)) return l;
      } else if (t[l] === "<") {
        let d = l;
        if ((l++, t[l] === "!")) {
          l = Xc(t, l);
          continue;
        } else {
          let m = !1;
          t[l] === "/" && ((m = !0), l++);
          let v = "";
          for (
            ;
            l < t.length &&
            t[l] !== ">" &&
            t[l] !== " " &&
            t[l] !== "	" &&
            t[l] !==
              `
` &&
            t[l] !== "\r";
            l++
          )
            v += t[l];
          if (
            ((v = v.trim()),
            v[v.length - 1] === "/" &&
              ((v = v.substring(0, v.length - 1)), l--),
            !Lm(v))
          ) {
            let A;
            return (
              v.trim().length === 0
                ? (A = "Invalid space after '<'.")
                : (A = "Tag '" + v + "' is an invalid name."),
              Ue("InvalidTag", A, it(t, l))
            );
          }
          let w = zm(t, l);
          if (w === !1)
            return Ue(
              "InvalidAttr",
              "Attributes for '" + v + "' have open quote.",
              it(t, l)
            );
          let S = w.value;
          if (((l = w.index), S[S.length - 1] === "/")) {
            let A = l - S.length;
            S = S.substring(0, S.length - 1);
            let N = Kc(S, e);
            if (N === !0) r = !0;
            else return Ue(N.err.code, N.err.msg, it(t, A + N.err.line));
          } else if (m)
            if (w.tagClosed) {
              if (S.trim().length > 0)
                return Ue(
                  "InvalidTag",
                  "Closing tag '" +
                    v +
                    "' can't have attributes or invalid starting.",
                  it(t, d)
                );
              {
                let A = n.pop();
                if (v !== A.tagName) {
                  let N = it(t, A.tagStartPos);
                  return Ue(
                    "InvalidTag",
                    "Expected closing tag '" +
                      A.tagName +
                      "' (opened in line " +
                      N.line +
                      ", col " +
                      N.col +
                      ") instead of closing tag '" +
                      v +
                      "'.",
                    it(t, d)
                  );
                }
                n.length == 0 && (o = !0);
              }
            } else
              return Ue(
                "InvalidTag",
                "Closing tag '" + v + "' doesn't have proper closing.",
                it(t, l)
              );
          else {
            let A = Kc(S, e);
            if (A !== !0)
              return Ue(
                A.err.code,
                A.err.msg,
                it(t, l - S.length + A.err.line)
              );
            if (o === !0)
              return Ue(
                "InvalidXml",
                "Multiple possible root nodes found.",
                it(t, l)
              );
            e.unpairedTags.indexOf(v) !== -1 ||
              n.push({ tagName: v, tagStartPos: d }),
              (r = !0);
          }
          for (l++; l < t.length; l++)
            if (t[l] === "<")
              if (t[l + 1] === "!") {
                l++, (l = Xc(t, l));
                continue;
              } else if (t[l + 1] === "?") {
                if (((l = Jc(t, ++l)), l.err)) return l;
              } else break;
            else if (t[l] === "&") {
              let A = Im(t, l);
              if (A == -1)
                return Ue("InvalidChar", "char '&' is not expected.", it(t, l));
              l = A;
            } else if (o === !0 && !Zc(t[l]))
              return Ue("InvalidXml", "Extra text at the end", it(t, l));
          t[l] === "<" && l--;
        }
      } else {
        if (Zc(t[l])) continue;
        return Ue(
          "InvalidChar",
          "char '" + t[l] + "' is not expected.",
          it(t, l)
        );
      }
    if (r) {
      if (n.length == 1)
        return Ue(
          "InvalidTag",
          "Unclosed tag '" + n[0].tagName + "'.",
          it(t, n[0].tagStartPos)
        );
      if (n.length > 0)
        return Ue(
          "InvalidXml",
          "Invalid '" +
            JSON.stringify(
              n.map((l) => l.tagName),
              null,
              4
            ).replace(/\r?\n/g, "") +
            "' found.",
          { line: 1, col: 1 }
        );
    } else return Ue("InvalidXml", "Start tag expected.", 1);
    return !0;
  };
  function Zc(t) {
    return (
      t === " " ||
      t === "	" ||
      t ===
        `
` ||
      t === "\r"
    );
  }
  function Jc(t, e) {
    let n = e;
    for (; e < t.length; e++)
      if (t[e] == "?" || t[e] == " ") {
        let r = t.substr(n, e - n);
        if (e > 5 && r === "xml")
          return Ue(
            "InvalidXml",
            "XML declaration allowed only at the start of the document.",
            it(t, e)
          );
        if (t[e] == "?" && t[e + 1] == ">") {
          e++;
          break;
        } else continue;
      }
    return e;
  }
  function Xc(t, e) {
    if (t.length > e + 5 && t[e + 1] === "-" && t[e + 2] === "-") {
      for (e += 3; e < t.length; e++)
        if (t[e] === "-" && t[e + 1] === "-" && t[e + 2] === ">") {
          e += 2;
          break;
        }
    } else if (
      t.length > e + 8 &&
      t[e + 1] === "D" &&
      t[e + 2] === "O" &&
      t[e + 3] === "C" &&
      t[e + 4] === "T" &&
      t[e + 5] === "Y" &&
      t[e + 6] === "P" &&
      t[e + 7] === "E"
    ) {
      let n = 1;
      for (e += 8; e < t.length; e++)
        if (t[e] === "<") n++;
        else if (t[e] === ">" && (n--, n === 0)) break;
    } else if (
      t.length > e + 9 &&
      t[e + 1] === "[" &&
      t[e + 2] === "C" &&
      t[e + 3] === "D" &&
      t[e + 4] === "A" &&
      t[e + 5] === "T" &&
      t[e + 6] === "A" &&
      t[e + 7] === "["
    ) {
      for (e += 8; e < t.length; e++)
        if (t[e] === "]" && t[e + 1] === "]" && t[e + 2] === ">") {
          e += 2;
          break;
        }
    }
    return e;
  }
  var Om = '"',
    _m = "'";
  function zm(t, e) {
    let n = "",
      r = "",
      o = !1;
    for (; e < t.length; e++) {
      if (t[e] === Om || t[e] === _m)
        r === "" ? (r = t[e]) : r !== t[e] || (r = "");
      else if (t[e] === ">" && r === "") {
        o = !0;
        break;
      }
      n += t[e];
    }
    return r !== "" ? !1 : { value: n, index: e, tagClosed: o };
  }
  var Rm = new RegExp(
    `(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,
    "g"
  );
  function Kc(t, e) {
    let n = gs.getAllMatches(t, Rm),
      r = {};
    for (let o = 0; o < n.length; o++) {
      if (n[o][1].length === 0)
        return Ue(
          "InvalidAttr",
          "Attribute '" + n[o][2] + "' has no space in starting.",
          ca(n[o])
        );
      if (n[o][3] !== void 0 && n[o][4] === void 0)
        return Ue(
          "InvalidAttr",
          "Attribute '" + n[o][2] + "' is without value.",
          ca(n[o])
        );
      if (n[o][3] === void 0 && !e.allowBooleanAttributes)
        return Ue(
          "InvalidAttr",
          "boolean attribute '" + n[o][2] + "' is not allowed.",
          ca(n[o])
        );
      let l = n[o][2];
      if (!jm(l))
        return Ue(
          "InvalidAttr",
          "Attribute '" + l + "' is an invalid name.",
          ca(n[o])
        );
      if (!r.hasOwnProperty(l)) r[l] = 1;
      else
        return Ue(
          "InvalidAttr",
          "Attribute '" + l + "' is repeated.",
          ca(n[o])
        );
    }
    return !0;
  }
  function Pm(t, e) {
    let n = /\d/;
    for (t[e] === "x" && (e++, (n = /[\da-fA-F]/)); e < t.length; e++) {
      if (t[e] === ";") return e;
      if (!t[e].match(n)) break;
    }
    return -1;
  }
  function Im(t, e) {
    if ((e++, t[e] === ";")) return -1;
    if (t[e] === "#") return e++, Pm(t, e);
    let n = 0;
    for (; e < t.length; e++, n++)
      if (!(t[e].match(/\w/) && n < 20)) {
        if (t[e] === ";") break;
        return -1;
      }
    return e;
  }
  function Ue(t, e, n) {
    return { err: { code: t, msg: e, line: n.line || n, col: n.col } };
  }
  function jm(t) {
    return gs.isName(t);
  }
  function Lm(t) {
    return gs.isName(t);
  }
  function it(t, e) {
    let n = t.substring(0, e).split(/\r?\n/);
    return { line: n.length, col: n[n.length - 1].length + 1 };
  }
  function ca(t) {
    return t.startIndex + t[1].length;
  }
});
var ed = qe((ys) => {
  var Qc = {
      preserveOrder: !1,
      attributeNamePrefix: "@_",
      attributesGroupName: !1,
      textNodeName: "#text",
      ignoreAttributes: !0,
      removeNSPrefix: !1,
      allowBooleanAttributes: !1,
      parseTagValue: !0,
      parseAttributeValue: !1,
      trimValues: !0,
      cdataPropName: !1,
      numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 },
      tagValueProcessor: function (t, e) {
        return e;
      },
      attributeValueProcessor: function (t, e) {
        return e;
      },
      stopNodes: [],
      alwaysCreateTextNode: !1,
      isArray: () => !1,
      commentPropName: !1,
      unpairedTags: [],
      processEntities: !0,
      htmlEntities: !1,
      ignoreDeclaration: !1,
      ignorePiTags: !1,
      transformTagName: !1,
      transformAttributeName: !1,
    },
    $m = function (t) {
      return Object.assign({}, Qc, t);
    };
  ys.buildOptions = $m;
  ys.defaultOptions = Qc;
});
var rd = qe((f6, td) => {
  "use strict";
  var Ds = class {
    constructor(e) {
      (this.tagname = e), (this.child = []), (this[":@"] = {});
    }
    add(e, n) {
      e === "__proto__" && (e = "#__proto__"), this.child.push({ [e]: n });
    }
    addChild(e) {
      e.tagname === "__proto__" && (e.tagname = "#__proto__"),
        e[":@"] && Object.keys(e[":@"]).length > 0
          ? this.child.push({ [e.tagname]: e.child, [":@"]: e[":@"] })
          : this.child.push({ [e.tagname]: e.child });
    }
  };
  td.exports = Ds;
});
var ad = qe((h6, nd) => {
  function qm(t, e) {
    let n = {};
    if (
      t[e + 3] === "O" &&
      t[e + 4] === "C" &&
      t[e + 5] === "T" &&
      t[e + 6] === "Y" &&
      t[e + 7] === "P" &&
      t[e + 8] === "E"
    ) {
      e = e + 9;
      let r = 1,
        o = !1,
        l = !1,
        d = !1,
        m = "";
      for (; e < t.length; e++)
        if (t[e] === "<" && !d) {
          if (
            o &&
            t[e + 1] === "!" &&
            t[e + 2] === "E" &&
            t[e + 3] === "N" &&
            t[e + 4] === "T" &&
            t[e + 5] === "I" &&
            t[e + 6] === "T" &&
            t[e + 7] === "Y"
          )
            (e += 7), (l = !0);
          else if (
            o &&
            t[e + 1] === "!" &&
            t[e + 2] === "E" &&
            t[e + 3] === "L" &&
            t[e + 4] === "E" &&
            t[e + 5] === "M" &&
            t[e + 6] === "E" &&
            t[e + 7] === "N" &&
            t[e + 8] === "T"
          )
            e += 8;
          else if (
            o &&
            t[e + 1] === "!" &&
            t[e + 2] === "A" &&
            t[e + 3] === "T" &&
            t[e + 4] === "T" &&
            t[e + 5] === "L" &&
            t[e + 6] === "I" &&
            t[e + 7] === "S" &&
            t[e + 8] === "T"
          )
            e += 8;
          else if (
            o &&
            t[e + 1] === "!" &&
            t[e + 2] === "N" &&
            t[e + 3] === "O" &&
            t[e + 4] === "T" &&
            t[e + 5] === "A" &&
            t[e + 6] === "T" &&
            t[e + 7] === "I" &&
            t[e + 8] === "O" &&
            t[e + 9] === "N"
          )
            e += 9;
          else if (t[e + 1] === "!" && t[e + 2] === "-" && t[e + 3] === "-")
            d = !0;
          else throw new Error("Invalid DOCTYPE");
          r++, (m = "");
        } else if (t[e] === ">") {
          if (
            (d
              ? t[e - 1] === "-" && t[e - 2] === "-" && ((d = !1), r--)
              : (l && (Um(m, n), (l = !1)), r--),
            r === 0)
          )
            break;
        } else t[e] === "[" ? (o = !0) : (m += t[e]);
      if (r !== 0) throw new Error("Unclosed DOCTYPE");
    } else throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: n, i: e };
  }
  var Hm = RegExp(`^\\s([a-zA-z0-0]+)[ 	](['"])([^&]+)\\2`);
  function Um(t, e) {
    let n = Hm.exec(t);
    n && (e[n[1]] = { regx: RegExp(`&${n[1]};`, "g"), val: n[3] });
  }
  nd.exports = qm;
});
var sd = qe((m6, id) => {
  var Vm = /^[-+]?0x[a-fA-F0-9]+$/,
    Wm =
      /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
  !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt);
  !Number.parseFloat &&
    window.parseFloat &&
    (Number.parseFloat = window.parseFloat);
  var Gm = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0 };
  function Zm(t, e = {}) {
    if (((e = Object.assign({}, Gm, e)), !t || typeof t != "string")) return t;
    let n = t.trim();
    if (e.skipLike !== void 0 && e.skipLike.test(n)) return t;
    if (e.hex && Vm.test(n)) return Number.parseInt(n, 16);
    {
      let r = Wm.exec(n);
      if (r) {
        let o = r[1],
          l = r[2],
          d = Jm(r[3]),
          m = r[4] || r[6];
        if (!e.leadingZeros && l.length > 0 && o && n[2] !== ".") return t;
        if (!e.leadingZeros && l.length > 0 && !o && n[1] !== ".") return t;
        {
          let v = Number(n),
            w = "" + v;
          return w.search(/[eE]/) !== -1 || m
            ? e.eNotation
              ? v
              : t
            : n.indexOf(".") !== -1
            ? (w === "0" && d === "") || w === d || (o && w === "-" + d)
              ? v
              : t
            : l
            ? d === w || o + d === w
              ? v
              : t
            : n === w || n === o + w
            ? v
            : t;
        }
      } else return t;
    }
  }
  function Jm(t) {
    return (
      t &&
        t.indexOf(".") !== -1 &&
        ((t = t.replace(/0+$/, "")),
        t === "."
          ? (t = "0")
          : t[0] === "."
          ? (t = "0" + t)
          : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))),
      t
    );
  }
  id.exports = Zm;
});
var ud = qe((v6, od) => {
  "use strict";
  var Cs = ms(),
    da = rd(),
    Xm = ad(),
    Km = sd(),
    g6 =
      "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(
        /NAME/g,
        Cs.nameRegexp
      ),
    xs = class {
      constructor(e) {
        (this.options = e),
          (this.currentNode = null),
          (this.tagsNodeStack = []),
          (this.docTypeEntities = {}),
          (this.lastEntities = {
            apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
            gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
            lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
            quot: { regex: /&(quot|#34|#x22);/g, val: '"' },
          }),
          (this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }),
          (this.htmlEntities = {
            space: { regex: /&(nbsp|#160);/g, val: " " },
            cent: { regex: /&(cent|#162);/g, val: "\xA2" },
            pound: { regex: /&(pound|#163);/g, val: "\xA3" },
            yen: { regex: /&(yen|#165);/g, val: "\xA5" },
            euro: { regex: /&(euro|#8364);/g, val: "\u20AC" },
            copyright: { regex: /&(copy|#169);/g, val: "\xA9" },
            reg: { regex: /&(reg|#174);/g, val: "\xAE" },
            inr: { regex: /&(inr|#8377);/g, val: "\u20B9" },
          }),
          (this.addExternalEntities = Ym),
          (this.parseXml = n4),
          (this.parseTextData = Qm),
          (this.resolveNameSpace = e4),
          (this.buildAttributesMap = r4),
          (this.isItStopNode = s4),
          (this.replaceEntitiesValue = a4),
          (this.readStopNodeData = u4),
          (this.saveTextToParentTag = i4);
      }
    };
  function Ym(t) {
    let e = Object.keys(t);
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      this.lastEntities[r] = {
        regex: new RegExp("&" + r + ";", "g"),
        val: t[r],
      };
    }
  }
  function Qm(t, e, n, r, o, l, d) {
    if (
      t !== void 0 &&
      (this.options.trimValues && !r && (t = t.trim()), t.length > 0)
    ) {
      d || (t = this.replaceEntitiesValue(t));
      let m = this.options.tagValueProcessor(e, t, n, o, l);
      return m == null
        ? t
        : typeof m != typeof t || m !== t
        ? m
        : this.options.trimValues
        ? ws(t, this.options.parseTagValue, this.options.numberParseOptions)
        : t.trim() === t
        ? ws(t, this.options.parseTagValue, this.options.numberParseOptions)
        : t;
    }
  }
  function e4(t) {
    if (this.options.removeNSPrefix) {
      let e = t.split(":"),
        n = t.charAt(0) === "/" ? "/" : "";
      if (e[0] === "xmlns") return "";
      e.length === 2 && (t = n + e[1]);
    }
    return t;
  }
  var t4 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function r4(t, e) {
    if (!this.options.ignoreAttributes && typeof t == "string") {
      let n = Cs.getAllMatches(t, t4),
        r = n.length,
        o = {};
      for (let l = 0; l < r; l++) {
        let d = this.resolveNameSpace(n[l][1]),
          m = n[l][4],
          v = this.options.attributeNamePrefix + d;
        if (d.length)
          if (
            (this.options.transformAttributeName &&
              (v = this.options.transformAttributeName(v)),
            v === "__proto__" && (v = "#__proto__"),
            m !== void 0)
          ) {
            this.options.trimValues && (m = m.trim()),
              (m = this.replaceEntitiesValue(m));
            let w = this.options.attributeValueProcessor(d, m, e);
            w == null
              ? (o[v] = m)
              : typeof w != typeof m || w !== m
              ? (o[v] = w)
              : (o[v] = ws(
                  m,
                  this.options.parseAttributeValue,
                  this.options.numberParseOptions
                ));
          } else this.options.allowBooleanAttributes && (o[v] = !0);
      }
      if (!Object.keys(o).length) return;
      if (this.options.attributesGroupName) {
        let l = {};
        return (l[this.options.attributesGroupName] = o), l;
      }
      return o;
    }
  }
  var n4 = function (t) {
      t = t.replace(
        /\r\n?/g,
        `
`
      );
      let e = new da("!xml"),
        n = e,
        r = "",
        o = "";
      for (let l = 0; l < t.length; l++)
        if (t[l] === "<")
          if (t[l + 1] === "/") {
            let m = on(t, ">", l, "Closing Tag is not closed."),
              v = t.substring(l + 2, m).trim();
            if (this.options.removeNSPrefix) {
              let w = v.indexOf(":");
              w !== -1 && (v = v.substr(w + 1));
            }
            this.options.transformTagName &&
              (v = this.options.transformTagName(v)),
              n && (r = this.saveTextToParentTag(r, n, o)),
              (o = o.substr(0, o.lastIndexOf("."))),
              (n = this.tagsNodeStack.pop()),
              (r = ""),
              (l = m);
          } else if (t[l + 1] === "?") {
            let m = bs(t, l, !1, "?>");
            if (!m) throw new Error("Pi Tag is not closed.");
            if (
              ((r = this.saveTextToParentTag(r, n, o)),
              !(
                (this.options.ignoreDeclaration && m.tagName === "?xml") ||
                this.options.ignorePiTags
              ))
            ) {
              let v = new da(m.tagName);
              v.add(this.options.textNodeName, ""),
                m.tagName !== m.tagExp &&
                  m.attrExpPresent &&
                  (v[":@"] = this.buildAttributesMap(m.tagExp, o)),
                n.addChild(v);
            }
            l = m.closeIndex + 1;
          } else if (t.substr(l + 1, 3) === "!--") {
            let m = on(t, "-->", l + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              let v = t.substring(l + 4, m - 2);
              (r = this.saveTextToParentTag(r, n, o)),
                n.add(this.options.commentPropName, [
                  { [this.options.textNodeName]: v },
                ]);
            }
            l = m;
          } else if (t.substr(l + 1, 2) === "!D") {
            let m = Xm(t, l);
            (this.docTypeEntities = m.entities), (l = m.i);
          } else if (t.substr(l + 1, 2) === "![") {
            let m = on(t, "]]>", l, "CDATA is not closed.") - 2,
              v = t.substring(l + 9, m);
            if (
              ((r = this.saveTextToParentTag(r, n, o)),
              this.options.cdataPropName)
            )
              n.add(this.options.cdataPropName, [
                { [this.options.textNodeName]: v },
              ]);
            else {
              let w = this.parseTextData(v, n.tagname, o, !0, !1, !0);
              w == null && (w = ""), n.add(this.options.textNodeName, w);
            }
            l = m + 2;
          } else {
            let m = bs(t, l, this.options.removeNSPrefix),
              v = m.tagName,
              w = m.tagExp,
              S = m.attrExpPresent,
              A = m.closeIndex;
            this.options.transformTagName &&
              (v = this.options.transformTagName(v)),
              n &&
                r &&
                n.tagname !== "!xml" &&
                (r = this.saveTextToParentTag(r, n, o, !1)),
              v !== e.tagname && (o += o ? "." + v : v);
            let N = n;
            if (
              (N &&
                this.options.unpairedTags.indexOf(N.tagname) !== -1 &&
                (n = this.tagsNodeStack.pop()),
              this.isItStopNode(this.options.stopNodes, o, v))
            ) {
              let _ = "";
              if (w.length > 0 && w.lastIndexOf("/") === w.length - 1)
                l = m.closeIndex;
              else if (this.options.unpairedTags.indexOf(v) !== -1)
                l = m.closeIndex;
              else {
                let O = this.readStopNodeData(t, v, A + 1);
                if (!O) throw new Error(`Unexpected end of ${v}`);
                (l = O.i), (_ = O.tagContent);
              }
              let H = new da(v);
              v !== w && S && (H[":@"] = this.buildAttributesMap(w, o)),
                _ && (_ = this.parseTextData(_, v, o, !0, S, !0, !0)),
                (o = o.substr(0, o.lastIndexOf("."))),
                H.add(this.options.textNodeName, _),
                n.addChild(H);
            } else {
              if (w.length > 0 && w.lastIndexOf("/") === w.length - 1) {
                v[v.length - 1] === "/"
                  ? ((v = v.substr(0, v.length - 1)), (w = v))
                  : (w = w.substr(0, w.length - 1)),
                  this.options.transformTagName &&
                    (v = this.options.transformTagName(v));
                let _ = new da(v);
                v !== w && S && (_[":@"] = this.buildAttributesMap(w, o)),
                  (o = o.substr(0, o.lastIndexOf("."))),
                  n.addChild(_);
              } else {
                let _ = new da(v);
                this.tagsNodeStack.push(n),
                  v !== w && S && (_[":@"] = this.buildAttributesMap(w, o)),
                  n.addChild(_),
                  (n = _);
              }
              (r = ""), (l = A);
            }
          }
        else r += t[l];
      return e.child;
    },
    a4 = function (t) {
      if (this.options.processEntities) {
        for (let e in this.docTypeEntities) {
          let n = this.docTypeEntities[e];
          t = t.replace(n.regx, n.val);
        }
        for (let e in this.lastEntities) {
          let n = this.lastEntities[e];
          t = t.replace(n.regex, n.val);
        }
        if (this.options.htmlEntities)
          for (let e in this.htmlEntities) {
            let n = this.htmlEntities[e];
            t = t.replace(n.regex, n.val);
          }
        t = t.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return t;
    };
  function i4(t, e, n, r) {
    return (
      t &&
        (r === void 0 && (r = Object.keys(e.child).length === 0),
        (t = this.parseTextData(
          t,
          e.tagname,
          n,
          !1,
          e[":@"] ? Object.keys(e[":@"]).length !== 0 : !1,
          r
        )),
        t !== void 0 && t !== "" && e.add(this.options.textNodeName, t),
        (t = "")),
      t
    );
  }
  function s4(t, e, n) {
    let r = "*." + n;
    for (let o in t) {
      let l = t[o];
      if (r === l || e === l) return !0;
    }
    return !1;
  }
  function o4(t, e, n = ">") {
    let r,
      o = "";
    for (let l = e; l < t.length; l++) {
      let d = t[l];
      if (r) d === r && (r = "");
      else if (d === '"' || d === "'") r = d;
      else if (d === n[0])
        if (n[1]) {
          if (t[l + 1] === n[1]) return { data: o, index: l };
        } else return { data: o, index: l };
      else d === "	" && (d = " ");
      o += d;
    }
  }
  function on(t, e, n, r) {
    let o = t.indexOf(e, n);
    if (o === -1) throw new Error(r);
    return o + e.length - 1;
  }
  function bs(t, e, n, r = ">") {
    let o = o4(t, e + 1, r);
    if (!o) return;
    let l = o.data,
      d = o.index,
      m = l.search(/\s/),
      v = l,
      w = !0;
    if (
      (m !== -1 &&
        ((v = l.substr(0, m).replace(/\s\s*$/, "")), (l = l.substr(m + 1))),
      n)
    ) {
      let S = v.indexOf(":");
      S !== -1 && ((v = v.substr(S + 1)), (w = v !== o.data.substr(S + 1)));
    }
    return { tagName: v, tagExp: l, closeIndex: d, attrExpPresent: w };
  }
  function u4(t, e, n) {
    let r = n,
      o = 1;
    for (; n < t.length; n++)
      if (t[n] === "<")
        if (t[n + 1] === "/") {
          let l = on(t, ">", n, `${e} is not closed`);
          if (t.substring(n + 2, l).trim() === e && (o--, o === 0))
            return { tagContent: t.substring(r, n), i: l };
          n = l;
        } else if (t[n + 1] === "?")
          n = on(t, "?>", n + 1, "StopNode is not closed.");
        else if (t.substr(n + 1, 3) === "!--")
          n = on(t, "-->", n + 3, "StopNode is not closed.");
        else if (t.substr(n + 1, 2) === "![")
          n = on(t, "]]>", n, "StopNode is not closed.") - 2;
        else {
          let l = bs(t, n, ">");
          l &&
            ((l && l.tagName) === e &&
              l.tagExp[l.tagExp.length - 1] !== "/" &&
              o++,
            (n = l.closeIndex));
        }
  }
  function ws(t, e, n) {
    if (e && typeof t == "string") {
      let r = t.trim();
      return r === "true" ? !0 : r === "false" ? !1 : Km(t, n);
    } else return Cs.isExist(t) ? t : "";
  }
  od.exports = xs;
});
var dd = qe((cd) => {
  "use strict";
  function l4(t, e) {
    return ld(t, e);
  }
  function ld(t, e, n) {
    let r,
      o = {};
    for (let l = 0; l < t.length; l++) {
      let d = t[l],
        m = c4(d),
        v = "";
      if ((n === void 0 ? (v = m) : (v = n + "." + m), m === e.textNodeName))
        r === void 0 ? (r = d[m]) : (r += "" + d[m]);
      else {
        if (m === void 0) continue;
        if (d[m]) {
          let w = ld(d[m], e, v),
            S = p4(w, e);
          d[":@"]
            ? d4(w, d[":@"], v, e)
            : Object.keys(w).length === 1 &&
              w[e.textNodeName] !== void 0 &&
              !e.alwaysCreateTextNode
            ? (w = w[e.textNodeName])
            : Object.keys(w).length === 0 &&
              (e.alwaysCreateTextNode ? (w[e.textNodeName] = "") : (w = "")),
            o[m] !== void 0 && o.hasOwnProperty(m)
              ? (Array.isArray(o[m]) || (o[m] = [o[m]]), o[m].push(w))
              : e.isArray(m, v, S)
              ? (o[m] = [w])
              : (o[m] = w);
        }
      }
    }
    return (
      typeof r == "string"
        ? r.length > 0 && (o[e.textNodeName] = r)
        : r !== void 0 && (o[e.textNodeName] = r),
      o
    );
  }
  function c4(t) {
    let e = Object.keys(t);
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (r !== ":@") return r;
    }
  }
  function d4(t, e, n, r) {
    if (e) {
      let o = Object.keys(e),
        l = o.length;
      for (let d = 0; d < l; d++) {
        let m = o[d];
        r.isArray(m, n + "." + m, !0, !0) ? (t[m] = [e[m]]) : (t[m] = e[m]);
      }
    }
  }
  function p4(t, e) {
    let n = Object.keys(t).length;
    return !!(n === 0 || (n === 1 && t[e.textNodeName]));
  }
  cd.prettify = l4;
});
var fd = qe((D6, pd) => {
  var { buildOptions: f4 } = ed(),
    h4 = ud(),
    { prettify: m4 } = dd(),
    g4 = vs(),
    Ss = class {
      constructor(e) {
        (this.externalEntities = {}), (this.options = f4(e));
      }
      parse(e, n) {
        if (typeof e != "string")
          if (e.toString) e = e.toString();
          else
            throw new Error("XML data is accepted in String or Bytes[] form.");
        if (n) {
          n === !0 && (n = {});
          let l = g4.validate(e, n);
          if (l !== !0) throw Error(`${l.err.msg}:${l.err.line}:${l.err.col}`);
        }
        let r = new h4(this.options);
        r.addExternalEntities(this.externalEntities);
        let o = r.parseXml(e);
        return this.options.preserveOrder || o === void 0
          ? o
          : m4(o, this.options);
      }
      addEntity(e, n) {
        if (n.indexOf("&") !== -1)
          throw new Error("Entity value can't have '&'");
        if (e.indexOf("&") !== -1 || e.indexOf(";") !== -1)
          throw new Error(
            "An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'"
          );
        if (n === "&")
          throw new Error("An entity with value '&' is not permitted");
        this.externalEntities[e] = n;
      }
    };
  pd.exports = Ss;
});
var yd = qe((x6, vd) => {
  var v4 = `
`;
  function y4(t, e) {
    let n = "";
    return e.format && e.indentBy.length > 0 && (n = v4), md(t, e, "", n);
  }
  function md(t, e, n, r) {
    let o = "",
      l = !1;
    for (let d = 0; d < t.length; d++) {
      let m = t[d],
        v = D4(m),
        w = "";
      if (
        (n.length === 0 ? (w = v) : (w = `${n}.${v}`), v === e.textNodeName)
      ) {
        let H = m[v];
        x4(w, e) || ((H = e.tagValueProcessor(v, H)), (H = gd(H, e))),
          l && (o += r),
          (o += H),
          (l = !1);
        continue;
      } else if (v === e.cdataPropName) {
        l && (o += r),
          (o += `<![CDATA[${m[v][0][e.textNodeName]}]]>`),
          (l = !1);
        continue;
      } else if (v === e.commentPropName) {
        (o += r + `<!--${m[v][0][e.textNodeName]}-->`), (l = !0);
        continue;
      } else if (v[0] === "?") {
        let H = hd(m[":@"], e),
          O = v === "?xml" ? "" : r,
          q = m[v][0][e.textNodeName];
        (q = q.length !== 0 ? " " + q : ""),
          (o += O + `<${v}${q}${H}?>`),
          (l = !0);
        continue;
      }
      let S = r;
      S !== "" && (S += e.indentBy);
      let A = hd(m[":@"], e),
        N = r + `<${v}${A}`,
        _ = md(m[v], e, w, S);
      e.unpairedTags.indexOf(v) !== -1
        ? e.suppressUnpairedNode
          ? (o += N + ">")
          : (o += N + "/>")
        : (!_ || _.length === 0) && e.suppressEmptyNode
        ? (o += N + "/>")
        : _ && _.endsWith(">")
        ? (o += N + `>${_}${r}</${v}>`)
        : ((o += N + ">"),
          _ && r !== "" && (_.includes("/>") || _.includes("</"))
            ? (o += r + e.indentBy + _ + r)
            : (o += _),
          (o += `</${v}>`)),
        (l = !0);
    }
    return o;
  }
  function D4(t) {
    let e = Object.keys(t);
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (r !== ":@") return r;
    }
  }
  function hd(t, e) {
    let n = "";
    if (t && !e.ignoreAttributes)
      for (let r in t) {
        let o = e.attributeValueProcessor(r, t[r]);
        (o = gd(o, e)),
          o === !0 && e.suppressBooleanAttributes
            ? (n += ` ${r.substr(e.attributeNamePrefix.length)}`)
            : (n += ` ${r.substr(e.attributeNamePrefix.length)}="${o}"`);
      }
    return n;
  }
  function x4(t, e) {
    t = t.substr(0, t.length - e.textNodeName.length - 1);
    let n = t.substr(t.lastIndexOf(".") + 1);
    for (let r in e.stopNodes)
      if (e.stopNodes[r] === t || e.stopNodes[r] === "*." + n) return !0;
    return !1;
  }
  function gd(t, e) {
    if (t && t.length > 0 && e.processEntities)
      for (let n = 0; n < e.entities.length; n++) {
        let r = e.entities[n];
        t = t.replace(r.regex, r.val);
      }
    return t;
  }
  vd.exports = y4;
});
var xd = qe((b6, Dd) => {
  "use strict";
  var b4 = yd(),
    w4 = {
      attributeNamePrefix: "@_",
      attributesGroupName: !1,
      textNodeName: "#text",
      ignoreAttributes: !0,
      cdataPropName: !1,
      format: !1,
      indentBy: "  ",
      suppressEmptyNode: !1,
      suppressUnpairedNode: !0,
      suppressBooleanAttributes: !0,
      tagValueProcessor: function (t, e) {
        return e;
      },
      attributeValueProcessor: function (t, e) {
        return e;
      },
      preserveOrder: !1,
      commentPropName: !1,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" },
      ],
      processEntities: !0,
      stopNodes: [],
    };
  function $r(t) {
    (this.options = Object.assign({}, w4, t)),
      this.options.ignoreAttributes || this.options.attributesGroupName
        ? (this.isAttribute = function () {
            return !1;
          })
        : ((this.attrPrefixLen = this.options.attributeNamePrefix.length),
          (this.isAttribute = k4)),
      (this.processTextOrObjNode = C4),
      this.options.format
        ? ((this.indentate = S4),
          (this.tagEndChar = `>
`),
          (this.newLine = `
`))
        : ((this.indentate = function () {
            return "";
          }),
          (this.tagEndChar = ">"),
          (this.newLine = ""));
  }
  $r.prototype.build = function (t) {
    return this.options.preserveOrder
      ? b4(t, this.options)
      : (Array.isArray(t) &&
          this.options.arrayNodeName &&
          this.options.arrayNodeName.length > 1 &&
          (t = { [this.options.arrayNodeName]: t }),
        this.j2x(t, 0).val);
  };
  $r.prototype.j2x = function (t, e) {
    let n = "",
      r = "";
    for (let o in t)
      if (!(typeof t[o] > "u"))
        if (t[o] === null)
          o[0] === "?"
            ? (r += this.indentate(e) + "<" + o + "?" + this.tagEndChar)
            : (r += this.indentate(e) + "<" + o + "/" + this.tagEndChar);
        else if (t[o] instanceof Date)
          r += this.buildTextValNode(t[o], o, "", e);
        else if (typeof t[o] != "object") {
          let l = this.isAttribute(o);
          if (l) n += this.buildAttrPairStr(l, "" + t[o]);
          else if (o === this.options.textNodeName) {
            let d = this.options.tagValueProcessor(o, "" + t[o]);
            r += this.replaceEntitiesValue(d);
          } else r += this.buildTextValNode(t[o], o, "", e);
        } else if (Array.isArray(t[o])) {
          let l = t[o].length;
          for (let d = 0; d < l; d++) {
            let m = t[o][d];
            typeof m > "u" ||
              (m === null
                ? o[0] === "?"
                  ? (r += this.indentate(e) + "<" + o + "?" + this.tagEndChar)
                  : (r += this.indentate(e) + "<" + o + "/" + this.tagEndChar)
                : typeof m == "object"
                ? (r += this.processTextOrObjNode(m, o, e))
                : (r += this.buildTextValNode(m, o, "", e)));
          }
        } else if (
          this.options.attributesGroupName &&
          o === this.options.attributesGroupName
        ) {
          let l = Object.keys(t[o]),
            d = l.length;
          for (let m = 0; m < d; m++)
            n += this.buildAttrPairStr(l[m], "" + t[o][l[m]]);
        } else r += this.processTextOrObjNode(t[o], o, e);
    return { attrStr: n, val: r };
  };
  $r.prototype.buildAttrPairStr = function (t, e) {
    return (
      (e = this.options.attributeValueProcessor(t, "" + e)),
      (e = this.replaceEntitiesValue(e)),
      this.options.suppressBooleanAttributes && e === "true"
        ? " " + t
        : " " + t + '="' + e + '"'
    );
  };
  function C4(t, e, n) {
    let r = this.j2x(t, n + 1);
    return t[this.options.textNodeName] !== void 0 &&
      Object.keys(t).length === 1
      ? this.buildTextValNode(t[this.options.textNodeName], e, r.attrStr, n)
      : this.buildObjectNode(r.val, e, r.attrStr, n);
  }
  $r.prototype.buildObjectNode = function (t, e, n, r) {
    if (t === "")
      return e[0] === "?"
        ? this.indentate(r) + "<" + e + n + "?" + this.tagEndChar
        : this.indentate(r) + "<" + e + n + this.closeTag(e) + this.tagEndChar;
    {
      let o = "</" + e + this.tagEndChar,
        l = "";
      return (
        e[0] === "?" && ((l = "?"), (o = "")),
        n && t.indexOf("<") === -1
          ? this.indentate(r) + "<" + e + n + l + ">" + t + o
          : this.options.commentPropName !== !1 &&
            e === this.options.commentPropName &&
            l.length === 0
          ? this.indentate(r) + `<!--${t}-->` + this.newLine
          : this.indentate(r) +
            "<" +
            e +
            n +
            l +
            this.tagEndChar +
            t +
            this.indentate(r) +
            o
      );
    }
  };
  $r.prototype.closeTag = function (t) {
    let e = "";
    return (
      this.options.unpairedTags.indexOf(t) !== -1
        ? this.options.suppressUnpairedNode || (e = "/")
        : this.options.suppressEmptyNode
        ? (e = "/")
        : (e = `></${t}`),
      e
    );
  };
  $r.prototype.buildTextValNode = function (t, e, n, r) {
    if (this.options.cdataPropName !== !1 && e === this.options.cdataPropName)
      return this.indentate(r) + `<![CDATA[${t}]]>` + this.newLine;
    if (
      this.options.commentPropName !== !1 &&
      e === this.options.commentPropName
    )
      return this.indentate(r) + `<!--${t}-->` + this.newLine;
    if (e[0] === "?")
      return this.indentate(r) + "<" + e + n + "?" + this.tagEndChar;
    {
      let o = this.options.tagValueProcessor(e, t);
      return (
        (o = this.replaceEntitiesValue(o)),
        o === ""
          ? this.indentate(r) + "<" + e + n + this.closeTag(e) + this.tagEndChar
          : this.indentate(r) +
            "<" +
            e +
            n +
            ">" +
            o +
            "</" +
            e +
            this.tagEndChar
      );
    }
  };
  $r.prototype.replaceEntitiesValue = function (t) {
    if (t && t.length > 0 && this.options.processEntities)
      for (let e = 0; e < this.options.entities.length; e++) {
        let n = this.options.entities[e];
        t = t.replace(n.regex, n.val);
      }
    return t;
  };
  function S4(t) {
    return this.options.indentBy.repeat(t);
  }
  function k4(t) {
    return t.startsWith(this.options.attributeNamePrefix)
      ? t.substr(this.attrPrefixLen)
      : !1;
  }
  Dd.exports = $r;
});
var wd = qe((w6, bd) => {
  "use strict";
  var E4 = vs(),
    A4 = fd(),
    F4 = xd();
  bd.exports = { XMLParser: A4, XMLValidator: E4, XMLBuilder: F4 };
});
var Fs = qe((pa, As) => {
  (function (e, n) {
    typeof pa == "object" && typeof As == "object"
      ? (As.exports = n())
      : typeof define == "function" && define.amd
      ? define([], n)
      : typeof pa == "object"
      ? (pa.katex = n())
      : (e.katex = n());
  })(typeof self < "u" ? self : pa, function () {
    return (function () {
      "use strict";
      var t = {};
      (function () {
        t.d = function (h, a) {
          for (var i in a)
            t.o(a, i) &&
              !t.o(h, i) &&
              Object.defineProperty(h, i, { enumerable: !0, get: a[i] });
        };
      })(),
        (function () {
          t.o = function (h, a) {
            return Object.prototype.hasOwnProperty.call(h, a);
          };
        })();
      var e = {};
      t.d(e, {
        default: function () {
          return Cf;
        },
      });
      var n = function h(a, i) {
        this.position = void 0;
        var s = "KaTeX parse error: " + a,
          u,
          c = i && i.loc;
        if (c && c.start <= c.end) {
          var f = c.lexer.input;
          u = c.start;
          var y = c.end;
          u === f.length
            ? (s += " at end of input: ")
            : (s += " at position " + (u + 1) + ": ");
          var x = f.slice(u, y).replace(/[^]/g, "$&\u0332"),
            C;
          u > 15 ? (C = "\u2026" + f.slice(u - 15, u)) : (C = f.slice(0, u));
          var F;
          y + 15 < f.length
            ? (F = f.slice(y, y + 15) + "\u2026")
            : (F = f.slice(y)),
            (s += C + x + F);
        }
        var T = new Error(s);
        return (
          (T.name = "ParseError"),
          (T.__proto__ = h.prototype),
          (T.position = u),
          T
        );
      };
      n.prototype.__proto__ = Error.prototype;
      var r = n,
        o = function (a, i) {
          return a.indexOf(i) !== -1;
        },
        l = function (a, i) {
          return a === void 0 ? i : a;
        },
        d = /([A-Z])/g,
        m = function (a) {
          return a.replace(d, "-$1").toLowerCase();
        },
        v = {
          "&": "&amp;",
          ">": "&gt;",
          "<": "&lt;",
          '"': "&quot;",
          "'": "&#x27;",
        },
        w = /[&><"']/g;
      function S(h) {
        return String(h).replace(w, function (a) {
          return v[a];
        });
      }
      var A = function h(a) {
          return a.type === "ordgroup" || a.type === "color"
            ? a.body.length === 1
              ? h(a.body[0])
              : a
            : a.type === "font"
            ? h(a.body)
            : a;
        },
        N = function (a) {
          var i = A(a);
          return (
            i.type === "mathord" || i.type === "textord" || i.type === "atom"
          );
        },
        _ = function (a) {
          if (!a) throw new Error("Expected non-null, but got " + String(a));
          return a;
        },
        H = function (a) {
          var i = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(a);
          return i != null ? i[1] : "_relative";
        },
        O = {
          contains: o,
          deflt: l,
          escape: S,
          hyphenate: m,
          getBaseElem: A,
          isCharacterBox: N,
          protocolFromUrl: H,
        },
        q = (function () {
          function h(i) {
            (this.displayMode = void 0),
              (this.output = void 0),
              (this.leqno = void 0),
              (this.fleqn = void 0),
              (this.throwOnError = void 0),
              (this.errorColor = void 0),
              (this.macros = void 0),
              (this.minRuleThickness = void 0),
              (this.colorIsTextColor = void 0),
              (this.strict = void 0),
              (this.trust = void 0),
              (this.maxSize = void 0),
              (this.maxExpand = void 0),
              (this.globalGroup = void 0),
              (i = i || {}),
              (this.displayMode = O.deflt(i.displayMode, !1)),
              (this.output = O.deflt(i.output, "htmlAndMathml")),
              (this.leqno = O.deflt(i.leqno, !1)),
              (this.fleqn = O.deflt(i.fleqn, !1)),
              (this.throwOnError = O.deflt(i.throwOnError, !0)),
              (this.errorColor = O.deflt(i.errorColor, "#cc0000")),
              (this.macros = i.macros || {}),
              (this.minRuleThickness = Math.max(
                0,
                O.deflt(i.minRuleThickness, 0)
              )),
              (this.colorIsTextColor = O.deflt(i.colorIsTextColor, !1)),
              (this.strict = O.deflt(i.strict, "warn")),
              (this.trust = O.deflt(i.trust, !1)),
              (this.maxSize = Math.max(0, O.deflt(i.maxSize, 1 / 0))),
              (this.maxExpand = Math.max(0, O.deflt(i.maxExpand, 1e3))),
              (this.globalGroup = O.deflt(i.globalGroup, !1));
          }
          var a = h.prototype;
          return (
            (a.reportNonstrict = function (s, u, c) {
              var f = this.strict;
              if (
                (typeof f == "function" && (f = f(s, u, c)),
                !(!f || f === "ignore"))
              ) {
                if (f === !0 || f === "error")
                  throw new r(
                    "LaTeX-incompatible input and strict mode is set to 'error': " +
                      (u + " [" + s + "]"),
                    c
                  );
                f === "warn"
                  ? typeof console < "u" &&
                    console.warn(
                      "LaTeX-incompatible input and strict mode is set to 'warn': " +
                        (u + " [" + s + "]")
                    )
                  : typeof console < "u" &&
                    console.warn(
                      "LaTeX-incompatible input and strict mode is set to " +
                        ("unrecognized '" + f + "': " + u + " [" + s + "]")
                    );
              }
            }),
            (a.useStrictBehavior = function (s, u, c) {
              var f = this.strict;
              if (typeof f == "function")
                try {
                  f = f(s, u, c);
                } catch {
                  f = "error";
                }
              return !f || f === "ignore"
                ? !1
                : f === !0 || f === "error"
                ? !0
                : f === "warn"
                ? (typeof console < "u" &&
                    console.warn(
                      "LaTeX-incompatible input and strict mode is set to 'warn': " +
                        (u + " [" + s + "]")
                    ),
                  !1)
                : (typeof console < "u" &&
                    console.warn(
                      "LaTeX-incompatible input and strict mode is set to " +
                        ("unrecognized '" + f + "': " + u + " [" + s + "]")
                    ),
                  !1);
            }),
            (a.isTrusted = function (s) {
              s.url && !s.protocol && (s.protocol = O.protocolFromUrl(s.url));
              var u =
                typeof this.trust == "function" ? this.trust(s) : this.trust;
              return Boolean(u);
            }),
            h
          );
        })(),
        R = (function () {
          function h(i, s, u) {
            (this.id = void 0),
              (this.size = void 0),
              (this.cramped = void 0),
              (this.id = i),
              (this.size = s),
              (this.cramped = u);
          }
          var a = h.prototype;
          return (
            (a.sup = function () {
              return ge[ur[this.id]];
            }),
            (a.sub = function () {
              return ge[un[this.id]];
            }),
            (a.fracNum = function () {
              return ge[yi[this.id]];
            }),
            (a.fracDen = function () {
              return ge[lr[this.id]];
            }),
            (a.cramp = function () {
              return ge[fa[this.id]];
            }),
            (a.text = function () {
              return ge[ln[this.id]];
            }),
            (a.isTight = function () {
              return this.size >= 2;
            }),
            h
          );
        })(),
        j = 0,
        fe = 1,
        ae = 2,
        we = 3,
        Ne = 4,
        Ee = 5,
        ie = 6,
        ue = 7,
        ge = [
          new R(j, 0, !1),
          new R(fe, 0, !0),
          new R(ae, 1, !1),
          new R(we, 1, !0),
          new R(Ne, 2, !1),
          new R(Ee, 2, !0),
          new R(ie, 3, !1),
          new R(ue, 3, !0),
        ],
        ur = [Ne, Ee, Ne, Ee, ie, ue, ie, ue],
        un = [Ee, Ee, Ee, Ee, ue, ue, ue, ue],
        yi = [ae, we, Ne, Ee, ie, ue, ie, ue],
        lr = [we, we, Ee, Ee, ue, ue, ue, ue],
        fa = [fe, fe, we, we, Ee, Ee, ue, ue],
        ln = [j, fe, ae, we, ae, we, ae, we],
        ee = {
          DISPLAY: ge[j],
          TEXT: ge[ae],
          SCRIPT: ge[Ne],
          SCRIPTSCRIPT: ge[ie],
        },
        cn = [
          {
            name: "latin",
            blocks: [
              [256, 591],
              [768, 879],
            ],
          },
          { name: "cyrillic", blocks: [[1024, 1279]] },
          { name: "armenian", blocks: [[1328, 1423]] },
          { name: "brahmic", blocks: [[2304, 4255]] },
          { name: "georgian", blocks: [[4256, 4351]] },
          {
            name: "cjk",
            blocks: [
              [12288, 12543],
              [19968, 40879],
              [65280, 65376],
            ],
          },
          { name: "hangul", blocks: [[44032, 55215]] },
        ];
      function Nn(h) {
        for (var a = 0; a < cn.length; a++)
          for (var i = cn[a], s = 0; s < i.blocks.length; s++) {
            var u = i.blocks[s];
            if (h >= u[0] && h <= u[1]) return i.name;
          }
        return null;
      }
      var qr = [];
      cn.forEach(function (h) {
        return h.blocks.forEach(function (a) {
          return qr.push.apply(qr, a);
        });
      });
      function cr(h) {
        for (var a = 0; a < qr.length; a += 2)
          if (h >= qr[a] && h <= qr[a + 1]) return !0;
        return !1;
      }
      var dr = 80,
        Di = function (a, i) {
          return (
            "M95," +
            (622 + a + i) +
            `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` +
            a / 2.075 +
            " -" +
            a +
            `
c5.3,-9.3,12,-14,20,-14
H400000v` +
            (40 + a) +
            `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` +
            (834 + a) +
            " " +
            i +
            "h400000v" +
            (40 + a) +
            "h-400000z"
          );
        },
        Hr = function (a, i) {
          return (
            "M263," +
            (601 + a + i) +
            `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` +
            a / 2.084 +
            " -" +
            a +
            `
c4.7,-7.3,11,-11,19,-11
H40000v` +
            (40 + a) +
            `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` +
            (1001 + a) +
            " " +
            i +
            "h400000v" +
            (40 + a) +
            "h-400000z"
          );
        },
        ha = function (a, i) {
          return (
            "M983 " +
            (10 + a + i) +
            `
l` +
            a / 3.13 +
            " -" +
            a +
            `
c4,-6.7,10,-10,18,-10 H400000v` +
            (40 + a) +
            `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` +
            (1001 + a) +
            " " +
            i +
            "h400000v" +
            (40 + a) +
            "h-400000z"
          );
        },
        Ur = function (a, i) {
          return (
            "M424," +
            (2398 + a + i) +
            `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` +
            a / 4.223 +
            " -" +
            a +
            `c4,-6.7,10,-10,18,-10 H400000
v` +
            (40 + a) +
            `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` +
            (1001 + a) +
            " " +
            i +
            `
h400000v` +
            (40 + a) +
            "h-400000z"
          );
        },
        dn = function (a, i) {
          return (
            "M473," +
            (2713 + a + i) +
            `
c339.3,-1799.3,509.3,-2700,510,-2702 l` +
            a / 5.298 +
            " -" +
            a +
            `
c3.3,-7.3,9.3,-11,18,-11 H400000v` +
            (40 + a) +
            `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` +
            (1001 + a) +
            " " +
            i +
            "h400000v" +
            (40 + a) +
            "H1017.7z"
          );
        },
        Mn = function (a) {
          var i = a / 2;
          return (
            "M400000 " +
            a +
            " H0 L" +
            i +
            " 0 l65 45 L145 " +
            (a - 80) +
            " H400000z"
          );
        },
        ma = function (a, i, s) {
          var u = s - 54 - i - a;
          return (
            "M702 " +
            (a + i) +
            "H400000" +
            (40 + a) +
            `
H742v` +
            u +
            `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` +
            i +
            "H400000v" +
            (40 + a) +
            "H742z"
          );
        },
        On = function (a, i, s) {
          i = 1e3 * i;
          var u = "";
          switch (a) {
            case "sqrtMain":
              u = Di(i, dr);
              break;
            case "sqrtSize1":
              u = Hr(i, dr);
              break;
            case "sqrtSize2":
              u = ha(i, dr);
              break;
            case "sqrtSize3":
              u = Ur(i, dr);
              break;
            case "sqrtSize4":
              u = dn(i, dr);
              break;
            case "sqrtTall":
              u = ma(i, dr, s);
          }
          return u;
        },
        pr = function (a, i) {
          switch (a) {
            case "\u239C":
              return (
                "M291 0 H417 V" + i + " H291z M291 0 H417 V" + i + " H291z"
              );
            case "\u2223":
              return (
                "M145 0 H188 V" + i + " H145z M145 0 H188 V" + i + " H145z"
              );
            case "\u2225":
              return (
                "M145 0 H188 V" +
                i +
                " H145z M145 0 H188 V" +
                i +
                " H145z" +
                ("M367 0 H410 V" + i + " H367z M367 0 H410 V" + i + " H367z")
              );
            case "\u239F":
              return (
                "M457 0 H583 V" + i + " H457z M457 0 H583 V" + i + " H457z"
              );
            case "\u23A2":
              return (
                "M319 0 H403 V" + i + " H319z M319 0 H403 V" + i + " H319z"
              );
            case "\u23A5":
              return (
                "M263 0 H347 V" + i + " H263z M263 0 H347 V" + i + " H263z"
              );
            case "\u23AA":
              return (
                "M384 0 H504 V" + i + " H384z M384 0 H504 V" + i + " H384z"
              );
            case "\u23D0":
              return (
                "M312 0 H355 V" + i + " H312z M312 0 H355 V" + i + " H312z"
              );
            case "\u2016":
              return (
                "M257 0 H300 V" +
                i +
                " H257z M257 0 H300 V" +
                i +
                " H257z" +
                ("M478 0 H521 V" + i + " H478z M478 0 H521 V" + i + " H478z")
              );
            default:
              return "";
          }
        },
        pn = {
          doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
          doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
          leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
          leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
          leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
          leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
          leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
          leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
          leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
          leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
          leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
          lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
          leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
          leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
          leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
          longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
          midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
          midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
          oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
          oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
          oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
          oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
          rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
          rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
          rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
          rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
          rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
          rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
          rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
          rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
          rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
          righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
          rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
          rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
          twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
          twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
          tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
          tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
          tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
          tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
          vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
          widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
          widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
          widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
          widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
          widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
          widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
          widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
          widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
          baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
          rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
          baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
          rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
          shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
          shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`,
        },
        fr = (function () {
          function h(i) {
            (this.children = void 0),
              (this.classes = void 0),
              (this.height = void 0),
              (this.depth = void 0),
              (this.maxFontSize = void 0),
              (this.style = void 0),
              (this.children = i),
              (this.classes = []),
              (this.height = 0),
              (this.depth = 0),
              (this.maxFontSize = 0),
              (this.style = {});
          }
          var a = h.prototype;
          return (
            (a.hasClass = function (s) {
              return O.contains(this.classes, s);
            }),
            (a.toNode = function () {
              for (
                var s = document.createDocumentFragment(), u = 0;
                u < this.children.length;
                u++
              )
                s.appendChild(this.children[u].toNode());
              return s;
            }),
            (a.toMarkup = function () {
              for (var s = "", u = 0; u < this.children.length; u++)
                s += this.children[u].toMarkup();
              return s;
            }),
            (a.toText = function () {
              var s = function (c) {
                return c.toText();
              };
              return this.children.map(s).join("");
            }),
            h
          );
        })(),
        st = {
          "AMS-Regular": {
            32: [0, 0, 0, 0, 0.25],
            65: [0, 0.68889, 0, 0, 0.72222],
            66: [0, 0.68889, 0, 0, 0.66667],
            67: [0, 0.68889, 0, 0, 0.72222],
            68: [0, 0.68889, 0, 0, 0.72222],
            69: [0, 0.68889, 0, 0, 0.66667],
            70: [0, 0.68889, 0, 0, 0.61111],
            71: [0, 0.68889, 0, 0, 0.77778],
            72: [0, 0.68889, 0, 0, 0.77778],
            73: [0, 0.68889, 0, 0, 0.38889],
            74: [0.16667, 0.68889, 0, 0, 0.5],
            75: [0, 0.68889, 0, 0, 0.77778],
            76: [0, 0.68889, 0, 0, 0.66667],
            77: [0, 0.68889, 0, 0, 0.94445],
            78: [0, 0.68889, 0, 0, 0.72222],
            79: [0.16667, 0.68889, 0, 0, 0.77778],
            80: [0, 0.68889, 0, 0, 0.61111],
            81: [0.16667, 0.68889, 0, 0, 0.77778],
            82: [0, 0.68889, 0, 0, 0.72222],
            83: [0, 0.68889, 0, 0, 0.55556],
            84: [0, 0.68889, 0, 0, 0.66667],
            85: [0, 0.68889, 0, 0, 0.72222],
            86: [0, 0.68889, 0, 0, 0.72222],
            87: [0, 0.68889, 0, 0, 1],
            88: [0, 0.68889, 0, 0, 0.72222],
            89: [0, 0.68889, 0, 0, 0.72222],
            90: [0, 0.68889, 0, 0, 0.66667],
            107: [0, 0.68889, 0, 0, 0.55556],
            160: [0, 0, 0, 0, 0.25],
            165: [0, 0.675, 0.025, 0, 0.75],
            174: [0.15559, 0.69224, 0, 0, 0.94666],
            240: [0, 0.68889, 0, 0, 0.55556],
            295: [0, 0.68889, 0, 0, 0.54028],
            710: [0, 0.825, 0, 0, 2.33334],
            732: [0, 0.9, 0, 0, 2.33334],
            770: [0, 0.825, 0, 0, 2.33334],
            771: [0, 0.9, 0, 0, 2.33334],
            989: [0.08167, 0.58167, 0, 0, 0.77778],
            1008: [0, 0.43056, 0.04028, 0, 0.66667],
            8245: [0, 0.54986, 0, 0, 0.275],
            8463: [0, 0.68889, 0, 0, 0.54028],
            8487: [0, 0.68889, 0, 0, 0.72222],
            8498: [0, 0.68889, 0, 0, 0.55556],
            8502: [0, 0.68889, 0, 0, 0.66667],
            8503: [0, 0.68889, 0, 0, 0.44445],
            8504: [0, 0.68889, 0, 0, 0.66667],
            8513: [0, 0.68889, 0, 0, 0.63889],
            8592: [-0.03598, 0.46402, 0, 0, 0.5],
            8594: [-0.03598, 0.46402, 0, 0, 0.5],
            8602: [-0.13313, 0.36687, 0, 0, 1],
            8603: [-0.13313, 0.36687, 0, 0, 1],
            8606: [0.01354, 0.52239, 0, 0, 1],
            8608: [0.01354, 0.52239, 0, 0, 1],
            8610: [0.01354, 0.52239, 0, 0, 1.11111],
            8611: [0.01354, 0.52239, 0, 0, 1.11111],
            8619: [0, 0.54986, 0, 0, 1],
            8620: [0, 0.54986, 0, 0, 1],
            8621: [-0.13313, 0.37788, 0, 0, 1.38889],
            8622: [-0.13313, 0.36687, 0, 0, 1],
            8624: [0, 0.69224, 0, 0, 0.5],
            8625: [0, 0.69224, 0, 0, 0.5],
            8630: [0, 0.43056, 0, 0, 1],
            8631: [0, 0.43056, 0, 0, 1],
            8634: [0.08198, 0.58198, 0, 0, 0.77778],
            8635: [0.08198, 0.58198, 0, 0, 0.77778],
            8638: [0.19444, 0.69224, 0, 0, 0.41667],
            8639: [0.19444, 0.69224, 0, 0, 0.41667],
            8642: [0.19444, 0.69224, 0, 0, 0.41667],
            8643: [0.19444, 0.69224, 0, 0, 0.41667],
            8644: [0.1808, 0.675, 0, 0, 1],
            8646: [0.1808, 0.675, 0, 0, 1],
            8647: [0.1808, 0.675, 0, 0, 1],
            8648: [0.19444, 0.69224, 0, 0, 0.83334],
            8649: [0.1808, 0.675, 0, 0, 1],
            8650: [0.19444, 0.69224, 0, 0, 0.83334],
            8651: [0.01354, 0.52239, 0, 0, 1],
            8652: [0.01354, 0.52239, 0, 0, 1],
            8653: [-0.13313, 0.36687, 0, 0, 1],
            8654: [-0.13313, 0.36687, 0, 0, 1],
            8655: [-0.13313, 0.36687, 0, 0, 1],
            8666: [0.13667, 0.63667, 0, 0, 1],
            8667: [0.13667, 0.63667, 0, 0, 1],
            8669: [-0.13313, 0.37788, 0, 0, 1],
            8672: [-0.064, 0.437, 0, 0, 1.334],
            8674: [-0.064, 0.437, 0, 0, 1.334],
            8705: [0, 0.825, 0, 0, 0.5],
            8708: [0, 0.68889, 0, 0, 0.55556],
            8709: [0.08167, 0.58167, 0, 0, 0.77778],
            8717: [0, 0.43056, 0, 0, 0.42917],
            8722: [-0.03598, 0.46402, 0, 0, 0.5],
            8724: [0.08198, 0.69224, 0, 0, 0.77778],
            8726: [0.08167, 0.58167, 0, 0, 0.77778],
            8733: [0, 0.69224, 0, 0, 0.77778],
            8736: [0, 0.69224, 0, 0, 0.72222],
            8737: [0, 0.69224, 0, 0, 0.72222],
            8738: [0.03517, 0.52239, 0, 0, 0.72222],
            8739: [0.08167, 0.58167, 0, 0, 0.22222],
            8740: [0.25142, 0.74111, 0, 0, 0.27778],
            8741: [0.08167, 0.58167, 0, 0, 0.38889],
            8742: [0.25142, 0.74111, 0, 0, 0.5],
            8756: [0, 0.69224, 0, 0, 0.66667],
            8757: [0, 0.69224, 0, 0, 0.66667],
            8764: [-0.13313, 0.36687, 0, 0, 0.77778],
            8765: [-0.13313, 0.37788, 0, 0, 0.77778],
            8769: [-0.13313, 0.36687, 0, 0, 0.77778],
            8770: [-0.03625, 0.46375, 0, 0, 0.77778],
            8774: [0.30274, 0.79383, 0, 0, 0.77778],
            8776: [-0.01688, 0.48312, 0, 0, 0.77778],
            8778: [0.08167, 0.58167, 0, 0, 0.77778],
            8782: [0.06062, 0.54986, 0, 0, 0.77778],
            8783: [0.06062, 0.54986, 0, 0, 0.77778],
            8785: [0.08198, 0.58198, 0, 0, 0.77778],
            8786: [0.08198, 0.58198, 0, 0, 0.77778],
            8787: [0.08198, 0.58198, 0, 0, 0.77778],
            8790: [0, 0.69224, 0, 0, 0.77778],
            8791: [0.22958, 0.72958, 0, 0, 0.77778],
            8796: [0.08198, 0.91667, 0, 0, 0.77778],
            8806: [0.25583, 0.75583, 0, 0, 0.77778],
            8807: [0.25583, 0.75583, 0, 0, 0.77778],
            8808: [0.25142, 0.75726, 0, 0, 0.77778],
            8809: [0.25142, 0.75726, 0, 0, 0.77778],
            8812: [0.25583, 0.75583, 0, 0, 0.5],
            8814: [0.20576, 0.70576, 0, 0, 0.77778],
            8815: [0.20576, 0.70576, 0, 0, 0.77778],
            8816: [0.30274, 0.79383, 0, 0, 0.77778],
            8817: [0.30274, 0.79383, 0, 0, 0.77778],
            8818: [0.22958, 0.72958, 0, 0, 0.77778],
            8819: [0.22958, 0.72958, 0, 0, 0.77778],
            8822: [0.1808, 0.675, 0, 0, 0.77778],
            8823: [0.1808, 0.675, 0, 0, 0.77778],
            8828: [0.13667, 0.63667, 0, 0, 0.77778],
            8829: [0.13667, 0.63667, 0, 0, 0.77778],
            8830: [0.22958, 0.72958, 0, 0, 0.77778],
            8831: [0.22958, 0.72958, 0, 0, 0.77778],
            8832: [0.20576, 0.70576, 0, 0, 0.77778],
            8833: [0.20576, 0.70576, 0, 0, 0.77778],
            8840: [0.30274, 0.79383, 0, 0, 0.77778],
            8841: [0.30274, 0.79383, 0, 0, 0.77778],
            8842: [0.13597, 0.63597, 0, 0, 0.77778],
            8843: [0.13597, 0.63597, 0, 0, 0.77778],
            8847: [0.03517, 0.54986, 0, 0, 0.77778],
            8848: [0.03517, 0.54986, 0, 0, 0.77778],
            8858: [0.08198, 0.58198, 0, 0, 0.77778],
            8859: [0.08198, 0.58198, 0, 0, 0.77778],
            8861: [0.08198, 0.58198, 0, 0, 0.77778],
            8862: [0, 0.675, 0, 0, 0.77778],
            8863: [0, 0.675, 0, 0, 0.77778],
            8864: [0, 0.675, 0, 0, 0.77778],
            8865: [0, 0.675, 0, 0, 0.77778],
            8872: [0, 0.69224, 0, 0, 0.61111],
            8873: [0, 0.69224, 0, 0, 0.72222],
            8874: [0, 0.69224, 0, 0, 0.88889],
            8876: [0, 0.68889, 0, 0, 0.61111],
            8877: [0, 0.68889, 0, 0, 0.61111],
            8878: [0, 0.68889, 0, 0, 0.72222],
            8879: [0, 0.68889, 0, 0, 0.72222],
            8882: [0.03517, 0.54986, 0, 0, 0.77778],
            8883: [0.03517, 0.54986, 0, 0, 0.77778],
            8884: [0.13667, 0.63667, 0, 0, 0.77778],
            8885: [0.13667, 0.63667, 0, 0, 0.77778],
            8888: [0, 0.54986, 0, 0, 1.11111],
            8890: [0.19444, 0.43056, 0, 0, 0.55556],
            8891: [0.19444, 0.69224, 0, 0, 0.61111],
            8892: [0.19444, 0.69224, 0, 0, 0.61111],
            8901: [0, 0.54986, 0, 0, 0.27778],
            8903: [0.08167, 0.58167, 0, 0, 0.77778],
            8905: [0.08167, 0.58167, 0, 0, 0.77778],
            8906: [0.08167, 0.58167, 0, 0, 0.77778],
            8907: [0, 0.69224, 0, 0, 0.77778],
            8908: [0, 0.69224, 0, 0, 0.77778],
            8909: [-0.03598, 0.46402, 0, 0, 0.77778],
            8910: [0, 0.54986, 0, 0, 0.76042],
            8911: [0, 0.54986, 0, 0, 0.76042],
            8912: [0.03517, 0.54986, 0, 0, 0.77778],
            8913: [0.03517, 0.54986, 0, 0, 0.77778],
            8914: [0, 0.54986, 0, 0, 0.66667],
            8915: [0, 0.54986, 0, 0, 0.66667],
            8916: [0, 0.69224, 0, 0, 0.66667],
            8918: [0.0391, 0.5391, 0, 0, 0.77778],
            8919: [0.0391, 0.5391, 0, 0, 0.77778],
            8920: [0.03517, 0.54986, 0, 0, 1.33334],
            8921: [0.03517, 0.54986, 0, 0, 1.33334],
            8922: [0.38569, 0.88569, 0, 0, 0.77778],
            8923: [0.38569, 0.88569, 0, 0, 0.77778],
            8926: [0.13667, 0.63667, 0, 0, 0.77778],
            8927: [0.13667, 0.63667, 0, 0, 0.77778],
            8928: [0.30274, 0.79383, 0, 0, 0.77778],
            8929: [0.30274, 0.79383, 0, 0, 0.77778],
            8934: [0.23222, 0.74111, 0, 0, 0.77778],
            8935: [0.23222, 0.74111, 0, 0, 0.77778],
            8936: [0.23222, 0.74111, 0, 0, 0.77778],
            8937: [0.23222, 0.74111, 0, 0, 0.77778],
            8938: [0.20576, 0.70576, 0, 0, 0.77778],
            8939: [0.20576, 0.70576, 0, 0, 0.77778],
            8940: [0.30274, 0.79383, 0, 0, 0.77778],
            8941: [0.30274, 0.79383, 0, 0, 0.77778],
            8994: [0.19444, 0.69224, 0, 0, 0.77778],
            8995: [0.19444, 0.69224, 0, 0, 0.77778],
            9416: [0.15559, 0.69224, 0, 0, 0.90222],
            9484: [0, 0.69224, 0, 0, 0.5],
            9488: [0, 0.69224, 0, 0, 0.5],
            9492: [0, 0.37788, 0, 0, 0.5],
            9496: [0, 0.37788, 0, 0, 0.5],
            9585: [0.19444, 0.68889, 0, 0, 0.88889],
            9586: [0.19444, 0.74111, 0, 0, 0.88889],
            9632: [0, 0.675, 0, 0, 0.77778],
            9633: [0, 0.675, 0, 0, 0.77778],
            9650: [0, 0.54986, 0, 0, 0.72222],
            9651: [0, 0.54986, 0, 0, 0.72222],
            9654: [0.03517, 0.54986, 0, 0, 0.77778],
            9660: [0, 0.54986, 0, 0, 0.72222],
            9661: [0, 0.54986, 0, 0, 0.72222],
            9664: [0.03517, 0.54986, 0, 0, 0.77778],
            9674: [0.11111, 0.69224, 0, 0, 0.66667],
            9733: [0.19444, 0.69224, 0, 0, 0.94445],
            10003: [0, 0.69224, 0, 0, 0.83334],
            10016: [0, 0.69224, 0, 0, 0.83334],
            10731: [0.11111, 0.69224, 0, 0, 0.66667],
            10846: [0.19444, 0.75583, 0, 0, 0.61111],
            10877: [0.13667, 0.63667, 0, 0, 0.77778],
            10878: [0.13667, 0.63667, 0, 0, 0.77778],
            10885: [0.25583, 0.75583, 0, 0, 0.77778],
            10886: [0.25583, 0.75583, 0, 0, 0.77778],
            10887: [0.13597, 0.63597, 0, 0, 0.77778],
            10888: [0.13597, 0.63597, 0, 0, 0.77778],
            10889: [0.26167, 0.75726, 0, 0, 0.77778],
            10890: [0.26167, 0.75726, 0, 0, 0.77778],
            10891: [0.48256, 0.98256, 0, 0, 0.77778],
            10892: [0.48256, 0.98256, 0, 0, 0.77778],
            10901: [0.13667, 0.63667, 0, 0, 0.77778],
            10902: [0.13667, 0.63667, 0, 0, 0.77778],
            10933: [0.25142, 0.75726, 0, 0, 0.77778],
            10934: [0.25142, 0.75726, 0, 0, 0.77778],
            10935: [0.26167, 0.75726, 0, 0, 0.77778],
            10936: [0.26167, 0.75726, 0, 0, 0.77778],
            10937: [0.26167, 0.75726, 0, 0, 0.77778],
            10938: [0.26167, 0.75726, 0, 0, 0.77778],
            10949: [0.25583, 0.75583, 0, 0, 0.77778],
            10950: [0.25583, 0.75583, 0, 0, 0.77778],
            10955: [0.28481, 0.79383, 0, 0, 0.77778],
            10956: [0.28481, 0.79383, 0, 0, 0.77778],
            57350: [0.08167, 0.58167, 0, 0, 0.22222],
            57351: [0.08167, 0.58167, 0, 0, 0.38889],
            57352: [0.08167, 0.58167, 0, 0, 0.77778],
            57353: [0, 0.43056, 0.04028, 0, 0.66667],
            57356: [0.25142, 0.75726, 0, 0, 0.77778],
            57357: [0.25142, 0.75726, 0, 0, 0.77778],
            57358: [0.41951, 0.91951, 0, 0, 0.77778],
            57359: [0.30274, 0.79383, 0, 0, 0.77778],
            57360: [0.30274, 0.79383, 0, 0, 0.77778],
            57361: [0.41951, 0.91951, 0, 0, 0.77778],
            57366: [0.25142, 0.75726, 0, 0, 0.77778],
            57367: [0.25142, 0.75726, 0, 0, 0.77778],
            57368: [0.25142, 0.75726, 0, 0, 0.77778],
            57369: [0.25142, 0.75726, 0, 0, 0.77778],
            57370: [0.13597, 0.63597, 0, 0, 0.77778],
            57371: [0.13597, 0.63597, 0, 0, 0.77778],
          },
          "Caligraphic-Regular": {
            32: [0, 0, 0, 0, 0.25],
            65: [0, 0.68333, 0, 0.19445, 0.79847],
            66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
            67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
            68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
            69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
            70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
            71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
            72: [0, 0.68333, 0.00965, 0.11111, 0.84452],
            73: [0, 0.68333, 0.07382, 0, 0.54452],
            74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
            75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
            76: [0, 0.68333, 0, 0.13889, 0.68972],
            77: [0, 0.68333, 0, 0.13889, 1.2009],
            78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
            79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
            80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
            81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
            82: [0, 0.68333, 0, 0.08334, 0.8475],
            83: [0, 0.68333, 0.075, 0.13889, 0.60556],
            84: [0, 0.68333, 0.25417, 0, 0.54464],
            85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
            86: [0, 0.68333, 0.08222, 0, 0.61278],
            87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
            88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
            89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
            90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
            160: [0, 0, 0, 0, 0.25],
          },
          "Fraktur-Regular": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69141, 0, 0, 0.29574],
            34: [0, 0.69141, 0, 0, 0.21471],
            38: [0, 0.69141, 0, 0, 0.73786],
            39: [0, 0.69141, 0, 0, 0.21201],
            40: [0.24982, 0.74947, 0, 0, 0.38865],
            41: [0.24982, 0.74947, 0, 0, 0.38865],
            42: [0, 0.62119, 0, 0, 0.27764],
            43: [0.08319, 0.58283, 0, 0, 0.75623],
            44: [0, 0.10803, 0, 0, 0.27764],
            45: [0.08319, 0.58283, 0, 0, 0.75623],
            46: [0, 0.10803, 0, 0, 0.27764],
            47: [0.24982, 0.74947, 0, 0, 0.50181],
            48: [0, 0.47534, 0, 0, 0.50181],
            49: [0, 0.47534, 0, 0, 0.50181],
            50: [0, 0.47534, 0, 0, 0.50181],
            51: [0.18906, 0.47534, 0, 0, 0.50181],
            52: [0.18906, 0.47534, 0, 0, 0.50181],
            53: [0.18906, 0.47534, 0, 0, 0.50181],
            54: [0, 0.69141, 0, 0, 0.50181],
            55: [0.18906, 0.47534, 0, 0, 0.50181],
            56: [0, 0.69141, 0, 0, 0.50181],
            57: [0.18906, 0.47534, 0, 0, 0.50181],
            58: [0, 0.47534, 0, 0, 0.21606],
            59: [0.12604, 0.47534, 0, 0, 0.21606],
            61: [-0.13099, 0.36866, 0, 0, 0.75623],
            63: [0, 0.69141, 0, 0, 0.36245],
            65: [0, 0.69141, 0, 0, 0.7176],
            66: [0, 0.69141, 0, 0, 0.88397],
            67: [0, 0.69141, 0, 0, 0.61254],
            68: [0, 0.69141, 0, 0, 0.83158],
            69: [0, 0.69141, 0, 0, 0.66278],
            70: [0.12604, 0.69141, 0, 0, 0.61119],
            71: [0, 0.69141, 0, 0, 0.78539],
            72: [0.06302, 0.69141, 0, 0, 0.7203],
            73: [0, 0.69141, 0, 0, 0.55448],
            74: [0.12604, 0.69141, 0, 0, 0.55231],
            75: [0, 0.69141, 0, 0, 0.66845],
            76: [0, 0.69141, 0, 0, 0.66602],
            77: [0, 0.69141, 0, 0, 1.04953],
            78: [0, 0.69141, 0, 0, 0.83212],
            79: [0, 0.69141, 0, 0, 0.82699],
            80: [0.18906, 0.69141, 0, 0, 0.82753],
            81: [0.03781, 0.69141, 0, 0, 0.82699],
            82: [0, 0.69141, 0, 0, 0.82807],
            83: [0, 0.69141, 0, 0, 0.82861],
            84: [0, 0.69141, 0, 0, 0.66899],
            85: [0, 0.69141, 0, 0, 0.64576],
            86: [0, 0.69141, 0, 0, 0.83131],
            87: [0, 0.69141, 0, 0, 1.04602],
            88: [0, 0.69141, 0, 0, 0.71922],
            89: [0.18906, 0.69141, 0, 0, 0.83293],
            90: [0.12604, 0.69141, 0, 0, 0.60201],
            91: [0.24982, 0.74947, 0, 0, 0.27764],
            93: [0.24982, 0.74947, 0, 0, 0.27764],
            94: [0, 0.69141, 0, 0, 0.49965],
            97: [0, 0.47534, 0, 0, 0.50046],
            98: [0, 0.69141, 0, 0, 0.51315],
            99: [0, 0.47534, 0, 0, 0.38946],
            100: [0, 0.62119, 0, 0, 0.49857],
            101: [0, 0.47534, 0, 0, 0.40053],
            102: [0.18906, 0.69141, 0, 0, 0.32626],
            103: [0.18906, 0.47534, 0, 0, 0.5037],
            104: [0.18906, 0.69141, 0, 0, 0.52126],
            105: [0, 0.69141, 0, 0, 0.27899],
            106: [0, 0.69141, 0, 0, 0.28088],
            107: [0, 0.69141, 0, 0, 0.38946],
            108: [0, 0.69141, 0, 0, 0.27953],
            109: [0, 0.47534, 0, 0, 0.76676],
            110: [0, 0.47534, 0, 0, 0.52666],
            111: [0, 0.47534, 0, 0, 0.48885],
            112: [0.18906, 0.52396, 0, 0, 0.50046],
            113: [0.18906, 0.47534, 0, 0, 0.48912],
            114: [0, 0.47534, 0, 0, 0.38919],
            115: [0, 0.47534, 0, 0, 0.44266],
            116: [0, 0.62119, 0, 0, 0.33301],
            117: [0, 0.47534, 0, 0, 0.5172],
            118: [0, 0.52396, 0, 0, 0.5118],
            119: [0, 0.52396, 0, 0, 0.77351],
            120: [0.18906, 0.47534, 0, 0, 0.38865],
            121: [0.18906, 0.47534, 0, 0, 0.49884],
            122: [0.18906, 0.47534, 0, 0, 0.39054],
            160: [0, 0, 0, 0, 0.25],
            8216: [0, 0.69141, 0, 0, 0.21471],
            8217: [0, 0.69141, 0, 0, 0.21471],
            58112: [0, 0.62119, 0, 0, 0.49749],
            58113: [0, 0.62119, 0, 0, 0.4983],
            58114: [0.18906, 0.69141, 0, 0, 0.33328],
            58115: [0.18906, 0.69141, 0, 0, 0.32923],
            58116: [0.18906, 0.47534, 0, 0, 0.50343],
            58117: [0, 0.69141, 0, 0, 0.33301],
            58118: [0, 0.62119, 0, 0, 0.33409],
            58119: [0, 0.47534, 0, 0, 0.50073],
          },
          "Main-Bold": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0, 0, 0.35],
            34: [0, 0.69444, 0, 0, 0.60278],
            35: [0.19444, 0.69444, 0, 0, 0.95833],
            36: [0.05556, 0.75, 0, 0, 0.575],
            37: [0.05556, 0.75, 0, 0, 0.95833],
            38: [0, 0.69444, 0, 0, 0.89444],
            39: [0, 0.69444, 0, 0, 0.31944],
            40: [0.25, 0.75, 0, 0, 0.44722],
            41: [0.25, 0.75, 0, 0, 0.44722],
            42: [0, 0.75, 0, 0, 0.575],
            43: [0.13333, 0.63333, 0, 0, 0.89444],
            44: [0.19444, 0.15556, 0, 0, 0.31944],
            45: [0, 0.44444, 0, 0, 0.38333],
            46: [0, 0.15556, 0, 0, 0.31944],
            47: [0.25, 0.75, 0, 0, 0.575],
            48: [0, 0.64444, 0, 0, 0.575],
            49: [0, 0.64444, 0, 0, 0.575],
            50: [0, 0.64444, 0, 0, 0.575],
            51: [0, 0.64444, 0, 0, 0.575],
            52: [0, 0.64444, 0, 0, 0.575],
            53: [0, 0.64444, 0, 0, 0.575],
            54: [0, 0.64444, 0, 0, 0.575],
            55: [0, 0.64444, 0, 0, 0.575],
            56: [0, 0.64444, 0, 0, 0.575],
            57: [0, 0.64444, 0, 0, 0.575],
            58: [0, 0.44444, 0, 0, 0.31944],
            59: [0.19444, 0.44444, 0, 0, 0.31944],
            60: [0.08556, 0.58556, 0, 0, 0.89444],
            61: [-0.10889, 0.39111, 0, 0, 0.89444],
            62: [0.08556, 0.58556, 0, 0, 0.89444],
            63: [0, 0.69444, 0, 0, 0.54305],
            64: [0, 0.69444, 0, 0, 0.89444],
            65: [0, 0.68611, 0, 0, 0.86944],
            66: [0, 0.68611, 0, 0, 0.81805],
            67: [0, 0.68611, 0, 0, 0.83055],
            68: [0, 0.68611, 0, 0, 0.88194],
            69: [0, 0.68611, 0, 0, 0.75555],
            70: [0, 0.68611, 0, 0, 0.72361],
            71: [0, 0.68611, 0, 0, 0.90416],
            72: [0, 0.68611, 0, 0, 0.9],
            73: [0, 0.68611, 0, 0, 0.43611],
            74: [0, 0.68611, 0, 0, 0.59444],
            75: [0, 0.68611, 0, 0, 0.90138],
            76: [0, 0.68611, 0, 0, 0.69166],
            77: [0, 0.68611, 0, 0, 1.09166],
            78: [0, 0.68611, 0, 0, 0.9],
            79: [0, 0.68611, 0, 0, 0.86388],
            80: [0, 0.68611, 0, 0, 0.78611],
            81: [0.19444, 0.68611, 0, 0, 0.86388],
            82: [0, 0.68611, 0, 0, 0.8625],
            83: [0, 0.68611, 0, 0, 0.63889],
            84: [0, 0.68611, 0, 0, 0.8],
            85: [0, 0.68611, 0, 0, 0.88472],
            86: [0, 0.68611, 0.01597, 0, 0.86944],
            87: [0, 0.68611, 0.01597, 0, 1.18888],
            88: [0, 0.68611, 0, 0, 0.86944],
            89: [0, 0.68611, 0.02875, 0, 0.86944],
            90: [0, 0.68611, 0, 0, 0.70277],
            91: [0.25, 0.75, 0, 0, 0.31944],
            92: [0.25, 0.75, 0, 0, 0.575],
            93: [0.25, 0.75, 0, 0, 0.31944],
            94: [0, 0.69444, 0, 0, 0.575],
            95: [0.31, 0.13444, 0.03194, 0, 0.575],
            97: [0, 0.44444, 0, 0, 0.55902],
            98: [0, 0.69444, 0, 0, 0.63889],
            99: [0, 0.44444, 0, 0, 0.51111],
            100: [0, 0.69444, 0, 0, 0.63889],
            101: [0, 0.44444, 0, 0, 0.52708],
            102: [0, 0.69444, 0.10903, 0, 0.35139],
            103: [0.19444, 0.44444, 0.01597, 0, 0.575],
            104: [0, 0.69444, 0, 0, 0.63889],
            105: [0, 0.69444, 0, 0, 0.31944],
            106: [0.19444, 0.69444, 0, 0, 0.35139],
            107: [0, 0.69444, 0, 0, 0.60694],
            108: [0, 0.69444, 0, 0, 0.31944],
            109: [0, 0.44444, 0, 0, 0.95833],
            110: [0, 0.44444, 0, 0, 0.63889],
            111: [0, 0.44444, 0, 0, 0.575],
            112: [0.19444, 0.44444, 0, 0, 0.63889],
            113: [0.19444, 0.44444, 0, 0, 0.60694],
            114: [0, 0.44444, 0, 0, 0.47361],
            115: [0, 0.44444, 0, 0, 0.45361],
            116: [0, 0.63492, 0, 0, 0.44722],
            117: [0, 0.44444, 0, 0, 0.63889],
            118: [0, 0.44444, 0.01597, 0, 0.60694],
            119: [0, 0.44444, 0.01597, 0, 0.83055],
            120: [0, 0.44444, 0, 0, 0.60694],
            121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
            122: [0, 0.44444, 0, 0, 0.51111],
            123: [0.25, 0.75, 0, 0, 0.575],
            124: [0.25, 0.75, 0, 0, 0.31944],
            125: [0.25, 0.75, 0, 0, 0.575],
            126: [0.35, 0.34444, 0, 0, 0.575],
            160: [0, 0, 0, 0, 0.25],
            163: [0, 0.69444, 0, 0, 0.86853],
            168: [0, 0.69444, 0, 0, 0.575],
            172: [0, 0.44444, 0, 0, 0.76666],
            176: [0, 0.69444, 0, 0, 0.86944],
            177: [0.13333, 0.63333, 0, 0, 0.89444],
            184: [0.17014, 0, 0, 0, 0.51111],
            198: [0, 0.68611, 0, 0, 1.04166],
            215: [0.13333, 0.63333, 0, 0, 0.89444],
            216: [0.04861, 0.73472, 0, 0, 0.89444],
            223: [0, 0.69444, 0, 0, 0.59722],
            230: [0, 0.44444, 0, 0, 0.83055],
            247: [0.13333, 0.63333, 0, 0, 0.89444],
            248: [0.09722, 0.54167, 0, 0, 0.575],
            305: [0, 0.44444, 0, 0, 0.31944],
            338: [0, 0.68611, 0, 0, 1.16944],
            339: [0, 0.44444, 0, 0, 0.89444],
            567: [0.19444, 0.44444, 0, 0, 0.35139],
            710: [0, 0.69444, 0, 0, 0.575],
            711: [0, 0.63194, 0, 0, 0.575],
            713: [0, 0.59611, 0, 0, 0.575],
            714: [0, 0.69444, 0, 0, 0.575],
            715: [0, 0.69444, 0, 0, 0.575],
            728: [0, 0.69444, 0, 0, 0.575],
            729: [0, 0.69444, 0, 0, 0.31944],
            730: [0, 0.69444, 0, 0, 0.86944],
            732: [0, 0.69444, 0, 0, 0.575],
            733: [0, 0.69444, 0, 0, 0.575],
            915: [0, 0.68611, 0, 0, 0.69166],
            916: [0, 0.68611, 0, 0, 0.95833],
            920: [0, 0.68611, 0, 0, 0.89444],
            923: [0, 0.68611, 0, 0, 0.80555],
            926: [0, 0.68611, 0, 0, 0.76666],
            928: [0, 0.68611, 0, 0, 0.9],
            931: [0, 0.68611, 0, 0, 0.83055],
            933: [0, 0.68611, 0, 0, 0.89444],
            934: [0, 0.68611, 0, 0, 0.83055],
            936: [0, 0.68611, 0, 0, 0.89444],
            937: [0, 0.68611, 0, 0, 0.83055],
            8211: [0, 0.44444, 0.03194, 0, 0.575],
            8212: [0, 0.44444, 0.03194, 0, 1.14999],
            8216: [0, 0.69444, 0, 0, 0.31944],
            8217: [0, 0.69444, 0, 0, 0.31944],
            8220: [0, 0.69444, 0, 0, 0.60278],
            8221: [0, 0.69444, 0, 0, 0.60278],
            8224: [0.19444, 0.69444, 0, 0, 0.51111],
            8225: [0.19444, 0.69444, 0, 0, 0.51111],
            8242: [0, 0.55556, 0, 0, 0.34444],
            8407: [0, 0.72444, 0.15486, 0, 0.575],
            8463: [0, 0.69444, 0, 0, 0.66759],
            8465: [0, 0.69444, 0, 0, 0.83055],
            8467: [0, 0.69444, 0, 0, 0.47361],
            8472: [0.19444, 0.44444, 0, 0, 0.74027],
            8476: [0, 0.69444, 0, 0, 0.83055],
            8501: [0, 0.69444, 0, 0, 0.70277],
            8592: [-0.10889, 0.39111, 0, 0, 1.14999],
            8593: [0.19444, 0.69444, 0, 0, 0.575],
            8594: [-0.10889, 0.39111, 0, 0, 1.14999],
            8595: [0.19444, 0.69444, 0, 0, 0.575],
            8596: [-0.10889, 0.39111, 0, 0, 1.14999],
            8597: [0.25, 0.75, 0, 0, 0.575],
            8598: [0.19444, 0.69444, 0, 0, 1.14999],
            8599: [0.19444, 0.69444, 0, 0, 1.14999],
            8600: [0.19444, 0.69444, 0, 0, 1.14999],
            8601: [0.19444, 0.69444, 0, 0, 1.14999],
            8636: [-0.10889, 0.39111, 0, 0, 1.14999],
            8637: [-0.10889, 0.39111, 0, 0, 1.14999],
            8640: [-0.10889, 0.39111, 0, 0, 1.14999],
            8641: [-0.10889, 0.39111, 0, 0, 1.14999],
            8656: [-0.10889, 0.39111, 0, 0, 1.14999],
            8657: [0.19444, 0.69444, 0, 0, 0.70277],
            8658: [-0.10889, 0.39111, 0, 0, 1.14999],
            8659: [0.19444, 0.69444, 0, 0, 0.70277],
            8660: [-0.10889, 0.39111, 0, 0, 1.14999],
            8661: [0.25, 0.75, 0, 0, 0.70277],
            8704: [0, 0.69444, 0, 0, 0.63889],
            8706: [0, 0.69444, 0.06389, 0, 0.62847],
            8707: [0, 0.69444, 0, 0, 0.63889],
            8709: [0.05556, 0.75, 0, 0, 0.575],
            8711: [0, 0.68611, 0, 0, 0.95833],
            8712: [0.08556, 0.58556, 0, 0, 0.76666],
            8715: [0.08556, 0.58556, 0, 0, 0.76666],
            8722: [0.13333, 0.63333, 0, 0, 0.89444],
            8723: [0.13333, 0.63333, 0, 0, 0.89444],
            8725: [0.25, 0.75, 0, 0, 0.575],
            8726: [0.25, 0.75, 0, 0, 0.575],
            8727: [-0.02778, 0.47222, 0, 0, 0.575],
            8728: [-0.02639, 0.47361, 0, 0, 0.575],
            8729: [-0.02639, 0.47361, 0, 0, 0.575],
            8730: [0.18, 0.82, 0, 0, 0.95833],
            8733: [0, 0.44444, 0, 0, 0.89444],
            8734: [0, 0.44444, 0, 0, 1.14999],
            8736: [0, 0.69224, 0, 0, 0.72222],
            8739: [0.25, 0.75, 0, 0, 0.31944],
            8741: [0.25, 0.75, 0, 0, 0.575],
            8743: [0, 0.55556, 0, 0, 0.76666],
            8744: [0, 0.55556, 0, 0, 0.76666],
            8745: [0, 0.55556, 0, 0, 0.76666],
            8746: [0, 0.55556, 0, 0, 0.76666],
            8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
            8764: [-0.10889, 0.39111, 0, 0, 0.89444],
            8768: [0.19444, 0.69444, 0, 0, 0.31944],
            8771: [0.00222, 0.50222, 0, 0, 0.89444],
            8773: [0.027, 0.638, 0, 0, 0.894],
            8776: [0.02444, 0.52444, 0, 0, 0.89444],
            8781: [0.00222, 0.50222, 0, 0, 0.89444],
            8801: [0.00222, 0.50222, 0, 0, 0.89444],
            8804: [0.19667, 0.69667, 0, 0, 0.89444],
            8805: [0.19667, 0.69667, 0, 0, 0.89444],
            8810: [0.08556, 0.58556, 0, 0, 1.14999],
            8811: [0.08556, 0.58556, 0, 0, 1.14999],
            8826: [0.08556, 0.58556, 0, 0, 0.89444],
            8827: [0.08556, 0.58556, 0, 0, 0.89444],
            8834: [0.08556, 0.58556, 0, 0, 0.89444],
            8835: [0.08556, 0.58556, 0, 0, 0.89444],
            8838: [0.19667, 0.69667, 0, 0, 0.89444],
            8839: [0.19667, 0.69667, 0, 0, 0.89444],
            8846: [0, 0.55556, 0, 0, 0.76666],
            8849: [0.19667, 0.69667, 0, 0, 0.89444],
            8850: [0.19667, 0.69667, 0, 0, 0.89444],
            8851: [0, 0.55556, 0, 0, 0.76666],
            8852: [0, 0.55556, 0, 0, 0.76666],
            8853: [0.13333, 0.63333, 0, 0, 0.89444],
            8854: [0.13333, 0.63333, 0, 0, 0.89444],
            8855: [0.13333, 0.63333, 0, 0, 0.89444],
            8856: [0.13333, 0.63333, 0, 0, 0.89444],
            8857: [0.13333, 0.63333, 0, 0, 0.89444],
            8866: [0, 0.69444, 0, 0, 0.70277],
            8867: [0, 0.69444, 0, 0, 0.70277],
            8868: [0, 0.69444, 0, 0, 0.89444],
            8869: [0, 0.69444, 0, 0, 0.89444],
            8900: [-0.02639, 0.47361, 0, 0, 0.575],
            8901: [-0.02639, 0.47361, 0, 0, 0.31944],
            8902: [-0.02778, 0.47222, 0, 0, 0.575],
            8968: [0.25, 0.75, 0, 0, 0.51111],
            8969: [0.25, 0.75, 0, 0, 0.51111],
            8970: [0.25, 0.75, 0, 0, 0.51111],
            8971: [0.25, 0.75, 0, 0, 0.51111],
            8994: [-0.13889, 0.36111, 0, 0, 1.14999],
            8995: [-0.13889, 0.36111, 0, 0, 1.14999],
            9651: [0.19444, 0.69444, 0, 0, 1.02222],
            9657: [-0.02778, 0.47222, 0, 0, 0.575],
            9661: [0.19444, 0.69444, 0, 0, 1.02222],
            9667: [-0.02778, 0.47222, 0, 0, 0.575],
            9711: [0.19444, 0.69444, 0, 0, 1.14999],
            9824: [0.12963, 0.69444, 0, 0, 0.89444],
            9825: [0.12963, 0.69444, 0, 0, 0.89444],
            9826: [0.12963, 0.69444, 0, 0, 0.89444],
            9827: [0.12963, 0.69444, 0, 0, 0.89444],
            9837: [0, 0.75, 0, 0, 0.44722],
            9838: [0.19444, 0.69444, 0, 0, 0.44722],
            9839: [0.19444, 0.69444, 0, 0, 0.44722],
            10216: [0.25, 0.75, 0, 0, 0.44722],
            10217: [0.25, 0.75, 0, 0, 0.44722],
            10815: [0, 0.68611, 0, 0, 0.9],
            10927: [0.19667, 0.69667, 0, 0, 0.89444],
            10928: [0.19667, 0.69667, 0, 0, 0.89444],
            57376: [0.19444, 0.69444, 0, 0, 0],
          },
          "Main-BoldItalic": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0.11417, 0, 0.38611],
            34: [0, 0.69444, 0.07939, 0, 0.62055],
            35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
            37: [0.05556, 0.75, 0.12861, 0, 0.94444],
            38: [0, 0.69444, 0.08528, 0, 0.88555],
            39: [0, 0.69444, 0.12945, 0, 0.35555],
            40: [0.25, 0.75, 0.15806, 0, 0.47333],
            41: [0.25, 0.75, 0.03306, 0, 0.47333],
            42: [0, 0.75, 0.14333, 0, 0.59111],
            43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
            44: [0.19444, 0.14722, 0, 0, 0.35555],
            45: [0, 0.44444, 0.02611, 0, 0.41444],
            46: [0, 0.14722, 0, 0, 0.35555],
            47: [0.25, 0.75, 0.15806, 0, 0.59111],
            48: [0, 0.64444, 0.13167, 0, 0.59111],
            49: [0, 0.64444, 0.13167, 0, 0.59111],
            50: [0, 0.64444, 0.13167, 0, 0.59111],
            51: [0, 0.64444, 0.13167, 0, 0.59111],
            52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
            53: [0, 0.64444, 0.13167, 0, 0.59111],
            54: [0, 0.64444, 0.13167, 0, 0.59111],
            55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
            56: [0, 0.64444, 0.13167, 0, 0.59111],
            57: [0, 0.64444, 0.13167, 0, 0.59111],
            58: [0, 0.44444, 0.06695, 0, 0.35555],
            59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
            61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
            63: [0, 0.69444, 0.11472, 0, 0.59111],
            64: [0, 0.69444, 0.09208, 0, 0.88555],
            65: [0, 0.68611, 0, 0, 0.86555],
            66: [0, 0.68611, 0.0992, 0, 0.81666],
            67: [0, 0.68611, 0.14208, 0, 0.82666],
            68: [0, 0.68611, 0.09062, 0, 0.87555],
            69: [0, 0.68611, 0.11431, 0, 0.75666],
            70: [0, 0.68611, 0.12903, 0, 0.72722],
            71: [0, 0.68611, 0.07347, 0, 0.89527],
            72: [0, 0.68611, 0.17208, 0, 0.8961],
            73: [0, 0.68611, 0.15681, 0, 0.47166],
            74: [0, 0.68611, 0.145, 0, 0.61055],
            75: [0, 0.68611, 0.14208, 0, 0.89499],
            76: [0, 0.68611, 0, 0, 0.69777],
            77: [0, 0.68611, 0.17208, 0, 1.07277],
            78: [0, 0.68611, 0.17208, 0, 0.8961],
            79: [0, 0.68611, 0.09062, 0, 0.85499],
            80: [0, 0.68611, 0.0992, 0, 0.78721],
            81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
            82: [0, 0.68611, 0.02559, 0, 0.85944],
            83: [0, 0.68611, 0.11264, 0, 0.64999],
            84: [0, 0.68611, 0.12903, 0, 0.7961],
            85: [0, 0.68611, 0.17208, 0, 0.88083],
            86: [0, 0.68611, 0.18625, 0, 0.86555],
            87: [0, 0.68611, 0.18625, 0, 1.15999],
            88: [0, 0.68611, 0.15681, 0, 0.86555],
            89: [0, 0.68611, 0.19803, 0, 0.86555],
            90: [0, 0.68611, 0.14208, 0, 0.70888],
            91: [0.25, 0.75, 0.1875, 0, 0.35611],
            93: [0.25, 0.75, 0.09972, 0, 0.35611],
            94: [0, 0.69444, 0.06709, 0, 0.59111],
            95: [0.31, 0.13444, 0.09811, 0, 0.59111],
            97: [0, 0.44444, 0.09426, 0, 0.59111],
            98: [0, 0.69444, 0.07861, 0, 0.53222],
            99: [0, 0.44444, 0.05222, 0, 0.53222],
            100: [0, 0.69444, 0.10861, 0, 0.59111],
            101: [0, 0.44444, 0.085, 0, 0.53222],
            102: [0.19444, 0.69444, 0.21778, 0, 0.4],
            103: [0.19444, 0.44444, 0.105, 0, 0.53222],
            104: [0, 0.69444, 0.09426, 0, 0.59111],
            105: [0, 0.69326, 0.11387, 0, 0.35555],
            106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
            107: [0, 0.69444, 0.11111, 0, 0.53222],
            108: [0, 0.69444, 0.10861, 0, 0.29666],
            109: [0, 0.44444, 0.09426, 0, 0.94444],
            110: [0, 0.44444, 0.09426, 0, 0.64999],
            111: [0, 0.44444, 0.07861, 0, 0.59111],
            112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
            113: [0.19444, 0.44444, 0.105, 0, 0.53222],
            114: [0, 0.44444, 0.11111, 0, 0.50167],
            115: [0, 0.44444, 0.08167, 0, 0.48694],
            116: [0, 0.63492, 0.09639, 0, 0.385],
            117: [0, 0.44444, 0.09426, 0, 0.62055],
            118: [0, 0.44444, 0.11111, 0, 0.53222],
            119: [0, 0.44444, 0.11111, 0, 0.76777],
            120: [0, 0.44444, 0.12583, 0, 0.56055],
            121: [0.19444, 0.44444, 0.105, 0, 0.56166],
            122: [0, 0.44444, 0.13889, 0, 0.49055],
            126: [0.35, 0.34444, 0.11472, 0, 0.59111],
            160: [0, 0, 0, 0, 0.25],
            168: [0, 0.69444, 0.11473, 0, 0.59111],
            176: [0, 0.69444, 0, 0, 0.94888],
            184: [0.17014, 0, 0, 0, 0.53222],
            198: [0, 0.68611, 0.11431, 0, 1.02277],
            216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
            223: [0.19444, 0.69444, 0.09736, 0, 0.665],
            230: [0, 0.44444, 0.085, 0, 0.82666],
            248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
            305: [0, 0.44444, 0.09426, 0, 0.35555],
            338: [0, 0.68611, 0.11431, 0, 1.14054],
            339: [0, 0.44444, 0.085, 0, 0.82666],
            567: [0.19444, 0.44444, 0.04611, 0, 0.385],
            710: [0, 0.69444, 0.06709, 0, 0.59111],
            711: [0, 0.63194, 0.08271, 0, 0.59111],
            713: [0, 0.59444, 0.10444, 0, 0.59111],
            714: [0, 0.69444, 0.08528, 0, 0.59111],
            715: [0, 0.69444, 0, 0, 0.59111],
            728: [0, 0.69444, 0.10333, 0, 0.59111],
            729: [0, 0.69444, 0.12945, 0, 0.35555],
            730: [0, 0.69444, 0, 0, 0.94888],
            732: [0, 0.69444, 0.11472, 0, 0.59111],
            733: [0, 0.69444, 0.11472, 0, 0.59111],
            915: [0, 0.68611, 0.12903, 0, 0.69777],
            916: [0, 0.68611, 0, 0, 0.94444],
            920: [0, 0.68611, 0.09062, 0, 0.88555],
            923: [0, 0.68611, 0, 0, 0.80666],
            926: [0, 0.68611, 0.15092, 0, 0.76777],
            928: [0, 0.68611, 0.17208, 0, 0.8961],
            931: [0, 0.68611, 0.11431, 0, 0.82666],
            933: [0, 0.68611, 0.10778, 0, 0.88555],
            934: [0, 0.68611, 0.05632, 0, 0.82666],
            936: [0, 0.68611, 0.10778, 0, 0.88555],
            937: [0, 0.68611, 0.0992, 0, 0.82666],
            8211: [0, 0.44444, 0.09811, 0, 0.59111],
            8212: [0, 0.44444, 0.09811, 0, 1.18221],
            8216: [0, 0.69444, 0.12945, 0, 0.35555],
            8217: [0, 0.69444, 0.12945, 0, 0.35555],
            8220: [0, 0.69444, 0.16772, 0, 0.62055],
            8221: [0, 0.69444, 0.07939, 0, 0.62055],
          },
          "Main-Italic": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0.12417, 0, 0.30667],
            34: [0, 0.69444, 0.06961, 0, 0.51444],
            35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
            37: [0.05556, 0.75, 0.13639, 0, 0.81777],
            38: [0, 0.69444, 0.09694, 0, 0.76666],
            39: [0, 0.69444, 0.12417, 0, 0.30667],
            40: [0.25, 0.75, 0.16194, 0, 0.40889],
            41: [0.25, 0.75, 0.03694, 0, 0.40889],
            42: [0, 0.75, 0.14917, 0, 0.51111],
            43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
            44: [0.19444, 0.10556, 0, 0, 0.30667],
            45: [0, 0.43056, 0.02826, 0, 0.35778],
            46: [0, 0.10556, 0, 0, 0.30667],
            47: [0.25, 0.75, 0.16194, 0, 0.51111],
            48: [0, 0.64444, 0.13556, 0, 0.51111],
            49: [0, 0.64444, 0.13556, 0, 0.51111],
            50: [0, 0.64444, 0.13556, 0, 0.51111],
            51: [0, 0.64444, 0.13556, 0, 0.51111],
            52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
            53: [0, 0.64444, 0.13556, 0, 0.51111],
            54: [0, 0.64444, 0.13556, 0, 0.51111],
            55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
            56: [0, 0.64444, 0.13556, 0, 0.51111],
            57: [0, 0.64444, 0.13556, 0, 0.51111],
            58: [0, 0.43056, 0.0582, 0, 0.30667],
            59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
            61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
            63: [0, 0.69444, 0.1225, 0, 0.51111],
            64: [0, 0.69444, 0.09597, 0, 0.76666],
            65: [0, 0.68333, 0, 0, 0.74333],
            66: [0, 0.68333, 0.10257, 0, 0.70389],
            67: [0, 0.68333, 0.14528, 0, 0.71555],
            68: [0, 0.68333, 0.09403, 0, 0.755],
            69: [0, 0.68333, 0.12028, 0, 0.67833],
            70: [0, 0.68333, 0.13305, 0, 0.65277],
            71: [0, 0.68333, 0.08722, 0, 0.77361],
            72: [0, 0.68333, 0.16389, 0, 0.74333],
            73: [0, 0.68333, 0.15806, 0, 0.38555],
            74: [0, 0.68333, 0.14028, 0, 0.525],
            75: [0, 0.68333, 0.14528, 0, 0.76888],
            76: [0, 0.68333, 0, 0, 0.62722],
            77: [0, 0.68333, 0.16389, 0, 0.89666],
            78: [0, 0.68333, 0.16389, 0, 0.74333],
            79: [0, 0.68333, 0.09403, 0, 0.76666],
            80: [0, 0.68333, 0.10257, 0, 0.67833],
            81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
            82: [0, 0.68333, 0.03868, 0, 0.72944],
            83: [0, 0.68333, 0.11972, 0, 0.56222],
            84: [0, 0.68333, 0.13305, 0, 0.71555],
            85: [0, 0.68333, 0.16389, 0, 0.74333],
            86: [0, 0.68333, 0.18361, 0, 0.74333],
            87: [0, 0.68333, 0.18361, 0, 0.99888],
            88: [0, 0.68333, 0.15806, 0, 0.74333],
            89: [0, 0.68333, 0.19383, 0, 0.74333],
            90: [0, 0.68333, 0.14528, 0, 0.61333],
            91: [0.25, 0.75, 0.1875, 0, 0.30667],
            93: [0.25, 0.75, 0.10528, 0, 0.30667],
            94: [0, 0.69444, 0.06646, 0, 0.51111],
            95: [0.31, 0.12056, 0.09208, 0, 0.51111],
            97: [0, 0.43056, 0.07671, 0, 0.51111],
            98: [0, 0.69444, 0.06312, 0, 0.46],
            99: [0, 0.43056, 0.05653, 0, 0.46],
            100: [0, 0.69444, 0.10333, 0, 0.51111],
            101: [0, 0.43056, 0.07514, 0, 0.46],
            102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
            103: [0.19444, 0.43056, 0.08847, 0, 0.46],
            104: [0, 0.69444, 0.07671, 0, 0.51111],
            105: [0, 0.65536, 0.1019, 0, 0.30667],
            106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
            107: [0, 0.69444, 0.10764, 0, 0.46],
            108: [0, 0.69444, 0.10333, 0, 0.25555],
            109: [0, 0.43056, 0.07671, 0, 0.81777],
            110: [0, 0.43056, 0.07671, 0, 0.56222],
            111: [0, 0.43056, 0.06312, 0, 0.51111],
            112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
            113: [0.19444, 0.43056, 0.08847, 0, 0.46],
            114: [0, 0.43056, 0.10764, 0, 0.42166],
            115: [0, 0.43056, 0.08208, 0, 0.40889],
            116: [0, 0.61508, 0.09486, 0, 0.33222],
            117: [0, 0.43056, 0.07671, 0, 0.53666],
            118: [0, 0.43056, 0.10764, 0, 0.46],
            119: [0, 0.43056, 0.10764, 0, 0.66444],
            120: [0, 0.43056, 0.12042, 0, 0.46389],
            121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
            122: [0, 0.43056, 0.12292, 0, 0.40889],
            126: [0.35, 0.31786, 0.11585, 0, 0.51111],
            160: [0, 0, 0, 0, 0.25],
            168: [0, 0.66786, 0.10474, 0, 0.51111],
            176: [0, 0.69444, 0, 0, 0.83129],
            184: [0.17014, 0, 0, 0, 0.46],
            198: [0, 0.68333, 0.12028, 0, 0.88277],
            216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
            223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
            230: [0, 0.43056, 0.07514, 0, 0.71555],
            248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
            338: [0, 0.68333, 0.12028, 0, 0.98499],
            339: [0, 0.43056, 0.07514, 0, 0.71555],
            710: [0, 0.69444, 0.06646, 0, 0.51111],
            711: [0, 0.62847, 0.08295, 0, 0.51111],
            713: [0, 0.56167, 0.10333, 0, 0.51111],
            714: [0, 0.69444, 0.09694, 0, 0.51111],
            715: [0, 0.69444, 0, 0, 0.51111],
            728: [0, 0.69444, 0.10806, 0, 0.51111],
            729: [0, 0.66786, 0.11752, 0, 0.30667],
            730: [0, 0.69444, 0, 0, 0.83129],
            732: [0, 0.66786, 0.11585, 0, 0.51111],
            733: [0, 0.69444, 0.1225, 0, 0.51111],
            915: [0, 0.68333, 0.13305, 0, 0.62722],
            916: [0, 0.68333, 0, 0, 0.81777],
            920: [0, 0.68333, 0.09403, 0, 0.76666],
            923: [0, 0.68333, 0, 0, 0.69222],
            926: [0, 0.68333, 0.15294, 0, 0.66444],
            928: [0, 0.68333, 0.16389, 0, 0.74333],
            931: [0, 0.68333, 0.12028, 0, 0.71555],
            933: [0, 0.68333, 0.11111, 0, 0.76666],
            934: [0, 0.68333, 0.05986, 0, 0.71555],
            936: [0, 0.68333, 0.11111, 0, 0.76666],
            937: [0, 0.68333, 0.10257, 0, 0.71555],
            8211: [0, 0.43056, 0.09208, 0, 0.51111],
            8212: [0, 0.43056, 0.09208, 0, 1.02222],
            8216: [0, 0.69444, 0.12417, 0, 0.30667],
            8217: [0, 0.69444, 0.12417, 0, 0.30667],
            8220: [0, 0.69444, 0.1685, 0, 0.51444],
            8221: [0, 0.69444, 0.06961, 0, 0.51444],
            8463: [0, 0.68889, 0, 0, 0.54028],
          },
          "Main-Regular": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0, 0, 0.27778],
            34: [0, 0.69444, 0, 0, 0.5],
            35: [0.19444, 0.69444, 0, 0, 0.83334],
            36: [0.05556, 0.75, 0, 0, 0.5],
            37: [0.05556, 0.75, 0, 0, 0.83334],
            38: [0, 0.69444, 0, 0, 0.77778],
            39: [0, 0.69444, 0, 0, 0.27778],
            40: [0.25, 0.75, 0, 0, 0.38889],
            41: [0.25, 0.75, 0, 0, 0.38889],
            42: [0, 0.75, 0, 0, 0.5],
            43: [0.08333, 0.58333, 0, 0, 0.77778],
            44: [0.19444, 0.10556, 0, 0, 0.27778],
            45: [0, 0.43056, 0, 0, 0.33333],
            46: [0, 0.10556, 0, 0, 0.27778],
            47: [0.25, 0.75, 0, 0, 0.5],
            48: [0, 0.64444, 0, 0, 0.5],
            49: [0, 0.64444, 0, 0, 0.5],
            50: [0, 0.64444, 0, 0, 0.5],
            51: [0, 0.64444, 0, 0, 0.5],
            52: [0, 0.64444, 0, 0, 0.5],
            53: [0, 0.64444, 0, 0, 0.5],
            54: [0, 0.64444, 0, 0, 0.5],
            55: [0, 0.64444, 0, 0, 0.5],
            56: [0, 0.64444, 0, 0, 0.5],
            57: [0, 0.64444, 0, 0, 0.5],
            58: [0, 0.43056, 0, 0, 0.27778],
            59: [0.19444, 0.43056, 0, 0, 0.27778],
            60: [0.0391, 0.5391, 0, 0, 0.77778],
            61: [-0.13313, 0.36687, 0, 0, 0.77778],
            62: [0.0391, 0.5391, 0, 0, 0.77778],
            63: [0, 0.69444, 0, 0, 0.47222],
            64: [0, 0.69444, 0, 0, 0.77778],
            65: [0, 0.68333, 0, 0, 0.75],
            66: [0, 0.68333, 0, 0, 0.70834],
            67: [0, 0.68333, 0, 0, 0.72222],
            68: [0, 0.68333, 0, 0, 0.76389],
            69: [0, 0.68333, 0, 0, 0.68056],
            70: [0, 0.68333, 0, 0, 0.65278],
            71: [0, 0.68333, 0, 0, 0.78472],
            72: [0, 0.68333, 0, 0, 0.75],
            73: [0, 0.68333, 0, 0, 0.36111],
            74: [0, 0.68333, 0, 0, 0.51389],
            75: [0, 0.68333, 0, 0, 0.77778],
            76: [0, 0.68333, 0, 0, 0.625],
            77: [0, 0.68333, 0, 0, 0.91667],
            78: [0, 0.68333, 0, 0, 0.75],
            79: [0, 0.68333, 0, 0, 0.77778],
            80: [0, 0.68333, 0, 0, 0.68056],
            81: [0.19444, 0.68333, 0, 0, 0.77778],
            82: [0, 0.68333, 0, 0, 0.73611],
            83: [0, 0.68333, 0, 0, 0.55556],
            84: [0, 0.68333, 0, 0, 0.72222],
            85: [0, 0.68333, 0, 0, 0.75],
            86: [0, 0.68333, 0.01389, 0, 0.75],
            87: [0, 0.68333, 0.01389, 0, 1.02778],
            88: [0, 0.68333, 0, 0, 0.75],
            89: [0, 0.68333, 0.025, 0, 0.75],
            90: [0, 0.68333, 0, 0, 0.61111],
            91: [0.25, 0.75, 0, 0, 0.27778],
            92: [0.25, 0.75, 0, 0, 0.5],
            93: [0.25, 0.75, 0, 0, 0.27778],
            94: [0, 0.69444, 0, 0, 0.5],
            95: [0.31, 0.12056, 0.02778, 0, 0.5],
            97: [0, 0.43056, 0, 0, 0.5],
            98: [0, 0.69444, 0, 0, 0.55556],
            99: [0, 0.43056, 0, 0, 0.44445],
            100: [0, 0.69444, 0, 0, 0.55556],
            101: [0, 0.43056, 0, 0, 0.44445],
            102: [0, 0.69444, 0.07778, 0, 0.30556],
            103: [0.19444, 0.43056, 0.01389, 0, 0.5],
            104: [0, 0.69444, 0, 0, 0.55556],
            105: [0, 0.66786, 0, 0, 0.27778],
            106: [0.19444, 0.66786, 0, 0, 0.30556],
            107: [0, 0.69444, 0, 0, 0.52778],
            108: [0, 0.69444, 0, 0, 0.27778],
            109: [0, 0.43056, 0, 0, 0.83334],
            110: [0, 0.43056, 0, 0, 0.55556],
            111: [0, 0.43056, 0, 0, 0.5],
            112: [0.19444, 0.43056, 0, 0, 0.55556],
            113: [0.19444, 0.43056, 0, 0, 0.52778],
            114: [0, 0.43056, 0, 0, 0.39167],
            115: [0, 0.43056, 0, 0, 0.39445],
            116: [0, 0.61508, 0, 0, 0.38889],
            117: [0, 0.43056, 0, 0, 0.55556],
            118: [0, 0.43056, 0.01389, 0, 0.52778],
            119: [0, 0.43056, 0.01389, 0, 0.72222],
            120: [0, 0.43056, 0, 0, 0.52778],
            121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
            122: [0, 0.43056, 0, 0, 0.44445],
            123: [0.25, 0.75, 0, 0, 0.5],
            124: [0.25, 0.75, 0, 0, 0.27778],
            125: [0.25, 0.75, 0, 0, 0.5],
            126: [0.35, 0.31786, 0, 0, 0.5],
            160: [0, 0, 0, 0, 0.25],
            163: [0, 0.69444, 0, 0, 0.76909],
            167: [0.19444, 0.69444, 0, 0, 0.44445],
            168: [0, 0.66786, 0, 0, 0.5],
            172: [0, 0.43056, 0, 0, 0.66667],
            176: [0, 0.69444, 0, 0, 0.75],
            177: [0.08333, 0.58333, 0, 0, 0.77778],
            182: [0.19444, 0.69444, 0, 0, 0.61111],
            184: [0.17014, 0, 0, 0, 0.44445],
            198: [0, 0.68333, 0, 0, 0.90278],
            215: [0.08333, 0.58333, 0, 0, 0.77778],
            216: [0.04861, 0.73194, 0, 0, 0.77778],
            223: [0, 0.69444, 0, 0, 0.5],
            230: [0, 0.43056, 0, 0, 0.72222],
            247: [0.08333, 0.58333, 0, 0, 0.77778],
            248: [0.09722, 0.52778, 0, 0, 0.5],
            305: [0, 0.43056, 0, 0, 0.27778],
            338: [0, 0.68333, 0, 0, 1.01389],
            339: [0, 0.43056, 0, 0, 0.77778],
            567: [0.19444, 0.43056, 0, 0, 0.30556],
            710: [0, 0.69444, 0, 0, 0.5],
            711: [0, 0.62847, 0, 0, 0.5],
            713: [0, 0.56778, 0, 0, 0.5],
            714: [0, 0.69444, 0, 0, 0.5],
            715: [0, 0.69444, 0, 0, 0.5],
            728: [0, 0.69444, 0, 0, 0.5],
            729: [0, 0.66786, 0, 0, 0.27778],
            730: [0, 0.69444, 0, 0, 0.75],
            732: [0, 0.66786, 0, 0, 0.5],
            733: [0, 0.69444, 0, 0, 0.5],
            915: [0, 0.68333, 0, 0, 0.625],
            916: [0, 0.68333, 0, 0, 0.83334],
            920: [0, 0.68333, 0, 0, 0.77778],
            923: [0, 0.68333, 0, 0, 0.69445],
            926: [0, 0.68333, 0, 0, 0.66667],
            928: [0, 0.68333, 0, 0, 0.75],
            931: [0, 0.68333, 0, 0, 0.72222],
            933: [0, 0.68333, 0, 0, 0.77778],
            934: [0, 0.68333, 0, 0, 0.72222],
            936: [0, 0.68333, 0, 0, 0.77778],
            937: [0, 0.68333, 0, 0, 0.72222],
            8211: [0, 0.43056, 0.02778, 0, 0.5],
            8212: [0, 0.43056, 0.02778, 0, 1],
            8216: [0, 0.69444, 0, 0, 0.27778],
            8217: [0, 0.69444, 0, 0, 0.27778],
            8220: [0, 0.69444, 0, 0, 0.5],
            8221: [0, 0.69444, 0, 0, 0.5],
            8224: [0.19444, 0.69444, 0, 0, 0.44445],
            8225: [0.19444, 0.69444, 0, 0, 0.44445],
            8230: [0, 0.123, 0, 0, 1.172],
            8242: [0, 0.55556, 0, 0, 0.275],
            8407: [0, 0.71444, 0.15382, 0, 0.5],
            8463: [0, 0.68889, 0, 0, 0.54028],
            8465: [0, 0.69444, 0, 0, 0.72222],
            8467: [0, 0.69444, 0, 0.11111, 0.41667],
            8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
            8476: [0, 0.69444, 0, 0, 0.72222],
            8501: [0, 0.69444, 0, 0, 0.61111],
            8592: [-0.13313, 0.36687, 0, 0, 1],
            8593: [0.19444, 0.69444, 0, 0, 0.5],
            8594: [-0.13313, 0.36687, 0, 0, 1],
            8595: [0.19444, 0.69444, 0, 0, 0.5],
            8596: [-0.13313, 0.36687, 0, 0, 1],
            8597: [0.25, 0.75, 0, 0, 0.5],
            8598: [0.19444, 0.69444, 0, 0, 1],
            8599: [0.19444, 0.69444, 0, 0, 1],
            8600: [0.19444, 0.69444, 0, 0, 1],
            8601: [0.19444, 0.69444, 0, 0, 1],
            8614: [0.011, 0.511, 0, 0, 1],
            8617: [0.011, 0.511, 0, 0, 1.126],
            8618: [0.011, 0.511, 0, 0, 1.126],
            8636: [-0.13313, 0.36687, 0, 0, 1],
            8637: [-0.13313, 0.36687, 0, 0, 1],
            8640: [-0.13313, 0.36687, 0, 0, 1],
            8641: [-0.13313, 0.36687, 0, 0, 1],
            8652: [0.011, 0.671, 0, 0, 1],
            8656: [-0.13313, 0.36687, 0, 0, 1],
            8657: [0.19444, 0.69444, 0, 0, 0.61111],
            8658: [-0.13313, 0.36687, 0, 0, 1],
            8659: [0.19444, 0.69444, 0, 0, 0.61111],
            8660: [-0.13313, 0.36687, 0, 0, 1],
            8661: [0.25, 0.75, 0, 0, 0.61111],
            8704: [0, 0.69444, 0, 0, 0.55556],
            8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
            8707: [0, 0.69444, 0, 0, 0.55556],
            8709: [0.05556, 0.75, 0, 0, 0.5],
            8711: [0, 0.68333, 0, 0, 0.83334],
            8712: [0.0391, 0.5391, 0, 0, 0.66667],
            8715: [0.0391, 0.5391, 0, 0, 0.66667],
            8722: [0.08333, 0.58333, 0, 0, 0.77778],
            8723: [0.08333, 0.58333, 0, 0, 0.77778],
            8725: [0.25, 0.75, 0, 0, 0.5],
            8726: [0.25, 0.75, 0, 0, 0.5],
            8727: [-0.03472, 0.46528, 0, 0, 0.5],
            8728: [-0.05555, 0.44445, 0, 0, 0.5],
            8729: [-0.05555, 0.44445, 0, 0, 0.5],
            8730: [0.2, 0.8, 0, 0, 0.83334],
            8733: [0, 0.43056, 0, 0, 0.77778],
            8734: [0, 0.43056, 0, 0, 1],
            8736: [0, 0.69224, 0, 0, 0.72222],
            8739: [0.25, 0.75, 0, 0, 0.27778],
            8741: [0.25, 0.75, 0, 0, 0.5],
            8743: [0, 0.55556, 0, 0, 0.66667],
            8744: [0, 0.55556, 0, 0, 0.66667],
            8745: [0, 0.55556, 0, 0, 0.66667],
            8746: [0, 0.55556, 0, 0, 0.66667],
            8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
            8764: [-0.13313, 0.36687, 0, 0, 0.77778],
            8768: [0.19444, 0.69444, 0, 0, 0.27778],
            8771: [-0.03625, 0.46375, 0, 0, 0.77778],
            8773: [-0.022, 0.589, 0, 0, 0.778],
            8776: [-0.01688, 0.48312, 0, 0, 0.77778],
            8781: [-0.03625, 0.46375, 0, 0, 0.77778],
            8784: [-0.133, 0.673, 0, 0, 0.778],
            8801: [-0.03625, 0.46375, 0, 0, 0.77778],
            8804: [0.13597, 0.63597, 0, 0, 0.77778],
            8805: [0.13597, 0.63597, 0, 0, 0.77778],
            8810: [0.0391, 0.5391, 0, 0, 1],
            8811: [0.0391, 0.5391, 0, 0, 1],
            8826: [0.0391, 0.5391, 0, 0, 0.77778],
            8827: [0.0391, 0.5391, 0, 0, 0.77778],
            8834: [0.0391, 0.5391, 0, 0, 0.77778],
            8835: [0.0391, 0.5391, 0, 0, 0.77778],
            8838: [0.13597, 0.63597, 0, 0, 0.77778],
            8839: [0.13597, 0.63597, 0, 0, 0.77778],
            8846: [0, 0.55556, 0, 0, 0.66667],
            8849: [0.13597, 0.63597, 0, 0, 0.77778],
            8850: [0.13597, 0.63597, 0, 0, 0.77778],
            8851: [0, 0.55556, 0, 0, 0.66667],
            8852: [0, 0.55556, 0, 0, 0.66667],
            8853: [0.08333, 0.58333, 0, 0, 0.77778],
            8854: [0.08333, 0.58333, 0, 0, 0.77778],
            8855: [0.08333, 0.58333, 0, 0, 0.77778],
            8856: [0.08333, 0.58333, 0, 0, 0.77778],
            8857: [0.08333, 0.58333, 0, 0, 0.77778],
            8866: [0, 0.69444, 0, 0, 0.61111],
            8867: [0, 0.69444, 0, 0, 0.61111],
            8868: [0, 0.69444, 0, 0, 0.77778],
            8869: [0, 0.69444, 0, 0, 0.77778],
            8872: [0.249, 0.75, 0, 0, 0.867],
            8900: [-0.05555, 0.44445, 0, 0, 0.5],
            8901: [-0.05555, 0.44445, 0, 0, 0.27778],
            8902: [-0.03472, 0.46528, 0, 0, 0.5],
            8904: [0.005, 0.505, 0, 0, 0.9],
            8942: [0.03, 0.903, 0, 0, 0.278],
            8943: [-0.19, 0.313, 0, 0, 1.172],
            8945: [-0.1, 0.823, 0, 0, 1.282],
            8968: [0.25, 0.75, 0, 0, 0.44445],
            8969: [0.25, 0.75, 0, 0, 0.44445],
            8970: [0.25, 0.75, 0, 0, 0.44445],
            8971: [0.25, 0.75, 0, 0, 0.44445],
            8994: [-0.14236, 0.35764, 0, 0, 1],
            8995: [-0.14236, 0.35764, 0, 0, 1],
            9136: [0.244, 0.744, 0, 0, 0.412],
            9137: [0.244, 0.745, 0, 0, 0.412],
            9651: [0.19444, 0.69444, 0, 0, 0.88889],
            9657: [-0.03472, 0.46528, 0, 0, 0.5],
            9661: [0.19444, 0.69444, 0, 0, 0.88889],
            9667: [-0.03472, 0.46528, 0, 0, 0.5],
            9711: [0.19444, 0.69444, 0, 0, 1],
            9824: [0.12963, 0.69444, 0, 0, 0.77778],
            9825: [0.12963, 0.69444, 0, 0, 0.77778],
            9826: [0.12963, 0.69444, 0, 0, 0.77778],
            9827: [0.12963, 0.69444, 0, 0, 0.77778],
            9837: [0, 0.75, 0, 0, 0.38889],
            9838: [0.19444, 0.69444, 0, 0, 0.38889],
            9839: [0.19444, 0.69444, 0, 0, 0.38889],
            10216: [0.25, 0.75, 0, 0, 0.38889],
            10217: [0.25, 0.75, 0, 0, 0.38889],
            10222: [0.244, 0.744, 0, 0, 0.412],
            10223: [0.244, 0.745, 0, 0, 0.412],
            10229: [0.011, 0.511, 0, 0, 1.609],
            10230: [0.011, 0.511, 0, 0, 1.638],
            10231: [0.011, 0.511, 0, 0, 1.859],
            10232: [0.024, 0.525, 0, 0, 1.609],
            10233: [0.024, 0.525, 0, 0, 1.638],
            10234: [0.024, 0.525, 0, 0, 1.858],
            10236: [0.011, 0.511, 0, 0, 1.638],
            10815: [0, 0.68333, 0, 0, 0.75],
            10927: [0.13597, 0.63597, 0, 0, 0.77778],
            10928: [0.13597, 0.63597, 0, 0, 0.77778],
            57376: [0.19444, 0.69444, 0, 0, 0],
          },
          "Math-BoldItalic": {
            32: [0, 0, 0, 0, 0.25],
            48: [0, 0.44444, 0, 0, 0.575],
            49: [0, 0.44444, 0, 0, 0.575],
            50: [0, 0.44444, 0, 0, 0.575],
            51: [0.19444, 0.44444, 0, 0, 0.575],
            52: [0.19444, 0.44444, 0, 0, 0.575],
            53: [0.19444, 0.44444, 0, 0, 0.575],
            54: [0, 0.64444, 0, 0, 0.575],
            55: [0.19444, 0.44444, 0, 0, 0.575],
            56: [0, 0.64444, 0, 0, 0.575],
            57: [0.19444, 0.44444, 0, 0, 0.575],
            65: [0, 0.68611, 0, 0, 0.86944],
            66: [0, 0.68611, 0.04835, 0, 0.8664],
            67: [0, 0.68611, 0.06979, 0, 0.81694],
            68: [0, 0.68611, 0.03194, 0, 0.93812],
            69: [0, 0.68611, 0.05451, 0, 0.81007],
            70: [0, 0.68611, 0.15972, 0, 0.68889],
            71: [0, 0.68611, 0, 0, 0.88673],
            72: [0, 0.68611, 0.08229, 0, 0.98229],
            73: [0, 0.68611, 0.07778, 0, 0.51111],
            74: [0, 0.68611, 0.10069, 0, 0.63125],
            75: [0, 0.68611, 0.06979, 0, 0.97118],
            76: [0, 0.68611, 0, 0, 0.75555],
            77: [0, 0.68611, 0.11424, 0, 1.14201],
            78: [0, 0.68611, 0.11424, 0, 0.95034],
            79: [0, 0.68611, 0.03194, 0, 0.83666],
            80: [0, 0.68611, 0.15972, 0, 0.72309],
            81: [0.19444, 0.68611, 0, 0, 0.86861],
            82: [0, 0.68611, 0.00421, 0, 0.87235],
            83: [0, 0.68611, 0.05382, 0, 0.69271],
            84: [0, 0.68611, 0.15972, 0, 0.63663],
            85: [0, 0.68611, 0.11424, 0, 0.80027],
            86: [0, 0.68611, 0.25555, 0, 0.67778],
            87: [0, 0.68611, 0.15972, 0, 1.09305],
            88: [0, 0.68611, 0.07778, 0, 0.94722],
            89: [0, 0.68611, 0.25555, 0, 0.67458],
            90: [0, 0.68611, 0.06979, 0, 0.77257],
            97: [0, 0.44444, 0, 0, 0.63287],
            98: [0, 0.69444, 0, 0, 0.52083],
            99: [0, 0.44444, 0, 0, 0.51342],
            100: [0, 0.69444, 0, 0, 0.60972],
            101: [0, 0.44444, 0, 0, 0.55361],
            102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
            103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
            104: [0, 0.69444, 0, 0, 0.66759],
            105: [0, 0.69326, 0, 0, 0.4048],
            106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
            107: [0, 0.69444, 0.01852, 0, 0.6037],
            108: [0, 0.69444, 0.0088, 0, 0.34815],
            109: [0, 0.44444, 0, 0, 1.0324],
            110: [0, 0.44444, 0, 0, 0.71296],
            111: [0, 0.44444, 0, 0, 0.58472],
            112: [0.19444, 0.44444, 0, 0, 0.60092],
            113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
            114: [0, 0.44444, 0.03194, 0, 0.5287],
            115: [0, 0.44444, 0, 0, 0.53125],
            116: [0, 0.63492, 0, 0, 0.41528],
            117: [0, 0.44444, 0, 0, 0.68102],
            118: [0, 0.44444, 0.03704, 0, 0.56666],
            119: [0, 0.44444, 0.02778, 0, 0.83148],
            120: [0, 0.44444, 0, 0, 0.65903],
            121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
            122: [0, 0.44444, 0.04213, 0, 0.55509],
            160: [0, 0, 0, 0, 0.25],
            915: [0, 0.68611, 0.15972, 0, 0.65694],
            916: [0, 0.68611, 0, 0, 0.95833],
            920: [0, 0.68611, 0.03194, 0, 0.86722],
            923: [0, 0.68611, 0, 0, 0.80555],
            926: [0, 0.68611, 0.07458, 0, 0.84125],
            928: [0, 0.68611, 0.08229, 0, 0.98229],
            931: [0, 0.68611, 0.05451, 0, 0.88507],
            933: [0, 0.68611, 0.15972, 0, 0.67083],
            934: [0, 0.68611, 0, 0, 0.76666],
            936: [0, 0.68611, 0.11653, 0, 0.71402],
            937: [0, 0.68611, 0.04835, 0, 0.8789],
            945: [0, 0.44444, 0, 0, 0.76064],
            946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
            947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
            948: [0, 0.69444, 0.03819, 0, 0.52222],
            949: [0, 0.44444, 0, 0, 0.52882],
            950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
            951: [0.19444, 0.44444, 0.03704, 0, 0.6],
            952: [0, 0.69444, 0.03194, 0, 0.5618],
            953: [0, 0.44444, 0, 0, 0.41204],
            954: [0, 0.44444, 0, 0, 0.66759],
            955: [0, 0.69444, 0, 0, 0.67083],
            956: [0.19444, 0.44444, 0, 0, 0.70787],
            957: [0, 0.44444, 0.06898, 0, 0.57685],
            958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
            959: [0, 0.44444, 0, 0, 0.58472],
            960: [0, 0.44444, 0.03704, 0, 0.68241],
            961: [0.19444, 0.44444, 0, 0, 0.6118],
            962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
            963: [0, 0.44444, 0.03704, 0, 0.68588],
            964: [0, 0.44444, 0.13472, 0, 0.52083],
            965: [0, 0.44444, 0.03704, 0, 0.63055],
            966: [0.19444, 0.44444, 0, 0, 0.74722],
            967: [0.19444, 0.44444, 0, 0, 0.71805],
            968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
            969: [0, 0.44444, 0.03704, 0, 0.71782],
            977: [0, 0.69444, 0, 0, 0.69155],
            981: [0.19444, 0.69444, 0, 0, 0.7125],
            982: [0, 0.44444, 0.03194, 0, 0.975],
            1009: [0.19444, 0.44444, 0, 0, 0.6118],
            1013: [0, 0.44444, 0, 0, 0.48333],
            57649: [0, 0.44444, 0, 0, 0.39352],
            57911: [0.19444, 0.44444, 0, 0, 0.43889],
          },
          "Math-Italic": {
            32: [0, 0, 0, 0, 0.25],
            48: [0, 0.43056, 0, 0, 0.5],
            49: [0, 0.43056, 0, 0, 0.5],
            50: [0, 0.43056, 0, 0, 0.5],
            51: [0.19444, 0.43056, 0, 0, 0.5],
            52: [0.19444, 0.43056, 0, 0, 0.5],
            53: [0.19444, 0.43056, 0, 0, 0.5],
            54: [0, 0.64444, 0, 0, 0.5],
            55: [0.19444, 0.43056, 0, 0, 0.5],
            56: [0, 0.64444, 0, 0, 0.5],
            57: [0.19444, 0.43056, 0, 0, 0.5],
            65: [0, 0.68333, 0, 0.13889, 0.75],
            66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
            67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
            68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
            69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
            70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
            71: [0, 0.68333, 0, 0.08334, 0.78625],
            72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
            73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
            74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
            75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
            76: [0, 0.68333, 0, 0.02778, 0.68056],
            77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
            78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
            79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
            80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
            81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
            82: [0, 0.68333, 0.00773, 0.08334, 0.75929],
            83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
            84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
            85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
            86: [0, 0.68333, 0.22222, 0, 0.58333],
            87: [0, 0.68333, 0.13889, 0, 0.94445],
            88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
            89: [0, 0.68333, 0.22222, 0, 0.58056],
            90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
            97: [0, 0.43056, 0, 0, 0.52859],
            98: [0, 0.69444, 0, 0, 0.42917],
            99: [0, 0.43056, 0, 0.05556, 0.43276],
            100: [0, 0.69444, 0, 0.16667, 0.52049],
            101: [0, 0.43056, 0, 0.05556, 0.46563],
            102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
            103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
            104: [0, 0.69444, 0, 0, 0.57616],
            105: [0, 0.65952, 0, 0, 0.34451],
            106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
            107: [0, 0.69444, 0.03148, 0, 0.5206],
            108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
            109: [0, 0.43056, 0, 0, 0.87801],
            110: [0, 0.43056, 0, 0, 0.60023],
            111: [0, 0.43056, 0, 0.05556, 0.48472],
            112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
            113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
            114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
            115: [0, 0.43056, 0, 0.05556, 0.46875],
            116: [0, 0.61508, 0, 0.08334, 0.36111],
            117: [0, 0.43056, 0, 0.02778, 0.57246],
            118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
            119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
            120: [0, 0.43056, 0, 0.02778, 0.57153],
            121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
            122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
            160: [0, 0, 0, 0, 0.25],
            915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
            916: [0, 0.68333, 0, 0.16667, 0.83334],
            920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
            923: [0, 0.68333, 0, 0.16667, 0.69445],
            926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
            928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
            931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
            933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
            934: [0, 0.68333, 0, 0.08334, 0.66667],
            936: [0, 0.68333, 0.11, 0.05556, 0.61222],
            937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
            945: [0, 0.43056, 0.0037, 0.02778, 0.6397],
            946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
            947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
            948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
            949: [0, 0.43056, 0, 0.08334, 0.46632],
            950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
            951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
            952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
            953: [0, 0.43056, 0, 0.05556, 0.35394],
            954: [0, 0.43056, 0, 0, 0.57616],
            955: [0, 0.69444, 0, 0, 0.58334],
            956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
            957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
            958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
            959: [0, 0.43056, 0, 0.05556, 0.48472],
            960: [0, 0.43056, 0.03588, 0, 0.57003],
            961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
            962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
            963: [0, 0.43056, 0.03588, 0, 0.57141],
            964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
            965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
            966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
            967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
            968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
            969: [0, 0.43056, 0.03588, 0, 0.62245],
            977: [0, 0.69444, 0, 0.08334, 0.59144],
            981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
            982: [0, 0.43056, 0.02778, 0, 0.82813],
            1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
            1013: [0, 0.43056, 0, 0.05556, 0.4059],
            57649: [0, 0.43056, 0, 0.02778, 0.32246],
            57911: [0.19444, 0.43056, 0, 0.08334, 0.38403],
          },
          "SansSerif-Bold": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0, 0, 0.36667],
            34: [0, 0.69444, 0, 0, 0.55834],
            35: [0.19444, 0.69444, 0, 0, 0.91667],
            36: [0.05556, 0.75, 0, 0, 0.55],
            37: [0.05556, 0.75, 0, 0, 1.02912],
            38: [0, 0.69444, 0, 0, 0.83056],
            39: [0, 0.69444, 0, 0, 0.30556],
            40: [0.25, 0.75, 0, 0, 0.42778],
            41: [0.25, 0.75, 0, 0, 0.42778],
            42: [0, 0.75, 0, 0, 0.55],
            43: [0.11667, 0.61667, 0, 0, 0.85556],
            44: [0.10556, 0.13056, 0, 0, 0.30556],
            45: [0, 0.45833, 0, 0, 0.36667],
            46: [0, 0.13056, 0, 0, 0.30556],
            47: [0.25, 0.75, 0, 0, 0.55],
            48: [0, 0.69444, 0, 0, 0.55],
            49: [0, 0.69444, 0, 0, 0.55],
            50: [0, 0.69444, 0, 0, 0.55],
            51: [0, 0.69444, 0, 0, 0.55],
            52: [0, 0.69444, 0, 0, 0.55],
            53: [0, 0.69444, 0, 0, 0.55],
            54: [0, 0.69444, 0, 0, 0.55],
            55: [0, 0.69444, 0, 0, 0.55],
            56: [0, 0.69444, 0, 0, 0.55],
            57: [0, 0.69444, 0, 0, 0.55],
            58: [0, 0.45833, 0, 0, 0.30556],
            59: [0.10556, 0.45833, 0, 0, 0.30556],
            61: [-0.09375, 0.40625, 0, 0, 0.85556],
            63: [0, 0.69444, 0, 0, 0.51945],
            64: [0, 0.69444, 0, 0, 0.73334],
            65: [0, 0.69444, 0, 0, 0.73334],
            66: [0, 0.69444, 0, 0, 0.73334],
            67: [0, 0.69444, 0, 0, 0.70278],
            68: [0, 0.69444, 0, 0, 0.79445],
            69: [0, 0.69444, 0, 0, 0.64167],
            70: [0, 0.69444, 0, 0, 0.61111],
            71: [0, 0.69444, 0, 0, 0.73334],
            72: [0, 0.69444, 0, 0, 0.79445],
            73: [0, 0.69444, 0, 0, 0.33056],
            74: [0, 0.69444, 0, 0, 0.51945],
            75: [0, 0.69444, 0, 0, 0.76389],
            76: [0, 0.69444, 0, 0, 0.58056],
            77: [0, 0.69444, 0, 0, 0.97778],
            78: [0, 0.69444, 0, 0, 0.79445],
            79: [0, 0.69444, 0, 0, 0.79445],
            80: [0, 0.69444, 0, 0, 0.70278],
            81: [0.10556, 0.69444, 0, 0, 0.79445],
            82: [0, 0.69444, 0, 0, 0.70278],
            83: [0, 0.69444, 0, 0, 0.61111],
            84: [0, 0.69444, 0, 0, 0.73334],
            85: [0, 0.69444, 0, 0, 0.76389],
            86: [0, 0.69444, 0.01528, 0, 0.73334],
            87: [0, 0.69444, 0.01528, 0, 1.03889],
            88: [0, 0.69444, 0, 0, 0.73334],
            89: [0, 0.69444, 0.0275, 0, 0.73334],
            90: [0, 0.69444, 0, 0, 0.67223],
            91: [0.25, 0.75, 0, 0, 0.34306],
            93: [0.25, 0.75, 0, 0, 0.34306],
            94: [0, 0.69444, 0, 0, 0.55],
            95: [0.35, 0.10833, 0.03056, 0, 0.55],
            97: [0, 0.45833, 0, 0, 0.525],
            98: [0, 0.69444, 0, 0, 0.56111],
            99: [0, 0.45833, 0, 0, 0.48889],
            100: [0, 0.69444, 0, 0, 0.56111],
            101: [0, 0.45833, 0, 0, 0.51111],
            102: [0, 0.69444, 0.07639, 0, 0.33611],
            103: [0.19444, 0.45833, 0.01528, 0, 0.55],
            104: [0, 0.69444, 0, 0, 0.56111],
            105: [0, 0.69444, 0, 0, 0.25556],
            106: [0.19444, 0.69444, 0, 0, 0.28611],
            107: [0, 0.69444, 0, 0, 0.53056],
            108: [0, 0.69444, 0, 0, 0.25556],
            109: [0, 0.45833, 0, 0, 0.86667],
            110: [0, 0.45833, 0, 0, 0.56111],
            111: [0, 0.45833, 0, 0, 0.55],
            112: [0.19444, 0.45833, 0, 0, 0.56111],
            113: [0.19444, 0.45833, 0, 0, 0.56111],
            114: [0, 0.45833, 0.01528, 0, 0.37222],
            115: [0, 0.45833, 0, 0, 0.42167],
            116: [0, 0.58929, 0, 0, 0.40417],
            117: [0, 0.45833, 0, 0, 0.56111],
            118: [0, 0.45833, 0.01528, 0, 0.5],
            119: [0, 0.45833, 0.01528, 0, 0.74445],
            120: [0, 0.45833, 0, 0, 0.5],
            121: [0.19444, 0.45833, 0.01528, 0, 0.5],
            122: [0, 0.45833, 0, 0, 0.47639],
            126: [0.35, 0.34444, 0, 0, 0.55],
            160: [0, 0, 0, 0, 0.25],
            168: [0, 0.69444, 0, 0, 0.55],
            176: [0, 0.69444, 0, 0, 0.73334],
            180: [0, 0.69444, 0, 0, 0.55],
            184: [0.17014, 0, 0, 0, 0.48889],
            305: [0, 0.45833, 0, 0, 0.25556],
            567: [0.19444, 0.45833, 0, 0, 0.28611],
            710: [0, 0.69444, 0, 0, 0.55],
            711: [0, 0.63542, 0, 0, 0.55],
            713: [0, 0.63778, 0, 0, 0.55],
            728: [0, 0.69444, 0, 0, 0.55],
            729: [0, 0.69444, 0, 0, 0.30556],
            730: [0, 0.69444, 0, 0, 0.73334],
            732: [0, 0.69444, 0, 0, 0.55],
            733: [0, 0.69444, 0, 0, 0.55],
            915: [0, 0.69444, 0, 0, 0.58056],
            916: [0, 0.69444, 0, 0, 0.91667],
            920: [0, 0.69444, 0, 0, 0.85556],
            923: [0, 0.69444, 0, 0, 0.67223],
            926: [0, 0.69444, 0, 0, 0.73334],
            928: [0, 0.69444, 0, 0, 0.79445],
            931: [0, 0.69444, 0, 0, 0.79445],
            933: [0, 0.69444, 0, 0, 0.85556],
            934: [0, 0.69444, 0, 0, 0.79445],
            936: [0, 0.69444, 0, 0, 0.85556],
            937: [0, 0.69444, 0, 0, 0.79445],
            8211: [0, 0.45833, 0.03056, 0, 0.55],
            8212: [0, 0.45833, 0.03056, 0, 1.10001],
            8216: [0, 0.69444, 0, 0, 0.30556],
            8217: [0, 0.69444, 0, 0, 0.30556],
            8220: [0, 0.69444, 0, 0, 0.55834],
            8221: [0, 0.69444, 0, 0, 0.55834],
          },
          "SansSerif-Italic": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0.05733, 0, 0.31945],
            34: [0, 0.69444, 0.00316, 0, 0.5],
            35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
            36: [0.05556, 0.75, 0.11156, 0, 0.5],
            37: [0.05556, 0.75, 0.03126, 0, 0.83334],
            38: [0, 0.69444, 0.03058, 0, 0.75834],
            39: [0, 0.69444, 0.07816, 0, 0.27778],
            40: [0.25, 0.75, 0.13164, 0, 0.38889],
            41: [0.25, 0.75, 0.02536, 0, 0.38889],
            42: [0, 0.75, 0.11775, 0, 0.5],
            43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
            44: [0.125, 0.08333, 0, 0, 0.27778],
            45: [0, 0.44444, 0.01946, 0, 0.33333],
            46: [0, 0.08333, 0, 0, 0.27778],
            47: [0.25, 0.75, 0.13164, 0, 0.5],
            48: [0, 0.65556, 0.11156, 0, 0.5],
            49: [0, 0.65556, 0.11156, 0, 0.5],
            50: [0, 0.65556, 0.11156, 0, 0.5],
            51: [0, 0.65556, 0.11156, 0, 0.5],
            52: [0, 0.65556, 0.11156, 0, 0.5],
            53: [0, 0.65556, 0.11156, 0, 0.5],
            54: [0, 0.65556, 0.11156, 0, 0.5],
            55: [0, 0.65556, 0.11156, 0, 0.5],
            56: [0, 0.65556, 0.11156, 0, 0.5],
            57: [0, 0.65556, 0.11156, 0, 0.5],
            58: [0, 0.44444, 0.02502, 0, 0.27778],
            59: [0.125, 0.44444, 0.02502, 0, 0.27778],
            61: [-0.13, 0.37, 0.05087, 0, 0.77778],
            63: [0, 0.69444, 0.11809, 0, 0.47222],
            64: [0, 0.69444, 0.07555, 0, 0.66667],
            65: [0, 0.69444, 0, 0, 0.66667],
            66: [0, 0.69444, 0.08293, 0, 0.66667],
            67: [0, 0.69444, 0.11983, 0, 0.63889],
            68: [0, 0.69444, 0.07555, 0, 0.72223],
            69: [0, 0.69444, 0.11983, 0, 0.59722],
            70: [0, 0.69444, 0.13372, 0, 0.56945],
            71: [0, 0.69444, 0.11983, 0, 0.66667],
            72: [0, 0.69444, 0.08094, 0, 0.70834],
            73: [0, 0.69444, 0.13372, 0, 0.27778],
            74: [0, 0.69444, 0.08094, 0, 0.47222],
            75: [0, 0.69444, 0.11983, 0, 0.69445],
            76: [0, 0.69444, 0, 0, 0.54167],
            77: [0, 0.69444, 0.08094, 0, 0.875],
            78: [0, 0.69444, 0.08094, 0, 0.70834],
            79: [0, 0.69444, 0.07555, 0, 0.73611],
            80: [0, 0.69444, 0.08293, 0, 0.63889],
            81: [0.125, 0.69444, 0.07555, 0, 0.73611],
            82: [0, 0.69444, 0.08293, 0, 0.64584],
            83: [0, 0.69444, 0.09205, 0, 0.55556],
            84: [0, 0.69444, 0.13372, 0, 0.68056],
            85: [0, 0.69444, 0.08094, 0, 0.6875],
            86: [0, 0.69444, 0.1615, 0, 0.66667],
            87: [0, 0.69444, 0.1615, 0, 0.94445],
            88: [0, 0.69444, 0.13372, 0, 0.66667],
            89: [0, 0.69444, 0.17261, 0, 0.66667],
            90: [0, 0.69444, 0.11983, 0, 0.61111],
            91: [0.25, 0.75, 0.15942, 0, 0.28889],
            93: [0.25, 0.75, 0.08719, 0, 0.28889],
            94: [0, 0.69444, 0.0799, 0, 0.5],
            95: [0.35, 0.09444, 0.08616, 0, 0.5],
            97: [0, 0.44444, 0.00981, 0, 0.48056],
            98: [0, 0.69444, 0.03057, 0, 0.51667],
            99: [0, 0.44444, 0.08336, 0, 0.44445],
            100: [0, 0.69444, 0.09483, 0, 0.51667],
            101: [0, 0.44444, 0.06778, 0, 0.44445],
            102: [0, 0.69444, 0.21705, 0, 0.30556],
            103: [0.19444, 0.44444, 0.10836, 0, 0.5],
            104: [0, 0.69444, 0.01778, 0, 0.51667],
            105: [0, 0.67937, 0.09718, 0, 0.23889],
            106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
            107: [0, 0.69444, 0.08336, 0, 0.48889],
            108: [0, 0.69444, 0.09483, 0, 0.23889],
            109: [0, 0.44444, 0.01778, 0, 0.79445],
            110: [0, 0.44444, 0.01778, 0, 0.51667],
            111: [0, 0.44444, 0.06613, 0, 0.5],
            112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
            113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
            114: [0, 0.44444, 0.10836, 0, 0.34167],
            115: [0, 0.44444, 0.0778, 0, 0.38333],
            116: [0, 0.57143, 0.07225, 0, 0.36111],
            117: [0, 0.44444, 0.04169, 0, 0.51667],
            118: [0, 0.44444, 0.10836, 0, 0.46111],
            119: [0, 0.44444, 0.10836, 0, 0.68334],
            120: [0, 0.44444, 0.09169, 0, 0.46111],
            121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
            122: [0, 0.44444, 0.08752, 0, 0.43472],
            126: [0.35, 0.32659, 0.08826, 0, 0.5],
            160: [0, 0, 0, 0, 0.25],
            168: [0, 0.67937, 0.06385, 0, 0.5],
            176: [0, 0.69444, 0, 0, 0.73752],
            184: [0.17014, 0, 0, 0, 0.44445],
            305: [0, 0.44444, 0.04169, 0, 0.23889],
            567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
            710: [0, 0.69444, 0.0799, 0, 0.5],
            711: [0, 0.63194, 0.08432, 0, 0.5],
            713: [0, 0.60889, 0.08776, 0, 0.5],
            714: [0, 0.69444, 0.09205, 0, 0.5],
            715: [0, 0.69444, 0, 0, 0.5],
            728: [0, 0.69444, 0.09483, 0, 0.5],
            729: [0, 0.67937, 0.07774, 0, 0.27778],
            730: [0, 0.69444, 0, 0, 0.73752],
            732: [0, 0.67659, 0.08826, 0, 0.5],
            733: [0, 0.69444, 0.09205, 0, 0.5],
            915: [0, 0.69444, 0.13372, 0, 0.54167],
            916: [0, 0.69444, 0, 0, 0.83334],
            920: [0, 0.69444, 0.07555, 0, 0.77778],
            923: [0, 0.69444, 0, 0, 0.61111],
            926: [0, 0.69444, 0.12816, 0, 0.66667],
            928: [0, 0.69444, 0.08094, 0, 0.70834],
            931: [0, 0.69444, 0.11983, 0, 0.72222],
            933: [0, 0.69444, 0.09031, 0, 0.77778],
            934: [0, 0.69444, 0.04603, 0, 0.72222],
            936: [0, 0.69444, 0.09031, 0, 0.77778],
            937: [0, 0.69444, 0.08293, 0, 0.72222],
            8211: [0, 0.44444, 0.08616, 0, 0.5],
            8212: [0, 0.44444, 0.08616, 0, 1],
            8216: [0, 0.69444, 0.07816, 0, 0.27778],
            8217: [0, 0.69444, 0.07816, 0, 0.27778],
            8220: [0, 0.69444, 0.14205, 0, 0.5],
            8221: [0, 0.69444, 0.00316, 0, 0.5],
          },
          "SansSerif-Regular": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0, 0, 0.31945],
            34: [0, 0.69444, 0, 0, 0.5],
            35: [0.19444, 0.69444, 0, 0, 0.83334],
            36: [0.05556, 0.75, 0, 0, 0.5],
            37: [0.05556, 0.75, 0, 0, 0.83334],
            38: [0, 0.69444, 0, 0, 0.75834],
            39: [0, 0.69444, 0, 0, 0.27778],
            40: [0.25, 0.75, 0, 0, 0.38889],
            41: [0.25, 0.75, 0, 0, 0.38889],
            42: [0, 0.75, 0, 0, 0.5],
            43: [0.08333, 0.58333, 0, 0, 0.77778],
            44: [0.125, 0.08333, 0, 0, 0.27778],
            45: [0, 0.44444, 0, 0, 0.33333],
            46: [0, 0.08333, 0, 0, 0.27778],
            47: [0.25, 0.75, 0, 0, 0.5],
            48: [0, 0.65556, 0, 0, 0.5],
            49: [0, 0.65556, 0, 0, 0.5],
            50: [0, 0.65556, 0, 0, 0.5],
            51: [0, 0.65556, 0, 0, 0.5],
            52: [0, 0.65556, 0, 0, 0.5],
            53: [0, 0.65556, 0, 0, 0.5],
            54: [0, 0.65556, 0, 0, 0.5],
            55: [0, 0.65556, 0, 0, 0.5],
            56: [0, 0.65556, 0, 0, 0.5],
            57: [0, 0.65556, 0, 0, 0.5],
            58: [0, 0.44444, 0, 0, 0.27778],
            59: [0.125, 0.44444, 0, 0, 0.27778],
            61: [-0.13, 0.37, 0, 0, 0.77778],
            63: [0, 0.69444, 0, 0, 0.47222],
            64: [0, 0.69444, 0, 0, 0.66667],
            65: [0, 0.69444, 0, 0, 0.66667],
            66: [0, 0.69444, 0, 0, 0.66667],
            67: [0, 0.69444, 0, 0, 0.63889],
            68: [0, 0.69444, 0, 0, 0.72223],
            69: [0, 0.69444, 0, 0, 0.59722],
            70: [0, 0.69444, 0, 0, 0.56945],
            71: [0, 0.69444, 0, 0, 0.66667],
            72: [0, 0.69444, 0, 0, 0.70834],
            73: [0, 0.69444, 0, 0, 0.27778],
            74: [0, 0.69444, 0, 0, 0.47222],
            75: [0, 0.69444, 0, 0, 0.69445],
            76: [0, 0.69444, 0, 0, 0.54167],
            77: [0, 0.69444, 0, 0, 0.875],
            78: [0, 0.69444, 0, 0, 0.70834],
            79: [0, 0.69444, 0, 0, 0.73611],
            80: [0, 0.69444, 0, 0, 0.63889],
            81: [0.125, 0.69444, 0, 0, 0.73611],
            82: [0, 0.69444, 0, 0, 0.64584],
            83: [0, 0.69444, 0, 0, 0.55556],
            84: [0, 0.69444, 0, 0, 0.68056],
            85: [0, 0.69444, 0, 0, 0.6875],
            86: [0, 0.69444, 0.01389, 0, 0.66667],
            87: [0, 0.69444, 0.01389, 0, 0.94445],
            88: [0, 0.69444, 0, 0, 0.66667],
            89: [0, 0.69444, 0.025, 0, 0.66667],
            90: [0, 0.69444, 0, 0, 0.61111],
            91: [0.25, 0.75, 0, 0, 0.28889],
            93: [0.25, 0.75, 0, 0, 0.28889],
            94: [0, 0.69444, 0, 0, 0.5],
            95: [0.35, 0.09444, 0.02778, 0, 0.5],
            97: [0, 0.44444, 0, 0, 0.48056],
            98: [0, 0.69444, 0, 0, 0.51667],
            99: [0, 0.44444, 0, 0, 0.44445],
            100: [0, 0.69444, 0, 0, 0.51667],
            101: [0, 0.44444, 0, 0, 0.44445],
            102: [0, 0.69444, 0.06944, 0, 0.30556],
            103: [0.19444, 0.44444, 0.01389, 0, 0.5],
            104: [0, 0.69444, 0, 0, 0.51667],
            105: [0, 0.67937, 0, 0, 0.23889],
            106: [0.19444, 0.67937, 0, 0, 0.26667],
            107: [0, 0.69444, 0, 0, 0.48889],
            108: [0, 0.69444, 0, 0, 0.23889],
            109: [0, 0.44444, 0, 0, 0.79445],
            110: [0, 0.44444, 0, 0, 0.51667],
            111: [0, 0.44444, 0, 0, 0.5],
            112: [0.19444, 0.44444, 0, 0, 0.51667],
            113: [0.19444, 0.44444, 0, 0, 0.51667],
            114: [0, 0.44444, 0.01389, 0, 0.34167],
            115: [0, 0.44444, 0, 0, 0.38333],
            116: [0, 0.57143, 0, 0, 0.36111],
            117: [0, 0.44444, 0, 0, 0.51667],
            118: [0, 0.44444, 0.01389, 0, 0.46111],
            119: [0, 0.44444, 0.01389, 0, 0.68334],
            120: [0, 0.44444, 0, 0, 0.46111],
            121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
            122: [0, 0.44444, 0, 0, 0.43472],
            126: [0.35, 0.32659, 0, 0, 0.5],
            160: [0, 0, 0, 0, 0.25],
            168: [0, 0.67937, 0, 0, 0.5],
            176: [0, 0.69444, 0, 0, 0.66667],
            184: [0.17014, 0, 0, 0, 0.44445],
            305: [0, 0.44444, 0, 0, 0.23889],
            567: [0.19444, 0.44444, 0, 0, 0.26667],
            710: [0, 0.69444, 0, 0, 0.5],
            711: [0, 0.63194, 0, 0, 0.5],
            713: [0, 0.60889, 0, 0, 0.5],
            714: [0, 0.69444, 0, 0, 0.5],
            715: [0, 0.69444, 0, 0, 0.5],
            728: [0, 0.69444, 0, 0, 0.5],
            729: [0, 0.67937, 0, 0, 0.27778],
            730: [0, 0.69444, 0, 0, 0.66667],
            732: [0, 0.67659, 0, 0, 0.5],
            733: [0, 0.69444, 0, 0, 0.5],
            915: [0, 0.69444, 0, 0, 0.54167],
            916: [0, 0.69444, 0, 0, 0.83334],
            920: [0, 0.69444, 0, 0, 0.77778],
            923: [0, 0.69444, 0, 0, 0.61111],
            926: [0, 0.69444, 0, 0, 0.66667],
            928: [0, 0.69444, 0, 0, 0.70834],
            931: [0, 0.69444, 0, 0, 0.72222],
            933: [0, 0.69444, 0, 0, 0.77778],
            934: [0, 0.69444, 0, 0, 0.72222],
            936: [0, 0.69444, 0, 0, 0.77778],
            937: [0, 0.69444, 0, 0, 0.72222],
            8211: [0, 0.44444, 0.02778, 0, 0.5],
            8212: [0, 0.44444, 0.02778, 0, 1],
            8216: [0, 0.69444, 0, 0, 0.27778],
            8217: [0, 0.69444, 0, 0, 0.27778],
            8220: [0, 0.69444, 0, 0, 0.5],
            8221: [0, 0.69444, 0, 0, 0.5],
          },
          "Script-Regular": {
            32: [0, 0, 0, 0, 0.25],
            65: [0, 0.7, 0.22925, 0, 0.80253],
            66: [0, 0.7, 0.04087, 0, 0.90757],
            67: [0, 0.7, 0.1689, 0, 0.66619],
            68: [0, 0.7, 0.09371, 0, 0.77443],
            69: [0, 0.7, 0.18583, 0, 0.56162],
            70: [0, 0.7, 0.13634, 0, 0.89544],
            71: [0, 0.7, 0.17322, 0, 0.60961],
            72: [0, 0.7, 0.29694, 0, 0.96919],
            73: [0, 0.7, 0.19189, 0, 0.80907],
            74: [0.27778, 0.7, 0.19189, 0, 1.05159],
            75: [0, 0.7, 0.31259, 0, 0.91364],
            76: [0, 0.7, 0.19189, 0, 0.87373],
            77: [0, 0.7, 0.15981, 0, 1.08031],
            78: [0, 0.7, 0.3525, 0, 0.9015],
            79: [0, 0.7, 0.08078, 0, 0.73787],
            80: [0, 0.7, 0.08078, 0, 1.01262],
            81: [0, 0.7, 0.03305, 0, 0.88282],
            82: [0, 0.7, 0.06259, 0, 0.85],
            83: [0, 0.7, 0.19189, 0, 0.86767],
            84: [0, 0.7, 0.29087, 0, 0.74697],
            85: [0, 0.7, 0.25815, 0, 0.79996],
            86: [0, 0.7, 0.27523, 0, 0.62204],
            87: [0, 0.7, 0.27523, 0, 0.80532],
            88: [0, 0.7, 0.26006, 0, 0.94445],
            89: [0, 0.7, 0.2939, 0, 0.70961],
            90: [0, 0.7, 0.24037, 0, 0.8212],
            160: [0, 0, 0, 0, 0.25],
          },
          "Size1-Regular": {
            32: [0, 0, 0, 0, 0.25],
            40: [0.35001, 0.85, 0, 0, 0.45834],
            41: [0.35001, 0.85, 0, 0, 0.45834],
            47: [0.35001, 0.85, 0, 0, 0.57778],
            91: [0.35001, 0.85, 0, 0, 0.41667],
            92: [0.35001, 0.85, 0, 0, 0.57778],
            93: [0.35001, 0.85, 0, 0, 0.41667],
            123: [0.35001, 0.85, 0, 0, 0.58334],
            125: [0.35001, 0.85, 0, 0, 0.58334],
            160: [0, 0, 0, 0, 0.25],
            710: [0, 0.72222, 0, 0, 0.55556],
            732: [0, 0.72222, 0, 0, 0.55556],
            770: [0, 0.72222, 0, 0, 0.55556],
            771: [0, 0.72222, 0, 0, 0.55556],
            8214: [-99e-5, 0.601, 0, 0, 0.77778],
            8593: [1e-5, 0.6, 0, 0, 0.66667],
            8595: [1e-5, 0.6, 0, 0, 0.66667],
            8657: [1e-5, 0.6, 0, 0, 0.77778],
            8659: [1e-5, 0.6, 0, 0, 0.77778],
            8719: [0.25001, 0.75, 0, 0, 0.94445],
            8720: [0.25001, 0.75, 0, 0, 0.94445],
            8721: [0.25001, 0.75, 0, 0, 1.05556],
            8730: [0.35001, 0.85, 0, 0, 1],
            8739: [-0.00599, 0.606, 0, 0, 0.33333],
            8741: [-0.00599, 0.606, 0, 0, 0.55556],
            8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
            8748: [0.306, 0.805, 0.19445, 0, 0.47222],
            8749: [0.306, 0.805, 0.19445, 0, 0.47222],
            8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
            8896: [0.25001, 0.75, 0, 0, 0.83334],
            8897: [0.25001, 0.75, 0, 0, 0.83334],
            8898: [0.25001, 0.75, 0, 0, 0.83334],
            8899: [0.25001, 0.75, 0, 0, 0.83334],
            8968: [0.35001, 0.85, 0, 0, 0.47222],
            8969: [0.35001, 0.85, 0, 0, 0.47222],
            8970: [0.35001, 0.85, 0, 0, 0.47222],
            8971: [0.35001, 0.85, 0, 0, 0.47222],
            9168: [-99e-5, 0.601, 0, 0, 0.66667],
            10216: [0.35001, 0.85, 0, 0, 0.47222],
            10217: [0.35001, 0.85, 0, 0, 0.47222],
            10752: [0.25001, 0.75, 0, 0, 1.11111],
            10753: [0.25001, 0.75, 0, 0, 1.11111],
            10754: [0.25001, 0.75, 0, 0, 1.11111],
            10756: [0.25001, 0.75, 0, 0, 0.83334],
            10758: [0.25001, 0.75, 0, 0, 0.83334],
          },
          "Size2-Regular": {
            32: [0, 0, 0, 0, 0.25],
            40: [0.65002, 1.15, 0, 0, 0.59722],
            41: [0.65002, 1.15, 0, 0, 0.59722],
            47: [0.65002, 1.15, 0, 0, 0.81111],
            91: [0.65002, 1.15, 0, 0, 0.47222],
            92: [0.65002, 1.15, 0, 0, 0.81111],
            93: [0.65002, 1.15, 0, 0, 0.47222],
            123: [0.65002, 1.15, 0, 0, 0.66667],
            125: [0.65002, 1.15, 0, 0, 0.66667],
            160: [0, 0, 0, 0, 0.25],
            710: [0, 0.75, 0, 0, 1],
            732: [0, 0.75, 0, 0, 1],
            770: [0, 0.75, 0, 0, 1],
            771: [0, 0.75, 0, 0, 1],
            8719: [0.55001, 1.05, 0, 0, 1.27778],
            8720: [0.55001, 1.05, 0, 0, 1.27778],
            8721: [0.55001, 1.05, 0, 0, 1.44445],
            8730: [0.65002, 1.15, 0, 0, 1],
            8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
            8748: [0.862, 1.36, 0.44445, 0, 0.55556],
            8749: [0.862, 1.36, 0.44445, 0, 0.55556],
            8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
            8896: [0.55001, 1.05, 0, 0, 1.11111],
            8897: [0.55001, 1.05, 0, 0, 1.11111],
            8898: [0.55001, 1.05, 0, 0, 1.11111],
            8899: [0.55001, 1.05, 0, 0, 1.11111],
            8968: [0.65002, 1.15, 0, 0, 0.52778],
            8969: [0.65002, 1.15, 0, 0, 0.52778],
            8970: [0.65002, 1.15, 0, 0, 0.52778],
            8971: [0.65002, 1.15, 0, 0, 0.52778],
            10216: [0.65002, 1.15, 0, 0, 0.61111],
            10217: [0.65002, 1.15, 0, 0, 0.61111],
            10752: [0.55001, 1.05, 0, 0, 1.51112],
            10753: [0.55001, 1.05, 0, 0, 1.51112],
            10754: [0.55001, 1.05, 0, 0, 1.51112],
            10756: [0.55001, 1.05, 0, 0, 1.11111],
            10758: [0.55001, 1.05, 0, 0, 1.11111],
          },
          "Size3-Regular": {
            32: [0, 0, 0, 0, 0.25],
            40: [0.95003, 1.45, 0, 0, 0.73611],
            41: [0.95003, 1.45, 0, 0, 0.73611],
            47: [0.95003, 1.45, 0, 0, 1.04445],
            91: [0.95003, 1.45, 0, 0, 0.52778],
            92: [0.95003, 1.45, 0, 0, 1.04445],
            93: [0.95003, 1.45, 0, 0, 0.52778],
            123: [0.95003, 1.45, 0, 0, 0.75],
            125: [0.95003, 1.45, 0, 0, 0.75],
            160: [0, 0, 0, 0, 0.25],
            710: [0, 0.75, 0, 0, 1.44445],
            732: [0, 0.75, 0, 0, 1.44445],
            770: [0, 0.75, 0, 0, 1.44445],
            771: [0, 0.75, 0, 0, 1.44445],
            8730: [0.95003, 1.45, 0, 0, 1],
            8968: [0.95003, 1.45, 0, 0, 0.58334],
            8969: [0.95003, 1.45, 0, 0, 0.58334],
            8970: [0.95003, 1.45, 0, 0, 0.58334],
            8971: [0.95003, 1.45, 0, 0, 0.58334],
            10216: [0.95003, 1.45, 0, 0, 0.75],
            10217: [0.95003, 1.45, 0, 0, 0.75],
          },
          "Size4-Regular": {
            32: [0, 0, 0, 0, 0.25],
            40: [1.25003, 1.75, 0, 0, 0.79167],
            41: [1.25003, 1.75, 0, 0, 0.79167],
            47: [1.25003, 1.75, 0, 0, 1.27778],
            91: [1.25003, 1.75, 0, 0, 0.58334],
            92: [1.25003, 1.75, 0, 0, 1.27778],
            93: [1.25003, 1.75, 0, 0, 0.58334],
            123: [1.25003, 1.75, 0, 0, 0.80556],
            125: [1.25003, 1.75, 0, 0, 0.80556],
            160: [0, 0, 0, 0, 0.25],
            710: [0, 0.825, 0, 0, 1.8889],
            732: [0, 0.825, 0, 0, 1.8889],
            770: [0, 0.825, 0, 0, 1.8889],
            771: [0, 0.825, 0, 0, 1.8889],
            8730: [1.25003, 1.75, 0, 0, 1],
            8968: [1.25003, 1.75, 0, 0, 0.63889],
            8969: [1.25003, 1.75, 0, 0, 0.63889],
            8970: [1.25003, 1.75, 0, 0, 0.63889],
            8971: [1.25003, 1.75, 0, 0, 0.63889],
            9115: [0.64502, 1.155, 0, 0, 0.875],
            9116: [1e-5, 0.6, 0, 0, 0.875],
            9117: [0.64502, 1.155, 0, 0, 0.875],
            9118: [0.64502, 1.155, 0, 0, 0.875],
            9119: [1e-5, 0.6, 0, 0, 0.875],
            9120: [0.64502, 1.155, 0, 0, 0.875],
            9121: [0.64502, 1.155, 0, 0, 0.66667],
            9122: [-99e-5, 0.601, 0, 0, 0.66667],
            9123: [0.64502, 1.155, 0, 0, 0.66667],
            9124: [0.64502, 1.155, 0, 0, 0.66667],
            9125: [-99e-5, 0.601, 0, 0, 0.66667],
            9126: [0.64502, 1.155, 0, 0, 0.66667],
            9127: [1e-5, 0.9, 0, 0, 0.88889],
            9128: [0.65002, 1.15, 0, 0, 0.88889],
            9129: [0.90001, 0, 0, 0, 0.88889],
            9130: [0, 0.3, 0, 0, 0.88889],
            9131: [1e-5, 0.9, 0, 0, 0.88889],
            9132: [0.65002, 1.15, 0, 0, 0.88889],
            9133: [0.90001, 0, 0, 0, 0.88889],
            9143: [0.88502, 0.915, 0, 0, 1.05556],
            10216: [1.25003, 1.75, 0, 0, 0.80556],
            10217: [1.25003, 1.75, 0, 0, 0.80556],
            57344: [-0.00499, 0.605, 0, 0, 1.05556],
            57345: [-0.00499, 0.605, 0, 0, 1.05556],
            57680: [0, 0.12, 0, 0, 0.45],
            57681: [0, 0.12, 0, 0, 0.45],
            57682: [0, 0.12, 0, 0, 0.45],
            57683: [0, 0.12, 0, 0, 0.45],
          },
          "Typewriter-Regular": {
            32: [0, 0, 0, 0, 0.525],
            33: [0, 0.61111, 0, 0, 0.525],
            34: [0, 0.61111, 0, 0, 0.525],
            35: [0, 0.61111, 0, 0, 0.525],
            36: [0.08333, 0.69444, 0, 0, 0.525],
            37: [0.08333, 0.69444, 0, 0, 0.525],
            38: [0, 0.61111, 0, 0, 0.525],
            39: [0, 0.61111, 0, 0, 0.525],
            40: [0.08333, 0.69444, 0, 0, 0.525],
            41: [0.08333, 0.69444, 0, 0, 0.525],
            42: [0, 0.52083, 0, 0, 0.525],
            43: [-0.08056, 0.53055, 0, 0, 0.525],
            44: [0.13889, 0.125, 0, 0, 0.525],
            45: [-0.08056, 0.53055, 0, 0, 0.525],
            46: [0, 0.125, 0, 0, 0.525],
            47: [0.08333, 0.69444, 0, 0, 0.525],
            48: [0, 0.61111, 0, 0, 0.525],
            49: [0, 0.61111, 0, 0, 0.525],
            50: [0, 0.61111, 0, 0, 0.525],
            51: [0, 0.61111, 0, 0, 0.525],
            52: [0, 0.61111, 0, 0, 0.525],
            53: [0, 0.61111, 0, 0, 0.525],
            54: [0, 0.61111, 0, 0, 0.525],
            55: [0, 0.61111, 0, 0, 0.525],
            56: [0, 0.61111, 0, 0, 0.525],
            57: [0, 0.61111, 0, 0, 0.525],
            58: [0, 0.43056, 0, 0, 0.525],
            59: [0.13889, 0.43056, 0, 0, 0.525],
            60: [-0.05556, 0.55556, 0, 0, 0.525],
            61: [-0.19549, 0.41562, 0, 0, 0.525],
            62: [-0.05556, 0.55556, 0, 0, 0.525],
            63: [0, 0.61111, 0, 0, 0.525],
            64: [0, 0.61111, 0, 0, 0.525],
            65: [0, 0.61111, 0, 0, 0.525],
            66: [0, 0.61111, 0, 0, 0.525],
            67: [0, 0.61111, 0, 0, 0.525],
            68: [0, 0.61111, 0, 0, 0.525],
            69: [0, 0.61111, 0, 0, 0.525],
            70: [0, 0.61111, 0, 0, 0.525],
            71: [0, 0.61111, 0, 0, 0.525],
            72: [0, 0.61111, 0, 0, 0.525],
            73: [0, 0.61111, 0, 0, 0.525],
            74: [0, 0.61111, 0, 0, 0.525],
            75: [0, 0.61111, 0, 0, 0.525],
            76: [0, 0.61111, 0, 0, 0.525],
            77: [0, 0.61111, 0, 0, 0.525],
            78: [0, 0.61111, 0, 0, 0.525],
            79: [0, 0.61111, 0, 0, 0.525],
            80: [0, 0.61111, 0, 0, 0.525],
            81: [0.13889, 0.61111, 0, 0, 0.525],
            82: [0, 0.61111, 0, 0, 0.525],
            83: [0, 0.61111, 0, 0, 0.525],
            84: [0, 0.61111, 0, 0, 0.525],
            85: [0, 0.61111, 0, 0, 0.525],
            86: [0, 0.61111, 0, 0, 0.525],
            87: [0, 0.61111, 0, 0, 0.525],
            88: [0, 0.61111, 0, 0, 0.525],
            89: [0, 0.61111, 0, 0, 0.525],
            90: [0, 0.61111, 0, 0, 0.525],
            91: [0.08333, 0.69444, 0, 0, 0.525],
            92: [0.08333, 0.69444, 0, 0, 0.525],
            93: [0.08333, 0.69444, 0, 0, 0.525],
            94: [0, 0.61111, 0, 0, 0.525],
            95: [0.09514, 0, 0, 0, 0.525],
            96: [0, 0.61111, 0, 0, 0.525],
            97: [0, 0.43056, 0, 0, 0.525],
            98: [0, 0.61111, 0, 0, 0.525],
            99: [0, 0.43056, 0, 0, 0.525],
            100: [0, 0.61111, 0, 0, 0.525],
            101: [0, 0.43056, 0, 0, 0.525],
            102: [0, 0.61111, 0, 0, 0.525],
            103: [0.22222, 0.43056, 0, 0, 0.525],
            104: [0, 0.61111, 0, 0, 0.525],
            105: [0, 0.61111, 0, 0, 0.525],
            106: [0.22222, 0.61111, 0, 0, 0.525],
            107: [0, 0.61111, 0, 0, 0.525],
            108: [0, 0.61111, 0, 0, 0.525],
            109: [0, 0.43056, 0, 0, 0.525],
            110: [0, 0.43056, 0, 0, 0.525],
            111: [0, 0.43056, 0, 0, 0.525],
            112: [0.22222, 0.43056, 0, 0, 0.525],
            113: [0.22222, 0.43056, 0, 0, 0.525],
            114: [0, 0.43056, 0, 0, 0.525],
            115: [0, 0.43056, 0, 0, 0.525],
            116: [0, 0.55358, 0, 0, 0.525],
            117: [0, 0.43056, 0, 0, 0.525],
            118: [0, 0.43056, 0, 0, 0.525],
            119: [0, 0.43056, 0, 0, 0.525],
            120: [0, 0.43056, 0, 0, 0.525],
            121: [0.22222, 0.43056, 0, 0, 0.525],
            122: [0, 0.43056, 0, 0, 0.525],
            123: [0.08333, 0.69444, 0, 0, 0.525],
            124: [0.08333, 0.69444, 0, 0, 0.525],
            125: [0.08333, 0.69444, 0, 0, 0.525],
            126: [0, 0.61111, 0, 0, 0.525],
            127: [0, 0.61111, 0, 0, 0.525],
            160: [0, 0, 0, 0, 0.525],
            176: [0, 0.61111, 0, 0, 0.525],
            184: [0.19445, 0, 0, 0, 0.525],
            305: [0, 0.43056, 0, 0, 0.525],
            567: [0.22222, 0.43056, 0, 0, 0.525],
            711: [0, 0.56597, 0, 0, 0.525],
            713: [0, 0.56555, 0, 0, 0.525],
            714: [0, 0.61111, 0, 0, 0.525],
            715: [0, 0.61111, 0, 0, 0.525],
            728: [0, 0.61111, 0, 0, 0.525],
            730: [0, 0.61111, 0, 0, 0.525],
            770: [0, 0.61111, 0, 0, 0.525],
            771: [0, 0.61111, 0, 0, 0.525],
            776: [0, 0.61111, 0, 0, 0.525],
            915: [0, 0.61111, 0, 0, 0.525],
            916: [0, 0.61111, 0, 0, 0.525],
            920: [0, 0.61111, 0, 0, 0.525],
            923: [0, 0.61111, 0, 0, 0.525],
            926: [0, 0.61111, 0, 0, 0.525],
            928: [0, 0.61111, 0, 0, 0.525],
            931: [0, 0.61111, 0, 0, 0.525],
            933: [0, 0.61111, 0, 0, 0.525],
            934: [0, 0.61111, 0, 0, 0.525],
            936: [0, 0.61111, 0, 0, 0.525],
            937: [0, 0.61111, 0, 0, 0.525],
            8216: [0, 0.61111, 0, 0, 0.525],
            8217: [0, 0.61111, 0, 0, 0.525],
            8242: [0, 0.61111, 0, 0, 0.525],
            9251: [0.11111, 0.21944, 0, 0, 0.525],
          },
        },
        ga = {
          slant: [0.25, 0.25, 0.25],
          space: [0, 0, 0],
          stretch: [0, 0, 0],
          shrink: [0, 0, 0],
          xHeight: [0.431, 0.431, 0.431],
          quad: [1, 1.171, 1.472],
          extraSpace: [0, 0, 0],
          num1: [0.677, 0.732, 0.925],
          num2: [0.394, 0.384, 0.387],
          num3: [0.444, 0.471, 0.504],
          denom1: [0.686, 0.752, 1.025],
          denom2: [0.345, 0.344, 0.532],
          sup1: [0.413, 0.503, 0.504],
          sup2: [0.363, 0.431, 0.404],
          sup3: [0.289, 0.286, 0.294],
          sub1: [0.15, 0.143, 0.2],
          sub2: [0.247, 0.286, 0.4],
          supDrop: [0.386, 0.353, 0.494],
          subDrop: [0.05, 0.071, 0.1],
          delim1: [2.39, 1.7, 1.98],
          delim2: [1.01, 1.157, 1.42],
          axisHeight: [0.25, 0.25, 0.25],
          defaultRuleThickness: [0.04, 0.049, 0.049],
          bigOpSpacing1: [0.111, 0.111, 0.111],
          bigOpSpacing2: [0.166, 0.166, 0.166],
          bigOpSpacing3: [0.2, 0.2, 0.2],
          bigOpSpacing4: [0.6, 0.611, 0.611],
          bigOpSpacing5: [0.1, 0.143, 0.143],
          sqrtRuleThickness: [0.04, 0.04, 0.04],
          ptPerEm: [10, 10, 10],
          doubleRuleSep: [0.2, 0.2, 0.2],
          arrayRuleWidth: [0.04, 0.04, 0.04],
          fboxsep: [0.3, 0.3, 0.3],
          fboxrule: [0.04, 0.04, 0.04],
        },
        _s = {
          Å: "A",
          Ð: "D",
          Þ: "o",
          å: "a",
          ð: "d",
          þ: "o",
          А: "A",
          Б: "B",
          В: "B",
          Г: "F",
          Д: "A",
          Е: "E",
          Ж: "K",
          З: "3",
          И: "N",
          Й: "N",
          К: "K",
          Л: "N",
          М: "M",
          Н: "H",
          О: "O",
          П: "N",
          Р: "P",
          С: "C",
          Т: "T",
          У: "y",
          Ф: "O",
          Х: "X",
          Ц: "U",
          Ч: "h",
          Ш: "W",
          Щ: "W",
          Ъ: "B",
          Ы: "X",
          Ь: "B",
          Э: "3",
          Ю: "X",
          Я: "R",
          а: "a",
          б: "b",
          в: "a",
          г: "r",
          д: "y",
          е: "e",
          ж: "m",
          з: "e",
          и: "n",
          й: "n",
          к: "n",
          л: "n",
          м: "m",
          н: "n",
          о: "o",
          п: "n",
          р: "p",
          с: "c",
          т: "o",
          у: "y",
          ф: "b",
          х: "x",
          ц: "n",
          ч: "n",
          ш: "w",
          щ: "w",
          ъ: "a",
          ы: "m",
          ь: "a",
          э: "e",
          ю: "m",
          я: "r",
        };
      function Gd(h, a) {
        st[h] = a;
      }
      function xi(h, a, i) {
        if (!st[a])
          throw new Error("Font metrics not found for font: " + a + ".");
        var s = h.charCodeAt(0),
          u = st[a][s];
        if (
          (!u && h[0] in _s && ((s = _s[h[0]].charCodeAt(0)), (u = st[a][s])),
          !u && i === "text" && cr(s) && (u = st[a][77]),
          u)
        )
          return {
            depth: u[0],
            height: u[1],
            italic: u[2],
            skew: u[3],
            width: u[4],
          };
      }
      var bi = {};
      function Zd(h) {
        var a;
        if ((h >= 5 ? (a = 0) : h >= 3 ? (a = 1) : (a = 2), !bi[a])) {
          var i = (bi[a] = { cssEmPerMu: ga.quad[a] / 18 });
          for (var s in ga) ga.hasOwnProperty(s) && (i[s] = ga[s][a]);
        }
        return bi[a];
      }
      var Jd = [
          [1, 1, 1],
          [2, 1, 1],
          [3, 1, 1],
          [4, 2, 1],
          [5, 2, 1],
          [6, 3, 1],
          [7, 4, 2],
          [8, 6, 3],
          [9, 7, 6],
          [10, 8, 7],
          [11, 10, 9],
        ],
        zs = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
        Rs = function (a, i) {
          return i.size < 2 ? a : Jd[a - 1][i.size - 1];
        },
        Ps = (function () {
          function h(i) {
            (this.style = void 0),
              (this.color = void 0),
              (this.size = void 0),
              (this.textSize = void 0),
              (this.phantom = void 0),
              (this.font = void 0),
              (this.fontFamily = void 0),
              (this.fontWeight = void 0),
              (this.fontShape = void 0),
              (this.sizeMultiplier = void 0),
              (this.maxSize = void 0),
              (this.minRuleThickness = void 0),
              (this._fontMetrics = void 0),
              (this.style = i.style),
              (this.color = i.color),
              (this.size = i.size || h.BASESIZE),
              (this.textSize = i.textSize || this.size),
              (this.phantom = !!i.phantom),
              (this.font = i.font || ""),
              (this.fontFamily = i.fontFamily || ""),
              (this.fontWeight = i.fontWeight || ""),
              (this.fontShape = i.fontShape || ""),
              (this.sizeMultiplier = zs[this.size - 1]),
              (this.maxSize = i.maxSize),
              (this.minRuleThickness = i.minRuleThickness),
              (this._fontMetrics = void 0);
          }
          var a = h.prototype;
          return (
            (a.extend = function (s) {
              var u = {
                style: this.style,
                size: this.size,
                textSize: this.textSize,
                color: this.color,
                phantom: this.phantom,
                font: this.font,
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
                fontShape: this.fontShape,
                maxSize: this.maxSize,
                minRuleThickness: this.minRuleThickness,
              };
              for (var c in s) s.hasOwnProperty(c) && (u[c] = s[c]);
              return new h(u);
            }),
            (a.havingStyle = function (s) {
              return this.style === s
                ? this
                : this.extend({ style: s, size: Rs(this.textSize, s) });
            }),
            (a.havingCrampedStyle = function () {
              return this.havingStyle(this.style.cramp());
            }),
            (a.havingSize = function (s) {
              return this.size === s && this.textSize === s
                ? this
                : this.extend({
                    style: this.style.text(),
                    size: s,
                    textSize: s,
                    sizeMultiplier: zs[s - 1],
                  });
            }),
            (a.havingBaseStyle = function (s) {
              s = s || this.style.text();
              var u = Rs(h.BASESIZE, s);
              return this.size === u &&
                this.textSize === h.BASESIZE &&
                this.style === s
                ? this
                : this.extend({ style: s, size: u });
            }),
            (a.havingBaseSizing = function () {
              var s;
              switch (this.style.id) {
                case 4:
                case 5:
                  s = 3;
                  break;
                case 6:
                case 7:
                  s = 1;
                  break;
                default:
                  s = 6;
              }
              return this.extend({ style: this.style.text(), size: s });
            }),
            (a.withColor = function (s) {
              return this.extend({ color: s });
            }),
            (a.withPhantom = function () {
              return this.extend({ phantom: !0 });
            }),
            (a.withFont = function (s) {
              return this.extend({ font: s });
            }),
            (a.withTextFontFamily = function (s) {
              return this.extend({ fontFamily: s, font: "" });
            }),
            (a.withTextFontWeight = function (s) {
              return this.extend({ fontWeight: s, font: "" });
            }),
            (a.withTextFontShape = function (s) {
              return this.extend({ fontShape: s, font: "" });
            }),
            (a.sizingClasses = function (s) {
              return s.size !== this.size
                ? ["sizing", "reset-size" + s.size, "size" + this.size]
                : [];
            }),
            (a.baseSizingClasses = function () {
              return this.size !== h.BASESIZE
                ? ["sizing", "reset-size" + this.size, "size" + h.BASESIZE]
                : [];
            }),
            (a.fontMetrics = function () {
              return (
                this._fontMetrics || (this._fontMetrics = Zd(this.size)),
                this._fontMetrics
              );
            }),
            (a.getColor = function () {
              return this.phantom ? "transparent" : this.color;
            }),
            h
          );
        })();
      Ps.BASESIZE = 6;
      var Xd = Ps,
        wi = {
          pt: 1,
          mm: 7227 / 2540,
          cm: 7227 / 254,
          in: 72.27,
          bp: 803 / 800,
          pc: 12,
          dd: 1238 / 1157,
          cc: 14856 / 1157,
          nd: 685 / 642,
          nc: 1370 / 107,
          sp: 1 / 65536,
          px: 803 / 800,
        },
        Kd = { ex: !0, em: !0, mu: !0 },
        Is = function (a) {
          return (
            typeof a != "string" && (a = a.unit),
            a in wi || a in Kd || a === "ex"
          );
        },
        ze = function (a, i) {
          var s;
          if (a.unit in wi)
            s = wi[a.unit] / i.fontMetrics().ptPerEm / i.sizeMultiplier;
          else if (a.unit === "mu") s = i.fontMetrics().cssEmPerMu;
          else {
            var u;
            if (
              (i.style.isTight()
                ? (u = i.havingStyle(i.style.text()))
                : (u = i),
              a.unit === "ex")
            )
              s = u.fontMetrics().xHeight;
            else if (a.unit === "em") s = u.fontMetrics().quad;
            else throw new r("Invalid unit: '" + a.unit + "'");
            u !== i && (s *= u.sizeMultiplier / i.sizeMultiplier);
          }
          return Math.min(a.number * s, i.maxSize);
        },
        U = function (a) {
          return +a.toFixed(4) + "em";
        },
        hr = function (a) {
          return a
            .filter(function (i) {
              return i;
            })
            .join(" ");
        },
        js = function (a, i, s) {
          if (
            ((this.classes = a || []),
            (this.attributes = {}),
            (this.height = 0),
            (this.depth = 0),
            (this.maxFontSize = 0),
            (this.style = s || {}),
            i)
          ) {
            i.style.isTight() && this.classes.push("mtight");
            var u = i.getColor();
            u && (this.style.color = u);
          }
        },
        Ls = function (a) {
          var i = document.createElement(a);
          i.className = hr(this.classes);
          for (var s in this.style)
            this.style.hasOwnProperty(s) && (i.style[s] = this.style[s]);
          for (var u in this.attributes)
            this.attributes.hasOwnProperty(u) &&
              i.setAttribute(u, this.attributes[u]);
          for (var c = 0; c < this.children.length; c++)
            i.appendChild(this.children[c].toNode());
          return i;
        },
        $s = function (a) {
          var i = "<" + a;
          this.classes.length &&
            (i += ' class="' + O.escape(hr(this.classes)) + '"');
          var s = "";
          for (var u in this.style)
            this.style.hasOwnProperty(u) &&
              (s += O.hyphenate(u) + ":" + this.style[u] + ";");
          s && (i += ' style="' + O.escape(s) + '"');
          for (var c in this.attributes)
            this.attributes.hasOwnProperty(c) &&
              (i += " " + c + '="' + O.escape(this.attributes[c]) + '"');
          i += ">";
          for (var f = 0; f < this.children.length; f++)
            i += this.children[f].toMarkup();
          return (i += "</" + a + ">"), i;
        },
        _n = (function () {
          function h(i, s, u, c) {
            (this.children = void 0),
              (this.attributes = void 0),
              (this.classes = void 0),
              (this.height = void 0),
              (this.depth = void 0),
              (this.width = void 0),
              (this.maxFontSize = void 0),
              (this.style = void 0),
              js.call(this, i, u, c),
              (this.children = s || []);
          }
          var a = h.prototype;
          return (
            (a.setAttribute = function (s, u) {
              this.attributes[s] = u;
            }),
            (a.hasClass = function (s) {
              return O.contains(this.classes, s);
            }),
            (a.toNode = function () {
              return Ls.call(this, "span");
            }),
            (a.toMarkup = function () {
              return $s.call(this, "span");
            }),
            h
          );
        })(),
        Ci = (function () {
          function h(i, s, u, c) {
            (this.children = void 0),
              (this.attributes = void 0),
              (this.classes = void 0),
              (this.height = void 0),
              (this.depth = void 0),
              (this.maxFontSize = void 0),
              (this.style = void 0),
              js.call(this, s, c),
              (this.children = u || []),
              this.setAttribute("href", i);
          }
          var a = h.prototype;
          return (
            (a.setAttribute = function (s, u) {
              this.attributes[s] = u;
            }),
            (a.hasClass = function (s) {
              return O.contains(this.classes, s);
            }),
            (a.toNode = function () {
              return Ls.call(this, "a");
            }),
            (a.toMarkup = function () {
              return $s.call(this, "a");
            }),
            h
          );
        })(),
        Yd = (function () {
          function h(i, s, u) {
            (this.src = void 0),
              (this.alt = void 0),
              (this.classes = void 0),
              (this.height = void 0),
              (this.depth = void 0),
              (this.maxFontSize = void 0),
              (this.style = void 0),
              (this.alt = s),
              (this.src = i),
              (this.classes = ["mord"]),
              (this.style = u);
          }
          var a = h.prototype;
          return (
            (a.hasClass = function (s) {
              return O.contains(this.classes, s);
            }),
            (a.toNode = function () {
              var s = document.createElement("img");
              (s.src = this.src), (s.alt = this.alt), (s.className = "mord");
              for (var u in this.style)
                this.style.hasOwnProperty(u) && (s.style[u] = this.style[u]);
              return s;
            }),
            (a.toMarkup = function () {
              var s = "<img  src='" + this.src + " 'alt='" + this.alt + "' ",
                u = "";
              for (var c in this.style)
                this.style.hasOwnProperty(c) &&
                  (u += O.hyphenate(c) + ":" + this.style[c] + ";");
              return (
                u && (s += ' style="' + O.escape(u) + '"'), (s += "'/>"), s
              );
            }),
            h
          );
        })(),
        Qd = {
          î: "\u0131\u0302",
          ï: "\u0131\u0308",
          í: "\u0131\u0301",
          ì: "\u0131\u0300",
        },
        ht = (function () {
          function h(i, s, u, c, f, y, x, C) {
            (this.text = void 0),
              (this.height = void 0),
              (this.depth = void 0),
              (this.italic = void 0),
              (this.skew = void 0),
              (this.width = void 0),
              (this.maxFontSize = void 0),
              (this.classes = void 0),
              (this.style = void 0),
              (this.text = i),
              (this.height = s || 0),
              (this.depth = u || 0),
              (this.italic = c || 0),
              (this.skew = f || 0),
              (this.width = y || 0),
              (this.classes = x || []),
              (this.style = C || {}),
              (this.maxFontSize = 0);
            var F = Nn(this.text.charCodeAt(0));
            F && this.classes.push(F + "_fallback"),
              /[îïíì]/.test(this.text) && (this.text = Qd[this.text]);
          }
          var a = h.prototype;
          return (
            (a.hasClass = function (s) {
              return O.contains(this.classes, s);
            }),
            (a.toNode = function () {
              var s = document.createTextNode(this.text),
                u = null;
              this.italic > 0 &&
                ((u = document.createElement("span")),
                (u.style.marginRight = U(this.italic))),
                this.classes.length > 0 &&
                  ((u = u || document.createElement("span")),
                  (u.className = hr(this.classes)));
              for (var c in this.style)
                this.style.hasOwnProperty(c) &&
                  ((u = u || document.createElement("span")),
                  (u.style[c] = this.style[c]));
              return u ? (u.appendChild(s), u) : s;
            }),
            (a.toMarkup = function () {
              var s = !1,
                u = "<span";
              this.classes.length &&
                ((s = !0),
                (u += ' class="'),
                (u += O.escape(hr(this.classes))),
                (u += '"'));
              var c = "";
              this.italic > 0 && (c += "margin-right:" + this.italic + "em;");
              for (var f in this.style)
                this.style.hasOwnProperty(f) &&
                  (c += O.hyphenate(f) + ":" + this.style[f] + ";");
              c && ((s = !0), (u += ' style="' + O.escape(c) + '"'));
              var y = O.escape(this.text);
              return s ? ((u += ">"), (u += y), (u += "</span>"), u) : y;
            }),
            h
          );
        })(),
        mr = (function () {
          function h(i, s) {
            (this.children = void 0),
              (this.attributes = void 0),
              (this.children = i || []),
              (this.attributes = s || {});
          }
          var a = h.prototype;
          return (
            (a.toNode = function () {
              var s = "http://www.w3.org/2000/svg",
                u = document.createElementNS(s, "svg");
              for (var c in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, c) &&
                  u.setAttribute(c, this.attributes[c]);
              for (var f = 0; f < this.children.length; f++)
                u.appendChild(this.children[f].toNode());
              return u;
            }),
            (a.toMarkup = function () {
              var s = '<svg xmlns="http://www.w3.org/2000/svg"';
              for (var u in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, u) &&
                  (s += " " + u + "='" + this.attributes[u] + "'");
              s += ">";
              for (var c = 0; c < this.children.length; c++)
                s += this.children[c].toMarkup();
              return (s += "</svg>"), s;
            }),
            h
          );
        })(),
        Vr = (function () {
          function h(i, s) {
            (this.pathName = void 0),
              (this.alternate = void 0),
              (this.pathName = i),
              (this.alternate = s);
          }
          var a = h.prototype;
          return (
            (a.toNode = function () {
              var s = "http://www.w3.org/2000/svg",
                u = document.createElementNS(s, "path");
              return (
                this.alternate
                  ? u.setAttribute("d", this.alternate)
                  : u.setAttribute("d", pn[this.pathName]),
                u
              );
            }),
            (a.toMarkup = function () {
              return this.alternate
                ? "<path d='" + this.alternate + "'/>"
                : "<path d='" + pn[this.pathName] + "'/>";
            }),
            h
          );
        })(),
        Si = (function () {
          function h(i) {
            (this.attributes = void 0), (this.attributes = i || {});
          }
          var a = h.prototype;
          return (
            (a.toNode = function () {
              var s = "http://www.w3.org/2000/svg",
                u = document.createElementNS(s, "line");
              for (var c in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, c) &&
                  u.setAttribute(c, this.attributes[c]);
              return u;
            }),
            (a.toMarkup = function () {
              var s = "<line";
              for (var u in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, u) &&
                  (s += " " + u + "='" + this.attributes[u] + "'");
              return (s += "/>"), s;
            }),
            h
          );
        })();
      function qs(h) {
        if (h instanceof ht) return h;
        throw new Error("Expected symbolNode but got " + String(h) + ".");
      }
      function ep(h) {
        if (h instanceof _n) return h;
        throw new Error(
          "Expected span<HtmlDomNode> but got " + String(h) + "."
        );
      }
      var tp = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 },
        rp = {
          "accent-token": 1,
          mathord: 1,
          "op-token": 1,
          spacing: 1,
          textord: 1,
        },
        va = { math: {}, text: {} },
        Re = va;
      function p(h, a, i, s, u, c) {
        (va[h][u] = { font: a, group: i, replace: s }),
          c && s && (va[h][s] = va[h][u]);
      }
      var g = "math",
        L = "text",
        D = "main",
        k = "ams",
        Oe = "accent-token",
        X = "bin",
        Ke = "close",
        fn = "inner",
        re = "mathord",
        je = "op-token",
        ot = "open",
        ya = "punct",
        E = "rel",
        Gt = "spacing",
        B = "textord";
      p(g, D, E, "\u2261", "\\equiv", !0),
        p(g, D, E, "\u227A", "\\prec", !0),
        p(g, D, E, "\u227B", "\\succ", !0),
        p(g, D, E, "\u223C", "\\sim", !0),
        p(g, D, E, "\u22A5", "\\perp"),
        p(g, D, E, "\u2AAF", "\\preceq", !0),
        p(g, D, E, "\u2AB0", "\\succeq", !0),
        p(g, D, E, "\u2243", "\\simeq", !0),
        p(g, D, E, "\u2223", "\\mid", !0),
        p(g, D, E, "\u226A", "\\ll", !0),
        p(g, D, E, "\u226B", "\\gg", !0),
        p(g, D, E, "\u224D", "\\asymp", !0),
        p(g, D, E, "\u2225", "\\parallel"),
        p(g, D, E, "\u22C8", "\\bowtie", !0),
        p(g, D, E, "\u2323", "\\smile", !0),
        p(g, D, E, "\u2291", "\\sqsubseteq", !0),
        p(g, D, E, "\u2292", "\\sqsupseteq", !0),
        p(g, D, E, "\u2250", "\\doteq", !0),
        p(g, D, E, "\u2322", "\\frown", !0),
        p(g, D, E, "\u220B", "\\ni", !0),
        p(g, D, E, "\u221D", "\\propto", !0),
        p(g, D, E, "\u22A2", "\\vdash", !0),
        p(g, D, E, "\u22A3", "\\dashv", !0),
        p(g, D, E, "\u220B", "\\owns"),
        p(g, D, ya, ".", "\\ldotp"),
        p(g, D, ya, "\u22C5", "\\cdotp"),
        p(g, D, B, "#", "\\#"),
        p(L, D, B, "#", "\\#"),
        p(g, D, B, "&", "\\&"),
        p(L, D, B, "&", "\\&"),
        p(g, D, B, "\u2135", "\\aleph", !0),
        p(g, D, B, "\u2200", "\\forall", !0),
        p(g, D, B, "\u210F", "\\hbar", !0),
        p(g, D, B, "\u2203", "\\exists", !0),
        p(g, D, B, "\u2207", "\\nabla", !0),
        p(g, D, B, "\u266D", "\\flat", !0),
        p(g, D, B, "\u2113", "\\ell", !0),
        p(g, D, B, "\u266E", "\\natural", !0),
        p(g, D, B, "\u2663", "\\clubsuit", !0),
        p(g, D, B, "\u2118", "\\wp", !0),
        p(g, D, B, "\u266F", "\\sharp", !0),
        p(g, D, B, "\u2662", "\\diamondsuit", !0),
        p(g, D, B, "\u211C", "\\Re", !0),
        p(g, D, B, "\u2661", "\\heartsuit", !0),
        p(g, D, B, "\u2111", "\\Im", !0),
        p(g, D, B, "\u2660", "\\spadesuit", !0),
        p(g, D, B, "\xA7", "\\S", !0),
        p(L, D, B, "\xA7", "\\S"),
        p(g, D, B, "\xB6", "\\P", !0),
        p(L, D, B, "\xB6", "\\P"),
        p(g, D, B, "\u2020", "\\dag"),
        p(L, D, B, "\u2020", "\\dag"),
        p(L, D, B, "\u2020", "\\textdagger"),
        p(g, D, B, "\u2021", "\\ddag"),
        p(L, D, B, "\u2021", "\\ddag"),
        p(L, D, B, "\u2021", "\\textdaggerdbl"),
        p(g, D, Ke, "\u23B1", "\\rmoustache", !0),
        p(g, D, ot, "\u23B0", "\\lmoustache", !0),
        p(g, D, Ke, "\u27EF", "\\rgroup", !0),
        p(g, D, ot, "\u27EE", "\\lgroup", !0),
        p(g, D, X, "\u2213", "\\mp", !0),
        p(g, D, X, "\u2296", "\\ominus", !0),
        p(g, D, X, "\u228E", "\\uplus", !0),
        p(g, D, X, "\u2293", "\\sqcap", !0),
        p(g, D, X, "\u2217", "\\ast"),
        p(g, D, X, "\u2294", "\\sqcup", !0),
        p(g, D, X, "\u25EF", "\\bigcirc", !0),
        p(g, D, X, "\u2219", "\\bullet"),
        p(g, D, X, "\u2021", "\\ddagger"),
        p(g, D, X, "\u2240", "\\wr", !0),
        p(g, D, X, "\u2A3F", "\\amalg"),
        p(g, D, X, "&", "\\And"),
        p(g, D, E, "\u27F5", "\\longleftarrow", !0),
        p(g, D, E, "\u21D0", "\\Leftarrow", !0),
        p(g, D, E, "\u27F8", "\\Longleftarrow", !0),
        p(g, D, E, "\u27F6", "\\longrightarrow", !0),
        p(g, D, E, "\u21D2", "\\Rightarrow", !0),
        p(g, D, E, "\u27F9", "\\Longrightarrow", !0),
        p(g, D, E, "\u2194", "\\leftrightarrow", !0),
        p(g, D, E, "\u27F7", "\\longleftrightarrow", !0),
        p(g, D, E, "\u21D4", "\\Leftrightarrow", !0),
        p(g, D, E, "\u27FA", "\\Longleftrightarrow", !0),
        p(g, D, E, "\u21A6", "\\mapsto", !0),
        p(g, D, E, "\u27FC", "\\longmapsto", !0),
        p(g, D, E, "\u2197", "\\nearrow", !0),
        p(g, D, E, "\u21A9", "\\hookleftarrow", !0),
        p(g, D, E, "\u21AA", "\\hookrightarrow", !0),
        p(g, D, E, "\u2198", "\\searrow", !0),
        p(g, D, E, "\u21BC", "\\leftharpoonup", !0),
        p(g, D, E, "\u21C0", "\\rightharpoonup", !0),
        p(g, D, E, "\u2199", "\\swarrow", !0),
        p(g, D, E, "\u21BD", "\\leftharpoondown", !0),
        p(g, D, E, "\u21C1", "\\rightharpoondown", !0),
        p(g, D, E, "\u2196", "\\nwarrow", !0),
        p(g, D, E, "\u21CC", "\\rightleftharpoons", !0),
        p(g, k, E, "\u226E", "\\nless", !0),
        p(g, k, E, "\uE010", "\\@nleqslant"),
        p(g, k, E, "\uE011", "\\@nleqq"),
        p(g, k, E, "\u2A87", "\\lneq", !0),
        p(g, k, E, "\u2268", "\\lneqq", !0),
        p(g, k, E, "\uE00C", "\\@lvertneqq"),
        p(g, k, E, "\u22E6", "\\lnsim", !0),
        p(g, k, E, "\u2A89", "\\lnapprox", !0),
        p(g, k, E, "\u2280", "\\nprec", !0),
        p(g, k, E, "\u22E0", "\\npreceq", !0),
        p(g, k, E, "\u22E8", "\\precnsim", !0),
        p(g, k, E, "\u2AB9", "\\precnapprox", !0),
        p(g, k, E, "\u2241", "\\nsim", !0),
        p(g, k, E, "\uE006", "\\@nshortmid"),
        p(g, k, E, "\u2224", "\\nmid", !0),
        p(g, k, E, "\u22AC", "\\nvdash", !0),
        p(g, k, E, "\u22AD", "\\nvDash", !0),
        p(g, k, E, "\u22EA", "\\ntriangleleft"),
        p(g, k, E, "\u22EC", "\\ntrianglelefteq", !0),
        p(g, k, E, "\u228A", "\\subsetneq", !0),
        p(g, k, E, "\uE01A", "\\@varsubsetneq"),
        p(g, k, E, "\u2ACB", "\\subsetneqq", !0),
        p(g, k, E, "\uE017", "\\@varsubsetneqq"),
        p(g, k, E, "\u226F", "\\ngtr", !0),
        p(g, k, E, "\uE00F", "\\@ngeqslant"),
        p(g, k, E, "\uE00E", "\\@ngeqq"),
        p(g, k, E, "\u2A88", "\\gneq", !0),
        p(g, k, E, "\u2269", "\\gneqq", !0),
        p(g, k, E, "\uE00D", "\\@gvertneqq"),
        p(g, k, E, "\u22E7", "\\gnsim", !0),
        p(g, k, E, "\u2A8A", "\\gnapprox", !0),
        p(g, k, E, "\u2281", "\\nsucc", !0),
        p(g, k, E, "\u22E1", "\\nsucceq", !0),
        p(g, k, E, "\u22E9", "\\succnsim", !0),
        p(g, k, E, "\u2ABA", "\\succnapprox", !0),
        p(g, k, E, "\u2246", "\\ncong", !0),
        p(g, k, E, "\uE007", "\\@nshortparallel"),
        p(g, k, E, "\u2226", "\\nparallel", !0),
        p(g, k, E, "\u22AF", "\\nVDash", !0),
        p(g, k, E, "\u22EB", "\\ntriangleright"),
        p(g, k, E, "\u22ED", "\\ntrianglerighteq", !0),
        p(g, k, E, "\uE018", "\\@nsupseteqq"),
        p(g, k, E, "\u228B", "\\supsetneq", !0),
        p(g, k, E, "\uE01B", "\\@varsupsetneq"),
        p(g, k, E, "\u2ACC", "\\supsetneqq", !0),
        p(g, k, E, "\uE019", "\\@varsupsetneqq"),
        p(g, k, E, "\u22AE", "\\nVdash", !0),
        p(g, k, E, "\u2AB5", "\\precneqq", !0),
        p(g, k, E, "\u2AB6", "\\succneqq", !0),
        p(g, k, E, "\uE016", "\\@nsubseteqq"),
        p(g, k, X, "\u22B4", "\\unlhd"),
        p(g, k, X, "\u22B5", "\\unrhd"),
        p(g, k, E, "\u219A", "\\nleftarrow", !0),
        p(g, k, E, "\u219B", "\\nrightarrow", !0),
        p(g, k, E, "\u21CD", "\\nLeftarrow", !0),
        p(g, k, E, "\u21CF", "\\nRightarrow", !0),
        p(g, k, E, "\u21AE", "\\nleftrightarrow", !0),
        p(g, k, E, "\u21CE", "\\nLeftrightarrow", !0),
        p(g, k, E, "\u25B3", "\\vartriangle"),
        p(g, k, B, "\u210F", "\\hslash"),
        p(g, k, B, "\u25BD", "\\triangledown"),
        p(g, k, B, "\u25CA", "\\lozenge"),
        p(g, k, B, "\u24C8", "\\circledS"),
        p(g, k, B, "\xAE", "\\circledR"),
        p(L, k, B, "\xAE", "\\circledR"),
        p(g, k, B, "\u2221", "\\measuredangle", !0),
        p(g, k, B, "\u2204", "\\nexists"),
        p(g, k, B, "\u2127", "\\mho"),
        p(g, k, B, "\u2132", "\\Finv", !0),
        p(g, k, B, "\u2141", "\\Game", !0),
        p(g, k, B, "\u2035", "\\backprime"),
        p(g, k, B, "\u25B2", "\\blacktriangle"),
        p(g, k, B, "\u25BC", "\\blacktriangledown"),
        p(g, k, B, "\u25A0", "\\blacksquare"),
        p(g, k, B, "\u29EB", "\\blacklozenge"),
        p(g, k, B, "\u2605", "\\bigstar"),
        p(g, k, B, "\u2222", "\\sphericalangle", !0),
        p(g, k, B, "\u2201", "\\complement", !0),
        p(g, k, B, "\xF0", "\\eth", !0),
        p(L, D, B, "\xF0", "\xF0"),
        p(g, k, B, "\u2571", "\\diagup"),
        p(g, k, B, "\u2572", "\\diagdown"),
        p(g, k, B, "\u25A1", "\\square"),
        p(g, k, B, "\u25A1", "\\Box"),
        p(g, k, B, "\u25CA", "\\Diamond"),
        p(g, k, B, "\xA5", "\\yen", !0),
        p(L, k, B, "\xA5", "\\yen", !0),
        p(g, k, B, "\u2713", "\\checkmark", !0),
        p(L, k, B, "\u2713", "\\checkmark"),
        p(g, k, B, "\u2136", "\\beth", !0),
        p(g, k, B, "\u2138", "\\daleth", !0),
        p(g, k, B, "\u2137", "\\gimel", !0),
        p(g, k, B, "\u03DD", "\\digamma", !0),
        p(g, k, B, "\u03F0", "\\varkappa"),
        p(g, k, ot, "\u250C", "\\@ulcorner", !0),
        p(g, k, Ke, "\u2510", "\\@urcorner", !0),
        p(g, k, ot, "\u2514", "\\@llcorner", !0),
        p(g, k, Ke, "\u2518", "\\@lrcorner", !0),
        p(g, k, E, "\u2266", "\\leqq", !0),
        p(g, k, E, "\u2A7D", "\\leqslant", !0),
        p(g, k, E, "\u2A95", "\\eqslantless", !0),
        p(g, k, E, "\u2272", "\\lesssim", !0),
        p(g, k, E, "\u2A85", "\\lessapprox", !0),
        p(g, k, E, "\u224A", "\\approxeq", !0),
        p(g, k, X, "\u22D6", "\\lessdot"),
        p(g, k, E, "\u22D8", "\\lll", !0),
        p(g, k, E, "\u2276", "\\lessgtr", !0),
        p(g, k, E, "\u22DA", "\\lesseqgtr", !0),
        p(g, k, E, "\u2A8B", "\\lesseqqgtr", !0),
        p(g, k, E, "\u2251", "\\doteqdot"),
        p(g, k, E, "\u2253", "\\risingdotseq", !0),
        p(g, k, E, "\u2252", "\\fallingdotseq", !0),
        p(g, k, E, "\u223D", "\\backsim", !0),
        p(g, k, E, "\u22CD", "\\backsimeq", !0),
        p(g, k, E, "\u2AC5", "\\subseteqq", !0),
        p(g, k, E, "\u22D0", "\\Subset", !0),
        p(g, k, E, "\u228F", "\\sqsubset", !0),
        p(g, k, E, "\u227C", "\\preccurlyeq", !0),
        p(g, k, E, "\u22DE", "\\curlyeqprec", !0),
        p(g, k, E, "\u227E", "\\precsim", !0),
        p(g, k, E, "\u2AB7", "\\precapprox", !0),
        p(g, k, E, "\u22B2", "\\vartriangleleft"),
        p(g, k, E, "\u22B4", "\\trianglelefteq"),
        p(g, k, E, "\u22A8", "\\vDash", !0),
        p(g, k, E, "\u22AA", "\\Vvdash", !0),
        p(g, k, E, "\u2323", "\\smallsmile"),
        p(g, k, E, "\u2322", "\\smallfrown"),
        p(g, k, E, "\u224F", "\\bumpeq", !0),
        p(g, k, E, "\u224E", "\\Bumpeq", !0),
        p(g, k, E, "\u2267", "\\geqq", !0),
        p(g, k, E, "\u2A7E", "\\geqslant", !0),
        p(g, k, E, "\u2A96", "\\eqslantgtr", !0),
        p(g, k, E, "\u2273", "\\gtrsim", !0),
        p(g, k, E, "\u2A86", "\\gtrapprox", !0),
        p(g, k, X, "\u22D7", "\\gtrdot"),
        p(g, k, E, "\u22D9", "\\ggg", !0),
        p(g, k, E, "\u2277", "\\gtrless", !0),
        p(g, k, E, "\u22DB", "\\gtreqless", !0),
        p(g, k, E, "\u2A8C", "\\gtreqqless", !0),
        p(g, k, E, "\u2256", "\\eqcirc", !0),
        p(g, k, E, "\u2257", "\\circeq", !0),
        p(g, k, E, "\u225C", "\\triangleq", !0),
        p(g, k, E, "\u223C", "\\thicksim"),
        p(g, k, E, "\u2248", "\\thickapprox"),
        p(g, k, E, "\u2AC6", "\\supseteqq", !0),
        p(g, k, E, "\u22D1", "\\Supset", !0),
        p(g, k, E, "\u2290", "\\sqsupset", !0),
        p(g, k, E, "\u227D", "\\succcurlyeq", !0),
        p(g, k, E, "\u22DF", "\\curlyeqsucc", !0),
        p(g, k, E, "\u227F", "\\succsim", !0),
        p(g, k, E, "\u2AB8", "\\succapprox", !0),
        p(g, k, E, "\u22B3", "\\vartriangleright"),
        p(g, k, E, "\u22B5", "\\trianglerighteq"),
        p(g, k, E, "\u22A9", "\\Vdash", !0),
        p(g, k, E, "\u2223", "\\shortmid"),
        p(g, k, E, "\u2225", "\\shortparallel"),
        p(g, k, E, "\u226C", "\\between", !0),
        p(g, k, E, "\u22D4", "\\pitchfork", !0),
        p(g, k, E, "\u221D", "\\varpropto"),
        p(g, k, E, "\u25C0", "\\blacktriangleleft"),
        p(g, k, E, "\u2234", "\\therefore", !0),
        p(g, k, E, "\u220D", "\\backepsilon"),
        p(g, k, E, "\u25B6", "\\blacktriangleright"),
        p(g, k, E, "\u2235", "\\because", !0),
        p(g, k, E, "\u22D8", "\\llless"),
        p(g, k, E, "\u22D9", "\\gggtr"),
        p(g, k, X, "\u22B2", "\\lhd"),
        p(g, k, X, "\u22B3", "\\rhd"),
        p(g, k, E, "\u2242", "\\eqsim", !0),
        p(g, D, E, "\u22C8", "\\Join"),
        p(g, k, E, "\u2251", "\\Doteq", !0),
        p(g, k, X, "\u2214", "\\dotplus", !0),
        p(g, k, X, "\u2216", "\\smallsetminus"),
        p(g, k, X, "\u22D2", "\\Cap", !0),
        p(g, k, X, "\u22D3", "\\Cup", !0),
        p(g, k, X, "\u2A5E", "\\doublebarwedge", !0),
        p(g, k, X, "\u229F", "\\boxminus", !0),
        p(g, k, X, "\u229E", "\\boxplus", !0),
        p(g, k, X, "\u22C7", "\\divideontimes", !0),
        p(g, k, X, "\u22C9", "\\ltimes", !0),
        p(g, k, X, "\u22CA", "\\rtimes", !0),
        p(g, k, X, "\u22CB", "\\leftthreetimes", !0),
        p(g, k, X, "\u22CC", "\\rightthreetimes", !0),
        p(g, k, X, "\u22CF", "\\curlywedge", !0),
        p(g, k, X, "\u22CE", "\\curlyvee", !0),
        p(g, k, X, "\u229D", "\\circleddash", !0),
        p(g, k, X, "\u229B", "\\circledast", !0),
        p(g, k, X, "\u22C5", "\\centerdot"),
        p(g, k, X, "\u22BA", "\\intercal", !0),
        p(g, k, X, "\u22D2", "\\doublecap"),
        p(g, k, X, "\u22D3", "\\doublecup"),
        p(g, k, X, "\u22A0", "\\boxtimes", !0),
        p(g, k, E, "\u21E2", "\\dashrightarrow", !0),
        p(g, k, E, "\u21E0", "\\dashleftarrow", !0),
        p(g, k, E, "\u21C7", "\\leftleftarrows", !0),
        p(g, k, E, "\u21C6", "\\leftrightarrows", !0),
        p(g, k, E, "\u21DA", "\\Lleftarrow", !0),
        p(g, k, E, "\u219E", "\\twoheadleftarrow", !0),
        p(g, k, E, "\u21A2", "\\leftarrowtail", !0),
        p(g, k, E, "\u21AB", "\\looparrowleft", !0),
        p(g, k, E, "\u21CB", "\\leftrightharpoons", !0),
        p(g, k, E, "\u21B6", "\\curvearrowleft", !0),
        p(g, k, E, "\u21BA", "\\circlearrowleft", !0),
        p(g, k, E, "\u21B0", "\\Lsh", !0),
        p(g, k, E, "\u21C8", "\\upuparrows", !0),
        p(g, k, E, "\u21BF", "\\upharpoonleft", !0),
        p(g, k, E, "\u21C3", "\\downharpoonleft", !0),
        p(g, D, E, "\u22B6", "\\origof", !0),
        p(g, D, E, "\u22B7", "\\imageof", !0),
        p(g, k, E, "\u22B8", "\\multimap", !0),
        p(g, k, E, "\u21AD", "\\leftrightsquigarrow", !0),
        p(g, k, E, "\u21C9", "\\rightrightarrows", !0),
        p(g, k, E, "\u21C4", "\\rightleftarrows", !0),
        p(g, k, E, "\u21A0", "\\twoheadrightarrow", !0),
        p(g, k, E, "\u21A3", "\\rightarrowtail", !0),
        p(g, k, E, "\u21AC", "\\looparrowright", !0),
        p(g, k, E, "\u21B7", "\\curvearrowright", !0),
        p(g, k, E, "\u21BB", "\\circlearrowright", !0),
        p(g, k, E, "\u21B1", "\\Rsh", !0),
        p(g, k, E, "\u21CA", "\\downdownarrows", !0),
        p(g, k, E, "\u21BE", "\\upharpoonright", !0),
        p(g, k, E, "\u21C2", "\\downharpoonright", !0),
        p(g, k, E, "\u21DD", "\\rightsquigarrow", !0),
        p(g, k, E, "\u21DD", "\\leadsto"),
        p(g, k, E, "\u21DB", "\\Rrightarrow", !0),
        p(g, k, E, "\u21BE", "\\restriction"),
        p(g, D, B, "\u2018", "`"),
        p(g, D, B, "$", "\\$"),
        p(L, D, B, "$", "\\$"),
        p(L, D, B, "$", "\\textdollar"),
        p(g, D, B, "%", "\\%"),
        p(L, D, B, "%", "\\%"),
        p(g, D, B, "_", "\\_"),
        p(L, D, B, "_", "\\_"),
        p(L, D, B, "_", "\\textunderscore"),
        p(g, D, B, "\u2220", "\\angle", !0),
        p(g, D, B, "\u221E", "\\infty", !0),
        p(g, D, B, "\u2032", "\\prime"),
        p(g, D, B, "\u25B3", "\\triangle"),
        p(g, D, B, "\u0393", "\\Gamma", !0),
        p(g, D, B, "\u0394", "\\Delta", !0),
        p(g, D, B, "\u0398", "\\Theta", !0),
        p(g, D, B, "\u039B", "\\Lambda", !0),
        p(g, D, B, "\u039E", "\\Xi", !0),
        p(g, D, B, "\u03A0", "\\Pi", !0),
        p(g, D, B, "\u03A3", "\\Sigma", !0),
        p(g, D, B, "\u03A5", "\\Upsilon", !0),
        p(g, D, B, "\u03A6", "\\Phi", !0),
        p(g, D, B, "\u03A8", "\\Psi", !0),
        p(g, D, B, "\u03A9", "\\Omega", !0),
        p(g, D, B, "A", "\u0391"),
        p(g, D, B, "B", "\u0392"),
        p(g, D, B, "E", "\u0395"),
        p(g, D, B, "Z", "\u0396"),
        p(g, D, B, "H", "\u0397"),
        p(g, D, B, "I", "\u0399"),
        p(g, D, B, "K", "\u039A"),
        p(g, D, B, "M", "\u039C"),
        p(g, D, B, "N", "\u039D"),
        p(g, D, B, "O", "\u039F"),
        p(g, D, B, "P", "\u03A1"),
        p(g, D, B, "T", "\u03A4"),
        p(g, D, B, "X", "\u03A7"),
        p(g, D, B, "\xAC", "\\neg", !0),
        p(g, D, B, "\xAC", "\\lnot"),
        p(g, D, B, "\u22A4", "\\top"),
        p(g, D, B, "\u22A5", "\\bot"),
        p(g, D, B, "\u2205", "\\emptyset"),
        p(g, k, B, "\u2205", "\\varnothing"),
        p(g, D, re, "\u03B1", "\\alpha", !0),
        p(g, D, re, "\u03B2", "\\beta", !0),
        p(g, D, re, "\u03B3", "\\gamma", !0),
        p(g, D, re, "\u03B4", "\\delta", !0),
        p(g, D, re, "\u03F5", "\\epsilon", !0),
        p(g, D, re, "\u03B6", "\\zeta", !0),
        p(g, D, re, "\u03B7", "\\eta", !0),
        p(g, D, re, "\u03B8", "\\theta", !0),
        p(g, D, re, "\u03B9", "\\iota", !0),
        p(g, D, re, "\u03BA", "\\kappa", !0),
        p(g, D, re, "\u03BB", "\\lambda", !0),
        p(g, D, re, "\u03BC", "\\mu", !0),
        p(g, D, re, "\u03BD", "\\nu", !0),
        p(g, D, re, "\u03BE", "\\xi", !0),
        p(g, D, re, "\u03BF", "\\omicron", !0),
        p(g, D, re, "\u03C0", "\\pi", !0),
        p(g, D, re, "\u03C1", "\\rho", !0),
        p(g, D, re, "\u03C3", "\\sigma", !0),
        p(g, D, re, "\u03C4", "\\tau", !0),
        p(g, D, re, "\u03C5", "\\upsilon", !0),
        p(g, D, re, "\u03D5", "\\phi", !0),
        p(g, D, re, "\u03C7", "\\chi", !0),
        p(g, D, re, "\u03C8", "\\psi", !0),
        p(g, D, re, "\u03C9", "\\omega", !0),
        p(g, D, re, "\u03B5", "\\varepsilon", !0),
        p(g, D, re, "\u03D1", "\\vartheta", !0),
        p(g, D, re, "\u03D6", "\\varpi", !0),
        p(g, D, re, "\u03F1", "\\varrho", !0),
        p(g, D, re, "\u03C2", "\\varsigma", !0),
        p(g, D, re, "\u03C6", "\\varphi", !0),
        p(g, D, X, "\u2217", "*", !0),
        p(g, D, X, "+", "+"),
        p(g, D, X, "\u2212", "-", !0),
        p(g, D, X, "\u22C5", "\\cdot", !0),
        p(g, D, X, "\u2218", "\\circ"),
        p(g, D, X, "\xF7", "\\div", !0),
        p(g, D, X, "\xB1", "\\pm", !0),
        p(g, D, X, "\xD7", "\\times", !0),
        p(g, D, X, "\u2229", "\\cap", !0),
        p(g, D, X, "\u222A", "\\cup", !0),
        p(g, D, X, "\u2216", "\\setminus"),
        p(g, D, X, "\u2227", "\\land"),
        p(g, D, X, "\u2228", "\\lor"),
        p(g, D, X, "\u2227", "\\wedge", !0),
        p(g, D, X, "\u2228", "\\vee", !0),
        p(g, D, B, "\u221A", "\\surd"),
        p(g, D, ot, "\u27E8", "\\langle", !0),
        p(g, D, ot, "\u2223", "\\lvert"),
        p(g, D, ot, "\u2225", "\\lVert"),
        p(g, D, Ke, "?", "?"),
        p(g, D, Ke, "!", "!"),
        p(g, D, Ke, "\u27E9", "\\rangle", !0),
        p(g, D, Ke, "\u2223", "\\rvert"),
        p(g, D, Ke, "\u2225", "\\rVert"),
        p(g, D, E, "=", "="),
        p(g, D, E, ":", ":"),
        p(g, D, E, "\u2248", "\\approx", !0),
        p(g, D, E, "\u2245", "\\cong", !0),
        p(g, D, E, "\u2265", "\\ge"),
        p(g, D, E, "\u2265", "\\geq", !0),
        p(g, D, E, "\u2190", "\\gets"),
        p(g, D, E, ">", "\\gt", !0),
        p(g, D, E, "\u2208", "\\in", !0),
        p(g, D, E, "\uE020", "\\@not"),
        p(g, D, E, "\u2282", "\\subset", !0),
        p(g, D, E, "\u2283", "\\supset", !0),
        p(g, D, E, "\u2286", "\\subseteq", !0),
        p(g, D, E, "\u2287", "\\supseteq", !0),
        p(g, k, E, "\u2288", "\\nsubseteq", !0),
        p(g, k, E, "\u2289", "\\nsupseteq", !0),
        p(g, D, E, "\u22A8", "\\models"),
        p(g, D, E, "\u2190", "\\leftarrow", !0),
        p(g, D, E, "\u2264", "\\le"),
        p(g, D, E, "\u2264", "\\leq", !0),
        p(g, D, E, "<", "\\lt", !0),
        p(g, D, E, "\u2192", "\\rightarrow", !0),
        p(g, D, E, "\u2192", "\\to"),
        p(g, k, E, "\u2271", "\\ngeq", !0),
        p(g, k, E, "\u2270", "\\nleq", !0),
        p(g, D, Gt, "\xA0", "\\ "),
        p(g, D, Gt, "\xA0", "\\space"),
        p(g, D, Gt, "\xA0", "\\nobreakspace"),
        p(L, D, Gt, "\xA0", "\\ "),
        p(L, D, Gt, "\xA0", " "),
        p(L, D, Gt, "\xA0", "\\space"),
        p(L, D, Gt, "\xA0", "\\nobreakspace"),
        p(g, D, Gt, null, "\\nobreak"),
        p(g, D, Gt, null, "\\allowbreak"),
        p(g, D, ya, ",", ","),
        p(g, D, ya, ";", ";"),
        p(g, k, X, "\u22BC", "\\barwedge", !0),
        p(g, k, X, "\u22BB", "\\veebar", !0),
        p(g, D, X, "\u2299", "\\odot", !0),
        p(g, D, X, "\u2295", "\\oplus", !0),
        p(g, D, X, "\u2297", "\\otimes", !0),
        p(g, D, B, "\u2202", "\\partial", !0),
        p(g, D, X, "\u2298", "\\oslash", !0),
        p(g, k, X, "\u229A", "\\circledcirc", !0),
        p(g, k, X, "\u22A1", "\\boxdot", !0),
        p(g, D, X, "\u25B3", "\\bigtriangleup"),
        p(g, D, X, "\u25BD", "\\bigtriangledown"),
        p(g, D, X, "\u2020", "\\dagger"),
        p(g, D, X, "\u22C4", "\\diamond"),
        p(g, D, X, "\u22C6", "\\star"),
        p(g, D, X, "\u25C3", "\\triangleleft"),
        p(g, D, X, "\u25B9", "\\triangleright"),
        p(g, D, ot, "{", "\\{"),
        p(L, D, B, "{", "\\{"),
        p(L, D, B, "{", "\\textbraceleft"),
        p(g, D, Ke, "}", "\\}"),
        p(L, D, B, "}", "\\}"),
        p(L, D, B, "}", "\\textbraceright"),
        p(g, D, ot, "{", "\\lbrace"),
        p(g, D, Ke, "}", "\\rbrace"),
        p(g, D, ot, "[", "\\lbrack", !0),
        p(L, D, B, "[", "\\lbrack", !0),
        p(g, D, Ke, "]", "\\rbrack", !0),
        p(L, D, B, "]", "\\rbrack", !0),
        p(g, D, ot, "(", "\\lparen", !0),
        p(g, D, Ke, ")", "\\rparen", !0),
        p(L, D, B, "<", "\\textless", !0),
        p(L, D, B, ">", "\\textgreater", !0),
        p(g, D, ot, "\u230A", "\\lfloor", !0),
        p(g, D, Ke, "\u230B", "\\rfloor", !0),
        p(g, D, ot, "\u2308", "\\lceil", !0),
        p(g, D, Ke, "\u2309", "\\rceil", !0),
        p(g, D, B, "\\", "\\backslash"),
        p(g, D, B, "\u2223", "|"),
        p(g, D, B, "\u2223", "\\vert"),
        p(L, D, B, "|", "\\textbar", !0),
        p(g, D, B, "\u2225", "\\|"),
        p(g, D, B, "\u2225", "\\Vert"),
        p(L, D, B, "\u2225", "\\textbardbl"),
        p(L, D, B, "~", "\\textasciitilde"),
        p(L, D, B, "\\", "\\textbackslash"),
        p(L, D, B, "^", "\\textasciicircum"),
        p(g, D, E, "\u2191", "\\uparrow", !0),
        p(g, D, E, "\u21D1", "\\Uparrow", !0),
        p(g, D, E, "\u2193", "\\downarrow", !0),
        p(g, D, E, "\u21D3", "\\Downarrow", !0),
        p(g, D, E, "\u2195", "\\updownarrow", !0),
        p(g, D, E, "\u21D5", "\\Updownarrow", !0),
        p(g, D, je, "\u2210", "\\coprod"),
        p(g, D, je, "\u22C1", "\\bigvee"),
        p(g, D, je, "\u22C0", "\\bigwedge"),
        p(g, D, je, "\u2A04", "\\biguplus"),
        p(g, D, je, "\u22C2", "\\bigcap"),
        p(g, D, je, "\u22C3", "\\bigcup"),
        p(g, D, je, "\u222B", "\\int"),
        p(g, D, je, "\u222B", "\\intop"),
        p(g, D, je, "\u222C", "\\iint"),
        p(g, D, je, "\u222D", "\\iiint"),
        p(g, D, je, "\u220F", "\\prod"),
        p(g, D, je, "\u2211", "\\sum"),
        p(g, D, je, "\u2A02", "\\bigotimes"),
        p(g, D, je, "\u2A01", "\\bigoplus"),
        p(g, D, je, "\u2A00", "\\bigodot"),
        p(g, D, je, "\u222E", "\\oint"),
        p(g, D, je, "\u222F", "\\oiint"),
        p(g, D, je, "\u2230", "\\oiiint"),
        p(g, D, je, "\u2A06", "\\bigsqcup"),
        p(g, D, je, "\u222B", "\\smallint"),
        p(L, D, fn, "\u2026", "\\textellipsis"),
        p(g, D, fn, "\u2026", "\\mathellipsis"),
        p(L, D, fn, "\u2026", "\\ldots", !0),
        p(g, D, fn, "\u2026", "\\ldots", !0),
        p(g, D, fn, "\u22EF", "\\@cdots", !0),
        p(g, D, fn, "\u22F1", "\\ddots", !0),
        p(g, D, B, "\u22EE", "\\varvdots"),
        p(g, D, Oe, "\u02CA", "\\acute"),
        p(g, D, Oe, "\u02CB", "\\grave"),
        p(g, D, Oe, "\xA8", "\\ddot"),
        p(g, D, Oe, "~", "\\tilde"),
        p(g, D, Oe, "\u02C9", "\\bar"),
        p(g, D, Oe, "\u02D8", "\\breve"),
        p(g, D, Oe, "\u02C7", "\\check"),
        p(g, D, Oe, "^", "\\hat"),
        p(g, D, Oe, "\u20D7", "\\vec"),
        p(g, D, Oe, "\u02D9", "\\dot"),
        p(g, D, Oe, "\u02DA", "\\mathring"),
        p(g, D, re, "\uE131", "\\@imath"),
        p(g, D, re, "\uE237", "\\@jmath"),
        p(g, D, B, "\u0131", "\u0131"),
        p(g, D, B, "\u0237", "\u0237"),
        p(L, D, B, "\u0131", "\\i", !0),
        p(L, D, B, "\u0237", "\\j", !0),
        p(L, D, B, "\xDF", "\\ss", !0),
        p(L, D, B, "\xE6", "\\ae", !0),
        p(L, D, B, "\u0153", "\\oe", !0),
        p(L, D, B, "\xF8", "\\o", !0),
        p(L, D, B, "\xC6", "\\AE", !0),
        p(L, D, B, "\u0152", "\\OE", !0),
        p(L, D, B, "\xD8", "\\O", !0),
        p(L, D, Oe, "\u02CA", "\\'"),
        p(L, D, Oe, "\u02CB", "\\`"),
        p(L, D, Oe, "\u02C6", "\\^"),
        p(L, D, Oe, "\u02DC", "\\~"),
        p(L, D, Oe, "\u02C9", "\\="),
        p(L, D, Oe, "\u02D8", "\\u"),
        p(L, D, Oe, "\u02D9", "\\."),
        p(L, D, Oe, "\xB8", "\\c"),
        p(L, D, Oe, "\u02DA", "\\r"),
        p(L, D, Oe, "\u02C7", "\\v"),
        p(L, D, Oe, "\xA8", '\\"'),
        p(L, D, Oe, "\u02DD", "\\H"),
        p(L, D, Oe, "\u25EF", "\\textcircled");
      var Hs = { "--": !0, "---": !0, "``": !0, "''": !0 };
      p(L, D, B, "\u2013", "--", !0),
        p(L, D, B, "\u2013", "\\textendash"),
        p(L, D, B, "\u2014", "---", !0),
        p(L, D, B, "\u2014", "\\textemdash"),
        p(L, D, B, "\u2018", "`", !0),
        p(L, D, B, "\u2018", "\\textquoteleft"),
        p(L, D, B, "\u2019", "'", !0),
        p(L, D, B, "\u2019", "\\textquoteright"),
        p(L, D, B, "\u201C", "``", !0),
        p(L, D, B, "\u201C", "\\textquotedblleft"),
        p(L, D, B, "\u201D", "''", !0),
        p(L, D, B, "\u201D", "\\textquotedblright"),
        p(g, D, B, "\xB0", "\\degree", !0),
        p(L, D, B, "\xB0", "\\degree"),
        p(L, D, B, "\xB0", "\\textdegree", !0),
        p(g, D, B, "\xA3", "\\pounds"),
        p(g, D, B, "\xA3", "\\mathsterling", !0),
        p(L, D, B, "\xA3", "\\pounds"),
        p(L, D, B, "\xA3", "\\textsterling", !0),
        p(g, k, B, "\u2720", "\\maltese"),
        p(L, k, B, "\u2720", "\\maltese");
      for (var Us = '0123456789/@."', ki = 0; ki < Us.length; ki++) {
        var Vs = Us.charAt(ki);
        p(g, D, B, Vs, Vs);
      }
      for (var Ws = '0123456789!@*()-=+";:?/.,', Ei = 0; Ei < Ws.length; Ei++) {
        var Gs = Ws.charAt(Ei);
        p(L, D, B, Gs, Gs);
      }
      for (
        var Da = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", Ai = 0;
        Ai < Da.length;
        Ai++
      ) {
        var xa = Da.charAt(Ai);
        p(g, D, re, xa, xa), p(L, D, B, xa, xa);
      }
      p(g, k, B, "C", "\u2102"),
        p(L, k, B, "C", "\u2102"),
        p(g, k, B, "H", "\u210D"),
        p(L, k, B, "H", "\u210D"),
        p(g, k, B, "N", "\u2115"),
        p(L, k, B, "N", "\u2115"),
        p(g, k, B, "P", "\u2119"),
        p(L, k, B, "P", "\u2119"),
        p(g, k, B, "Q", "\u211A"),
        p(L, k, B, "Q", "\u211A"),
        p(g, k, B, "R", "\u211D"),
        p(L, k, B, "R", "\u211D"),
        p(g, k, B, "Z", "\u2124"),
        p(L, k, B, "Z", "\u2124"),
        p(g, D, re, "h", "\u210E"),
        p(L, D, re, "h", "\u210E");
      for (var se = "", Qe = 0; Qe < Da.length; Qe++) {
        var Le = Da.charAt(Qe);
        (se = String.fromCharCode(55349, 56320 + Qe)),
          p(g, D, re, Le, se),
          p(L, D, B, Le, se),
          (se = String.fromCharCode(55349, 56372 + Qe)),
          p(g, D, re, Le, se),
          p(L, D, B, Le, se),
          (se = String.fromCharCode(55349, 56424 + Qe)),
          p(g, D, re, Le, se),
          p(L, D, B, Le, se),
          (se = String.fromCharCode(55349, 56580 + Qe)),
          p(g, D, re, Le, se),
          p(L, D, B, Le, se),
          (se = String.fromCharCode(55349, 56736 + Qe)),
          p(g, D, re, Le, se),
          p(L, D, B, Le, se),
          (se = String.fromCharCode(55349, 56788 + Qe)),
          p(g, D, re, Le, se),
          p(L, D, B, Le, se),
          (se = String.fromCharCode(55349, 56840 + Qe)),
          p(g, D, re, Le, se),
          p(L, D, B, Le, se),
          (se = String.fromCharCode(55349, 56944 + Qe)),
          p(g, D, re, Le, se),
          p(L, D, B, Le, se),
          Qe < 26 &&
            ((se = String.fromCharCode(55349, 56632 + Qe)),
            p(g, D, re, Le, se),
            p(L, D, B, Le, se),
            (se = String.fromCharCode(55349, 56476 + Qe)),
            p(g, D, re, Le, se),
            p(L, D, B, Le, se));
      }
      (se = String.fromCharCode(55349, 56668)),
        p(g, D, re, "k", se),
        p(L, D, B, "k", se);
      for (var Wr = 0; Wr < 10; Wr++) {
        var gr = Wr.toString();
        (se = String.fromCharCode(55349, 57294 + Wr)),
          p(g, D, re, gr, se),
          p(L, D, B, gr, se),
          (se = String.fromCharCode(55349, 57314 + Wr)),
          p(g, D, re, gr, se),
          p(L, D, B, gr, se),
          (se = String.fromCharCode(55349, 57324 + Wr)),
          p(g, D, re, gr, se),
          p(L, D, B, gr, se),
          (se = String.fromCharCode(55349, 57334 + Wr)),
          p(g, D, re, gr, se),
          p(L, D, B, gr, se);
      }
      for (var Fi = "\xD0\xDE\xFE", Bi = 0; Bi < Fi.length; Bi++) {
        var ba = Fi.charAt(Bi);
        p(g, D, re, ba, ba), p(L, D, B, ba, ba);
      }
      var wa = [
          ["mathbf", "textbf", "Main-Bold"],
          ["mathbf", "textbf", "Main-Bold"],
          ["mathnormal", "textit", "Math-Italic"],
          ["mathnormal", "textit", "Math-Italic"],
          ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
          ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
          ["mathscr", "textscr", "Script-Regular"],
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
          ["mathfrak", "textfrak", "Fraktur-Regular"],
          ["mathfrak", "textfrak", "Fraktur-Regular"],
          ["mathbb", "textbb", "AMS-Regular"],
          ["mathbb", "textbb", "AMS-Regular"],
          ["", "", ""],
          ["", "", ""],
          ["mathsf", "textsf", "SansSerif-Regular"],
          ["mathsf", "textsf", "SansSerif-Regular"],
          ["mathboldsf", "textboldsf", "SansSerif-Bold"],
          ["mathboldsf", "textboldsf", "SansSerif-Bold"],
          ["mathitsf", "textitsf", "SansSerif-Italic"],
          ["mathitsf", "textitsf", "SansSerif-Italic"],
          ["", "", ""],
          ["", "", ""],
          ["mathtt", "texttt", "Typewriter-Regular"],
          ["mathtt", "texttt", "Typewriter-Regular"],
        ],
        Zs = [
          ["mathbf", "textbf", "Main-Bold"],
          ["", "", ""],
          ["mathsf", "textsf", "SansSerif-Regular"],
          ["mathboldsf", "textboldsf", "SansSerif-Bold"],
          ["mathtt", "texttt", "Typewriter-Regular"],
        ],
        np = function (a, i) {
          var s = a.charCodeAt(0),
            u = a.charCodeAt(1),
            c = (s - 55296) * 1024 + (u - 56320) + 65536,
            f = i === "math" ? 0 : 1;
          if (119808 <= c && c < 120484) {
            var y = Math.floor((c - 119808) / 26);
            return [wa[y][2], wa[y][f]];
          } else if (120782 <= c && c <= 120831) {
            var x = Math.floor((c - 120782) / 10);
            return [Zs[x][2], Zs[x][f]];
          } else {
            if (c === 120485 || c === 120486) return [wa[0][2], wa[0][f]];
            if (120486 < c && c < 120782) return ["", ""];
            throw new r("Unsupported character: " + a);
          }
        },
        Ca = function (a, i, s) {
          return (
            Re[s][a] && Re[s][a].replace && (a = Re[s][a].replace),
            { value: a, metrics: xi(a, i, s) }
          );
        },
        Et = function (a, i, s, u, c) {
          var f = Ca(a, i, s),
            y = f.metrics;
          a = f.value;
          var x;
          if (y) {
            var C = y.italic;
            (s === "text" || (u && u.font === "mathit")) && (C = 0),
              (x = new ht(a, y.height, y.depth, C, y.skew, y.width, c));
          } else
            typeof console < "u" &&
              console.warn(
                "No character metrics " +
                  ("for '" + a + "' in style '" + i + "' and mode '" + s + "'")
              ),
              (x = new ht(a, 0, 0, 0, 0, 0, c));
          if (u) {
            (x.maxFontSize = u.sizeMultiplier),
              u.style.isTight() && x.classes.push("mtight");
            var F = u.getColor();
            F && (x.style.color = F);
          }
          return x;
        },
        ap = function (a, i, s, u) {
          return (
            u === void 0 && (u = []),
            s.font === "boldsymbol" && Ca(a, "Main-Bold", i).metrics
              ? Et(a, "Main-Bold", i, s, u.concat(["mathbf"]))
              : a === "\\" || Re[i][a].font === "main"
              ? Et(a, "Main-Regular", i, s, u)
              : Et(a, "AMS-Regular", i, s, u.concat(["amsrm"]))
          );
        },
        ip = function (a, i, s, u, c) {
          return c !== "textord" && Ca(a, "Math-BoldItalic", i).metrics
            ? { fontName: "Math-BoldItalic", fontClass: "boldsymbol" }
            : { fontName: "Main-Bold", fontClass: "mathbf" };
        },
        sp = function (a, i, s) {
          var u = a.mode,
            c = a.text,
            f = ["mord"],
            y = u === "math" || (u === "text" && i.font),
            x = y ? i.font : i.fontFamily;
          if (c.charCodeAt(0) === 55349) {
            var C = np(c, u),
              F = C[0],
              T = C[1];
            return Et(c, F, u, i, f.concat(T));
          } else if (x) {
            var z, P;
            if (x === "boldsymbol") {
              var I = ip(c, u, i, f, s);
              (z = I.fontName), (P = [I.fontClass]);
            } else
              y
                ? ((z = Ks[x].fontName), (P = [x]))
                : ((z = Sa(x, i.fontWeight, i.fontShape)),
                  (P = [x, i.fontWeight, i.fontShape]));
            if (Ca(c, z, u).metrics) return Et(c, z, u, i, f.concat(P));
            if (Hs.hasOwnProperty(c) && z.substr(0, 10) === "Typewriter") {
              for (var V = [], G = 0; G < c.length; G++)
                V.push(Et(c[G], z, u, i, f.concat(P)));
              return Xs(V);
            }
          }
          if (s === "mathord")
            return Et(c, "Math-Italic", u, i, f.concat(["mathnormal"]));
          if (s === "textord") {
            var K = Re[u][c] && Re[u][c].font;
            if (K === "ams") {
              var Q = Sa("amsrm", i.fontWeight, i.fontShape);
              return Et(
                c,
                Q,
                u,
                i,
                f.concat("amsrm", i.fontWeight, i.fontShape)
              );
            } else if (K === "main" || !K) {
              var te = Sa("textrm", i.fontWeight, i.fontShape);
              return Et(c, te, u, i, f.concat(i.fontWeight, i.fontShape));
            } else {
              var ye = Sa(K, i.fontWeight, i.fontShape);
              return Et(c, ye, u, i, f.concat(ye, i.fontWeight, i.fontShape));
            }
          } else throw new Error("unexpected type: " + s + " in makeOrd");
        },
        op = function (a, i) {
          if (
            hr(a.classes) !== hr(i.classes) ||
            a.skew !== i.skew ||
            a.maxFontSize !== i.maxFontSize
          )
            return !1;
          if (a.classes.length === 1) {
            var s = a.classes[0];
            if (s === "mbin" || s === "mord") return !1;
          }
          for (var u in a.style)
            if (a.style.hasOwnProperty(u) && a.style[u] !== i.style[u])
              return !1;
          for (var c in i.style)
            if (i.style.hasOwnProperty(c) && a.style[c] !== i.style[c])
              return !1;
          return !0;
        },
        up = function (a) {
          for (var i = 0; i < a.length - 1; i++) {
            var s = a[i],
              u = a[i + 1];
            s instanceof ht &&
              u instanceof ht &&
              op(s, u) &&
              ((s.text += u.text),
              (s.height = Math.max(s.height, u.height)),
              (s.depth = Math.max(s.depth, u.depth)),
              (s.italic = u.italic),
              a.splice(i + 1, 1),
              i--);
          }
          return a;
        },
        Ti = function (a) {
          for (var i = 0, s = 0, u = 0, c = 0; c < a.children.length; c++) {
            var f = a.children[c];
            f.height > i && (i = f.height),
              f.depth > s && (s = f.depth),
              f.maxFontSize > u && (u = f.maxFontSize);
          }
          (a.height = i), (a.depth = s), (a.maxFontSize = u);
        },
        et = function (a, i, s, u) {
          var c = new _n(a, i, s, u);
          return Ti(c), c;
        },
        Js = function (a, i, s, u) {
          return new _n(a, i, s, u);
        },
        lp = function (a, i, s) {
          var u = et([a], [], i);
          return (
            (u.height = Math.max(
              s || i.fontMetrics().defaultRuleThickness,
              i.minRuleThickness
            )),
            (u.style.borderBottomWidth = U(u.height)),
            (u.maxFontSize = 1),
            u
          );
        },
        cp = function (a, i, s, u) {
          var c = new Ci(a, i, s, u);
          return Ti(c), c;
        },
        Xs = function (a) {
          var i = new fr(a);
          return Ti(i), i;
        },
        dp = function (a, i) {
          return a instanceof fr ? et([], [a], i) : a;
        },
        pp = function (a) {
          if (a.positionType === "individualShift") {
            for (
              var i = a.children,
                s = [i[0]],
                u = -i[0].shift - i[0].elem.depth,
                c = u,
                f = 1;
              f < i.length;
              f++
            ) {
              var y = -i[f].shift - c - i[f].elem.depth,
                x = y - (i[f - 1].elem.height + i[f - 1].elem.depth);
              (c = c + y), s.push({ type: "kern", size: x }), s.push(i[f]);
            }
            return { children: s, depth: u };
          }
          var C;
          if (a.positionType === "top") {
            for (var F = a.positionData, T = 0; T < a.children.length; T++) {
              var z = a.children[T];
              F -= z.type === "kern" ? z.size : z.elem.height + z.elem.depth;
            }
            C = F;
          } else if (a.positionType === "bottom") C = -a.positionData;
          else {
            var P = a.children[0];
            if (P.type !== "elem")
              throw new Error('First child must have type "elem".');
            if (a.positionType === "shift") C = -P.elem.depth - a.positionData;
            else if (a.positionType === "firstBaseline") C = -P.elem.depth;
            else
              throw new Error("Invalid positionType " + a.positionType + ".");
          }
          return { children: a.children, depth: C };
        },
        fp = function (a, i) {
          for (
            var s = pp(a), u = s.children, c = s.depth, f = 0, y = 0;
            y < u.length;
            y++
          ) {
            var x = u[y];
            if (x.type === "elem") {
              var C = x.elem;
              f = Math.max(f, C.maxFontSize, C.height);
            }
          }
          f += 2;
          var F = et(["pstrut"], []);
          F.style.height = U(f);
          for (var T = [], z = c, P = c, I = c, V = 0; V < u.length; V++) {
            var G = u[V];
            if (G.type === "kern") I += G.size;
            else {
              var K = G.elem,
                Q = G.wrapperClasses || [],
                te = G.wrapperStyle || {},
                ye = et(Q, [F, K], void 0, te);
              (ye.style.top = U(-f - I - K.depth)),
                G.marginLeft && (ye.style.marginLeft = G.marginLeft),
                G.marginRight && (ye.style.marginRight = G.marginRight),
                T.push(ye),
                (I += K.height + K.depth);
            }
            (z = Math.min(z, I)), (P = Math.max(P, I));
          }
          var Se = et(["vlist"], T);
          Se.style.height = U(P);
          var _e;
          if (z < 0) {
            var Ce = et([], []),
              ke = et(["vlist"], [Ce]);
            ke.style.height = U(-z);
            var Ie = et(["vlist-s"], [new ht("\u200B")]);
            _e = [et(["vlist-r"], [Se, Ie]), et(["vlist-r"], [ke])];
          } else _e = [et(["vlist-r"], [Se])];
          var Fe = et(["vlist-t"], _e);
          return (
            _e.length === 2 && Fe.classes.push("vlist-t2"),
            (Fe.height = P),
            (Fe.depth = -z),
            Fe
          );
        },
        hp = function (a, i) {
          var s = et(["mspace"], [], i),
            u = ze(a, i);
          return (s.style.marginRight = U(u)), s;
        },
        Sa = function (a, i, s) {
          var u = "";
          switch (a) {
            case "amsrm":
              u = "AMS";
              break;
            case "textrm":
              u = "Main";
              break;
            case "textsf":
              u = "SansSerif";
              break;
            case "texttt":
              u = "Typewriter";
              break;
            default:
              u = a;
          }
          var c;
          return (
            i === "textbf" && s === "textit"
              ? (c = "BoldItalic")
              : i === "textbf"
              ? (c = "Bold")
              : i === "textit"
              ? (c = "Italic")
              : (c = "Regular"),
            u + "-" + c
          );
        },
        Ks = {
          mathbf: { variant: "bold", fontName: "Main-Bold" },
          mathrm: { variant: "normal", fontName: "Main-Regular" },
          textit: { variant: "italic", fontName: "Main-Italic" },
          mathit: { variant: "italic", fontName: "Main-Italic" },
          mathnormal: { variant: "italic", fontName: "Math-Italic" },
          mathbb: { variant: "double-struck", fontName: "AMS-Regular" },
          mathcal: { variant: "script", fontName: "Caligraphic-Regular" },
          mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" },
          mathscr: { variant: "script", fontName: "Script-Regular" },
          mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" },
          mathtt: { variant: "monospace", fontName: "Typewriter-Regular" },
        },
        Ys = {
          vec: ["vec", 0.471, 0.714],
          oiintSize1: ["oiintSize1", 0.957, 0.499],
          oiintSize2: ["oiintSize2", 1.472, 0.659],
          oiiintSize1: ["oiiintSize1", 1.304, 0.499],
          oiiintSize2: ["oiiintSize2", 1.98, 0.659],
        },
        mp = function (a, i) {
          var s = Ys[a],
            u = s[0],
            c = s[1],
            f = s[2],
            y = new Vr(u),
            x = new mr([y], {
              width: U(c),
              height: U(f),
              style: "width:" + U(c),
              viewBox: "0 0 " + 1e3 * c + " " + 1e3 * f,
              preserveAspectRatio: "xMinYMin",
            }),
            C = Js(["overlay"], [x], i);
          return (
            (C.height = f), (C.style.height = U(f)), (C.style.width = U(c)), C
          );
        },
        M = {
          fontMap: Ks,
          makeSymbol: Et,
          mathsym: ap,
          makeSpan: et,
          makeSvgSpan: Js,
          makeLineSpan: lp,
          makeAnchor: cp,
          makeFragment: Xs,
          wrapFragment: dp,
          makeVList: fp,
          makeOrd: sp,
          makeGlue: hp,
          staticSvg: mp,
          svgData: Ys,
          tryCombineChars: up,
        },
        Pe = { number: 3, unit: "mu" },
        Gr = { number: 4, unit: "mu" },
        Zt = { number: 5, unit: "mu" },
        gp = {
          mord: { mop: Pe, mbin: Gr, mrel: Zt, minner: Pe },
          mop: { mord: Pe, mop: Pe, mrel: Zt, minner: Pe },
          mbin: { mord: Gr, mop: Gr, mopen: Gr, minner: Gr },
          mrel: { mord: Zt, mop: Zt, mopen: Zt, minner: Zt },
          mopen: {},
          mclose: { mop: Pe, mbin: Gr, mrel: Zt, minner: Pe },
          mpunct: {
            mord: Pe,
            mop: Pe,
            mrel: Zt,
            mopen: Pe,
            mclose: Pe,
            mpunct: Pe,
            minner: Pe,
          },
          minner: {
            mord: Pe,
            mop: Pe,
            mbin: Gr,
            mrel: Zt,
            mopen: Pe,
            mpunct: Pe,
            minner: Pe,
          },
        },
        vp = {
          mord: { mop: Pe },
          mop: { mord: Pe, mop: Pe },
          mbin: {},
          mrel: {},
          mopen: {},
          mclose: { mop: Pe },
          mpunct: {},
          minner: { mop: Pe },
        },
        Qs = {},
        ka = {},
        Ea = {};
      function Z(h) {
        for (
          var a = h.type,
            i = h.names,
            s = h.props,
            u = h.handler,
            c = h.htmlBuilder,
            f = h.mathmlBuilder,
            y = {
              type: a,
              numArgs: s.numArgs,
              argTypes: s.argTypes,
              allowedInArgument: !!s.allowedInArgument,
              allowedInText: !!s.allowedInText,
              allowedInMath: s.allowedInMath === void 0 ? !0 : s.allowedInMath,
              numOptionalArgs: s.numOptionalArgs || 0,
              infix: !!s.infix,
              primitive: !!s.primitive,
              handler: u,
            },
            x = 0;
          x < i.length;
          ++x
        )
          Qs[i[x]] = y;
        a && (c && (ka[a] = c), f && (Ea[a] = f));
      }
      function Zr(h) {
        var a = h.type,
          i = h.htmlBuilder,
          s = h.mathmlBuilder;
        Z({
          type: a,
          names: [],
          props: { numArgs: 0 },
          handler: function () {
            throw new Error("Should never be called.");
          },
          htmlBuilder: i,
          mathmlBuilder: s,
        });
      }
      var Aa = function (a) {
          return a.type === "ordgroup" && a.body.length === 1 ? a.body[0] : a;
        },
        $e = function (a) {
          return a.type === "ordgroup" ? a.body : [a];
        },
        Jt = M.makeSpan,
        yp = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"],
        Dp = ["rightmost", "mrel", "mclose", "mpunct"],
        xp = {
          display: ee.DISPLAY,
          text: ee.TEXT,
          script: ee.SCRIPT,
          scriptscript: ee.SCRIPTSCRIPT,
        },
        bp = {
          mord: "mord",
          mop: "mop",
          mbin: "mbin",
          mrel: "mrel",
          mopen: "mopen",
          mclose: "mclose",
          mpunct: "mpunct",
          minner: "minner",
        },
        Ge = function (a, i, s, u) {
          u === void 0 && (u = [null, null]);
          for (var c = [], f = 0; f < a.length; f++) {
            var y = ve(a[f], i);
            if (y instanceof fr) {
              var x = y.children;
              c.push.apply(c, x);
            } else c.push(y);
          }
          if ((M.tryCombineChars(c), !s)) return c;
          var C = i;
          if (a.length === 1) {
            var F = a[0];
            F.type === "sizing"
              ? (C = i.havingSize(F.size))
              : F.type === "styling" && (C = i.havingStyle(xp[F.style]));
          }
          var T = Jt([u[0] || "leftmost"], [], i),
            z = Jt([u[1] || "rightmost"], [], i),
            P = s === "root";
          return (
            eo(
              c,
              function (I, V) {
                var G = V.classes[0],
                  K = I.classes[0];
                G === "mbin" && O.contains(Dp, K)
                  ? (V.classes[0] = "mord")
                  : K === "mbin" &&
                    O.contains(yp, G) &&
                    (I.classes[0] = "mord");
              },
              { node: T },
              z,
              P
            ),
            eo(
              c,
              function (I, V) {
                var G = Ni(V),
                  K = Ni(I),
                  Q =
                    G && K
                      ? I.hasClass("mtight")
                        ? vp[G][K]
                        : gp[G][K]
                      : null;
                if (Q) return M.makeGlue(Q, C);
              },
              { node: T },
              z,
              P
            ),
            c
          );
        },
        eo = function h(a, i, s, u, c) {
          u && a.push(u);
          for (var f = 0; f < a.length; f++) {
            var y = a[f],
              x = to(y);
            if (x) {
              h(x.children, i, s, null, c);
              continue;
            }
            var C = !y.hasClass("mspace");
            if (C) {
              var F = i(y, s.node);
              F && (s.insertAfter ? s.insertAfter(F) : (a.unshift(F), f++));
            }
            C
              ? (s.node = y)
              : c && y.hasClass("newline") && (s.node = Jt(["leftmost"])),
              (s.insertAfter = (function (T) {
                return function (z) {
                  a.splice(T + 1, 0, z), f++;
                };
              })(f));
          }
          u && a.pop();
        },
        to = function (a) {
          return a instanceof fr ||
            a instanceof Ci ||
            (a instanceof _n && a.hasClass("enclosing"))
            ? a
            : null;
        },
        wp = function h(a, i) {
          var s = to(a);
          if (s) {
            var u = s.children;
            if (u.length) {
              if (i === "right") return h(u[u.length - 1], "right");
              if (i === "left") return h(u[0], "left");
            }
          }
          return a;
        },
        Ni = function (a, i) {
          return a ? (i && (a = wp(a, i)), bp[a.classes[0]] || null) : null;
        },
        zn = function (a, i) {
          var s = ["nulldelimiter"].concat(a.baseSizingClasses());
          return Jt(i.concat(s));
        },
        ve = function (a, i, s) {
          if (!a) return Jt();
          if (ka[a.type]) {
            var u = ka[a.type](a, i);
            if (s && i.size !== s.size) {
              u = Jt(i.sizingClasses(s), [u], i);
              var c = i.sizeMultiplier / s.sizeMultiplier;
              (u.height *= c), (u.depth *= c);
            }
            return u;
          } else throw new r("Got group of unknown type: '" + a.type + "'");
        };
      function Fa(h, a) {
        var i = Jt(["base"], h, a),
          s = Jt(["strut"]);
        return (
          (s.style.height = U(i.height + i.depth)),
          i.depth && (s.style.verticalAlign = U(-i.depth)),
          i.children.unshift(s),
          i
        );
      }
      function Mi(h, a) {
        var i = null;
        h.length === 1 &&
          h[0].type === "tag" &&
          ((i = h[0].tag), (h = h[0].body));
        var s = Ge(h, a, "root"),
          u;
        s.length === 2 && s[1].hasClass("tag") && (u = s.pop());
        for (var c = [], f = [], y = 0; y < s.length; y++)
          if (
            (f.push(s[y]),
            s[y].hasClass("mbin") ||
              s[y].hasClass("mrel") ||
              s[y].hasClass("allowbreak"))
          ) {
            for (
              var x = !1;
              y < s.length - 1 &&
              s[y + 1].hasClass("mspace") &&
              !s[y + 1].hasClass("newline");

            )
              y++, f.push(s[y]), s[y].hasClass("nobreak") && (x = !0);
            x || (c.push(Fa(f, a)), (f = []));
          } else
            s[y].hasClass("newline") &&
              (f.pop(),
              f.length > 0 && (c.push(Fa(f, a)), (f = [])),
              c.push(s[y]));
        f.length > 0 && c.push(Fa(f, a));
        var C;
        i
          ? ((C = Fa(Ge(i, a, !0))), (C.classes = ["tag"]), c.push(C))
          : u && c.push(u);
        var F = Jt(["katex-html"], c);
        if ((F.setAttribute("aria-hidden", "true"), C)) {
          var T = C.children[0];
          (T.style.height = U(F.height + F.depth)),
            F.depth && (T.style.verticalAlign = U(-F.depth));
        }
        return F;
      }
      function ro(h) {
        return new fr(h);
      }
      var mt = (function () {
          function h(i, s, u) {
            (this.type = void 0),
              (this.attributes = void 0),
              (this.children = void 0),
              (this.classes = void 0),
              (this.type = i),
              (this.attributes = {}),
              (this.children = s || []),
              (this.classes = u || []);
          }
          var a = h.prototype;
          return (
            (a.setAttribute = function (s, u) {
              this.attributes[s] = u;
            }),
            (a.getAttribute = function (s) {
              return this.attributes[s];
            }),
            (a.toNode = function () {
              var s = document.createElementNS(
                "http://www.w3.org/1998/Math/MathML",
                this.type
              );
              for (var u in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, u) &&
                  s.setAttribute(u, this.attributes[u]);
              this.classes.length > 0 && (s.className = hr(this.classes));
              for (var c = 0; c < this.children.length; c++)
                s.appendChild(this.children[c].toNode());
              return s;
            }),
            (a.toMarkup = function () {
              var s = "<" + this.type;
              for (var u in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, u) &&
                  ((s += " " + u + '="'),
                  (s += O.escape(this.attributes[u])),
                  (s += '"'));
              this.classes.length > 0 &&
                (s += ' class ="' + O.escape(hr(this.classes)) + '"'),
                (s += ">");
              for (var c = 0; c < this.children.length; c++)
                s += this.children[c].toMarkup();
              return (s += "</" + this.type + ">"), s;
            }),
            (a.toText = function () {
              return this.children
                .map(function (s) {
                  return s.toText();
                })
                .join("");
            }),
            h
          );
        })(),
        Rn = (function () {
          function h(i) {
            (this.text = void 0), (this.text = i);
          }
          var a = h.prototype;
          return (
            (a.toNode = function () {
              return document.createTextNode(this.text);
            }),
            (a.toMarkup = function () {
              return O.escape(this.toText());
            }),
            (a.toText = function () {
              return this.text;
            }),
            h
          );
        })(),
        Cp = (function () {
          function h(i) {
            (this.width = void 0),
              (this.character = void 0),
              (this.width = i),
              i >= 0.05555 && i <= 0.05556
                ? (this.character = "\u200A")
                : i >= 0.1666 && i <= 0.1667
                ? (this.character = "\u2009")
                : i >= 0.2222 && i <= 0.2223
                ? (this.character = "\u2005")
                : i >= 0.2777 && i <= 0.2778
                ? (this.character = "\u2005\u200A")
                : i >= -0.05556 && i <= -0.05555
                ? (this.character = "\u200A\u2063")
                : i >= -0.1667 && i <= -0.1666
                ? (this.character = "\u2009\u2063")
                : i >= -0.2223 && i <= -0.2222
                ? (this.character = "\u205F\u2063")
                : i >= -0.2778 && i <= -0.2777
                ? (this.character = "\u2005\u2063")
                : (this.character = null);
          }
          var a = h.prototype;
          return (
            (a.toNode = function () {
              if (this.character)
                return document.createTextNode(this.character);
              var s = document.createElementNS(
                "http://www.w3.org/1998/Math/MathML",
                "mspace"
              );
              return s.setAttribute("width", U(this.width)), s;
            }),
            (a.toMarkup = function () {
              return this.character
                ? "<mtext>" + this.character + "</mtext>"
                : '<mspace width="' + U(this.width) + '"/>';
            }),
            (a.toText = function () {
              return this.character ? this.character : " ";
            }),
            h
          );
        })(),
        $ = {
          MathNode: mt,
          TextNode: Rn,
          SpaceNode: Cp,
          newDocumentFragment: ro,
        },
        gt = function (a, i, s) {
          return (
            Re[i][a] &&
              Re[i][a].replace &&
              a.charCodeAt(0) !== 55349 &&
              !(
                Hs.hasOwnProperty(a) &&
                s &&
                ((s.fontFamily && s.fontFamily.substr(4, 2) === "tt") ||
                  (s.font && s.font.substr(4, 2) === "tt"))
              ) &&
              (a = Re[i][a].replace),
            new $.TextNode(a)
          );
        },
        Oi = function (a) {
          return a.length === 1 ? a[0] : new $.MathNode("mrow", a);
        },
        _i = function (a, i) {
          if (i.fontFamily === "texttt") return "monospace";
          if (i.fontFamily === "textsf")
            return i.fontShape === "textit" && i.fontWeight === "textbf"
              ? "sans-serif-bold-italic"
              : i.fontShape === "textit"
              ? "sans-serif-italic"
              : i.fontWeight === "textbf"
              ? "bold-sans-serif"
              : "sans-serif";
          if (i.fontShape === "textit" && i.fontWeight === "textbf")
            return "bold-italic";
          if (i.fontShape === "textit") return "italic";
          if (i.fontWeight === "textbf") return "bold";
          var s = i.font;
          if (!s || s === "mathnormal") return null;
          var u = a.mode;
          if (s === "mathit") return "italic";
          if (s === "boldsymbol")
            return a.type === "textord" ? "bold" : "bold-italic";
          if (s === "mathbf") return "bold";
          if (s === "mathbb") return "double-struck";
          if (s === "mathfrak") return "fraktur";
          if (s === "mathscr" || s === "mathcal") return "script";
          if (s === "mathsf") return "sans-serif";
          if (s === "mathtt") return "monospace";
          var c = a.text;
          if (O.contains(["\\imath", "\\jmath"], c)) return null;
          Re[u][c] && Re[u][c].replace && (c = Re[u][c].replace);
          var f = M.fontMap[s].fontName;
          return xi(c, f, u) ? M.fontMap[s].variant : null;
        },
        ut = function (a, i, s) {
          if (a.length === 1) {
            var u = Ae(a[0], i);
            return (
              s &&
                u instanceof mt &&
                u.type === "mo" &&
                (u.setAttribute("lspace", "0em"),
                u.setAttribute("rspace", "0em")),
              [u]
            );
          }
          for (var c = [], f, y = 0; y < a.length; y++) {
            var x = Ae(a[y], i);
            if (x instanceof mt && f instanceof mt) {
              if (
                x.type === "mtext" &&
                f.type === "mtext" &&
                x.getAttribute("mathvariant") === f.getAttribute("mathvariant")
              ) {
                var C;
                (C = f.children).push.apply(C, x.children);
                continue;
              } else if (x.type === "mn" && f.type === "mn") {
                var F;
                (F = f.children).push.apply(F, x.children);
                continue;
              } else if (
                x.type === "mi" &&
                x.children.length === 1 &&
                f.type === "mn"
              ) {
                var T = x.children[0];
                if (T instanceof Rn && T.text === ".") {
                  var z;
                  (z = f.children).push.apply(z, x.children);
                  continue;
                }
              } else if (f.type === "mi" && f.children.length === 1) {
                var P = f.children[0];
                if (
                  P instanceof Rn &&
                  P.text === "\u0338" &&
                  (x.type === "mo" || x.type === "mi" || x.type === "mn")
                ) {
                  var I = x.children[0];
                  I instanceof Rn &&
                    I.text.length > 0 &&
                    ((I.text = I.text.slice(0, 1) + "\u0338" + I.text.slice(1)),
                    c.pop());
                }
              }
            }
            c.push(x), (f = x);
          }
          return c;
        },
        vr = function (a, i, s) {
          return Oi(ut(a, i, s));
        },
        Ae = function (a, i) {
          if (!a) return new $.MathNode("mrow");
          if (Ea[a.type]) {
            var s = Ea[a.type](a, i);
            return s;
          } else throw new r("Got group of unknown type: '" + a.type + "'");
        };
      function no(h, a, i, s, u) {
        var c = ut(h, i),
          f;
        c.length === 1 &&
        c[0] instanceof mt &&
        O.contains(["mrow", "mtable"], c[0].type)
          ? (f = c[0])
          : (f = new $.MathNode("mrow", c));
        var y = new $.MathNode("annotation", [new $.TextNode(a)]);
        y.setAttribute("encoding", "application/x-tex");
        var x = new $.MathNode("semantics", [f, y]),
          C = new $.MathNode("math", [x]);
        C.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"),
          s && C.setAttribute("display", "block");
        var F = u ? "katex" : "katex-mathml";
        return M.makeSpan([F], [C]);
      }
      var ao = function (a) {
          return new Xd({
            style: a.displayMode ? ee.DISPLAY : ee.TEXT,
            maxSize: a.maxSize,
            minRuleThickness: a.minRuleThickness,
          });
        },
        io = function (a, i) {
          if (i.displayMode) {
            var s = ["katex-display"];
            i.leqno && s.push("leqno"),
              i.fleqn && s.push("fleqn"),
              (a = M.makeSpan(s, [a]));
          }
          return a;
        },
        Sp = function (a, i, s) {
          var u = ao(s),
            c;
          if (s.output === "mathml") return no(a, i, u, s.displayMode, !0);
          if (s.output === "html") {
            var f = Mi(a, u);
            c = M.makeSpan(["katex"], [f]);
          } else {
            var y = no(a, i, u, s.displayMode, !1),
              x = Mi(a, u);
            c = M.makeSpan(["katex"], [y, x]);
          }
          return io(c, s);
        },
        kp = function (a, i, s) {
          var u = ao(s),
            c = Mi(a, u),
            f = M.makeSpan(["katex"], [c]);
          return io(f, s);
        },
        v2 = null,
        Ep = {
          widehat: "^",
          widecheck: "\u02C7",
          widetilde: "~",
          utilde: "~",
          overleftarrow: "\u2190",
          underleftarrow: "\u2190",
          xleftarrow: "\u2190",
          overrightarrow: "\u2192",
          underrightarrow: "\u2192",
          xrightarrow: "\u2192",
          underbrace: "\u23DF",
          overbrace: "\u23DE",
          overgroup: "\u23E0",
          undergroup: "\u23E1",
          overleftrightarrow: "\u2194",
          underleftrightarrow: "\u2194",
          xleftrightarrow: "\u2194",
          Overrightarrow: "\u21D2",
          xRightarrow: "\u21D2",
          overleftharpoon: "\u21BC",
          xleftharpoonup: "\u21BC",
          overrightharpoon: "\u21C0",
          xrightharpoonup: "\u21C0",
          xLeftarrow: "\u21D0",
          xLeftrightarrow: "\u21D4",
          xhookleftarrow: "\u21A9",
          xhookrightarrow: "\u21AA",
          xmapsto: "\u21A6",
          xrightharpoondown: "\u21C1",
          xleftharpoondown: "\u21BD",
          xrightleftharpoons: "\u21CC",
          xleftrightharpoons: "\u21CB",
          xtwoheadleftarrow: "\u219E",
          xtwoheadrightarrow: "\u21A0",
          xlongequal: "=",
          xtofrom: "\u21C4",
          xrightleftarrows: "\u21C4",
          xrightequilibrium: "\u21CC",
          xleftequilibrium: "\u21CB",
          "\\cdrightarrow": "\u2192",
          "\\cdleftarrow": "\u2190",
          "\\cdlongequal": "=",
        },
        Ap = function (a) {
          var i = new $.MathNode("mo", [
            new $.TextNode(Ep[a.replace(/^\\/, "")]),
          ]);
          return i.setAttribute("stretchy", "true"), i;
        },
        Fp = {
          overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
          overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
          underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
          underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
          xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
          "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
          xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
          "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
          Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
          xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
          xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
          overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
          xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
          xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
          overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
          xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
          xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
          xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
          "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
          xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
          xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
          overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
          overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
          underbrace: [
            ["leftbraceunder", "midbraceunder", "rightbraceunder"],
            1.6,
            548,
          ],
          underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
          xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
          xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
          xrightleftharpoons: [
            ["leftharpoondownplus", "rightharpoonplus"],
            1.75,
            716,
          ],
          xleftrightharpoons: [
            ["leftharpoonplus", "rightharpoondownplus"],
            1.75,
            716,
          ],
          xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
          xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
          overlinesegment: [
            ["leftlinesegment", "rightlinesegment"],
            0.888,
            522,
          ],
          underlinesegment: [
            ["leftlinesegment", "rightlinesegment"],
            0.888,
            522,
          ],
          overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
          undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
          xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
          xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
          xrightleftarrows: [
            ["baraboveleftarrow", "rightarrowabovebar"],
            1.75,
            901,
          ],
          xrightequilibrium: [
            ["baraboveshortleftharpoon", "rightharpoonaboveshortbar"],
            1.75,
            716,
          ],
          xleftequilibrium: [
            ["shortbaraboveleftharpoon", "shortrightharpoonabovebar"],
            1.75,
            716,
          ],
        },
        Bp = function (a) {
          return a.type === "ordgroup" ? a.body.length : 1;
        },
        Tp = function (a, i) {
          function s() {
            var x = 4e5,
              C = a.label.substr(1);
            if (
              O.contains(["widehat", "widecheck", "widetilde", "utilde"], C)
            ) {
              var F = a,
                T = Bp(F.base),
                z,
                P,
                I;
              if (T > 5)
                C === "widehat" || C === "widecheck"
                  ? ((z = 420), (x = 2364), (I = 0.42), (P = C + "4"))
                  : ((z = 312), (x = 2340), (I = 0.34), (P = "tilde4"));
              else {
                var V = [1, 1, 2, 2, 3, 3][T];
                C === "widehat" || C === "widecheck"
                  ? ((x = [0, 1062, 2364, 2364, 2364][V]),
                    (z = [0, 239, 300, 360, 420][V]),
                    (I = [0, 0.24, 0.3, 0.3, 0.36, 0.42][V]),
                    (P = C + V))
                  : ((x = [0, 600, 1033, 2339, 2340][V]),
                    (z = [0, 260, 286, 306, 312][V]),
                    (I = [0, 0.26, 0.286, 0.3, 0.306, 0.34][V]),
                    (P = "tilde" + V));
              }
              var G = new Vr(P),
                K = new mr([G], {
                  width: "100%",
                  height: U(I),
                  viewBox: "0 0 " + x + " " + z,
                  preserveAspectRatio: "none",
                });
              return {
                span: M.makeSvgSpan([], [K], i),
                minWidth: 0,
                height: I,
              };
            } else {
              var Q = [],
                te = Fp[C],
                ye = te[0],
                Se = te[1],
                _e = te[2],
                Ce = _e / 1e3,
                ke = ye.length,
                Ie,
                Fe;
              if (ke === 1) {
                var lt = te[3];
                (Ie = ["hide-tail"]), (Fe = [lt]);
              } else if (ke === 2)
                (Ie = ["halfarrow-left", "halfarrow-right"]),
                  (Fe = ["xMinYMin", "xMaxYMin"]);
              else if (ke === 3)
                (Ie = ["brace-left", "brace-center", "brace-right"]),
                  (Fe = ["xMinYMin", "xMidYMin", "xMaxYMin"]);
              else
                throw new Error(
                  `Correct katexImagesData or update code here to support
                    ` +
                    ke +
                    " children."
                );
              for (var ct = 0; ct < ke; ct++) {
                var xr = new Vr(ye[ct]),
                  zt = new mr([xr], {
                    width: "400em",
                    height: U(Ce),
                    viewBox: "0 0 " + x + " " + _e,
                    preserveAspectRatio: Fe[ct] + " slice",
                  }),
                  dt = M.makeSvgSpan([Ie[ct]], [zt], i);
                if (ke === 1) return { span: dt, minWidth: Se, height: Ce };
                (dt.style.height = U(Ce)), Q.push(dt);
              }
              return {
                span: M.makeSpan(["stretchy"], Q, i),
                minWidth: Se,
                height: Ce,
              };
            }
          }
          var u = s(),
            c = u.span,
            f = u.minWidth,
            y = u.height;
          return (
            (c.height = y),
            (c.style.height = U(y)),
            f > 0 && (c.style.minWidth = U(f)),
            c
          );
        },
        Np = function (a, i, s, u, c) {
          var f,
            y = a.height + a.depth + s + u;
          if (/fbox|color|angl/.test(i)) {
            if (((f = M.makeSpan(["stretchy", i], [], c)), i === "fbox")) {
              var x = c.color && c.getColor();
              x && (f.style.borderColor = x);
            }
          } else {
            var C = [];
            /^[bx]cancel$/.test(i) &&
              C.push(
                new Si({
                  x1: "0",
                  y1: "0",
                  x2: "100%",
                  y2: "100%",
                  "stroke-width": "0.046em",
                })
              ),
              /^x?cancel$/.test(i) &&
                C.push(
                  new Si({
                    x1: "0",
                    y1: "100%",
                    x2: "100%",
                    y2: "0",
                    "stroke-width": "0.046em",
                  })
                );
            var F = new mr(C, { width: "100%", height: U(y) });
            f = M.makeSvgSpan([], [F], c);
          }
          return (f.height = y), (f.style.height = U(y)), f;
        },
        Xt = { encloseSpan: Np, mathMLnode: Ap, svgSpan: Tp };
      function ce(h, a) {
        if (!h || h.type !== a)
          throw new Error(
            "Expected node of type " +
              a +
              ", but got " +
              (h ? "node of type " + h.type : String(h))
          );
        return h;
      }
      function zi(h) {
        var a = Ba(h);
        if (!a)
          throw new Error(
            "Expected node of symbol group type, but got " +
              (h ? "node of type " + h.type : String(h))
          );
        return a;
      }
      function Ba(h) {
        return h && (h.type === "atom" || rp.hasOwnProperty(h.type)) ? h : null;
      }
      var Ri = function (a, i) {
          var s, u, c;
          a && a.type === "supsub"
            ? ((u = ce(a.base, "accent")),
              (s = u.base),
              (a.base = s),
              (c = ep(ve(a, i))),
              (a.base = u))
            : ((u = ce(a, "accent")), (s = u.base));
          var f = ve(s, i.havingCrampedStyle()),
            y = u.isShifty && O.isCharacterBox(s),
            x = 0;
          if (y) {
            var C = O.getBaseElem(s),
              F = ve(C, i.havingCrampedStyle());
            x = qs(F).skew;
          }
          var T = u.label === "\\c",
            z = T
              ? f.height + f.depth
              : Math.min(f.height, i.fontMetrics().xHeight),
            P;
          if (u.isStretchy)
            (P = Xt.svgSpan(u, i)),
              (P = M.makeVList(
                {
                  positionType: "firstBaseline",
                  children: [
                    { type: "elem", elem: f },
                    {
                      type: "elem",
                      elem: P,
                      wrapperClasses: ["svg-align"],
                      wrapperStyle:
                        x > 0
                          ? {
                              width: "calc(100% - " + U(2 * x) + ")",
                              marginLeft: U(2 * x),
                            }
                          : void 0,
                    },
                  ],
                },
                i
              ));
          else {
            var I, V;
            u.label === "\\vec"
              ? ((I = M.staticSvg("vec", i)), (V = M.svgData.vec[1]))
              : ((I = M.makeOrd({ mode: u.mode, text: u.label }, i, "textord")),
                (I = qs(I)),
                (I.italic = 0),
                (V = I.width),
                T && (z += I.depth)),
              (P = M.makeSpan(["accent-body"], [I]));
            var G = u.label === "\\textcircled";
            G && (P.classes.push("accent-full"), (z = f.height));
            var K = x;
            G || (K -= V / 2),
              (P.style.left = U(K)),
              u.label === "\\textcircled" && (P.style.top = ".2em"),
              (P = M.makeVList(
                {
                  positionType: "firstBaseline",
                  children: [
                    { type: "elem", elem: f },
                    { type: "kern", size: -z },
                    { type: "elem", elem: P },
                  ],
                },
                i
              ));
          }
          var Q = M.makeSpan(["mord", "accent"], [P], i);
          return c
            ? ((c.children[0] = Q),
              (c.height = Math.max(Q.height, c.height)),
              (c.classes[0] = "mord"),
              c)
            : Q;
        },
        so = function (a, i) {
          var s = a.isStretchy
              ? Xt.mathMLnode(a.label)
              : new $.MathNode("mo", [gt(a.label, a.mode)]),
            u = new $.MathNode("mover", [Ae(a.base, i), s]);
          return u.setAttribute("accent", "true"), u;
        },
        Mp = new RegExp(
          [
            "\\acute",
            "\\grave",
            "\\ddot",
            "\\tilde",
            "\\bar",
            "\\breve",
            "\\check",
            "\\hat",
            "\\vec",
            "\\dot",
            "\\mathring",
          ]
            .map(function (h) {
              return "\\" + h;
            })
            .join("|")
        );
      Z({
        type: "accent",
        names: [
          "\\acute",
          "\\grave",
          "\\ddot",
          "\\tilde",
          "\\bar",
          "\\breve",
          "\\check",
          "\\hat",
          "\\vec",
          "\\dot",
          "\\mathring",
          "\\widecheck",
          "\\widehat",
          "\\widetilde",
          "\\overrightarrow",
          "\\overleftarrow",
          "\\Overrightarrow",
          "\\overleftrightarrow",
          "\\overgroup",
          "\\overlinesegment",
          "\\overleftharpoon",
          "\\overrightharpoon",
        ],
        props: { numArgs: 1 },
        handler: function (a, i) {
          var s = Aa(i[0]),
            u = !Mp.test(a.funcName),
            c =
              !u ||
              a.funcName === "\\widehat" ||
              a.funcName === "\\widetilde" ||
              a.funcName === "\\widecheck";
          return {
            type: "accent",
            mode: a.parser.mode,
            label: a.funcName,
            isStretchy: u,
            isShifty: c,
            base: s,
          };
        },
        htmlBuilder: Ri,
        mathmlBuilder: so,
      }),
        Z({
          type: "accent",
          names: [
            "\\'",
            "\\`",
            "\\^",
            "\\~",
            "\\=",
            "\\u",
            "\\.",
            '\\"',
            "\\c",
            "\\r",
            "\\H",
            "\\v",
            "\\textcircled",
          ],
          props: {
            numArgs: 1,
            allowedInText: !0,
            allowedInMath: !0,
            argTypes: ["primitive"],
          },
          handler: function (a, i) {
            var s = i[0],
              u = a.parser.mode;
            return (
              u === "math" &&
                (a.parser.settings.reportNonstrict(
                  "mathVsTextAccents",
                  "LaTeX's accent " + a.funcName + " works only in text mode"
                ),
                (u = "text")),
              {
                type: "accent",
                mode: u,
                label: a.funcName,
                isStretchy: !1,
                isShifty: !0,
                base: s,
              }
            );
          },
          htmlBuilder: Ri,
          mathmlBuilder: so,
        }),
        Z({
          type: "accentUnder",
          names: [
            "\\underleftarrow",
            "\\underrightarrow",
            "\\underleftrightarrow",
            "\\undergroup",
            "\\underlinesegment",
            "\\utilde",
          ],
          props: { numArgs: 1 },
          handler: function (a, i) {
            var s = a.parser,
              u = a.funcName,
              c = i[0];
            return { type: "accentUnder", mode: s.mode, label: u, base: c };
          },
          htmlBuilder: function (a, i) {
            var s = ve(a.base, i),
              u = Xt.svgSpan(a, i),
              c = a.label === "\\utilde" ? 0.12 : 0,
              f = M.makeVList(
                {
                  positionType: "top",
                  positionData: s.height,
                  children: [
                    { type: "elem", elem: u, wrapperClasses: ["svg-align"] },
                    { type: "kern", size: c },
                    { type: "elem", elem: s },
                  ],
                },
                i
              );
            return M.makeSpan(["mord", "accentunder"], [f], i);
          },
          mathmlBuilder: function (a, i) {
            var s = Xt.mathMLnode(a.label),
              u = new $.MathNode("munder", [Ae(a.base, i), s]);
            return u.setAttribute("accentunder", "true"), u;
          },
        });
      var Ta = function (a) {
        var i = new $.MathNode("mpadded", a ? [a] : []);
        return (
          i.setAttribute("width", "+0.6em"),
          i.setAttribute("lspace", "0.3em"),
          i
        );
      };
      Z({
        type: "xArrow",
        names: [
          "\\xleftarrow",
          "\\xrightarrow",
          "\\xLeftarrow",
          "\\xRightarrow",
          "\\xleftrightarrow",
          "\\xLeftrightarrow",
          "\\xhookleftarrow",
          "\\xhookrightarrow",
          "\\xmapsto",
          "\\xrightharpoondown",
          "\\xrightharpoonup",
          "\\xleftharpoondown",
          "\\xleftharpoonup",
          "\\xrightleftharpoons",
          "\\xleftrightharpoons",
          "\\xlongequal",
          "\\xtwoheadrightarrow",
          "\\xtwoheadleftarrow",
          "\\xtofrom",
          "\\xrightleftarrows",
          "\\xrightequilibrium",
          "\\xleftequilibrium",
          "\\\\cdrightarrow",
          "\\\\cdleftarrow",
          "\\\\cdlongequal",
        ],
        props: { numArgs: 1, numOptionalArgs: 1 },
        handler: function (a, i, s) {
          var u = a.parser,
            c = a.funcName;
          return {
            type: "xArrow",
            mode: u.mode,
            label: c,
            body: i[0],
            below: s[0],
          };
        },
        htmlBuilder: function (a, i) {
          var s = i.style,
            u = i.havingStyle(s.sup()),
            c = M.wrapFragment(ve(a.body, u, i), i),
            f = a.label.slice(0, 2) === "\\x" ? "x" : "cd";
          c.classes.push(f + "-arrow-pad");
          var y;
          a.below &&
            ((u = i.havingStyle(s.sub())),
            (y = M.wrapFragment(ve(a.below, u, i), i)),
            y.classes.push(f + "-arrow-pad"));
          var x = Xt.svgSpan(a, i),
            C = -i.fontMetrics().axisHeight + 0.5 * x.height,
            F = -i.fontMetrics().axisHeight - 0.5 * x.height - 0.111;
          (c.depth > 0.25 || a.label === "\\xleftequilibrium") &&
            (F -= c.depth);
          var T;
          if (y) {
            var z =
              -i.fontMetrics().axisHeight + y.height + 0.5 * x.height + 0.111;
            T = M.makeVList(
              {
                positionType: "individualShift",
                children: [
                  { type: "elem", elem: c, shift: F },
                  { type: "elem", elem: x, shift: C },
                  { type: "elem", elem: y, shift: z },
                ],
              },
              i
            );
          } else
            T = M.makeVList(
              {
                positionType: "individualShift",
                children: [
                  { type: "elem", elem: c, shift: F },
                  { type: "elem", elem: x, shift: C },
                ],
              },
              i
            );
          return (
            T.children[0].children[0].children[1].classes.push("svg-align"),
            M.makeSpan(["mrel", "x-arrow"], [T], i)
          );
        },
        mathmlBuilder: function (a, i) {
          var s = Xt.mathMLnode(a.label);
          s.setAttribute(
            "minsize",
            a.label.charAt(0) === "x" ? "1.75em" : "3.0em"
          );
          var u;
          if (a.body) {
            var c = Ta(Ae(a.body, i));
            if (a.below) {
              var f = Ta(Ae(a.below, i));
              u = new $.MathNode("munderover", [s, f, c]);
            } else u = new $.MathNode("mover", [s, c]);
          } else if (a.below) {
            var y = Ta(Ae(a.below, i));
            u = new $.MathNode("munder", [s, y]);
          } else (u = Ta()), (u = new $.MathNode("mover", [s, u]));
          return u;
        },
      });
      var Op = {
          ">": "\\\\cdrightarrow",
          "<": "\\\\cdleftarrow",
          "=": "\\\\cdlongequal",
          A: "\\uparrow",
          V: "\\downarrow",
          "|": "\\Vert",
          ".": "no arrow",
        },
        oo = function () {
          return { type: "styling", body: [], mode: "math", style: "display" };
        },
        uo = function (a) {
          return a.type === "textord" && a.text === "@";
        },
        _p = function (a, i) {
          return (a.type === "mathord" || a.type === "atom") && a.text === i;
        };
      function zp(h, a, i) {
        var s = Op[h];
        switch (s) {
          case "\\\\cdrightarrow":
          case "\\\\cdleftarrow":
            return i.callFunction(s, [a[0]], [a[1]]);
          case "\\uparrow":
          case "\\downarrow": {
            var u = i.callFunction("\\\\cdleft", [a[0]], []),
              c = { type: "atom", text: s, mode: "math", family: "rel" },
              f = i.callFunction("\\Big", [c], []),
              y = i.callFunction("\\\\cdright", [a[1]], []),
              x = { type: "ordgroup", mode: "math", body: [u, f, y] };
            return i.callFunction("\\\\cdparent", [x], []);
          }
          case "\\\\cdlongequal":
            return i.callFunction("\\\\cdlongequal", [], []);
          case "\\Vert": {
            var C = { type: "textord", text: "\\Vert", mode: "math" };
            return i.callFunction("\\Big", [C], []);
          }
          default:
            return { type: "textord", text: " ", mode: "math" };
        }
      }
      function Rp(h) {
        var a = [];
        for (
          h.gullet.beginGroup(),
            h.gullet.macros.set("\\cr", "\\\\\\relax"),
            h.gullet.beginGroup();
          ;

        ) {
          a.push(h.parseExpression(!1, "\\\\")),
            h.gullet.endGroup(),
            h.gullet.beginGroup();
          var i = h.fetch().text;
          if (i === "&" || i === "\\\\") h.consume();
          else if (i === "\\end") {
            a[a.length - 1].length === 0 && a.pop();
            break;
          } else throw new r("Expected \\\\ or \\cr or \\end", h.nextToken);
        }
        for (var s = [], u = [s], c = 0; c < a.length; c++) {
          for (var f = a[c], y = oo(), x = 0; x < f.length; x++)
            if (!uo(f[x])) y.body.push(f[x]);
            else {
              s.push(y), (x += 1);
              var C = zi(f[x]).text,
                F = new Array(2);
              if (
                ((F[0] = { type: "ordgroup", mode: "math", body: [] }),
                (F[1] = { type: "ordgroup", mode: "math", body: [] }),
                !("=|.".indexOf(C) > -1))
              )
                if ("<>AV".indexOf(C) > -1)
                  for (var T = 0; T < 2; T++) {
                    for (var z = !0, P = x + 1; P < f.length; P++) {
                      if (_p(f[P], C)) {
                        (z = !1), (x = P);
                        break;
                      }
                      if (uo(f[P]))
                        throw new r(
                          "Missing a " +
                            C +
                            " character to complete a CD arrow.",
                          f[P]
                        );
                      F[T].body.push(f[P]);
                    }
                    if (z)
                      throw new r(
                        "Missing a " + C + " character to complete a CD arrow.",
                        f[x]
                      );
                  }
                else throw new r('Expected one of "<>AV=|." after @', f[x]);
              var I = zp(C, F, h),
                V = {
                  type: "styling",
                  body: [I],
                  mode: "math",
                  style: "display",
                };
              s.push(V), (y = oo());
            }
          c % 2 === 0 ? s.push(y) : s.shift(), (s = []), u.push(s);
        }
        h.gullet.endGroup(), h.gullet.endGroup();
        var G = new Array(u[0].length).fill({
          type: "align",
          align: "c",
          pregap: 0.25,
          postgap: 0.25,
        });
        return {
          type: "array",
          mode: "math",
          body: u,
          arraystretch: 1,
          addJot: !0,
          rowGaps: [null],
          cols: G,
          colSeparationType: "CD",
          hLinesBeforeRow: new Array(u.length + 1).fill([]),
        };
      }
      Z({
        type: "cdlabel",
        names: ["\\\\cdleft", "\\\\cdright"],
        props: { numArgs: 1 },
        handler: function (a, i) {
          var s = a.parser,
            u = a.funcName;
          return {
            type: "cdlabel",
            mode: s.mode,
            side: u.slice(4),
            label: i[0],
          };
        },
        htmlBuilder: function (a, i) {
          var s = i.havingStyle(i.style.sup()),
            u = M.wrapFragment(ve(a.label, s, i), i);
          return (
            u.classes.push("cd-label-" + a.side),
            (u.style.bottom = U(0.8 - u.depth)),
            (u.height = 0),
            (u.depth = 0),
            u
          );
        },
        mathmlBuilder: function (a, i) {
          var s = new $.MathNode("mrow", [Ae(a.label, i)]);
          return (
            (s = new $.MathNode("mpadded", [s])),
            s.setAttribute("width", "0"),
            a.side === "left" && s.setAttribute("lspace", "-1width"),
            s.setAttribute("voffset", "0.7em"),
            (s = new $.MathNode("mstyle", [s])),
            s.setAttribute("displaystyle", "false"),
            s.setAttribute("scriptlevel", "1"),
            s
          );
        },
      }),
        Z({
          type: "cdlabelparent",
          names: ["\\\\cdparent"],
          props: { numArgs: 1 },
          handler: function (a, i) {
            var s = a.parser;
            return { type: "cdlabelparent", mode: s.mode, fragment: i[0] };
          },
          htmlBuilder: function (a, i) {
            var s = M.wrapFragment(ve(a.fragment, i), i);
            return s.classes.push("cd-vert-arrow"), s;
          },
          mathmlBuilder: function (a, i) {
            return new $.MathNode("mrow", [Ae(a.fragment, i)]);
          },
        }),
        Z({
          type: "textord",
          names: ["\\@char"],
          props: { numArgs: 1, allowedInText: !0 },
          handler: function (a, i) {
            for (
              var s = a.parser,
                u = ce(i[0], "ordgroup"),
                c = u.body,
                f = "",
                y = 0;
              y < c.length;
              y++
            ) {
              var x = ce(c[y], "textord");
              f += x.text;
            }
            var C = parseInt(f),
              F;
            if (isNaN(C)) throw new r("\\@char has non-numeric argument " + f);
            if (C < 0 || C >= 1114111)
              throw new r("\\@char with invalid code point " + f);
            return (
              C <= 65535
                ? (F = String.fromCharCode(C))
                : ((C -= 65536),
                  (F = String.fromCharCode(
                    (C >> 10) + 55296,
                    (C & 1023) + 56320
                  ))),
              { type: "textord", mode: s.mode, text: F }
            );
          },
        });
      var lo = function (a, i) {
          var s = Ge(a.body, i.withColor(a.color), !1);
          return M.makeFragment(s);
        },
        co = function (a, i) {
          var s = ut(a.body, i.withColor(a.color)),
            u = new $.MathNode("mstyle", s);
          return u.setAttribute("mathcolor", a.color), u;
        };
      Z({
        type: "color",
        names: ["\\textcolor"],
        props: {
          numArgs: 2,
          allowedInText: !0,
          argTypes: ["color", "original"],
        },
        handler: function (a, i) {
          var s = a.parser,
            u = ce(i[0], "color-token").color,
            c = i[1];
          return { type: "color", mode: s.mode, color: u, body: $e(c) };
        },
        htmlBuilder: lo,
        mathmlBuilder: co,
      }),
        Z({
          type: "color",
          names: ["\\color"],
          props: { numArgs: 1, allowedInText: !0, argTypes: ["color"] },
          handler: function (a, i) {
            var s = a.parser,
              u = a.breakOnTokenText,
              c = ce(i[0], "color-token").color;
            s.gullet.macros.set("\\current@color", c);
            var f = s.parseExpression(!0, u);
            return { type: "color", mode: s.mode, color: c, body: f };
          },
          htmlBuilder: lo,
          mathmlBuilder: co,
        }),
        Z({
          type: "cr",
          names: ["\\\\"],
          props: {
            numArgs: 0,
            numOptionalArgs: 1,
            argTypes: ["size"],
            allowedInText: !0,
          },
          handler: function (a, i, s) {
            var u = a.parser,
              c = s[0],
              f =
                !u.settings.displayMode ||
                !u.settings.useStrictBehavior(
                  "newLineInDisplayMode",
                  "In LaTeX, \\\\ or \\newline does nothing in display mode"
                );
            return {
              type: "cr",
              mode: u.mode,
              newLine: f,
              size: c && ce(c, "size").value,
            };
          },
          htmlBuilder: function (a, i) {
            var s = M.makeSpan(["mspace"], [], i);
            return (
              a.newLine &&
                (s.classes.push("newline"),
                a.size && (s.style.marginTop = U(ze(a.size, i)))),
              s
            );
          },
          mathmlBuilder: function (a, i) {
            var s = new $.MathNode("mspace");
            return (
              a.newLine &&
                (s.setAttribute("linebreak", "newline"),
                a.size && s.setAttribute("height", U(ze(a.size, i)))),
              s
            );
          },
        });
      var Pi = {
          "\\global": "\\global",
          "\\long": "\\\\globallong",
          "\\\\globallong": "\\\\globallong",
          "\\def": "\\gdef",
          "\\gdef": "\\gdef",
          "\\edef": "\\xdef",
          "\\xdef": "\\xdef",
          "\\let": "\\\\globallet",
          "\\futurelet": "\\\\globalfuture",
        },
        po = function (a) {
          var i = a.text;
          if (/^(?:[\\{}$&#^_]|EOF)$/.test(i))
            throw new r("Expected a control sequence", a);
          return i;
        },
        Pp = function (a) {
          var i = a.gullet.popToken();
          return (
            i.text === "=" &&
              ((i = a.gullet.popToken()),
              i.text === " " && (i = a.gullet.popToken())),
            i
          );
        },
        fo = function (a, i, s, u) {
          var c = a.gullet.macros.get(s.text);
          c == null &&
            ((s.noexpand = !0),
            (c = {
              tokens: [s],
              numArgs: 0,
              unexpandable: !a.gullet.isExpandable(s.text),
            })),
            a.gullet.macros.set(i, c, u);
        };
      Z({
        type: "internal",
        names: ["\\global", "\\long", "\\\\globallong"],
        props: { numArgs: 0, allowedInText: !0 },
        handler: function (a) {
          var i = a.parser,
            s = a.funcName;
          i.consumeSpaces();
          var u = i.fetch();
          if (Pi[u.text])
            return (
              (s === "\\global" || s === "\\\\globallong") &&
                (u.text = Pi[u.text]),
              ce(i.parseFunction(), "internal")
            );
          throw new r("Invalid token after macro prefix", u);
        },
      }),
        Z({
          type: "internal",
          names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
          props: { numArgs: 0, allowedInText: !0, primitive: !0 },
          handler: function (a) {
            var i = a.parser,
              s = a.funcName,
              u = i.gullet.popToken(),
              c = u.text;
            if (/^(?:[\\{}$&#^_]|EOF)$/.test(c))
              throw new r("Expected a control sequence", u);
            for (var f = 0, y, x = [[]]; i.gullet.future().text !== "{"; )
              if (((u = i.gullet.popToken()), u.text === "#")) {
                if (i.gullet.future().text === "{") {
                  (y = i.gullet.future()), x[f].push("{");
                  break;
                }
                if (((u = i.gullet.popToken()), !/^[1-9]$/.test(u.text)))
                  throw new r('Invalid argument number "' + u.text + '"');
                if (parseInt(u.text) !== f + 1)
                  throw new r('Argument number "' + u.text + '" out of order');
                f++, x.push([]);
              } else {
                if (u.text === "EOF")
                  throw new r("Expected a macro definition");
                x[f].push(u.text);
              }
            var C = i.gullet.consumeArg(),
              F = C.tokens;
            return (
              y && F.unshift(y),
              (s === "\\edef" || s === "\\xdef") &&
                ((F = i.gullet.expandTokens(F)), F.reverse()),
              i.gullet.macros.set(
                c,
                { tokens: F, numArgs: f, delimiters: x },
                s === Pi[s]
              ),
              { type: "internal", mode: i.mode }
            );
          },
        }),
        Z({
          type: "internal",
          names: ["\\let", "\\\\globallet"],
          props: { numArgs: 0, allowedInText: !0, primitive: !0 },
          handler: function (a) {
            var i = a.parser,
              s = a.funcName,
              u = po(i.gullet.popToken());
            i.gullet.consumeSpaces();
            var c = Pp(i);
            return (
              fo(i, u, c, s === "\\\\globallet"),
              { type: "internal", mode: i.mode }
            );
          },
        }),
        Z({
          type: "internal",
          names: ["\\futurelet", "\\\\globalfuture"],
          props: { numArgs: 0, allowedInText: !0, primitive: !0 },
          handler: function (a) {
            var i = a.parser,
              s = a.funcName,
              u = po(i.gullet.popToken()),
              c = i.gullet.popToken(),
              f = i.gullet.popToken();
            return (
              fo(i, u, f, s === "\\\\globalfuture"),
              i.gullet.pushToken(f),
              i.gullet.pushToken(c),
              { type: "internal", mode: i.mode }
            );
          },
        });
      var Pn = function (a, i, s) {
          var u = Re.math[a] && Re.math[a].replace,
            c = xi(u || a, i, s);
          if (!c)
            throw new Error(
              "Unsupported symbol " + a + " and font size " + i + "."
            );
          return c;
        },
        Ii = function (a, i, s, u) {
          var c = s.havingBaseStyle(i),
            f = M.makeSpan(u.concat(c.sizingClasses(s)), [a], s),
            y = c.sizeMultiplier / s.sizeMultiplier;
          return (
            (f.height *= y),
            (f.depth *= y),
            (f.maxFontSize = c.sizeMultiplier),
            f
          );
        },
        ho = function (a, i, s) {
          var u = i.havingBaseStyle(s),
            c =
              (1 - i.sizeMultiplier / u.sizeMultiplier) *
              i.fontMetrics().axisHeight;
          a.classes.push("delimcenter"),
            (a.style.top = U(c)),
            (a.height -= c),
            (a.depth += c);
        },
        Ip = function (a, i, s, u, c, f) {
          var y = M.makeSymbol(a, "Main-Regular", c, u),
            x = Ii(y, i, u, f);
          return s && ho(x, u, i), x;
        },
        jp = function (a, i, s, u) {
          return M.makeSymbol(a, "Size" + i + "-Regular", s, u);
        },
        mo = function (a, i, s, u, c, f) {
          var y = jp(a, i, c, u),
            x = Ii(
              M.makeSpan(["delimsizing", "size" + i], [y], u),
              ee.TEXT,
              u,
              f
            );
          return s && ho(x, u, ee.TEXT), x;
        },
        ji = function (a, i, s) {
          var u;
          i === "Size1-Regular" ? (u = "delim-size1") : (u = "delim-size4");
          var c = M.makeSpan(
            ["delimsizinginner", u],
            [M.makeSpan([], [M.makeSymbol(a, i, s)])]
          );
          return { type: "elem", elem: c };
        },
        Li = function (a, i, s) {
          var u = st["Size4-Regular"][a.charCodeAt(0)]
              ? st["Size4-Regular"][a.charCodeAt(0)][4]
              : st["Size1-Regular"][a.charCodeAt(0)][4],
            c = new Vr("inner", pr(a, Math.round(1e3 * i))),
            f = new mr([c], {
              width: U(u),
              height: U(i),
              style: "width:" + U(u),
              viewBox: "0 0 " + 1e3 * u + " " + Math.round(1e3 * i),
              preserveAspectRatio: "xMinYMin",
            }),
            y = M.makeSvgSpan([], [f], s);
          return (
            (y.height = i),
            (y.style.height = U(i)),
            (y.style.width = U(u)),
            { type: "elem", elem: y }
          );
        },
        $i = 0.008,
        Na = { type: "kern", size: -1 * $i },
        Lp = ["|", "\\lvert", "\\rvert", "\\vert"],
        $p = ["\\|", "\\lVert", "\\rVert", "\\Vert"],
        go = function (a, i, s, u, c, f) {
          var y, x, C, F;
          (y = C = F = a), (x = null);
          var T = "Size1-Regular";
          a === "\\uparrow"
            ? (C = F = "\u23D0")
            : a === "\\Uparrow"
            ? (C = F = "\u2016")
            : a === "\\downarrow"
            ? (y = C = "\u23D0")
            : a === "\\Downarrow"
            ? (y = C = "\u2016")
            : a === "\\updownarrow"
            ? ((y = "\\uparrow"), (C = "\u23D0"), (F = "\\downarrow"))
            : a === "\\Updownarrow"
            ? ((y = "\\Uparrow"), (C = "\u2016"), (F = "\\Downarrow"))
            : O.contains(Lp, a)
            ? (C = "\u2223")
            : O.contains($p, a)
            ? (C = "\u2225")
            : a === "[" || a === "\\lbrack"
            ? ((y = "\u23A1"),
              (C = "\u23A2"),
              (F = "\u23A3"),
              (T = "Size4-Regular"))
            : a === "]" || a === "\\rbrack"
            ? ((y = "\u23A4"),
              (C = "\u23A5"),
              (F = "\u23A6"),
              (T = "Size4-Regular"))
            : a === "\\lfloor" || a === "\u230A"
            ? ((C = y = "\u23A2"), (F = "\u23A3"), (T = "Size4-Regular"))
            : a === "\\lceil" || a === "\u2308"
            ? ((y = "\u23A1"), (C = F = "\u23A2"), (T = "Size4-Regular"))
            : a === "\\rfloor" || a === "\u230B"
            ? ((C = y = "\u23A5"), (F = "\u23A6"), (T = "Size4-Regular"))
            : a === "\\rceil" || a === "\u2309"
            ? ((y = "\u23A4"), (C = F = "\u23A5"), (T = "Size4-Regular"))
            : a === "(" || a === "\\lparen"
            ? ((y = "\u239B"),
              (C = "\u239C"),
              (F = "\u239D"),
              (T = "Size4-Regular"))
            : a === ")" || a === "\\rparen"
            ? ((y = "\u239E"),
              (C = "\u239F"),
              (F = "\u23A0"),
              (T = "Size4-Regular"))
            : a === "\\{" || a === "\\lbrace"
            ? ((y = "\u23A7"),
              (x = "\u23A8"),
              (F = "\u23A9"),
              (C = "\u23AA"),
              (T = "Size4-Regular"))
            : a === "\\}" || a === "\\rbrace"
            ? ((y = "\u23AB"),
              (x = "\u23AC"),
              (F = "\u23AD"),
              (C = "\u23AA"),
              (T = "Size4-Regular"))
            : a === "\\lgroup" || a === "\u27EE"
            ? ((y = "\u23A7"),
              (F = "\u23A9"),
              (C = "\u23AA"),
              (T = "Size4-Regular"))
            : a === "\\rgroup" || a === "\u27EF"
            ? ((y = "\u23AB"),
              (F = "\u23AD"),
              (C = "\u23AA"),
              (T = "Size4-Regular"))
            : a === "\\lmoustache" || a === "\u23B0"
            ? ((y = "\u23A7"),
              (F = "\u23AD"),
              (C = "\u23AA"),
              (T = "Size4-Regular"))
            : (a === "\\rmoustache" || a === "\u23B1") &&
              ((y = "\u23AB"),
              (F = "\u23A9"),
              (C = "\u23AA"),
              (T = "Size4-Regular"));
          var z = Pn(y, T, c),
            P = z.height + z.depth,
            I = Pn(C, T, c),
            V = I.height + I.depth,
            G = Pn(F, T, c),
            K = G.height + G.depth,
            Q = 0,
            te = 1;
          if (x !== null) {
            var ye = Pn(x, T, c);
            (Q = ye.height + ye.depth), (te = 2);
          }
          var Se = P + K + Q,
            _e = Math.max(0, Math.ceil((i - Se) / (te * V))),
            Ce = Se + _e * te * V,
            ke = u.fontMetrics().axisHeight;
          s && (ke *= u.sizeMultiplier);
          var Ie = Ce / 2 - ke,
            Fe = [];
          if ((Fe.push(ji(F, T, c)), Fe.push(Na), x === null)) {
            var lt = Ce - P - K + 2 * $i;
            Fe.push(Li(C, lt, u));
          } else {
            var ct = (Ce - P - K - Q) / 2 + 2 * $i;
            Fe.push(Li(C, ct, u)),
              Fe.push(Na),
              Fe.push(ji(x, T, c)),
              Fe.push(Na),
              Fe.push(Li(C, ct, u));
          }
          Fe.push(Na), Fe.push(ji(y, T, c));
          var xr = u.havingBaseStyle(ee.TEXT),
            zt = M.makeVList(
              { positionType: "bottom", positionData: Ie, children: Fe },
              xr
            );
          return Ii(
            M.makeSpan(["delimsizing", "mult"], [zt], xr),
            ee.TEXT,
            u,
            f
          );
        },
        qi = 80,
        Hi = 0.08,
        Ui = function (a, i, s, u, c) {
          var f = On(a, u, s),
            y = new Vr(a, f),
            x = new mr([y], {
              width: "400em",
              height: U(i),
              viewBox: "0 0 400000 " + s,
              preserveAspectRatio: "xMinYMin slice",
            });
          return M.makeSvgSpan(["hide-tail"], [x], c);
        },
        qp = function (a, i) {
          var s = i.havingBaseSizing(),
            u = xo("\\surd", a * s.sizeMultiplier, Do, s),
            c = s.sizeMultiplier,
            f = Math.max(
              0,
              i.minRuleThickness - i.fontMetrics().sqrtRuleThickness
            ),
            y,
            x = 0,
            C = 0,
            F = 0,
            T;
          return (
            u.type === "small"
              ? ((F = 1e3 + 1e3 * f + qi),
                a < 1 ? (c = 1) : a < 1.4 && (c = 0.7),
                (x = (1 + f + Hi) / c),
                (C = (1 + f) / c),
                (y = Ui("sqrtMain", x, F, f, i)),
                (y.style.minWidth = "0.853em"),
                (T = 0.833 / c))
              : u.type === "large"
              ? ((F = (1e3 + qi) * In[u.size]),
                (C = (In[u.size] + f) / c),
                (x = (In[u.size] + f + Hi) / c),
                (y = Ui("sqrtSize" + u.size, x, F, f, i)),
                (y.style.minWidth = "1.02em"),
                (T = 1 / c))
              : ((x = a + f + Hi),
                (C = a + f),
                (F = Math.floor(1e3 * a + f) + qi),
                (y = Ui("sqrtTall", x, F, f, i)),
                (y.style.minWidth = "0.742em"),
                (T = 1.056)),
            (y.height = C),
            (y.style.height = U(x)),
            {
              span: y,
              advanceWidth: T,
              ruleWidth: (i.fontMetrics().sqrtRuleThickness + f) * c,
            }
          );
        },
        vo = [
          "(",
          "\\lparen",
          ")",
          "\\rparen",
          "[",
          "\\lbrack",
          "]",
          "\\rbrack",
          "\\{",
          "\\lbrace",
          "\\}",
          "\\rbrace",
          "\\lfloor",
          "\\rfloor",
          "\u230A",
          "\u230B",
          "\\lceil",
          "\\rceil",
          "\u2308",
          "\u2309",
          "\\surd",
        ],
        Hp = [
          "\\uparrow",
          "\\downarrow",
          "\\updownarrow",
          "\\Uparrow",
          "\\Downarrow",
          "\\Updownarrow",
          "|",
          "\\|",
          "\\vert",
          "\\Vert",
          "\\lvert",
          "\\rvert",
          "\\lVert",
          "\\rVert",
          "\\lgroup",
          "\\rgroup",
          "\u27EE",
          "\u27EF",
          "\\lmoustache",
          "\\rmoustache",
          "\u23B0",
          "\u23B1",
        ],
        yo = [
          "<",
          ">",
          "\\langle",
          "\\rangle",
          "/",
          "\\backslash",
          "\\lt",
          "\\gt",
        ],
        In = [0, 1.2, 1.8, 2.4, 3],
        Up = function (a, i, s, u, c) {
          if (
            (a === "<" || a === "\\lt" || a === "\u27E8"
              ? (a = "\\langle")
              : (a === ">" || a === "\\gt" || a === "\u27E9") &&
                (a = "\\rangle"),
            O.contains(vo, a) || O.contains(yo, a))
          )
            return mo(a, i, !1, s, u, c);
          if (O.contains(Hp, a)) return go(a, In[i], !1, s, u, c);
          throw new r("Illegal delimiter: '" + a + "'");
        },
        Vp = [
          { type: "small", style: ee.SCRIPTSCRIPT },
          { type: "small", style: ee.SCRIPT },
          { type: "small", style: ee.TEXT },
          { type: "large", size: 1 },
          { type: "large", size: 2 },
          { type: "large", size: 3 },
          { type: "large", size: 4 },
        ],
        Wp = [
          { type: "small", style: ee.SCRIPTSCRIPT },
          { type: "small", style: ee.SCRIPT },
          { type: "small", style: ee.TEXT },
          { type: "stack" },
        ],
        Do = [
          { type: "small", style: ee.SCRIPTSCRIPT },
          { type: "small", style: ee.SCRIPT },
          { type: "small", style: ee.TEXT },
          { type: "large", size: 1 },
          { type: "large", size: 2 },
          { type: "large", size: 3 },
          { type: "large", size: 4 },
          { type: "stack" },
        ],
        Gp = function (a) {
          if (a.type === "small") return "Main-Regular";
          if (a.type === "large") return "Size" + a.size + "-Regular";
          if (a.type === "stack") return "Size4-Regular";
          throw new Error("Add support for delim type '" + a.type + "' here.");
        },
        xo = function (a, i, s, u) {
          for (
            var c = Math.min(2, 3 - u.style.size), f = c;
            f < s.length && s[f].type !== "stack";
            f++
          ) {
            var y = Pn(a, Gp(s[f]), "math"),
              x = y.height + y.depth;
            if (s[f].type === "small") {
              var C = u.havingBaseStyle(s[f].style);
              x *= C.sizeMultiplier;
            }
            if (x > i) return s[f];
          }
          return s[s.length - 1];
        },
        bo = function (a, i, s, u, c, f) {
          a === "<" || a === "\\lt" || a === "\u27E8"
            ? (a = "\\langle")
            : (a === ">" || a === "\\gt" || a === "\u27E9") && (a = "\\rangle");
          var y;
          O.contains(yo, a)
            ? (y = Vp)
            : O.contains(vo, a)
            ? (y = Do)
            : (y = Wp);
          var x = xo(a, i, y, u);
          return x.type === "small"
            ? Ip(a, x.style, s, u, c, f)
            : x.type === "large"
            ? mo(a, x.size, s, u, c, f)
            : go(a, i, s, u, c, f);
        },
        Zp = function (a, i, s, u, c, f) {
          var y = u.fontMetrics().axisHeight * u.sizeMultiplier,
            x = 901,
            C = 5 / u.fontMetrics().ptPerEm,
            F = Math.max(i - y, s + y),
            T = Math.max((F / 500) * x, 2 * F - C);
          return bo(a, T, !0, u, c, f);
        },
        Kt = {
          sqrtImage: qp,
          sizedDelim: Up,
          sizeToMaxHeight: In,
          customSizedDelim: bo,
          leftRightDelim: Zp,
        },
        wo = {
          "\\bigl": { mclass: "mopen", size: 1 },
          "\\Bigl": { mclass: "mopen", size: 2 },
          "\\biggl": { mclass: "mopen", size: 3 },
          "\\Biggl": { mclass: "mopen", size: 4 },
          "\\bigr": { mclass: "mclose", size: 1 },
          "\\Bigr": { mclass: "mclose", size: 2 },
          "\\biggr": { mclass: "mclose", size: 3 },
          "\\Biggr": { mclass: "mclose", size: 4 },
          "\\bigm": { mclass: "mrel", size: 1 },
          "\\Bigm": { mclass: "mrel", size: 2 },
          "\\biggm": { mclass: "mrel", size: 3 },
          "\\Biggm": { mclass: "mrel", size: 4 },
          "\\big": { mclass: "mord", size: 1 },
          "\\Big": { mclass: "mord", size: 2 },
          "\\bigg": { mclass: "mord", size: 3 },
          "\\Bigg": { mclass: "mord", size: 4 },
        },
        Jp = [
          "(",
          "\\lparen",
          ")",
          "\\rparen",
          "[",
          "\\lbrack",
          "]",
          "\\rbrack",
          "\\{",
          "\\lbrace",
          "\\}",
          "\\rbrace",
          "\\lfloor",
          "\\rfloor",
          "\u230A",
          "\u230B",
          "\\lceil",
          "\\rceil",
          "\u2308",
          "\u2309",
          "<",
          ">",
          "\\langle",
          "\u27E8",
          "\\rangle",
          "\u27E9",
          "\\lt",
          "\\gt",
          "\\lvert",
          "\\rvert",
          "\\lVert",
          "\\rVert",
          "\\lgroup",
          "\\rgroup",
          "\u27EE",
          "\u27EF",
          "\\lmoustache",
          "\\rmoustache",
          "\u23B0",
          "\u23B1",
          "/",
          "\\backslash",
          "|",
          "\\vert",
          "\\|",
          "\\Vert",
          "\\uparrow",
          "\\Uparrow",
          "\\downarrow",
          "\\Downarrow",
          "\\updownarrow",
          "\\Updownarrow",
          ".",
        ];
      function Ma(h, a) {
        var i = Ba(h);
        if (i && O.contains(Jp, i.text)) return i;
        throw i
          ? new r(
              "Invalid delimiter '" + i.text + "' after '" + a.funcName + "'",
              h
            )
          : new r("Invalid delimiter type '" + h.type + "'", h);
      }
      Z({
        type: "delimsizing",
        names: [
          "\\bigl",
          "\\Bigl",
          "\\biggl",
          "\\Biggl",
          "\\bigr",
          "\\Bigr",
          "\\biggr",
          "\\Biggr",
          "\\bigm",
          "\\Bigm",
          "\\biggm",
          "\\Biggm",
          "\\big",
          "\\Big",
          "\\bigg",
          "\\Bigg",
        ],
        props: { numArgs: 1, argTypes: ["primitive"] },
        handler: function (a, i) {
          var s = Ma(i[0], a);
          return {
            type: "delimsizing",
            mode: a.parser.mode,
            size: wo[a.funcName].size,
            mclass: wo[a.funcName].mclass,
            delim: s.text,
          };
        },
        htmlBuilder: function (a, i) {
          return a.delim === "."
            ? M.makeSpan([a.mclass])
            : Kt.sizedDelim(a.delim, a.size, i, a.mode, [a.mclass]);
        },
        mathmlBuilder: function (a) {
          var i = [];
          a.delim !== "." && i.push(gt(a.delim, a.mode));
          var s = new $.MathNode("mo", i);
          a.mclass === "mopen" || a.mclass === "mclose"
            ? s.setAttribute("fence", "true")
            : s.setAttribute("fence", "false"),
            s.setAttribute("stretchy", "true");
          var u = U(Kt.sizeToMaxHeight[a.size]);
          return s.setAttribute("minsize", u), s.setAttribute("maxsize", u), s;
        },
      });
      function Co(h) {
        if (!h.body)
          throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
      }
      Z({
        type: "leftright-right",
        names: ["\\right"],
        props: { numArgs: 1, primitive: !0 },
        handler: function (a, i) {
          var s = a.parser.gullet.macros.get("\\current@color");
          if (s && typeof s != "string")
            throw new r("\\current@color set to non-string in \\right");
          return {
            type: "leftright-right",
            mode: a.parser.mode,
            delim: Ma(i[0], a).text,
            color: s,
          };
        },
      }),
        Z({
          type: "leftright",
          names: ["\\left"],
          props: { numArgs: 1, primitive: !0 },
          handler: function (a, i) {
            var s = Ma(i[0], a),
              u = a.parser;
            ++u.leftrightDepth;
            var c = u.parseExpression(!1);
            --u.leftrightDepth, u.expect("\\right", !1);
            var f = ce(u.parseFunction(), "leftright-right");
            return {
              type: "leftright",
              mode: u.mode,
              body: c,
              left: s.text,
              right: f.delim,
              rightColor: f.color,
            };
          },
          htmlBuilder: function (a, i) {
            Co(a);
            for (
              var s = Ge(a.body, i, !0, ["mopen", "mclose"]),
                u = 0,
                c = 0,
                f = !1,
                y = 0;
              y < s.length;
              y++
            )
              s[y].isMiddle
                ? (f = !0)
                : ((u = Math.max(s[y].height, u)),
                  (c = Math.max(s[y].depth, c)));
            (u *= i.sizeMultiplier), (c *= i.sizeMultiplier);
            var x;
            if (
              (a.left === "."
                ? (x = zn(i, ["mopen"]))
                : (x = Kt.leftRightDelim(a.left, u, c, i, a.mode, ["mopen"])),
              s.unshift(x),
              f)
            )
              for (var C = 1; C < s.length; C++) {
                var F = s[C],
                  T = F.isMiddle;
                T &&
                  (s[C] = Kt.leftRightDelim(
                    T.delim,
                    u,
                    c,
                    T.options,
                    a.mode,
                    []
                  ));
              }
            var z;
            if (a.right === ".") z = zn(i, ["mclose"]);
            else {
              var P = a.rightColor ? i.withColor(a.rightColor) : i;
              z = Kt.leftRightDelim(a.right, u, c, P, a.mode, ["mclose"]);
            }
            return s.push(z), M.makeSpan(["minner"], s, i);
          },
          mathmlBuilder: function (a, i) {
            Co(a);
            var s = ut(a.body, i);
            if (a.left !== ".") {
              var u = new $.MathNode("mo", [gt(a.left, a.mode)]);
              u.setAttribute("fence", "true"), s.unshift(u);
            }
            if (a.right !== ".") {
              var c = new $.MathNode("mo", [gt(a.right, a.mode)]);
              c.setAttribute("fence", "true"),
                a.rightColor && c.setAttribute("mathcolor", a.rightColor),
                s.push(c);
            }
            return Oi(s);
          },
        }),
        Z({
          type: "middle",
          names: ["\\middle"],
          props: { numArgs: 1, primitive: !0 },
          handler: function (a, i) {
            var s = Ma(i[0], a);
            if (!a.parser.leftrightDepth)
              throw new r("\\middle without preceding \\left", s);
            return { type: "middle", mode: a.parser.mode, delim: s.text };
          },
          htmlBuilder: function (a, i) {
            var s;
            if (a.delim === ".") s = zn(i, []);
            else {
              s = Kt.sizedDelim(a.delim, 1, i, a.mode, []);
              var u = { delim: a.delim, options: i };
              s.isMiddle = u;
            }
            return s;
          },
          mathmlBuilder: function (a, i) {
            var s =
                a.delim === "\\vert" || a.delim === "|"
                  ? gt("|", "text")
                  : gt(a.delim, a.mode),
              u = new $.MathNode("mo", [s]);
            return (
              u.setAttribute("fence", "true"),
              u.setAttribute("lspace", "0.05em"),
              u.setAttribute("rspace", "0.05em"),
              u
            );
          },
        });
      var Vi = function (a, i) {
          var s = M.wrapFragment(ve(a.body, i), i),
            u = a.label.substr(1),
            c = i.sizeMultiplier,
            f,
            y = 0,
            x = O.isCharacterBox(a.body);
          if (u === "sout")
            (f = M.makeSpan(["stretchy", "sout"])),
              (f.height = i.fontMetrics().defaultRuleThickness / c),
              (y = -0.5 * i.fontMetrics().xHeight);
          else if (u === "phase") {
            var C = ze({ number: 0.6, unit: "pt" }, i),
              F = ze({ number: 0.35, unit: "ex" }, i),
              T = i.havingBaseSizing();
            c = c / T.sizeMultiplier;
            var z = s.height + s.depth + C + F;
            s.style.paddingLeft = U(z / 2 + C);
            var P = Math.floor(1e3 * z * c),
              I = Mn(P),
              V = new mr([new Vr("phase", I)], {
                width: "400em",
                height: U(P / 1e3),
                viewBox: "0 0 400000 " + P,
                preserveAspectRatio: "xMinYMin slice",
              });
            (f = M.makeSvgSpan(["hide-tail"], [V], i)),
              (f.style.height = U(z)),
              (y = s.depth + C + F);
          } else {
            /cancel/.test(u)
              ? x || s.classes.push("cancel-pad")
              : u === "angl"
              ? s.classes.push("anglpad")
              : s.classes.push("boxpad");
            var G = 0,
              K = 0,
              Q = 0;
            /box/.test(u)
              ? ((Q = Math.max(i.fontMetrics().fboxrule, i.minRuleThickness)),
                (G = i.fontMetrics().fboxsep + (u === "colorbox" ? 0 : Q)),
                (K = G))
              : u === "angl"
              ? ((Q = Math.max(
                  i.fontMetrics().defaultRuleThickness,
                  i.minRuleThickness
                )),
                (G = 4 * Q),
                (K = Math.max(0, 0.25 - s.depth)))
              : ((G = x ? 0.2 : 0), (K = G)),
              (f = Xt.encloseSpan(s, u, G, K, i)),
              /fbox|boxed|fcolorbox/.test(u)
                ? ((f.style.borderStyle = "solid"),
                  (f.style.borderWidth = U(Q)))
                : u === "angl" &&
                  Q !== 0.049 &&
                  ((f.style.borderTopWidth = U(Q)),
                  (f.style.borderRightWidth = U(Q))),
              (y = s.depth + K),
              a.backgroundColor &&
                ((f.style.backgroundColor = a.backgroundColor),
                a.borderColor && (f.style.borderColor = a.borderColor));
          }
          var te;
          if (a.backgroundColor)
            te = M.makeVList(
              {
                positionType: "individualShift",
                children: [
                  { type: "elem", elem: f, shift: y },
                  { type: "elem", elem: s, shift: 0 },
                ],
              },
              i
            );
          else {
            var ye = /cancel|phase/.test(u) ? ["svg-align"] : [];
            te = M.makeVList(
              {
                positionType: "individualShift",
                children: [
                  { type: "elem", elem: s, shift: 0 },
                  { type: "elem", elem: f, shift: y, wrapperClasses: ye },
                ],
              },
              i
            );
          }
          return (
            /cancel/.test(u) && ((te.height = s.height), (te.depth = s.depth)),
            /cancel/.test(u) && !x
              ? M.makeSpan(["mord", "cancel-lap"], [te], i)
              : M.makeSpan(["mord"], [te], i)
          );
        },
        Wi = function (a, i) {
          var s = 0,
            u = new $.MathNode(
              a.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose",
              [Ae(a.body, i)]
            );
          switch (a.label) {
            case "\\cancel":
              u.setAttribute("notation", "updiagonalstrike");
              break;
            case "\\bcancel":
              u.setAttribute("notation", "downdiagonalstrike");
              break;
            case "\\phase":
              u.setAttribute("notation", "phasorangle");
              break;
            case "\\sout":
              u.setAttribute("notation", "horizontalstrike");
              break;
            case "\\fbox":
              u.setAttribute("notation", "box");
              break;
            case "\\angl":
              u.setAttribute("notation", "actuarial");
              break;
            case "\\fcolorbox":
            case "\\colorbox":
              if (
                ((s = i.fontMetrics().fboxsep * i.fontMetrics().ptPerEm),
                u.setAttribute("width", "+" + 2 * s + "pt"),
                u.setAttribute("height", "+" + 2 * s + "pt"),
                u.setAttribute("lspace", s + "pt"),
                u.setAttribute("voffset", s + "pt"),
                a.label === "\\fcolorbox")
              ) {
                var c = Math.max(i.fontMetrics().fboxrule, i.minRuleThickness);
                u.setAttribute(
                  "style",
                  "border: " + c + "em solid " + String(a.borderColor)
                );
              }
              break;
            case "\\xcancel":
              u.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
              break;
          }
          return (
            a.backgroundColor &&
              u.setAttribute("mathbackground", a.backgroundColor),
            u
          );
        };
      Z({
        type: "enclose",
        names: ["\\colorbox"],
        props: { numArgs: 2, allowedInText: !0, argTypes: ["color", "text"] },
        handler: function (a, i, s) {
          var u = a.parser,
            c = a.funcName,
            f = ce(i[0], "color-token").color,
            y = i[1];
          return {
            type: "enclose",
            mode: u.mode,
            label: c,
            backgroundColor: f,
            body: y,
          };
        },
        htmlBuilder: Vi,
        mathmlBuilder: Wi,
      }),
        Z({
          type: "enclose",
          names: ["\\fcolorbox"],
          props: {
            numArgs: 3,
            allowedInText: !0,
            argTypes: ["color", "color", "text"],
          },
          handler: function (a, i, s) {
            var u = a.parser,
              c = a.funcName,
              f = ce(i[0], "color-token").color,
              y = ce(i[1], "color-token").color,
              x = i[2];
            return {
              type: "enclose",
              mode: u.mode,
              label: c,
              backgroundColor: y,
              borderColor: f,
              body: x,
            };
          },
          htmlBuilder: Vi,
          mathmlBuilder: Wi,
        }),
        Z({
          type: "enclose",
          names: ["\\fbox"],
          props: { numArgs: 1, argTypes: ["hbox"], allowedInText: !0 },
          handler: function (a, i) {
            var s = a.parser;
            return {
              type: "enclose",
              mode: s.mode,
              label: "\\fbox",
              body: i[0],
            };
          },
        }),
        Z({
          type: "enclose",
          names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
          props: { numArgs: 1 },
          handler: function (a, i) {
            var s = a.parser,
              u = a.funcName,
              c = i[0];
            return { type: "enclose", mode: s.mode, label: u, body: c };
          },
          htmlBuilder: Vi,
          mathmlBuilder: Wi,
        }),
        Z({
          type: "enclose",
          names: ["\\angl"],
          props: { numArgs: 1, argTypes: ["hbox"], allowedInText: !1 },
          handler: function (a, i) {
            var s = a.parser;
            return {
              type: "enclose",
              mode: s.mode,
              label: "\\angl",
              body: i[0],
            };
          },
        });
      var So = {};
      function Mt(h) {
        for (
          var a = h.type,
            i = h.names,
            s = h.props,
            u = h.handler,
            c = h.htmlBuilder,
            f = h.mathmlBuilder,
            y = {
              type: a,
              numArgs: s.numArgs || 0,
              allowedInText: !1,
              numOptionalArgs: 0,
              handler: u,
            },
            x = 0;
          x < i.length;
          ++x
        )
          So[i[x]] = y;
        c && (ka[a] = c), f && (Ea[a] = f);
      }
      function ko(h) {
        var a = [];
        h.consumeSpaces();
        for (var i = h.fetch().text; i === "\\hline" || i === "\\hdashline"; )
          h.consume(),
            a.push(i === "\\hdashline"),
            h.consumeSpaces(),
            (i = h.fetch().text);
        return a;
      }
      var Oa = function (a) {
        var i = a.parser.settings;
        if (!i.displayMode)
          throw new r("{" + a.envName + "} can be used only in display mode.");
      };
      function yr(h, a, i) {
        var s = a.hskipBeforeAndAfter,
          u = a.addJot,
          c = a.cols,
          f = a.arraystretch,
          y = a.colSeparationType,
          x = a.addEqnNum,
          C = a.singleRow,
          F = a.emptySingleRow,
          T = a.maxNumCols,
          z = a.leqno;
        if (
          (h.gullet.beginGroup(),
          C || h.gullet.macros.set("\\cr", "\\\\\\relax"),
          !f)
        ) {
          var P = h.gullet.expandMacroAsText("\\arraystretch");
          if (P == null) f = 1;
          else if (((f = parseFloat(P)), !f || f < 0))
            throw new r("Invalid \\arraystretch: " + P);
        }
        h.gullet.beginGroup();
        var I = [],
          V = [I],
          G = [],
          K = [];
        for (K.push(ko(h)); ; ) {
          var Q = h.parseExpression(!1, C ? "\\end" : "\\\\");
          h.gullet.endGroup(),
            h.gullet.beginGroup(),
            (Q = { type: "ordgroup", mode: h.mode, body: Q }),
            i && (Q = { type: "styling", mode: h.mode, style: i, body: [Q] }),
            I.push(Q);
          var te = h.fetch().text;
          if (te === "&") {
            if (T && I.length === T) {
              if (C || y)
                throw new r("Too many tab characters: &", h.nextToken);
              h.settings.reportNonstrict(
                "textEnv",
                "Too few columns specified in the {array} column argument."
              );
            }
            h.consume();
          } else if (te === "\\end") {
            I.length === 1 &&
              Q.type === "styling" &&
              Q.body[0].body.length === 0 &&
              (V.length > 1 || !F) &&
              V.pop(),
              K.length < V.length + 1 && K.push([]);
            break;
          } else if (te === "\\\\") {
            h.consume();
            var ye = void 0;
            h.gullet.future().text !== " " && (ye = h.parseSizeGroup(!0)),
              G.push(ye ? ye.value : null),
              K.push(ko(h)),
              (I = []),
              V.push(I);
          } else
            throw new r("Expected & or \\\\ or \\cr or \\end", h.nextToken);
        }
        return (
          h.gullet.endGroup(),
          h.gullet.endGroup(),
          {
            type: "array",
            mode: h.mode,
            addJot: u,
            arraystretch: f,
            body: V,
            cols: c,
            rowGaps: G,
            hskipBeforeAndAfter: s,
            hLinesBeforeRow: K,
            colSeparationType: y,
            addEqnNum: x,
            leqno: z,
          }
        );
      }
      function Gi(h) {
        return h.substr(0, 1) === "d" ? "display" : "text";
      }
      var Ot = function (a, i) {
          var s,
            u,
            c = a.body.length,
            f = a.hLinesBeforeRow,
            y = 0,
            x = new Array(c),
            C = [],
            F = Math.max(i.fontMetrics().arrayRuleWidth, i.minRuleThickness),
            T = 1 / i.fontMetrics().ptPerEm,
            z = 5 * T;
          if (a.colSeparationType && a.colSeparationType === "small") {
            var P = i.havingStyle(ee.SCRIPT).sizeMultiplier;
            z = 0.2778 * (P / i.sizeMultiplier);
          }
          var I =
              a.colSeparationType === "CD"
                ? ze({ number: 3, unit: "ex" }, i)
                : 12 * T,
            V = 3 * T,
            G = a.arraystretch * I,
            K = 0.7 * G,
            Q = 0.3 * G,
            te = 0;
          function ye(pu) {
            for (var Ra = 0; Ra < pu.length; ++Ra)
              Ra > 0 && (te += 0.25), C.push({ pos: te, isDashed: pu[Ra] });
          }
          for (ye(f[0]), s = 0; s < a.body.length; ++s) {
            var Se = a.body[s],
              _e = K,
              Ce = Q;
            y < Se.length && (y = Se.length);
            var ke = new Array(Se.length);
            for (u = 0; u < Se.length; ++u) {
              var Ie = ve(Se[u], i);
              Ce < Ie.depth && (Ce = Ie.depth),
                _e < Ie.height && (_e = Ie.height),
                (ke[u] = Ie);
            }
            var Fe = a.rowGaps[s],
              lt = 0;
            Fe &&
              ((lt = ze(Fe, i)),
              lt > 0 && ((lt += Q), Ce < lt && (Ce = lt), (lt = 0))),
              a.addJot && (Ce += V),
              (ke.height = _e),
              (ke.depth = Ce),
              (te += _e),
              (ke.pos = te),
              (te += Ce + lt),
              (x[s] = ke),
              ye(f[s + 1]);
          }
          var ct = te / 2 + i.fontMetrics().axisHeight,
            xr = a.cols || [],
            zt = [],
            dt,
            mn,
            ou = [];
          if (a.addEqnNum)
            for (s = 0; s < c; ++s) {
              var s0 = x[s],
                Sf = s0.pos - ct,
                o0 = M.makeSpan(["eqn-num"], [], i);
              (o0.depth = s0.depth),
                (o0.height = s0.height),
                ou.push({ type: "elem", elem: o0, shift: Sf });
            }
          for (u = 0, mn = 0; u < y || mn < xr.length; ++u, ++mn) {
            for (var Yt = xr[mn] || {}, uu = !0; Yt.type === "separator"; ) {
              if (
                (uu ||
                  ((dt = M.makeSpan(["arraycolsep"], [])),
                  (dt.style.width = U(i.fontMetrics().doubleRuleSep)),
                  zt.push(dt)),
                Yt.separator === "|" || Yt.separator === ":")
              ) {
                var kf = Yt.separator === "|" ? "solid" : "dashed",
                  gn = M.makeSpan(["vertical-separator"], [], i);
                (gn.style.height = U(te)),
                  (gn.style.borderRightWidth = U(F)),
                  (gn.style.borderRightStyle = kf),
                  (gn.style.margin = "0 " + U(-F / 2));
                var lu = te - ct;
                lu && (gn.style.verticalAlign = U(-lu)), zt.push(gn);
              } else throw new r("Invalid separator type: " + Yt.separator);
              mn++, (Yt = xr[mn] || {}), (uu = !1);
            }
            if (!(u >= y)) {
              var vn = void 0;
              (u > 0 || a.hskipBeforeAndAfter) &&
                ((vn = O.deflt(Yt.pregap, z)),
                vn !== 0 &&
                  ((dt = M.makeSpan(["arraycolsep"], [])),
                  (dt.style.width = U(vn)),
                  zt.push(dt)));
              var yn = [];
              for (s = 0; s < c; ++s) {
                var _a = x[s],
                  za = _a[u];
                if (!!za) {
                  var Ef = _a.pos - ct;
                  (za.depth = _a.depth),
                    (za.height = _a.height),
                    yn.push({ type: "elem", elem: za, shift: Ef });
                }
              }
              (yn = M.makeVList(
                { positionType: "individualShift", children: yn },
                i
              )),
                (yn = M.makeSpan(["col-align-" + (Yt.align || "c")], [yn])),
                zt.push(yn),
                (u < y - 1 || a.hskipBeforeAndAfter) &&
                  ((vn = O.deflt(Yt.postgap, z)),
                  vn !== 0 &&
                    ((dt = M.makeSpan(["arraycolsep"], [])),
                    (dt.style.width = U(vn)),
                    zt.push(dt)));
            }
          }
          if (((x = M.makeSpan(["mtable"], zt)), C.length > 0)) {
            for (
              var Af = M.makeLineSpan("hline", i, F),
                Ff = M.makeLineSpan("hdashline", i, F),
                u0 = [{ type: "elem", elem: x, shift: 0 }];
              C.length > 0;

            ) {
              var cu = C.pop(),
                du = cu.pos - ct;
              cu.isDashed
                ? u0.push({ type: "elem", elem: Ff, shift: du })
                : u0.push({ type: "elem", elem: Af, shift: du });
            }
            x = M.makeVList(
              { positionType: "individualShift", children: u0 },
              i
            );
          }
          if (a.addEqnNum) {
            var l0 = M.makeVList(
              { positionType: "individualShift", children: ou },
              i
            );
            return (l0 = M.makeSpan(["tag"], [l0], i)), M.makeFragment([x, l0]);
          } else return M.makeSpan(["mord"], [x], i);
        },
        Xp = { c: "center ", l: "left ", r: "right " },
        _t = function (a, i) {
          for (
            var s = [],
              u = new $.MathNode("mtd", [], ["mtr-glue"]),
              c = new $.MathNode("mtd", [], ["mml-eqn-num"]),
              f = 0;
            f < a.body.length;
            f++
          ) {
            for (var y = a.body[f], x = [], C = 0; C < y.length; C++)
              x.push(new $.MathNode("mtd", [Ae(y[C], i)]));
            a.addEqnNum &&
              (x.unshift(u), x.push(u), a.leqno ? x.unshift(c) : x.push(c)),
              s.push(new $.MathNode("mtr", x));
          }
          var F = new $.MathNode("mtable", s),
            T =
              a.arraystretch === 0.5
                ? 0.1
                : 0.16 + a.arraystretch - 1 + (a.addJot ? 0.09 : 0);
          F.setAttribute("rowspacing", U(T));
          var z = "",
            P = "";
          if (a.cols && a.cols.length > 0) {
            var I = a.cols,
              V = "",
              G = !1,
              K = 0,
              Q = I.length;
            I[0].type === "separator" && ((z += "top "), (K = 1)),
              I[I.length - 1].type === "separator" &&
                ((z += "bottom "), (Q -= 1));
            for (var te = K; te < Q; te++)
              I[te].type === "align"
                ? ((P += Xp[I[te].align]), G && (V += "none "), (G = !0))
                : I[te].type === "separator" &&
                  G &&
                  ((V += I[te].separator === "|" ? "solid " : "dashed "),
                  (G = !1));
            F.setAttribute("columnalign", P.trim()),
              /[sd]/.test(V) && F.setAttribute("columnlines", V.trim());
          }
          if (a.colSeparationType === "align") {
            for (var ye = a.cols || [], Se = "", _e = 1; _e < ye.length; _e++)
              Se += _e % 2 ? "0em " : "1em ";
            F.setAttribute("columnspacing", Se.trim());
          } else
            a.colSeparationType === "alignat" ||
            a.colSeparationType === "gather"
              ? F.setAttribute("columnspacing", "0em")
              : a.colSeparationType === "small"
              ? F.setAttribute("columnspacing", "0.2778em")
              : a.colSeparationType === "CD"
              ? F.setAttribute("columnspacing", "0.5em")
              : F.setAttribute("columnspacing", "1em");
          var Ce = "",
            ke = a.hLinesBeforeRow;
          (z += ke[0].length > 0 ? "left " : ""),
            (z += ke[ke.length - 1].length > 0 ? "right " : "");
          for (var Ie = 1; Ie < ke.length - 1; Ie++)
            Ce +=
              ke[Ie].length === 0 ? "none " : ke[Ie][0] ? "dashed " : "solid ";
          return (
            /[sd]/.test(Ce) && F.setAttribute("rowlines", Ce.trim()),
            z !== "" &&
              ((F = new $.MathNode("menclose", [F])),
              F.setAttribute("notation", z.trim())),
            a.arraystretch &&
              a.arraystretch < 1 &&
              ((F = new $.MathNode("mstyle", [F])),
              F.setAttribute("scriptlevel", "1")),
            F
          );
        },
        Eo = function (a, i) {
          a.envName.indexOf("ed") === -1 && Oa(a);
          var s = [],
            u = a.envName.indexOf("at") > -1 ? "alignat" : "align",
            c = yr(
              a.parser,
              {
                cols: s,
                addJot: !0,
                addEqnNum: a.envName === "align" || a.envName === "alignat",
                emptySingleRow: !0,
                colSeparationType: u,
                maxNumCols: a.envName === "split" ? 2 : void 0,
                leqno: a.parser.settings.leqno,
              },
              "display"
            ),
            f,
            y = 0,
            x = { type: "ordgroup", mode: a.mode, body: [] };
          if (i[0] && i[0].type === "ordgroup") {
            for (var C = "", F = 0; F < i[0].body.length; F++) {
              var T = ce(i[0].body[F], "textord");
              C += T.text;
            }
            (f = Number(C)), (y = f * 2);
          }
          var z = !y;
          c.body.forEach(function (G) {
            for (var K = 1; K < G.length; K += 2) {
              var Q = ce(G[K], "styling"),
                te = ce(Q.body[0], "ordgroup");
              te.body.unshift(x);
            }
            if (z) y < G.length && (y = G.length);
            else {
              var ye = G.length / 2;
              if (f < ye)
                throw new r(
                  "Too many math in a row: " +
                    ("expected " + f + ", but got " + ye),
                  G[0]
                );
            }
          });
          for (var P = 0; P < y; ++P) {
            var I = "r",
              V = 0;
            P % 2 === 1 ? (I = "l") : P > 0 && z && (V = 1),
              (s[P] = { type: "align", align: I, pregap: V, postgap: 0 });
          }
          return (c.colSeparationType = z ? "align" : "alignat"), c;
        };
      Mt({
        type: "array",
        names: ["array", "darray"],
        props: { numArgs: 1 },
        handler: function (a, i) {
          var s = Ba(i[0]),
            u = s ? [i[0]] : ce(i[0], "ordgroup").body,
            c = u.map(function (y) {
              var x = zi(y),
                C = x.text;
              if ("lcr".indexOf(C) !== -1) return { type: "align", align: C };
              if (C === "|") return { type: "separator", separator: "|" };
              if (C === ":") return { type: "separator", separator: ":" };
              throw new r("Unknown column alignment: " + C, y);
            }),
            f = { cols: c, hskipBeforeAndAfter: !0, maxNumCols: c.length };
          return yr(a.parser, f, Gi(a.envName));
        },
        htmlBuilder: Ot,
        mathmlBuilder: _t,
      }),
        Mt({
          type: "array",
          names: [
            "matrix",
            "pmatrix",
            "bmatrix",
            "Bmatrix",
            "vmatrix",
            "Vmatrix",
            "matrix*",
            "pmatrix*",
            "bmatrix*",
            "Bmatrix*",
            "vmatrix*",
            "Vmatrix*",
          ],
          props: { numArgs: 0 },
          handler: function (a) {
            var i = {
                matrix: null,
                pmatrix: ["(", ")"],
                bmatrix: ["[", "]"],
                Bmatrix: ["\\{", "\\}"],
                vmatrix: ["|", "|"],
                Vmatrix: ["\\Vert", "\\Vert"],
              }[a.envName.replace("*", "")],
              s = "c",
              u = {
                hskipBeforeAndAfter: !1,
                cols: [{ type: "align", align: s }],
              };
            if (a.envName.charAt(a.envName.length - 1) === "*") {
              var c = a.parser;
              if ((c.consumeSpaces(), c.fetch().text === "[")) {
                if (
                  (c.consume(),
                  c.consumeSpaces(),
                  (s = c.fetch().text),
                  "lcr".indexOf(s) === -1)
                )
                  throw new r("Expected l or c or r", c.nextToken);
                c.consume(),
                  c.consumeSpaces(),
                  c.expect("]"),
                  c.consume(),
                  (u.cols = [{ type: "align", align: s }]);
              }
            }
            var f = yr(a.parser, u, Gi(a.envName)),
              y = Math.max.apply(
                Math,
                [0].concat(
                  f.body.map(function (x) {
                    return x.length;
                  })
                )
              );
            return (
              (f.cols = new Array(y).fill({ type: "align", align: s })),
              i
                ? {
                    type: "leftright",
                    mode: a.mode,
                    body: [f],
                    left: i[0],
                    right: i[1],
                    rightColor: void 0,
                  }
                : f
            );
          },
          htmlBuilder: Ot,
          mathmlBuilder: _t,
        }),
        Mt({
          type: "array",
          names: ["smallmatrix"],
          props: { numArgs: 0 },
          handler: function (a) {
            var i = { arraystretch: 0.5 },
              s = yr(a.parser, i, "script");
            return (s.colSeparationType = "small"), s;
          },
          htmlBuilder: Ot,
          mathmlBuilder: _t,
        }),
        Mt({
          type: "array",
          names: ["subarray"],
          props: { numArgs: 1 },
          handler: function (a, i) {
            var s = Ba(i[0]),
              u = s ? [i[0]] : ce(i[0], "ordgroup").body,
              c = u.map(function (y) {
                var x = zi(y),
                  C = x.text;
                if ("lc".indexOf(C) !== -1) return { type: "align", align: C };
                throw new r("Unknown column alignment: " + C, y);
              });
            if (c.length > 1)
              throw new r("{subarray} can contain only one column");
            var f = { cols: c, hskipBeforeAndAfter: !1, arraystretch: 0.5 };
            if (
              ((f = yr(a.parser, f, "script")),
              f.body.length > 0 && f.body[0].length > 1)
            )
              throw new r("{subarray} can contain only one column");
            return f;
          },
          htmlBuilder: Ot,
          mathmlBuilder: _t,
        }),
        Mt({
          type: "array",
          names: ["cases", "dcases", "rcases", "drcases"],
          props: { numArgs: 0 },
          handler: function (a) {
            var i = {
                arraystretch: 1.2,
                cols: [
                  { type: "align", align: "l", pregap: 0, postgap: 1 },
                  { type: "align", align: "l", pregap: 0, postgap: 0 },
                ],
              },
              s = yr(a.parser, i, Gi(a.envName));
            return {
              type: "leftright",
              mode: a.mode,
              body: [s],
              left: a.envName.indexOf("r") > -1 ? "." : "\\{",
              right: a.envName.indexOf("r") > -1 ? "\\}" : ".",
              rightColor: void 0,
            };
          },
          htmlBuilder: Ot,
          mathmlBuilder: _t,
        }),
        Mt({
          type: "array",
          names: ["align", "align*", "aligned", "split"],
          props: { numArgs: 0 },
          handler: Eo,
          htmlBuilder: Ot,
          mathmlBuilder: _t,
        }),
        Mt({
          type: "array",
          names: ["gathered", "gather", "gather*"],
          props: { numArgs: 0 },
          handler: function (a) {
            O.contains(["gather", "gather*"], a.envName) && Oa(a);
            var i = {
              cols: [{ type: "align", align: "c" }],
              addJot: !0,
              colSeparationType: "gather",
              addEqnNum: a.envName === "gather",
              emptySingleRow: !0,
              leqno: a.parser.settings.leqno,
            };
            return yr(a.parser, i, "display");
          },
          htmlBuilder: Ot,
          mathmlBuilder: _t,
        }),
        Mt({
          type: "array",
          names: ["alignat", "alignat*", "alignedat"],
          props: { numArgs: 1 },
          handler: Eo,
          htmlBuilder: Ot,
          mathmlBuilder: _t,
        }),
        Mt({
          type: "array",
          names: ["equation", "equation*"],
          props: { numArgs: 0 },
          handler: function (a) {
            Oa(a);
            var i = {
              addEqnNum: a.envName === "equation",
              emptySingleRow: !0,
              singleRow: !0,
              maxNumCols: 1,
              leqno: a.parser.settings.leqno,
            };
            return yr(a.parser, i, "display");
          },
          htmlBuilder: Ot,
          mathmlBuilder: _t,
        }),
        Mt({
          type: "array",
          names: ["CD"],
          props: { numArgs: 0 },
          handler: function (a) {
            return Oa(a), Rp(a.parser);
          },
          htmlBuilder: Ot,
          mathmlBuilder: _t,
        }),
        Z({
          type: "text",
          names: ["\\hline", "\\hdashline"],
          props: { numArgs: 0, allowedInText: !0, allowedInMath: !0 },
          handler: function (a, i) {
            throw new r(a.funcName + " valid only within array environment");
          },
        });
      var Kp = So,
        Ao = Kp;
      Z({
        type: "environment",
        names: ["\\begin", "\\end"],
        props: { numArgs: 1, argTypes: ["text"] },
        handler: function (a, i) {
          var s = a.parser,
            u = a.funcName,
            c = i[0];
          if (c.type !== "ordgroup") throw new r("Invalid environment name", c);
          for (var f = "", y = 0; y < c.body.length; ++y)
            f += ce(c.body[y], "textord").text;
          if (u === "\\begin") {
            if (!Ao.hasOwnProperty(f))
              throw new r("No such environment: " + f, c);
            var x = Ao[f],
              C = s.parseArguments("\\begin{" + f + "}", x),
              F = C.args,
              T = C.optArgs,
              z = { mode: s.mode, envName: f, parser: s },
              P = x.handler(z, F, T);
            s.expect("\\end", !1);
            var I = s.nextToken,
              V = ce(s.parseFunction(), "environment");
            if (V.name !== f)
              throw new r(
                "Mismatch: \\begin{" + f + "} matched by \\end{" + V.name + "}",
                I
              );
            return P;
          }
          return { type: "environment", mode: s.mode, name: f, nameGroup: c };
        },
      });
      var Yp = M.makeSpan;
      function Fo(h, a) {
        var i = Ge(h.body, a, !0);
        return Yp([h.mclass], i, a);
      }
      function Bo(h, a) {
        var i,
          s = ut(h.body, a);
        return h.mclass === "minner"
          ? $.newDocumentFragment(s)
          : (h.mclass === "mord"
              ? h.isCharacterBox
                ? ((i = s[0]), (i.type = "mi"))
                : (i = new $.MathNode("mi", s))
              : (h.isCharacterBox
                  ? ((i = s[0]), (i.type = "mo"))
                  : (i = new $.MathNode("mo", s)),
                h.mclass === "mbin"
                  ? ((i.attributes.lspace = "0.22em"),
                    (i.attributes.rspace = "0.22em"))
                  : h.mclass === "mpunct"
                  ? ((i.attributes.lspace = "0em"),
                    (i.attributes.rspace = "0.17em"))
                  : (h.mclass === "mopen" || h.mclass === "mclose") &&
                    ((i.attributes.lspace = "0em"),
                    (i.attributes.rspace = "0em"))),
            i);
      }
      Z({
        type: "mclass",
        names: [
          "\\mathord",
          "\\mathbin",
          "\\mathrel",
          "\\mathopen",
          "\\mathclose",
          "\\mathpunct",
          "\\mathinner",
        ],
        props: { numArgs: 1, primitive: !0 },
        handler: function (a, i) {
          var s = a.parser,
            u = a.funcName,
            c = i[0];
          return {
            type: "mclass",
            mode: s.mode,
            mclass: "m" + u.substr(5),
            body: $e(c),
            isCharacterBox: O.isCharacterBox(c),
          };
        },
        htmlBuilder: Fo,
        mathmlBuilder: Bo,
      });
      var Zi = function (a) {
        var i = a.type === "ordgroup" && a.body.length ? a.body[0] : a;
        return i.type === "atom" && (i.family === "bin" || i.family === "rel")
          ? "m" + i.family
          : "mord";
      };
      Z({
        type: "mclass",
        names: ["\\@binrel"],
        props: { numArgs: 2 },
        handler: function (a, i) {
          var s = a.parser;
          return {
            type: "mclass",
            mode: s.mode,
            mclass: Zi(i[0]),
            body: $e(i[1]),
            isCharacterBox: O.isCharacterBox(i[1]),
          };
        },
      }),
        Z({
          type: "mclass",
          names: ["\\stackrel", "\\overset", "\\underset"],
          props: { numArgs: 2 },
          handler: function (a, i) {
            var s = a.parser,
              u = a.funcName,
              c = i[1],
              f = i[0],
              y;
            u !== "\\stackrel" ? (y = Zi(c)) : (y = "mrel");
            var x = {
                type: "op",
                mode: c.mode,
                limits: !0,
                alwaysHandleSupSub: !0,
                parentIsSupSub: !1,
                symbol: !1,
                suppressBaseShift: u !== "\\stackrel",
                body: $e(c),
              },
              C = {
                type: "supsub",
                mode: f.mode,
                base: x,
                sup: u === "\\underset" ? null : f,
                sub: u === "\\underset" ? f : null,
              };
            return {
              type: "mclass",
              mode: s.mode,
              mclass: y,
              body: [C],
              isCharacterBox: O.isCharacterBox(C),
            };
          },
          htmlBuilder: Fo,
          mathmlBuilder: Bo,
        });
      var To = function (a, i) {
          var s = a.font,
            u = i.withFont(s);
          return ve(a.body, u);
        },
        No = function (a, i) {
          var s = a.font,
            u = i.withFont(s);
          return Ae(a.body, u);
        },
        Mo = {
          "\\Bbb": "\\mathbb",
          "\\bold": "\\mathbf",
          "\\frak": "\\mathfrak",
          "\\bm": "\\boldsymbol",
        };
      Z({
        type: "font",
        names: [
          "\\mathrm",
          "\\mathit",
          "\\mathbf",
          "\\mathnormal",
          "\\mathbb",
          "\\mathcal",
          "\\mathfrak",
          "\\mathscr",
          "\\mathsf",
          "\\mathtt",
          "\\Bbb",
          "\\bold",
          "\\frak",
        ],
        props: { numArgs: 1, allowedInArgument: !0 },
        handler: function (a, i) {
          var s = a.parser,
            u = a.funcName,
            c = Aa(i[0]),
            f = u;
          return (
            f in Mo && (f = Mo[f]),
            { type: "font", mode: s.mode, font: f.slice(1), body: c }
          );
        },
        htmlBuilder: To,
        mathmlBuilder: No,
      }),
        Z({
          type: "mclass",
          names: ["\\boldsymbol", "\\bm"],
          props: { numArgs: 1 },
          handler: function (a, i) {
            var s = a.parser,
              u = i[0],
              c = O.isCharacterBox(u);
            return {
              type: "mclass",
              mode: s.mode,
              mclass: Zi(u),
              body: [
                { type: "font", mode: s.mode, font: "boldsymbol", body: u },
              ],
              isCharacterBox: c,
            };
          },
        }),
        Z({
          type: "font",
          names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
          props: { numArgs: 0, allowedInText: !0 },
          handler: function (a, i) {
            var s = a.parser,
              u = a.funcName,
              c = a.breakOnTokenText,
              f = s.mode,
              y = s.parseExpression(!0, c),
              x = "math" + u.slice(1);
            return {
              type: "font",
              mode: f,
              font: x,
              body: { type: "ordgroup", mode: s.mode, body: y },
            };
          },
          htmlBuilder: To,
          mathmlBuilder: No,
        });
      var Oo = function (a, i) {
          var s = i;
          return (
            a === "display"
              ? (s = s.id >= ee.SCRIPT.id ? s.text() : ee.DISPLAY)
              : a === "text" && s.size === ee.DISPLAY.size
              ? (s = ee.TEXT)
              : a === "script"
              ? (s = ee.SCRIPT)
              : a === "scriptscript" && (s = ee.SCRIPTSCRIPT),
            s
          );
        },
        Ji = function (a, i) {
          var s = Oo(a.size, i.style),
            u = s.fracNum(),
            c = s.fracDen(),
            f;
          f = i.havingStyle(u);
          var y = ve(a.numer, f, i);
          if (a.continued) {
            var x = 8.5 / i.fontMetrics().ptPerEm,
              C = 3.5 / i.fontMetrics().ptPerEm;
            (y.height = y.height < x ? x : y.height),
              (y.depth = y.depth < C ? C : y.depth);
          }
          f = i.havingStyle(c);
          var F = ve(a.denom, f, i),
            T,
            z,
            P;
          a.hasBarLine
            ? (a.barSize
                ? ((z = ze(a.barSize, i)),
                  (T = M.makeLineSpan("frac-line", i, z)))
                : (T = M.makeLineSpan("frac-line", i)),
              (z = T.height),
              (P = T.height))
            : ((T = null), (z = 0), (P = i.fontMetrics().defaultRuleThickness));
          var I, V, G;
          s.size === ee.DISPLAY.size || a.size === "display"
            ? ((I = i.fontMetrics().num1),
              z > 0 ? (V = 3 * P) : (V = 7 * P),
              (G = i.fontMetrics().denom1))
            : (z > 0
                ? ((I = i.fontMetrics().num2), (V = P))
                : ((I = i.fontMetrics().num3), (V = 3 * P)),
              (G = i.fontMetrics().denom2));
          var K;
          if (T) {
            var te = i.fontMetrics().axisHeight;
            I - y.depth - (te + 0.5 * z) < V &&
              (I += V - (I - y.depth - (te + 0.5 * z))),
              te - 0.5 * z - (F.height - G) < V &&
                (G += V - (te - 0.5 * z - (F.height - G)));
            var ye = -(te - 0.5 * z);
            K = M.makeVList(
              {
                positionType: "individualShift",
                children: [
                  { type: "elem", elem: F, shift: G },
                  { type: "elem", elem: T, shift: ye },
                  { type: "elem", elem: y, shift: -I },
                ],
              },
              i
            );
          } else {
            var Q = I - y.depth - (F.height - G);
            Q < V && ((I += 0.5 * (V - Q)), (G += 0.5 * (V - Q))),
              (K = M.makeVList(
                {
                  positionType: "individualShift",
                  children: [
                    { type: "elem", elem: F, shift: G },
                    { type: "elem", elem: y, shift: -I },
                  ],
                },
                i
              ));
          }
          (f = i.havingStyle(s)),
            (K.height *= f.sizeMultiplier / i.sizeMultiplier),
            (K.depth *= f.sizeMultiplier / i.sizeMultiplier);
          var Se;
          s.size === ee.DISPLAY.size
            ? (Se = i.fontMetrics().delim1)
            : s.size === ee.SCRIPTSCRIPT.size
            ? (Se = i.havingStyle(ee.SCRIPT).fontMetrics().delim2)
            : (Se = i.fontMetrics().delim2);
          var _e, Ce;
          return (
            a.leftDelim == null
              ? (_e = zn(i, ["mopen"]))
              : (_e = Kt.customSizedDelim(
                  a.leftDelim,
                  Se,
                  !0,
                  i.havingStyle(s),
                  a.mode,
                  ["mopen"]
                )),
            a.continued
              ? (Ce = M.makeSpan([]))
              : a.rightDelim == null
              ? (Ce = zn(i, ["mclose"]))
              : (Ce = Kt.customSizedDelim(
                  a.rightDelim,
                  Se,
                  !0,
                  i.havingStyle(s),
                  a.mode,
                  ["mclose"]
                )),
            M.makeSpan(
              ["mord"].concat(f.sizingClasses(i)),
              [_e, M.makeSpan(["mfrac"], [K]), Ce],
              i
            )
          );
        },
        Xi = function (a, i) {
          var s = new $.MathNode("mfrac", [Ae(a.numer, i), Ae(a.denom, i)]);
          if (!a.hasBarLine) s.setAttribute("linethickness", "0px");
          else if (a.barSize) {
            var u = ze(a.barSize, i);
            s.setAttribute("linethickness", U(u));
          }
          var c = Oo(a.size, i.style);
          if (c.size !== i.style.size) {
            s = new $.MathNode("mstyle", [s]);
            var f = c.size === ee.DISPLAY.size ? "true" : "false";
            s.setAttribute("displaystyle", f),
              s.setAttribute("scriptlevel", "0");
          }
          if (a.leftDelim != null || a.rightDelim != null) {
            var y = [];
            if (a.leftDelim != null) {
              var x = new $.MathNode("mo", [
                new $.TextNode(a.leftDelim.replace("\\", "")),
              ]);
              x.setAttribute("fence", "true"), y.push(x);
            }
            if ((y.push(s), a.rightDelim != null)) {
              var C = new $.MathNode("mo", [
                new $.TextNode(a.rightDelim.replace("\\", "")),
              ]);
              C.setAttribute("fence", "true"), y.push(C);
            }
            return Oi(y);
          }
          return s;
        };
      Z({
        type: "genfrac",
        names: [
          "\\dfrac",
          "\\frac",
          "\\tfrac",
          "\\dbinom",
          "\\binom",
          "\\tbinom",
          "\\\\atopfrac",
          "\\\\bracefrac",
          "\\\\brackfrac",
        ],
        props: { numArgs: 2, allowedInArgument: !0 },
        handler: function (a, i) {
          var s = a.parser,
            u = a.funcName,
            c = i[0],
            f = i[1],
            y,
            x = null,
            C = null,
            F = "auto";
          switch (u) {
            case "\\dfrac":
            case "\\frac":
            case "\\tfrac":
              y = !0;
              break;
            case "\\\\atopfrac":
              y = !1;
              break;
            case "\\dbinom":
            case "\\binom":
            case "\\tbinom":
              (y = !1), (x = "("), (C = ")");
              break;
            case "\\\\bracefrac":
              (y = !1), (x = "\\{"), (C = "\\}");
              break;
            case "\\\\brackfrac":
              (y = !1), (x = "["), (C = "]");
              break;
            default:
              throw new Error("Unrecognized genfrac command");
          }
          switch (u) {
            case "\\dfrac":
            case "\\dbinom":
              F = "display";
              break;
            case "\\tfrac":
            case "\\tbinom":
              F = "text";
              break;
          }
          return {
            type: "genfrac",
            mode: s.mode,
            continued: !1,
            numer: c,
            denom: f,
            hasBarLine: y,
            leftDelim: x,
            rightDelim: C,
            size: F,
            barSize: null,
          };
        },
        htmlBuilder: Ji,
        mathmlBuilder: Xi,
      }),
        Z({
          type: "genfrac",
          names: ["\\cfrac"],
          props: { numArgs: 2 },
          handler: function (a, i) {
            var s = a.parser,
              u = a.funcName,
              c = i[0],
              f = i[1];
            return {
              type: "genfrac",
              mode: s.mode,
              continued: !0,
              numer: c,
              denom: f,
              hasBarLine: !0,
              leftDelim: null,
              rightDelim: null,
              size: "display",
              barSize: null,
            };
          },
        }),
        Z({
          type: "infix",
          names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
          props: { numArgs: 0, infix: !0 },
          handler: function (a) {
            var i = a.parser,
              s = a.funcName,
              u = a.token,
              c;
            switch (s) {
              case "\\over":
                c = "\\frac";
                break;
              case "\\choose":
                c = "\\binom";
                break;
              case "\\atop":
                c = "\\\\atopfrac";
                break;
              case "\\brace":
                c = "\\\\bracefrac";
                break;
              case "\\brack":
                c = "\\\\brackfrac";
                break;
              default:
                throw new Error("Unrecognized infix genfrac command");
            }
            return { type: "infix", mode: i.mode, replaceWith: c, token: u };
          },
        });
      var _o = ["display", "text", "script", "scriptscript"],
        zo = function (a) {
          var i = null;
          return a.length > 0 && ((i = a), (i = i === "." ? null : i)), i;
        };
      Z({
        type: "genfrac",
        names: ["\\genfrac"],
        props: {
          numArgs: 6,
          allowedInArgument: !0,
          argTypes: ["math", "math", "size", "text", "math", "math"],
        },
        handler: function (a, i) {
          var s = a.parser,
            u = i[4],
            c = i[5],
            f = Aa(i[0]),
            y = f.type === "atom" && f.family === "open" ? zo(f.text) : null,
            x = Aa(i[1]),
            C = x.type === "atom" && x.family === "close" ? zo(x.text) : null,
            F = ce(i[2], "size"),
            T,
            z = null;
          F.isBlank ? (T = !0) : ((z = F.value), (T = z.number > 0));
          var P = "auto",
            I = i[3];
          if (I.type === "ordgroup") {
            if (I.body.length > 0) {
              var V = ce(I.body[0], "textord");
              P = _o[Number(V.text)];
            }
          } else (I = ce(I, "textord")), (P = _o[Number(I.text)]);
          return {
            type: "genfrac",
            mode: s.mode,
            numer: u,
            denom: c,
            continued: !1,
            hasBarLine: T,
            barSize: z,
            leftDelim: y,
            rightDelim: C,
            size: P,
          };
        },
        htmlBuilder: Ji,
        mathmlBuilder: Xi,
      }),
        Z({
          type: "infix",
          names: ["\\above"],
          props: { numArgs: 1, argTypes: ["size"], infix: !0 },
          handler: function (a, i) {
            var s = a.parser,
              u = a.funcName,
              c = a.token;
            return {
              type: "infix",
              mode: s.mode,
              replaceWith: "\\\\abovefrac",
              size: ce(i[0], "size").value,
              token: c,
            };
          },
        }),
        Z({
          type: "genfrac",
          names: ["\\\\abovefrac"],
          props: { numArgs: 3, argTypes: ["math", "size", "math"] },
          handler: function (a, i) {
            var s = a.parser,
              u = a.funcName,
              c = i[0],
              f = _(ce(i[1], "infix").size),
              y = i[2],
              x = f.number > 0;
            return {
              type: "genfrac",
              mode: s.mode,
              numer: c,
              denom: y,
              continued: !1,
              hasBarLine: x,
              barSize: f,
              leftDelim: null,
              rightDelim: null,
              size: "auto",
            };
          },
          htmlBuilder: Ji,
          mathmlBuilder: Xi,
        });
      var Ro = function (a, i) {
          var s = i.style,
            u,
            c;
          a.type === "supsub"
            ? ((u = a.sup
                ? ve(a.sup, i.havingStyle(s.sup()), i)
                : ve(a.sub, i.havingStyle(s.sub()), i)),
              (c = ce(a.base, "horizBrace")))
            : (c = ce(a, "horizBrace"));
          var f = ve(c.base, i.havingBaseStyle(ee.DISPLAY)),
            y = Xt.svgSpan(c, i),
            x;
          if (
            (c.isOver
              ? ((x = M.makeVList(
                  {
                    positionType: "firstBaseline",
                    children: [
                      { type: "elem", elem: f },
                      { type: "kern", size: 0.1 },
                      { type: "elem", elem: y },
                    ],
                  },
                  i
                )),
                x.children[0].children[0].children[1].classes.push("svg-align"))
              : ((x = M.makeVList(
                  {
                    positionType: "bottom",
                    positionData: f.depth + 0.1 + y.height,
                    children: [
                      { type: "elem", elem: y },
                      { type: "kern", size: 0.1 },
                      { type: "elem", elem: f },
                    ],
                  },
                  i
                )),
                x.children[0].children[0].children[0].classes.push(
                  "svg-align"
                )),
            u)
          ) {
            var C = M.makeSpan(["mord", c.isOver ? "mover" : "munder"], [x], i);
            c.isOver
              ? (x = M.makeVList(
                  {
                    positionType: "firstBaseline",
                    children: [
                      { type: "elem", elem: C },
                      { type: "kern", size: 0.2 },
                      { type: "elem", elem: u },
                    ],
                  },
                  i
                ))
              : (x = M.makeVList(
                  {
                    positionType: "bottom",
                    positionData: C.depth + 0.2 + u.height + u.depth,
                    children: [
                      { type: "elem", elem: u },
                      { type: "kern", size: 0.2 },
                      { type: "elem", elem: C },
                    ],
                  },
                  i
                ));
          }
          return M.makeSpan(["mord", c.isOver ? "mover" : "munder"], [x], i);
        },
        Qp = function (a, i) {
          var s = Xt.mathMLnode(a.label);
          return new $.MathNode(a.isOver ? "mover" : "munder", [
            Ae(a.base, i),
            s,
          ]);
        };
      Z({
        type: "horizBrace",
        names: ["\\overbrace", "\\underbrace"],
        props: { numArgs: 1 },
        handler: function (a, i) {
          var s = a.parser,
            u = a.funcName;
          return {
            type: "horizBrace",
            mode: s.mode,
            label: u,
            isOver: /^\\over/.test(u),
            base: i[0],
          };
        },
        htmlBuilder: Ro,
        mathmlBuilder: Qp,
      }),
        Z({
          type: "href",
          names: ["\\href"],
          props: {
            numArgs: 2,
            argTypes: ["url", "original"],
            allowedInText: !0,
          },
          handler: function (a, i) {
            var s = a.parser,
              u = i[1],
              c = ce(i[0], "url").url;
            return s.settings.isTrusted({ command: "\\href", url: c })
              ? { type: "href", mode: s.mode, href: c, body: $e(u) }
              : s.formatUnsupportedCmd("\\href");
          },
          htmlBuilder: function (a, i) {
            var s = Ge(a.body, i, !1);
            return M.makeAnchor(a.href, [], s, i);
          },
          mathmlBuilder: function (a, i) {
            var s = vr(a.body, i);
            return (
              s instanceof mt || (s = new mt("mrow", [s])),
              s.setAttribute("href", a.href),
              s
            );
          },
        }),
        Z({
          type: "href",
          names: ["\\url"],
          props: { numArgs: 1, argTypes: ["url"], allowedInText: !0 },
          handler: function (a, i) {
            var s = a.parser,
              u = ce(i[0], "url").url;
            if (!s.settings.isTrusted({ command: "\\url", url: u }))
              return s.formatUnsupportedCmd("\\url");
            for (var c = [], f = 0; f < u.length; f++) {
              var y = u[f];
              y === "~" && (y = "\\textasciitilde"),
                c.push({ type: "textord", mode: "text", text: y });
            }
            var x = { type: "text", mode: s.mode, font: "\\texttt", body: c };
            return { type: "href", mode: s.mode, href: u, body: $e(x) };
          },
        }),
        Z({
          type: "hbox",
          names: ["\\hbox"],
          props: {
            numArgs: 1,
            argTypes: ["text"],
            allowedInText: !0,
            primitive: !0,
          },
          handler: function (a, i) {
            var s = a.parser;
            return { type: "hbox", mode: s.mode, body: $e(i[0]) };
          },
          htmlBuilder: function (a, i) {
            var s = Ge(a.body, i, !1);
            return M.makeFragment(s);
          },
          mathmlBuilder: function (a, i) {
            return new $.MathNode("mrow", ut(a.body, i));
          },
        }),
        Z({
          type: "html",
          names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
          props: {
            numArgs: 2,
            argTypes: ["raw", "original"],
            allowedInText: !0,
          },
          handler: function (a, i) {
            var s = a.parser,
              u = a.funcName,
              c = a.token,
              f = ce(i[0], "raw").string,
              y = i[1];
            s.settings.strict &&
              s.settings.reportNonstrict(
                "htmlExtension",
                "HTML extension is disabled on strict mode"
              );
            var x,
              C = {};
            switch (u) {
              case "\\htmlClass":
                (C.class = f), (x = { command: "\\htmlClass", class: f });
                break;
              case "\\htmlId":
                (C.id = f), (x = { command: "\\htmlId", id: f });
                break;
              case "\\htmlStyle":
                (C.style = f), (x = { command: "\\htmlStyle", style: f });
                break;
              case "\\htmlData": {
                for (var F = f.split(","), T = 0; T < F.length; T++) {
                  var z = F[T].split("=");
                  if (z.length !== 2)
                    throw new r("Error parsing key-value for \\htmlData");
                  C["data-" + z[0].trim()] = z[1].trim();
                }
                x = { command: "\\htmlData", attributes: C };
                break;
              }
              default:
                throw new Error("Unrecognized html command");
            }
            return s.settings.isTrusted(x)
              ? { type: "html", mode: s.mode, attributes: C, body: $e(y) }
              : s.formatUnsupportedCmd(u);
          },
          htmlBuilder: function (a, i) {
            var s = Ge(a.body, i, !1),
              u = ["enclosing"];
            a.attributes.class &&
              u.push.apply(u, a.attributes.class.trim().split(/\s+/));
            var c = M.makeSpan(u, s, i);
            for (var f in a.attributes)
              f !== "class" &&
                a.attributes.hasOwnProperty(f) &&
                c.setAttribute(f, a.attributes[f]);
            return c;
          },
          mathmlBuilder: function (a, i) {
            return vr(a.body, i);
          },
        }),
        Z({
          type: "htmlmathml",
          names: ["\\html@mathml"],
          props: { numArgs: 2, allowedInText: !0 },
          handler: function (a, i) {
            var s = a.parser;
            return {
              type: "htmlmathml",
              mode: s.mode,
              html: $e(i[0]),
              mathml: $e(i[1]),
            };
          },
          htmlBuilder: function (a, i) {
            var s = Ge(a.html, i, !1);
            return M.makeFragment(s);
          },
          mathmlBuilder: function (a, i) {
            return vr(a.mathml, i);
          },
        });
      var Ki = function (a) {
        if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(a))
          return { number: +a, unit: "bp" };
        var i = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(a);
        if (!i) throw new r("Invalid size: '" + a + "' in \\includegraphics");
        var s = { number: +(i[1] + i[2]), unit: i[3] };
        if (!Is(s))
          throw new r("Invalid unit: '" + s.unit + "' in \\includegraphics.");
        return s;
      };
      Z({
        type: "includegraphics",
        names: ["\\includegraphics"],
        props: {
          numArgs: 1,
          numOptionalArgs: 1,
          argTypes: ["raw", "url"],
          allowedInText: !1,
        },
        handler: function (a, i, s) {
          var u = a.parser,
            c = { number: 0, unit: "em" },
            f = { number: 0.9, unit: "em" },
            y = { number: 0, unit: "em" },
            x = "";
          if (s[0])
            for (
              var C = ce(s[0], "raw").string, F = C.split(","), T = 0;
              T < F.length;
              T++
            ) {
              var z = F[T].split("=");
              if (z.length === 2) {
                var P = z[1].trim();
                switch (z[0].trim()) {
                  case "alt":
                    x = P;
                    break;
                  case "width":
                    c = Ki(P);
                    break;
                  case "height":
                    f = Ki(P);
                    break;
                  case "totalheight":
                    y = Ki(P);
                    break;
                  default:
                    throw new r(
                      "Invalid key: '" + z[0] + "' in \\includegraphics."
                    );
                }
              }
            }
          var I = ce(i[0], "url").url;
          return (
            x === "" &&
              ((x = I),
              (x = x.replace(/^.*[\\/]/, "")),
              (x = x.substring(0, x.lastIndexOf(".")))),
            u.settings.isTrusted({ command: "\\includegraphics", url: I })
              ? {
                  type: "includegraphics",
                  mode: u.mode,
                  alt: x,
                  width: c,
                  height: f,
                  totalheight: y,
                  src: I,
                }
              : u.formatUnsupportedCmd("\\includegraphics")
          );
        },
        htmlBuilder: function (a, i) {
          var s = ze(a.height, i),
            u = 0;
          a.totalheight.number > 0 && (u = ze(a.totalheight, i) - s);
          var c = 0;
          a.width.number > 0 && (c = ze(a.width, i));
          var f = { height: U(s + u) };
          c > 0 && (f.width = U(c)), u > 0 && (f.verticalAlign = U(-u));
          var y = new Yd(a.src, a.alt, f);
          return (y.height = s), (y.depth = u), y;
        },
        mathmlBuilder: function (a, i) {
          var s = new $.MathNode("mglyph", []);
          s.setAttribute("alt", a.alt);
          var u = ze(a.height, i),
            c = 0;
          if (
            (a.totalheight.number > 0 &&
              ((c = ze(a.totalheight, i) - u), s.setAttribute("valign", U(-c))),
            s.setAttribute("height", U(u + c)),
            a.width.number > 0)
          ) {
            var f = ze(a.width, i);
            s.setAttribute("width", U(f));
          }
          return s.setAttribute("src", a.src), s;
        },
      }),
        Z({
          type: "kern",
          names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
          props: {
            numArgs: 1,
            argTypes: ["size"],
            primitive: !0,
            allowedInText: !0,
          },
          handler: function (a, i) {
            var s = a.parser,
              u = a.funcName,
              c = ce(i[0], "size");
            if (s.settings.strict) {
              var f = u[1] === "m",
                y = c.value.unit === "mu";
              f
                ? (y ||
                    s.settings.reportNonstrict(
                      "mathVsTextUnits",
                      "LaTeX's " +
                        u +
                        " supports only mu units, " +
                        ("not " + c.value.unit + " units")
                    ),
                  s.mode !== "math" &&
                    s.settings.reportNonstrict(
                      "mathVsTextUnits",
                      "LaTeX's " + u + " works only in math mode"
                    ))
                : y &&
                  s.settings.reportNonstrict(
                    "mathVsTextUnits",
                    "LaTeX's " + u + " doesn't support mu units"
                  );
            }
            return { type: "kern", mode: s.mode, dimension: c.value };
          },
          htmlBuilder: function (a, i) {
            return M.makeGlue(a.dimension, i);
          },
          mathmlBuilder: function (a, i) {
            var s = ze(a.dimension, i);
            return new $.SpaceNode(s);
          },
        }),
        Z({
          type: "lap",
          names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
          props: { numArgs: 1, allowedInText: !0 },
          handler: function (a, i) {
            var s = a.parser,
              u = a.funcName,
              c = i[0];
            return {
              type: "lap",
              mode: s.mode,
              alignment: u.slice(5),
              body: c,
            };
          },
          htmlBuilder: function (a, i) {
            var s;
            a.alignment === "clap"
              ? ((s = M.makeSpan([], [ve(a.body, i)])),
                (s = M.makeSpan(["inner"], [s], i)))
              : (s = M.makeSpan(["inner"], [ve(a.body, i)]));
            var u = M.makeSpan(["fix"], []),
              c = M.makeSpan([a.alignment], [s, u], i),
              f = M.makeSpan(["strut"]);
            return (
              (f.style.height = U(c.height + c.depth)),
              c.depth && (f.style.verticalAlign = U(-c.depth)),
              c.children.unshift(f),
              (c = M.makeSpan(["thinbox"], [c], i)),
              M.makeSpan(["mord", "vbox"], [c], i)
            );
          },
          mathmlBuilder: function (a, i) {
            var s = new $.MathNode("mpadded", [Ae(a.body, i)]);
            if (a.alignment !== "rlap") {
              var u = a.alignment === "llap" ? "-1" : "-0.5";
              s.setAttribute("lspace", u + "width");
            }
            return s.setAttribute("width", "0px"), s;
          },
        }),
        Z({
          type: "styling",
          names: ["\\(", "$"],
          props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
          handler: function (a, i) {
            var s = a.funcName,
              u = a.parser,
              c = u.mode;
            u.switchMode("math");
            var f = s === "\\(" ? "\\)" : "$",
              y = u.parseExpression(!1, f);
            return (
              u.expect(f),
              u.switchMode(c),
              { type: "styling", mode: u.mode, style: "text", body: y }
            );
          },
        }),
        Z({
          type: "text",
          names: ["\\)", "\\]"],
          props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
          handler: function (a, i) {
            throw new r("Mismatched " + a.funcName);
          },
        });
      var Po = function (a, i) {
        switch (i.style.size) {
          case ee.DISPLAY.size:
            return a.display;
          case ee.TEXT.size:
            return a.text;
          case ee.SCRIPT.size:
            return a.script;
          case ee.SCRIPTSCRIPT.size:
            return a.scriptscript;
          default:
            return a.text;
        }
      };
      Z({
        type: "mathchoice",
        names: ["\\mathchoice"],
        props: { numArgs: 4, primitive: !0 },
        handler: function (a, i) {
          var s = a.parser;
          return {
            type: "mathchoice",
            mode: s.mode,
            display: $e(i[0]),
            text: $e(i[1]),
            script: $e(i[2]),
            scriptscript: $e(i[3]),
          };
        },
        htmlBuilder: function (a, i) {
          var s = Po(a, i),
            u = Ge(s, i, !1);
          return M.makeFragment(u);
        },
        mathmlBuilder: function (a, i) {
          var s = Po(a, i);
          return vr(s, i);
        },
      });
      var Io = function (a, i, s, u, c, f, y) {
          a = M.makeSpan([], [a]);
          var x = s && O.isCharacterBox(s),
            C,
            F;
          if (i) {
            var T = ve(i, u.havingStyle(c.sup()), u);
            F = {
              elem: T,
              kern: Math.max(
                u.fontMetrics().bigOpSpacing1,
                u.fontMetrics().bigOpSpacing3 - T.depth
              ),
            };
          }
          if (s) {
            var z = ve(s, u.havingStyle(c.sub()), u);
            C = {
              elem: z,
              kern: Math.max(
                u.fontMetrics().bigOpSpacing2,
                u.fontMetrics().bigOpSpacing4 - z.height
              ),
            };
          }
          var P;
          if (F && C) {
            var I =
              u.fontMetrics().bigOpSpacing5 +
              C.elem.height +
              C.elem.depth +
              C.kern +
              a.depth +
              y;
            P = M.makeVList(
              {
                positionType: "bottom",
                positionData: I,
                children: [
                  { type: "kern", size: u.fontMetrics().bigOpSpacing5 },
                  { type: "elem", elem: C.elem, marginLeft: U(-f) },
                  { type: "kern", size: C.kern },
                  { type: "elem", elem: a },
                  { type: "kern", size: F.kern },
                  { type: "elem", elem: F.elem, marginLeft: U(f) },
                  { type: "kern", size: u.fontMetrics().bigOpSpacing5 },
                ],
              },
              u
            );
          } else if (C) {
            var V = a.height - y;
            P = M.makeVList(
              {
                positionType: "top",
                positionData: V,
                children: [
                  { type: "kern", size: u.fontMetrics().bigOpSpacing5 },
                  { type: "elem", elem: C.elem, marginLeft: U(-f) },
                  { type: "kern", size: C.kern },
                  { type: "elem", elem: a },
                ],
              },
              u
            );
          } else if (F) {
            var G = a.depth + y;
            P = M.makeVList(
              {
                positionType: "bottom",
                positionData: G,
                children: [
                  { type: "elem", elem: a },
                  { type: "kern", size: F.kern },
                  { type: "elem", elem: F.elem, marginLeft: U(f) },
                  { type: "kern", size: u.fontMetrics().bigOpSpacing5 },
                ],
              },
              u
            );
          } else return a;
          var K = [P];
          if (C && f !== 0 && !x) {
            var Q = M.makeSpan(["mspace"], [], u);
            (Q.style.marginRight = U(f)), K.unshift(Q);
          }
          return M.makeSpan(["mop", "op-limits"], K, u);
        },
        jo = ["\\smallint"],
        hn = function (a, i) {
          var s,
            u,
            c = !1,
            f;
          a.type === "supsub"
            ? ((s = a.sup), (u = a.sub), (f = ce(a.base, "op")), (c = !0))
            : (f = ce(a, "op"));
          var y = i.style,
            x = !1;
          y.size === ee.DISPLAY.size &&
            f.symbol &&
            !O.contains(jo, f.name) &&
            (x = !0);
          var C;
          if (f.symbol) {
            var F = x ? "Size2-Regular" : "Size1-Regular",
              T = "";
            if (
              ((f.name === "\\oiint" || f.name === "\\oiiint") &&
                ((T = f.name.substr(1)),
                (f.name = T === "oiint" ? "\\iint" : "\\iiint")),
              (C = M.makeSymbol(f.name, F, "math", i, [
                "mop",
                "op-symbol",
                x ? "large-op" : "small-op",
              ])),
              T.length > 0)
            ) {
              var z = C.italic,
                P = M.staticSvg(T + "Size" + (x ? "2" : "1"), i);
              (C = M.makeVList(
                {
                  positionType: "individualShift",
                  children: [
                    { type: "elem", elem: C, shift: 0 },
                    { type: "elem", elem: P, shift: x ? 0.08 : 0 },
                  ],
                },
                i
              )),
                (f.name = "\\" + T),
                C.classes.unshift("mop"),
                (C.italic = z);
            }
          } else if (f.body) {
            var I = Ge(f.body, i, !0);
            I.length === 1 && I[0] instanceof ht
              ? ((C = I[0]), (C.classes[0] = "mop"))
              : (C = M.makeSpan(["mop"], I, i));
          } else {
            for (var V = [], G = 1; G < f.name.length; G++)
              V.push(M.mathsym(f.name[G], f.mode, i));
            C = M.makeSpan(["mop"], V, i);
          }
          var K = 0,
            Q = 0;
          return (
            (C instanceof ht ||
              f.name === "\\oiint" ||
              f.name === "\\oiiint") &&
              !f.suppressBaseShift &&
              ((K = (C.height - C.depth) / 2 - i.fontMetrics().axisHeight),
              (Q = C.italic)),
            c
              ? Io(C, s, u, i, y, Q, K)
              : (K && ((C.style.position = "relative"), (C.style.top = U(K))),
                C)
          );
        },
        jn = function (a, i) {
          var s;
          if (a.symbol)
            (s = new mt("mo", [gt(a.name, a.mode)])),
              O.contains(jo, a.name) && s.setAttribute("largeop", "false");
          else if (a.body) s = new mt("mo", ut(a.body, i));
          else {
            s = new mt("mi", [new Rn(a.name.slice(1))]);
            var u = new mt("mo", [gt("\u2061", "text")]);
            a.parentIsSupSub ? (s = new mt("mrow", [s, u])) : (s = ro([s, u]));
          }
          return s;
        },
        ef = {
          "\u220F": "\\prod",
          "\u2210": "\\coprod",
          "\u2211": "\\sum",
          "\u22C0": "\\bigwedge",
          "\u22C1": "\\bigvee",
          "\u22C2": "\\bigcap",
          "\u22C3": "\\bigcup",
          "\u2A00": "\\bigodot",
          "\u2A01": "\\bigoplus",
          "\u2A02": "\\bigotimes",
          "\u2A04": "\\biguplus",
          "\u2A06": "\\bigsqcup",
        };
      Z({
        type: "op",
        names: [
          "\\coprod",
          "\\bigvee",
          "\\bigwedge",
          "\\biguplus",
          "\\bigcap",
          "\\bigcup",
          "\\intop",
          "\\prod",
          "\\sum",
          "\\bigotimes",
          "\\bigoplus",
          "\\bigodot",
          "\\bigsqcup",
          "\\smallint",
          "\u220F",
          "\u2210",
          "\u2211",
          "\u22C0",
          "\u22C1",
          "\u22C2",
          "\u22C3",
          "\u2A00",
          "\u2A01",
          "\u2A02",
          "\u2A04",
          "\u2A06",
        ],
        props: { numArgs: 0 },
        handler: function (a, i) {
          var s = a.parser,
            u = a.funcName,
            c = u;
          return (
            c.length === 1 && (c = ef[c]),
            {
              type: "op",
              mode: s.mode,
              limits: !0,
              parentIsSupSub: !1,
              symbol: !0,
              name: c,
            }
          );
        },
        htmlBuilder: hn,
        mathmlBuilder: jn,
      }),
        Z({
          type: "op",
          names: ["\\mathop"],
          props: { numArgs: 1, primitive: !0 },
          handler: function (a, i) {
            var s = a.parser,
              u = i[0];
            return {
              type: "op",
              mode: s.mode,
              limits: !1,
              parentIsSupSub: !1,
              symbol: !1,
              body: $e(u),
            };
          },
          htmlBuilder: hn,
          mathmlBuilder: jn,
        });
      var tf = {
        "\u222B": "\\int",
        "\u222C": "\\iint",
        "\u222D": "\\iiint",
        "\u222E": "\\oint",
        "\u222F": "\\oiint",
        "\u2230": "\\oiiint",
      };
      Z({
        type: "op",
        names: [
          "\\arcsin",
          "\\arccos",
          "\\arctan",
          "\\arctg",
          "\\arcctg",
          "\\arg",
          "\\ch",
          "\\cos",
          "\\cosec",
          "\\cosh",
          "\\cot",
          "\\cotg",
          "\\coth",
          "\\csc",
          "\\ctg",
          "\\cth",
          "\\deg",
          "\\dim",
          "\\exp",
          "\\hom",
          "\\ker",
          "\\lg",
          "\\ln",
          "\\log",
          "\\sec",
          "\\sin",
          "\\sinh",
          "\\sh",
          "\\tan",
          "\\tanh",
          "\\tg",
          "\\th",
        ],
        props: { numArgs: 0 },
        handler: function (a) {
          var i = a.parser,
            s = a.funcName;
          return {
            type: "op",
            mode: i.mode,
            limits: !1,
            parentIsSupSub: !1,
            symbol: !1,
            name: s,
          };
        },
        htmlBuilder: hn,
        mathmlBuilder: jn,
      }),
        Z({
          type: "op",
          names: [
            "\\det",
            "\\gcd",
            "\\inf",
            "\\lim",
            "\\max",
            "\\min",
            "\\Pr",
            "\\sup",
          ],
          props: { numArgs: 0 },
          handler: function (a) {
            var i = a.parser,
              s = a.funcName;
            return {
              type: "op",
              mode: i.mode,
              limits: !0,
              parentIsSupSub: !1,
              symbol: !1,
              name: s,
            };
          },
          htmlBuilder: hn,
          mathmlBuilder: jn,
        }),
        Z({
          type: "op",
          names: [
            "\\int",
            "\\iint",
            "\\iiint",
            "\\oint",
            "\\oiint",
            "\\oiiint",
            "\u222B",
            "\u222C",
            "\u222D",
            "\u222E",
            "\u222F",
            "\u2230",
          ],
          props: { numArgs: 0 },
          handler: function (a) {
            var i = a.parser,
              s = a.funcName,
              u = s;
            return (
              u.length === 1 && (u = tf[u]),
              {
                type: "op",
                mode: i.mode,
                limits: !1,
                parentIsSupSub: !1,
                symbol: !0,
                name: u,
              }
            );
          },
          htmlBuilder: hn,
          mathmlBuilder: jn,
        });
      var Lo = {};
      function b(h, a) {
        Lo[h] = a;
      }
      var $o = function (a, i) {
          var s,
            u,
            c = !1,
            f;
          a.type === "supsub"
            ? ((s = a.sup),
              (u = a.sub),
              (f = ce(a.base, "operatorname")),
              (c = !0))
            : (f = ce(a, "operatorname"));
          var y;
          if (f.body.length > 0) {
            for (
              var x = f.body.map(function (z) {
                  var P = z.text;
                  return typeof P == "string"
                    ? { type: "textord", mode: z.mode, text: P }
                    : z;
                }),
                C = Ge(x, i.withFont("mathrm"), !0),
                F = 0;
              F < C.length;
              F++
            ) {
              var T = C[F];
              T instanceof ht &&
                (T.text = T.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
            }
            y = M.makeSpan(["mop"], C, i);
          } else y = M.makeSpan(["mop"], [], i);
          return c ? Io(y, s, u, i, i.style, 0, 0) : y;
        },
        rf = function (a, i) {
          for (
            var s = ut(a.body, i.withFont("mathrm")), u = !0, c = 0;
            c < s.length;
            c++
          ) {
            var f = s[c];
            if (!(f instanceof $.SpaceNode))
              if (f instanceof $.MathNode)
                switch (f.type) {
                  case "mi":
                  case "mn":
                  case "ms":
                  case "mspace":
                  case "mtext":
                    break;
                  case "mo": {
                    var y = f.children[0];
                    f.children.length === 1 && y instanceof $.TextNode
                      ? (y.text = y.text
                          .replace(/\u2212/, "-")
                          .replace(/\u2217/, "*"))
                      : (u = !1);
                    break;
                  }
                  default:
                    u = !1;
                }
              else u = !1;
          }
          if (u) {
            var x = s
              .map(function (T) {
                return T.toText();
              })
              .join("");
            s = [new $.TextNode(x)];
          }
          var C = new $.MathNode("mi", s);
          C.setAttribute("mathvariant", "normal");
          var F = new $.MathNode("mo", [gt("\u2061", "text")]);
          return a.parentIsSupSub
            ? new $.MathNode("mrow", [C, F])
            : $.newDocumentFragment([C, F]);
        };
      Z({
        type: "operatorname",
        names: ["\\operatorname@", "\\operatornamewithlimits"],
        props: { numArgs: 1 },
        handler: function (a, i) {
          var s = a.parser,
            u = a.funcName,
            c = i[0];
          return {
            type: "operatorname",
            mode: s.mode,
            body: $e(c),
            alwaysHandleSupSub: u === "\\operatornamewithlimits",
            limits: !1,
            parentIsSupSub: !1,
          };
        },
        htmlBuilder: $o,
        mathmlBuilder: rf,
      }),
        b("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@"),
        Zr({
          type: "ordgroup",
          htmlBuilder: function (a, i) {
            return a.semisimple
              ? M.makeFragment(Ge(a.body, i, !1))
              : M.makeSpan(["mord"], Ge(a.body, i, !0), i);
          },
          mathmlBuilder: function (a, i) {
            return vr(a.body, i, !0);
          },
        }),
        Z({
          type: "overline",
          names: ["\\overline"],
          props: { numArgs: 1 },
          handler: function (a, i) {
            var s = a.parser,
              u = i[0];
            return { type: "overline", mode: s.mode, body: u };
          },
          htmlBuilder: function (a, i) {
            var s = ve(a.body, i.havingCrampedStyle()),
              u = M.makeLineSpan("overline-line", i),
              c = i.fontMetrics().defaultRuleThickness,
              f = M.makeVList(
                {
                  positionType: "firstBaseline",
                  children: [
                    { type: "elem", elem: s },
                    { type: "kern", size: 3 * c },
                    { type: "elem", elem: u },
                    { type: "kern", size: c },
                  ],
                },
                i
              );
            return M.makeSpan(["mord", "overline"], [f], i);
          },
          mathmlBuilder: function (a, i) {
            var s = new $.MathNode("mo", [new $.TextNode("\u203E")]);
            s.setAttribute("stretchy", "true");
            var u = new $.MathNode("mover", [Ae(a.body, i), s]);
            return u.setAttribute("accent", "true"), u;
          },
        }),
        Z({
          type: "phantom",
          names: ["\\phantom"],
          props: { numArgs: 1, allowedInText: !0 },
          handler: function (a, i) {
            var s = a.parser,
              u = i[0];
            return { type: "phantom", mode: s.mode, body: $e(u) };
          },
          htmlBuilder: function (a, i) {
            var s = Ge(a.body, i.withPhantom(), !1);
            return M.makeFragment(s);
          },
          mathmlBuilder: function (a, i) {
            var s = ut(a.body, i);
            return new $.MathNode("mphantom", s);
          },
        }),
        Z({
          type: "hphantom",
          names: ["\\hphantom"],
          props: { numArgs: 1, allowedInText: !0 },
          handler: function (a, i) {
            var s = a.parser,
              u = i[0];
            return { type: "hphantom", mode: s.mode, body: u };
          },
          htmlBuilder: function (a, i) {
            var s = M.makeSpan([], [ve(a.body, i.withPhantom())]);
            if (((s.height = 0), (s.depth = 0), s.children))
              for (var u = 0; u < s.children.length; u++)
                (s.children[u].height = 0), (s.children[u].depth = 0);
            return (
              (s = M.makeVList(
                {
                  positionType: "firstBaseline",
                  children: [{ type: "elem", elem: s }],
                },
                i
              )),
              M.makeSpan(["mord"], [s], i)
            );
          },
          mathmlBuilder: function (a, i) {
            var s = ut($e(a.body), i),
              u = new $.MathNode("mphantom", s),
              c = new $.MathNode("mpadded", [u]);
            return (
              c.setAttribute("height", "0px"), c.setAttribute("depth", "0px"), c
            );
          },
        }),
        Z({
          type: "vphantom",
          names: ["\\vphantom"],
          props: { numArgs: 1, allowedInText: !0 },
          handler: function (a, i) {
            var s = a.parser,
              u = i[0];
            return { type: "vphantom", mode: s.mode, body: u };
          },
          htmlBuilder: function (a, i) {
            var s = M.makeSpan(["inner"], [ve(a.body, i.withPhantom())]),
              u = M.makeSpan(["fix"], []);
            return M.makeSpan(["mord", "rlap"], [s, u], i);
          },
          mathmlBuilder: function (a, i) {
            var s = ut($e(a.body), i),
              u = new $.MathNode("mphantom", s),
              c = new $.MathNode("mpadded", [u]);
            return c.setAttribute("width", "0px"), c;
          },
        }),
        Z({
          type: "raisebox",
          names: ["\\raisebox"],
          props: { numArgs: 2, argTypes: ["size", "hbox"], allowedInText: !0 },
          handler: function (a, i) {
            var s = a.parser,
              u = ce(i[0], "size").value,
              c = i[1];
            return { type: "raisebox", mode: s.mode, dy: u, body: c };
          },
          htmlBuilder: function (a, i) {
            var s = ve(a.body, i),
              u = ze(a.dy, i);
            return M.makeVList(
              {
                positionType: "shift",
                positionData: -u,
                children: [{ type: "elem", elem: s }],
              },
              i
            );
          },
          mathmlBuilder: function (a, i) {
            var s = new $.MathNode("mpadded", [Ae(a.body, i)]),
              u = a.dy.number + a.dy.unit;
            return s.setAttribute("voffset", u), s;
          },
        }),
        Z({
          type: "rule",
          names: ["\\rule"],
          props: {
            numArgs: 2,
            numOptionalArgs: 1,
            argTypes: ["size", "size", "size"],
          },
          handler: function (a, i, s) {
            var u = a.parser,
              c = s[0],
              f = ce(i[0], "size"),
              y = ce(i[1], "size");
            return {
              type: "rule",
              mode: u.mode,
              shift: c && ce(c, "size").value,
              width: f.value,
              height: y.value,
            };
          },
          htmlBuilder: function (a, i) {
            var s = M.makeSpan(["mord", "rule"], [], i),
              u = ze(a.width, i),
              c = ze(a.height, i),
              f = a.shift ? ze(a.shift, i) : 0;
            return (
              (s.style.borderRightWidth = U(u)),
              (s.style.borderTopWidth = U(c)),
              (s.style.bottom = U(f)),
              (s.width = u),
              (s.height = c + f),
              (s.depth = -f),
              (s.maxFontSize = c * 1.125 * i.sizeMultiplier),
              s
            );
          },
          mathmlBuilder: function (a, i) {
            var s = ze(a.width, i),
              u = ze(a.height, i),
              c = a.shift ? ze(a.shift, i) : 0,
              f = (i.color && i.getColor()) || "black",
              y = new $.MathNode("mspace");
            y.setAttribute("mathbackground", f),
              y.setAttribute("width", U(s)),
              y.setAttribute("height", U(u));
            var x = new $.MathNode("mpadded", [y]);
            return (
              c >= 0
                ? x.setAttribute("height", U(c))
                : (x.setAttribute("height", U(c)),
                  x.setAttribute("depth", U(-c))),
              x.setAttribute("voffset", U(c)),
              x
            );
          },
        });
      function qo(h, a, i) {
        for (
          var s = Ge(h, a, !1), u = a.sizeMultiplier / i.sizeMultiplier, c = 0;
          c < s.length;
          c++
        ) {
          var f = s[c].classes.indexOf("sizing");
          f < 0
            ? Array.prototype.push.apply(s[c].classes, a.sizingClasses(i))
            : s[c].classes[f + 1] === "reset-size" + a.size &&
              (s[c].classes[f + 1] = "reset-size" + i.size),
            (s[c].height *= u),
            (s[c].depth *= u);
        }
        return M.makeFragment(s);
      }
      var Ho = [
          "\\tiny",
          "\\sixptsize",
          "\\scriptsize",
          "\\footnotesize",
          "\\small",
          "\\normalsize",
          "\\large",
          "\\Large",
          "\\LARGE",
          "\\huge",
          "\\Huge",
        ],
        nf = function (a, i) {
          var s = i.havingSize(a.size);
          return qo(a.body, s, i);
        };
      Z({
        type: "sizing",
        names: Ho,
        props: { numArgs: 0, allowedInText: !0 },
        handler: function (a, i) {
          var s = a.breakOnTokenText,
            u = a.funcName,
            c = a.parser,
            f = c.parseExpression(!1, s);
          return {
            type: "sizing",
            mode: c.mode,
            size: Ho.indexOf(u) + 1,
            body: f,
          };
        },
        htmlBuilder: nf,
        mathmlBuilder: function (a, i) {
          var s = i.havingSize(a.size),
            u = ut(a.body, s),
            c = new $.MathNode("mstyle", u);
          return c.setAttribute("mathsize", U(s.sizeMultiplier)), c;
        },
      }),
        Z({
          type: "smash",
          names: ["\\smash"],
          props: { numArgs: 1, numOptionalArgs: 1, allowedInText: !0 },
          handler: function (a, i, s) {
            var u = a.parser,
              c = !1,
              f = !1,
              y = s[0] && ce(s[0], "ordgroup");
            if (y)
              for (var x = "", C = 0; C < y.body.length; ++C) {
                var F = y.body[C];
                if (((x = F.text), x === "t")) c = !0;
                else if (x === "b") f = !0;
                else {
                  (c = !1), (f = !1);
                  break;
                }
              }
            else (c = !0), (f = !0);
            var T = i[0];
            return {
              type: "smash",
              mode: u.mode,
              body: T,
              smashHeight: c,
              smashDepth: f,
            };
          },
          htmlBuilder: function (a, i) {
            var s = M.makeSpan([], [ve(a.body, i)]);
            if (!a.smashHeight && !a.smashDepth) return s;
            if (a.smashHeight && ((s.height = 0), s.children))
              for (var u = 0; u < s.children.length; u++)
                s.children[u].height = 0;
            if (a.smashDepth && ((s.depth = 0), s.children))
              for (var c = 0; c < s.children.length; c++)
                s.children[c].depth = 0;
            var f = M.makeVList(
              {
                positionType: "firstBaseline",
                children: [{ type: "elem", elem: s }],
              },
              i
            );
            return M.makeSpan(["mord"], [f], i);
          },
          mathmlBuilder: function (a, i) {
            var s = new $.MathNode("mpadded", [Ae(a.body, i)]);
            return (
              a.smashHeight && s.setAttribute("height", "0px"),
              a.smashDepth && s.setAttribute("depth", "0px"),
              s
            );
          },
        }),
        Z({
          type: "sqrt",
          names: ["\\sqrt"],
          props: { numArgs: 1, numOptionalArgs: 1 },
          handler: function (a, i, s) {
            var u = a.parser,
              c = s[0],
              f = i[0];
            return { type: "sqrt", mode: u.mode, body: f, index: c };
          },
          htmlBuilder: function (a, i) {
            var s = ve(a.body, i.havingCrampedStyle());
            s.height === 0 && (s.height = i.fontMetrics().xHeight),
              (s = M.wrapFragment(s, i));
            var u = i.fontMetrics(),
              c = u.defaultRuleThickness,
              f = c;
            i.style.id < ee.TEXT.id && (f = i.fontMetrics().xHeight);
            var y = c + f / 4,
              x = s.height + s.depth + y + c,
              C = Kt.sqrtImage(x, i),
              F = C.span,
              T = C.ruleWidth,
              z = C.advanceWidth,
              P = F.height - T;
            P > s.height + s.depth + y &&
              (y = (y + P - s.height - s.depth) / 2);
            var I = F.height - s.height - y - T;
            s.style.paddingLeft = U(z);
            var V = M.makeVList(
              {
                positionType: "firstBaseline",
                children: [
                  { type: "elem", elem: s, wrapperClasses: ["svg-align"] },
                  { type: "kern", size: -(s.height + I) },
                  { type: "elem", elem: F },
                  { type: "kern", size: T },
                ],
              },
              i
            );
            if (a.index) {
              var G = i.havingStyle(ee.SCRIPTSCRIPT),
                K = ve(a.index, G, i),
                Q = 0.6 * (V.height - V.depth),
                te = M.makeVList(
                  {
                    positionType: "shift",
                    positionData: -Q,
                    children: [{ type: "elem", elem: K }],
                  },
                  i
                ),
                ye = M.makeSpan(["root"], [te]);
              return M.makeSpan(["mord", "sqrt"], [ye, V], i);
            } else return M.makeSpan(["mord", "sqrt"], [V], i);
          },
          mathmlBuilder: function (a, i) {
            var s = a.body,
              u = a.index;
            return u
              ? new $.MathNode("mroot", [Ae(s, i), Ae(u, i)])
              : new $.MathNode("msqrt", [Ae(s, i)]);
          },
        });
      var Uo = {
        display: ee.DISPLAY,
        text: ee.TEXT,
        script: ee.SCRIPT,
        scriptscript: ee.SCRIPTSCRIPT,
      };
      Z({
        type: "styling",
        names: [
          "\\displaystyle",
          "\\textstyle",
          "\\scriptstyle",
          "\\scriptscriptstyle",
        ],
        props: { numArgs: 0, allowedInText: !0, primitive: !0 },
        handler: function (a, i) {
          var s = a.breakOnTokenText,
            u = a.funcName,
            c = a.parser,
            f = c.parseExpression(!0, s),
            y = u.slice(1, u.length - 5);
          return { type: "styling", mode: c.mode, style: y, body: f };
        },
        htmlBuilder: function (a, i) {
          var s = Uo[a.style],
            u = i.havingStyle(s).withFont("");
          return qo(a.body, u, i);
        },
        mathmlBuilder: function (a, i) {
          var s = Uo[a.style],
            u = i.havingStyle(s),
            c = ut(a.body, u),
            f = new $.MathNode("mstyle", c),
            y = {
              display: ["0", "true"],
              text: ["0", "false"],
              script: ["1", "false"],
              scriptscript: ["2", "false"],
            },
            x = y[a.style];
          return (
            f.setAttribute("scriptlevel", x[0]),
            f.setAttribute("displaystyle", x[1]),
            f
          );
        },
      });
      var af = function (a, i) {
        var s = a.base;
        if (s)
          if (s.type === "op") {
            var u =
              s.limits &&
              (i.style.size === ee.DISPLAY.size || s.alwaysHandleSupSub);
            return u ? hn : null;
          } else if (s.type === "operatorname") {
            var c =
              s.alwaysHandleSupSub &&
              (i.style.size === ee.DISPLAY.size || s.limits);
            return c ? $o : null;
          } else {
            if (s.type === "accent")
              return O.isCharacterBox(s.base) ? Ri : null;
            if (s.type === "horizBrace") {
              var f = !a.sub;
              return f === s.isOver ? Ro : null;
            } else return null;
          }
        else return null;
      };
      Zr({
        type: "supsub",
        htmlBuilder: function (a, i) {
          var s = af(a, i);
          if (s) return s(a, i);
          var u = a.base,
            c = a.sup,
            f = a.sub,
            y = ve(u, i),
            x,
            C,
            F = i.fontMetrics(),
            T = 0,
            z = 0,
            P = u && O.isCharacterBox(u);
          if (c) {
            var I = i.havingStyle(i.style.sup());
            (x = ve(c, I, i)),
              P ||
                (T =
                  y.height -
                  (I.fontMetrics().supDrop * I.sizeMultiplier) /
                    i.sizeMultiplier);
          }
          if (f) {
            var V = i.havingStyle(i.style.sub());
            (C = ve(f, V, i)),
              P ||
                (z =
                  y.depth +
                  (V.fontMetrics().subDrop * V.sizeMultiplier) /
                    i.sizeMultiplier);
          }
          var G;
          i.style === ee.DISPLAY
            ? (G = F.sup1)
            : i.style.cramped
            ? (G = F.sup3)
            : (G = F.sup2);
          var K = i.sizeMultiplier,
            Q = U(0.5 / F.ptPerEm / K),
            te = null;
          if (C) {
            var ye =
              a.base &&
              a.base.type === "op" &&
              a.base.name &&
              (a.base.name === "\\oiint" || a.base.name === "\\oiiint");
            (y instanceof ht || ye) && (te = U(-y.italic));
          }
          var Se;
          if (x && C) {
            (T = Math.max(T, G, x.depth + 0.25 * F.xHeight)),
              (z = Math.max(z, F.sub2));
            var _e = F.defaultRuleThickness,
              Ce = 4 * _e;
            if (T - x.depth - (C.height - z) < Ce) {
              z = Ce - (T - x.depth) + C.height;
              var ke = 0.8 * F.xHeight - (T - x.depth);
              ke > 0 && ((T += ke), (z -= ke));
            }
            var Ie = [
              {
                type: "elem",
                elem: C,
                shift: z,
                marginRight: Q,
                marginLeft: te,
              },
              { type: "elem", elem: x, shift: -T, marginRight: Q },
            ];
            Se = M.makeVList(
              { positionType: "individualShift", children: Ie },
              i
            );
          } else if (C) {
            z = Math.max(z, F.sub1, C.height - 0.8 * F.xHeight);
            var Fe = [
              { type: "elem", elem: C, marginLeft: te, marginRight: Q },
            ];
            Se = M.makeVList(
              { positionType: "shift", positionData: z, children: Fe },
              i
            );
          } else if (x)
            (T = Math.max(T, G, x.depth + 0.25 * F.xHeight)),
              (Se = M.makeVList(
                {
                  positionType: "shift",
                  positionData: -T,
                  children: [{ type: "elem", elem: x, marginRight: Q }],
                },
                i
              ));
          else throw new Error("supsub must have either sup or sub.");
          var lt = Ni(y, "right") || "mord";
          return M.makeSpan([lt], [y, M.makeSpan(["msupsub"], [Se])], i);
        },
        mathmlBuilder: function (a, i) {
          var s = !1,
            u,
            c;
          a.base &&
            a.base.type === "horizBrace" &&
            ((c = !!a.sup),
            c === a.base.isOver && ((s = !0), (u = a.base.isOver))),
            a.base &&
              (a.base.type === "op" || a.base.type === "operatorname") &&
              (a.base.parentIsSupSub = !0);
          var f = [Ae(a.base, i)];
          a.sub && f.push(Ae(a.sub, i)), a.sup && f.push(Ae(a.sup, i));
          var y;
          if (s) y = u ? "mover" : "munder";
          else if (a.sub)
            if (a.sup) {
              var F = a.base;
              (F && F.type === "op" && F.limits && i.style === ee.DISPLAY) ||
              (F &&
                F.type === "operatorname" &&
                F.alwaysHandleSupSub &&
                (i.style === ee.DISPLAY || F.limits))
                ? (y = "munderover")
                : (y = "msubsup");
            } else {
              var C = a.base;
              (C &&
                C.type === "op" &&
                C.limits &&
                (i.style === ee.DISPLAY || C.alwaysHandleSupSub)) ||
              (C &&
                C.type === "operatorname" &&
                C.alwaysHandleSupSub &&
                (C.limits || i.style === ee.DISPLAY))
                ? (y = "munder")
                : (y = "msub");
            }
          else {
            var x = a.base;
            (x &&
              x.type === "op" &&
              x.limits &&
              (i.style === ee.DISPLAY || x.alwaysHandleSupSub)) ||
            (x &&
              x.type === "operatorname" &&
              x.alwaysHandleSupSub &&
              (x.limits || i.style === ee.DISPLAY))
              ? (y = "mover")
              : (y = "msup");
          }
          return new $.MathNode(y, f);
        },
      }),
        Zr({
          type: "atom",
          htmlBuilder: function (a, i) {
            return M.mathsym(a.text, a.mode, i, ["m" + a.family]);
          },
          mathmlBuilder: function (a, i) {
            var s = new $.MathNode("mo", [gt(a.text, a.mode)]);
            if (a.family === "bin") {
              var u = _i(a, i);
              u === "bold-italic" && s.setAttribute("mathvariant", u);
            } else
              a.family === "punct"
                ? s.setAttribute("separator", "true")
                : (a.family === "open" || a.family === "close") &&
                  s.setAttribute("stretchy", "false");
            return s;
          },
        });
      var Vo = { mi: "italic", mn: "normal", mtext: "normal" };
      Zr({
        type: "mathord",
        htmlBuilder: function (a, i) {
          return M.makeOrd(a, i, "mathord");
        },
        mathmlBuilder: function (a, i) {
          var s = new $.MathNode("mi", [gt(a.text, a.mode, i)]),
            u = _i(a, i) || "italic";
          return u !== Vo[s.type] && s.setAttribute("mathvariant", u), s;
        },
      }),
        Zr({
          type: "textord",
          htmlBuilder: function (a, i) {
            return M.makeOrd(a, i, "textord");
          },
          mathmlBuilder: function (a, i) {
            var s = gt(a.text, a.mode, i),
              u = _i(a, i) || "normal",
              c;
            return (
              a.mode === "text"
                ? (c = new $.MathNode("mtext", [s]))
                : /[0-9]/.test(a.text)
                ? (c = new $.MathNode("mn", [s]))
                : a.text === "\\prime"
                ? (c = new $.MathNode("mo", [s]))
                : (c = new $.MathNode("mi", [s])),
              u !== Vo[c.type] && c.setAttribute("mathvariant", u),
              c
            );
          },
        });
      var Yi = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" },
        Qi = {
          " ": {},
          "\\ ": {},
          "~": { className: "nobreak" },
          "\\space": {},
          "\\nobreakspace": { className: "nobreak" },
        };
      Zr({
        type: "spacing",
        htmlBuilder: function (a, i) {
          if (Qi.hasOwnProperty(a.text)) {
            var s = Qi[a.text].className || "";
            if (a.mode === "text") {
              var u = M.makeOrd(a, i, "textord");
              return u.classes.push(s), u;
            } else
              return M.makeSpan(
                ["mspace", s],
                [M.mathsym(a.text, a.mode, i)],
                i
              );
          } else {
            if (Yi.hasOwnProperty(a.text))
              return M.makeSpan(["mspace", Yi[a.text]], [], i);
            throw new r('Unknown type of space "' + a.text + '"');
          }
        },
        mathmlBuilder: function (a, i) {
          var s;
          if (Qi.hasOwnProperty(a.text))
            s = new $.MathNode("mtext", [new $.TextNode("\xA0")]);
          else {
            if (Yi.hasOwnProperty(a.text)) return new $.MathNode("mspace");
            throw new r('Unknown type of space "' + a.text + '"');
          }
          return s;
        },
      });
      var Wo = function () {
        var a = new $.MathNode("mtd", []);
        return a.setAttribute("width", "50%"), a;
      };
      Zr({
        type: "tag",
        mathmlBuilder: function (a, i) {
          var s = new $.MathNode("mtable", [
            new $.MathNode("mtr", [
              Wo(),
              new $.MathNode("mtd", [vr(a.body, i)]),
              Wo(),
              new $.MathNode("mtd", [vr(a.tag, i)]),
            ]),
          ]);
          return s.setAttribute("width", "100%"), s;
        },
      });
      var Go = {
          "\\text": void 0,
          "\\textrm": "textrm",
          "\\textsf": "textsf",
          "\\texttt": "texttt",
          "\\textnormal": "textrm",
        },
        Zo = { "\\textbf": "textbf", "\\textmd": "textmd" },
        sf = { "\\textit": "textit", "\\textup": "textup" },
        Jo = function (a, i) {
          var s = a.font;
          return s
            ? Go[s]
              ? i.withTextFontFamily(Go[s])
              : Zo[s]
              ? i.withTextFontWeight(Zo[s])
              : i.withTextFontShape(sf[s])
            : i;
        };
      Z({
        type: "text",
        names: [
          "\\text",
          "\\textrm",
          "\\textsf",
          "\\texttt",
          "\\textnormal",
          "\\textbf",
          "\\textmd",
          "\\textit",
          "\\textup",
        ],
        props: {
          numArgs: 1,
          argTypes: ["text"],
          allowedInArgument: !0,
          allowedInText: !0,
        },
        handler: function (a, i) {
          var s = a.parser,
            u = a.funcName,
            c = i[0];
          return { type: "text", mode: s.mode, body: $e(c), font: u };
        },
        htmlBuilder: function (a, i) {
          var s = Jo(a, i),
            u = Ge(a.body, s, !0);
          return M.makeSpan(["mord", "text"], u, s);
        },
        mathmlBuilder: function (a, i) {
          var s = Jo(a, i);
          return vr(a.body, s);
        },
      }),
        Z({
          type: "underline",
          names: ["\\underline"],
          props: { numArgs: 1, allowedInText: !0 },
          handler: function (a, i) {
            var s = a.parser;
            return { type: "underline", mode: s.mode, body: i[0] };
          },
          htmlBuilder: function (a, i) {
            var s = ve(a.body, i),
              u = M.makeLineSpan("underline-line", i),
              c = i.fontMetrics().defaultRuleThickness,
              f = M.makeVList(
                {
                  positionType: "top",
                  positionData: s.height,
                  children: [
                    { type: "kern", size: c },
                    { type: "elem", elem: u },
                    { type: "kern", size: 3 * c },
                    { type: "elem", elem: s },
                  ],
                },
                i
              );
            return M.makeSpan(["mord", "underline"], [f], i);
          },
          mathmlBuilder: function (a, i) {
            var s = new $.MathNode("mo", [new $.TextNode("\u203E")]);
            s.setAttribute("stretchy", "true");
            var u = new $.MathNode("munder", [Ae(a.body, i), s]);
            return u.setAttribute("accentunder", "true"), u;
          },
        }),
        Z({
          type: "vcenter",
          names: ["\\vcenter"],
          props: { numArgs: 1, argTypes: ["original"], allowedInText: !1 },
          handler: function (a, i) {
            var s = a.parser;
            return { type: "vcenter", mode: s.mode, body: i[0] };
          },
          htmlBuilder: function (a, i) {
            var s = ve(a.body, i),
              u = i.fontMetrics().axisHeight,
              c = 0.5 * (s.height - u - (s.depth + u));
            return M.makeVList(
              {
                positionType: "shift",
                positionData: c,
                children: [{ type: "elem", elem: s }],
              },
              i
            );
          },
          mathmlBuilder: function (a, i) {
            return new $.MathNode("mpadded", [Ae(a.body, i)], ["vcenter"]);
          },
        }),
        Z({
          type: "verb",
          names: ["\\verb"],
          props: { numArgs: 0, allowedInText: !0 },
          handler: function (a, i, s) {
            throw new r(
              "\\verb ended by end of line instead of matching delimiter"
            );
          },
          htmlBuilder: function (a, i) {
            for (
              var s = Xo(a), u = [], c = i.havingStyle(i.style.text()), f = 0;
              f < s.length;
              f++
            ) {
              var y = s[f];
              y === "~" && (y = "\\textasciitilde"),
                u.push(
                  M.makeSymbol(y, "Typewriter-Regular", a.mode, c, [
                    "mord",
                    "texttt",
                  ])
                );
            }
            return M.makeSpan(
              ["mord", "text"].concat(c.sizingClasses(i)),
              M.tryCombineChars(u),
              c
            );
          },
          mathmlBuilder: function (a, i) {
            var s = new $.TextNode(Xo(a)),
              u = new $.MathNode("mtext", [s]);
            return u.setAttribute("mathvariant", "monospace"), u;
          },
        });
      var Xo = function (a) {
          return a.body.replace(/ /g, a.star ? "\u2423" : "\xA0");
        },
        of = Qs,
        Dr = of,
        At = (function () {
          function h(a, i, s) {
            (this.lexer = void 0),
              (this.start = void 0),
              (this.end = void 0),
              (this.lexer = a),
              (this.start = i),
              (this.end = s);
          }
          return (
            (h.range = function (i, s) {
              return s
                ? !i || !i.loc || !s.loc || i.loc.lexer !== s.loc.lexer
                  ? null
                  : new h(i.loc.lexer, i.loc.start, s.loc.end)
                : i && i.loc;
            }),
            h
          );
        })(),
        Jr = (function () {
          function h(i, s) {
            (this.text = void 0),
              (this.loc = void 0),
              (this.noexpand = void 0),
              (this.treatAsRelax = void 0),
              (this.text = i),
              (this.loc = s);
          }
          var a = h.prototype;
          return (
            (a.range = function (s, u) {
              return new h(u, At.range(this, s));
            }),
            h
          );
        })(),
        Ko = `[ \r
	]`,
        uf = "\\\\[a-zA-Z@]+",
        lf = "\\\\[^\uD800-\uDFFF]",
        cf = "(" + uf + ")" + Ko + "*",
        df = `\\\\(
|[ \r	]+
?)[ \r	]*`,
        e0 = "[\u0300-\u036F]",
        pf = new RegExp(e0 + "+$"),
        ff =
          "(" +
          Ko +
          "+)|" +
          (df + "|") +
          "([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" +
          (e0 + "*") +
          "|[\uD800-\uDBFF][\uDC00-\uDFFF]" +
          (e0 + "*") +
          "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" +
          ("|" + cf) +
          ("|" + lf + ")"),
        Yo = (function () {
          function h(i, s) {
            (this.input = void 0),
              (this.settings = void 0),
              (this.tokenRegex = void 0),
              (this.catcodes = void 0),
              (this.input = i),
              (this.settings = s),
              (this.tokenRegex = new RegExp(ff, "g")),
              (this.catcodes = { "%": 14, "~": 13 });
          }
          var a = h.prototype;
          return (
            (a.setCatcode = function (s, u) {
              this.catcodes[s] = u;
            }),
            (a.lex = function () {
              var s = this.input,
                u = this.tokenRegex.lastIndex;
              if (u === s.length) return new Jr("EOF", new At(this, u, u));
              var c = this.tokenRegex.exec(s);
              if (c === null || c.index !== u)
                throw new r(
                  "Unexpected character: '" + s[u] + "'",
                  new Jr(s[u], new At(this, u, u + 1))
                );
              var f = c[6] || c[3] || (c[2] ? "\\ " : " ");
              if (this.catcodes[f] === 14) {
                var y = s.indexOf(
                  `
`,
                  this.tokenRegex.lastIndex
                );
                return (
                  y === -1
                    ? ((this.tokenRegex.lastIndex = s.length),
                      this.settings.reportNonstrict(
                        "commentAtEnd",
                        "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)"
                      ))
                    : (this.tokenRegex.lastIndex = y + 1),
                  this.lex()
                );
              }
              return new Jr(f, new At(this, u, this.tokenRegex.lastIndex));
            }),
            h
          );
        })(),
        hf = (function () {
          function h(i, s) {
            i === void 0 && (i = {}),
              s === void 0 && (s = {}),
              (this.current = void 0),
              (this.builtins = void 0),
              (this.undefStack = void 0),
              (this.current = s),
              (this.builtins = i),
              (this.undefStack = []);
          }
          var a = h.prototype;
          return (
            (a.beginGroup = function () {
              this.undefStack.push({});
            }),
            (a.endGroup = function () {
              if (this.undefStack.length === 0)
                throw new r(
                  "Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug"
                );
              var s = this.undefStack.pop();
              for (var u in s)
                s.hasOwnProperty(u) &&
                  (s[u] === void 0
                    ? delete this.current[u]
                    : (this.current[u] = s[u]));
            }),
            (a.endGroups = function () {
              for (; this.undefStack.length > 0; ) this.endGroup();
            }),
            (a.has = function (s) {
              return (
                this.current.hasOwnProperty(s) ||
                this.builtins.hasOwnProperty(s)
              );
            }),
            (a.get = function (s) {
              return this.current.hasOwnProperty(s)
                ? this.current[s]
                : this.builtins[s];
            }),
            (a.set = function (s, u, c) {
              if ((c === void 0 && (c = !1), c)) {
                for (var f = 0; f < this.undefStack.length; f++)
                  delete this.undefStack[f][s];
                this.undefStack.length > 0 &&
                  (this.undefStack[this.undefStack.length - 1][s] = u);
              } else {
                var y = this.undefStack[this.undefStack.length - 1];
                y && !y.hasOwnProperty(s) && (y[s] = this.current[s]);
              }
              this.current[s] = u;
            }),
            h
          );
        })(),
        mf = Lo,
        gf = mf;
      b("\\noexpand", function (h) {
        var a = h.popToken();
        return (
          h.isExpandable(a.text) && ((a.noexpand = !0), (a.treatAsRelax = !0)),
          { tokens: [a], numArgs: 0 }
        );
      }),
        b("\\expandafter", function (h) {
          var a = h.popToken();
          return h.expandOnce(!0), { tokens: [a], numArgs: 0 };
        }),
        b("\\@firstoftwo", function (h) {
          var a = h.consumeArgs(2);
          return { tokens: a[0], numArgs: 0 };
        }),
        b("\\@secondoftwo", function (h) {
          var a = h.consumeArgs(2);
          return { tokens: a[1], numArgs: 0 };
        }),
        b("\\@ifnextchar", function (h) {
          var a = h.consumeArgs(3);
          h.consumeSpaces();
          var i = h.future();
          return a[0].length === 1 && a[0][0].text === i.text
            ? { tokens: a[1], numArgs: 0 }
            : { tokens: a[2], numArgs: 0 };
        }),
        b("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"),
        b("\\TextOrMath", function (h) {
          var a = h.consumeArgs(2);
          return h.mode === "text"
            ? { tokens: a[0], numArgs: 0 }
            : { tokens: a[1], numArgs: 0 };
        });
      var Qo = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        a: 10,
        A: 10,
        b: 11,
        B: 11,
        c: 12,
        C: 12,
        d: 13,
        D: 13,
        e: 14,
        E: 14,
        f: 15,
        F: 15,
      };
      b("\\char", function (h) {
        var a = h.popToken(),
          i,
          s = "";
        if (a.text === "'") (i = 8), (a = h.popToken());
        else if (a.text === '"') (i = 16), (a = h.popToken());
        else if (a.text === "`")
          if (((a = h.popToken()), a.text[0] === "\\"))
            s = a.text.charCodeAt(1);
          else {
            if (a.text === "EOF") throw new r("\\char` missing argument");
            s = a.text.charCodeAt(0);
          }
        else i = 10;
        if (i) {
          if (((s = Qo[a.text]), s == null || s >= i))
            throw new r("Invalid base-" + i + " digit " + a.text);
          for (var u; (u = Qo[h.future().text]) != null && u < i; )
            (s *= i), (s += u), h.popToken();
        }
        return "\\@char{" + s + "}";
      });
      var t0 = function (a, i, s) {
        var u = a.consumeArg().tokens;
        if (u.length !== 1)
          throw new r("\\newcommand's first argument must be a macro name");
        var c = u[0].text,
          f = a.isDefined(c);
        if (f && !i)
          throw new r(
            "\\newcommand{" +
              c +
              "} attempting to redefine " +
              (c + "; use \\renewcommand")
          );
        if (!f && !s)
          throw new r(
            "\\renewcommand{" +
              c +
              "} when command " +
              c +
              " does not yet exist; use \\newcommand"
          );
        var y = 0;
        if (
          ((u = a.consumeArg().tokens), u.length === 1 && u[0].text === "[")
        ) {
          for (
            var x = "", C = a.expandNextToken();
            C.text !== "]" && C.text !== "EOF";

          )
            (x += C.text), (C = a.expandNextToken());
          if (!x.match(/^\s*[0-9]+\s*$/))
            throw new r("Invalid number of arguments: " + x);
          (y = parseInt(x)), (u = a.consumeArg().tokens);
        }
        return a.macros.set(c, { tokens: u, numArgs: y }), "";
      };
      b("\\newcommand", function (h) {
        return t0(h, !1, !0);
      }),
        b("\\renewcommand", function (h) {
          return t0(h, !0, !1);
        }),
        b("\\providecommand", function (h) {
          return t0(h, !0, !0);
        }),
        b("\\message", function (h) {
          var a = h.consumeArgs(1)[0];
          return (
            console.log(
              a
                .reverse()
                .map(function (i) {
                  return i.text;
                })
                .join("")
            ),
            ""
          );
        }),
        b("\\errmessage", function (h) {
          var a = h.consumeArgs(1)[0];
          return (
            console.error(
              a
                .reverse()
                .map(function (i) {
                  return i.text;
                })
                .join("")
            ),
            ""
          );
        }),
        b("\\show", function (h) {
          var a = h.popToken(),
            i = a.text;
          return (
            console.log(a, h.macros.get(i), Dr[i], Re.math[i], Re.text[i]), ""
          );
        }),
        b("\\bgroup", "{"),
        b("\\egroup", "}"),
        b("~", "\\nobreakspace"),
        b("\\lq", "`"),
        b("\\rq", "'"),
        b("\\aa", "\\r a"),
        b("\\AA", "\\r A"),
        b("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`\xA9}"),
        b(
          "\\copyright",
          "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"
        ),
        b(
          "\\textregistered",
          "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xAE}"
        ),
        b("\u212C", "\\mathscr{B}"),
        b("\u2130", "\\mathscr{E}"),
        b("\u2131", "\\mathscr{F}"),
        b("\u210B", "\\mathscr{H}"),
        b("\u2110", "\\mathscr{I}"),
        b("\u2112", "\\mathscr{L}"),
        b("\u2133", "\\mathscr{M}"),
        b("\u211B", "\\mathscr{R}"),
        b("\u212D", "\\mathfrak{C}"),
        b("\u210C", "\\mathfrak{H}"),
        b("\u2128", "\\mathfrak{Z}"),
        b("\\Bbbk", "\\Bbb{k}"),
        b("\xB7", "\\cdotp"),
        b("\\llap", "\\mathllap{\\textrm{#1}}"),
        b("\\rlap", "\\mathrlap{\\textrm{#1}}"),
        b("\\clap", "\\mathclap{\\textrm{#1}}"),
        b("\\mathstrut", "\\vphantom{(}"),
        b("\\underbar", "\\underline{\\text{#1}}"),
        b("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'),
        b(
          "\\neq",
          "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}"
        ),
        b("\\ne", "\\neq"),
        b("\u2260", "\\neq"),
        b(
          "\\notin",
          "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}"
        ),
        b("\u2209", "\\notin"),
        b(
          "\u2258",
          "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}"
        ),
        b(
          "\u2259",
          "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}"
        ),
        b(
          "\u225A",
          "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}"
        ),
        b(
          "\u225B",
          "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225B}}"
        ),
        b(
          "\u225D",
          "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225D}}"
        ),
        b(
          "\u225E",
          "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225E}}"
        ),
        b(
          "\u225F",
          "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}"
        ),
        b("\u27C2", "\\perp"),
        b("\u203C", "\\mathclose{!\\mkern-0.8mu!}"),
        b("\u220C", "\\notni"),
        b("\u231C", "\\ulcorner"),
        b("\u231D", "\\urcorner"),
        b("\u231E", "\\llcorner"),
        b("\u231F", "\\lrcorner"),
        b("\xA9", "\\copyright"),
        b("\xAE", "\\textregistered"),
        b("\uFE0F", "\\textregistered"),
        b("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'),
        b("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'),
        b("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'),
        b("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'),
        b("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"),
        b("\u22EE", "\\vdots"),
        b("\\varGamma", "\\mathit{\\Gamma}"),
        b("\\varDelta", "\\mathit{\\Delta}"),
        b("\\varTheta", "\\mathit{\\Theta}"),
        b("\\varLambda", "\\mathit{\\Lambda}"),
        b("\\varXi", "\\mathit{\\Xi}"),
        b("\\varPi", "\\mathit{\\Pi}"),
        b("\\varSigma", "\\mathit{\\Sigma}"),
        b("\\varUpsilon", "\\mathit{\\Upsilon}"),
        b("\\varPhi", "\\mathit{\\Phi}"),
        b("\\varPsi", "\\mathit{\\Psi}"),
        b("\\varOmega", "\\mathit{\\Omega}"),
        b("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"),
        b(
          "\\colon",
          "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu"
        ),
        b("\\boxed", "\\fbox{$\\displaystyle{#1}$}"),
        b("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"),
        b("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"),
        b("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
      var eu = {
        ",": "\\dotsc",
        "\\not": "\\dotsb",
        "+": "\\dotsb",
        "=": "\\dotsb",
        "<": "\\dotsb",
        ">": "\\dotsb",
        "-": "\\dotsb",
        "*": "\\dotsb",
        ":": "\\dotsb",
        "\\DOTSB": "\\dotsb",
        "\\coprod": "\\dotsb",
        "\\bigvee": "\\dotsb",
        "\\bigwedge": "\\dotsb",
        "\\biguplus": "\\dotsb",
        "\\bigcap": "\\dotsb",
        "\\bigcup": "\\dotsb",
        "\\prod": "\\dotsb",
        "\\sum": "\\dotsb",
        "\\bigotimes": "\\dotsb",
        "\\bigoplus": "\\dotsb",
        "\\bigodot": "\\dotsb",
        "\\bigsqcup": "\\dotsb",
        "\\And": "\\dotsb",
        "\\longrightarrow": "\\dotsb",
        "\\Longrightarrow": "\\dotsb",
        "\\longleftarrow": "\\dotsb",
        "\\Longleftarrow": "\\dotsb",
        "\\longleftrightarrow": "\\dotsb",
        "\\Longleftrightarrow": "\\dotsb",
        "\\mapsto": "\\dotsb",
        "\\longmapsto": "\\dotsb",
        "\\hookrightarrow": "\\dotsb",
        "\\doteq": "\\dotsb",
        "\\mathbin": "\\dotsb",
        "\\mathrel": "\\dotsb",
        "\\relbar": "\\dotsb",
        "\\Relbar": "\\dotsb",
        "\\xrightarrow": "\\dotsb",
        "\\xleftarrow": "\\dotsb",
        "\\DOTSI": "\\dotsi",
        "\\int": "\\dotsi",
        "\\oint": "\\dotsi",
        "\\iint": "\\dotsi",
        "\\iiint": "\\dotsi",
        "\\iiiint": "\\dotsi",
        "\\idotsint": "\\dotsi",
        "\\DOTSX": "\\dotsx",
      };
      b("\\dots", function (h) {
        var a = "\\dotso",
          i = h.expandAfterFuture().text;
        return (
          i in eu
            ? (a = eu[i])
            : (i.substr(0, 4) === "\\not" ||
                (i in Re.math &&
                  O.contains(["bin", "rel"], Re.math[i].group))) &&
              (a = "\\dotsb"),
          a
        );
      });
      var r0 = {
        ")": !0,
        "]": !0,
        "\\rbrack": !0,
        "\\}": !0,
        "\\rbrace": !0,
        "\\rangle": !0,
        "\\rceil": !0,
        "\\rfloor": !0,
        "\\rgroup": !0,
        "\\rmoustache": !0,
        "\\right": !0,
        "\\bigr": !0,
        "\\biggr": !0,
        "\\Bigr": !0,
        "\\Biggr": !0,
        $: !0,
        ";": !0,
        ".": !0,
        ",": !0,
      };
      b("\\dotso", function (h) {
        var a = h.future().text;
        return a in r0 ? "\\ldots\\," : "\\ldots";
      }),
        b("\\dotsc", function (h) {
          var a = h.future().text;
          return a in r0 && a !== "," ? "\\ldots\\," : "\\ldots";
        }),
        b("\\cdots", function (h) {
          var a = h.future().text;
          return a in r0 ? "\\@cdots\\," : "\\@cdots";
        }),
        b("\\dotsb", "\\cdots"),
        b("\\dotsm", "\\cdots"),
        b("\\dotsi", "\\!\\cdots"),
        b("\\dotsx", "\\ldots\\,"),
        b("\\DOTSI", "\\relax"),
        b("\\DOTSB", "\\relax"),
        b("\\DOTSX", "\\relax"),
        b("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"),
        b("\\,", "\\tmspace+{3mu}{.1667em}"),
        b("\\thinspace", "\\,"),
        b("\\>", "\\mskip{4mu}"),
        b("\\:", "\\tmspace+{4mu}{.2222em}"),
        b("\\medspace", "\\:"),
        b("\\;", "\\tmspace+{5mu}{.2777em}"),
        b("\\thickspace", "\\;"),
        b("\\!", "\\tmspace-{3mu}{.1667em}"),
        b("\\negthinspace", "\\!"),
        b("\\negmedspace", "\\tmspace-{4mu}{.2222em}"),
        b("\\negthickspace", "\\tmspace-{5mu}{.277em}"),
        b("\\enspace", "\\kern.5em "),
        b("\\enskip", "\\hskip.5em\\relax"),
        b("\\quad", "\\hskip1em\\relax"),
        b("\\qquad", "\\hskip2em\\relax"),
        b("\\tag", "\\@ifstar\\tag@literal\\tag@paren"),
        b("\\tag@paren", "\\tag@literal{({#1})}"),
        b("\\tag@literal", function (h) {
          if (h.macros.get("\\df@tag")) throw new r("Multiple \\tag");
          return "\\gdef\\df@tag{\\text{#1}}";
        }),
        b(
          "\\bmod",
          "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"
        ),
        b(
          "\\pod",
          "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"
        ),
        b("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"),
        b(
          "\\mod",
          "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"
        ),
        b(
          "\\pmb",
          "\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\kern0.5px#1}}{\\mathbf{#1}}"
        ),
        b("\\newline", "\\\\\\relax"),
        b(
          "\\TeX",
          "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}"
        );
      var tu = U(
        st["Main-Regular"]["T".charCodeAt(0)][1] -
          0.7 * st["Main-Regular"]["A".charCodeAt(0)][1]
      );
      b(
        "\\LaTeX",
        "\\textrm{\\html@mathml{" +
          ("L\\kern-.36em\\raisebox{" + tu + "}{\\scriptstyle A}") +
          "\\kern-.15em\\TeX}{LaTeX}}"
      ),
        b(
          "\\KaTeX",
          "\\textrm{\\html@mathml{" +
            ("K\\kern-.17em\\raisebox{" + tu + "}{\\scriptstyle A}") +
            "\\kern-.15em\\TeX}{KaTeX}}"
        ),
        b("\\hspace", "\\@ifstar\\@hspacer\\@hspace"),
        b("\\@hspace", "\\hskip #1\\relax"),
        b("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"),
        b("\\ordinarycolon", ":"),
        b("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"),
        b(
          "\\dblcolon",
          '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'
        ),
        b(
          "\\coloneqq",
          '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'
        ),
        b(
          "\\Coloneqq",
          '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'
        ),
        b(
          "\\coloneq",
          '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'
        ),
        b(
          "\\Coloneq",
          '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'
        ),
        b(
          "\\eqqcolon",
          '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'
        ),
        b(
          "\\Eqqcolon",
          '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'
        ),
        b(
          "\\eqcolon",
          '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'
        ),
        b(
          "\\Eqcolon",
          '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'
        ),
        b(
          "\\colonapprox",
          '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'
        ),
        b(
          "\\Colonapprox",
          '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'
        ),
        b(
          "\\colonsim",
          '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'
        ),
        b(
          "\\Colonsim",
          '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'
        ),
        b("\u2237", "\\dblcolon"),
        b("\u2239", "\\eqcolon"),
        b("\u2254", "\\coloneqq"),
        b("\u2255", "\\eqqcolon"),
        b("\u2A74", "\\Coloneqq"),
        b("\\ratio", "\\vcentcolon"),
        b("\\coloncolon", "\\dblcolon"),
        b("\\colonequals", "\\coloneqq"),
        b("\\coloncolonequals", "\\Coloneqq"),
        b("\\equalscolon", "\\eqqcolon"),
        b("\\equalscoloncolon", "\\Eqqcolon"),
        b("\\colonminus", "\\coloneq"),
        b("\\coloncolonminus", "\\Coloneq"),
        b("\\minuscolon", "\\eqcolon"),
        b("\\minuscoloncolon", "\\Eqcolon"),
        b("\\coloncolonapprox", "\\Colonapprox"),
        b("\\coloncolonsim", "\\Colonsim"),
        b("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"),
        b(
          "\\simcoloncolon",
          "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"
        ),
        b(
          "\\approxcolon",
          "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"
        ),
        b(
          "\\approxcoloncolon",
          "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"
        ),
        b("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}"),
        b("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"),
        b("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"),
        b("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}"),
        b("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}"),
        b("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}"),
        b("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}"),
        b("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}"),
        b("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}"),
        b("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}"),
        b("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}"),
        b("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}"),
        b("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}"),
        b("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}"),
        b("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}"),
        b("\\nshortmid", "\\html@mathml{\\@nshortmid}{\u2224}"),
        b("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{\u2226}"),
        b("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}"),
        b("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}"),
        b("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{\u228A}"),
        b("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{\u2ACB}"),
        b("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{\u228B}"),
        b("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{\u2ACC}"),
        b("\\imath", "\\html@mathml{\\@imath}{\u0131}"),
        b("\\jmath", "\\html@mathml{\\@jmath}{\u0237}"),
        b(
          "\\llbracket",
          "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27E6}}"
        ),
        b(
          "\\rrbracket",
          "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27E7}}"
        ),
        b("\u27E6", "\\llbracket"),
        b("\u27E7", "\\rrbracket"),
        b(
          "\\lBrace",
          "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}"
        ),
        b(
          "\\rBrace",
          "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}"
        ),
        b("\u2983", "\\lBrace"),
        b("\u2984", "\\rBrace"),
        b(
          "\\minuso",
          "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29B5}}"
        ),
        b("\u29B5", "\\minuso"),
        b("\\darr", "\\downarrow"),
        b("\\dArr", "\\Downarrow"),
        b("\\Darr", "\\Downarrow"),
        b("\\lang", "\\langle"),
        b("\\rang", "\\rangle"),
        b("\\uarr", "\\uparrow"),
        b("\\uArr", "\\Uparrow"),
        b("\\Uarr", "\\Uparrow"),
        b("\\N", "\\mathbb{N}"),
        b("\\R", "\\mathbb{R}"),
        b("\\Z", "\\mathbb{Z}"),
        b("\\alef", "\\aleph"),
        b("\\alefsym", "\\aleph"),
        b("\\Alpha", "\\mathrm{A}"),
        b("\\Beta", "\\mathrm{B}"),
        b("\\bull", "\\bullet"),
        b("\\Chi", "\\mathrm{X}"),
        b("\\clubs", "\\clubsuit"),
        b("\\cnums", "\\mathbb{C}"),
        b("\\Complex", "\\mathbb{C}"),
        b("\\Dagger", "\\ddagger"),
        b("\\diamonds", "\\diamondsuit"),
        b("\\empty", "\\emptyset"),
        b("\\Epsilon", "\\mathrm{E}"),
        b("\\Eta", "\\mathrm{H}"),
        b("\\exist", "\\exists"),
        b("\\harr", "\\leftrightarrow"),
        b("\\hArr", "\\Leftrightarrow"),
        b("\\Harr", "\\Leftrightarrow"),
        b("\\hearts", "\\heartsuit"),
        b("\\image", "\\Im"),
        b("\\infin", "\\infty"),
        b("\\Iota", "\\mathrm{I}"),
        b("\\isin", "\\in"),
        b("\\Kappa", "\\mathrm{K}"),
        b("\\larr", "\\leftarrow"),
        b("\\lArr", "\\Leftarrow"),
        b("\\Larr", "\\Leftarrow"),
        b("\\lrarr", "\\leftrightarrow"),
        b("\\lrArr", "\\Leftrightarrow"),
        b("\\Lrarr", "\\Leftrightarrow"),
        b("\\Mu", "\\mathrm{M}"),
        b("\\natnums", "\\mathbb{N}"),
        b("\\Nu", "\\mathrm{N}"),
        b("\\Omicron", "\\mathrm{O}"),
        b("\\plusmn", "\\pm"),
        b("\\rarr", "\\rightarrow"),
        b("\\rArr", "\\Rightarrow"),
        b("\\Rarr", "\\Rightarrow"),
        b("\\real", "\\Re"),
        b("\\reals", "\\mathbb{R}"),
        b("\\Reals", "\\mathbb{R}"),
        b("\\Rho", "\\mathrm{P}"),
        b("\\sdot", "\\cdot"),
        b("\\sect", "\\S"),
        b("\\spades", "\\spadesuit"),
        b("\\sub", "\\subset"),
        b("\\sube", "\\subseteq"),
        b("\\supe", "\\supseteq"),
        b("\\Tau", "\\mathrm{T}"),
        b("\\thetasym", "\\vartheta"),
        b("\\weierp", "\\wp"),
        b("\\Zeta", "\\mathrm{Z}"),
        b("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"),
        b("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"),
        b("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"),
        b("\\bra", "\\mathinner{\\langle{#1}|}"),
        b("\\ket", "\\mathinner{|{#1}\\rangle}"),
        b("\\braket", "\\mathinner{\\langle{#1}\\rangle}"),
        b("\\Bra", "\\left\\langle#1\\right|"),
        b("\\Ket", "\\left|#1\\right\\rangle"),
        b("\\angln", "{\\angl n}"),
        b("\\blue", "\\textcolor{##6495ed}{#1}"),
        b("\\orange", "\\textcolor{##ffa500}{#1}"),
        b("\\pink", "\\textcolor{##ff00af}{#1}"),
        b("\\red", "\\textcolor{##df0030}{#1}"),
        b("\\green", "\\textcolor{##28ae7b}{#1}"),
        b("\\gray", "\\textcolor{gray}{#1}"),
        b("\\purple", "\\textcolor{##9d38bd}{#1}"),
        b("\\blueA", "\\textcolor{##ccfaff}{#1}"),
        b("\\blueB", "\\textcolor{##80f6ff}{#1}"),
        b("\\blueC", "\\textcolor{##63d9ea}{#1}"),
        b("\\blueD", "\\textcolor{##11accd}{#1}"),
        b("\\blueE", "\\textcolor{##0c7f99}{#1}"),
        b("\\tealA", "\\textcolor{##94fff5}{#1}"),
        b("\\tealB", "\\textcolor{##26edd5}{#1}"),
        b("\\tealC", "\\textcolor{##01d1c1}{#1}"),
        b("\\tealD", "\\textcolor{##01a995}{#1}"),
        b("\\tealE", "\\textcolor{##208170}{#1}"),
        b("\\greenA", "\\textcolor{##b6ffb0}{#1}"),
        b("\\greenB", "\\textcolor{##8af281}{#1}"),
        b("\\greenC", "\\textcolor{##74cf70}{#1}"),
        b("\\greenD", "\\textcolor{##1fab54}{#1}"),
        b("\\greenE", "\\textcolor{##0d923f}{#1}"),
        b("\\goldA", "\\textcolor{##ffd0a9}{#1}"),
        b("\\goldB", "\\textcolor{##ffbb71}{#1}"),
        b("\\goldC", "\\textcolor{##ff9c39}{#1}"),
        b("\\goldD", "\\textcolor{##e07d10}{#1}"),
        b("\\goldE", "\\textcolor{##a75a05}{#1}"),
        b("\\redA", "\\textcolor{##fca9a9}{#1}"),
        b("\\redB", "\\textcolor{##ff8482}{#1}"),
        b("\\redC", "\\textcolor{##f9685d}{#1}"),
        b("\\redD", "\\textcolor{##e84d39}{#1}"),
        b("\\redE", "\\textcolor{##bc2612}{#1}"),
        b("\\maroonA", "\\textcolor{##ffbde0}{#1}"),
        b("\\maroonB", "\\textcolor{##ff92c6}{#1}"),
        b("\\maroonC", "\\textcolor{##ed5fa6}{#1}"),
        b("\\maroonD", "\\textcolor{##ca337c}{#1}"),
        b("\\maroonE", "\\textcolor{##9e034e}{#1}"),
        b("\\purpleA", "\\textcolor{##ddd7ff}{#1}"),
        b("\\purpleB", "\\textcolor{##c6b9fc}{#1}"),
        b("\\purpleC", "\\textcolor{##aa87ff}{#1}"),
        b("\\purpleD", "\\textcolor{##7854ab}{#1}"),
        b("\\purpleE", "\\textcolor{##543b78}{#1}"),
        b("\\mintA", "\\textcolor{##f5f9e8}{#1}"),
        b("\\mintB", "\\textcolor{##edf2df}{#1}"),
        b("\\mintC", "\\textcolor{##e0e5cc}{#1}"),
        b("\\grayA", "\\textcolor{##f6f7f7}{#1}"),
        b("\\grayB", "\\textcolor{##f0f1f2}{#1}"),
        b("\\grayC", "\\textcolor{##e3e5e6}{#1}"),
        b("\\grayD", "\\textcolor{##d6d8da}{#1}"),
        b("\\grayE", "\\textcolor{##babec2}{#1}"),
        b("\\grayF", "\\textcolor{##888d93}{#1}"),
        b("\\grayG", "\\textcolor{##626569}{#1}"),
        b("\\grayH", "\\textcolor{##3b3e40}{#1}"),
        b("\\grayI", "\\textcolor{##21242c}{#1}"),
        b("\\kaBlue", "\\textcolor{##314453}{#1}"),
        b("\\kaGreen", "\\textcolor{##71B307}{#1}");
      var ru = {
          "\\relax": !0,
          "^": !0,
          _: !0,
          "\\limits": !0,
          "\\nolimits": !0,
        },
        vf = (function () {
          function h(i, s, u) {
            (this.settings = void 0),
              (this.expansionCount = void 0),
              (this.lexer = void 0),
              (this.macros = void 0),
              (this.stack = void 0),
              (this.mode = void 0),
              (this.settings = s),
              (this.expansionCount = 0),
              this.feed(i),
              (this.macros = new hf(gf, s.macros)),
              (this.mode = u),
              (this.stack = []);
          }
          var a = h.prototype;
          return (
            (a.feed = function (s) {
              this.lexer = new Yo(s, this.settings);
            }),
            (a.switchMode = function (s) {
              this.mode = s;
            }),
            (a.beginGroup = function () {
              this.macros.beginGroup();
            }),
            (a.endGroup = function () {
              this.macros.endGroup();
            }),
            (a.endGroups = function () {
              this.macros.endGroups();
            }),
            (a.future = function () {
              return (
                this.stack.length === 0 && this.pushToken(this.lexer.lex()),
                this.stack[this.stack.length - 1]
              );
            }),
            (a.popToken = function () {
              return this.future(), this.stack.pop();
            }),
            (a.pushToken = function (s) {
              this.stack.push(s);
            }),
            (a.pushTokens = function (s) {
              var u;
              (u = this.stack).push.apply(u, s);
            }),
            (a.scanArgument = function (s) {
              var u, c, f;
              if (s) {
                if ((this.consumeSpaces(), this.future().text !== "["))
                  return null;
                u = this.popToken();
                var y = this.consumeArg(["]"]);
                (f = y.tokens), (c = y.end);
              } else {
                var x = this.consumeArg();
                (f = x.tokens), (u = x.start), (c = x.end);
              }
              return (
                this.pushToken(new Jr("EOF", c.loc)),
                this.pushTokens(f),
                u.range(c, "")
              );
            }),
            (a.consumeSpaces = function () {
              for (;;) {
                var s = this.future();
                if (s.text === " ") this.stack.pop();
                else break;
              }
            }),
            (a.consumeArg = function (s) {
              var u = [],
                c = s && s.length > 0;
              c || this.consumeSpaces();
              var f = this.future(),
                y,
                x = 0,
                C = 0;
              do {
                if (((y = this.popToken()), u.push(y), y.text === "{")) ++x;
                else if (y.text === "}") {
                  if ((--x, x === -1)) throw new r("Extra }", y);
                } else if (y.text === "EOF")
                  throw new r(
                    "Unexpected end of input in a macro argument, expected '" +
                      (s && c ? s[C] : "}") +
                      "'",
                    y
                  );
                if (s && c)
                  if (
                    (x === 0 || (x === 1 && s[C] === "{")) &&
                    y.text === s[C]
                  ) {
                    if ((++C, C === s.length)) {
                      u.splice(-C, C);
                      break;
                    }
                  } else C = 0;
              } while (x !== 0 || c);
              return (
                f.text === "{" &&
                  u[u.length - 1].text === "}" &&
                  (u.pop(), u.shift()),
                u.reverse(),
                { tokens: u, start: f, end: y }
              );
            }),
            (a.consumeArgs = function (s, u) {
              if (u) {
                if (u.length !== s + 1)
                  throw new r(
                    "The length of delimiters doesn't match the number of args!"
                  );
                for (var c = u[0], f = 0; f < c.length; f++) {
                  var y = this.popToken();
                  if (c[f] !== y.text)
                    throw new r(
                      "Use of the macro doesn't match its definition",
                      y
                    );
                }
              }
              for (var x = [], C = 0; C < s; C++)
                x.push(this.consumeArg(u && u[C + 1]).tokens);
              return x;
            }),
            (a.expandOnce = function (s) {
              var u = this.popToken(),
                c = u.text,
                f = u.noexpand ? null : this._getExpansion(c);
              if (f == null || (s && f.unexpandable)) {
                if (s && f == null && c[0] === "\\" && !this.isDefined(c))
                  throw new r("Undefined control sequence: " + c);
                return this.pushToken(u), u;
              }
              if (
                (this.expansionCount++,
                this.expansionCount > this.settings.maxExpand)
              )
                throw new r(
                  "Too many expansions: infinite loop or need to increase maxExpand setting"
                );
              var y = f.tokens,
                x = this.consumeArgs(f.numArgs, f.delimiters);
              if (f.numArgs) {
                y = y.slice();
                for (var C = y.length - 1; C >= 0; --C) {
                  var F = y[C];
                  if (F.text === "#") {
                    if (C === 0)
                      throw new r(
                        "Incomplete placeholder at end of macro body",
                        F
                      );
                    if (((F = y[--C]), F.text === "#")) y.splice(C + 1, 1);
                    else if (/^[1-9]$/.test(F.text)) {
                      var T;
                      (T = y).splice.apply(T, [C, 2].concat(x[+F.text - 1]));
                    } else throw new r("Not a valid argument number", F);
                  }
                }
              }
              return this.pushTokens(y), y;
            }),
            (a.expandAfterFuture = function () {
              return this.expandOnce(), this.future();
            }),
            (a.expandNextToken = function () {
              for (;;) {
                var s = this.expandOnce();
                if (s instanceof Jr)
                  if (s.text === "\\relax" || s.treatAsRelax) this.stack.pop();
                  else return this.stack.pop();
              }
              throw new Error();
            }),
            (a.expandMacro = function (s) {
              return this.macros.has(s)
                ? this.expandTokens([new Jr(s)])
                : void 0;
            }),
            (a.expandTokens = function (s) {
              var u = [],
                c = this.stack.length;
              for (this.pushTokens(s); this.stack.length > c; ) {
                var f = this.expandOnce(!0);
                f instanceof Jr &&
                  (f.treatAsRelax && ((f.noexpand = !1), (f.treatAsRelax = !1)),
                  u.push(this.stack.pop()));
              }
              return u;
            }),
            (a.expandMacroAsText = function (s) {
              var u = this.expandMacro(s);
              return (
                u &&
                u
                  .map(function (c) {
                    return c.text;
                  })
                  .join("")
              );
            }),
            (a._getExpansion = function (s) {
              var u = this.macros.get(s);
              if (u == null) return u;
              if (s.length === 1) {
                var c = this.lexer.catcodes[s];
                if (c != null && c !== 13) return;
              }
              var f = typeof u == "function" ? u(this) : u;
              if (typeof f == "string") {
                var y = 0;
                if (f.indexOf("#") !== -1)
                  for (
                    var x = f.replace(/##/g, "");
                    x.indexOf("#" + (y + 1)) !== -1;

                  )
                    ++y;
                for (
                  var C = new Yo(f, this.settings), F = [], T = C.lex();
                  T.text !== "EOF";

                )
                  F.push(T), (T = C.lex());
                F.reverse();
                var z = { tokens: F, numArgs: y };
                return z;
              }
              return f;
            }),
            (a.isDefined = function (s) {
              return (
                this.macros.has(s) ||
                Dr.hasOwnProperty(s) ||
                Re.math.hasOwnProperty(s) ||
                Re.text.hasOwnProperty(s) ||
                ru.hasOwnProperty(s)
              );
            }),
            (a.isExpandable = function (s) {
              var u = this.macros.get(s);
              return u != null
                ? typeof u == "string" ||
                    typeof u == "function" ||
                    !u.unexpandable
                : Dr.hasOwnProperty(s) && !Dr[s].primitive;
            }),
            h
          );
        })(),
        n0 = {
          "\u0301": { text: "\\'", math: "\\acute" },
          "\u0300": { text: "\\`", math: "\\grave" },
          "\u0308": { text: '\\"', math: "\\ddot" },
          "\u0303": { text: "\\~", math: "\\tilde" },
          "\u0304": { text: "\\=", math: "\\bar" },
          "\u0306": { text: "\\u", math: "\\breve" },
          "\u030C": { text: "\\v", math: "\\check" },
          "\u0302": { text: "\\^", math: "\\hat" },
          "\u0307": { text: "\\.", math: "\\dot" },
          "\u030A": { text: "\\r", math: "\\mathring" },
          "\u030B": { text: "\\H" },
          "\u0327": { text: "\\c" },
        },
        nu = {
          á: "a\u0301",
          à: "a\u0300",
          ä: "a\u0308",
          ǟ: "a\u0308\u0304",
          ã: "a\u0303",
          ā: "a\u0304",
          ă: "a\u0306",
          ắ: "a\u0306\u0301",
          ằ: "a\u0306\u0300",
          ẵ: "a\u0306\u0303",
          ǎ: "a\u030C",
          â: "a\u0302",
          ấ: "a\u0302\u0301",
          ầ: "a\u0302\u0300",
          ẫ: "a\u0302\u0303",
          ȧ: "a\u0307",
          ǡ: "a\u0307\u0304",
          å: "a\u030A",
          ǻ: "a\u030A\u0301",
          ḃ: "b\u0307",
          ć: "c\u0301",
          ḉ: "c\u0327\u0301",
          č: "c\u030C",
          ĉ: "c\u0302",
          ċ: "c\u0307",
          ç: "c\u0327",
          ď: "d\u030C",
          ḋ: "d\u0307",
          ḑ: "d\u0327",
          é: "e\u0301",
          è: "e\u0300",
          ë: "e\u0308",
          ẽ: "e\u0303",
          ē: "e\u0304",
          ḗ: "e\u0304\u0301",
          ḕ: "e\u0304\u0300",
          ĕ: "e\u0306",
          ḝ: "e\u0327\u0306",
          ě: "e\u030C",
          ê: "e\u0302",
          ế: "e\u0302\u0301",
          ề: "e\u0302\u0300",
          ễ: "e\u0302\u0303",
          ė: "e\u0307",
          ȩ: "e\u0327",
          ḟ: "f\u0307",
          ǵ: "g\u0301",
          ḡ: "g\u0304",
          ğ: "g\u0306",
          ǧ: "g\u030C",
          ĝ: "g\u0302",
          ġ: "g\u0307",
          ģ: "g\u0327",
          ḧ: "h\u0308",
          ȟ: "h\u030C",
          ĥ: "h\u0302",
          ḣ: "h\u0307",
          ḩ: "h\u0327",
          í: "i\u0301",
          ì: "i\u0300",
          ï: "i\u0308",
          ḯ: "i\u0308\u0301",
          ĩ: "i\u0303",
          ī: "i\u0304",
          ĭ: "i\u0306",
          ǐ: "i\u030C",
          î: "i\u0302",
          ǰ: "j\u030C",
          ĵ: "j\u0302",
          ḱ: "k\u0301",
          ǩ: "k\u030C",
          ķ: "k\u0327",
          ĺ: "l\u0301",
          ľ: "l\u030C",
          ļ: "l\u0327",
          ḿ: "m\u0301",
          ṁ: "m\u0307",
          ń: "n\u0301",
          ǹ: "n\u0300",
          ñ: "n\u0303",
          ň: "n\u030C",
          ṅ: "n\u0307",
          ņ: "n\u0327",
          ó: "o\u0301",
          ò: "o\u0300",
          ö: "o\u0308",
          ȫ: "o\u0308\u0304",
          õ: "o\u0303",
          ṍ: "o\u0303\u0301",
          ṏ: "o\u0303\u0308",
          ȭ: "o\u0303\u0304",
          ō: "o\u0304",
          ṓ: "o\u0304\u0301",
          ṑ: "o\u0304\u0300",
          ŏ: "o\u0306",
          ǒ: "o\u030C",
          ô: "o\u0302",
          ố: "o\u0302\u0301",
          ồ: "o\u0302\u0300",
          ỗ: "o\u0302\u0303",
          ȯ: "o\u0307",
          ȱ: "o\u0307\u0304",
          ő: "o\u030B",
          ṕ: "p\u0301",
          ṗ: "p\u0307",
          ŕ: "r\u0301",
          ř: "r\u030C",
          ṙ: "r\u0307",
          ŗ: "r\u0327",
          ś: "s\u0301",
          ṥ: "s\u0301\u0307",
          š: "s\u030C",
          ṧ: "s\u030C\u0307",
          ŝ: "s\u0302",
          ṡ: "s\u0307",
          ş: "s\u0327",
          ẗ: "t\u0308",
          ť: "t\u030C",
          ṫ: "t\u0307",
          ţ: "t\u0327",
          ú: "u\u0301",
          ù: "u\u0300",
          ü: "u\u0308",
          ǘ: "u\u0308\u0301",
          ǜ: "u\u0308\u0300",
          ǖ: "u\u0308\u0304",
          ǚ: "u\u0308\u030C",
          ũ: "u\u0303",
          ṹ: "u\u0303\u0301",
          ū: "u\u0304",
          ṻ: "u\u0304\u0308",
          ŭ: "u\u0306",
          ǔ: "u\u030C",
          û: "u\u0302",
          ů: "u\u030A",
          ű: "u\u030B",
          ṽ: "v\u0303",
          ẃ: "w\u0301",
          ẁ: "w\u0300",
          ẅ: "w\u0308",
          ŵ: "w\u0302",
          ẇ: "w\u0307",
          ẘ: "w\u030A",
          ẍ: "x\u0308",
          ẋ: "x\u0307",
          ý: "y\u0301",
          ỳ: "y\u0300",
          ÿ: "y\u0308",
          ỹ: "y\u0303",
          ȳ: "y\u0304",
          ŷ: "y\u0302",
          ẏ: "y\u0307",
          ẙ: "y\u030A",
          ź: "z\u0301",
          ž: "z\u030C",
          ẑ: "z\u0302",
          ż: "z\u0307",
          Á: "A\u0301",
          À: "A\u0300",
          Ä: "A\u0308",
          Ǟ: "A\u0308\u0304",
          Ã: "A\u0303",
          Ā: "A\u0304",
          Ă: "A\u0306",
          Ắ: "A\u0306\u0301",
          Ằ: "A\u0306\u0300",
          Ẵ: "A\u0306\u0303",
          Ǎ: "A\u030C",
          Â: "A\u0302",
          Ấ: "A\u0302\u0301",
          Ầ: "A\u0302\u0300",
          Ẫ: "A\u0302\u0303",
          Ȧ: "A\u0307",
          Ǡ: "A\u0307\u0304",
          Å: "A\u030A",
          Ǻ: "A\u030A\u0301",
          Ḃ: "B\u0307",
          Ć: "C\u0301",
          Ḉ: "C\u0327\u0301",
          Č: "C\u030C",
          Ĉ: "C\u0302",
          Ċ: "C\u0307",
          Ç: "C\u0327",
          Ď: "D\u030C",
          Ḋ: "D\u0307",
          Ḑ: "D\u0327",
          É: "E\u0301",
          È: "E\u0300",
          Ë: "E\u0308",
          Ẽ: "E\u0303",
          Ē: "E\u0304",
          Ḗ: "E\u0304\u0301",
          Ḕ: "E\u0304\u0300",
          Ĕ: "E\u0306",
          Ḝ: "E\u0327\u0306",
          Ě: "E\u030C",
          Ê: "E\u0302",
          Ế: "E\u0302\u0301",
          Ề: "E\u0302\u0300",
          Ễ: "E\u0302\u0303",
          Ė: "E\u0307",
          Ȩ: "E\u0327",
          Ḟ: "F\u0307",
          Ǵ: "G\u0301",
          Ḡ: "G\u0304",
          Ğ: "G\u0306",
          Ǧ: "G\u030C",
          Ĝ: "G\u0302",
          Ġ: "G\u0307",
          Ģ: "G\u0327",
          Ḧ: "H\u0308",
          Ȟ: "H\u030C",
          Ĥ: "H\u0302",
          Ḣ: "H\u0307",
          Ḩ: "H\u0327",
          Í: "I\u0301",
          Ì: "I\u0300",
          Ï: "I\u0308",
          Ḯ: "I\u0308\u0301",
          Ĩ: "I\u0303",
          Ī: "I\u0304",
          Ĭ: "I\u0306",
          Ǐ: "I\u030C",
          Î: "I\u0302",
          İ: "I\u0307",
          Ĵ: "J\u0302",
          Ḱ: "K\u0301",
          Ǩ: "K\u030C",
          Ķ: "K\u0327",
          Ĺ: "L\u0301",
          Ľ: "L\u030C",
          Ļ: "L\u0327",
          Ḿ: "M\u0301",
          Ṁ: "M\u0307",
          Ń: "N\u0301",
          Ǹ: "N\u0300",
          Ñ: "N\u0303",
          Ň: "N\u030C",
          Ṅ: "N\u0307",
          Ņ: "N\u0327",
          Ó: "O\u0301",
          Ò: "O\u0300",
          Ö: "O\u0308",
          Ȫ: "O\u0308\u0304",
          Õ: "O\u0303",
          Ṍ: "O\u0303\u0301",
          Ṏ: "O\u0303\u0308",
          Ȭ: "O\u0303\u0304",
          Ō: "O\u0304",
          Ṓ: "O\u0304\u0301",
          Ṑ: "O\u0304\u0300",
          Ŏ: "O\u0306",
          Ǒ: "O\u030C",
          Ô: "O\u0302",
          Ố: "O\u0302\u0301",
          Ồ: "O\u0302\u0300",
          Ỗ: "O\u0302\u0303",
          Ȯ: "O\u0307",
          Ȱ: "O\u0307\u0304",
          Ő: "O\u030B",
          Ṕ: "P\u0301",
          Ṗ: "P\u0307",
          Ŕ: "R\u0301",
          Ř: "R\u030C",
          Ṙ: "R\u0307",
          Ŗ: "R\u0327",
          Ś: "S\u0301",
          Ṥ: "S\u0301\u0307",
          Š: "S\u030C",
          Ṧ: "S\u030C\u0307",
          Ŝ: "S\u0302",
          Ṡ: "S\u0307",
          Ş: "S\u0327",
          Ť: "T\u030C",
          Ṫ: "T\u0307",
          Ţ: "T\u0327",
          Ú: "U\u0301",
          Ù: "U\u0300",
          Ü: "U\u0308",
          Ǘ: "U\u0308\u0301",
          Ǜ: "U\u0308\u0300",
          Ǖ: "U\u0308\u0304",
          Ǚ: "U\u0308\u030C",
          Ũ: "U\u0303",
          Ṹ: "U\u0303\u0301",
          Ū: "U\u0304",
          Ṻ: "U\u0304\u0308",
          Ŭ: "U\u0306",
          Ǔ: "U\u030C",
          Û: "U\u0302",
          Ů: "U\u030A",
          Ű: "U\u030B",
          Ṽ: "V\u0303",
          Ẃ: "W\u0301",
          Ẁ: "W\u0300",
          Ẅ: "W\u0308",
          Ŵ: "W\u0302",
          Ẇ: "W\u0307",
          Ẍ: "X\u0308",
          Ẋ: "X\u0307",
          Ý: "Y\u0301",
          Ỳ: "Y\u0300",
          Ÿ: "Y\u0308",
          Ỹ: "Y\u0303",
          Ȳ: "Y\u0304",
          Ŷ: "Y\u0302",
          Ẏ: "Y\u0307",
          Ź: "Z\u0301",
          Ž: "Z\u030C",
          Ẑ: "Z\u0302",
          Ż: "Z\u0307",
          ά: "\u03B1\u0301",
          ὰ: "\u03B1\u0300",
          ᾱ: "\u03B1\u0304",
          ᾰ: "\u03B1\u0306",
          έ: "\u03B5\u0301",
          ὲ: "\u03B5\u0300",
          ή: "\u03B7\u0301",
          ὴ: "\u03B7\u0300",
          ί: "\u03B9\u0301",
          ὶ: "\u03B9\u0300",
          ϊ: "\u03B9\u0308",
          ΐ: "\u03B9\u0308\u0301",
          ῒ: "\u03B9\u0308\u0300",
          ῑ: "\u03B9\u0304",
          ῐ: "\u03B9\u0306",
          ό: "\u03BF\u0301",
          ὸ: "\u03BF\u0300",
          ύ: "\u03C5\u0301",
          ὺ: "\u03C5\u0300",
          ϋ: "\u03C5\u0308",
          ΰ: "\u03C5\u0308\u0301",
          ῢ: "\u03C5\u0308\u0300",
          ῡ: "\u03C5\u0304",
          ῠ: "\u03C5\u0306",
          ώ: "\u03C9\u0301",
          ὼ: "\u03C9\u0300",
          Ύ: "\u03A5\u0301",
          Ὺ: "\u03A5\u0300",
          Ϋ: "\u03A5\u0308",
          Ῡ: "\u03A5\u0304",
          Ῠ: "\u03A5\u0306",
          Ώ: "\u03A9\u0301",
          Ὼ: "\u03A9\u0300",
        },
        au = (function () {
          function h(i, s) {
            (this.mode = void 0),
              (this.gullet = void 0),
              (this.settings = void 0),
              (this.leftrightDepth = void 0),
              (this.nextToken = void 0),
              (this.mode = "math"),
              (this.gullet = new vf(i, s, this.mode)),
              (this.settings = s),
              (this.leftrightDepth = 0);
          }
          var a = h.prototype;
          return (
            (a.expect = function (s, u) {
              if ((u === void 0 && (u = !0), this.fetch().text !== s))
                throw new r(
                  "Expected '" + s + "', got '" + this.fetch().text + "'",
                  this.fetch()
                );
              u && this.consume();
            }),
            (a.consume = function () {
              this.nextToken = null;
            }),
            (a.fetch = function () {
              return (
                this.nextToken == null &&
                  (this.nextToken = this.gullet.expandNextToken()),
                this.nextToken
              );
            }),
            (a.switchMode = function (s) {
              (this.mode = s), this.gullet.switchMode(s);
            }),
            (a.parse = function () {
              this.settings.globalGroup || this.gullet.beginGroup(),
                this.settings.colorIsTextColor &&
                  this.gullet.macros.set("\\color", "\\textcolor");
              try {
                var s = this.parseExpression(!1);
                return (
                  this.expect("EOF"),
                  this.settings.globalGroup || this.gullet.endGroup(),
                  s
                );
              } finally {
                this.gullet.endGroups();
              }
            }),
            (a.parseExpression = function (s, u) {
              for (var c = []; ; ) {
                this.mode === "math" && this.consumeSpaces();
                var f = this.fetch();
                if (
                  h.endOfExpression.indexOf(f.text) !== -1 ||
                  (u && f.text === u) ||
                  (s && Dr[f.text] && Dr[f.text].infix)
                )
                  break;
                var y = this.parseAtom(u);
                if (y) {
                  if (y.type === "internal") continue;
                } else break;
                c.push(y);
              }
              return (
                this.mode === "text" && this.formLigatures(c),
                this.handleInfixNodes(c)
              );
            }),
            (a.handleInfixNodes = function (s) {
              for (var u = -1, c, f = 0; f < s.length; f++)
                if (s[f].type === "infix") {
                  if (u !== -1)
                    throw new r(
                      "only one infix operator per group",
                      s[f].token
                    );
                  (u = f), (c = s[f].replaceWith);
                }
              if (u !== -1 && c) {
                var y,
                  x,
                  C = s.slice(0, u),
                  F = s.slice(u + 1);
                C.length === 1 && C[0].type === "ordgroup"
                  ? (y = C[0])
                  : (y = { type: "ordgroup", mode: this.mode, body: C }),
                  F.length === 1 && F[0].type === "ordgroup"
                    ? (x = F[0])
                    : (x = { type: "ordgroup", mode: this.mode, body: F });
                var T;
                return (
                  c === "\\\\abovefrac"
                    ? (T = this.callFunction(c, [y, s[u], x], []))
                    : (T = this.callFunction(c, [y, x], [])),
                  [T]
                );
              } else return s;
            }),
            (a.handleSupSubscript = function (s) {
              var u = this.fetch(),
                c = u.text;
              this.consume(), this.consumeSpaces();
              var f = this.parseGroup(s);
              if (!f) throw new r("Expected group after '" + c + "'", u);
              return f;
            }),
            (a.formatUnsupportedCmd = function (s) {
              for (var u = [], c = 0; c < s.length; c++)
                u.push({ type: "textord", mode: "text", text: s[c] });
              var f = { type: "text", mode: this.mode, body: u },
                y = {
                  type: "color",
                  mode: this.mode,
                  color: this.settings.errorColor,
                  body: [f],
                };
              return y;
            }),
            (a.parseAtom = function (s) {
              var u = this.parseGroup("atom", s);
              if (this.mode === "text") return u;
              for (var c, f; ; ) {
                this.consumeSpaces();
                var y = this.fetch();
                if (y.text === "\\limits" || y.text === "\\nolimits") {
                  if (u && u.type === "op") {
                    var x = y.text === "\\limits";
                    (u.limits = x), (u.alwaysHandleSupSub = !0);
                  } else if (u && u.type === "operatorname")
                    u.alwaysHandleSupSub && (u.limits = y.text === "\\limits");
                  else
                    throw new r(
                      "Limit controls must follow a math operator",
                      y
                    );
                  this.consume();
                } else if (y.text === "^") {
                  if (c) throw new r("Double superscript", y);
                  c = this.handleSupSubscript("superscript");
                } else if (y.text === "_") {
                  if (f) throw new r("Double subscript", y);
                  f = this.handleSupSubscript("subscript");
                } else if (y.text === "'") {
                  if (c) throw new r("Double superscript", y);
                  var C = { type: "textord", mode: this.mode, text: "\\prime" },
                    F = [C];
                  for (this.consume(); this.fetch().text === "'"; )
                    F.push(C), this.consume();
                  this.fetch().text === "^" &&
                    F.push(this.handleSupSubscript("superscript")),
                    (c = { type: "ordgroup", mode: this.mode, body: F });
                } else break;
              }
              return c || f
                ? { type: "supsub", mode: this.mode, base: u, sup: c, sub: f }
                : u;
            }),
            (a.parseFunction = function (s, u) {
              var c = this.fetch(),
                f = c.text,
                y = Dr[f];
              if (!y) return null;
              if ((this.consume(), u && u !== "atom" && !y.allowedInArgument))
                throw new r(
                  "Got function '" +
                    f +
                    "' with no arguments" +
                    (u ? " as " + u : ""),
                  c
                );
              if (this.mode === "text" && !y.allowedInText)
                throw new r("Can't use function '" + f + "' in text mode", c);
              if (this.mode === "math" && y.allowedInMath === !1)
                throw new r("Can't use function '" + f + "' in math mode", c);
              var x = this.parseArguments(f, y),
                C = x.args,
                F = x.optArgs;
              return this.callFunction(f, C, F, c, s);
            }),
            (a.callFunction = function (s, u, c, f, y) {
              var x = {
                  funcName: s,
                  parser: this,
                  token: f,
                  breakOnTokenText: y,
                },
                C = Dr[s];
              if (C && C.handler) return C.handler(x, u, c);
              throw new r("No function handler for " + s);
            }),
            (a.parseArguments = function (s, u) {
              var c = u.numArgs + u.numOptionalArgs;
              if (c === 0) return { args: [], optArgs: [] };
              for (var f = [], y = [], x = 0; x < c; x++) {
                var C = u.argTypes && u.argTypes[x],
                  F = x < u.numOptionalArgs;
                ((u.primitive && C == null) ||
                  (u.type === "sqrt" && x === 1 && y[0] == null)) &&
                  (C = "primitive");
                var T = this.parseGroupOfType("argument to '" + s + "'", C, F);
                if (F) y.push(T);
                else if (T != null) f.push(T);
                else throw new r("Null argument, please report this as a bug");
              }
              return { args: f, optArgs: y };
            }),
            (a.parseGroupOfType = function (s, u, c) {
              switch (u) {
                case "color":
                  return this.parseColorGroup(c);
                case "size":
                  return this.parseSizeGroup(c);
                case "url":
                  return this.parseUrlGroup(c);
                case "math":
                case "text":
                  return this.parseArgumentGroup(c, u);
                case "hbox": {
                  var f = this.parseArgumentGroup(c, "text");
                  return f != null
                    ? {
                        type: "styling",
                        mode: f.mode,
                        body: [f],
                        style: "text",
                      }
                    : null;
                }
                case "raw": {
                  var y = this.parseStringGroup("raw", c);
                  return y != null
                    ? { type: "raw", mode: "text", string: y.text }
                    : null;
                }
                case "primitive": {
                  if (c) throw new r("A primitive argument cannot be optional");
                  var x = this.parseGroup(s);
                  if (x == null)
                    throw new r("Expected group as " + s, this.fetch());
                  return x;
                }
                case "original":
                case null:
                case void 0:
                  return this.parseArgumentGroup(c);
                default:
                  throw new r("Unknown group type as " + s, this.fetch());
              }
            }),
            (a.consumeSpaces = function () {
              for (; this.fetch().text === " "; ) this.consume();
            }),
            (a.parseStringGroup = function (s, u) {
              var c = this.gullet.scanArgument(u);
              if (c == null) return null;
              for (var f = "", y; (y = this.fetch()).text !== "EOF"; )
                (f += y.text), this.consume();
              return this.consume(), (c.text = f), c;
            }),
            (a.parseRegexGroup = function (s, u) {
              for (
                var c = this.fetch(), f = c, y = "", x;
                (x = this.fetch()).text !== "EOF" && s.test(y + x.text);

              )
                (f = x), (y += f.text), this.consume();
              if (y === "")
                throw new r("Invalid " + u + ": '" + c.text + "'", c);
              return c.range(f, y);
            }),
            (a.parseColorGroup = function (s) {
              var u = this.parseStringGroup("color", s);
              if (u == null) return null;
              var c = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(u.text);
              if (!c) throw new r("Invalid color: '" + u.text + "'", u);
              var f = c[0];
              return (
                /^[0-9a-f]{6}$/i.test(f) && (f = "#" + f),
                { type: "color-token", mode: this.mode, color: f }
              );
            }),
            (a.parseSizeGroup = function (s) {
              var u,
                c = !1;
              if (
                (this.gullet.consumeSpaces(),
                !s && this.gullet.future().text !== "{"
                  ? (u = this.parseRegexGroup(
                      /^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,
                      "size"
                    ))
                  : (u = this.parseStringGroup("size", s)),
                !u)
              )
                return null;
              !s && u.text.length === 0 && ((u.text = "0pt"), (c = !0));
              var f = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(u.text);
              if (!f) throw new r("Invalid size: '" + u.text + "'", u);
              var y = { number: +(f[1] + f[2]), unit: f[3] };
              if (!Is(y)) throw new r("Invalid unit: '" + y.unit + "'", u);
              return { type: "size", mode: this.mode, value: y, isBlank: c };
            }),
            (a.parseUrlGroup = function (s) {
              this.gullet.lexer.setCatcode("%", 13),
                this.gullet.lexer.setCatcode("~", 12);
              var u = this.parseStringGroup("url", s);
              if (
                (this.gullet.lexer.setCatcode("%", 14),
                this.gullet.lexer.setCatcode("~", 13),
                u == null)
              )
                return null;
              var c = u.text.replace(/\\([#$%&~_^{}])/g, "$1");
              return { type: "url", mode: this.mode, url: c };
            }),
            (a.parseArgumentGroup = function (s, u) {
              var c = this.gullet.scanArgument(s);
              if (c == null) return null;
              var f = this.mode;
              u && this.switchMode(u), this.gullet.beginGroup();
              var y = this.parseExpression(!1, "EOF");
              this.expect("EOF"), this.gullet.endGroup();
              var x = {
                type: "ordgroup",
                mode: this.mode,
                loc: c.loc,
                body: y,
              };
              return u && this.switchMode(f), x;
            }),
            (a.parseGroup = function (s, u) {
              var c = this.fetch(),
                f = c.text,
                y;
              if (f === "{" || f === "\\begingroup") {
                this.consume();
                var x = f === "{" ? "}" : "\\endgroup";
                this.gullet.beginGroup();
                var C = this.parseExpression(!1, x),
                  F = this.fetch();
                this.expect(x),
                  this.gullet.endGroup(),
                  (y = {
                    type: "ordgroup",
                    mode: this.mode,
                    loc: At.range(c, F),
                    body: C,
                    semisimple: f === "\\begingroup" || void 0,
                  });
              } else if (
                ((y = this.parseFunction(u, s) || this.parseSymbol()),
                y == null && f[0] === "\\" && !ru.hasOwnProperty(f))
              ) {
                if (this.settings.throwOnError)
                  throw new r("Undefined control sequence: " + f, c);
                (y = this.formatUnsupportedCmd(f)), this.consume();
              }
              return y;
            }),
            (a.formLigatures = function (s) {
              for (var u = s.length - 1, c = 0; c < u; ++c) {
                var f = s[c],
                  y = f.text;
                y === "-" &&
                  s[c + 1].text === "-" &&
                  (c + 1 < u && s[c + 2].text === "-"
                    ? (s.splice(c, 3, {
                        type: "textord",
                        mode: "text",
                        loc: At.range(f, s[c + 2]),
                        text: "---",
                      }),
                      (u -= 2))
                    : (s.splice(c, 2, {
                        type: "textord",
                        mode: "text",
                        loc: At.range(f, s[c + 1]),
                        text: "--",
                      }),
                      (u -= 1))),
                  (y === "'" || y === "`") &&
                    s[c + 1].text === y &&
                    (s.splice(c, 2, {
                      type: "textord",
                      mode: "text",
                      loc: At.range(f, s[c + 1]),
                      text: y + y,
                    }),
                    (u -= 1));
              }
            }),
            (a.parseSymbol = function () {
              var s = this.fetch(),
                u = s.text;
              if (/^\\verb[^a-zA-Z]/.test(u)) {
                this.consume();
                var c = u.slice(5),
                  f = c.charAt(0) === "*";
                if (
                  (f && (c = c.slice(1)),
                  c.length < 2 || c.charAt(0) !== c.slice(-1))
                )
                  throw new r(`\\verb assertion failed --
                    please report what input caused this bug`);
                return (
                  (c = c.slice(1, -1)),
                  { type: "verb", mode: "text", body: c, star: f }
                );
              }
              nu.hasOwnProperty(u[0]) &&
                !Re[this.mode][u[0]] &&
                (this.settings.strict &&
                  this.mode === "math" &&
                  this.settings.reportNonstrict(
                    "unicodeTextInMathMode",
                    'Accented Unicode text character "' +
                      u[0] +
                      '" used in math mode',
                    s
                  ),
                (u = nu[u[0]] + u.substr(1)));
              var y = pf.exec(u);
              y &&
                ((u = u.substring(0, y.index)),
                u === "i" ? (u = "\u0131") : u === "j" && (u = "\u0237"));
              var x;
              if (Re[this.mode][u]) {
                this.settings.strict &&
                  this.mode === "math" &&
                  Fi.indexOf(u) >= 0 &&
                  this.settings.reportNonstrict(
                    "unicodeTextInMathMode",
                    'Latin-1/Unicode text character "' +
                      u[0] +
                      '" used in math mode',
                    s
                  );
                var C = Re[this.mode][u].group,
                  F = At.range(s),
                  T;
                if (tp.hasOwnProperty(C)) {
                  var z = C;
                  T = {
                    type: "atom",
                    mode: this.mode,
                    family: z,
                    loc: F,
                    text: u,
                  };
                } else T = { type: C, mode: this.mode, loc: F, text: u };
                x = T;
              } else if (u.charCodeAt(0) >= 128)
                this.settings.strict &&
                  (cr(u.charCodeAt(0))
                    ? this.mode === "math" &&
                      this.settings.reportNonstrict(
                        "unicodeTextInMathMode",
                        'Unicode text character "' +
                          u[0] +
                          '" used in math mode',
                        s
                      )
                    : this.settings.reportNonstrict(
                        "unknownSymbol",
                        'Unrecognized Unicode character "' +
                          u[0] +
                          '"' +
                          (" (" + u.charCodeAt(0) + ")"),
                        s
                      )),
                  (x = {
                    type: "textord",
                    mode: "text",
                    loc: At.range(s),
                    text: u,
                  });
              else return null;
              if ((this.consume(), y))
                for (var P = 0; P < y[0].length; P++) {
                  var I = y[0][P];
                  if (!n0[I]) throw new r("Unknown accent ' " + I + "'", s);
                  var V = n0[I][this.mode] || n0[I].text;
                  if (!V)
                    throw new r(
                      "Accent " + I + " unsupported in " + this.mode + " mode",
                      s
                    );
                  x = {
                    type: "accent",
                    mode: this.mode,
                    loc: At.range(s),
                    label: V,
                    isStretchy: !1,
                    isShifty: !0,
                    base: x,
                  };
                }
              return x;
            }),
            h
          );
        })();
      au.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
      var yf = function (a, i) {
          if (!(typeof a == "string" || a instanceof String))
            throw new TypeError("KaTeX can only parse string typed expression");
          var s = new au(a, i);
          delete s.gullet.macros.current["\\df@tag"];
          var u = s.parse();
          if (
            (delete s.gullet.macros.current["\\current@color"],
            delete s.gullet.macros.current["\\color"],
            s.gullet.macros.get("\\df@tag"))
          ) {
            if (!i.displayMode)
              throw new r("\\tag works only in display equations");
            s.gullet.feed("\\df@tag"),
              (u = [{ type: "tag", mode: "text", body: u, tag: s.parse() }]);
          }
          return u;
        },
        a0 = yf,
        iu = function (a, i, s) {
          i.textContent = "";
          var u = i0(a, s).toNode();
          i.appendChild(u);
        };
      typeof document < "u" &&
        document.compatMode !== "CSS1Compat" &&
        (typeof console < "u" &&
          console.warn(
            "Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."
          ),
        (iu = function () {
          throw new r("KaTeX doesn't work in quirks mode.");
        }));
      var Df = function (a, i) {
          var s = i0(a, i).toMarkup();
          return s;
        },
        xf = function (a, i) {
          var s = new q(i);
          return a0(a, s);
        },
        su = function (a, i, s) {
          if (s.throwOnError || !(a instanceof r)) throw a;
          var u = M.makeSpan(["katex-error"], [new ht(i)]);
          return (
            u.setAttribute("title", a.toString()),
            u.setAttribute("style", "color:" + s.errorColor),
            u
          );
        },
        i0 = function (a, i) {
          var s = new q(i);
          try {
            var u = a0(a, s);
            return Sp(u, a, s);
          } catch (c) {
            return su(c, a, s);
          }
        },
        bf = function (a, i) {
          var s = new q(i);
          try {
            var u = a0(a, s);
            return kp(u, a, s);
          } catch (c) {
            return su(c, a, s);
          }
        },
        wf = {
          version: "0.13.24",
          render: iu,
          renderToString: Df,
          ParseError: r,
          __parse: xf,
          __renderToDomTree: i0,
          __renderToHTMLTree: bf,
          __setFontMetrics: Gd,
          __defineSymbol: p,
          __defineMacro: b,
          __domTree: {
            Span: _n,
            Anchor: Ci,
            SymbolNode: ht,
            SvgNode: mr,
            PathNode: Vr,
            LineNode: Si,
          },
        },
        Cf = wf;
      return (e = e.default), e;
    })();
  });
});
function Rf(t) {
  for (var e = [], n = 0; n < t.length; ) {
    var r = t[n];
    if (r === "*" || r === "+" || r === "?") {
      e.push({ type: "MODIFIER", index: n, value: t[n++] });
      continue;
    }
    if (r === "\\") {
      e.push({ type: "ESCAPED_CHAR", index: n++, value: t[n++] });
      continue;
    }
    if (r === "{") {
      e.push({ type: "OPEN", index: n, value: t[n++] });
      continue;
    }
    if (r === "}") {
      e.push({ type: "CLOSE", index: n, value: t[n++] });
      continue;
    }
    if (r === ":") {
      for (var o = "", l = n + 1; l < t.length; ) {
        var d = t.charCodeAt(l);
        if (
          (d >= 48 && d <= 57) ||
          (d >= 65 && d <= 90) ||
          (d >= 97 && d <= 122) ||
          d === 95
        ) {
          o += t[l++];
          continue;
        }
        break;
      }
      if (!o) throw new TypeError("Missing parameter name at ".concat(n));
      e.push({ type: "NAME", index: n, value: o }), (n = l);
      continue;
    }
    if (r === "(") {
      var m = 1,
        v = "",
        l = n + 1;
      if (t[l] === "?")
        throw new TypeError('Pattern cannot start with "?" at '.concat(l));
      for (; l < t.length; ) {
        if (t[l] === "\\") {
          v += t[l++] + t[l++];
          continue;
        }
        if (t[l] === ")") {
          if ((m--, m === 0)) {
            l++;
            break;
          }
        } else if (t[l] === "(" && (m++, t[l + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(l));
        v += t[l++];
      }
      if (m) throw new TypeError("Unbalanced pattern at ".concat(n));
      if (!v) throw new TypeError("Missing pattern at ".concat(n));
      e.push({ type: "PATTERN", index: n, value: v }), (n = l);
      continue;
    }
    e.push({ type: "CHAR", index: n, value: t[n++] });
  }
  return e.push({ type: "END", index: n, value: "" }), e;
}
function Pf(t, e) {
  e === void 0 && (e = {});
  for (
    var n = Rf(t),
      r = e.prefixes,
      o = r === void 0 ? "./" : r,
      l = "[^".concat(jf(e.delimiter || "/#?"), "]+?"),
      d = [],
      m = 0,
      v = 0,
      w = "",
      S = function (Ne) {
        if (v < n.length && n[v].type === Ne) return n[v++].value;
      },
      A = function (Ne) {
        var Ee = S(Ne);
        if (Ee !== void 0) return Ee;
        var ie = n[v],
          ue = ie.type,
          ge = ie.index;
        throw new TypeError(
          "Unexpected ".concat(ue, " at ").concat(ge, ", expected ").concat(Ne)
        );
      },
      N = function () {
        for (var Ne = "", Ee; (Ee = S("CHAR") || S("ESCAPED_CHAR")); ) Ne += Ee;
        return Ne;
      };
    v < n.length;

  ) {
    var _ = S("CHAR"),
      H = S("NAME"),
      O = S("PATTERN");
    if (H || O) {
      var q = _ || "";
      o.indexOf(q) === -1 && ((w += q), (q = "")),
        w && (d.push(w), (w = "")),
        d.push({
          name: H || m++,
          prefix: q,
          suffix: "",
          pattern: O || l,
          modifier: S("MODIFIER") || "",
        });
      continue;
    }
    var R = _ || S("ESCAPED_CHAR");
    if (R) {
      w += R;
      continue;
    }
    w && (d.push(w), (w = ""));
    var j = S("OPEN");
    if (j) {
      var q = N(),
        fe = S("NAME") || "",
        ae = S("PATTERN") || "",
        we = N();
      A("CLOSE"),
        d.push({
          name: fe || (ae ? m++ : ""),
          pattern: fe && !ae ? l : ae,
          prefix: q,
          suffix: we,
          modifier: S("MODIFIER") || "",
        });
      continue;
    }
    A("END");
  }
  return d;
}
function fu(t, e) {
  return If(Pf(t, e), e);
}
function If(t, e) {
  e === void 0 && (e = {});
  var n = Lf(e),
    r = e.encode,
    o =
      r === void 0
        ? function (v) {
            return v;
          }
        : r,
    l = e.validate,
    d = l === void 0 ? !0 : l,
    m = t.map(function (v) {
      if (typeof v == "object")
        return new RegExp("^(?:".concat(v.pattern, ")$"), n);
    });
  return function (v) {
    for (var w = "", S = 0; S < t.length; S++) {
      var A = t[S];
      if (typeof A == "string") {
        w += A;
        continue;
      }
      var N = v ? v[A.name] : void 0,
        _ = A.modifier === "?" || A.modifier === "*",
        H = A.modifier === "*" || A.modifier === "+";
      if (Array.isArray(N)) {
        if (!H)
          throw new TypeError(
            'Expected "'.concat(A.name, '" to not repeat, but got an array')
          );
        if (N.length === 0) {
          if (_) continue;
          throw new TypeError('Expected "'.concat(A.name, '" to not be empty'));
        }
        for (var O = 0; O < N.length; O++) {
          var q = o(N[O], A);
          if (d && !m[S].test(q))
            throw new TypeError(
              'Expected all "'
                .concat(A.name, '" to match "')
                .concat(A.pattern, '", but got "')
                .concat(q, '"')
            );
          w += A.prefix + q + A.suffix;
        }
        continue;
      }
      if (typeof N == "string" || typeof N == "number") {
        var q = o(String(N), A);
        if (d && !m[S].test(q))
          throw new TypeError(
            'Expected "'
              .concat(A.name, '" to match "')
              .concat(A.pattern, '", but got "')
              .concat(q, '"')
          );
        w += A.prefix + q + A.suffix;
        continue;
      }
      if (!_) {
        var R = H ? "an array" : "a string";
        throw new TypeError('Expected "'.concat(A.name, '" to be ').concat(R));
      }
    }
    return w;
  };
}
function jf(t) {
  return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function Lf(t) {
  return t && t.sensitive ? "" : "i";
}
var el = Qt(d0(), 1),
  Jn = Qt(f0(), 1);
var h0,
  bu,
  wu,
  Cu,
  Su = !0;
typeof process < "u" &&
  (({
    FORCE_COLOR: h0,
    NODE_DISABLE_COLORS: bu,
    NO_COLOR: wu,
    TERM: Cu,
  } = process.env || {}),
  (Su = process.stdout && process.stdout.isTTY));
var Jf = {
  enabled:
    !bu && wu == null && Cu !== "dumb" && ((h0 != null && h0 !== "0") || Su),
};
function Be(t, e) {
  let n = new RegExp(`\\x1b\\[${e}m`, "g"),
    r = `\x1B[${t}m`,
    o = `\x1B[${e}m`;
  return function (l) {
    return !Jf.enabled || l == null
      ? l
      : r + (~("" + l).indexOf(o) ? l.replace(n, o + r) : l) + o;
  };
}
var ku = Be(0, 0),
  ja = Be(1, 22),
  Eu = Be(2, 22),
  k2 = Be(3, 23),
  E2 = Be(4, 24),
  A2 = Be(7, 27),
  F2 = Be(8, 28),
  B2 = Be(9, 29),
  T2 = Be(30, 39),
  Au = Be(31, 39),
  N2 = Be(32, 39),
  Ln = Be(33, 39),
  M2 = Be(34, 39),
  O2 = Be(35, 39),
  Fu = Be(36, 39),
  _2 = Be(37, 39),
  z2 = Be(90, 39),
  R2 = Be(90, 39),
  P2 = Be(40, 49),
  I2 = Be(41, 49),
  j2 = Be(42, 49),
  L2 = Be(43, 49),
  $2 = Be(44, 49),
  q2 = Be(45, 49),
  H2 = Be(46, 49),
  U2 = Be(47, 49);
var Xf = Qt(Tu(), 1),
  Kf = Qt(Mu(), 1);
function g0(t) {
  let e = /^\\\\\?\\/.test(t),
    n = /[^\u0000-\u0080]+/.test(t);
  return e || n ? t : t.replace(/\\/g, "/");
}
var { replace: Yf } = "";
var Qf = /[&<>'"]/g,
  e1 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" },
  t1 = (t) => e1[t],
  Ou = (t) => Yf.call(t, Qf, t1);
var q0 = (t, e, n) => {
    if (!e.has(t)) throw TypeError("Cannot " + n);
  },
  rt = (t, e, n) => (
    q0(t, e, "read from private field"), n ? n.call(t) : e.get(t)
  ),
  Dn = (t, e, n) => {
    if (e.has(t))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(t) : e.set(t, n);
  },
  wn = (t, e, n, r) => (
    q0(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n
  ),
  qn = (t, e, n) => (q0(t, e, "access private method"), n),
  Ga,
  Cr,
  tt,
  La,
  F0,
  $a,
  B0,
  H0,
  tl,
  r1 = new Date(0),
  _u = "deleted",
  Vn = class {
    constructor(e) {
      this.value = e;
    }
    json() {
      if (this.value === void 0)
        throw new Error("Cannot convert undefined to an object.");
      return JSON.parse(this.value);
    }
    number() {
      return Number(this.value);
    }
    boolean() {
      return this.value === "false" || this.value === "0"
        ? !1
        : Boolean(this.value);
    }
  },
  Za = class {
    constructor(e) {
      Dn(this, La),
        Dn(this, $a),
        Dn(this, H0),
        Dn(this, Ga, void 0),
        Dn(this, Cr, void 0),
        Dn(this, tt, void 0),
        wn(this, Ga, e),
        wn(this, Cr, null),
        wn(this, tt, null);
    }
    delete(e, n) {
      let r = { expires: r1 };
      n?.domain && (r.domain = n.domain),
        n?.path && (r.path = n.path),
        qn(this, $a, B0)
          .call(this)
          .set(e, [_u, (0, Jn.serialize)(e, _u, r), !1]);
    }
    get(e) {
      if (rt(this, tt) !== null && rt(this, tt).has(e)) {
        let [o, , l] = rt(this, tt).get(e);
        return l ? new Vn(o) : new Vn(void 0);
      }
      let r = qn(this, La, F0).call(this)[e];
      return new Vn(r);
    }
    has(e) {
      if (rt(this, tt) !== null && rt(this, tt).has(e)) {
        let [, , r] = rt(this, tt).get(e);
        return r;
      }
      return !!qn(this, La, F0).call(this)[e];
    }
    set(e, n, r) {
      let o;
      if (typeof n == "string") o = n;
      else {
        let d = n.toString();
        d === Object.prototype.toString.call(n)
          ? (o = JSON.stringify(n))
          : (o = d);
      }
      let l = {};
      r && Object.assign(l, r),
        qn(this, $a, B0)
          .call(this)
          .set(e, [o, (0, Jn.serialize)(e, o, l), !0]);
    }
    *headers() {
      if (rt(this, tt) != null) for (let [, e] of rt(this, tt)) yield e[1];
    }
  };
Ga = new WeakMap();
Cr = new WeakMap();
tt = new WeakMap();
La = new WeakSet();
F0 = function () {
  return (
    rt(this, Cr) || qn(this, H0, tl).call(this),
    rt(this, Cr) || wn(this, Cr, {}),
    rt(this, Cr)
  );
};
$a = new WeakSet();
B0 = function () {
  return rt(this, tt) || wn(this, tt, new Map()), rt(this, tt);
};
H0 = new WeakSet();
tl = function () {
  let t = rt(this, Ga).headers.get("cookie");
  !t || wn(this, Cr, (0, Jn.parse)(t));
};
var rl = Symbol.for("astro.cookies");
function U0(t, e) {
  Reflect.set(t, rl, e);
}
function n1(t) {
  let e = Reflect.get(t, rl);
  if (e != null) return e;
}
function* a1(t) {
  let e = n1(t);
  if (!!e) for (let n of e.headers()) yield n;
}
var i1 = (t) => t,
  pe = i1({
    UnknownCompilerError: {
      title: "Unknown compiler error.",
      code: 1e3,
      hint: "This is almost always a problem with the Astro compiler, not your code. Please open an issue at https://astro.build/issues/compiler.",
    },
    StaticRedirectNotAvailable: {
      title: "`Astro.redirect` is not available in static mode.",
      code: 3001,
      message:
        "Redirects are only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
      hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR.",
    },
    ClientAddressNotAvailable: {
      title: "`Astro.clientAddress` is not available in current adapter.",
      code: 3002,
      message: (t) =>
        `\`Astro.clientAddress\` is not available in the \`${t}\` adapter. File an issue with the adapter to add support.`,
    },
    StaticClientAddressNotAvailable: {
      title: "`Astro.clientAddress` is not available in static mode.",
      code: 3003,
      message:
        "`Astro.clientAddress` is only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
      hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR.",
    },
    NoMatchingStaticPathFound: {
      title: "No static path found for requested path.",
      code: 3004,
      message: (t) =>
        `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${t}\`.`,
      hint: (t) => `Possible dynamic routes being matched: ${t.join(", ")}.`,
    },
    OnlyResponseCanBeReturned: {
      title: "Invalid type returned by Astro page.",
      code: 3005,
      message: (t, e) =>
        `Route \`${
          t || ""
        }\` returned a \`${e}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
      hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information.",
    },
    MissingMediaQueryDirective: {
      title: "Missing value for `client:media` directive.",
      code: 3006,
      message:
        'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided',
    },
    NoMatchingRenderer: {
      title: "No matching renderer found.",
      code: 3007,
      message: (t, e, n, r) => `Unable to render \`${t}\`.

${
  r > 0
    ? `There ${n ? "are." : "is."} ${r} renderer${
        n ? "s." : ""
      } configured in your \`astro.config.mjs\` file,
but ${n ? "none were." : "it was not."} able to server-side render \`${t}\`.`
    : `No valid renderer was found ${
        e ? `for the \`.${e}\` file extension.` : "for this file extension."
      }`
}`,
      hint: (t) => `Did you mean to enable the ${t} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`,
    },
    NoClientEntrypoint: {
      title: "No client entrypoint specified in renderer.",
      code: 3008,
      message: (t, e, n) =>
        `\`${t}\` component has a \`client:${e}\` directive, but no client entrypoint was provided by \`${n}\`.`,
      hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer.",
    },
    NoClientOnlyHint: {
      title: "Missing hint on client:only directive.",
      code: 3009,
      message: (t) =>
        `Unable to render \`${t}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
      hint: (t) =>
        `Did you mean to pass \`client:only="${t}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`,
    },
    InvalidGetStaticPathParam: {
      title: "Invalid value returned by a `getStaticPaths` path.",
      code: 3010,
      message: (t) =>
        `Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${t}\``,
      hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths.",
    },
    InvalidGetStaticPathsReturn: {
      title: "Invalid value returned by getStaticPaths.",
      code: 3011,
      message: (t) =>
        `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${t}\``,
      hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths.",
    },
    GetStaticPathsRemovedRSSHelper: {
      title: "getStaticPaths RSS helper is not available anymore.",
      code: 3012,
      message:
        "The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",
      hint: "See https://docs.astro.build/en/guides/rss/ for more information.",
    },
    GetStaticPathsExpectedParams: {
      title: "Missing params property on `getStaticPaths` route.",
      code: 3013,
      message:
        "Missing or empty required `params` property on `getStaticPaths` route.",
      hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths.",
    },
    GetStaticPathsInvalidRouteParam: {
      title: "Invalid value for `getStaticPaths` route parameter.",
      code: 3014,
      message: (t, e, n) =>
        `Invalid getStaticPaths route parameter for \`${t}\`. Expected undefined, a string or a number, received \`${n}\` (\`${e}\`)`,
      hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths.",
    },
    GetStaticPathsRequired: {
      title: "`getStaticPaths()` function required for dynamic routes.",
      code: 3015,
      message:
        "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
      hint: 'See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.\n\nAlternatively, set `output: "server"` in your Astro config file to switch to a non-static server build. This error can also occur if using `export const prerender = true;`.\nSee https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.',
    },
    ReservedSlotName: {
      title: "Invalid slot name.",
      code: 3016,
      message: (t) =>
        `Unable to create a slot named \`${t}\`. \`${t}\` is a reserved slot name. Please update the name of this slot.`,
    },
    NoAdapterInstalled: {
      title: "Cannot use Server-side Rendering without an adapter.",
      code: 3017,
      message:
        "Cannot use `output: 'server'` without an adapter. Please install and configure the appropriate server adapter for your final deployment.",
      hint: "See https://docs.astro.build/en/guides/server-side-rendering/ for more information.",
    },
    NoMatchingImport: {
      title: "No import found for component.",
      code: 3018,
      message: (t) =>
        `Could not render \`${t}\`. No matching import has been found for \`${t}\`.`,
      hint: "Please make sure the component is properly imported.",
    },
    InvalidPrerenderExport: {
      title: "Invalid prerender export.",
      code: 3019,
      message: (t, e) => {
        let n =
          "A `prerender` export has been detected, but its value cannot be statically analyzed.";
        return (
          t !== "const" &&
            (n += `
Expected \`const\` declaration but got \`${t}\`.`),
          e !== "true" &&
            (n += `
Expected \`true\` value but got \`${e}\`.`),
          n
        );
      },
      hint: "Mutable values declared at runtime are not supported. Please make sure to use exactly `export const prerender = true`.",
    },
    InvalidComponentArgs: {
      title: "Invalid component arguments.",
      code: 3020,
      message: (t) =>
        `Invalid arguments passed to${t ? ` <${t}>` : ""} component.`,
      hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`.",
    },
    PageNumberParamNotFound: {
      title: "Page number param not found.",
      code: 3021,
      message: (t) =>
        `[paginate()] page number param \`${t}\` not found in your filepath.`,
      hint: "Rename your file to `[page].astro` or `[...page].astro`.",
    },
    UnknownViteError: { title: "Unknown Vite Error.", code: 4e3 },
    FailedToLoadModuleSSR: {
      title: "Could not import file.",
      code: 4001,
      message: (t) => `Could not import \`${t}\`.`,
      hint: "This is often caused by a typo in the import path. Please make sure the file exists.",
    },
    InvalidGlob: {
      title: "Invalid glob pattern.",
      code: 4002,
      message: (t) =>
        `Invalid glob pattern: \`${t}\`. Glob patterns must start with './', '../' or '/'.`,
      hint: "See https://docs.astro.build/en/guides/imports/#glob-patterns for more information on supported glob patterns.",
    },
    UnknownCSSError: { title: "Unknown CSS Error.", code: 5e3 },
    CSSSyntaxError: { title: "CSS Syntax Error.", code: 5001 },
    UnknownMarkdownError: { title: "Unknown Markdown Error.", code: 6e3 },
    MarkdownFrontmatterParseError: {
      title: "Failed to parse Markdown frontmatter.",
      code: 6001,
    },
    InvalidFrontmatterInjectionError: {
      title: "Invalid frontmatter injection.",
      code: 6003,
      message:
        'A remark or rehype plugin attempted to inject invalid frontmatter. Ensure "astro.frontmatter" is set to a valid JSON object that is not `null` or `undefined`.',
      hint: "See the frontmatter injection docs https://docs.astro.build/en/guides/markdown-content/#modifying-frontmatter-programmatically for more information.",
    },
    MdxIntegrationMissingError: {
      title: "MDX integration missing.",
      code: 6004,
      message: (t) =>
        `Unable to render ${t}. Ensure that the \`@astrojs/mdx\` integration is installed.`,
      hint: "See the MDX integration docs for installation and usage instructions: https://docs.astro.build/en/guides/integrations-guide/mdx/",
    },
    UnknownConfigError: { title: "Unknown configuration error.", code: 7e3 },
    ConfigNotFound: {
      title: "Specified configuration file not found.",
      code: 7001,
      message: (t) =>
        `Unable to resolve \`--config "${t}"\`. Does the file exist?`,
    },
    ConfigLegacyKey: {
      title: "Legacy configuration detected.",
      code: 7002,
      message: (t) => `Legacy configuration detected: \`${t}\`.`,
      hint: `Please update your configuration to the new format.
See https://astro.build/config for more information.`,
    },
    UnknownCLIError: { title: "Unknown CLI Error.", code: 8e3 },
    GenerateContentTypesError: {
      title: "Failed to generate content types.",
      code: 8001,
      message:
        "`astro sync` command failed to generate content collection types.",
      hint: "Check your `src/content/config.*` file for typos.",
    },
    UnknownContentCollectionError: {
      title: "Unknown Content Collection Error.",
      code: 9e3,
    },
    InvalidContentEntryFrontmatterError: {
      title: "Content entry frontmatter does not match schema.",
      code: 9001,
      message: (t, e, n) =>
        [
          `${String(t)} \u2192 ${String(
            e
          )} frontmatter does not match collection schema.`,
          ...n.errors.map((r) => r.message),
        ].join(`
`),
      hint: "See https://docs.astro.build/en/guides/content-collections/ for more information on content schemas.",
    },
    InvalidContentEntrySlugError: {
      title: "Invalid content entry slug.",
      code: 9002,
      message: (t, e) =>
        `${String(t)} \u2192 ${String(
          e
        )} has an invalid slug. \`slug\` must be a string.`,
      hint: "See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field.",
    },
    ContentSchemaContainsSlugError: {
      title: "Content Schema should not contain `slug`.",
      code: 9003,
      message: (t) =>
        `A content collection schema should not contain \`slug\` since it is reserved for slug generation. Remove this from your ${t} collection schema.`,
      hint: "See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field.",
    },
    UnknownError: { title: "Unknown Error.", code: 99999 },
  });
function s1(t) {
  return t.replace(
    /\r\n|\r(?!\n)|\n/g,
    `
`
  );
}
function o1(t) {
  let e = Object.entries(pe).find((n) => n[1].code === t);
  if (e) return { name: e[0], data: e[1] };
}
function u1(t, e) {
  if (!e || e.line === void 0 || e.column === void 0) return "";
  let n = s1(t)
      .split(
        `
`
      )
      .map((d) => d.replace(/\t/g, "  ")),
    r = [];
  for (let d = -2; d <= 2; d++) n[e.line + d] && r.push(e.line + d);
  let o = 0;
  for (let d of r) {
    let m = `> ${d}`;
    m.length > o && (o = m.length);
  }
  let l = "";
  for (let d of r) {
    let m = d === e.line - 1;
    (l += m ? "> " : "  "),
      (l += `${d + 1} | ${n[d]}
`),
      m &&
        (l += `${Array.from({ length: o }).join(" ")}  | ${Array.from({
          length: e.column,
        }).join(" ")}^
`);
  }
  return l;
}
var Me = class extends Error {
  constructor(e, ...n) {
    var r;
    super(...n), (this.type = "AstroError");
    let {
      code: o,
      name: l,
      title: d,
      message: m,
      stack: v,
      location: w,
      hint: S,
      frame: A,
    } = e;
    (this.errorCode = o),
      l && l !== "Error"
        ? (this.name = l)
        : (this.name =
            ((r = o1(this.errorCode)) == null ? void 0 : r.name) ??
            "UnknownError"),
      (this.title = d),
      m && (this.message = m),
      (this.stack = v || this.stack),
      (this.loc = w),
      (this.hint = S),
      (this.frame = A);
  }
  setErrorCode(e) {
    this.errorCode = e;
  }
  setLocation(e) {
    this.loc = e;
  }
  setName(e) {
    this.name = e;
  }
  setMessage(e) {
    this.message = e;
  }
  setHint(e) {
    this.hint = e;
  }
  setFrame(e, n) {
    this.frame = u1(e, n);
  }
  static is(e) {
    return e.type === "AstroError";
  }
};
function l1(t) {
  return !(t.length !== 3 || !t[0] || typeof t[0] != "object");
}
function nl(t, e) {
  var n;
  let r =
      ((n = e?.split("/").pop()) == null ? void 0 : n.replace(".astro", "")) ??
      "",
    o = (...l) => {
      if (!l1(l))
        throw new Me({
          ...pe.InvalidComponentArgs,
          message: pe.InvalidComponentArgs.message(r),
        });
      return t(...l);
    };
  return (
    Object.defineProperty(o, "name", { value: r, writable: !1 }),
    (o.isAstroComponentFactory = !0),
    (o.moduleId = e),
    o
  );
}
function c1(t) {
  let e = nl(t.factory, t.moduleId);
  return (e.propagation = t.propagation), e;
}
function It(t, e) {
  return typeof t == "function" ? nl(t, e) : c1(t);
}
var al = "2.0.14";
function d1() {
  return (e, n) => {
    let r = [...Object.values(e)];
    if (r.length === 0)
      throw new Error(`Astro.glob(${JSON.stringify(n())}) - no matches found.`);
    return Promise.all(r.map((o) => o()));
  };
}
function jt(t) {
  return {
    site: t ? new URL(t) : void 0,
    generator: `Astro v${al}`,
    glob: d1(),
  };
}
function p1(t, e) {
  if (t[e]) return t[e];
  if (e === "delete" && t.del) return t.del;
  if (t.all) return t.all;
}
async function f1(t, e, n) {
  var r;
  let { request: o, params: l } = e,
    d = (r = o.method) == null ? void 0 : r.toLowerCase(),
    m = p1(t, d);
  if (
    (!n &&
      n === !1 &&
      d &&
      d !== "get" &&
      console.warn(`
${d} requests are not available when building a static site. Update your config to output: 'server' to handle ${d} requests.`),
    !m || typeof m != "function")
  )
    return new Response(null, {
      status: 404,
      headers: { "X-Astro-Response": "Not-Found" },
    });
  m.length > 1 &&
    console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);
  let v = new Proxy(e, {
    get(w, S) {
      return S in w
        ? Reflect.get(w, S)
        : S in l
        ? (console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`),
          Reflect.get(l, S))
        : void 0;
    },
  });
  return m.call(t, v, o);
}
function il(t) {
  let e = {};
  return n(t), Object.keys(e).join(" ");
  function n(r) {
    r && typeof r.forEach == "function"
      ? r.forEach(n)
      : r === Object(r)
      ? Object.keys(r).forEach((o) => {
          r[o] && n(o);
        })
      : ((r = r === !1 || r == null ? "" : String(r).trim()),
        r &&
          r.split(/\s+/).forEach((o) => {
            e[o] = !0;
          }));
  }
}
function V0(t) {
  return !!t && typeof t == "object" && typeof t.then == "function";
}
async function* T0(t) {
  let e = t.getReader();
  try {
    for (;;) {
      let { done: n, value: r } = await e.read();
      if (n) return;
      yield r;
    }
  } finally {
    e.releaseLock();
  }
}
var Wn = Ou,
  Ja = class extends Uint8Array {};
Object.defineProperty(Ja.prototype, Symbol.toStringTag, {
  get() {
    return "HTMLBytes";
  },
});
var Kr = class extends String {
    get [Symbol.toStringTag]() {
      return "HTMLString";
    }
  },
  De = (t) => (t instanceof Kr ? t : typeof t == "string" ? new Kr(t) : t);
function W0(t) {
  return Object.prototype.toString.call(t) === "[object HTMLString]";
}
function h1(t) {
  return new Ja(t);
}
function sl(t) {
  return typeof t.getReader == "function";
}
async function* zu(t) {
  if (sl(t)) for await (let e of T0(t)) yield Cn(e);
  else for await (let e of t) yield Cn(e);
}
function* m1(t) {
  for (let e of t) yield Cn(e);
}
function Cn(t) {
  if (!!t && typeof t == "object") {
    if (t instanceof Uint8Array) return h1(t);
    if (t instanceof Response && t.body) {
      let e = t.body;
      return zu(e);
    } else {
      if (typeof t.then == "function")
        return Promise.resolve(t).then((e) => Cn(e));
      if (Symbol.iterator in t) return m1(t);
      if (Symbol.asyncIterator in t || sl(t)) return zu(t);
    }
  }
  return De(t);
}
var ri = "astro:jsx",
  Ru = Symbol("empty"),
  Pu = (t) => t;
function Gn(t) {
  return t && typeof t == "object" && t[ri];
}
function g1(t) {
  if (typeof t.type == "string") return t;
  let e = {};
  if (Gn(t.props.children)) {
    let n = t.props.children;
    if (!Gn(n) || !("slot" in n.props)) return;
    let r = Pu(n.props.slot);
    (e[r] = [n]),
      (e[r].$$slot = !0),
      delete n.props.slot,
      delete t.props.children;
  }
  Array.isArray(t.props.children) &&
    (t.props.children = t.props.children
      .map((n) => {
        if (!Gn(n) || !("slot" in n.props)) return n;
        let r = Pu(n.props.slot);
        return (
          Array.isArray(e[r])
            ? e[r].push(n)
            : ((e[r] = [n]), (e[r].$$slot = !0)),
          delete n.props.slot,
          Ru
        );
      })
      .filter((n) => n !== Ru)),
    Object.assign(t.props, e);
}
function ol(t) {
  return typeof t == "string"
    ? De(t)
    : Array.isArray(t)
    ? t.map((e) => ol(e))
    : t;
}
function v1(t) {
  if ("set:html" in t.props || "set:text" in t.props) {
    if ("set:html" in t.props) {
      let e = ol(t.props["set:html"]);
      delete t.props["set:html"], Object.assign(t.props, { children: e });
      return;
    }
    if ("set:text" in t.props) {
      let e = t.props["set:text"];
      delete t.props["set:text"], Object.assign(t.props, { children: e });
      return;
    }
  }
}
function Er(t, e) {
  let n = { [Ka]: "astro:jsx", [ri]: !0, type: t, props: e ?? {} };
  return v1(n), g1(n), n;
}
var y1 =
    '(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));',
  D1 =
    '(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));',
  x1 =
    '(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));',
  b1 =
    '(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));',
  w1 =
    '(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));',
  C1 =
    'var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(`astro:${e}`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}';
function S1(t) {
  return t._metadata.hasHydrationScript
    ? !1
    : (t._metadata.hasHydrationScript = !0);
}
var Iu = { idle: y1, load: D1, only: b1, media: x1, visible: w1 };
function k1(t, e) {
  return t._metadata.hasDirectives.has(e)
    ? !1
    : (t._metadata.hasDirectives.add(e), !0);
}
function ju(t) {
  if (!(t in Iu)) throw new Error(`Unknown directive: ${t}`);
  return Iu[t];
}
function E1(t, e) {
  switch (t) {
    case "both":
      return `<style>astro-island,astro-slot{display:contents}</style><script>${
        ju(e) + C1
      }<\/script>`;
    case "directive":
      return `<script>${ju(e)}<\/script>`;
  }
  return "";
}
var G0 =
    /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i,
  A1 =
    /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i,
  F1 = /^(contenteditable|draggable|spellcheck|value)$/i,
  B1 = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i,
  T1 = new Set(["set:html", "set:text"]),
  N1 = (t) =>
    t
      .trim()
      .replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (e, n) =>
        /[^\w]|\s/.test(e) ? "" : n === 0 ? e : e.toUpperCase()
      ),
  Hn = (t, e = !0) =>
    e ? String(t).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : t,
  v0 = (t) =>
    t.toLowerCase() === t
      ? t
      : t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`),
  M1 = (t) =>
    Object.entries(t)
      .map(([e, n]) =>
        e[0] !== "-" && e[1] !== "-"
          ? `${v0(e)}:${n}`
          : v0(e) !== e
          ? `${v0(e)}:var(${e});${e}:${n}`
          : `${e}:${n}`
      )
      .join(";");
function O1(t) {
  let e = "";
  for (let [n, r] of Object.entries(t))
    e += `const ${N1(n)} = ${JSON.stringify(r)};
`;
  return De(e);
}
function Lu(t) {
  return t.length === 1
    ? t[0]
    : `${t.slice(0, -1).join(", ")} or ${t[t.length - 1]}`;
}
function Qn(t, e, n = !0) {
  if (t == null) return "";
  if (t === !1) return F1.test(e) || B1.test(e) ? De(` ${e}="false"`) : "";
  if (T1.has(e))
    return (
      console.warn(`[astro] The "${e}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${e}={value}\`) instead of the dynamic spread syntax (\`{...{ "${e}": value }}\`).`),
      ""
    );
  if (e === "class:list") {
    let r = Hn(il(t), n);
    return r === "" ? "" : De(` ${e.slice(0, -5)}="${r}"`);
  }
  return e === "style" && !(t instanceof Kr) && typeof t == "object"
    ? De(` ${e}="${Hn(M1(t), n)}"`)
    : e === "className"
    ? De(` class="${Hn(t, n)}"`)
    : t === !0 && (e.startsWith("data-") || A1.test(e))
    ? De(` ${e}`)
    : De(` ${e}="${Hn(t, n)}"`);
}
function N0(t, e = !0) {
  let n = "";
  for (let [r, o] of Object.entries(t)) n += Qn(o, r, e);
  return De(n);
}
function qa(t, { props: e, children: n = "" }, r = !0) {
  let { lang: o, "data-astro-id": l, "define:vars": d, ...m } = e;
  return (
    d &&
      (t === "style" && (delete m["is:global"], delete m["is:scoped"]),
      t === "script" &&
        (delete m.hoist,
        (n =
          O1(d) +
          `
` +
          n))),
    (n == null || n == "") && G0.test(t)
      ? `<${t}${N0(m, r)} />`
      : `<${t}${N0(m, r)}>${n}</${t}>`
  );
}
var y0 = (t, e, n) => {
  let r = JSON.stringify(t.props),
    o = t.children;
  return (
    e === n.findIndex((l) => JSON.stringify(l.props) === r && l.children == o)
  );
};
function $u(t) {
  t._metadata.hasRenderedHead = !0;
  let e = Array.from(t.styles)
    .filter(y0)
    .map((l) => qa("style", l));
  t.styles.clear();
  let n = Array.from(t.scripts)
      .filter(y0)
      .map((l, d) => qa("script", l, !1)),
    o =
      Array.from(t.links)
        .filter(y0)
        .map((l) => qa("link", l, !1)).join(`
`) +
      e.join(`
`) +
      n.join(`
`);
  if (t.extraHead.length > 0) for (let l of t.extraHead) o += l;
  return De(o);
}
function* ul(t) {
  yield { type: "head", result: t };
}
function* Ar(t) {
  t._metadata.hasRenderedHead ||
    (yield { type: "maybe-head", result: t, scope: t.scope });
}
var me = {
  Astro: 1 << 0,
  JSX: 1 << 1,
  Slot: 1 << 2,
  HeadBuffer: 1 << 3,
  RenderSlot: 1 << 4,
};
function _1(t, e) {
  t.scope |= e;
}
function D0(t, e) {
  return (t.scope & e) === e;
}
function kn(t, e) {
  let n = Object.create(t, { scope: { writable: !0, value: t.scope } });
  return e != null && _1(n, e), n;
}
var z1 = Symbol.for("astro.headAndContent");
function ni(t) {
  return typeof t == "object" && !!t[z1];
}
var qu,
  ll = Symbol.for("astro.renderTemplateResult"),
  M0 = class {
    constructor(e, n) {
      (this[qu] = !0),
        (this.htmlParts = e),
        (this.error = void 0),
        (this.expressions = n.map((r) =>
          V0(r)
            ? Promise.resolve(r).catch((o) => {
                if (!this.error) throw ((this.error = o), o);
              })
            : r
        ));
    }
    async *[((qu = ll), Symbol.asyncIterator)]() {
      let { htmlParts: e, expressions: n } = this;
      for (let r = 0; r < e.length; r++) {
        let o = e[r],
          l = n[r];
        yield De(o), yield* Sn(l);
      }
    }
  };
function cl(t) {
  return typeof t == "object" && !!t[ll];
}
async function* ai(t) {
  for await (let e of t)
    if (e || e === 0)
      for await (let n of Sn(e))
        switch (n.type) {
          case "directive": {
            yield n;
            break;
          }
          default: {
            yield De(n);
            break;
          }
        }
}
function pt(t, ...e) {
  return new M0(t, e);
}
function dl(t) {
  return t == null ? !1 : t.isAstroComponentFactory === !0;
}
async function R1(t, e, n, r) {
  let o = kn(t, me.Astro),
    l = await e(o, n, r);
  if (l instanceof Response) throw l;
  let d = new Xn(),
    m = ni(l) ? l.content : l;
  for await (let v of ai(m)) d.append(v, t);
  return d.toString();
}
function P1(t, e) {
  let n = e.propagation || "none";
  return (
    e.moduleId &&
      t.propagation.has(e.moduleId) &&
      n === "none" &&
      (n = t.propagation.get(e.moduleId)),
    n === "in-tree" || n === "self"
  );
}
var vt = {
  Value: 0,
  JSON: 1,
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7,
  Uint8Array: 8,
  Uint16Array: 9,
  Uint32Array: 10,
};
function x0(t, e = {}, n = new WeakSet()) {
  if (n.has(t))
    throw new Error(`Cyclic reference detected while serializing props for <${e.displayName} client:${e.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  n.add(t);
  let r = t.map((o) => fl(o, e, n));
  return n.delete(t), r;
}
function pl(t, e = {}, n = new WeakSet()) {
  if (n.has(t))
    throw new Error(`Cyclic reference detected while serializing props for <${e.displayName} client:${e.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  n.add(t);
  let r = Object.fromEntries(
    Object.entries(t).map(([o, l]) => [o, fl(l, e, n)])
  );
  return n.delete(t), r;
}
function fl(t, e = {}, n = new WeakSet()) {
  switch (Object.prototype.toString.call(t)) {
    case "[object Date]":
      return [vt.Date, t.toISOString()];
    case "[object RegExp]":
      return [vt.RegExp, t.source];
    case "[object Map]":
      return [vt.Map, JSON.stringify(x0(Array.from(t), e, n))];
    case "[object Set]":
      return [vt.Set, JSON.stringify(x0(Array.from(t), e, n))];
    case "[object BigInt]":
      return [vt.BigInt, t.toString()];
    case "[object URL]":
      return [vt.URL, t.toString()];
    case "[object Array]":
      return [vt.JSON, JSON.stringify(x0(t, e, n))];
    case "[object Uint8Array]":
      return [vt.Uint8Array, JSON.stringify(Array.from(t))];
    case "[object Uint16Array]":
      return [vt.Uint16Array, JSON.stringify(Array.from(t))];
    case "[object Uint32Array]":
      return [vt.Uint32Array, JSON.stringify(Array.from(t))];
    default:
      return t !== null && typeof t == "object"
        ? [vt.Value, pl(t, e, n)]
        : [vt.Value, t];
  }
}
function hl(t, e) {
  return JSON.stringify(pl(t, e));
}
var ml = ["load", "idle", "media", "visible", "only"],
  I1 = new Set(ml),
  gl = new Set(ml.map((t) => `client:${t}`));
function j1(t, e) {
  let n = { isPage: !1, hydration: null, props: {} };
  for (let [r, o] of Object.entries(e))
    if (
      (r.startsWith("server:") && r === "server:root" && (n.isPage = !0),
      r.startsWith("client:"))
    )
      switch (
        (n.hydration ||
          (n.hydration = {
            directive: "",
            value: "",
            componentUrl: "",
            componentExport: { value: "" },
          }),
        r)
      ) {
        case "client:component-path": {
          n.hydration.componentUrl = o;
          break;
        }
        case "client:component-export": {
          n.hydration.componentExport.value = o;
          break;
        }
        case "client:component-hydration":
          break;
        case "client:display-name":
          break;
        default: {
          if (
            ((n.hydration.directive = r.split(":")[1]),
            (n.hydration.value = o),
            !I1.has(n.hydration.directive))
          )
            throw new Error(
              `Error: invalid hydration directive "${r}". Supported hydration methods: ${Array.from(
                gl
              ).join(", ")}`
            );
          if (
            n.hydration.directive === "media" &&
            typeof n.hydration.value != "string"
          )
            throw new Me(pe.MissingMediaQueryDirective);
          break;
        }
      }
    else
      r === "class:list"
        ? o && (n.props[r.slice(0, -5)] = il(o))
        : (n.props[r] = o);
  for (let r of Object.getOwnPropertySymbols(e)) n.props[r] = e[r];
  return n;
}
async function L1(t, e) {
  let { renderer: n, result: r, astroId: o, props: l, attrs: d } = t,
    { hydrate: m, componentUrl: v, componentExport: w } = e;
  if (!w.value)
    throw new Error(
      `Unable to resolve a valid export for "${e.displayName}"! Please open an issue at https://astro.build/issues!`
    );
  let S = { children: "", props: { uid: o } };
  if (d) for (let [N, _] of Object.entries(d)) S.props[N] = Wn(_);
  (S.props["component-url"] = await r.resolve(decodeURI(v))),
    n.clientEntrypoint &&
      ((S.props["component-export"] = w.value),
      (S.props["renderer-url"] = await r.resolve(
        decodeURI(n.clientEntrypoint)
      )),
      (S.props.props = Wn(hl(l, e)))),
    (S.props.ssr = ""),
    (S.props.client = m);
  let A = await r.resolve("astro:scripts/before-hydration.js");
  return (
    A.length && (S.props["before-hydration-url"] = A),
    (S.props.opts = Wn(
      JSON.stringify({ name: e.displayName, value: e.hydrateArgs || "" })
    )),
    S
  );
}
var vl,
  yl = Symbol.for("astro.componentInstance"),
  O0 = class {
    constructor(e, n, r, o) {
      (this[vl] = !0),
        (this.result = e),
        (this.props = n),
        (this.factory = o),
        (this.slotValues = {});
      let l = kn(e, me.Slot);
      for (let d in r) {
        let m = r[d](l);
        this.slotValues[d] = () => m;
      }
    }
    async init(e) {
      return (
        (this.returnValue = this.factory(e, this.props, this.slotValues)),
        this.returnValue
      );
    }
    async *render() {
      this.returnValue === void 0 && (await this.init(this.result));
      let e = this.returnValue;
      V0(e) && (e = await e), ni(e) ? yield* e.content : yield* Sn(e);
    }
  };
vl = yl;
function $1(t, e) {
  if (t != null)
    for (let n of Object.keys(t))
      gl.has(n) &&
        console.warn(
          `You are attempting to render <${e} ${n} />, but ${e} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
}
function q1(t, e, n, r, o = {}) {
  $1(r, e);
  let l = new O0(t, r, o, n);
  return P1(t, n) && !t.propagators.has(n) && t.propagators.set(n, l), l;
}
function Z0(t) {
  return typeof t == "object" && !!t[yl];
}
async function* Sn(t) {
  if (((t = await t), t instanceof Xa))
    t.instructions && (yield* t.instructions), yield t;
  else if (W0(t)) yield t;
  else if (Array.isArray(t)) for (let e of t) yield De(await Sn(e));
  else
    typeof t == "function"
      ? yield* Sn(t())
      : typeof t == "string"
      ? yield De(Wn(t))
      : (!t && t !== 0) ||
        (cl(t)
          ? yield* ai(t)
          : Z0(t)
          ? yield* t.render()
          : ArrayBuffer.isView(t)
          ? yield t
          : typeof t == "object" &&
            (Symbol.asyncIterator in t || Symbol.iterator in t)
          ? yield* t
          : yield t);
}
var Dl = Symbol.for("astro:slot-string"),
  Xa = class extends Kr {
    constructor(e, n) {
      super(e), (this.instructions = n), (this[Dl] = !0);
    }
  };
function H1(t) {
  return !!t[Dl];
}
async function er(t, e, n) {
  if (e) {
    let r = kn(t, me.Slot),
      o = Sn(typeof e == "function" ? e(r) : e),
      l = "",
      d = null;
    for await (let m of o)
      typeof m.type == "string"
        ? (d === null && (d = []), d.push(m))
        : (l += m);
    return De(new Xa(l, d));
  }
  return n ? er(t, n) : "";
}
async function xl(t, e = {}) {
  let n = null,
    r = {};
  return (
    e &&
      (await Promise.all(
        Object.entries(e).map(([o, l]) =>
          er(t, l).then((d) => {
            d.instructions &&
              (n === null && (n = []), n.push(...d.instructions)),
              (r[o] = d);
          })
        )
      )),
    { slotInstructions: n, children: r }
  );
}
var ii = Symbol.for("astro:fragment"),
  Ka = Symbol.for("astro:renderer"),
  J0 = new TextEncoder(),
  U1 = new TextDecoder();
function ea(t, e) {
  if (typeof e.type == "string") {
    let n = e;
    switch (n.type) {
      case "directive": {
        let { hydration: r } = n,
          o = r && S1(t),
          l = r && k1(t, r.directive),
          d = o ? "both" : l ? "directive" : null;
        if (d) {
          let m = E1(d, r.directive);
          return De(m);
        } else return "";
      }
      case "head":
        return t._metadata.hasRenderedHead ? "" : $u(t);
      case "maybe-head": {
        if (t._metadata.hasRenderedHead) return "";
        switch (n.scope) {
          case me.JSX | me.Slot | me.Astro:
          case me.JSX | me.Astro | me.HeadBuffer:
          case me.JSX | me.Slot | me.Astro | me.HeadBuffer:
            return "";
          case me.JSX | me.Astro: {
            if (D0(t, me.JSX)) return "";
            break;
          }
          case me.Slot:
          case me.Slot | me.HeadBuffer: {
            if (D0(t, me.RenderSlot)) return "";
            break;
          }
          case me.HeadBuffer: {
            if (D0(t, me.JSX | me.HeadBuffer)) return "";
            break;
          }
          case me.RenderSlot | me.Astro:
          case me.RenderSlot | me.Astro | me.JSX:
          case me.RenderSlot | me.Astro | me.JSX | me.HeadBuffer:
            return "";
        }
        return $u(t);
      }
    }
  } else {
    if (H1(e)) {
      let n = "",
        r = e;
      if (r.instructions) for (let o of r.instructions) n += ea(t, o);
      return (n += e.toString()), n;
    }
    return e.toString();
  }
}
var Xn = class {
  constructor() {
    this.parts = "";
  }
  append(e, n) {
    ArrayBuffer.isView(e)
      ? (this.parts += U1.decode(e))
      : (this.parts += ea(n, e));
  }
  toString() {
    return this.parts;
  }
  toArrayBuffer() {
    return J0.encode(this.parts);
  }
};
function V1(t, e) {
  if (e instanceof Uint8Array) return e;
  let n = ea(t, e);
  return J0.encode(n.toString());
}
var Hu = "astro-client-only",
  Sr = class {
    constructor(e) {
      (this.vnode = e), (this.count = 0);
    }
    increment() {
      this.count++;
    }
    haveNoTried() {
      return this.count === 0;
    }
    isCompleted() {
      return this.count > 2;
    }
  };
Sr.symbol = Symbol("astro:jsx:skip");
var _0,
  X0 = 0;
async function kr(t, e) {
  switch (!0) {
    case e instanceof Kr:
      return e.toString().trim() === "" ? "" : e;
    case typeof e == "string":
      return De(Wn(e));
    case typeof e == "function":
      return e;
    case !e && e !== 0:
      return "";
    case Array.isArray(e):
      return De((await Promise.all(e.map((r) => kr(t, r)))).join(""));
  }
  let n;
  return (
    e.props
      ? e.props[Sr.symbol]
        ? (n = e.props[Sr.symbol])
        : (n = new Sr(e))
      : (n = new Sr(e)),
    z0(t, e, n)
  );
}
async function z0(t, e, n) {
  if (Gn(e)) {
    switch (!0) {
      case !e.type:
        throw new Error(`Unable to render ${t._metadata.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      case e.type === Symbol.for("astro:fragment"):
        return kr(t, e.props.children);
      case e.type.isAstroComponentFactory: {
        let r = {},
          o = {};
        for (let [m, v] of Object.entries(e.props ?? {}))
          m === "children" || (v && typeof v == "object" && v.$$slot)
            ? (o[m === "children" ? "default" : m] = () => kr(t, v))
            : (r[m] = v);
        let l = kn(t, me.JSX);
        return De(await R1(l, e.type, r, o));
      }
      case !e.type && e.type !== 0:
        return "";
      case typeof e.type == "string" && e.type !== Hu:
        return De(await W1(t, e.type, e.props ?? {}));
    }
    if (e.type) {
      let r = function (S) {
        if (Array.isArray(S)) return S.map((A) => r(A));
        if (!Gn(S)) {
          d.default.push(S);
          return;
        }
        if ("slot" in S.props) {
          (d[S.props.slot] = [...(d[S.props.slot] ?? []), S]),
            delete S.props.slot;
          return;
        }
        d.default.push(S);
      };
      if (
        (typeof e.type == "function" &&
          e.type["astro:renderer"] &&
          n.increment(),
        typeof e.type == "function" && e.props["server:root"])
      ) {
        let S = await e.type(e.props ?? {});
        return await kr(t, S);
      }
      if (typeof e.type == "function")
        if (n.haveNoTried() || n.isCompleted()) {
          G1();
          try {
            let S = await e.type(e.props ?? {}),
              A;
            if (S && S[ri]) return (A = await z0(t, S, n)), A;
            if (!S) return (A = await z0(t, S, n)), A;
          } catch (S) {
            if (n.isCompleted()) throw S;
            n.increment();
          } finally {
            Z1();
          }
        } else n.increment();
      let { children: o = null, ...l } = e.props ?? {},
        d = { default: [] };
      r(o);
      for (let [S, A] of Object.entries(l))
        A.$$slot && ((d[S] = A), delete l[S]);
      let m = [],
        v = {};
      for (let [S, A] of Object.entries(d))
        m.push(
          kr(t, A).then((N) => {
            N.toString().trim().length !== 0 && (v[S] = () => N);
          })
        );
      await Promise.all(m), (l[Sr.symbol] = n);
      let w;
      if (
        (e.type === Hu && e.props["client:only"]
          ? (w = await Vu(t, e.props["client:display-name"] ?? "", null, l, v))
          : (w = await Vu(
              t,
              typeof e.type == "function" ? e.type.name : e.type,
              e.type,
              l,
              v
            )),
        typeof w != "string" && Symbol.asyncIterator in w)
      ) {
        let S = new Xn();
        for await (let A of w) S.append(A, t);
        return De(S.toString());
      } else return De(w);
    }
  }
  return De(`${e}`);
}
async function W1(t, e, { children: n, ...r }) {
  return De(
    `<${e}${fh(r)}${De(
      (n == null || n == "") && G0.test(e)
        ? "/>"
        : `>${n == null ? "" : await kr(t, n)}</${e}>`
    )}`
  );
}
function G1() {
  if ((X0++, !_0)) {
    _0 = console.error;
    try {
      console.error = J1;
    } catch {}
  }
}
function Z1() {
  X0--;
}
function J1(t, ...e) {
  (X0 > 0 &&
    typeof t == "string" &&
    t.includes("Warning: Invalid hook call.") &&
    t.includes("https://reactjs.org/link/invalid-hook-call")) ||
    _0(t, ...e);
}
var R0 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY",
  b0 = R0.length;
function X1(t) {
  let e = 0;
  if (t.length === 0) return e;
  for (let n = 0; n < t.length; n++) {
    let r = t.charCodeAt(n);
    (e = (e << 5) - e + r), (e = e & e);
  }
  return e;
}
function K1(t) {
  let e,
    n = "",
    r = X1(t),
    o = r < 0 ? "Z" : "";
  for (r = Math.abs(r); r >= b0; )
    (e = r % b0), (r = Math.floor(r / b0)), (n = R0[e] + n);
  return r > 0 && (n = R0[r] + n), o + n;
}
function Y1(t) {
  return typeof HTMLElement < "u" && HTMLElement.isPrototypeOf(t);
}
async function Q1(t, e, n, r) {
  let o = eh(e),
    l = "";
  for (let d in n) l += ` ${d}="${Hn(await n[d])}"`;
  return De(`<${o}${l}>${await er(t, r?.default)}</${o}>`);
}
function eh(t) {
  let e = customElements.getName(t);
  return (
    e ||
    t.name
      .replace(/^HTML|Element$/g, "")
      .replace(/[A-Z]/g, "-$&")
      .toLowerCase()
      .replace(/^-/, "html-")
  );
}
var Uu = new Map([["solid", "solid-js"]]);
function th(t) {
  switch (t?.split(".").pop()) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue (jsx)",
      ];
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue",
        "@astrojs/svelte",
        "@astrojs/lit",
      ];
  }
}
function rh(t) {
  return t === ii;
}
function nh(t) {
  return t && typeof t == "object" && t["astro:html"];
}
async function ah(t, e, n, r, o = {}) {
  var l, d;
  if (!n && !r["client:only"])
    throw new Error(`Unable to render ${e} because it is ${n}!
Did you forget to import the component or is it possible there is a typo?`);
  let { renderers: m } = t._metadata,
    v = { displayName: e },
    { hydration: w, isPage: S, props: A } = j1(e, r),
    N = "",
    _;
  w &&
    ((v.hydrate = w.directive),
    (v.hydrateArgs = w.value),
    (v.componentExport = w.componentExport),
    (v.componentUrl = w.componentUrl));
  let H = th(v.componentUrl),
    O = m.filter((ie) => ie.name !== "astro:jsx"),
    { children: q, slotInstructions: R } = await xl(t, o),
    j;
  if (v.hydrate !== "only") {
    let ie = !1;
    try {
      ie = n && n[Ka];
    } catch {}
    if (ie) {
      let ue = n[Ka];
      j = m.find(({ name: ge }) => ge === ue);
    }
    if (!j) {
      let ue;
      for (let ge of m)
        try {
          if (await ge.ssr.check.call({ result: t }, n, A, q)) {
            j = ge;
            break;
          }
        } catch (ur) {
          ue ?? (ue = ur);
        }
      if (!j && ue) throw ue;
    }
    if (!j && typeof HTMLElement == "function" && Y1(n)) return Q1(t, n, r, o);
  } else {
    if (v.hydrateArgs) {
      let ie = v.hydrateArgs,
        ue = Uu.has(ie) ? Uu.get(ie) : ie;
      j = m.find(({ name: ge }) => ge === `@astrojs/${ue}` || ge === ue);
    }
    if ((!j && O.length === 1 && (j = O[0]), !j)) {
      let ie = (l = v.componentUrl) == null ? void 0 : l.split(".").pop();
      j = m.filter(({ name: ue }) => ue === `@astrojs/${ie}` || ue === ie)[0];
    }
  }
  if (j)
    v.hydrate === "only"
      ? (N = await er(t, o?.fallback))
      : ({ html: N, attrs: _ } = await j.ssr.renderToStaticMarkup.call(
          { result: t },
          n,
          A,
          q,
          v
        ));
  else {
    if (v.hydrate === "only")
      throw new Me({
        ...pe.NoClientOnlyHint,
        message: pe.NoClientOnlyHint.message(v.displayName),
        hint: pe.NoClientOnlyHint.hint(
          H.map((ie) => ie.replace("@astrojs/", "")).join("|")
        ),
      });
    if (typeof n != "string") {
      let ie = O.filter((ge) => H.includes(ge.name)),
        ue = O.length > 1;
      if (ie.length === 0)
        throw new Me({
          ...pe.NoMatchingRenderer,
          message: pe.NoMatchingRenderer.message(
            v.displayName,
            (d = v?.componentUrl) == null ? void 0 : d.split(".").pop(),
            ue,
            O.length
          ),
          hint: pe.NoMatchingRenderer.hint(Lu(H.map((ge) => "`" + ge + "`"))),
        });
      if (ie.length === 1)
        (j = ie[0]),
          ({ html: N, attrs: _ } = await j.ssr.renderToStaticMarkup.call(
            { result: t },
            n,
            A,
            q,
            v
          ));
      else
        throw new Error(`Unable to render ${v.displayName}!

This component likely uses ${Lu(H)},
but Astro encountered an error during server-side rendering.

Please ensure that ${v.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
    }
  }
  if (j && !j.clientEntrypoint && j.name !== "@astrojs/lit" && v.hydrate)
    throw new Me({
      ...pe.NoClientEntrypoint,
      message: pe.NoClientEntrypoint.message(e, v.hydrate, j.name),
    });
  if (!N && typeof n == "string") {
    let ie = ih(n),
      ue = Object.values(q).join(""),
      ge = ai(
        await pt`<${ie}${N0(A)}${De(
          ue === "" && G0.test(ie) ? "/>" : `>${ue}</${ie}>`
        )}`
      );
    N = "";
    for await (let ur of ge) N += ur;
  }
  if (!w)
    return (async function* () {
      R && (yield* R),
        S || j?.name === "astro:jsx"
          ? yield N
          : N && N.length > 0
          ? yield De(N.replace(/\<\/?astro-slot\>/g, ""))
          : yield "";
    })();
  let fe = K1(`<!--${v.componentExport.value}:${v.componentUrl}-->
${N}
${hl(A, v)}`),
    ae = await L1(
      { renderer: j, result: t, astroId: fe, props: A, attrs: _ },
      v
    ),
    we = [];
  if (N) {
    if (Object.keys(q).length > 0)
      for (let ie of Object.keys(q))
        N.includes(
          ie === "default" ? "<astro-slot>" : `<astro-slot name="${ie}">`
        ) || we.push(ie);
  } else we = Object.keys(q);
  let Ne =
    we.length > 0
      ? we
          .map(
            (ie) =>
              `<template data-astro-template${
                ie !== "default" ? `="${ie}"` : ""
              }>${q[ie]}</template>`
          )
          .join("")
      : "";
  (ae.children = `${N ?? ""}${Ne}`),
    ae.children && (ae.props["await-children"] = "");
  async function* Ee() {
    R && (yield* R),
      yield { type: "directive", hydration: w, result: t },
      yield De(qa("astro-island", ae, !1));
  }
  return Ee();
}
function ih(t) {
  let e = /[&<>'"\s]+/g;
  return e.test(t) ? t.trim().split(e)[0].trim() : t;
}
async function sh(t, e = {}) {
  let n = await er(t, e?.default);
  return n == null ? n : De(n);
}
async function oh(t, e, n, r = {}) {
  let { slotInstructions: o, children: l } = await xl(t, r),
    d = e.render({ slots: l }),
    m = o ? o.map((v) => ea(t, v)).join("") : "";
  return De(m + d);
}
function Je(t, e, n, r, o = {}) {
  return V0(n)
    ? Promise.resolve(n).then((l) => Je(t, e, l, r, o))
    : rh(n)
    ? sh(t, o)
    : nh(n)
    ? oh(t, n, r, o)
    : dl(n)
    ? q1(t, e, n, r, o)
    : ah(t, e, n, r, o);
}
function Vu(t, e, n, r, o = {}) {
  let l = Je(t, e, n, r, o);
  return Z0(l) ? l.render() : l;
}
var bl = (t, e, n) => {
    if (!e.has(t)) throw TypeError("Cannot " + n);
  },
  $n = (t, e, n) => (
    bl(t, e, "read from private field"), n ? n.call(t) : e.get(t)
  ),
  Wu = (t, e, n) => {
    if (e.has(t))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(t) : e.set(t, n);
  },
  Gu = (t, e, n, r) => (
    bl(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n
  ),
  P0 =
    typeof process == "object" &&
    Object.prototype.toString.call(process) === "[object process]",
  Ya;
function uh() {
  var t, e, n;
  return (
    (Ya =
      ((n = class extends Response {
        constructor(r, o) {
          let l = r instanceof ReadableStream;
          super(l ? null : r, o),
            Wu(this, t, void 0),
            Wu(this, e, void 0),
            Gu(this, t, l),
            Gu(this, e, r);
        }
        get body() {
          return $n(this, e);
        }
        async text() {
          if ($n(this, t) && P0) {
            let r = new TextDecoder(),
              o = $n(this, e),
              l = "";
            for await (let d of T0(o)) l += r.decode(d);
            return l;
          }
          return super.text();
        }
        async arrayBuffer() {
          if ($n(this, t) && P0) {
            let r = $n(this, e),
              o = [],
              l = 0;
            for await (let v of T0(r)) o.push(v), (l += v.length);
            let d = new Uint8Array(l),
              m = 0;
            for (let v of o) d.set(v, m), (m += v.length);
            return d;
          }
          return super.arrayBuffer();
        }
      }),
      (t = new WeakMap()),
      (e = new WeakMap()),
      n)),
    Ya
  );
}
var lh = P0
    ? (t, e) =>
        typeof t == "string" || ArrayBuffer.isView(t)
          ? new Response(t, e)
          : typeof Ya > "u"
          ? new (uh())(t, e)
          : new Ya(t, e)
    : (t, e) => new Response(t, e),
  Zu = Symbol.for("astro.needsHeadRendering");
function ch(t) {
  return Zu in t && !!t[Zu];
}
async function Ju(t, e, n) {
  let r = new Xn(),
    o = 0;
  for await (let l of e)
    W0(l) &&
      o === 0 &&
      (o++,
      /<!doctype html/i.test(String(l)) ||
        (r.append(
          `<!DOCTYPE html>
`,
          t
        ),
        n && (await n(r)))),
      r.append(l, t);
  return r.toArrayBuffer();
}
async function dh(t) {
  let e = t.propagators.values(),
    n = kn(t, me.HeadBuffer);
  for (;;) {
    let { value: r, done: o } = e.next();
    if (o) break;
    let l = await r.init(n);
    ni(l) && t.extraHead.push(l.head);
  }
}
async function ph(t, e, n, r, o, l) {
  if (!dl(e)) {
    let v = { ...(n ?? {}), "server:root": !0 },
      w;
    try {
      let A = await Je(t, e.name, e, v, null);
      Z0(A) ? (w = A.render()) : (w = A);
    } catch (A) {
      throw (Me.is(A) && !A.loc && A.setLocation({ file: l?.component }), A);
    }
    let S = await Ju(t, w, async (A) => {
      if (ch(e)) for await (let N of Ar(t)) A.append(N, t);
    });
    return new Response(S, {
      headers: new Headers([
        ["Content-Type", "text/html; charset=utf-8"],
        ["Content-Length", S.byteLength.toString()],
      ]),
    });
  }
  let d = await e(t, n, r),
    m = ni(d);
  if (cl(d) || m) {
    await dh(t);
    let v = m ? d.content : d,
      w = ai(v),
      S = t.response,
      A = new Headers(S.headers),
      N;
    return (
      o
        ? (N = new ReadableStream({
            start(H) {
              async function O() {
                let q = 0;
                try {
                  for await (let R of w) {
                    W0(R) &&
                      q === 0 &&
                      (/<!doctype html/i.test(String(R)) ||
                        H.enqueue(
                          J0.encode(`<!DOCTYPE html>
`)
                        ));
                    let j = V1(t, R);
                    H.enqueue(j), q++;
                  }
                  H.close();
                } catch (R) {
                  Me.is(R) && !R.loc && R.setLocation({ file: l?.component }),
                    H.error(R);
                }
              }
              O();
            },
          }))
        : ((N = await Ju(t, w)),
          A.set("Content-Length", N.byteLength.toString())),
      lh(N, { ...S, headers: A })
    );
  }
  if (!(d instanceof Response))
    throw new Me({
      ...pe.OnlyResponseCanBeReturned,
      message: pe.OnlyResponseCanBeReturned.message(l?.route, typeof d),
      location: { file: l?.component },
    });
  return d;
}
function K0(t, e) {
  !t ||
    (typeof t == "function" &&
      Object.defineProperty(t, Ka, { value: e, enumerable: !1, writable: !1 }));
}
function fh(t, e, { class: n } = {}) {
  let r = "";
  n &&
    (typeof t.class < "u"
      ? (t.class += ` ${n}`)
      : typeof t["class:list"] < "u"
      ? (t["class:list"] = [t["class:list"], n])
      : (t.class = n));
  for (let [o, l] of Object.entries(t)) r += Qn(l, o, !0);
  return De(r);
}
var hh = new Intl.DateTimeFormat([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }),
  Qa = { debug: 20, info: 30, warn: 40, error: 50, silent: 90 };
function wl(t, e, n, r) {
  let o = t.level,
    l = t.dest,
    d = { type: n, level: e, message: r };
  Qa[o] > Qa[e] || l.write(d);
}
function Kn(t, e, n) {
  return wl(t, "warn", e, n);
}
function mh(t, e, n) {
  return wl(t, "error", e, n);
}
function gh(...t) {
  "_astroGlobalDebug" in globalThis && globalThis._astroGlobalDebug(...t);
}
if (typeof process < "u") {
  let t = process;
  "argv" in t &&
    Array.isArray(t.argv) &&
    (t.argv.includes("--verbose") || t.argv.includes("--silent"));
}
var vh = ["string", "number", "undefined"];
function yh([t, e], n) {
  if (!vh.includes(typeof e))
    throw new Me({
      ...pe.GetStaticPathsInvalidRouteParam,
      message: pe.GetStaticPathsInvalidRouteParam.message(t, e, typeof e),
      location: { file: n },
    });
}
function Dh(t, { ssr: e, logging: n, route: r }) {
  if (
    (e &&
      t.getStaticPaths &&
      !t.prerender &&
      Kn(
        n,
        "getStaticPaths",
        'getStaticPaths() is ignored when "output: server" is set.'
      ),
    (!e || t.prerender) && !t.getStaticPaths)
  )
    throw new Me({
      ...pe.GetStaticPathsRequired,
      location: { file: r.component },
    });
}
function xh(t, e, n) {
  if (!Array.isArray(t))
    throw new Me({
      ...pe.InvalidGetStaticPathsReturn,
      message: pe.InvalidGetStaticPathsReturn.message(typeof t),
      location: { file: n.component },
    });
  t.forEach((r) => {
    if (
      r.params === void 0 ||
      r.params === null ||
      (r.params && Object.keys(r.params).length === 0)
    )
      throw new Me({
        ...pe.GetStaticPathsExpectedParams,
        location: { file: n.component },
      });
    if (typeof r.params != "object")
      throw new Me({
        ...pe.InvalidGetStaticPathParam,
        message: pe.InvalidGetStaticPathParam.message(typeof r.params),
        location: { file: n.component },
      });
    for (let [o, l] of Object.entries(r.params))
      typeof l > "u" ||
        typeof l == "string" ||
        typeof l == "number" ||
        Kn(
          e,
          "getStaticPaths",
          `invalid path param: ${o}. A string, number or undefined value was expected, but got \`${JSON.stringify(
            l
          )}\`.`
        ),
        typeof l == "string" &&
          l === "" &&
          Kn(
            e,
            "getStaticPaths",
            `invalid path param: ${o}. \`undefined\` expected for an optional param, but got empty string.`
          );
  });
}
function bh(t) {
  return (n) => {
    let r = {};
    return (
      t.forEach((o, l) => {
        o.startsWith("...")
          ? (r[o.slice(3)] = n[l + 1] ? decodeURIComponent(n[l + 1]) : void 0)
          : (r[o] = decodeURIComponent(n[l + 1]));
      }),
      r
    );
  };
}
function Cl(t, e) {
  let n = Object.entries(t).reduce((r, o) => {
    yh(o, e);
    let [l, d] = o;
    return (r[l] = d?.toString()), r;
  }, {});
  return JSON.stringify(n, Object.keys(t).sort());
}
var Sl = (t, e, n) => {
    if (!e.has(t)) throw TypeError("Cannot " + n);
  },
  Xr = (t, e, n) => (
    Sl(t, e, "read from private field"), n ? n.call(t) : e.get(t)
  ),
  w0 = (t, e, n) => {
    if (e.has(t))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(t) : e.set(t, n);
  },
  C0 = (t, e, n, r) => (
    Sl(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n
  ),
  Ha,
  wr,
  Ua,
  Xu = Symbol.for("astro.clientAddress");
function wh(t) {
  return function () {
    switch (t) {
      case "Astro.redirect":
        throw new Me(pe.StaticRedirectNotAvailable);
    }
  };
}
function Ch(t) {
  var e;
  if (!!t && ((e = t.expressions) == null ? void 0 : e.length) === 1)
    return t.expressions[0];
}
var I0 = class {
  constructor(e, n, r) {
    if (
      (w0(this, Ha, void 0),
      w0(this, wr, void 0),
      w0(this, Ua, void 0),
      C0(this, Ha, e),
      C0(this, wr, n),
      C0(this, Ua, r),
      n)
    )
      for (let o of Object.keys(n)) {
        if (this[o] !== void 0)
          throw new Me({
            ...pe.ReservedSlotName,
            message: pe.ReservedSlotName.message(o),
          });
        Object.defineProperty(this, o, {
          get() {
            return !0;
          },
          enumerable: !0,
        });
      }
  }
  has(e) {
    return Xr(this, wr) ? Boolean(Xr(this, wr)[e]) : !1;
  }
  async render(e, n = []) {
    if (!Xr(this, wr) || !this.has(e)) return;
    let r = kn(Xr(this, Ha), me.RenderSlot);
    if (!Array.isArray(n))
      Kn(
        Xr(this, Ua),
        "Astro.slots.render",
        `Expected second parameter to be an array, received a ${typeof n}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
      );
    else if (n.length > 0) {
      let d = Xr(this, wr)[e],
        m = typeof d == "function" ? await d(r) : await d,
        v = Ch(m);
      if (v)
        return await er(r, () => v(...n)).then((S) =>
          S != null ? String(S) : S
        );
      if (typeof m == "function")
        return await kr(r, m(...n)).then((w) => (w != null ? String(w) : w));
    }
    let o = await er(r, Xr(this, wr)[e]);
    return ea(r, o);
  }
};
Ha = new WeakMap();
wr = new WeakMap();
Ua = new WeakMap();
var S0 = null;
function Sh(t) {
  let {
      markdown: e,
      params: n,
      pathname: r,
      renderers: o,
      request: l,
      resolve: d,
    } = t,
    m = new URL(l.url),
    v = new Headers();
  v.set("Content-Type", "text/html");
  let w = { status: t.status, statusText: "OK", headers: v };
  Object.defineProperty(w, "headers", {
    value: w.headers,
    enumerable: !0,
    writable: !1,
  });
  let S,
    A = {
      styles: t.styles ?? new Set(),
      scripts: t.scripts ?? new Set(),
      links: t.links ?? new Set(),
      propagation: t.propagation ?? new Map(),
      propagators: new Map(),
      extraHead: [],
      scope: 0,
      cookies: S,
      createAstro(N, _, H) {
        let O = new I0(A, H, t.logging),
          q = {
            __proto__: N,
            get clientAddress() {
              if (!(Xu in l))
                throw t.adapterName
                  ? new Me({
                      ...pe.ClientAddressNotAvailable,
                      message: pe.ClientAddressNotAvailable.message(
                        t.adapterName
                      ),
                    })
                  : new Me(pe.StaticClientAddressNotAvailable);
              return Reflect.get(l, Xu);
            },
            get cookies() {
              return S || ((S = new Za(l)), (A.cookies = S), S);
            },
            params: n,
            props: _,
            request: l,
            url: m,
            redirect: t.ssr
              ? (R, j) =>
                  new Response(null, {
                    status: j || 302,
                    headers: { Location: R },
                  })
              : wh("Astro.redirect"),
            response: w,
            slots: O,
          };
        return (
          Object.defineProperty(q, "__renderMarkdown", {
            enumerable: !1,
            writable: !1,
            value: async function (R, j) {
              if (typeof Deno < "u")
                throw new Error("Markdown is not supported in Deno SSR");
              if (!S0) {
                let ae = "@astrojs/";
                (ae += "markdown-remark"),
                  (S0 = (await import(ae)).renderMarkdown);
              }
              let { code: fe } = await S0(R, { ...e, ...(j ?? {}) });
              return fe;
            },
          }),
          q
        );
      },
      resolve: d,
      _metadata: {
        renderers: o,
        pathname: r,
        hasHydrationScript: !1,
        hasRenderedHead: !1,
        hasDirectives: new Set(),
      },
      response: w,
    };
  return A;
}
function kh(t) {
  return function (n, r = {}) {
    let { pageSize: o, params: l, props: d } = r,
      m = o || 10,
      v = "page",
      w = l || {},
      S = d || {},
      A;
    if (t.params.includes(`...${v}`)) A = !1;
    else if (t.params.includes(`${v}`)) A = !0;
    else
      throw new Me({
        ...pe.PageNumberParamNotFound,
        message: pe.PageNumberParamNotFound.message(v),
      });
    let N = Math.max(1, Math.ceil(n.length / m));
    return [...Array(N).keys()].map((H) => {
      let O = H + 1,
        q = m === 1 / 0 ? 0 : (O - 1) * m,
        R = Math.min(q + m, n.length),
        j = { ...w, [v]: A || O > 1 ? String(O) : void 0 };
      return {
        params: j,
        props: {
          ...S,
          page: {
            data: n.slice(q, R),
            start: q,
            end: R - 1,
            size: m,
            total: n.length,
            currentPage: O,
            lastPage: N,
            url: {
              current: t.generate({ ...j }),
              next:
                O === N ? void 0 : t.generate({ ...j, page: String(O + 1) }),
              prev:
                O === 1
                  ? void 0
                  : t.generate({
                      ...j,
                      page: !A && O - 1 === 1 ? "" : String(O - 1),
                    }),
            },
          },
        },
      };
    });
  };
}
async function Eh({ isValidate: t, logging: e, mod: n, route: r, ssr: o }) {
  if ((Dh(n, { ssr: o, logging: e, route: r }), o && !n.prerender))
    return { staticPaths: Object.assign([], { keyed: new Map() }) };
  if (!n.getStaticPaths) throw new Error("Unexpected Error.");
  let l = [];
  (l = await n.getStaticPaths({
    paginate: kh(r),
    rss() {
      throw new Me(pe.GetStaticPathsRemovedRSSHelper);
    },
  })),
    Array.isArray(l) && (l = l.flat()),
    t && xh(l, e, r);
  let d = l;
  d.keyed = new Map();
  for (let m of d) {
    let v = Cl(m.params, r.component);
    d.keyed.set(v, m);
  }
  return { staticPaths: d };
}
var j0 = class {
  constructor(e, n = "production") {
    (this.cache = {}), (this.logging = e), (this.mode = n);
  }
  clearAll() {
    this.cache = {};
  }
  set(e, n) {
    this.mode === "production" &&
      this.cache[e.component] &&
      Kn(
        this.logging,
        "routeCache",
        `Internal Warning: route cache overwritten. (${e.component})`
      ),
      (this.cache[e.component] = n);
  }
  get(e) {
    return this.cache[e.component];
  }
};
function Ah(t, e, n) {
  let r = Cl(e, n.component),
    o = t.keyed.get(r);
  if (o) return o;
  gh("findPathItemByKey", `Unexpected cache miss looking for ${r}`);
}
var kl = ((t) => (
  (t[(t.NoMatchingStaticPath = 0)] = "NoMatchingStaticPath"), t
))(kl || {});
async function El(t) {
  let { logging: e, mod: n, route: r, routeCache: o, pathname: l, ssr: d } = t,
    m = {},
    v;
  if (r && !r.pathname) {
    if (r.params.length) {
      let A = r.pattern.exec(l);
      A && (m = bh(r.params)(A));
    }
    let w = o.get(r);
    w ||
      ((w = await Eh({ mod: n, route: r, isValidate: !0, logging: e, ssr: d })),
      o.set(r, w));
    let S = Ah(w.staticPaths, m, r);
    if (!S && (d ? n.prerender : !0)) return 0;
    v = S?.props ? { ...S.props } : {};
  } else v = {};
  return [m, v];
}
async function Fh(t, e, n) {
  var r, o;
  let l = await El({
    logging: n.logging,
    mod: t,
    route: e.route,
    routeCache: n.routeCache,
    pathname: e.pathname,
    ssr: n.ssr,
  });
  if (l === 0)
    throw new Me({
      ...pe.NoMatchingStaticPathFound,
      message: pe.NoMatchingStaticPathFound.message(e.pathname),
      hint:
        (r = e.route) != null && r.component
          ? pe.NoMatchingStaticPathFound.hint([
              (o = e.route) == null ? void 0 : o.component,
            ])
          : "",
    });
  let [d, m] = l,
    v = t.default;
  if (!v)
    throw new Error(
      `Expected an exported Astro component but received typeof ${typeof v}`
    );
  let w = Sh({
    adapterName: n.adapterName,
    links: e.links,
    styles: e.styles,
    logging: n.logging,
    markdown: n.markdown,
    mode: n.mode,
    origin: e.origin,
    params: d,
    props: m,
    pathname: e.pathname,
    propagation: e.propagation,
    resolve: n.resolve,
    renderers: n.renderers,
    request: e.request,
    site: n.site,
    scripts: e.scripts,
    ssr: n.ssr,
    status: e.status ?? 200,
  });
  typeof t.components == "object" &&
    Object.assign(m, { components: t.components });
  let S = await ph(w, v, m, null, n.streaming, e.route);
  return w.cookies && U0(S, w.cookies), S;
}
var Ku = Symbol.for("astro.clientAddress");
function Bh({ request: t, params: e, site: n, props: r, adapterName: o }) {
  return {
    cookies: new Za(t),
    request: t,
    params: e,
    site: n ? new URL(n) : void 0,
    generator: `Astro v${al}`,
    props: r,
    redirect(l, d) {
      return new Response(null, { status: d || 302, headers: { Location: l } });
    },
    url: new URL(t.url),
    get clientAddress() {
      if (!(Ku in t))
        throw o
          ? new Me({
              ...pe.ClientAddressNotAvailable,
              message: pe.ClientAddressNotAvailable.message(o),
            })
          : new Me(pe.StaticClientAddressNotAvailable);
      return Reflect.get(t, Ku);
    },
  };
}
async function Th(t, e, n) {
  var r, o;
  let l = await El({
    mod: t,
    route: n.route,
    routeCache: e.routeCache,
    pathname: n.pathname,
    logging: e.logging,
    ssr: e.ssr,
  });
  if (l === kl.NoMatchingStaticPath)
    throw new Me({
      ...pe.NoMatchingStaticPathFound,
      message: pe.NoMatchingStaticPathFound.message(n.pathname),
      hint:
        (r = n.route) != null && r.component
          ? pe.NoMatchingStaticPathFound.hint([
              (o = n.route) == null ? void 0 : o.component,
            ])
          : "",
    });
  let [d, m] = l,
    v = Bh({
      request: n.request,
      params: d,
      props: m,
      site: e.site,
      adapterName: e.adapterName,
    }),
    w = await f1(t, v, e.ssr);
  return w instanceof Response
    ? (U0(w, v.cookies), { type: "response", response: w })
    : {
        type: "simple",
        body: w.body,
        encoding: w.encoding,
        cookies: v.cookies,
      };
}
var Yu,
  k0 = 1,
  Nh = {
    write(t) {
      let e = console.error;
      Qa[t.level] < Qa.error && (e = console.log);
      function n() {
        let l = "",
          d = t.type;
        return (
          d &&
            ((l += Eu(hh.format(new Date()) + " ")),
            t.level === "info"
              ? (d = ja(Fu(`[${d}]`)))
              : t.level === "warn"
              ? (d = ja(Ln(`[${d}]`)))
              : t.level === "error" && (d = ja(Au(`[${d}]`))),
            (l += `${d} `)),
          ku(l)
        );
      }
      let r = t.message;
      r === Yu ? (k0++, (r = `${r} ${Ln(`(x${k0})`)}`)) : ((Yu = r), (k0 = 1));
      let o = n() + r;
      return e(o), !0;
    },
  };
function Al(t) {
  return t.endsWith("/") ? t : t + "/";
}
function Mh(t) {
  return t[0] === "/" ? t : "/" + t;
}
function Oh(t) {
  return t.endsWith("/") ? t.slice(0, t.length - 1) : t;
}
function _h(t) {
  return t.startsWith("/") ? t.substring(1) : t;
}
function zh(t) {
  return t.replace(/^\/|\/$/g, "");
}
function Rh(t) {
  return typeof t == "string" || t instanceof String;
}
function Ph(...t) {
  return t.filter(Rh).map(zh).join("/");
}
function Fl(t) {
  let e = t.request,
    n = new URL(e.url),
    r = t.origin ?? n.origin,
    o = t.pathname ?? n.pathname;
  return { ...t, origin: r, pathname: o, url: n };
}
function Ih(t) {
  return Al(new URL(t || "/", "http://localhost/").pathname);
}
function Bl(t, e) {
  let n = Ih(e),
    r = g0(t);
  return Al(n) + _h(r);
}
function jh(t, e) {
  return { props: { rel: "stylesheet", href: Bl(t, e) }, children: "" };
}
function Lh(t, e) {
  return new Set(t.map((n) => jh(n, e)));
}
function $h(t, e) {
  return t.type === "external"
    ? qh(t.value, e)
    : { props: { type: "module" }, children: t.value };
}
function qh(t, e) {
  return { props: { type: "module", src: Bl(t, e) }, children: "" };
}
function E0(t, e) {
  return e.routes.find((n) => n.pattern.test(decodeURI(t)));
}
function Hh(t, e) {
  for (let n of e)
    if (
      !!n.endsWith(".html") &&
      (t.pattern.test(n) || t.pattern.test(n.replace(/index\.html$/, "")))
    )
      return n;
}
function Uh(t, e) {
  let n = t
      .map(
        (l) =>
          "/" +
          l
            .map((d) =>
              d.spread
                ? `:${d.content.slice(3)}(.*)?`
                : d.dynamic
                ? `:${d.content}`
                : d.content
                    .normalize()
                    .replace(/\?/g, "%3F")
                    .replace(/#/g, "%23")
                    .replace(/%5B/g, "[")
                    .replace(/%5D/g, "]")
                    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            )
            .join("")
      )
      .join(""),
    r = "";
  return e === "always" && t.length && (r = "/"), fu(n + r);
}
function Qu(t) {
  return {
    route: t.route,
    type: t.type,
    pattern: new RegExp(t.pattern),
    params: t.params,
    component: t.component,
    generate: Uh(t.segments, t._meta.trailingSlash),
    pathname: t.pathname || void 0,
    segments: t.segments,
  };
}
function Tl(t) {
  let e = [];
  for (let o of t.routes) {
    e.push({ ...o, routeData: Qu(o.routeData) });
    let l = o;
    l.routeData = Qu(o.routeData);
  }
  let n = new Set(t.assets),
    r = new Map(t.propagation);
  return { ...t, assets: n, propagation: r, routes: e };
}
var Y0 = (t, e, n) => {
    if (!e.has(t)) throw TypeError("Cannot " + n);
  },
  He = (t, e, n) => (
    Y0(t, e, "read from private field"), n ? n.call(t) : e.get(t)
  ),
  Rt = (t, e, n) => {
    if (e.has(t))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(t) : e.set(t, n);
  },
  xn = (t, e, n, r) => (
    Y0(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n
  ),
  A0 = (t, e, n) => (Y0(t, e, "access private method"), n),
  Yn,
  Pt,
  bn,
  ei,
  Q0,
  Zn,
  Un,
  Va,
  Wa,
  L0,
  $0,
  Nl,
  ti = class {
    constructor(e, n = !0) {
      Rt(this, Wa),
        Rt(this, $0),
        Rt(this, Yn, void 0),
        Rt(this, Pt, void 0),
        Rt(this, bn, void 0),
        Rt(this, ei, void 0),
        Rt(this, Q0, new TextEncoder()),
        Rt(this, Zn, { dest: Nh, level: "info" }),
        Rt(this, Un, void 0),
        Rt(this, Va, void 0),
        xn(this, Pt, e),
        xn(this, bn, { routes: e.routes.map((r) => r.routeData) }),
        xn(this, ei, new Map(e.routes.map((r) => [r.routeData, r]))),
        xn(this, Yn, {
          adapterName: e.adapterName,
          logging: He(this, Zn),
          markdown: e.markdown,
          mode: "production",
          renderers: e.renderers,
          async resolve(r) {
            if (!(r in e.entryModules))
              throw new Error(`Unable to resolve [${r}]`);
            let o = e.entryModules[r];
            switch (!0) {
              case o.startsWith("data:"):
              case o.length === 0:
                return o;
              default:
                return Mh(Ph(e.base, o));
            }
          },
          routeCache: new j0(He(this, Zn)),
          site: He(this, Pt).site,
          ssr: !0,
          streaming: n,
        }),
        xn(this, Un, He(this, Pt).base || "/"),
        xn(this, Va, Oh(He(this, Un)));
    }
    removeBase(e) {
      return e.startsWith(He(this, Un)) ? e.slice(He(this, Va).length + 1) : e;
    }
    match(e, { matchNotFound: n = !1 } = {}) {
      let r = new URL(e.url);
      if (He(this, Pt).assets.has(r.pathname)) return;
      let o = "/" + this.removeBase(r.pathname),
        l = E0(o, He(this, bn));
      return l
        ? Hh(l, He(this, Pt).assets)
          ? void 0
          : l
        : n
        ? E0("/404", He(this, bn))
        : void 0;
    }
    async render(e, n) {
      let r = 200;
      if (
        !n &&
        ((n = this.match(e)),
        n || ((r = 404), (n = this.match(e, { matchNotFound: !0 }))),
        !n)
      )
        return new Response(null, { status: 404, statusText: "Not found" });
      n.route === "/404" && (r = 404);
      let o = He(this, Pt).pageMap.get(n.component);
      if (n.type === "page") {
        let l = await A0(this, Wa, L0).call(this, e, n, o, r);
        if (l.status === 500) {
          let d = E0("/500", He(this, bn));
          if (d) {
            o = He(this, Pt).pageMap.get(d.component);
            try {
              return await A0(this, Wa, L0).call(this, e, d, o, 500);
            } catch {}
          }
        }
        return l;
      } else {
        if (n.type === "endpoint")
          return A0(this, $0, Nl).call(this, e, n, o, r);
        throw new Error(`Unsupported route type [${n.type}].`);
      }
    }
    setCookieHeaders(e) {
      return a1(e);
    }
  };
Yn = new WeakMap();
Pt = new WeakMap();
bn = new WeakMap();
ei = new WeakMap();
Q0 = new WeakMap();
Zn = new WeakMap();
Un = new WeakMap();
Va = new WeakMap();
Wa = new WeakSet();
L0 = async function (t, e, n, r = 200) {
  let o = new URL(t.url),
    l = "/" + this.removeBase(o.pathname),
    d = He(this, ei).get(e),
    m = Lh(d.links),
    v = new Set();
  for (let w of d.scripts)
    "stage" in w
      ? w.stage === "head-inline" && v.add({ props: {}, children: w.children })
      : v.add($h(w));
  try {
    let w = Fl({
      request: t,
      origin: o.origin,
      pathname: l,
      propagation: He(this, Pt).propagation,
      scripts: v,
      links: m,
      route: e,
      status: r,
    });
    return await Fh(n, w, He(this, Yn));
  } catch (w) {
    return (
      mh(He(this, Zn), "ssr", w.stack || w.message || String(w)),
      new Response(null, { status: 500, statusText: "Internal server error" })
    );
  }
};
$0 = new WeakSet();
Nl = async function (t, e, n, r = 200) {
  let o = new URL(t.url),
    l = "/" + this.removeBase(o.pathname),
    d = n,
    m = Fl({ request: t, origin: o.origin, pathname: l, route: e, status: r }),
    v = await Th(d, He(this, Yn), m);
  if (v.type === "response") {
    if (v.response.headers.get("X-Astro-Response") === "Not-Found") {
      let w = new Request(new URL("/404", t.url)),
        S = this.match(w);
      if (S) return this.render(w, S);
    }
    return v.response;
  } else {
    let w = v.body,
      S = new Headers(),
      A = el.default.getType(o.pathname);
    A
      ? S.set("Content-Type", `${A};charset=utf-8`)
      : S.set("Content-Type", "text/plain;charset=utf-8");
    let N = He(this, Q0).encode(w);
    S.set("Content-Length", N.byteLength.toString());
    let _ = new Response(N, { status: 200, headers: S });
    return U0(_, v.cookies), _;
  }
};
var Ml = (t) => t.trim().replace(/[-_]([a-z])/g, (e, n) => n.toUpperCase());
async function Vh(t, e, { default: n = null, ...r } = {}) {
  if (typeof t != "function") return !1;
  let o = {};
  for (let [l, d] of Object.entries(r)) {
    let m = Ml(l);
    o[m] = d;
  }
  try {
    return (await t({ ...e, ...o, children: n }))[ri];
  } catch {}
  return !1;
}
async function Wh(t, e = {}, { default: n = null, ...r } = {}) {
  let o = {};
  for (let [m, v] of Object.entries(r)) {
    let w = Ml(m);
    o[w] = v;
  }
  let { result: l } = this;
  return { html: await kr(l, Er(t, { ...e, ...o, children: n })) };
}
var Ol = { check: Vh, renderToStaticMarkup: Wh };
function Xe(t) {
  return (
    (Xe =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Xe(t)
  );
}
function yt(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function es(t, e) {
  if (Xe(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (Xe(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function ta(t) {
  var e = es(t, "string");
  return Xe(e) === "symbol" ? e : String(e);
}
function _l(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, ta(r.key), r);
  }
}
function Dt(t, e, n) {
  return (
    e && _l(t.prototype, e),
    n && _l(t, n),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function Ft(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function ra(t, e) {
  return (
    (ra = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    ra(t, e)
  );
}
function En(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && ra(t, e);
}
function Yr(t, e) {
  if (e && (Xe(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Ft(t);
}
function xt(t) {
  return (
    (xt = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    xt(t)
  );
}
function Lt(t, e, n) {
  return (
    (e = ta(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function ts(t) {
  if (Array.isArray(t)) return t;
}
function rs(t) {
  if (
    (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
    t["@@iterator"] != null
  )
    return Array.from(t);
}
function si(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function ns(t, e) {
  if (!!t) {
    if (typeof t == "string") return si(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (n === "Object" && t.constructor && (n = t.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return si(t, e);
  }
}
function as() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function is(t) {
  return ts(t) || rs(t) || ns(t) || as();
}
function zl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Rl(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? zl(Object(n), !0).forEach(function (r) {
          Lt(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : zl(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
var Gh = {
    type: "logger",
    log: function (e) {
      this.output("log", e);
    },
    warn: function (e) {
      this.output("warn", e);
    },
    error: function (e) {
      this.output("error", e);
    },
    output: function (e, n) {
      console && console[e] && console[e].apply(console, n);
    },
  },
  Zh = (function () {
    function t(e) {
      var n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      yt(this, t), this.init(e, n);
    }
    return (
      Dt(t, [
        {
          key: "init",
          value: function (n) {
            var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            (this.prefix = r.prefix || "i18next:"),
              (this.logger = n || Gh),
              (this.options = r),
              (this.debug = r.debug);
          },
        },
        {
          key: "setDebug",
          value: function (n) {
            this.debug = n;
          },
        },
        {
          key: "log",
          value: function () {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return this.forward(r, "log", "", !0);
          },
        },
        {
          key: "warn",
          value: function () {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return this.forward(r, "warn", "", !0);
          },
        },
        {
          key: "error",
          value: function () {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return this.forward(r, "error", "");
          },
        },
        {
          key: "deprecate",
          value: function () {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return this.forward(r, "warn", "WARNING DEPRECATED: ", !0);
          },
        },
        {
          key: "forward",
          value: function (n, r, o, l) {
            return l && !this.debug
              ? null
              : (typeof n[0] == "string" &&
                  (n[0] = "".concat(o).concat(this.prefix, " ").concat(n[0])),
                this.logger[r](n));
          },
        },
        {
          key: "create",
          value: function (n) {
            return new t(
              this.logger,
              Rl(
                Rl({}, { prefix: "".concat(this.prefix, ":").concat(n, ":") }),
                this.options
              )
            );
          },
        },
        {
          key: "clone",
          value: function (n) {
            return (
              (n = n || this.options),
              (n.prefix = n.prefix || this.prefix),
              new t(this.logger, n)
            );
          },
        },
      ]),
      t
    );
  })(),
  qt = new Zh(),
  Fr = (function () {
    function t() {
      yt(this, t), (this.observers = {});
    }
    return (
      Dt(t, [
        {
          key: "on",
          value: function (n, r) {
            var o = this;
            return (
              n.split(" ").forEach(function (l) {
                (o.observers[l] = o.observers[l] || []), o.observers[l].push(r);
              }),
              this
            );
          },
        },
        {
          key: "off",
          value: function (n, r) {
            if (!!this.observers[n]) {
              if (!r) {
                delete this.observers[n];
                return;
              }
              this.observers[n] = this.observers[n].filter(function (o) {
                return o !== r;
              });
            }
          },
        },
        {
          key: "emit",
          value: function (n) {
            for (
              var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), l = 1;
              l < r;
              l++
            )
              o[l - 1] = arguments[l];
            if (this.observers[n]) {
              var d = [].concat(this.observers[n]);
              d.forEach(function (v) {
                v.apply(void 0, o);
              });
            }
            if (this.observers["*"]) {
              var m = [].concat(this.observers["*"]);
              m.forEach(function (v) {
                v.apply(v, [n].concat(o));
              });
            }
          },
        },
      ]),
      t
    );
  })();
function na() {
  var t,
    e,
    n = new Promise(function (r, o) {
      (t = r), (e = o);
    });
  return (n.resolve = t), (n.reject = e), n;
}
function Pl(t) {
  return t == null ? "" : "" + t;
}
function Jh(t, e, n) {
  t.forEach(function (r) {
    e[r] && (n[r] = e[r]);
  });
}
function os(t, e, n) {
  function r(m) {
    return m && m.indexOf("###") > -1 ? m.replace(/###/g, ".") : m;
  }
  function o() {
    return !t || typeof t == "string";
  }
  for (
    var l = typeof e != "string" ? [].concat(e) : e.split(".");
    l.length > 1;

  ) {
    if (o()) return {};
    var d = r(l.shift());
    !t[d] && n && (t[d] = new n()),
      Object.prototype.hasOwnProperty.call(t, d) ? (t = t[d]) : (t = {});
  }
  return o() ? {} : { obj: t, k: r(l.shift()) };
}
function Il(t, e, n) {
  var r = os(t, e, Object),
    o = r.obj,
    l = r.k;
  o[l] = n;
}
function Xh(t, e, n, r) {
  var o = os(t, e, Object),
    l = o.obj,
    d = o.k;
  (l[d] = l[d] || []), r && (l[d] = l[d].concat(n)), r || l[d].push(n);
}
function li(t, e) {
  var n = os(t, e),
    r = n.obj,
    o = n.k;
  if (!!r) return r[o];
}
function jl(t, e, n) {
  var r = li(t, n);
  return r !== void 0 ? r : li(e, n);
}
function Ql(t, e, n) {
  for (var r in e)
    r !== "__proto__" &&
      r !== "constructor" &&
      (r in t
        ? typeof t[r] == "string" ||
          t[r] instanceof String ||
          typeof e[r] == "string" ||
          e[r] instanceof String
          ? n && (t[r] = e[r])
          : Ql(t[r], e[r], n)
        : (t[r] = e[r]));
  return t;
}
function An(t) {
  return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Kh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
function Yh(t) {
  return typeof t == "string"
    ? t.replace(/[&<>"'\/]/g, function (e) {
        return Kh[e];
      })
    : t;
}
var di =
    typeof window < "u" &&
    window.navigator &&
    typeof window.navigator.userAgentData > "u" &&
    window.navigator.userAgent &&
    window.navigator.userAgent.indexOf("MSIE") > -1,
  Qh = [" ", ",", "?", "!", ";"];
function em(t, e, n) {
  (e = e || ""), (n = n || "");
  var r = Qh.filter(function (m) {
    return e.indexOf(m) < 0 && n.indexOf(m) < 0;
  });
  if (r.length === 0) return !0;
  var o = new RegExp(
      "(".concat(
        r
          .map(function (m) {
            return m === "?" ? "\\?" : m;
          })
          .join("|"),
        ")"
      )
    ),
    l = !o.test(t);
  if (!l) {
    var d = t.indexOf(n);
    d > 0 && !o.test(t.substring(0, d)) && (l = !0);
  }
  return l;
}
function Ll(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function oi(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Ll(Object(n), !0).forEach(function (r) {
          Lt(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : Ll(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function tm(t) {
  var e = rm();
  return function () {
    var r = xt(t),
      o;
    if (e) {
      var l = xt(this).constructor;
      o = Reflect.construct(r, arguments, l);
    } else o = r.apply(this, arguments);
    return Yr(this, o);
  };
}
function rm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ec(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!!t) {
    if (t[e]) return t[e];
    for (var r = e.split(n), o = t, l = 0; l < r.length; ++l) {
      if (!o || (typeof o[r[l]] == "string" && l + 1 < r.length)) return;
      if (o[r[l]] === void 0) {
        for (
          var d = 2, m = r.slice(l, l + d).join(n), v = o[m];
          v === void 0 && r.length > l + d;

        )
          d++, (m = r.slice(l, l + d).join(n)), (v = o[m]);
        if (v === void 0) return;
        if (v === null) return null;
        if (e.endsWith(m)) {
          if (typeof v == "string") return v;
          if (m && typeof v[m] == "string") return v[m];
        }
        var w = r.slice(l + d).join(n);
        return w ? ec(v, w, n) : void 0;
      }
      o = o[r[l]];
    }
    return o;
  }
}
var nm = (function (t) {
    En(n, t);
    var e = tm(n);
    function n(r) {
      var o,
        l =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : { ns: ["translation"], defaultNS: "translation" };
      return (
        yt(this, n),
        (o = e.call(this)),
        di && Fr.call(Ft(o)),
        (o.data = r || {}),
        (o.options = l),
        o.options.keySeparator === void 0 && (o.options.keySeparator = "."),
        o.options.ignoreJSONStructure === void 0 &&
          (o.options.ignoreJSONStructure = !0),
        o
      );
    }
    return (
      Dt(n, [
        {
          key: "addNamespaces",
          value: function (o) {
            this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
          },
        },
        {
          key: "removeNamespaces",
          value: function (o) {
            var l = this.options.ns.indexOf(o);
            l > -1 && this.options.ns.splice(l, 1);
          },
        },
        {
          key: "getResource",
          value: function (o, l, d) {
            var m =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : {},
              v =
                m.keySeparator !== void 0
                  ? m.keySeparator
                  : this.options.keySeparator,
              w =
                m.ignoreJSONStructure !== void 0
                  ? m.ignoreJSONStructure
                  : this.options.ignoreJSONStructure,
              S = [o, l];
            d && typeof d != "string" && (S = S.concat(d)),
              d && typeof d == "string" && (S = S.concat(v ? d.split(v) : d)),
              o.indexOf(".") > -1 && (S = o.split("."));
            var A = li(this.data, S);
            return A || !w || typeof d != "string"
              ? A
              : ec(this.data && this.data[o] && this.data[o][l], d, v);
          },
        },
        {
          key: "addResource",
          value: function (o, l, d, m) {
            var v =
                arguments.length > 4 && arguments[4] !== void 0
                  ? arguments[4]
                  : { silent: !1 },
              w = this.options.keySeparator;
            w === void 0 && (w = ".");
            var S = [o, l];
            d && (S = S.concat(w ? d.split(w) : d)),
              o.indexOf(".") > -1 && ((S = o.split(".")), (m = l), (l = S[1])),
              this.addNamespaces(l),
              Il(this.data, S, m),
              v.silent || this.emit("added", o, l, d, m);
          },
        },
        {
          key: "addResources",
          value: function (o, l, d) {
            var m =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : { silent: !1 };
            for (var v in d)
              (typeof d[v] == "string" ||
                Object.prototype.toString.apply(d[v]) === "[object Array]") &&
                this.addResource(o, l, v, d[v], { silent: !0 });
            m.silent || this.emit("added", o, l, d);
          },
        },
        {
          key: "addResourceBundle",
          value: function (o, l, d, m, v) {
            var w =
                arguments.length > 5 && arguments[5] !== void 0
                  ? arguments[5]
                  : { silent: !1 },
              S = [o, l];
            o.indexOf(".") > -1 &&
              ((S = o.split(".")), (m = d), (d = l), (l = S[1])),
              this.addNamespaces(l);
            var A = li(this.data, S) || {};
            m ? Ql(A, d, v) : (A = oi(oi({}, A), d)),
              Il(this.data, S, A),
              w.silent || this.emit("added", o, l, d);
          },
        },
        {
          key: "removeResourceBundle",
          value: function (o, l) {
            this.hasResourceBundle(o, l) && delete this.data[o][l],
              this.removeNamespaces(l),
              this.emit("removed", o, l);
          },
        },
        {
          key: "hasResourceBundle",
          value: function (o, l) {
            return this.getResource(o, l) !== void 0;
          },
        },
        {
          key: "getResourceBundle",
          value: function (o, l) {
            return (
              l || (l = this.options.defaultNS),
              this.options.compatibilityAPI === "v1"
                ? oi(oi({}, {}), this.getResource(o, l))
                : this.getResource(o, l)
            );
          },
        },
        {
          key: "getDataByLanguage",
          value: function (o) {
            return this.data[o];
          },
        },
        {
          key: "hasLanguageSomeTranslations",
          value: function (o) {
            var l = this.getDataByLanguage(o),
              d = (l && Object.keys(l)) || [];
            return !!d.find(function (m) {
              return l[m] && Object.keys(l[m]).length > 0;
            });
          },
        },
        {
          key: "toJSON",
          value: function () {
            return this.data;
          },
        },
      ]),
      n
    );
  })(Fr),
  tc = {
    processors: {},
    addPostProcessor: function (e) {
      this.processors[e.name] = e;
    },
    handle: function (e, n, r, o, l) {
      var d = this;
      return (
        e.forEach(function (m) {
          d.processors[m] && (n = d.processors[m].process(n, r, o, l));
        }),
        n
      );
    },
  };
function $l(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ye(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? $l(Object(n), !0).forEach(function (r) {
          Lt(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : $l(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function am(t) {
  var e = im();
  return function () {
    var r = xt(t),
      o;
    if (e) {
      var l = xt(this).constructor;
      o = Reflect.construct(r, arguments, l);
    } else o = r.apply(this, arguments);
    return Yr(this, o);
  };
}
function im() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
var ql = {},
  Hl = (function (t) {
    En(n, t);
    var e = am(n);
    function n(r) {
      var o,
        l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return (
        yt(this, n),
        (o = e.call(this)),
        di && Fr.call(Ft(o)),
        Jh(
          [
            "resourceStore",
            "languageUtils",
            "pluralResolver",
            "interpolator",
            "backendConnector",
            "i18nFormat",
            "utils",
          ],
          r,
          Ft(o)
        ),
        (o.options = l),
        o.options.keySeparator === void 0 && (o.options.keySeparator = "."),
        (o.logger = qt.create("translator")),
        o
      );
    }
    return (
      Dt(
        n,
        [
          {
            key: "changeLanguage",
            value: function (o) {
              o && (this.language = o);
            },
          },
          {
            key: "exists",
            value: function (o) {
              var l =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : { interpolation: {} };
              if (o == null) return !1;
              var d = this.resolve(o, l);
              return d && d.res !== void 0;
            },
          },
          {
            key: "extractFromKey",
            value: function (o, l) {
              var d =
                l.nsSeparator !== void 0
                  ? l.nsSeparator
                  : this.options.nsSeparator;
              d === void 0 && (d = ":");
              var m =
                  l.keySeparator !== void 0
                    ? l.keySeparator
                    : this.options.keySeparator,
                v = l.ns || this.options.defaultNS || [],
                w = d && o.indexOf(d) > -1,
                S =
                  !this.options.userDefinedKeySeparator &&
                  !l.keySeparator &&
                  !this.options.userDefinedNsSeparator &&
                  !l.nsSeparator &&
                  !em(o, d, m);
              if (w && !S) {
                var A = o.match(this.interpolator.nestingRegexp);
                if (A && A.length > 0) return { key: o, namespaces: v };
                var N = o.split(d);
                (d !== m || (d === m && this.options.ns.indexOf(N[0]) > -1)) &&
                  (v = N.shift()),
                  (o = N.join(m));
              }
              return (
                typeof v == "string" && (v = [v]), { key: o, namespaces: v }
              );
            },
          },
          {
            key: "translate",
            value: function (o, l, d) {
              var m = this;
              if (
                (Xe(l) !== "object" &&
                  this.options.overloadTranslationOptionHandler &&
                  (l =
                    this.options.overloadTranslationOptionHandler(arguments)),
                l || (l = {}),
                o == null)
              )
                return "";
              Array.isArray(o) || (o = [String(o)]);
              var v =
                  l.returnDetails !== void 0
                    ? l.returnDetails
                    : this.options.returnDetails,
                w =
                  l.keySeparator !== void 0
                    ? l.keySeparator
                    : this.options.keySeparator,
                S = this.extractFromKey(o[o.length - 1], l),
                A = S.key,
                N = S.namespaces,
                _ = N[N.length - 1],
                H = l.lng || this.language,
                O =
                  l.appendNamespaceToCIMode ||
                  this.options.appendNamespaceToCIMode;
              if (H && H.toLowerCase() === "cimode") {
                if (O) {
                  var q = l.nsSeparator || this.options.nsSeparator;
                  return v
                    ? {
                        res: "".concat(_).concat(q).concat(A),
                        usedKey: A,
                        exactUsedKey: A,
                        usedLng: H,
                        usedNS: _,
                      }
                    : "".concat(_).concat(q).concat(A);
                }
                return v
                  ? {
                      res: A,
                      usedKey: A,
                      exactUsedKey: A,
                      usedLng: H,
                      usedNS: _,
                    }
                  : A;
              }
              var R = this.resolve(o, l),
                j = R && R.res,
                fe = (R && R.usedKey) || A,
                ae = (R && R.exactUsedKey) || A,
                we = Object.prototype.toString.apply(j),
                Ne = [
                  "[object Number]",
                  "[object Function]",
                  "[object RegExp]",
                ],
                Ee =
                  l.joinArrays !== void 0
                    ? l.joinArrays
                    : this.options.joinArrays,
                ie = !this.i18nFormat || this.i18nFormat.handleAsObject,
                ue =
                  typeof j != "string" &&
                  typeof j != "boolean" &&
                  typeof j != "number";
              if (
                ie &&
                j &&
                ue &&
                Ne.indexOf(we) < 0 &&
                !(typeof Ee == "string" && we === "[object Array]")
              ) {
                if (!l.returnObjects && !this.options.returnObjects) {
                  this.options.returnedObjectHandler ||
                    this.logger.warn(
                      "accessing an object - but returnObjects options is not enabled!"
                    );
                  var ge = this.options.returnedObjectHandler
                    ? this.options.returnedObjectHandler(
                        fe,
                        j,
                        Ye(Ye({}, l), {}, { ns: N })
                      )
                    : "key '"
                        .concat(A, " (")
                        .concat(
                          this.language,
                          ")' returned an object instead of string."
                        );
                  return v ? ((R.res = ge), R) : ge;
                }
                if (w) {
                  var ur = we === "[object Array]",
                    un = ur ? [] : {},
                    yi = ur ? ae : fe;
                  for (var lr in j)
                    if (Object.prototype.hasOwnProperty.call(j, lr)) {
                      var fa = "".concat(yi).concat(w).concat(lr);
                      (un[lr] = this.translate(
                        fa,
                        Ye(Ye({}, l), { joinArrays: !1, ns: N })
                      )),
                        un[lr] === fa && (un[lr] = j[lr]);
                    }
                  j = un;
                }
              } else if (ie && typeof Ee == "string" && we === "[object Array]")
                (j = j.join(Ee)), j && (j = this.extendTranslation(j, o, l, d));
              else {
                var ln = !1,
                  ee = !1,
                  cn = l.count !== void 0 && typeof l.count != "string",
                  Nn = n.hasDefaultValue(l),
                  qr = cn ? this.pluralResolver.getSuffix(H, l.count, l) : "",
                  cr = l["defaultValue".concat(qr)] || l.defaultValue;
                !this.isValidLookup(j) && Nn && ((ln = !0), (j = cr)),
                  this.isValidLookup(j) || ((ee = !0), (j = A));
                var dr =
                    l.missingKeyNoValueFallbackToKey ||
                    this.options.missingKeyNoValueFallbackToKey,
                  Di = dr && ee ? void 0 : j,
                  Hr = Nn && cr !== j && this.options.updateMissing;
                if (ee || ln || Hr) {
                  if (
                    (this.logger.log(
                      Hr ? "updateKey" : "missingKey",
                      H,
                      _,
                      A,
                      Hr ? cr : j
                    ),
                    w)
                  ) {
                    var ha = this.resolve(
                      A,
                      Ye(Ye({}, l), {}, { keySeparator: !1 })
                    );
                    ha &&
                      ha.res &&
                      this.logger.warn(
                        "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                      );
                  }
                  var Ur = [],
                    dn = this.languageUtils.getFallbackCodes(
                      this.options.fallbackLng,
                      l.lng || this.language
                    );
                  if (this.options.saveMissingTo === "fallback" && dn && dn[0])
                    for (var Mn = 0; Mn < dn.length; Mn++) Ur.push(dn[Mn]);
                  else
                    this.options.saveMissingTo === "all"
                      ? (Ur = this.languageUtils.toResolveHierarchy(
                          l.lng || this.language
                        ))
                      : Ur.push(l.lng || this.language);
                  var ma = function (pr, pn, fr) {
                    var st = Nn && fr !== j ? fr : Di;
                    m.options.missingKeyHandler
                      ? m.options.missingKeyHandler(pr, _, pn, st, Hr, l)
                      : m.backendConnector &&
                        m.backendConnector.saveMissing &&
                        m.backendConnector.saveMissing(pr, _, pn, st, Hr, l),
                      m.emit("missingKey", pr, _, pn, j);
                  };
                  this.options.saveMissing &&
                    (this.options.saveMissingPlurals && cn
                      ? Ur.forEach(function (On) {
                          m.pluralResolver
                            .getSuffixes(On, l)
                            .forEach(function (pr) {
                              ma(
                                [On],
                                A + pr,
                                l["defaultValue".concat(pr)] || cr
                              );
                            });
                        })
                      : ma(Ur, A, cr));
                }
                (j = this.extendTranslation(j, o, l, R, d)),
                  ee &&
                    j === A &&
                    this.options.appendNamespaceToMissingKey &&
                    (j = "".concat(_, ":").concat(A)),
                  (ee || ln) &&
                    this.options.parseMissingKeyHandler &&
                    (this.options.compatibilityAPI !== "v1"
                      ? (j = this.options.parseMissingKeyHandler(
                          this.options.appendNamespaceToMissingKey
                            ? "".concat(_, ":").concat(A)
                            : A,
                          ln ? j : void 0
                        ))
                      : (j = this.options.parseMissingKeyHandler(j)));
              }
              return v ? ((R.res = j), R) : j;
            },
          },
          {
            key: "extendTranslation",
            value: function (o, l, d, m, v) {
              var w = this;
              if (this.i18nFormat && this.i18nFormat.parse)
                o = this.i18nFormat.parse(
                  o,
                  Ye(Ye({}, this.options.interpolation.defaultVariables), d),
                  m.usedLng,
                  m.usedNS,
                  m.usedKey,
                  { resolved: m }
                );
              else if (!d.skipInterpolation) {
                d.interpolation &&
                  this.interpolator.init(
                    Ye(Ye({}, d), {
                      interpolation: Ye(
                        Ye({}, this.options.interpolation),
                        d.interpolation
                      ),
                    })
                  );
                var S =
                    typeof o == "string" &&
                    (d &&
                    d.interpolation &&
                    d.interpolation.skipOnVariables !== void 0
                      ? d.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables),
                  A;
                if (S) {
                  var N = o.match(this.interpolator.nestingRegexp);
                  A = N && N.length;
                }
                var _ =
                  d.replace && typeof d.replace != "string" ? d.replace : d;
                if (
                  (this.options.interpolation.defaultVariables &&
                    (_ = Ye(
                      Ye({}, this.options.interpolation.defaultVariables),
                      _
                    )),
                  (o = this.interpolator.interpolate(
                    o,
                    _,
                    d.lng || this.language,
                    d
                  )),
                  S)
                ) {
                  var H = o.match(this.interpolator.nestingRegexp),
                    O = H && H.length;
                  A < O && (d.nest = !1);
                }
                d.nest !== !1 &&
                  (o = this.interpolator.nest(
                    o,
                    function () {
                      for (
                        var j = arguments.length, fe = new Array(j), ae = 0;
                        ae < j;
                        ae++
                      )
                        fe[ae] = arguments[ae];
                      return v && v[0] === fe[0] && !d.context
                        ? (w.logger.warn(
                            "It seems you are nesting recursively key: "
                              .concat(fe[0], " in key: ")
                              .concat(l[0])
                          ),
                          null)
                        : w.translate.apply(w, fe.concat([l]));
                    },
                    d
                  )),
                  d.interpolation && this.interpolator.reset();
              }
              var q = d.postProcess || this.options.postProcess,
                R = typeof q == "string" ? [q] : q;
              return (
                o != null &&
                  R &&
                  R.length &&
                  d.applyPostProcessor !== !1 &&
                  (o = tc.handle(
                    R,
                    o,
                    l,
                    this.options && this.options.postProcessPassResolved
                      ? Ye({ i18nResolved: m }, d)
                      : d,
                    this
                  )),
                o
              );
            },
          },
          {
            key: "resolve",
            value: function (o) {
              var l = this,
                d =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                m,
                v,
                w,
                S,
                A;
              return (
                typeof o == "string" && (o = [o]),
                o.forEach(function (N) {
                  if (!l.isValidLookup(m)) {
                    var _ = l.extractFromKey(N, d),
                      H = _.key;
                    v = H;
                    var O = _.namespaces;
                    l.options.fallbackNS &&
                      (O = O.concat(l.options.fallbackNS));
                    var q = d.count !== void 0 && typeof d.count != "string",
                      R =
                        q &&
                        !d.ordinal &&
                        d.count === 0 &&
                        l.pluralResolver.shouldUseIntlApi(),
                      j =
                        d.context !== void 0 &&
                        (typeof d.context == "string" ||
                          typeof d.context == "number") &&
                        d.context !== "",
                      fe = d.lngs
                        ? d.lngs
                        : l.languageUtils.toResolveHierarchy(
                            d.lng || l.language,
                            d.fallbackLng
                          );
                    O.forEach(function (ae) {
                      l.isValidLookup(m) ||
                        ((A = ae),
                        !ql["".concat(fe[0], "-").concat(ae)] &&
                          l.utils &&
                          l.utils.hasLoadedNamespace &&
                          !l.utils.hasLoadedNamespace(A) &&
                          ((ql["".concat(fe[0], "-").concat(ae)] = !0),
                          l.logger.warn(
                            'key "'
                              .concat(v, '" for languages "')
                              .concat(
                                fe.join(", "),
                                `" won't get resolved as namespace "`
                              )
                              .concat(A, '" was not yet loaded'),
                            "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                          )),
                        fe.forEach(function (we) {
                          if (!l.isValidLookup(m)) {
                            S = we;
                            var Ne = [H];
                            if (l.i18nFormat && l.i18nFormat.addLookupKeys)
                              l.i18nFormat.addLookupKeys(Ne, H, we, ae, d);
                            else {
                              var Ee;
                              q &&
                                (Ee = l.pluralResolver.getSuffix(
                                  we,
                                  d.count,
                                  d
                                ));
                              var ie = "".concat(
                                l.options.pluralSeparator,
                                "zero"
                              );
                              if (
                                (q && (Ne.push(H + Ee), R && Ne.push(H + ie)),
                                j)
                              ) {
                                var ue = ""
                                  .concat(H)
                                  .concat(l.options.contextSeparator)
                                  .concat(d.context);
                                Ne.push(ue),
                                  q &&
                                    (Ne.push(ue + Ee), R && Ne.push(ue + ie));
                              }
                            }
                            for (var ge; (ge = Ne.pop()); )
                              l.isValidLookup(m) ||
                                ((w = ge), (m = l.getResource(we, ae, ge, d)));
                          }
                        }));
                    });
                  }
                }),
                { res: m, usedKey: v, exactUsedKey: w, usedLng: S, usedNS: A }
              );
            },
          },
          {
            key: "isValidLookup",
            value: function (o) {
              return (
                o !== void 0 &&
                !(!this.options.returnNull && o === null) &&
                !(!this.options.returnEmptyString && o === "")
              );
            },
          },
          {
            key: "getResource",
            value: function (o, l, d) {
              var m =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : {};
              return this.i18nFormat && this.i18nFormat.getResource
                ? this.i18nFormat.getResource(o, l, d, m)
                : this.resourceStore.getResource(o, l, d, m);
            },
          },
        ],
        [
          {
            key: "hasDefaultValue",
            value: function (o) {
              var l = "defaultValue";
              for (var d in o)
                if (
                  Object.prototype.hasOwnProperty.call(o, d) &&
                  l === d.substring(0, l.length) &&
                  o[d] !== void 0
                )
                  return !0;
              return !1;
            },
          },
        ]
      ),
      n
    );
  })(Fr);
function ss(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var Ul = (function () {
    function t(e) {
      yt(this, t),
        (this.options = e),
        (this.supportedLngs = this.options.supportedLngs || !1),
        (this.logger = qt.create("languageUtils"));
    }
    return (
      Dt(t, [
        {
          key: "getScriptPartFromCode",
          value: function (n) {
            if (!n || n.indexOf("-") < 0) return null;
            var r = n.split("-");
            return r.length === 2 ||
              (r.pop(), r[r.length - 1].toLowerCase() === "x")
              ? null
              : this.formatLanguageCode(r.join("-"));
          },
        },
        {
          key: "getLanguagePartFromCode",
          value: function (n) {
            if (!n || n.indexOf("-") < 0) return n;
            var r = n.split("-");
            return this.formatLanguageCode(r[0]);
          },
        },
        {
          key: "formatLanguageCode",
          value: function (n) {
            if (typeof n == "string" && n.indexOf("-") > -1) {
              var r = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                o = n.split("-");
              return (
                this.options.lowerCaseLng
                  ? (o = o.map(function (l) {
                      return l.toLowerCase();
                    }))
                  : o.length === 2
                  ? ((o[0] = o[0].toLowerCase()),
                    (o[1] = o[1].toUpperCase()),
                    r.indexOf(o[1].toLowerCase()) > -1 &&
                      (o[1] = ss(o[1].toLowerCase())))
                  : o.length === 3 &&
                    ((o[0] = o[0].toLowerCase()),
                    o[1].length === 2 && (o[1] = o[1].toUpperCase()),
                    o[0] !== "sgn" &&
                      o[2].length === 2 &&
                      (o[2] = o[2].toUpperCase()),
                    r.indexOf(o[1].toLowerCase()) > -1 &&
                      (o[1] = ss(o[1].toLowerCase())),
                    r.indexOf(o[2].toLowerCase()) > -1 &&
                      (o[2] = ss(o[2].toLowerCase()))),
                o.join("-")
              );
            }
            return this.options.cleanCode || this.options.lowerCaseLng
              ? n.toLowerCase()
              : n;
          },
        },
        {
          key: "isSupportedCode",
          value: function (n) {
            return (
              (this.options.load === "languageOnly" ||
                this.options.nonExplicitSupportedLngs) &&
                (n = this.getLanguagePartFromCode(n)),
              !this.supportedLngs ||
                !this.supportedLngs.length ||
                this.supportedLngs.indexOf(n) > -1
            );
          },
        },
        {
          key: "getBestMatchFromCodes",
          value: function (n) {
            var r = this;
            if (!n) return null;
            var o;
            return (
              n.forEach(function (l) {
                if (!o) {
                  var d = r.formatLanguageCode(l);
                  (!r.options.supportedLngs || r.isSupportedCode(d)) && (o = d);
                }
              }),
              !o &&
                this.options.supportedLngs &&
                n.forEach(function (l) {
                  if (!o) {
                    var d = r.getLanguagePartFromCode(l);
                    if (r.isSupportedCode(d)) return (o = d);
                    o = r.options.supportedLngs.find(function (m) {
                      if (m.indexOf(d) === 0) return m;
                    });
                  }
                }),
              o || (o = this.getFallbackCodes(this.options.fallbackLng)[0]),
              o
            );
          },
        },
        {
          key: "getFallbackCodes",
          value: function (n, r) {
            if (!n) return [];
            if (
              (typeof n == "function" && (n = n(r)),
              typeof n == "string" && (n = [n]),
              Object.prototype.toString.apply(n) === "[object Array]")
            )
              return n;
            if (!r) return n.default || [];
            var o = n[r];
            return (
              o || (o = n[this.getScriptPartFromCode(r)]),
              o || (o = n[this.formatLanguageCode(r)]),
              o || (o = n[this.getLanguagePartFromCode(r)]),
              o || (o = n.default),
              o || []
            );
          },
        },
        {
          key: "toResolveHierarchy",
          value: function (n, r) {
            var o = this,
              l = this.getFallbackCodes(r || this.options.fallbackLng || [], n),
              d = [],
              m = function (w) {
                !w ||
                  (o.isSupportedCode(w)
                    ? d.push(w)
                    : o.logger.warn(
                        "rejecting language code not found in supportedLngs: ".concat(
                          w
                        )
                      ));
              };
            return (
              typeof n == "string" && n.indexOf("-") > -1
                ? (this.options.load !== "languageOnly" &&
                    m(this.formatLanguageCode(n)),
                  this.options.load !== "languageOnly" &&
                    this.options.load !== "currentOnly" &&
                    m(this.getScriptPartFromCode(n)),
                  this.options.load !== "currentOnly" &&
                    m(this.getLanguagePartFromCode(n)))
                : typeof n == "string" && m(this.formatLanguageCode(n)),
              l.forEach(function (v) {
                d.indexOf(v) < 0 && m(o.formatLanguageCode(v));
              }),
              d
            );
          },
        },
      ]),
      t
    );
  })(),
  sm = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  om = {
    1: function (e) {
      return Number(e > 1);
    },
    2: function (e) {
      return Number(e != 1);
    },
    3: function (e) {
      return 0;
    },
    4: function (e) {
      return Number(
        e % 10 == 1 && e % 100 != 11
          ? 0
          : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2
      );
    },
    5: function (e) {
      return Number(
        e == 0
          ? 0
          : e == 1
          ? 1
          : e == 2
          ? 2
          : e % 100 >= 3 && e % 100 <= 10
          ? 3
          : e % 100 >= 11
          ? 4
          : 5
      );
    },
    6: function (e) {
      return Number(e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2);
    },
    7: function (e) {
      return Number(
        e == 1
          ? 0
          : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2
      );
    },
    8: function (e) {
      return Number(e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3);
    },
    9: function (e) {
      return Number(e >= 2);
    },
    10: function (e) {
      return Number(e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
    },
    11: function (e) {
      return Number(
        e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3
      );
    },
    12: function (e) {
      return Number(e % 10 != 1 || e % 100 == 11);
    },
    13: function (e) {
      return Number(e !== 0);
    },
    14: function (e) {
      return Number(e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3);
    },
    15: function (e) {
      return Number(
        e % 10 == 1 && e % 100 != 11
          ? 0
          : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2
      );
    },
    16: function (e) {
      return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2);
    },
    17: function (e) {
      return Number(e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
    },
    18: function (e) {
      return Number(e == 0 ? 0 : e == 1 ? 1 : 2);
    },
    19: function (e) {
      return Number(
        e == 1
          ? 0
          : e == 0 || (e % 100 > 1 && e % 100 < 11)
          ? 1
          : e % 100 > 10 && e % 100 < 20
          ? 2
          : 3
      );
    },
    20: function (e) {
      return Number(
        e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
      );
    },
    21: function (e) {
      return Number(
        e % 100 == 1
          ? 1
          : e % 100 == 2
          ? 2
          : e % 100 == 3 || e % 100 == 4
          ? 3
          : 0
      );
    },
    22: function (e) {
      return Number(
        e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
      );
    },
  },
  um = ["v1", "v2", "v3"],
  Vl = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function lm() {
  var t = {};
  return (
    sm.forEach(function (e) {
      e.lngs.forEach(function (n) {
        t[n] = { numbers: e.nr, plurals: om[e.fc] };
      });
    }),
    t
  );
}
var cm = (function () {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    yt(this, t),
      (this.languageUtils = e),
      (this.options = n),
      (this.logger = qt.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        this.options.compatibilityJSON === "v4") &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
        )),
      (this.rules = lm());
  }
  return (
    Dt(t, [
      {
        key: "addRule",
        value: function (n, r) {
          this.rules[n] = r;
        },
      },
      {
        key: "getRule",
        value: function (n) {
          var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              return new Intl.PluralRules(n, {
                type: r.ordinal ? "ordinal" : "cardinal",
              });
            } catch {
              return;
            }
          return (
            this.rules[n] ||
            this.rules[this.languageUtils.getLanguagePartFromCode(n)]
          );
        },
      },
      {
        key: "needsPlural",
        value: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            o = this.getRule(n, r);
          return this.shouldUseIntlApi()
            ? o && o.resolvedOptions().pluralCategories.length > 1
            : o && o.numbers.length > 1;
        },
      },
      {
        key: "getPluralFormsOfKey",
        value: function (n, r) {
          var o =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return this.getSuffixes(n, o).map(function (l) {
            return "".concat(r).concat(l);
          });
        },
      },
      {
        key: "getSuffixes",
        value: function (n) {
          var r = this,
            o =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            l = this.getRule(n, o);
          return l
            ? this.shouldUseIntlApi()
              ? l
                  .resolvedOptions()
                  .pluralCategories.sort(function (d, m) {
                    return Vl[d] - Vl[m];
                  })
                  .map(function (d) {
                    return "".concat(r.options.prepend).concat(d);
                  })
              : l.numbers.map(function (d) {
                  return r.getSuffix(n, d, o);
                })
            : [];
        },
      },
      {
        key: "getSuffix",
        value: function (n, r) {
          var o =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            l = this.getRule(n, o);
          return l
            ? this.shouldUseIntlApi()
              ? "".concat(this.options.prepend).concat(l.select(r))
              : this.getSuffixRetroCompatible(l, r)
            : (this.logger.warn("no plural rule found for: ".concat(n)), "");
        },
      },
      {
        key: "getSuffixRetroCompatible",
        value: function (n, r) {
          var o = this,
            l = n.noAbs ? n.plurals(r) : n.plurals(Math.abs(r)),
            d = n.numbers[l];
          this.options.simplifyPluralSuffix &&
            n.numbers.length === 2 &&
            n.numbers[0] === 1 &&
            (d === 2 ? (d = "plural") : d === 1 && (d = ""));
          var m = function () {
            return o.options.prepend && d.toString()
              ? o.options.prepend + d.toString()
              : d.toString();
          };
          return this.options.compatibilityJSON === "v1"
            ? d === 1
              ? ""
              : typeof d == "number"
              ? "_plural_".concat(d.toString())
              : m()
            : this.options.compatibilityJSON === "v2" ||
              (this.options.simplifyPluralSuffix &&
                n.numbers.length === 2 &&
                n.numbers[0] === 1)
            ? m()
            : this.options.prepend && l.toString()
            ? this.options.prepend + l.toString()
            : l.toString();
        },
      },
      {
        key: "shouldUseIntlApi",
        value: function () {
          return !um.includes(this.options.compatibilityJSON);
        },
      },
    ]),
    t
  );
})();
function Wl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Bt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Wl(Object(n), !0).forEach(function (r) {
          Lt(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : Wl(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
var dm = (function () {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    yt(this, t),
      (this.logger = qt.create("interpolator")),
      (this.options = e),
      (this.format =
        (e.interpolation && e.interpolation.format) ||
        function (n) {
          return n;
        }),
      this.init(e);
  }
  return (
    Dt(t, [
      {
        key: "init",
        value: function () {
          var n =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          n.interpolation || (n.interpolation = { escapeValue: !0 });
          var r = n.interpolation;
          (this.escape = r.escape !== void 0 ? r.escape : Yh),
            (this.escapeValue = r.escapeValue !== void 0 ? r.escapeValue : !0),
            (this.useRawValueToEscape =
              r.useRawValueToEscape !== void 0 ? r.useRawValueToEscape : !1),
            (this.prefix = r.prefix ? An(r.prefix) : r.prefixEscaped || "{{"),
            (this.suffix = r.suffix ? An(r.suffix) : r.suffixEscaped || "}}"),
            (this.formatSeparator = r.formatSeparator
              ? r.formatSeparator
              : r.formatSeparator || ","),
            (this.unescapePrefix = r.unescapeSuffix
              ? ""
              : r.unescapePrefix || "-"),
            (this.unescapeSuffix = this.unescapePrefix
              ? ""
              : r.unescapeSuffix || ""),
            (this.nestingPrefix = r.nestingPrefix
              ? An(r.nestingPrefix)
              : r.nestingPrefixEscaped || An("$t(")),
            (this.nestingSuffix = r.nestingSuffix
              ? An(r.nestingSuffix)
              : r.nestingSuffixEscaped || An(")")),
            (this.nestingOptionsSeparator = r.nestingOptionsSeparator
              ? r.nestingOptionsSeparator
              : r.nestingOptionsSeparator || ","),
            (this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3),
            (this.alwaysFormat =
              r.alwaysFormat !== void 0 ? r.alwaysFormat : !1),
            this.resetRegExp();
        },
      },
      {
        key: "reset",
        value: function () {
          this.options && this.init(this.options);
        },
      },
      {
        key: "resetRegExp",
        value: function () {
          var n = "".concat(this.prefix, "(.+?)").concat(this.suffix);
          this.regexp = new RegExp(n, "g");
          var r = ""
            .concat(this.prefix)
            .concat(this.unescapePrefix, "(.+?)")
            .concat(this.unescapeSuffix)
            .concat(this.suffix);
          this.regexpUnescape = new RegExp(r, "g");
          var o = ""
            .concat(this.nestingPrefix, "(.+?)")
            .concat(this.nestingSuffix);
          this.nestingRegexp = new RegExp(o, "g");
        },
      },
      {
        key: "interpolate",
        value: function (n, r, o, l) {
          var d = this,
            m,
            v,
            w,
            S =
              (this.options &&
                this.options.interpolation &&
                this.options.interpolation.defaultVariables) ||
              {};
          function A(q) {
            return q.replace(/\$/g, "$$$$");
          }
          var N = function (R) {
            if (R.indexOf(d.formatSeparator) < 0) {
              var j = jl(r, S, R);
              return d.alwaysFormat
                ? d.format(
                    j,
                    void 0,
                    o,
                    Bt(Bt(Bt({}, l), r), {}, { interpolationkey: R })
                  )
                : j;
            }
            var fe = R.split(d.formatSeparator),
              ae = fe.shift().trim(),
              we = fe.join(d.formatSeparator).trim();
            return d.format(
              jl(r, S, ae),
              we,
              o,
              Bt(Bt(Bt({}, l), r), {}, { interpolationkey: ae })
            );
          };
          this.resetRegExp();
          var _ =
              (l && l.missingInterpolationHandler) ||
              this.options.missingInterpolationHandler,
            H =
              l && l.interpolation && l.interpolation.skipOnVariables !== void 0
                ? l.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables,
            O = [
              {
                regex: this.regexpUnescape,
                safeValue: function (R) {
                  return A(R);
                },
              },
              {
                regex: this.regexp,
                safeValue: function (R) {
                  return d.escapeValue ? A(d.escape(R)) : A(R);
                },
              },
            ];
          return (
            O.forEach(function (q) {
              for (w = 0; (m = q.regex.exec(n)); ) {
                var R = m[1].trim();
                if (((v = N(R)), v === void 0))
                  if (typeof _ == "function") {
                    var j = _(n, m, l);
                    v = typeof j == "string" ? j : "";
                  } else if (l && Object.prototype.hasOwnProperty.call(l, R))
                    v = "";
                  else if (H) {
                    v = m[0];
                    continue;
                  } else
                    d.logger.warn(
                      "missed to pass in variable "
                        .concat(R, " for interpolating ")
                        .concat(n)
                    ),
                      (v = "");
                else
                  typeof v != "string" && !d.useRawValueToEscape && (v = Pl(v));
                var fe = q.safeValue(v);
                if (
                  ((n = n.replace(m[0], fe)),
                  H
                    ? ((q.regex.lastIndex += v.length),
                      (q.regex.lastIndex -= m[0].length))
                    : (q.regex.lastIndex = 0),
                  w++,
                  w >= d.maxReplaces)
                )
                  break;
              }
            }),
            n
          );
        },
      },
      {
        key: "nest",
        value: function (n, r) {
          var o = this,
            l =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            d,
            m,
            v;
          function w(_, H) {
            var O = this.nestingOptionsSeparator;
            if (_.indexOf(O) < 0) return _;
            var q = _.split(new RegExp("".concat(O, "[ ]*{"))),
              R = "{".concat(q[1]);
            (_ = q[0]), (R = this.interpolate(R, v));
            var j = R.match(/'/g),
              fe = R.match(/"/g);
            ((j && j.length % 2 === 0 && !fe) || fe.length % 2 !== 0) &&
              (R = R.replace(/'/g, '"'));
            try {
              (v = JSON.parse(R)), H && (v = Bt(Bt({}, H), v));
            } catch (ae) {
              return (
                this.logger.warn(
                  "failed parsing options string in nesting for key ".concat(_),
                  ae
                ),
                "".concat(_).concat(O).concat(R)
              );
            }
            return delete v.defaultValue, _;
          }
          for (; (d = this.nestingRegexp.exec(n)); ) {
            var S = [];
            (v = Bt({}, l)),
              (v = v.replace && typeof v.replace != "string" ? v.replace : v),
              (v.applyPostProcessor = !1),
              delete v.defaultValue;
            var A = !1;
            if (
              d[0].indexOf(this.formatSeparator) !== -1 &&
              !/{.*}/.test(d[1])
            ) {
              var N = d[1].split(this.formatSeparator).map(function (_) {
                return _.trim();
              });
              (d[1] = N.shift()), (S = N), (A = !0);
            }
            if (
              ((m = r(w.call(this, d[1].trim(), v), v)),
              m && d[0] === n && typeof m != "string")
            )
              return m;
            typeof m != "string" && (m = Pl(m)),
              m ||
                (this.logger.warn(
                  "missed to resolve ".concat(d[1], " for nesting ").concat(n)
                ),
                (m = "")),
              A &&
                (m = S.reduce(function (_, H) {
                  return o.format(
                    _,
                    H,
                    l.lng,
                    Bt(Bt({}, l), {}, { interpolationkey: d[1].trim() })
                  );
                }, m.trim())),
              (n = n.replace(d[0], m)),
              (this.regexp.lastIndex = 0);
          }
          return n;
        },
      },
    ]),
    t
  );
})();
function Gl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function tr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Gl(Object(n), !0).forEach(function (r) {
          Lt(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : Gl(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function pm(t) {
  var e = t.toLowerCase().trim(),
    n = {};
  if (t.indexOf("(") > -1) {
    var r = t.split("(");
    e = r[0].toLowerCase().trim();
    var o = r[1].substring(0, r[1].length - 1);
    if (e === "currency" && o.indexOf(":") < 0)
      n.currency || (n.currency = o.trim());
    else if (e === "relativetime" && o.indexOf(":") < 0)
      n.range || (n.range = o.trim());
    else {
      var l = o.split(";");
      l.forEach(function (d) {
        if (!!d) {
          var m = d.split(":"),
            v = is(m),
            w = v[0],
            S = v.slice(1),
            A = S.join(":")
              .trim()
              .replace(/^'+|'+$/g, "");
          n[w.trim()] || (n[w.trim()] = A),
            A === "false" && (n[w.trim()] = !1),
            A === "true" && (n[w.trim()] = !0),
            isNaN(A) || (n[w.trim()] = parseInt(A, 10));
        }
      });
    }
  }
  return { formatName: e, formatOptions: n };
}
function Fn(t) {
  var e = {};
  return function (r, o, l) {
    var d = o + JSON.stringify(l),
      m = e[d];
    return m || ((m = t(o, l)), (e[d] = m)), m(r);
  };
}
var fm = (function () {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    yt(this, t),
      (this.logger = qt.create("formatter")),
      (this.options = e),
      (this.formats = {
        number: Fn(function (n, r) {
          var o = new Intl.NumberFormat(n, tr({}, r));
          return function (l) {
            return o.format(l);
          };
        }),
        currency: Fn(function (n, r) {
          var o = new Intl.NumberFormat(
            n,
            tr(tr({}, r), {}, { style: "currency" })
          );
          return function (l) {
            return o.format(l);
          };
        }),
        datetime: Fn(function (n, r) {
          var o = new Intl.DateTimeFormat(n, tr({}, r));
          return function (l) {
            return o.format(l);
          };
        }),
        relativetime: Fn(function (n, r) {
          var o = new Intl.RelativeTimeFormat(n, tr({}, r));
          return function (l) {
            return o.format(l, r.range || "day");
          };
        }),
        list: Fn(function (n, r) {
          var o = new Intl.ListFormat(n, tr({}, r));
          return function (l) {
            return o.format(l);
          };
        }),
      }),
      this.init(e);
  }
  return (
    Dt(t, [
      {
        key: "init",
        value: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : { interpolation: {} },
            o = r.interpolation;
          this.formatSeparator = o.formatSeparator
            ? o.formatSeparator
            : o.formatSeparator || ",";
        },
      },
      {
        key: "add",
        value: function (n, r) {
          this.formats[n.toLowerCase().trim()] = r;
        },
      },
      {
        key: "addCached",
        value: function (n, r) {
          this.formats[n.toLowerCase().trim()] = Fn(r);
        },
      },
      {
        key: "format",
        value: function (n, r, o) {
          var l = this,
            d =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : {},
            m = r.split(this.formatSeparator),
            v = m.reduce(function (w, S) {
              var A = pm(S),
                N = A.formatName,
                _ = A.formatOptions;
              if (l.formats[N]) {
                var H = w;
                try {
                  var O =
                      (d &&
                        d.formatParams &&
                        d.formatParams[d.interpolationkey]) ||
                      {},
                    q = O.locale || O.lng || d.locale || d.lng || o;
                  H = l.formats[N](w, q, tr(tr(tr({}, _), d), O));
                } catch (R) {
                  l.logger.warn(R);
                }
                return H;
              } else l.logger.warn("there was no format function for ".concat(N));
              return w;
            }, n);
          return v;
        },
      },
    ]),
    t
  );
})();
function Zl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Jl(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Zl(Object(n), !0).forEach(function (r) {
          Lt(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : Zl(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function hm(t) {
  var e = mm();
  return function () {
    var r = xt(t),
      o;
    if (e) {
      var l = xt(this).constructor;
      o = Reflect.construct(r, arguments, l);
    } else o = r.apply(this, arguments);
    return Yr(this, o);
  };
}
function mm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function gm(t, e) {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
}
var vm = (function (t) {
  En(n, t);
  var e = hm(n);
  function n(r, o, l) {
    var d,
      m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (
      yt(this, n),
      (d = e.call(this)),
      di && Fr.call(Ft(d)),
      (d.backend = r),
      (d.store = o),
      (d.services = l),
      (d.languageUtils = l.languageUtils),
      (d.options = m),
      (d.logger = qt.create("backendConnector")),
      (d.waitingReads = []),
      (d.maxParallelReads = m.maxParallelReads || 10),
      (d.readingCalls = 0),
      (d.maxRetries = m.maxRetries >= 0 ? m.maxRetries : 5),
      (d.retryTimeout = m.retryTimeout >= 1 ? m.retryTimeout : 350),
      (d.state = {}),
      (d.queue = []),
      d.backend && d.backend.init && d.backend.init(l, m.backend, m),
      d
    );
  }
  return (
    Dt(n, [
      {
        key: "queueLoad",
        value: function (o, l, d, m) {
          var v = this,
            w = {},
            S = {},
            A = {},
            N = {};
          return (
            o.forEach(function (_) {
              var H = !0;
              l.forEach(function (O) {
                var q = "".concat(_, "|").concat(O);
                !d.reload && v.store.hasResourceBundle(_, O)
                  ? (v.state[q] = 2)
                  : v.state[q] < 0 ||
                    (v.state[q] === 1
                      ? S[q] === void 0 && (S[q] = !0)
                      : ((v.state[q] = 1),
                        (H = !1),
                        S[q] === void 0 && (S[q] = !0),
                        w[q] === void 0 && (w[q] = !0),
                        N[O] === void 0 && (N[O] = !0)));
              }),
                H || (A[_] = !0);
            }),
            (Object.keys(w).length || Object.keys(S).length) &&
              this.queue.push({
                pending: S,
                pendingCount: Object.keys(S).length,
                loaded: {},
                errors: [],
                callback: m,
              }),
            {
              toLoad: Object.keys(w),
              pending: Object.keys(S),
              toLoadLanguages: Object.keys(A),
              toLoadNamespaces: Object.keys(N),
            }
          );
        },
      },
      {
        key: "loaded",
        value: function (o, l, d) {
          var m = o.split("|"),
            v = m[0],
            w = m[1];
          l && this.emit("failedLoading", v, w, l),
            d && this.store.addResourceBundle(v, w, d),
            (this.state[o] = l ? -1 : 2);
          var S = {};
          this.queue.forEach(function (A) {
            Xh(A.loaded, [v], w),
              gm(A, o),
              l && A.errors.push(l),
              A.pendingCount === 0 &&
                !A.done &&
                (Object.keys(A.loaded).forEach(function (N) {
                  S[N] || (S[N] = {});
                  var _ = A.loaded[N];
                  _.length &&
                    _.forEach(function (H) {
                      S[N][H] === void 0 && (S[N][H] = !0);
                    });
                }),
                (A.done = !0),
                A.errors.length ? A.callback(A.errors) : A.callback());
          }),
            this.emit("loaded", S),
            (this.queue = this.queue.filter(function (A) {
              return !A.done;
            }));
        },
      },
      {
        key: "read",
        value: function (o, l, d) {
          var m = this,
            v =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : 0,
            w =
              arguments.length > 4 && arguments[4] !== void 0
                ? arguments[4]
                : this.retryTimeout,
            S = arguments.length > 5 ? arguments[5] : void 0;
          if (!o.length) return S(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
              lng: o,
              ns: l,
              fcName: d,
              tried: v,
              wait: w,
              callback: S,
            });
            return;
          }
          this.readingCalls++;
          var A = function (O, q) {
              if ((m.readingCalls--, m.waitingReads.length > 0)) {
                var R = m.waitingReads.shift();
                m.read(R.lng, R.ns, R.fcName, R.tried, R.wait, R.callback);
              }
              if (O && q && v < m.maxRetries) {
                setTimeout(function () {
                  m.read.call(m, o, l, d, v + 1, w * 2, S);
                }, w);
                return;
              }
              S(O, q);
            },
            N = this.backend[d].bind(this.backend);
          if (N.length === 2) {
            try {
              var _ = N(o, l);
              _ && typeof _.then == "function"
                ? _.then(function (H) {
                    return A(null, H);
                  }).catch(A)
                : A(null, _);
            } catch (H) {
              A(H);
            }
            return;
          }
          return N(o, l, A);
        },
      },
      {
        key: "prepareLoading",
        value: function (o, l) {
          var d = this,
            m =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            v = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn(
                "No backend was added via i18next.use. Will not load resources."
              ),
              v && v()
            );
          typeof o == "string" &&
            (o = this.languageUtils.toResolveHierarchy(o)),
            typeof l == "string" && (l = [l]);
          var w = this.queueLoad(o, l, m, v);
          if (!w.toLoad.length) return w.pending.length || v(), null;
          w.toLoad.forEach(function (S) {
            d.loadOne(S);
          });
        },
      },
      {
        key: "load",
        value: function (o, l, d) {
          this.prepareLoading(o, l, {}, d);
        },
      },
      {
        key: "reload",
        value: function (o, l, d) {
          this.prepareLoading(o, l, { reload: !0 }, d);
        },
      },
      {
        key: "loadOne",
        value: function (o) {
          var l = this,
            d =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : "",
            m = o.split("|"),
            v = m[0],
            w = m[1];
          this.read(v, w, "read", void 0, void 0, function (S, A) {
            S &&
              l.logger.warn(
                ""
                  .concat(d, "loading namespace ")
                  .concat(w, " for language ")
                  .concat(v, " failed"),
                S
              ),
              !S &&
                A &&
                l.logger.log(
                  ""
                    .concat(d, "loaded namespace ")
                    .concat(w, " for language ")
                    .concat(v),
                  A
                ),
              l.loaded(o, S, A);
          });
        },
      },
      {
        key: "saveMissing",
        value: function (o, l, d, m, v) {
          var w =
              arguments.length > 5 && arguments[5] !== void 0
                ? arguments[5]
                : {},
            S =
              arguments.length > 6 && arguments[6] !== void 0
                ? arguments[6]
                : function () {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(l)
          ) {
            this.logger.warn(
              'did not save key "'
                .concat(d, '" as the namespace "')
                .concat(l, '" was not yet loaded'),
              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
            );
            return;
          }
          if (!(d == null || d === "")) {
            if (this.backend && this.backend.create) {
              var A = Jl(Jl({}, w), {}, { isUpdate: v }),
                N = this.backend.create.bind(this.backend);
              if (N.length < 6)
                try {
                  var _;
                  N.length === 5 ? (_ = N(o, l, d, m, A)) : (_ = N(o, l, d, m)),
                    _ && typeof _.then == "function"
                      ? _.then(function (H) {
                          return S(null, H);
                        }).catch(S)
                      : S(null, _);
                } catch (H) {
                  S(H);
                }
              else N(o, l, d, m, S, A);
            }
            !o || !o[0] || this.store.addResource(o[0], l, d, m);
          }
        },
      },
    ]),
    n
  );
})(Fr);
function Xl() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !0,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (e) {
      var n = {};
      if (
        (Xe(e[1]) === "object" && (n = e[1]),
        typeof e[1] == "string" && (n.defaultValue = e[1]),
        typeof e[2] == "string" && (n.tDescription = e[2]),
        Xe(e[2]) === "object" || Xe(e[3]) === "object")
      ) {
        var r = e[3] || e[2];
        Object.keys(r).forEach(function (o) {
          n[o] = r[o];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: function (e, n, r, o) {
        return e;
      },
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  };
}
function Kl(t) {
  return (
    typeof t.ns == "string" && (t.ns = [t.ns]),
    typeof t.fallbackLng == "string" && (t.fallbackLng = [t.fallbackLng]),
    typeof t.fallbackNS == "string" && (t.fallbackNS = [t.fallbackNS]),
    t.supportedLngs &&
      t.supportedLngs.indexOf("cimode") < 0 &&
      (t.supportedLngs = t.supportedLngs.concat(["cimode"])),
    t
  );
}
function Yl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function $t(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Yl(Object(n), !0).forEach(function (r) {
          Lt(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : Yl(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function ym(t) {
  var e = Dm();
  return function () {
    var r = xt(t),
      o;
    if (e) {
      var l = xt(this).constructor;
      o = Reflect.construct(r, arguments, l);
    } else o = r.apply(this, arguments);
    return Yr(this, o);
  };
}
function Dm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ui() {}
function xm(t) {
  var e = Object.getOwnPropertyNames(Object.getPrototypeOf(t));
  e.forEach(function (n) {
    typeof t[n] == "function" && (t[n] = t[n].bind(t));
  });
}
var ci = (function (t) {
  En(n, t);
  var e = ym(n);
  function n() {
    var r,
      o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      l = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (yt(this, n),
      (r = e.call(this)),
      di && Fr.call(Ft(r)),
      (r.options = Kl(o)),
      (r.services = {}),
      (r.logger = qt),
      (r.modules = { external: [] }),
      xm(Ft(r)),
      l && !r.isInitialized && !o.isClone)
    ) {
      if (!r.options.initImmediate) return r.init(o, l), Yr(r, Ft(r));
      setTimeout(function () {
        r.init(o, l);
      }, 0);
    }
    return r;
  }
  return (
    Dt(n, [
      {
        key: "init",
        value: function () {
          var o = this,
            l =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            d = arguments.length > 1 ? arguments[1] : void 0;
          typeof l == "function" && ((d = l), (l = {})),
            !l.defaultNS &&
              l.defaultNS !== !1 &&
              l.ns &&
              (typeof l.ns == "string"
                ? (l.defaultNS = l.ns)
                : l.ns.indexOf("translation") < 0 && (l.defaultNS = l.ns[0]));
          var m = Xl();
          (this.options = $t($t($t({}, m), this.options), Kl(l))),
            this.options.compatibilityAPI !== "v1" &&
              (this.options.interpolation = $t(
                $t({}, m.interpolation),
                this.options.interpolation
              )),
            l.keySeparator !== void 0 &&
              (this.options.userDefinedKeySeparator = l.keySeparator),
            l.nsSeparator !== void 0 &&
              (this.options.userDefinedNsSeparator = l.nsSeparator);
          function v(R) {
            return R ? (typeof R == "function" ? new R() : R) : null;
          }
          if (!this.options.isClone) {
            this.modules.logger
              ? qt.init(v(this.modules.logger), this.options)
              : qt.init(null, this.options);
            var w;
            this.modules.formatter
              ? (w = this.modules.formatter)
              : typeof Intl < "u" && (w = fm);
            var S = new Ul(this.options);
            this.store = new nm(this.options.resources, this.options);
            var A = this.services;
            (A.logger = qt),
              (A.resourceStore = this.store),
              (A.languageUtils = S),
              (A.pluralResolver = new cm(S, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              w &&
                (!this.options.interpolation.format ||
                  this.options.interpolation.format ===
                    m.interpolation.format) &&
                ((A.formatter = v(w)),
                A.formatter.init(A, this.options),
                (this.options.interpolation.format = A.formatter.format.bind(
                  A.formatter
                ))),
              (A.interpolator = new dm(this.options)),
              (A.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
              }),
              (A.backendConnector = new vm(
                v(this.modules.backend),
                A.resourceStore,
                A,
                this.options
              )),
              A.backendConnector.on("*", function (R) {
                for (
                  var j = arguments.length,
                    fe = new Array(j > 1 ? j - 1 : 0),
                    ae = 1;
                  ae < j;
                  ae++
                )
                  fe[ae - 1] = arguments[ae];
                o.emit.apply(o, [R].concat(fe));
              }),
              this.modules.languageDetector &&
                ((A.languageDetector = v(this.modules.languageDetector)),
                A.languageDetector.init &&
                  A.languageDetector.init(
                    A,
                    this.options.detection,
                    this.options
                  )),
              this.modules.i18nFormat &&
                ((A.i18nFormat = v(this.modules.i18nFormat)),
                A.i18nFormat.init && A.i18nFormat.init(this)),
              (this.translator = new Hl(this.services, this.options)),
              this.translator.on("*", function (R) {
                for (
                  var j = arguments.length,
                    fe = new Array(j > 1 ? j - 1 : 0),
                    ae = 1;
                  ae < j;
                  ae++
                )
                  fe[ae - 1] = arguments[ae];
                o.emit.apply(o, [R].concat(fe));
              }),
              this.modules.external.forEach(function (R) {
                R.init && R.init(o);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            d || (d = ui),
            this.options.fallbackLng &&
              !this.services.languageDetector &&
              !this.options.lng)
          ) {
            var N = this.services.languageUtils.getFallbackCodes(
              this.options.fallbackLng
            );
            N.length > 0 && N[0] !== "dev" && (this.options.lng = N[0]);
          }
          !this.services.languageDetector &&
            !this.options.lng &&
            this.logger.warn(
              "init: no languageDetector is used and no lng is defined"
            );
          var _ = [
            "getResource",
            "hasResourceBundle",
            "getResourceBundle",
            "getDataByLanguage",
          ];
          _.forEach(function (R) {
            o[R] = function () {
              var j;
              return (j = o.store)[R].apply(j, arguments);
            };
          });
          var H = [
            "addResource",
            "addResources",
            "addResourceBundle",
            "removeResourceBundle",
          ];
          H.forEach(function (R) {
            o[R] = function () {
              var j;
              return (j = o.store)[R].apply(j, arguments), o;
            };
          });
          var O = na(),
            q = function () {
              var j = function (ae, we) {
                o.isInitialized &&
                  !o.initializedStoreOnce &&
                  o.logger.warn(
                    "init: i18next is already initialized. You should call init just once!"
                  ),
                  (o.isInitialized = !0),
                  o.options.isClone || o.logger.log("initialized", o.options),
                  o.emit("initialized", o.options),
                  O.resolve(we),
                  d(ae, we);
              };
              if (
                o.languages &&
                o.options.compatibilityAPI !== "v1" &&
                !o.isInitialized
              )
                return j(null, o.t.bind(o));
              o.changeLanguage(o.options.lng, j);
            };
          return (
            this.options.resources || !this.options.initImmediate
              ? q()
              : setTimeout(q, 0),
            O
          );
        },
      },
      {
        key: "loadResources",
        value: function (o) {
          var l = this,
            d =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : ui,
            m = d,
            v = typeof o == "string" ? o : this.language;
          if (
            (typeof o == "function" && (m = o),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (v && v.toLowerCase() === "cimode") return m();
            var w = [],
              S = function (_) {
                if (!!_) {
                  var H = l.services.languageUtils.toResolveHierarchy(_);
                  H.forEach(function (O) {
                    w.indexOf(O) < 0 && w.push(O);
                  });
                }
              };
            if (v) S(v);
            else {
              var A = this.services.languageUtils.getFallbackCodes(
                this.options.fallbackLng
              );
              A.forEach(function (N) {
                return S(N);
              });
            }
            this.options.preload &&
              this.options.preload.forEach(function (N) {
                return S(N);
              }),
              this.services.backendConnector.load(
                w,
                this.options.ns,
                function (N) {
                  !N &&
                    !l.resolvedLanguage &&
                    l.language &&
                    l.setResolvedLanguage(l.language),
                    m(N);
                }
              );
          } else m(null);
        },
      },
      {
        key: "reloadResources",
        value: function (o, l, d) {
          var m = na();
          return (
            o || (o = this.languages),
            l || (l = this.options.ns),
            d || (d = ui),
            this.services.backendConnector.reload(o, l, function (v) {
              m.resolve(), d(v);
            }),
            m
          );
        },
      },
      {
        key: "use",
        value: function (o) {
          if (!o)
            throw new Error(
              "You are passing an undefined module! Please check the object you are passing to i18next.use()"
            );
          if (!o.type)
            throw new Error(
              "You are passing a wrong module! Please check the object you are passing to i18next.use()"
            );
          return (
            o.type === "backend" && (this.modules.backend = o),
            (o.type === "logger" || (o.log && o.warn && o.error)) &&
              (this.modules.logger = o),
            o.type === "languageDetector" &&
              (this.modules.languageDetector = o),
            o.type === "i18nFormat" && (this.modules.i18nFormat = o),
            o.type === "postProcessor" && tc.addPostProcessor(o),
            o.type === "formatter" && (this.modules.formatter = o),
            o.type === "3rdParty" && this.modules.external.push(o),
            this
          );
        },
      },
      {
        key: "setResolvedLanguage",
        value: function (o) {
          if (!(!o || !this.languages) && !(["cimode", "dev"].indexOf(o) > -1))
            for (var l = 0; l < this.languages.length; l++) {
              var d = this.languages[l];
              if (
                !(["cimode", "dev"].indexOf(d) > -1) &&
                this.store.hasLanguageSomeTranslations(d)
              ) {
                this.resolvedLanguage = d;
                break;
              }
            }
        },
      },
      {
        key: "changeLanguage",
        value: function (o, l) {
          var d = this;
          this.isLanguageChangingTo = o;
          var m = na();
          this.emit("languageChanging", o);
          var v = function (N) {
              (d.language = N),
                (d.languages = d.services.languageUtils.toResolveHierarchy(N)),
                (d.resolvedLanguage = void 0),
                d.setResolvedLanguage(N);
            },
            w = function (N, _) {
              _
                ? (v(_),
                  d.translator.changeLanguage(_),
                  (d.isLanguageChangingTo = void 0),
                  d.emit("languageChanged", _),
                  d.logger.log("languageChanged", _))
                : (d.isLanguageChangingTo = void 0),
                m.resolve(function () {
                  return d.t.apply(d, arguments);
                }),
                l &&
                  l(N, function () {
                    return d.t.apply(d, arguments);
                  });
            },
            S = function (N) {
              !o && !N && d.services.languageDetector && (N = []);
              var _ =
                typeof N == "string"
                  ? N
                  : d.services.languageUtils.getBestMatchFromCodes(N);
              _ &&
                (d.language || v(_),
                d.translator.language || d.translator.changeLanguage(_),
                d.services.languageDetector &&
                  d.services.languageDetector.cacheUserLanguage &&
                  d.services.languageDetector.cacheUserLanguage(_)),
                d.loadResources(_, function (H) {
                  w(H, _);
                });
            };
          return (
            !o &&
            this.services.languageDetector &&
            !this.services.languageDetector.async
              ? S(this.services.languageDetector.detect())
              : !o &&
                this.services.languageDetector &&
                this.services.languageDetector.async
              ? this.services.languageDetector.detect.length === 0
                ? this.services.languageDetector.detect().then(S)
                : this.services.languageDetector.detect(S)
              : S(o),
            m
          );
        },
      },
      {
        key: "getFixedT",
        value: function (o, l, d) {
          var m = this,
            v = function w(S, A) {
              var N;
              if (Xe(A) !== "object") {
                for (
                  var _ = arguments.length,
                    H = new Array(_ > 2 ? _ - 2 : 0),
                    O = 2;
                  O < _;
                  O++
                )
                  H[O - 2] = arguments[O];
                N = m.options.overloadTranslationOptionHandler(
                  [S, A].concat(H)
                );
              } else N = $t({}, A);
              (N.lng = N.lng || w.lng),
                (N.lngs = N.lngs || w.lngs),
                (N.ns = N.ns || w.ns),
                (N.keyPrefix = N.keyPrefix || d || w.keyPrefix);
              var q = m.options.keySeparator || ".",
                R;
              return (
                N.keyPrefix && Array.isArray(S)
                  ? (R = S.map(function (j) {
                      return "".concat(N.keyPrefix).concat(q).concat(j);
                    }))
                  : (R = N.keyPrefix
                      ? "".concat(N.keyPrefix).concat(q).concat(S)
                      : S),
                m.t(R, N)
              );
            };
          return (
            typeof o == "string" ? (v.lng = o) : (v.lngs = o),
            (v.ns = l),
            (v.keyPrefix = d),
            v
          );
        },
      },
      {
        key: "t",
        value: function () {
          var o;
          return (
            this.translator &&
            (o = this.translator).translate.apply(o, arguments)
          );
        },
      },
      {
        key: "exists",
        value: function () {
          var o;
          return (
            this.translator && (o = this.translator).exists.apply(o, arguments)
          );
        },
      },
      {
        key: "setDefaultNamespace",
        value: function (o) {
          this.options.defaultNS = o;
        },
      },
      {
        key: "hasLoadedNamespace",
        value: function (o) {
          var l = this,
            d =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
          if (!this.isInitialized)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18next was not initialized",
                this.languages
              ),
              !1
            );
          if (!this.languages || !this.languages.length)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18n.languages were undefined or empty",
                this.languages
              ),
              !1
            );
          var m = this.resolvedLanguage || this.languages[0],
            v = this.options ? this.options.fallbackLng : !1,
            w = this.languages[this.languages.length - 1];
          if (m.toLowerCase() === "cimode") return !0;
          var S = function (_, H) {
            var O =
              l.services.backendConnector.state["".concat(_, "|").concat(H)];
            return O === -1 || O === 2;
          };
          if (d.precheck) {
            var A = d.precheck(this, S);
            if (A !== void 0) return A;
          }
          return !!(
            this.hasResourceBundle(m, o) ||
            !this.services.backendConnector.backend ||
            (this.options.resources && !this.options.partialBundledLanguages) ||
            (S(m, o) && (!v || S(w, o)))
          );
        },
      },
      {
        key: "loadNamespaces",
        value: function (o, l) {
          var d = this,
            m = na();
          return this.options.ns
            ? (typeof o == "string" && (o = [o]),
              o.forEach(function (v) {
                d.options.ns.indexOf(v) < 0 && d.options.ns.push(v);
              }),
              this.loadResources(function (v) {
                m.resolve(), l && l(v);
              }),
              m)
            : (l && l(), Promise.resolve());
        },
      },
      {
        key: "loadLanguages",
        value: function (o, l) {
          var d = na();
          typeof o == "string" && (o = [o]);
          var m = this.options.preload || [],
            v = o.filter(function (w) {
              return m.indexOf(w) < 0;
            });
          return v.length
            ? ((this.options.preload = m.concat(v)),
              this.loadResources(function (w) {
                d.resolve(), l && l(w);
              }),
              d)
            : (l && l(), Promise.resolve());
        },
      },
      {
        key: "dir",
        value: function (o) {
          if (
            (o ||
              (o =
                this.resolvedLanguage ||
                (this.languages && this.languages.length > 0
                  ? this.languages[0]
                  : this.language)),
            !o)
          )
            return "rtl";
          var l = [
              "ar",
              "shu",
              "sqr",
              "ssh",
              "xaa",
              "yhd",
              "yud",
              "aao",
              "abh",
              "abv",
              "acm",
              "acq",
              "acw",
              "acx",
              "acy",
              "adf",
              "ads",
              "aeb",
              "aec",
              "afb",
              "ajp",
              "apc",
              "apd",
              "arb",
              "arq",
              "ars",
              "ary",
              "arz",
              "auz",
              "avl",
              "ayh",
              "ayl",
              "ayn",
              "ayp",
              "bbz",
              "pga",
              "he",
              "iw",
              "ps",
              "pbt",
              "pbu",
              "pst",
              "prp",
              "prd",
              "ug",
              "ur",
              "ydd",
              "yds",
              "yih",
              "ji",
              "yi",
              "hbo",
              "men",
              "xmn",
              "fa",
              "jpr",
              "peo",
              "pes",
              "prs",
              "dv",
              "sam",
              "ckb",
            ],
            d = (this.services && this.services.languageUtils) || new Ul(Xl());
          return l.indexOf(d.getLanguagePartFromCode(o)) > -1 ||
            o.toLowerCase().indexOf("-arab") > 1
            ? "rtl"
            : "ltr";
        },
      },
      {
        key: "cloneInstance",
        value: function () {
          var o = this,
            l =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            d =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : ui,
            m = $t($t($t({}, this.options), l), { isClone: !0 }),
            v = new n(m);
          (l.debug !== void 0 || l.prefix !== void 0) &&
            (v.logger = v.logger.clone(l));
          var w = ["store", "services", "language"];
          return (
            w.forEach(function (S) {
              v[S] = o[S];
            }),
            (v.services = $t({}, this.services)),
            (v.services.utils = {
              hasLoadedNamespace: v.hasLoadedNamespace.bind(v),
            }),
            (v.translator = new Hl(v.services, v.options)),
            v.translator.on("*", function (S) {
              for (
                var A = arguments.length,
                  N = new Array(A > 1 ? A - 1 : 0),
                  _ = 1;
                _ < A;
                _++
              )
                N[_ - 1] = arguments[_];
              v.emit.apply(v, [S].concat(N));
            }),
            v.init(m, d),
            (v.translator.options = v.options),
            (v.translator.backendConnector.services.utils = {
              hasLoadedNamespace: v.hasLoadedNamespace.bind(v),
            }),
            v
          );
        },
      },
      {
        key: "toJSON",
        value: function () {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
          };
        },
      },
    ]),
    n
  );
})(Fr);
Lt(ci, "createInstance", function () {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = arguments.length > 1 ? arguments[1] : void 0;
  return new ci(t, e);
});
var Ve = ci.createInstance();
Ve.createInstance = ci.createInstance;
var J3 = Ve.createInstance,
  X3 = Ve.dir,
  K3 = Ve.init,
  Y3 = Ve.loadResources,
  Q3 = Ve.reloadResources,
  e6 = Ve.use,
  Qr = Ve.changeLanguage,
  t6 = Ve.getFixedT,
  r6 = Ve.t,
  n6 = Ve.exists,
  a6 = Ve.setDefaultNamespace,
  i6 = Ve.hasLoadedNamespace,
  s6 = Ve.loadNamespaces,
  o6 = Ve.loadLanguages;
var be = {};
_f(be, {
  BRAND: () => uc,
  DIRTY: () => cs,
  EMPTY_PATH: () => sc,
  INVALID: () => oe,
  NEVER: () => Vc,
  OK: () => Ze,
  ParseStatus: () => We,
  Schema: () => le,
  ZodAny: () => ar,
  ZodArray: () => nt,
  ZodBigInt: () => Br,
  ZodBoolean: () => Tr,
  ZodBranded: () => la,
  ZodCatch: () => an,
  ZodDate: () => Ut,
  ZodDefault: () => jr,
  ZodDiscriminatedUnion: () => rn,
  ZodEffects: () => at,
  ZodEnum: () => Nt,
  ZodError: () => bt,
  ZodFirstPartyTypeKind: () => ne,
  ZodFunction: () => nr,
  ZodIntersection: () => _r,
  ZodIssueCode: () => W,
  ZodLazy: () => Rr,
  ZodLiteral: () => Pr,
  ZodMap: () => nn,
  ZodNaN: () => sn,
  ZodNativeEnum: () => Ir,
  ZodNever: () => kt,
  ZodNull: () => Mr,
  ZodNullable: () => Wt,
  ZodNumber: () => Tt,
  ZodObject: () => Te,
  ZodOptional: () => wt,
  ZodParsedType: () => J,
  ZodPipeline: () => Lr,
  ZodPromise: () => ir,
  ZodRecord: () => zr,
  ZodSchema: () => le,
  ZodSet: () => Vt,
  ZodString: () => St,
  ZodSymbol: () => en,
  ZodTransformer: () => at,
  ZodTuple: () => ft,
  ZodType: () => le,
  ZodUndefined: () => Nr,
  ZodUnion: () => Or,
  ZodUnknown: () => Ht,
  ZodVoid: () => tn,
  addIssueToContext: () => Y,
  any: () => vc,
  array: () => bc,
  bigint: () => pc,
  boolean: () => hs,
  coerce: () => Uc,
  custom: () => ds,
  date: () => fc,
  default: () => Am,
  defaultErrorMap: () => Tn,
  discriminatedUnion: () => kc,
  effect: () => ls,
  enum: () => _c,
  function: () => Nc,
  getErrorMap: () => aa,
  getParsedType: () => rr,
  instanceof: () => cc,
  intersection: () => Ec,
  isAborted: () => fi,
  isAsync: () => oa,
  isDirty: () => hi,
  isValid: () => sa,
  late: () => lc,
  lazy: () => Mc,
  literal: () => Oc,
  makeIssue: () => ia,
  map: () => Bc,
  nan: () => dc,
  nativeEnum: () => zc,
  never: () => Dc,
  null: () => gc,
  nullable: () => Ic,
  number: () => fs,
  object: () => wc,
  objectUtil: () => ua,
  oboolean: () => Hc,
  onumber: () => qc,
  optional: () => Pc,
  ostring: () => $c,
  pipeline: () => Lc,
  preprocess: () => jc,
  promise: () => Rc,
  quotelessJson: () => nc,
  record: () => Fc,
  set: () => Tc,
  setErrorMap: () => ic,
  strictObject: () => Cc,
  string: () => ps,
  symbol: () => hc,
  transformer: () => ls,
  tuple: () => Ac,
  undefined: () => mc,
  union: () => Sc,
  unknown: () => yc,
  util: () => xe,
  void: () => xc,
  z: () => Am,
});
var xe;
(function (t) {
  t.assertEqual = (o) => o;
  function e(o) {}
  t.assertIs = e;
  function n(o) {
    throw new Error();
  }
  (t.assertNever = n),
    (t.arrayToEnum = (o) => {
      let l = {};
      for (let d of o) l[d] = d;
      return l;
    }),
    (t.getValidEnumValues = (o) => {
      let l = t.objectKeys(o).filter((m) => typeof o[o[m]] != "number"),
        d = {};
      for (let m of l) d[m] = o[m];
      return t.objectValues(d);
    }),
    (t.objectValues = (o) =>
      t.objectKeys(o).map(function (l) {
        return o[l];
      })),
    (t.objectKeys =
      typeof Object.keys == "function"
        ? (o) => Object.keys(o)
        : (o) => {
            let l = [];
            for (let d in o)
              Object.prototype.hasOwnProperty.call(o, d) && l.push(d);
            return l;
          }),
    (t.find = (o, l) => {
      for (let d of o) if (l(d)) return d;
    }),
    (t.isInteger =
      typeof Number.isInteger == "function"
        ? (o) => Number.isInteger(o)
        : (o) => typeof o == "number" && isFinite(o) && Math.floor(o) === o);
  function r(o, l = " | ") {
    return o.map((d) => (typeof d == "string" ? `'${d}'` : d)).join(l);
  }
  (t.joinValues = r),
    (t.jsonStringifyReplacer = (o, l) =>
      typeof l == "bigint" ? l.toString() : l);
})(xe || (xe = {}));
var J = xe.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  rr = (t) => {
    switch (typeof t) {
      case "undefined":
        return J.undefined;
      case "string":
        return J.string;
      case "number":
        return isNaN(t) ? J.nan : J.number;
      case "boolean":
        return J.boolean;
      case "function":
        return J.function;
      case "bigint":
        return J.bigint;
      case "symbol":
        return J.symbol;
      case "object":
        return Array.isArray(t)
          ? J.array
          : t === null
          ? J.null
          : t.then &&
            typeof t.then == "function" &&
            t.catch &&
            typeof t.catch == "function"
          ? J.promise
          : typeof Map < "u" && t instanceof Map
          ? J.map
          : typeof Set < "u" && t instanceof Set
          ? J.set
          : typeof Date < "u" && t instanceof Date
          ? J.date
          : J.object;
      default:
        return J.unknown;
    }
  },
  W = xe.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  nc = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:"),
  bt = class extends Error {
    constructor(e) {
      super(),
        (this.issues = []),
        (this.addIssue = (r) => {
          this.issues = [...this.issues, r];
        }),
        (this.addIssues = (r = []) => {
          this.issues = [...this.issues, ...r];
        });
      let n = new.target.prototype;
      Object.setPrototypeOf
        ? Object.setPrototypeOf(this, n)
        : (this.__proto__ = n),
        (this.name = "ZodError"),
        (this.issues = e);
    }
    get errors() {
      return this.issues;
    }
    format(e) {
      let n =
          e ||
          function (l) {
            return l.message;
          },
        r = { _errors: [] },
        o = (l) => {
          for (let d of l.issues)
            if (d.code === "invalid_union") d.unionErrors.map(o);
            else if (d.code === "invalid_return_type") o(d.returnTypeError);
            else if (d.code === "invalid_arguments") o(d.argumentsError);
            else if (d.path.length === 0) r._errors.push(n(d));
            else {
              let m = r,
                v = 0;
              for (; v < d.path.length; ) {
                let w = d.path[v];
                v === d.path.length - 1
                  ? ((m[w] = m[w] || { _errors: [] }), m[w]._errors.push(n(d)))
                  : (m[w] = m[w] || { _errors: [] }),
                  (m = m[w]),
                  v++;
              }
            }
        };
      return o(this), r;
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, xe.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(e = (n) => n.message) {
      let n = {},
        r = [];
      for (let o of this.issues)
        o.path.length > 0
          ? ((n[o.path[0]] = n[o.path[0]] || []), n[o.path[0]].push(e(o)))
          : r.push(e(o));
      return { formErrors: r, fieldErrors: n };
    }
    get formErrors() {
      return this.flatten();
    }
  };
bt.create = (t) => new bt(t);
var Tn = (t, e) => {
    let n;
    switch (t.code) {
      case W.invalid_type:
        t.received === J.undefined
          ? (n = "Required")
          : (n = `Expected ${t.expected}, received ${t.received}`);
        break;
      case W.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(
          t.expected,
          xe.jsonStringifyReplacer
        )}`;
        break;
      case W.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${xe.joinValues(t.keys, ", ")}`;
        break;
      case W.invalid_union:
        n = "Invalid input";
        break;
      case W.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${xe.joinValues(t.options)}`;
        break;
      case W.invalid_enum_value:
        n = `Invalid enum value. Expected ${xe.joinValues(
          t.options
        )}, received '${t.received}'`;
        break;
      case W.invalid_arguments:
        n = "Invalid function arguments";
        break;
      case W.invalid_return_type:
        n = "Invalid function return type";
        break;
      case W.invalid_date:
        n = "Invalid date";
        break;
      case W.invalid_string:
        typeof t.validation == "object"
          ? "startsWith" in t.validation
            ? (n = `Invalid input: must start with "${t.validation.startsWith}"`)
            : "endsWith" in t.validation
            ? (n = `Invalid input: must end with "${t.validation.endsWith}"`)
            : xe.assertNever(t.validation)
          : t.validation !== "regex"
          ? (n = `Invalid ${t.validation}`)
          : (n = "Invalid");
        break;
      case W.too_small:
        t.type === "array"
          ? (n = `Array must contain ${
              t.exact ? "exactly" : t.inclusive ? "at least" : "more than"
            } ${t.minimum} element(s)`)
          : t.type === "string"
          ? (n = `String must contain ${
              t.exact ? "exactly" : t.inclusive ? "at least" : "over"
            } ${t.minimum} character(s)`)
          : t.type === "number"
          ? (n = `Number must be ${
              t.exact
                ? "exactly equal to "
                : t.inclusive
                ? "greater than or equal to "
                : "greater than "
            }${t.minimum}`)
          : t.type === "date"
          ? (n = `Date must be ${
              t.exact
                ? "exactly equal to "
                : t.inclusive
                ? "greater than or equal to "
                : "greater than "
            }${new Date(t.minimum)}`)
          : (n = "Invalid input");
        break;
      case W.too_big:
        t.type === "array"
          ? (n = `Array must contain ${
              t.exact ? "exactly" : t.inclusive ? "at most" : "less than"
            } ${t.maximum} element(s)`)
          : t.type === "string"
          ? (n = `String must contain ${
              t.exact ? "exactly" : t.inclusive ? "at most" : "under"
            } ${t.maximum} character(s)`)
          : t.type === "number"
          ? (n = `Number must be ${
              t.exact
                ? "exactly"
                : t.inclusive
                ? "less than or equal to"
                : "less than"
            } ${t.maximum}`)
          : t.type === "date"
          ? (n = `Date must be ${
              t.exact
                ? "exactly"
                : t.inclusive
                ? "smaller than or equal to"
                : "smaller than"
            } ${new Date(t.maximum)}`)
          : (n = "Invalid input");
        break;
      case W.custom:
        n = "Invalid input";
        break;
      case W.invalid_intersection_types:
        n = "Intersection results could not be merged";
        break;
      case W.not_multiple_of:
        n = `Number must be a multiple of ${t.multipleOf}`;
        break;
      case W.not_finite:
        n = "Number must be finite";
        break;
      default:
        (n = e.defaultError), xe.assertNever(t);
    }
    return { message: n };
  },
  ac = Tn;
function ic(t) {
  ac = t;
}
function aa() {
  return ac;
}
var ia = (t) => {
    let { data: e, path: n, errorMaps: r, issueData: o } = t,
      l = [...n, ...(o.path || [])],
      d = { ...o, path: l },
      m = "",
      v = r
        .filter((w) => !!w)
        .slice()
        .reverse();
    for (let w of v) m = w(d, { data: e, defaultError: m }).message;
    return { ...o, path: l, message: o.message || m };
  },
  sc = [];
function Y(t, e) {
  let n = ia({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, aa(), Tn].filter(
      (r) => !!r
    ),
  });
  t.common.issues.push(n);
}
var We = class {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      this.value === "valid" && (this.value = "dirty");
    }
    abort() {
      this.value !== "aborted" && (this.value = "aborted");
    }
    static mergeArray(e, n) {
      let r = [];
      for (let o of n) {
        if (o.status === "aborted") return oe;
        o.status === "dirty" && e.dirty(), r.push(o.value);
      }
      return { status: e.value, value: r };
    }
    static async mergeObjectAsync(e, n) {
      let r = [];
      for (let o of n) r.push({ key: await o.key, value: await o.value });
      return We.mergeObjectSync(e, r);
    }
    static mergeObjectSync(e, n) {
      let r = {};
      for (let o of n) {
        let { key: l, value: d } = o;
        if (l.status === "aborted" || d.status === "aborted") return oe;
        l.status === "dirty" && e.dirty(),
          d.status === "dirty" && e.dirty(),
          (typeof d.value < "u" || o.alwaysSet) && (r[l.value] = d.value);
      }
      return { status: e.value, value: r };
    }
  },
  oe = Object.freeze({ status: "aborted" }),
  cs = (t) => ({ status: "dirty", value: t }),
  Ze = (t) => ({ status: "valid", value: t }),
  fi = (t) => t.status === "aborted",
  hi = (t) => t.status === "dirty",
  sa = (t) => t.status === "valid",
  oa = (t) => typeof Promise < "u" && t instanceof Promise,
  he;
(function (t) {
  (t.errToObj = (e) => (typeof e == "string" ? { message: e } : e || {})),
    (t.toString = (e) => (typeof e == "string" ? e : e?.message));
})(he || (he = {}));
var Ct = class {
    constructor(e, n, r, o) {
      (this.parent = e), (this.data = n), (this._path = r), (this._key = o);
    }
    get path() {
      return this._path.concat(this._key);
    }
  },
  rc = (t, e) => {
    if (sa(e)) return { success: !0, data: e.value };
    if (!t.common.issues.length)
      throw new Error("Validation failed but no issues detected.");
    return { success: !1, error: new bt(t.common.issues) };
  };
function de(t) {
  if (!t) return {};
  let {
    errorMap: e,
    invalid_type_error: n,
    required_error: r,
    description: o,
  } = t;
  if (e && (n || r))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return e
    ? { errorMap: e, description: o }
    : {
        errorMap: (d, m) =>
          d.code !== "invalid_type"
            ? { message: m.defaultError }
            : typeof m.data > "u"
            ? { message: r ?? m.defaultError }
            : { message: n ?? m.defaultError },
        description: o,
      };
}
var le = class {
    constructor(e) {
      (this.spa = this.safeParseAsync),
        (this._def = e),
        (this.parse = this.parse.bind(this)),
        (this.safeParse = this.safeParse.bind(this)),
        (this.parseAsync = this.parseAsync.bind(this)),
        (this.safeParseAsync = this.safeParseAsync.bind(this)),
        (this.spa = this.spa.bind(this)),
        (this.refine = this.refine.bind(this)),
        (this.refinement = this.refinement.bind(this)),
        (this.superRefine = this.superRefine.bind(this)),
        (this.optional = this.optional.bind(this)),
        (this.nullable = this.nullable.bind(this)),
        (this.nullish = this.nullish.bind(this)),
        (this.array = this.array.bind(this)),
        (this.promise = this.promise.bind(this)),
        (this.or = this.or.bind(this)),
        (this.and = this.and.bind(this)),
        (this.transform = this.transform.bind(this)),
        (this.brand = this.brand.bind(this)),
        (this.default = this.default.bind(this)),
        (this.catch = this.catch.bind(this)),
        (this.describe = this.describe.bind(this)),
        (this.pipe = this.pipe.bind(this)),
        (this.isNullable = this.isNullable.bind(this)),
        (this.isOptional = this.isOptional.bind(this));
    }
    get description() {
      return this._def.description;
    }
    _getType(e) {
      return rr(e.data);
    }
    _getOrReturnCtx(e, n) {
      return (
        n || {
          common: e.parent.common,
          data: e.data,
          parsedType: rr(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        }
      );
    }
    _processInputParams(e) {
      return {
        status: new We(),
        ctx: {
          common: e.parent.common,
          data: e.data,
          parsedType: rr(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        },
      };
    }
    _parseSync(e) {
      let n = this._parse(e);
      if (oa(n)) throw new Error("Synchronous parse encountered promise.");
      return n;
    }
    _parseAsync(e) {
      let n = this._parse(e);
      return Promise.resolve(n);
    }
    parse(e, n) {
      let r = this.safeParse(e, n);
      if (r.success) return r.data;
      throw r.error;
    }
    safeParse(e, n) {
      var r;
      let o = {
          common: {
            issues: [],
            async: (r = n?.async) !== null && r !== void 0 ? r : !1,
            contextualErrorMap: n?.errorMap,
          },
          path: n?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: rr(e),
        },
        l = this._parseSync({ data: e, path: o.path, parent: o });
      return rc(o, l);
    }
    async parseAsync(e, n) {
      let r = await this.safeParseAsync(e, n);
      if (r.success) return r.data;
      throw r.error;
    }
    async safeParseAsync(e, n) {
      let r = {
          common: { issues: [], contextualErrorMap: n?.errorMap, async: !0 },
          path: n?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: rr(e),
        },
        o = this._parse({ data: e, path: r.path, parent: r }),
        l = await (oa(o) ? o : Promise.resolve(o));
      return rc(r, l);
    }
    refine(e, n) {
      let r = (o) =>
        typeof n == "string" || typeof n > "u"
          ? { message: n }
          : typeof n == "function"
          ? n(o)
          : n;
      return this._refinement((o, l) => {
        let d = e(o),
          m = () => l.addIssue({ code: W.custom, ...r(o) });
        return typeof Promise < "u" && d instanceof Promise
          ? d.then((v) => (v ? !0 : (m(), !1)))
          : d
          ? !0
          : (m(), !1);
      });
    }
    refinement(e, n) {
      return this._refinement((r, o) =>
        e(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1)
      );
    }
    _refinement(e) {
      return new at({
        schema: this,
        typeName: ne.ZodEffects,
        effect: { type: "refinement", refinement: e },
      });
    }
    superRefine(e) {
      return this._refinement(e);
    }
    optional() {
      return wt.create(this, this._def);
    }
    nullable() {
      return Wt.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return nt.create(this, this._def);
    }
    promise() {
      return ir.create(this, this._def);
    }
    or(e) {
      return Or.create([this, e], this._def);
    }
    and(e) {
      return _r.create(this, e, this._def);
    }
    transform(e) {
      return new at({
        ...de(this._def),
        schema: this,
        typeName: ne.ZodEffects,
        effect: { type: "transform", transform: e },
      });
    }
    default(e) {
      let n = typeof e == "function" ? e : () => e;
      return new jr({
        ...de(this._def),
        innerType: this,
        defaultValue: n,
        typeName: ne.ZodDefault,
      });
    }
    brand() {
      return new la({ typeName: ne.ZodBranded, type: this, ...de(this._def) });
    }
    catch(e) {
      let n = typeof e == "function" ? e : () => e;
      return new an({
        ...de(this._def),
        innerType: this,
        catchValue: n,
        typeName: ne.ZodCatch,
      });
    }
    describe(e) {
      let n = this.constructor;
      return new n({ ...this._def, description: e });
    }
    pipe(e) {
      return Lr.create(this, e);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  },
  bm = /^c[^\s-]{8,}$/i,
  wm = /^[a-z][a-z0-9]*$/,
  Cm =
    /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,
  Sm =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|([^-]([a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}))$/,
  km = (t) =>
    t.precision
      ? t.offset
        ? new RegExp(
            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
          )
        : new RegExp(
            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`
          )
      : t.precision === 0
      ? t.offset
        ? new RegExp(
            "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"
          )
        : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
      : t.offset
      ? new RegExp(
          "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"
        )
      : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$"),
  St = class extends le {
    constructor() {
      super(...arguments),
        (this._regex = (e, n, r) =>
          this.refinement((o) => e.test(o), {
            validation: n,
            code: W.invalid_string,
            ...he.errToObj(r),
          })),
        (this.nonempty = (e) => this.min(1, he.errToObj(e))),
        (this.trim = () =>
          new St({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
          }));
    }
    _parse(e) {
      if (
        (this._def.coerce && (e.data = String(e.data)),
        this._getType(e) !== J.string)
      ) {
        let l = this._getOrReturnCtx(e);
        return (
          Y(l, {
            code: W.invalid_type,
            expected: J.string,
            received: l.parsedType,
          }),
          oe
        );
      }
      let r = new We(),
        o;
      for (let l of this._def.checks)
        if (l.kind === "min")
          e.data.length < l.value &&
            ((o = this._getOrReturnCtx(e, o)),
            Y(o, {
              code: W.too_small,
              minimum: l.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: l.message,
            }),
            r.dirty());
        else if (l.kind === "max")
          e.data.length > l.value &&
            ((o = this._getOrReturnCtx(e, o)),
            Y(o, {
              code: W.too_big,
              maximum: l.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: l.message,
            }),
            r.dirty());
        else if (l.kind === "length") {
          let d = e.data.length > l.value,
            m = e.data.length < l.value;
          (d || m) &&
            ((o = this._getOrReturnCtx(e, o)),
            d
              ? Y(o, {
                  code: W.too_big,
                  maximum: l.value,
                  type: "string",
                  inclusive: !0,
                  exact: !0,
                  message: l.message,
                })
              : m &&
                Y(o, {
                  code: W.too_small,
                  minimum: l.value,
                  type: "string",
                  inclusive: !0,
                  exact: !0,
                  message: l.message,
                }),
            r.dirty());
        } else if (l.kind === "email")
          Sm.test(e.data) ||
            ((o = this._getOrReturnCtx(e, o)),
            Y(o, {
              validation: "email",
              code: W.invalid_string,
              message: l.message,
            }),
            r.dirty());
        else if (l.kind === "uuid")
          Cm.test(e.data) ||
            ((o = this._getOrReturnCtx(e, o)),
            Y(o, {
              validation: "uuid",
              code: W.invalid_string,
              message: l.message,
            }),
            r.dirty());
        else if (l.kind === "cuid")
          bm.test(e.data) ||
            ((o = this._getOrReturnCtx(e, o)),
            Y(o, {
              validation: "cuid",
              code: W.invalid_string,
              message: l.message,
            }),
            r.dirty());
        else if (l.kind === "cuid2")
          wm.test(e.data) ||
            ((o = this._getOrReturnCtx(e, o)),
            Y(o, {
              validation: "cuid2",
              code: W.invalid_string,
              message: l.message,
            }),
            r.dirty());
        else if (l.kind === "url")
          try {
            new URL(e.data);
          } catch {
            (o = this._getOrReturnCtx(e, o)),
              Y(o, {
                validation: "url",
                code: W.invalid_string,
                message: l.message,
              }),
              r.dirty();
          }
        else
          l.kind === "regex"
            ? ((l.regex.lastIndex = 0),
              l.regex.test(e.data) ||
                ((o = this._getOrReturnCtx(e, o)),
                Y(o, {
                  validation: "regex",
                  code: W.invalid_string,
                  message: l.message,
                }),
                r.dirty()))
            : l.kind === "trim"
            ? (e.data = e.data.trim())
            : l.kind === "startsWith"
            ? e.data.startsWith(l.value) ||
              ((o = this._getOrReturnCtx(e, o)),
              Y(o, {
                code: W.invalid_string,
                validation: { startsWith: l.value },
                message: l.message,
              }),
              r.dirty())
            : l.kind === "endsWith"
            ? e.data.endsWith(l.value) ||
              ((o = this._getOrReturnCtx(e, o)),
              Y(o, {
                code: W.invalid_string,
                validation: { endsWith: l.value },
                message: l.message,
              }),
              r.dirty())
            : l.kind === "datetime"
            ? km(l).test(e.data) ||
              ((o = this._getOrReturnCtx(e, o)),
              Y(o, {
                code: W.invalid_string,
                validation: "datetime",
                message: l.message,
              }),
              r.dirty())
            : xe.assertNever(l);
      return { status: r.value, value: e.data };
    }
    _addCheck(e) {
      return new St({ ...this._def, checks: [...this._def.checks, e] });
    }
    email(e) {
      return this._addCheck({ kind: "email", ...he.errToObj(e) });
    }
    url(e) {
      return this._addCheck({ kind: "url", ...he.errToObj(e) });
    }
    uuid(e) {
      return this._addCheck({ kind: "uuid", ...he.errToObj(e) });
    }
    cuid(e) {
      return this._addCheck({ kind: "cuid", ...he.errToObj(e) });
    }
    cuid2(e) {
      return this._addCheck({ kind: "cuid2", ...he.errToObj(e) });
    }
    datetime(e) {
      var n;
      return typeof e == "string"
        ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            message: e,
          })
        : this._addCheck({
            kind: "datetime",
            precision: typeof e?.precision > "u" ? null : e?.precision,
            offset: (n = e?.offset) !== null && n !== void 0 ? n : !1,
            ...he.errToObj(e?.message),
          });
    }
    regex(e, n) {
      return this._addCheck({ kind: "regex", regex: e, ...he.errToObj(n) });
    }
    startsWith(e, n) {
      return this._addCheck({
        kind: "startsWith",
        value: e,
        ...he.errToObj(n),
      });
    }
    endsWith(e, n) {
      return this._addCheck({ kind: "endsWith", value: e, ...he.errToObj(n) });
    }
    min(e, n) {
      return this._addCheck({ kind: "min", value: e, ...he.errToObj(n) });
    }
    max(e, n) {
      return this._addCheck({ kind: "max", value: e, ...he.errToObj(n) });
    }
    length(e, n) {
      return this._addCheck({ kind: "length", value: e, ...he.errToObj(n) });
    }
    get isDatetime() {
      return !!this._def.checks.find((e) => e.kind === "datetime");
    }
    get isEmail() {
      return !!this._def.checks.find((e) => e.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((e) => e.kind === "url");
    }
    get isUUID() {
      return !!this._def.checks.find((e) => e.kind === "uuid");
    }
    get isCUID() {
      return !!this._def.checks.find((e) => e.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((e) => e.kind === "cuid2");
    }
    get minLength() {
      let e = null;
      for (let n of this._def.checks)
        n.kind === "min" && (e === null || n.value > e) && (e = n.value);
      return e;
    }
    get maxLength() {
      let e = null;
      for (let n of this._def.checks)
        n.kind === "max" && (e === null || n.value < e) && (e = n.value);
      return e;
    }
  };
St.create = (t) => {
  var e;
  return new St({
    checks: [],
    typeName: ne.ZodString,
    coerce: (e = t?.coerce) !== null && e !== void 0 ? e : !1,
    ...de(t),
  });
};
function Em(t, e) {
  let n = (t.toString().split(".")[1] || "").length,
    r = (e.toString().split(".")[1] || "").length,
    o = n > r ? n : r,
    l = parseInt(t.toFixed(o).replace(".", "")),
    d = parseInt(e.toFixed(o).replace(".", ""));
  return (l % d) / Math.pow(10, o);
}
var Tt = class extends le {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== J.number)
    ) {
      let l = this._getOrReturnCtx(e);
      return (
        Y(l, {
          code: W.invalid_type,
          expected: J.number,
          received: l.parsedType,
        }),
        oe
      );
    }
    let r,
      o = new We();
    for (let l of this._def.checks)
      l.kind === "int"
        ? xe.isInteger(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          Y(r, {
            code: W.invalid_type,
            expected: "integer",
            received: "float",
            message: l.message,
          }),
          o.dirty())
        : l.kind === "min"
        ? (l.inclusive ? e.data < l.value : e.data <= l.value) &&
          ((r = this._getOrReturnCtx(e, r)),
          Y(r, {
            code: W.too_small,
            minimum: l.value,
            type: "number",
            inclusive: l.inclusive,
            exact: !1,
            message: l.message,
          }),
          o.dirty())
        : l.kind === "max"
        ? (l.inclusive ? e.data > l.value : e.data >= l.value) &&
          ((r = this._getOrReturnCtx(e, r)),
          Y(r, {
            code: W.too_big,
            maximum: l.value,
            type: "number",
            inclusive: l.inclusive,
            exact: !1,
            message: l.message,
          }),
          o.dirty())
        : l.kind === "multipleOf"
        ? Em(e.data, l.value) !== 0 &&
          ((r = this._getOrReturnCtx(e, r)),
          Y(r, {
            code: W.not_multiple_of,
            multipleOf: l.value,
            message: l.message,
          }),
          o.dirty())
        : l.kind === "finite"
        ? Number.isFinite(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          Y(r, { code: W.not_finite, message: l.message }),
          o.dirty())
        : xe.assertNever(l);
    return { status: o.value, value: e.data };
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, he.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, he.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, he.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, he.toString(n));
  }
  setLimit(e, n, r, o) {
    return new Tt({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: n, inclusive: r, message: he.toString(o) },
      ],
    });
  }
  _addCheck(e) {
    return new Tt({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: "int", message: he.toString(e) });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: he.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: he.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: he.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: he.toString(e),
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: he.toString(n),
    });
  }
  finite(e) {
    return this._addCheck({ kind: "finite", message: he.toString(e) });
  }
  get minValue() {
    let e = null;
    for (let n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) =>
        e.kind === "int" || (e.kind === "multipleOf" && xe.isInteger(e.value))
    );
  }
  get isFinite() {
    let e = null,
      n = null;
    for (let r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min"
        ? (n === null || r.value > n) && (n = r.value)
        : r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(e);
  }
};
Tt.create = (t) =>
  new Tt({
    checks: [],
    typeName: ne.ZodNumber,
    coerce: t?.coerce || !1,
    ...de(t),
  });
var Br = class extends le {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = BigInt(e.data)),
      this._getType(e) !== J.bigint)
    ) {
      let r = this._getOrReturnCtx(e);
      return (
        Y(r, {
          code: W.invalid_type,
          expected: J.bigint,
          received: r.parsedType,
        }),
        oe
      );
    }
    return Ze(e.data);
  }
};
Br.create = (t) => {
  var e;
  return new Br({
    typeName: ne.ZodBigInt,
    coerce: (e = t?.coerce) !== null && e !== void 0 ? e : !1,
    ...de(t),
  });
};
var Tr = class extends le {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Boolean(e.data)),
      this._getType(e) !== J.boolean)
    ) {
      let r = this._getOrReturnCtx(e);
      return (
        Y(r, {
          code: W.invalid_type,
          expected: J.boolean,
          received: r.parsedType,
        }),
        oe
      );
    }
    return Ze(e.data);
  }
};
Tr.create = (t) =>
  new Tr({ typeName: ne.ZodBoolean, coerce: t?.coerce || !1, ...de(t) });
var Ut = class extends le {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== J.date)
    ) {
      let l = this._getOrReturnCtx(e);
      return (
        Y(l, {
          code: W.invalid_type,
          expected: J.date,
          received: l.parsedType,
        }),
        oe
      );
    }
    if (isNaN(e.data.getTime())) {
      let l = this._getOrReturnCtx(e);
      return Y(l, { code: W.invalid_date }), oe;
    }
    let r = new We(),
      o;
    for (let l of this._def.checks)
      l.kind === "min"
        ? e.data.getTime() < l.value &&
          ((o = this._getOrReturnCtx(e, o)),
          Y(o, {
            code: W.too_small,
            message: l.message,
            inclusive: !0,
            exact: !1,
            minimum: l.value,
            type: "date",
          }),
          r.dirty())
        : l.kind === "max"
        ? e.data.getTime() > l.value &&
          ((o = this._getOrReturnCtx(e, o)),
          Y(o, {
            code: W.too_big,
            message: l.message,
            inclusive: !0,
            exact: !1,
            maximum: l.value,
            type: "date",
          }),
          r.dirty())
        : xe.assertNever(l);
    return { status: r.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new Ut({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: he.toString(n),
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: he.toString(n),
    });
  }
  get minDate() {
    let e = null;
    for (let n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (let n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e != null ? new Date(e) : null;
  }
};
Ut.create = (t) =>
  new Ut({
    checks: [],
    coerce: t?.coerce || !1,
    typeName: ne.ZodDate,
    ...de(t),
  });
var en = class extends le {
  _parse(e) {
    if (this._getType(e) !== J.symbol) {
      let r = this._getOrReturnCtx(e);
      return (
        Y(r, {
          code: W.invalid_type,
          expected: J.symbol,
          received: r.parsedType,
        }),
        oe
      );
    }
    return Ze(e.data);
  }
};
en.create = (t) => new en({ typeName: ne.ZodSymbol, ...de(t) });
var Nr = class extends le {
  _parse(e) {
    if (this._getType(e) !== J.undefined) {
      let r = this._getOrReturnCtx(e);
      return (
        Y(r, {
          code: W.invalid_type,
          expected: J.undefined,
          received: r.parsedType,
        }),
        oe
      );
    }
    return Ze(e.data);
  }
};
Nr.create = (t) => new Nr({ typeName: ne.ZodUndefined, ...de(t) });
var Mr = class extends le {
  _parse(e) {
    if (this._getType(e) !== J.null) {
      let r = this._getOrReturnCtx(e);
      return (
        Y(r, {
          code: W.invalid_type,
          expected: J.null,
          received: r.parsedType,
        }),
        oe
      );
    }
    return Ze(e.data);
  }
};
Mr.create = (t) => new Mr({ typeName: ne.ZodNull, ...de(t) });
var ar = class extends le {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(e) {
    return Ze(e.data);
  }
};
ar.create = (t) => new ar({ typeName: ne.ZodAny, ...de(t) });
var Ht = class extends le {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(e) {
    return Ze(e.data);
  }
};
Ht.create = (t) => new Ht({ typeName: ne.ZodUnknown, ...de(t) });
var kt = class extends le {
  _parse(e) {
    let n = this._getOrReturnCtx(e);
    return (
      Y(n, { code: W.invalid_type, expected: J.never, received: n.parsedType }),
      oe
    );
  }
};
kt.create = (t) => new kt({ typeName: ne.ZodNever, ...de(t) });
var tn = class extends le {
  _parse(e) {
    if (this._getType(e) !== J.undefined) {
      let r = this._getOrReturnCtx(e);
      return (
        Y(r, {
          code: W.invalid_type,
          expected: J.void,
          received: r.parsedType,
        }),
        oe
      );
    }
    return Ze(e.data);
  }
};
tn.create = (t) => new tn({ typeName: ne.ZodVoid, ...de(t) });
var nt = class extends le {
  _parse(e) {
    let { ctx: n, status: r } = this._processInputParams(e),
      o = this._def;
    if (n.parsedType !== J.array)
      return (
        Y(n, {
          code: W.invalid_type,
          expected: J.array,
          received: n.parsedType,
        }),
        oe
      );
    if (o.exactLength !== null) {
      let d = n.data.length > o.exactLength.value,
        m = n.data.length < o.exactLength.value;
      (d || m) &&
        (Y(n, {
          code: d ? W.too_big : W.too_small,
          minimum: m ? o.exactLength.value : void 0,
          maximum: d ? o.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: o.exactLength.message,
        }),
        r.dirty());
    }
    if (
      (o.minLength !== null &&
        n.data.length < o.minLength.value &&
        (Y(n, {
          code: W.too_small,
          minimum: o.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: o.minLength.message,
        }),
        r.dirty()),
      o.maxLength !== null &&
        n.data.length > o.maxLength.value &&
        (Y(n, {
          code: W.too_big,
          maximum: o.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: o.maxLength.message,
        }),
        r.dirty()),
      n.common.async)
    )
      return Promise.all(
        [...n.data].map((d, m) => o.type._parseAsync(new Ct(n, d, n.path, m)))
      ).then((d) => We.mergeArray(r, d));
    let l = [...n.data].map((d, m) =>
      o.type._parseSync(new Ct(n, d, n.path, m))
    );
    return We.mergeArray(r, l);
  }
  get element() {
    return this._def.type;
  }
  min(e, n) {
    return new nt({
      ...this._def,
      minLength: { value: e, message: he.toString(n) },
    });
  }
  max(e, n) {
    return new nt({
      ...this._def,
      maxLength: { value: e, message: he.toString(n) },
    });
  }
  length(e, n) {
    return new nt({
      ...this._def,
      exactLength: { value: e, message: he.toString(n) },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
nt.create = (t, e) =>
  new nt({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ne.ZodArray,
    ...de(e),
  });
var ua;
(function (t) {
  t.mergeShapes = (e, n) => ({ ...e, ...n });
})(ua || (ua = {}));
function Bn(t) {
  if (t instanceof Te) {
    let e = {};
    for (let n in t.shape) {
      let r = t.shape[n];
      e[n] = wt.create(Bn(r));
    }
    return new Te({ ...t._def, shape: () => e });
  } else
    return t instanceof nt
      ? nt.create(Bn(t.element))
      : t instanceof wt
      ? wt.create(Bn(t.unwrap()))
      : t instanceof Wt
      ? Wt.create(Bn(t.unwrap()))
      : t instanceof ft
      ? ft.create(t.items.map((e) => Bn(e)))
      : t;
}
var Te = class extends le {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e = this._def.shape(),
      n = xe.objectKeys(e);
    return (this._cached = { shape: e, keys: n });
  }
  _parse(e) {
    if (this._getType(e) !== J.object) {
      let w = this._getOrReturnCtx(e);
      return (
        Y(w, {
          code: W.invalid_type,
          expected: J.object,
          received: w.parsedType,
        }),
        oe
      );
    }
    let { status: r, ctx: o } = this._processInputParams(e),
      { shape: l, keys: d } = this._getCached(),
      m = [];
    if (
      !(this._def.catchall instanceof kt && this._def.unknownKeys === "strip")
    )
      for (let w in o.data) d.includes(w) || m.push(w);
    let v = [];
    for (let w of d) {
      let S = l[w],
        A = o.data[w];
      v.push({
        key: { status: "valid", value: w },
        value: S._parse(new Ct(o, A, o.path, w)),
        alwaysSet: w in o.data,
      });
    }
    if (this._def.catchall instanceof kt) {
      let w = this._def.unknownKeys;
      if (w === "passthrough")
        for (let S of m)
          v.push({
            key: { status: "valid", value: S },
            value: { status: "valid", value: o.data[S] },
          });
      else if (w === "strict")
        m.length > 0 &&
          (Y(o, { code: W.unrecognized_keys, keys: m }), r.dirty());
      else if (w !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let w = this._def.catchall;
      for (let S of m) {
        let A = o.data[S];
        v.push({
          key: { status: "valid", value: S },
          value: w._parse(new Ct(o, A, o.path, S)),
          alwaysSet: S in o.data,
        });
      }
    }
    return o.common.async
      ? Promise.resolve()
          .then(async () => {
            let w = [];
            for (let S of v) {
              let A = await S.key;
              w.push({ key: A, value: await S.value, alwaysSet: S.alwaysSet });
            }
            return w;
          })
          .then((w) => We.mergeObjectSync(r, w))
      : We.mergeObjectSync(r, v);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return (
      he.errToObj,
      new Te({
        ...this._def,
        unknownKeys: "strict",
        ...(e !== void 0
          ? {
              errorMap: (n, r) => {
                var o, l, d, m;
                let v =
                  (d =
                    (l = (o = this._def).errorMap) === null || l === void 0
                      ? void 0
                      : l.call(o, n, r).message) !== null && d !== void 0
                    ? d
                    : r.defaultError;
                return n.code === "unrecognized_keys"
                  ? {
                      message:
                        (m = he.errToObj(e).message) !== null && m !== void 0
                          ? m
                          : v,
                    }
                  : { message: v };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new Te({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new Te({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e) {
    return new Te({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...e }),
    });
  }
  merge(e) {
    return new Te({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ua.mergeShapes(this._def.shape(), e._def.shape()),
      typeName: ne.ZodObject,
    });
  }
  setKey(e, n) {
    return this.augment({ [e]: n });
  }
  catchall(e) {
    return new Te({ ...this._def, catchall: e });
  }
  pick(e) {
    let n = {};
    return (
      xe.objectKeys(e).forEach((r) => {
        e[r] && this.shape[r] && (n[r] = this.shape[r]);
      }),
      new Te({ ...this._def, shape: () => n })
    );
  }
  omit(e) {
    let n = {};
    return (
      xe.objectKeys(this.shape).forEach((r) => {
        e[r] || (n[r] = this.shape[r]);
      }),
      new Te({ ...this._def, shape: () => n })
    );
  }
  deepPartial() {
    return Bn(this);
  }
  partial(e) {
    let n = {};
    return (
      xe.objectKeys(this.shape).forEach((r) => {
        let o = this.shape[r];
        e && !e[r] ? (n[r] = o) : (n[r] = o.optional());
      }),
      new Te({ ...this._def, shape: () => n })
    );
  }
  required(e) {
    let n = {};
    return (
      xe.objectKeys(this.shape).forEach((r) => {
        if (e && !e[r]) n[r] = this.shape[r];
        else {
          let l = this.shape[r];
          for (; l instanceof wt; ) l = l._def.innerType;
          n[r] = l;
        }
      }),
      new Te({ ...this._def, shape: () => n })
    );
  }
  keyof() {
    return oc(xe.objectKeys(this.shape));
  }
};
Te.create = (t, e) =>
  new Te({
    shape: () => t,
    unknownKeys: "strip",
    catchall: kt.create(),
    typeName: ne.ZodObject,
    ...de(e),
  });
Te.strictCreate = (t, e) =>
  new Te({
    shape: () => t,
    unknownKeys: "strict",
    catchall: kt.create(),
    typeName: ne.ZodObject,
    ...de(e),
  });
Te.lazycreate = (t, e) =>
  new Te({
    shape: t,
    unknownKeys: "strip",
    catchall: kt.create(),
    typeName: ne.ZodObject,
    ...de(e),
  });
var Or = class extends le {
  _parse(e) {
    let { ctx: n } = this._processInputParams(e),
      r = this._def.options;
    function o(l) {
      for (let m of l) if (m.result.status === "valid") return m.result;
      for (let m of l)
        if (m.result.status === "dirty")
          return n.common.issues.push(...m.ctx.common.issues), m.result;
      let d = l.map((m) => new bt(m.ctx.common.issues));
      return Y(n, { code: W.invalid_union, unionErrors: d }), oe;
    }
    if (n.common.async)
      return Promise.all(
        r.map(async (l) => {
          let d = { ...n, common: { ...n.common, issues: [] }, parent: null };
          return {
            result: await l._parseAsync({
              data: n.data,
              path: n.path,
              parent: d,
            }),
            ctx: d,
          };
        })
      ).then(o);
    {
      let l,
        d = [];
      for (let v of r) {
        let w = { ...n, common: { ...n.common, issues: [] }, parent: null },
          S = v._parseSync({ data: n.data, path: n.path, parent: w });
        if (S.status === "valid") return S;
        S.status === "dirty" && !l && (l = { result: S, ctx: w }),
          w.common.issues.length && d.push(w.common.issues);
      }
      if (l) return n.common.issues.push(...l.ctx.common.issues), l.result;
      let m = d.map((v) => new bt(v));
      return Y(n, { code: W.invalid_union, unionErrors: m }), oe;
    }
  }
  get options() {
    return this._def.options;
  }
};
Or.create = (t, e) => new Or({ options: t, typeName: ne.ZodUnion, ...de(e) });
var pi = (t) =>
    t instanceof Rr
      ? pi(t.schema)
      : t instanceof at
      ? pi(t.innerType())
      : t instanceof Pr
      ? [t.value]
      : t instanceof Nt
      ? t.options
      : t instanceof Ir
      ? Object.keys(t.enum)
      : t instanceof jr
      ? pi(t._def.innerType)
      : t instanceof Nr
      ? [void 0]
      : t instanceof Mr
      ? [null]
      : null,
  rn = class extends le {
    _parse(e) {
      let { ctx: n } = this._processInputParams(e);
      if (n.parsedType !== J.object)
        return (
          Y(n, {
            code: W.invalid_type,
            expected: J.object,
            received: n.parsedType,
          }),
          oe
        );
      let r = this.discriminator,
        o = n.data[r],
        l = this.optionsMap.get(o);
      return l
        ? n.common.async
          ? l._parseAsync({ data: n.data, path: n.path, parent: n })
          : l._parseSync({ data: n.data, path: n.path, parent: n })
        : (Y(n, {
            code: W.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [r],
          }),
          oe);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(e, n, r) {
      let o = new Map();
      for (let l of n) {
        let d = pi(l.shape[e]);
        if (!d)
          throw new Error(
            `A discriminator value for key \`${e}\` could not be extracted from all schema options`
          );
        for (let m of d) {
          if (o.has(m))
            throw new Error(
              `Discriminator property ${String(e)} has duplicate value ${String(
                m
              )}`
            );
          o.set(m, l);
        }
      }
      return new rn({
        typeName: ne.ZodDiscriminatedUnion,
        discriminator: e,
        options: n,
        optionsMap: o,
        ...de(r),
      });
    }
  };
function us(t, e) {
  let n = rr(t),
    r = rr(e);
  if (t === e) return { valid: !0, data: t };
  if (n === J.object && r === J.object) {
    let o = xe.objectKeys(e),
      l = xe.objectKeys(t).filter((m) => o.indexOf(m) !== -1),
      d = { ...t, ...e };
    for (let m of l) {
      let v = us(t[m], e[m]);
      if (!v.valid) return { valid: !1 };
      d[m] = v.data;
    }
    return { valid: !0, data: d };
  } else if (n === J.array && r === J.array) {
    if (t.length !== e.length) return { valid: !1 };
    let o = [];
    for (let l = 0; l < t.length; l++) {
      let d = t[l],
        m = e[l],
        v = us(d, m);
      if (!v.valid) return { valid: !1 };
      o.push(v.data);
    }
    return { valid: !0, data: o };
  } else
    return n === J.date && r === J.date && +t == +e
      ? { valid: !0, data: t }
      : { valid: !1 };
}
var _r = class extends le {
  _parse(e) {
    let { status: n, ctx: r } = this._processInputParams(e),
      o = (l, d) => {
        if (fi(l) || fi(d)) return oe;
        let m = us(l.value, d.value);
        return m.valid
          ? ((hi(l) || hi(d)) && n.dirty(), { status: n.value, value: m.data })
          : (Y(r, { code: W.invalid_intersection_types }), oe);
      };
    return r.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          }),
        ]).then(([l, d]) => o(l, d))
      : o(
          this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseSync({ data: r.data, path: r.path, parent: r })
        );
  }
};
_r.create = (t, e, n) =>
  new _r({ left: t, right: e, typeName: ne.ZodIntersection, ...de(n) });
var ft = class extends le {
  _parse(e) {
    let { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== J.array)
      return (
        Y(r, {
          code: W.invalid_type,
          expected: J.array,
          received: r.parsedType,
        }),
        oe
      );
    if (r.data.length < this._def.items.length)
      return (
        Y(r, {
          code: W.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        oe
      );
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      (Y(r, {
        code: W.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      n.dirty());
    let l = [...r.data]
      .map((d, m) => {
        let v = this._def.items[m] || this._def.rest;
        return v ? v._parse(new Ct(r, d, r.path, m)) : null;
      })
      .filter((d) => !!d);
    return r.common.async
      ? Promise.all(l).then((d) => We.mergeArray(n, d))
      : We.mergeArray(n, l);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new ft({ ...this._def, rest: e });
  }
};
ft.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ft({ items: t, typeName: ne.ZodTuple, rest: null, ...de(e) });
};
var zr = class extends le {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: n, ctx: r } = this._processInputParams(e);
      if (r.parsedType !== J.object)
        return (
          Y(r, {
            code: W.invalid_type,
            expected: J.object,
            received: r.parsedType,
          }),
          oe
        );
      let o = [],
        l = this._def.keyType,
        d = this._def.valueType;
      for (let m in r.data)
        o.push({
          key: l._parse(new Ct(r, m, r.path, m)),
          value: d._parse(new Ct(r, r.data[m], r.path, m)),
        });
      return r.common.async
        ? We.mergeObjectAsync(n, o)
        : We.mergeObjectSync(n, o);
    }
    get element() {
      return this._def.valueType;
    }
    static create(e, n, r) {
      return n instanceof le
        ? new zr({ keyType: e, valueType: n, typeName: ne.ZodRecord, ...de(r) })
        : new zr({
            keyType: St.create(),
            valueType: e,
            typeName: ne.ZodRecord,
            ...de(n),
          });
    }
  },
  nn = class extends le {
    _parse(e) {
      let { status: n, ctx: r } = this._processInputParams(e);
      if (r.parsedType !== J.map)
        return (
          Y(r, {
            code: W.invalid_type,
            expected: J.map,
            received: r.parsedType,
          }),
          oe
        );
      let o = this._def.keyType,
        l = this._def.valueType,
        d = [...r.data.entries()].map(([m, v], w) => ({
          key: o._parse(new Ct(r, m, r.path, [w, "key"])),
          value: l._parse(new Ct(r, v, r.path, [w, "value"])),
        }));
      if (r.common.async) {
        let m = new Map();
        return Promise.resolve().then(async () => {
          for (let v of d) {
            let w = await v.key,
              S = await v.value;
            if (w.status === "aborted" || S.status === "aborted") return oe;
            (w.status === "dirty" || S.status === "dirty") && n.dirty(),
              m.set(w.value, S.value);
          }
          return { status: n.value, value: m };
        });
      } else {
        let m = new Map();
        for (let v of d) {
          let w = v.key,
            S = v.value;
          if (w.status === "aborted" || S.status === "aborted") return oe;
          (w.status === "dirty" || S.status === "dirty") && n.dirty(),
            m.set(w.value, S.value);
        }
        return { status: n.value, value: m };
      }
    }
  };
nn.create = (t, e, n) =>
  new nn({ valueType: e, keyType: t, typeName: ne.ZodMap, ...de(n) });
var Vt = class extends le {
  _parse(e) {
    let { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== J.set)
      return (
        Y(r, { code: W.invalid_type, expected: J.set, received: r.parsedType }),
        oe
      );
    let o = this._def;
    o.minSize !== null &&
      r.data.size < o.minSize.value &&
      (Y(r, {
        code: W.too_small,
        minimum: o.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: o.minSize.message,
      }),
      n.dirty()),
      o.maxSize !== null &&
        r.data.size > o.maxSize.value &&
        (Y(r, {
          code: W.too_big,
          maximum: o.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: o.maxSize.message,
        }),
        n.dirty());
    let l = this._def.valueType;
    function d(v) {
      let w = new Set();
      for (let S of v) {
        if (S.status === "aborted") return oe;
        S.status === "dirty" && n.dirty(), w.add(S.value);
      }
      return { status: n.value, value: w };
    }
    let m = [...r.data.values()].map((v, w) =>
      l._parse(new Ct(r, v, r.path, w))
    );
    return r.common.async ? Promise.all(m).then((v) => d(v)) : d(m);
  }
  min(e, n) {
    return new Vt({
      ...this._def,
      minSize: { value: e, message: he.toString(n) },
    });
  }
  max(e, n) {
    return new Vt({
      ...this._def,
      maxSize: { value: e, message: he.toString(n) },
    });
  }
  size(e, n) {
    return this.min(e, n).max(e, n);
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
Vt.create = (t, e) =>
  new Vt({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: ne.ZodSet,
    ...de(e),
  });
var nr = class extends le {
    constructor() {
      super(...arguments), (this.validate = this.implement);
    }
    _parse(e) {
      let { ctx: n } = this._processInputParams(e);
      if (n.parsedType !== J.function)
        return (
          Y(n, {
            code: W.invalid_type,
            expected: J.function,
            received: n.parsedType,
          }),
          oe
        );
      function r(m, v) {
        return ia({
          data: m,
          path: n.path,
          errorMaps: [
            n.common.contextualErrorMap,
            n.schemaErrorMap,
            aa(),
            Tn,
          ].filter((w) => !!w),
          issueData: { code: W.invalid_arguments, argumentsError: v },
        });
      }
      function o(m, v) {
        return ia({
          data: m,
          path: n.path,
          errorMaps: [
            n.common.contextualErrorMap,
            n.schemaErrorMap,
            aa(),
            Tn,
          ].filter((w) => !!w),
          issueData: { code: W.invalid_return_type, returnTypeError: v },
        });
      }
      let l = { errorMap: n.common.contextualErrorMap },
        d = n.data;
      return this._def.returns instanceof ir
        ? Ze(async (...m) => {
            let v = new bt([]),
              w = await this._def.args.parseAsync(m, l).catch((N) => {
                throw (v.addIssue(r(m, N)), v);
              }),
              S = await d(...w);
            return await this._def.returns._def.type
              .parseAsync(S, l)
              .catch((N) => {
                throw (v.addIssue(o(S, N)), v);
              });
          })
        : Ze((...m) => {
            let v = this._def.args.safeParse(m, l);
            if (!v.success) throw new bt([r(m, v.error)]);
            let w = d(...v.data),
              S = this._def.returns.safeParse(w, l);
            if (!S.success) throw new bt([o(w, S.error)]);
            return S.data;
          });
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...e) {
      return new nr({ ...this._def, args: ft.create(e).rest(Ht.create()) });
    }
    returns(e) {
      return new nr({ ...this._def, returns: e });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(e, n, r) {
      return new nr({
        args: e || ft.create([]).rest(Ht.create()),
        returns: n || Ht.create(),
        typeName: ne.ZodFunction,
        ...de(r),
      });
    }
  },
  Rr = class extends le {
    get schema() {
      return this._def.getter();
    }
    _parse(e) {
      let { ctx: n } = this._processInputParams(e);
      return this._def
        .getter()
        ._parse({ data: n.data, path: n.path, parent: n });
    }
  };
Rr.create = (t, e) => new Rr({ getter: t, typeName: ne.ZodLazy, ...de(e) });
var Pr = class extends le {
  _parse(e) {
    if (e.data !== this._def.value) {
      let n = this._getOrReturnCtx(e);
      return (
        Y(n, {
          received: n.data,
          code: W.invalid_literal,
          expected: this._def.value,
        }),
        oe
      );
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
};
Pr.create = (t, e) => new Pr({ value: t, typeName: ne.ZodLiteral, ...de(e) });
function oc(t, e) {
  return new Nt({ values: t, typeName: ne.ZodEnum, ...de(e) });
}
var Nt = class extends le {
  _parse(e) {
    if (typeof e.data != "string") {
      let n = this._getOrReturnCtx(e),
        r = this._def.values;
      return (
        Y(n, {
          expected: xe.joinValues(r),
          received: n.parsedType,
          code: W.invalid_type,
        }),
        oe
      );
    }
    if (this._def.values.indexOf(e.data) === -1) {
      let n = this._getOrReturnCtx(e),
        r = this._def.values;
      return (
        Y(n, { received: n.data, code: W.invalid_enum_value, options: r }), oe
      );
    }
    return Ze(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let n of this._def.values) e[n] = n;
    return e;
  }
  get Values() {
    let e = {};
    for (let n of this._def.values) e[n] = n;
    return e;
  }
  get Enum() {
    let e = {};
    for (let n of this._def.values) e[n] = n;
    return e;
  }
  extract(e) {
    return Nt.create(e);
  }
  exclude(e) {
    return Nt.create(this.options.filter((n) => !e.includes(n)));
  }
};
Nt.create = oc;
var Ir = class extends le {
  _parse(e) {
    let n = xe.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(e);
    if (r.parsedType !== J.string && r.parsedType !== J.number) {
      let o = xe.objectValues(n);
      return (
        Y(r, {
          expected: xe.joinValues(o),
          received: r.parsedType,
          code: W.invalid_type,
        }),
        oe
      );
    }
    if (n.indexOf(e.data) === -1) {
      let o = xe.objectValues(n);
      return (
        Y(r, { received: r.data, code: W.invalid_enum_value, options: o }), oe
      );
    }
    return Ze(e.data);
  }
  get enum() {
    return this._def.values;
  }
};
Ir.create = (t, e) =>
  new Ir({ values: t, typeName: ne.ZodNativeEnum, ...de(e) });
var ir = class extends le {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    let { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== J.promise && n.common.async === !1)
      return (
        Y(n, {
          code: W.invalid_type,
          expected: J.promise,
          received: n.parsedType,
        }),
        oe
      );
    let r = n.parsedType === J.promise ? n.data : Promise.resolve(n.data);
    return Ze(
      r.then((o) =>
        this._def.type.parseAsync(o, {
          path: n.path,
          errorMap: n.common.contextualErrorMap,
        })
      )
    );
  }
};
ir.create = (t, e) => new ir({ type: t, typeName: ne.ZodPromise, ...de(e) });
var at = class extends le {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ne.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    let { status: n, ctx: r } = this._processInputParams(e),
      o = this._def.effect || null;
    if (o.type === "preprocess") {
      let d = o.transform(r.data);
      return r.common.async
        ? Promise.resolve(d).then((m) =>
            this._def.schema._parseAsync({ data: m, path: r.path, parent: r })
          )
        : this._def.schema._parseSync({ data: d, path: r.path, parent: r });
    }
    let l = {
      addIssue: (d) => {
        Y(r, d), d.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      },
    };
    if (((l.addIssue = l.addIssue.bind(l)), o.type === "refinement")) {
      let d = (m) => {
        let v = o.refinement(m, l);
        if (r.common.async) return Promise.resolve(v);
        if (v instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return m;
      };
      if (r.common.async === !1) {
        let m = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return m.status === "aborted"
          ? oe
          : (m.status === "dirty" && n.dirty(),
            d(m.value),
            { status: n.value, value: m.value });
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((m) =>
            m.status === "aborted"
              ? oe
              : (m.status === "dirty" && n.dirty(),
                d(m.value).then(() => ({ status: n.value, value: m.value })))
          );
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        let d = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        if (!sa(d)) return d;
        let m = o.transform(d.value, l);
        if (m instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: n.value, value: m };
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((d) =>
            sa(d)
              ? Promise.resolve(o.transform(d.value, l)).then((m) => ({
                  status: n.value,
                  value: m,
                }))
              : d
          );
    xe.assertNever(o);
  }
};
at.create = (t, e, n) =>
  new at({ schema: t, typeName: ne.ZodEffects, effect: e, ...de(n) });
at.createWithPreprocess = (t, e, n) =>
  new at({
    schema: e,
    effect: { type: "preprocess", transform: t },
    typeName: ne.ZodEffects,
    ...de(n),
  });
var wt = class extends le {
  _parse(e) {
    return this._getType(e) === J.undefined
      ? Ze(void 0)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
wt.create = (t, e) =>
  new wt({ innerType: t, typeName: ne.ZodOptional, ...de(e) });
var Wt = class extends le {
  _parse(e) {
    return this._getType(e) === J.null
      ? Ze(null)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Wt.create = (t, e) =>
  new Wt({ innerType: t, typeName: ne.ZodNullable, ...de(e) });
var jr = class extends le {
  _parse(e) {
    let { ctx: n } = this._processInputParams(e),
      r = n.data;
    return (
      n.parsedType === J.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
};
jr.create = (t, e) =>
  new jr({
    innerType: t,
    typeName: ne.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...de(e),
  });
var an = class extends le {
  _parse(e) {
    let { ctx: n } = this._processInputParams(e),
      r = this._def.innerType._parse({
        data: n.data,
        path: n.path,
        parent: { ...n, common: { ...n.common, issues: [] } },
      });
    return oa(r)
      ? r.then((o) => ({
          status: "valid",
          value: o.status === "valid" ? o.value : this._def.catchValue(),
        }))
      : {
          status: "valid",
          value: r.status === "valid" ? r.value : this._def.catchValue(),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
an.create = (t, e) =>
  new an({
    innerType: t,
    typeName: ne.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...de(e),
  });
var sn = class extends le {
  _parse(e) {
    if (this._getType(e) !== J.nan) {
      let r = this._getOrReturnCtx(e);
      return (
        Y(r, { code: W.invalid_type, expected: J.nan, received: r.parsedType }),
        oe
      );
    }
    return { status: "valid", value: e.data };
  }
};
sn.create = (t) => new sn({ typeName: ne.ZodNaN, ...de(t) });
var uc = Symbol("zod_brand"),
  la = class extends le {
    _parse(e) {
      let { ctx: n } = this._processInputParams(e),
        r = n.data;
      return this._def.type._parse({ data: r, path: n.path, parent: n });
    }
    unwrap() {
      return this._def.type;
    }
  },
  Lr = class extends le {
    _parse(e) {
      let { status: n, ctx: r } = this._processInputParams(e);
      if (r.common.async)
        return (async () => {
          let l = await this._def.in._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          });
          return l.status === "aborted"
            ? oe
            : l.status === "dirty"
            ? (n.dirty(), cs(l.value))
            : this._def.out._parseAsync({
                data: l.value,
                path: r.path,
                parent: r,
              });
        })();
      {
        let o = this._def.in._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return o.status === "aborted"
          ? oe
          : o.status === "dirty"
          ? (n.dirty(), { status: "dirty", value: o.value })
          : this._def.out._parseSync({
              data: o.value,
              path: r.path,
              parent: r,
            });
      }
    }
    static create(e, n) {
      return new Lr({ in: e, out: n, typeName: ne.ZodPipeline });
    }
  },
  ds = (t, e = {}, n) =>
    t
      ? ar.create().superRefine((r, o) => {
          if (!t(r)) {
            let l = typeof e == "function" ? e(r) : e,
              d = typeof l == "string" ? { message: l } : l;
            o.addIssue({ code: "custom", ...d, fatal: n });
          }
        })
      : ar.create(),
  lc = { object: Te.lazycreate },
  ne;
(function (t) {
  (t.ZodString = "ZodString"),
    (t.ZodNumber = "ZodNumber"),
    (t.ZodNaN = "ZodNaN"),
    (t.ZodBigInt = "ZodBigInt"),
    (t.ZodBoolean = "ZodBoolean"),
    (t.ZodDate = "ZodDate"),
    (t.ZodSymbol = "ZodSymbol"),
    (t.ZodUndefined = "ZodUndefined"),
    (t.ZodNull = "ZodNull"),
    (t.ZodAny = "ZodAny"),
    (t.ZodUnknown = "ZodUnknown"),
    (t.ZodNever = "ZodNever"),
    (t.ZodVoid = "ZodVoid"),
    (t.ZodArray = "ZodArray"),
    (t.ZodObject = "ZodObject"),
    (t.ZodUnion = "ZodUnion"),
    (t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (t.ZodIntersection = "ZodIntersection"),
    (t.ZodTuple = "ZodTuple"),
    (t.ZodRecord = "ZodRecord"),
    (t.ZodMap = "ZodMap"),
    (t.ZodSet = "ZodSet"),
    (t.ZodFunction = "ZodFunction"),
    (t.ZodLazy = "ZodLazy"),
    (t.ZodLiteral = "ZodLiteral"),
    (t.ZodEnum = "ZodEnum"),
    (t.ZodEffects = "ZodEffects"),
    (t.ZodNativeEnum = "ZodNativeEnum"),
    (t.ZodOptional = "ZodOptional"),
    (t.ZodNullable = "ZodNullable"),
    (t.ZodDefault = "ZodDefault"),
    (t.ZodCatch = "ZodCatch"),
    (t.ZodPromise = "ZodPromise"),
    (t.ZodBranded = "ZodBranded"),
    (t.ZodPipeline = "ZodPipeline");
})(ne || (ne = {}));
var cc = (t, e = { message: `Input not instance of ${t.name}` }) =>
    ds((n) => n instanceof t, e, !0),
  ps = St.create,
  fs = Tt.create,
  dc = sn.create,
  pc = Br.create,
  hs = Tr.create,
  fc = Ut.create,
  hc = en.create,
  mc = Nr.create,
  gc = Mr.create,
  vc = ar.create,
  yc = Ht.create,
  Dc = kt.create,
  xc = tn.create,
  bc = nt.create,
  wc = Te.create,
  Cc = Te.strictCreate,
  Sc = Or.create,
  kc = rn.create,
  Ec = _r.create,
  Ac = ft.create,
  Fc = zr.create,
  Bc = nn.create,
  Tc = Vt.create,
  Nc = nr.create,
  Mc = Rr.create,
  Oc = Pr.create,
  _c = Nt.create,
  zc = Ir.create,
  Rc = ir.create,
  ls = at.create,
  Pc = wt.create,
  Ic = Wt.create,
  jc = at.createWithPreprocess,
  Lc = Lr.create,
  $c = () => ps().optional(),
  qc = () => fs().optional(),
  Hc = () => hs().optional(),
  Uc = {
    string: (t) => St.create({ ...t, coerce: !0 }),
    number: (t) => Tt.create({ ...t, coerce: !0 }),
    boolean: (t) => Tr.create({ ...t, coerce: !0 }),
    bigint: (t) => Br.create({ ...t, coerce: !0 }),
    date: (t) => Ut.create({ ...t, coerce: !0 }),
  },
  Vc = oe,
  Am = Object.freeze({
    __proto__: null,
    defaultErrorMap: Tn,
    setErrorMap: ic,
    getErrorMap: aa,
    makeIssue: ia,
    EMPTY_PATH: sc,
    addIssueToContext: Y,
    ParseStatus: We,
    INVALID: oe,
    DIRTY: cs,
    OK: Ze,
    isAborted: fi,
    isDirty: hi,
    isValid: sa,
    isAsync: oa,
    get util() {
      return xe;
    },
    ZodParsedType: J,
    getParsedType: rr,
    ZodType: le,
    ZodString: St,
    ZodNumber: Tt,
    ZodBigInt: Br,
    ZodBoolean: Tr,
    ZodDate: Ut,
    ZodSymbol: en,
    ZodUndefined: Nr,
    ZodNull: Mr,
    ZodAny: ar,
    ZodUnknown: Ht,
    ZodNever: kt,
    ZodVoid: tn,
    ZodArray: nt,
    get objectUtil() {
      return ua;
    },
    ZodObject: Te,
    ZodUnion: Or,
    ZodDiscriminatedUnion: rn,
    ZodIntersection: _r,
    ZodTuple: ft,
    ZodRecord: zr,
    ZodMap: nn,
    ZodSet: Vt,
    ZodFunction: nr,
    ZodLazy: Rr,
    ZodLiteral: Pr,
    ZodEnum: Nt,
    ZodNativeEnum: Ir,
    ZodPromise: ir,
    ZodEffects: at,
    ZodTransformer: at,
    ZodOptional: wt,
    ZodNullable: Wt,
    ZodDefault: jr,
    ZodCatch: an,
    ZodNaN: sn,
    BRAND: uc,
    ZodBranded: la,
    ZodPipeline: Lr,
    custom: ds,
    Schema: le,
    ZodSchema: le,
    late: lc,
    get ZodFirstPartyTypeKind() {
      return ne;
    },
    coerce: Uc,
    any: vc,
    array: bc,
    bigint: pc,
    boolean: hs,
    date: fc,
    discriminatedUnion: kc,
    effect: ls,
    enum: _c,
    function: Nc,
    instanceof: cc,
    intersection: Ec,
    lazy: Mc,
    literal: Oc,
    map: Bc,
    nan: dc,
    nativeEnum: zc,
    never: Dc,
    null: gc,
    nullable: Ic,
    number: fs,
    object: wc,
    oboolean: Hc,
    onumber: qc,
    optional: Pc,
    ostring: $c,
    pipeline: Lc,
    preprocess: jc,
    promise: Rc,
    record: Fc,
    set: Tc,
    strictObject: Cc,
    string: ps,
    symbol: hc,
    transformer: ls,
    tuple: Ac,
    undefined: mc,
    union: Sc,
    unknown: yc,
    void: xc,
    NEVER: Vc,
    ZodIssueCode: W,
    quotelessJson: nc,
    ZodError: bt,
  });
var mi = Qt(wd(), 1);
var Cd = be.object({
  title: be.string(),
  date: be
    .union([be.string(), be.number(), be.date()])
    .transform((t) => new Date(t)),
  description: be.string().optional(),
  customData: be.string().optional(),
  draft: be.boolean().optional(),
});
function ks(t, e) {
  let n = t.replace(/\/index.html$/, "");
  return (
    (n = n.replace(/\/1\/?$/, "")),
    B4(t) || (n = n.replace(/(\/+)?$/, "/")),
    (n = n.replace(/\/+/g, "/")),
    new URL(n, e)
  );
}
function Sd(t) {
  try {
    return new URL(t), !0;
  } catch {}
  return !1;
}
function B4(t) {
  let e = t.lastIndexOf("."),
    n = t.lastIndexOf("/");
  return e > n ? t.slice(e + 1) : "";
}
var T4 = (t) => t.join("."),
  Es = (t, e) => {
    if (t.code === "invalid_type") {
      let n = JSON.stringify(T4(t.path));
      return t.received === "undefined"
        ? { message: `${n} is required.` }
        : { message: `${n} should be ${t.expected}, not ${t.received}.` };
    }
    return { message: e.defaultError };
  };
var kd = Cd.extend({ link: be.string(), content: be.string().optional() }),
  N4 = be.record(be.function().returns(be.promise(be.any()))),
  M4 = be.object({
    title: be.string(),
    description: be.string(),
    site: be.preprocess(
      (t) => (t instanceof URL ? t.href : t),
      be.string().url()
    ),
    items: be
      .array(kd)
      .or(N4)
      .transform((t) =>
        Array.isArray(t)
          ? t
          : (console.warn(
              Ln(
                "[RSS] Passing a glob result directly has been deprecated. Please migrate to the `pagesGlobToRssItems()` helper: https://docs.astro.build/en/guides/rss/"
              )
            ),
            _4(t))
      ),
    xmlns: be.record(be.string()).optional(),
    drafts: be.boolean().default(!1),
    stylesheet: be.union([be.string(), be.boolean()]).optional(),
    customData: be.string().optional(),
  });
async function Ed(t) {
  let e = await O4(t);
  return { body: await z4(e) };
}
async function O4(t) {
  let e = await M4.safeParseAsync(t, { errorMap: Es });
  if (e.success) return e.data;
  throw new Error(
    [
      "[RSS] Invalid or missing options:",
      ...e.error.errors.map((r) => `${r.message} (${r.path.join(".")})`),
    ].join(`
`)
  );
}
function _4(t) {
  return Promise.all(
    Object.entries(t).map(async ([e, n]) => {
      let { url: r, frontmatter: o } = await n();
      if (r == null)
        throw new Error(
          "[RSS] You can only glob entries within 'src/pages/' when passing import.meta.glob() directly. Consider mapping the result to an array of RSSFeedItems. See the RSS docs for usage examples: https://docs.astro.build/en/guides/rss/#2-list-of-rss-feed-objects"
        );
      let l = kd.safeParse({ ...o, link: r }, { errorMap: Es });
      if (l.success) return l.data;
      let d = new Error(
        [
          `[RSS] ${e} has invalid or missing frontmatter.
Fix the following properties:`,
          ...l.error.errors.map((m) => m.message),
        ].join(`
`)
      );
      throw ((d.file = e), d);
    })
  );
}
async function z4(t) {
  var e;
  let { site: n } = t,
    r = t.drafts ? t.items : t.items.filter((m) => !m.draft),
    o = { ignoreAttributes: !1 },
    l = new mi.XMLParser(o),
    d = { "?xml": { "@_version": "1.0", "@_encoding": "UTF-8" } };
  if (typeof t.stylesheet == "string") {
    let m = /\.xsl$/i.test(t.stylesheet);
    d["?xml-stylesheet"] = {
      "@_href": t.stylesheet,
      ...(m && { "@_type": "text/xsl" }),
    };
  }
  if (((d.rss = { "@_version": "2.0" }), r.find((m) => m.content))) {
    let m = "http://purl.org/rss/1.0/modules/content/";
    (d.rss["@_xmlns:content"] = m),
      ((e = t.xmlns) == null ? void 0 : e.content) &&
        t.xmlns.content === m &&
        delete t.xmlns.content;
  }
  if (t.xmlns)
    for (let [m, v] of Object.entries(t.xmlns)) d.rss[`@_xmlns:${m}`] = v;
  return (
    (d.rss.channel = {
      title: t.title,
      description: t.description,
      link: ks(n).href,
    }),
    typeof t.customData == "string" &&
      Object.assign(
        d.rss.channel,
        l.parse(`<channel>${t.customData}</channel>`).channel
      ),
    (d.rss.channel.item = r.map((m) => {
      let v = Sd(m.link) ? m.link : ks(m.link, n).href,
        w = { title: m.title, link: v, guid: v };
      return (
        m.description && (w.description = m.description),
        m.pubDate && (w.pubDate = m.pubDate.toUTCString()),
        typeof m.content == "string" && (w["content:encoded"] = m.content),
        typeof m.customData == "string" &&
          Object.assign(w, l.parse(`<item>${m.customData}</item>`).item),
        w
      );
    })),
    new mi.XMLBuilder(o).build(d)
  );
}
var Ad = Qt(Fs(), 1),
  R4 = jt(),
  gi = It(async (t, e, n) => {
    let r = t.createAstro(R4, e, n);
    r.self = gi;
    let { title: o } = r.props;
    return pt`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${Qn(r.generator, "content")}>
		<title>${o}</title>
		<link rel="stylesheet" href="/katex.min.css" crossorigin="anonymous">
	${ul(t)}</head>
	<body>
		${er(t, n.default)}
	</body></html>`;
  }, "/Users/baikang.li/projects/blog-next/blog-astro/src/layouts/Layout.astro"),
  P4 =
    "/Users/baikang.li/projects/blog-next/blog-astro/src/layouts/Layout.astro",
  I4 = void 0,
  j4 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: gi, file: P4, url: I4 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  L4 = jt(),
  or = It(async (t, e, n) => {
    let r = t.createAstro(L4, e, n);
    r.self = or;
    let { href: o, title: l, body: d } = r.props;
    return pt`${Ar(t)}<li class="link-card astro-DOHJNAO5">
	<a${Qn(o, "href")} class="astro-DOHJNAO5">
		<h2 class="astro-DOHJNAO5">
			${l}
			<span class="astro-DOHJNAO5">&rarr;</span>
		</h2>
		<p class="astro-DOHJNAO5">
			${d}
		</p>
	</a>
</li>`;
  }, "/Users/baikang.li/projects/blog-next/blog-astro/src/components/Card.astro"),
  $4 = jt(),
  Fd = It(async (t, e, n) => {
    let r = t.createAstro($4, e, n);
    return (
      (r.self = Fd),
      Qr("en"),
      pt`${Je(
        t,
        "Layout",
        gi,
        { title: "Welcome to Astro.", class: "astro-J7PV25F6" },
        {
          default: (o) => pt`${Ar(o)}<main class="astro-J7PV25F6">
		${Ve.language}
		<h1 class="astro-J7PV25F6">Welcome to <span class="text-gradient astro-J7PV25F6">Astro</span></h1>
		<p class="instructions astro-J7PV25F6">
			To get started, open the directory <code class="astro-J7PV25F6">src/pages</code> in your project.<br class="astro-J7PV25F6">
			<strong class="astro-J7PV25F6">Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
		</p>

		<ul role="list" class="link-card-grid astro-J7PV25F6">
			${Je(o, "Card", or, {
        href: "https://docs.astro.build/",
        title: "Documentation",
        body: "Learn how Astro works and explore the official API docs.",
        class: "astro-J7PV25F6",
      })}
			${Je(o, "Card", or, {
        href: "https://astro.build/integrations/",
        title: "Integrations",
        body: "Supercharge your project with new frameworks and libraries.",
        class: "astro-J7PV25F6",
      })}
			${Je(o, "Card", or, {
        href: "https://astro.build/themes/",
        title: "Themes",
        body: "Explore a galaxy of community-built starter themes.",
        class: "astro-J7PV25F6",
      })}
			${Je(o, "Card", or, {
        href: "https://astro.build/chat/",
        title: "Community",
        body: "Come say hi to our amazing Discord community. \u2764\uFE0F",
        class: "astro-J7PV25F6",
      })}
		</ul>
	</main>`,
        }
      )}`
    );
  }, "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/index.astro"),
  q4 = "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/index.astro",
  H4 = "",
  Bd = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Fd, file: q4, url: H4 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function U4(t) {
  return Ed({
    title: "Buzz's Blog",
    description: "A humble Astronaut's guide to the stars",
    site: t.site,
    items: [],
    customData: "<language>en-us</language>",
  });
}
var Td = Object.freeze(
    Object.defineProperty({ __proto__: null, get: U4 }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  V4 = jt();
function W4() {
  return [
    { params: { slug: 3 } },
    { params: { slug: 2 } },
    { params: { slug: 1 } },
  ];
}
var vi = It(async (t, e, n) => {
    let r = t.createAstro(V4, e, n);
    (r.self = vi), Qr("en");
    let { slug: o } = r.params,
      { slug1: l } = r.props;
    return pt`${Ar(t)}<p>Static</p>

<h1> ${o} params</h1>

<h1>${l} porps</h1>`;
  }, "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/posts/[slug].astro"),
  G4 =
    "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/posts/[slug].astro",
  Z4 = "/posts/[slug]",
  Nd = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: vi, file: G4, getStaticPaths: W4, url: Z4 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  J4 = jt(),
  Md = It(async (t, e, n) => {
    let r = t.createAstro(J4, e, n);
    return (
      (r.self = Md),
      Qr("en"),
      pt`${Je(t, "Slag", vi, { slug1: 1 })}

Index`
    );
  }, "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/posts/index.astro"),
  X4 =
    "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/posts/index.astro",
  K4 = "/posts",
  Od = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Md, file: X4, url: K4 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Y4 = jt(),
  _d = It(async (t, e, n) => {
    let r = t.createAstro(Y4, e, n);
    r.self = _d;
    let { formula: o = "" } = r.props,
      l = Ad.default.renderToString(o, { throwOnError: !0 });
    return pt`${Ar(t)}<div class="text-center">
	<span class="">${Cn(l)}</span>
</div>

<link rel="stylesheet" href="/katex.min.css" crossorigin="anonymous">`;
  }, "/Users/baikang.li/projects/blog-next/blog-astro/src/components/Latex.astro"),
  Q4 = async function ({ children: t }) {
    let e = (await Promise.resolve().then(() => j4)).default,
      { layout: n, ...r } = Ms;
    return (
      (r.file = Ts),
      (r.url = Bs),
      Er(e, {
        file: Ts,
        url: Bs,
        content: r,
        frontmatter: r,
        headings: Os(),
        "server:root": !0,
        children: t,
      })
    );
  },
  Ms = { layout: "../layouts/Layout.astro" };
function Os() {
  return [{ depth: 1, slug: "hello-world", text: "Hello World" }];
}
function e2(t) {
  let e = Object.assign({ h1: "h1" }, t.components);
  return Er(ii, {
    children: [
      Er(e.h1, { id: "hello-world", children: "Hello World" }),
      `
`,
      Er(_d, { formula: "I = \\int_0^{2\\pi} \\sin(x)\\,dx" }),
    ],
  });
}
function zd(t = {}) {
  return Er(Q4, { ...t, children: Er(e2, { ...t }) });
}
K0(Os, "astro:jsx");
K0(zd, "astro:jsx");
var Bs = "/test",
  Ts = "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/test.mdx",
  Ns = (t = {}) => zd({ ...t, components: { Fragment: ii, ...t.components } });
Ns[Symbol.for("astro.needsHeadRendering")] = !Boolean(Ms.layout);
var Rd = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Content: Ns,
        default: Ns,
        file: Ts,
        frontmatter: Ms,
        getHeadings: Os,
        url: Bs,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  t2 = jt(),
  Pd = It(async (t, e, n) => {
    let r = t.createAstro(t2, e, n);
    return (
      (r.self = Pd),
      Qr("cn"),
      pt`${Je(
        t,
        "Layout",
        gi,
        { title: "Welcome to Astro.", class: "astro-2SK34I4W" },
        {
          default: (o) => pt`${Ar(o)}<main class="astro-2SK34I4W">
		${Ve.language}
		<h1 class="astro-2SK34I4W">Welcome to <span class="text-gradient astro-2SK34I4W">Astro</span></h1>
		<p class="instructions astro-2SK34I4W">
			To get started, open the directory <code class="astro-2SK34I4W">src/pages</code> in your project.<br class="astro-2SK34I4W">
			<strong class="astro-2SK34I4W">Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
		</p>

		<ul role="list" class="link-card-grid astro-2SK34I4W">
			${Je(o, "Card", or, {
        href: "https://docs.astro.build/",
        title: "Documentation",
        body: "Learn how Astro works and explore the official API docs.",
        class: "astro-2SK34I4W",
      })}
			${Je(o, "Card", or, {
        href: "https://astro.build/integrations/",
        title: "Integrations",
        body: "Supercharge your project with new frameworks and libraries.",
        class: "astro-2SK34I4W",
      })}
			${Je(o, "Card", or, {
        href: "https://astro.build/themes/",
        title: "Themes",
        body: "Explore a galaxy of community-built starter themes.",
        class: "astro-2SK34I4W",
      })}
			${Je(o, "Card", or, {
        href: "https://astro.build/chat/",
        title: "Community",
        body: "Come say hi to our amazing Discord community. \u2764\uFE0F",
        class: "astro-2SK34I4W",
      })}
		</ul>
	</main>`,
        }
      )}`
    );
  }, "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/cn/index.astro"),
  r2 =
    "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/cn/index.astro",
  n2 = "/cn",
  Id = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Pd, file: r2, url: n2 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  a2 = jt(),
  jd = It(async (t, e, n) => {
    let r = t.createAstro(a2, e, n);
    return (
      (r.self = jd),
      Qr("cn"),
      pt`${Je(t, "Slag", vi, { slug1: 1 })}

Index`
    );
  }, "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/cn/posts/index.astro"),
  i2 =
    "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/cn/posts/index.astro",
  s2 = "/cn/posts",
  Ld = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: jd, file: i2, url: s2 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  o2 = jt();
function u2() {
  return [
    { params: { slug: 3 } },
    { params: { slug: 2 } },
    { params: { slug: 1 } },
  ];
}
var $d = It(async (t, e, n) => {
    let r = t.createAstro(o2, e, n);
    (r.self = $d), Qr("cn");
    let { slug: o } = r.params,
      { slug1: l } = r.props;
    return pt`${Ar(t)}<p>Static</p>

<h1> ${o} params</h1>

<h1>${l} porps</h1>`;
  }, "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/cn/posts/[slug].astro"),
  l2 =
    "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/cn/posts/[slug].astro",
  c2 = "/cn/posts/[slug]",
  qd = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $d, file: l2, getStaticPaths: u2, url: c2 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
var P6 = Qt(d0(), 1),
  I6 = Qt(f0(), 1);
var V6 = Qt(Fs(), 1),
  d2 =
    typeof process == "object" &&
    Object.prototype.toString.call(process) === "[object process]";
function p2() {
  return new Proxy(
    {},
    {
      get: (t, e) => {
        console.warn(
          `Unable to access \`import.meta\0.env.${e.toString()}\` on initialization as the Cloudflare platform only provides the environment variables per request. Please move the environment variable access inside a function that's only called after a request has been received.`
        );
      },
    }
  );
}
d2 || (process.env = p2());
function Vd(t) {
  let e = new ti(t);
  return {
    onRequest: async ({ request: r, next: o, ...l }) => {
      process.env = l.env;
      let { pathname: d } = new URL(r.url);
      if (t.assets.has(d)) return o(r);
      let m = e.match(r, { matchNotFound: !0 });
      if (m) {
        Reflect.set(
          r,
          Symbol.for("astro.clientAddress"),
          r.headers.get("cf-connecting-ip")
        ),
          Reflect.set(r, Symbol.for("runtime"), {
            ...l,
            name: "cloudflare",
            next: o,
          });
        let v = await e.render(r, m);
        if (e.setCookieHeaders)
          for (let w of e.setCookieHeaders(v))
            v.headers.append("Set-Cookie", w);
        return v;
      }
      return new Response(null, { status: 404, statusText: "Not found" });
    },
  };
}
var Hd = Object.freeze(
    Object.defineProperty(
      { __proto__: null, createExports: Vd },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  f2 = new Map([
    ["src/pages/index.astro", Bd],
    ["src/pages/rss.xml.js", Td],
    ["src/pages/posts/index.astro", Od],
    ["src/pages/posts/[slug].astro", Nd],
    ["src/pages/test.mdx", Rd],
    ["src/pages/cn/index.astro", Id],
    ["src/pages/cn/posts/index.astro", Ld],
    ["src/pages/cn/posts/[slug].astro", qd],
  ]),
  h2 = [
    Object.assign(
      {
        name: "astro:jsx",
        serverEntrypoint: "astro/jsx/server.js",
        jsxImportSource: "astro",
      },
      { ssr: Ol }
    ),
  ],
  Wd = Object.assign(
    Tl({
      adapterName: "@astrojs/cloudflare",
      routes: [
        {
          file: "",
          links: [
            "_astro/index.12c5fa68.css",
            "_astro/index.dede0c6e.css",
            "_astro/index.017e34d0.css",
          ],
          scripts: [],
          routeData: {
            route: "/",
            type: "page",
            pattern: "^\\/$",
            segments: [],
            params: [],
            component: "src/pages/index.astro",
            pathname: "/",
            _meta: { trailingSlash: "ignore" },
          },
        },
        {
          file: "",
          links: [],
          scripts: [],
          routeData: {
            route: "/rss.xml",
            type: "endpoint",
            pattern: "^\\/rss\\.xml$",
            segments: [[{ content: "rss.xml", dynamic: !1, spread: !1 }]],
            params: [],
            component: "src/pages/rss.xml.js",
            pathname: "/rss.xml",
            _meta: { trailingSlash: "ignore" },
          },
        },
        {
          file: "",
          links: [],
          scripts: [],
          routeData: {
            route: "/posts",
            type: "page",
            pattern: "^\\/posts\\/?$",
            segments: [[{ content: "posts", dynamic: !1, spread: !1 }]],
            params: [],
            component: "src/pages/posts/index.astro",
            pathname: "/posts",
            _meta: { trailingSlash: "ignore" },
          },
        },
        {
          file: "",
          links: [],
          scripts: [],
          routeData: {
            route: "/posts/[slug]",
            type: "page",
            pattern: "^\\/posts\\/([^/]+?)\\/?$",
            segments: [
              [{ content: "posts", dynamic: !1, spread: !1 }],
              [{ content: "slug", dynamic: !0, spread: !1 }],
            ],
            params: ["slug"],
            component: "src/pages/posts/[slug].astro",
            _meta: { trailingSlash: "ignore" },
          },
        },
        {
          file: "",
          links: ["_astro/index.12c5fa68.css"],
          scripts: [],
          routeData: {
            route: "/test",
            type: "page",
            pattern: "^\\/test\\/?$",
            segments: [[{ content: "test", dynamic: !1, spread: !1 }]],
            params: [],
            component: "src/pages/test.mdx",
            pathname: "/test",
            _meta: { trailingSlash: "ignore" },
          },
        },
        {
          file: "",
          links: [
            "_astro/index.12c5fa68.css",
            "_astro/index.dede0c6e.css",
            "_astro/index.8da5a538.css",
          ],
          scripts: [],
          routeData: {
            route: "/cn",
            type: "page",
            pattern: "^\\/cn\\/?$",
            segments: [[{ content: "cn", dynamic: !1, spread: !1 }]],
            params: [],
            component: "src/pages/cn/index.astro",
            pathname: "/cn",
            _meta: { trailingSlash: "ignore" },
          },
        },
        {
          file: "",
          links: [],
          scripts: [],
          routeData: {
            route: "/cn/posts",
            type: "page",
            pattern: "^\\/cn\\/posts\\/?$",
            segments: [
              [{ content: "cn", dynamic: !1, spread: !1 }],
              [{ content: "posts", dynamic: !1, spread: !1 }],
            ],
            params: [],
            component: "src/pages/cn/posts/index.astro",
            pathname: "/cn/posts",
            _meta: { trailingSlash: "ignore" },
          },
        },
        {
          file: "",
          links: [],
          scripts: [],
          routeData: {
            route: "/cn/posts/[slug]",
            type: "page",
            pattern: "^\\/cn\\/posts\\/([^/]+?)\\/?$",
            segments: [
              [{ content: "cn", dynamic: !1, spread: !1 }],
              [{ content: "posts", dynamic: !1, spread: !1 }],
              [{ content: "slug", dynamic: !0, spread: !1 }],
            ],
            params: ["slug"],
            component: "src/pages/cn/posts/[slug].astro",
            _meta: { trailingSlash: "ignore" },
          },
        },
      ],
      base: "/",
      markdown: {
        drafts: !1,
        syntaxHighlight: "shiki",
        shikiConfig: { langs: [], theme: "dracula", wrap: !1 },
        remarkPlugins: [null, null],
        rehypePlugins: [null],
        remarkRehype: {},
        gfm: !0,
        smartypants: !0,
        contentDir:
          "file:///Users/baikang.li/projects/blog-next/blog-astro/src/content/",
      },
      pageMap: null,
      propagation: [
        [
          "/Users/baikang.li/projects/blog-next/blog-astro/src/layouts/Layout.astro",
          "in-tree",
        ],
        [
          "/Users/baikang.li/projects/blog-next/blog-astro/src/components/Card.astro",
          "in-tree",
        ],
        [
          "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/index.astro",
          "in-tree",
        ],
        [
          "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/rss.xml.js",
          "in-tree",
        ],
        [
          "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/posts/[slug].astro",
          "in-tree",
        ],
        [
          "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/posts/index.astro",
          "in-tree",
        ],
        [
          "/Users/baikang.li/projects/blog-next/blog-astro/src/components/Latex.astro",
          "in-tree",
        ],
        [
          "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/test.mdx",
          "in-tree",
        ],
        [
          "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/cn/index.astro",
          "in-tree",
        ],
        [
          "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/cn/posts/index.astro",
          "in-tree",
        ],
        [
          "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/cn/posts/[slug].astro",
          "in-tree",
        ],
        [
          "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/index.astro?astro&type=style&index=0&lang.css",
          "in-tree",
        ],
        [
          "/Users/baikang.li/projects/blog-next/blog-astro/src/pages/cn/index.astro?astro&type=style&index=0&lang.css",
          "in-tree",
        ],
      ],
      renderers: [],
      entryModules: {
        "\0@astrojs-ssr-virtual-entry": "_@astrojs-ssr-virtual-entry.mjs",
        "astro:scripts/before-hydration.js": "",
      },
      assets: [
        "/_astro/index.dede0c6e.css",
        "/_astro/index.12c5fa68.css",
        "/_astro/index.017e34d0.css",
        "/_astro/index.8da5a538.css",
        "/favicon.svg",
        "/katex.min.css",
        "/$server_build/_astro/index.017e34d0.css",
        "/$server_build/_astro/index.12c5fa68.css",
        "/$server_build/_astro/index.8da5a538.css",
        "/$server_build/_astro/index.dede0c6e.css",
        "/$server_build/chunks/astro.b8e7718a.mjs",
        "/locales/en/common.json",
        "/locales/cn/common.json",
        "/$server_build/chunks/pages/all.52f32b67.mjs",
      ],
    }),
    { pageMap: f2, renderers: h2 }
  ),
  m2 = void 0,
  g2 = Vd(Wd),
  W6 = g2.onRequest,
  Ud = "start";
Ud in Hd && Hd[Ud](Wd, m2);
export { W6 as onRequest, f2 as pageMap, h2 as renderers };
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
