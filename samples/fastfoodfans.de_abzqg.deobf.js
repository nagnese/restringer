[+] Obfuscation type is function_to_array_replacements
[+] ==> Cycle 1 completed in 0.05 seconds with no changes (31639 nodes)
	[+] rearrangeSequences committed 51 new changes!
	[+] separateChainedDeclarators committed 76 new changes!
	[+] normalizeEmptyStatements committed 12 new changes!
	[+] resolveProxyVariables committed 7 new changes!
	[+] resolveProxyReferences committed 173 new changes!
	[+] resolveMemberExpressionsWithDirectAssignment committed 4 new changes!
	[+] replaceIdentifierWithFixedAssignedValue committed 6 new changes!
	[+] replaceBooleanExpressionsWithIf committed 363 new changes!
	[+] replaceSequencesWithExpressions committed 132 new changes!
	[+] simplifyCalls committed 5 new changes!
	[+] unwrapIIFEs committed 1 new changes!
[+] Applying changes to the root node...
[+] ==> Cycle 2 completed in 4.362 seconds with 830 changes (32941 nodes)
	[+] rearrangeSequences committed 7 new changes!
	[+] separateChainedDeclarators committed 7 new changes!
	[+] resolveProxyVariables committed 2 new changes!
	[+] replaceBooleanExpressionsWithIf committed 92 new changes!
	[+] replaceSequencesWithExpressions committed 26 new changes!
[+] ==> Cycle 3 completed in 1.713 seconds with 964 changes (33069 nodes)
	[+] separateChainedDeclarators committed 1 new changes!
	[+] replaceBooleanExpressionsWithIf committed 11 new changes!
	[+] replaceSequencesWithExpressions committed 3 new changes!
[+] ==> Cycle 4 completed in 1.222 seconds with 979 changes (33090 nodes)
	[+] replaceBooleanExpressionsWithIf committed 3 new changes!
[+] ==> Cycle 5 completed in 0.535 seconds with 982 changes (33093 nodes)
[+] ==> Cycle 6 completed in 0.079 seconds with 982 changes (33093 nodes)
	[+] resolveMinimalAlphabet committed 8 new changes!
	[+] resolveBuiltinCalls committed 8 new changes!
[+] ==> Cycle 7 completed in 8.145 seconds with 16 changes (33058 nodes)
	[+] replaceIdentifierWithFixedAssignedValue committed 1 new changes!
[+] ==> Cycle 8 completed in 0.351 seconds with 1 changes (33058 nodes)
[+] ==> Cycle 9 completed in 0.078 seconds with 1 changes (33058 nodes)
[+] ==> Cycle 10 completed in 6.08 seconds with no changes (33058 nodes)
[+] ==> Cycle 11 completed in 0.063 seconds with no changes (33058 nodes)
[+] ==> Cycle 12 completed in 2.888 seconds with no changes (33058 nodes)
	[+] normalizeRedundantNotOperator committed 283 new changes!
[+] ==> Cycle 13 completed in 0.336 seconds with 283 changes (32775 nodes)
[+] ==> Cycle 14 completed in 0.019 seconds with 283 changes (32775 nodes)
[+] Saved ./samples/fastfoodfans.de_abzqg.js-deob.js
[!] Deobfuscation took 28.779 seconds.
function b2a(a) {
  var b;
  var c = 0;
  var l = 0;
  var f = '';
  var g = [];
  if (!a)
    return a;
  do {
    var e = a.charCodeAt(c++);
    var h = a.charCodeAt(c++);
    var k = a.charCodeAt(c++);
    var d = e << 16 | h << 8 | k;
    e = 63 & d >> 18;
    h = 63 & d >> 12;
    k = 63 & d >> 6;
    d &= 63;
    g[l++] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(e) + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(h) + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(k) + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(d);
  } while (c < a.length);
  f = g.join('');
  b = a.length % 3;
  return (b ? f.slice(0, b - 3) : f) + '==='.slice(b || 3);
}
function a2b(a) {
  var b;
  var c;
  var l;
  var f = {};
  var g = 0;
  var e = 0;
  var h = '';
  var k = String.fromCharCode;
  var d = a.length;
  for (b = 0; 64 > b; b++)
    f['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(b)] = b;
  for (c = 0; a.length > c; c++)
    for (b = f[a.charAt(c)], g = (g << 6) + b, e += 6; 8 <= e;)
      if ((l = 255 & g >>> (e -= 8)) || a.length - 2 > c) {
        h += String.fromCharCode(l);
      }
  return h;
}
b64e = function (a) {
  return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g, function (b, a) {
    return String.fromCharCode('0x' + a);
  }));
};
b64d = function (a) {
  return decodeURIComponent(atob(a).split('').map(function (a) {
    return '%' + ('00' + a.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
};
!function (a, b) {
  a(function () {
    'use strict';
    function a(a, b) {
      return null != a && null != b && a.toLowerCase() === b.toLowerCase();
    }
    function c(a, b) {
      var c;
      var d;
      var e = a.length;
      if (!a.length || !b)
        return false;
      for (c = b.toLowerCase(), d = 0; d < a.length; ++d)
        if (c === a[d].toLowerCase())
          return true;
      return false;
    }
    function d(a) {
      for (var b in a)
        if (Object.prototype.hasOwnProperty.call(a, b)) {
          a[b] = new RegExp(a[b], 'i');
        }
    }
    function e(a) {
      return (a || '').substr(0, 500);
    }
    function f(a, b) {
      this.ua = e(a);
      this._cache = {};
      this.maxPhoneWidth = b || 600;
    }
    var g = {};
    g.mobileDetectRules = {
      phones: {
        iPhone: '\\biPhone\\b|\\biPod\\b',
        BlackBerry: 'BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+',
        Pixel: '; \\bPixel\\b',
        HTC: 'HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel',
        Nexus: 'Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 5X|Nexus 6',
        Dell: 'Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b',
        Motorola: 'Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052',
        Samsung: '\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F|SM-G610F|SM-G981B|SM-G892A|SM-A530F',
        LG: '\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710',
        Sony: 'SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533|SOV34|601SO|F8332',
        Asus: 'Asus.*Galaxy|PadFone.*Mobile',
        Xiaomi: '^(?!.*\\bx11\\b).*xiaomi.*$|POCOPHONE F1|MI 8|Redmi Note 9S|Redmi Note 5A Prime|N2G47H|M2001J2G|M2001J2I|M1805E10A|M2004J11G|M1902F1G|M2002J9G|M2004J19G|M2003J6A1G',
        NokiaLumia: 'Lumia [0-9]{3,4}',
        Micromax: 'Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b',
        Palm: 'PalmSource|Palm',
        Vertu: 'Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature',
        Pantech: 'PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790',
        Fly: 'IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250',
        Wiko: 'KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM',
        iMobile: 'i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)',
        SimValley: '\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b',
        Wolfgang: 'AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q',
        Alcatel: 'Alcatel',
        Nintendo: 'Nintendo (3DS|Switch)',
        Amoi: 'Amoi',
        INQ: 'INQ',
        OnePlus: 'ONEPLUS',
        GenericPhone: 'Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser'
      },
      tablets: {
        iPad: 'iPad|iPad.*Mobile',
        NexusTablet: 'Android.*Nexus[\\s]+(7|9|10)',
        GoogleTablet: 'Android.*Pixel C',
        SamsungTablet: 'SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860',
        Kindle: 'Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)',
        SurfaceTablet: 'Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)',
        HPTablet: 'HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10',
        AsusTablet: '^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b',
        BlackBerryTablet: 'PlayBook|RIM Tablet',
        HTCtablet: 'HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410',
        MotorolaTablet: 'xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617',
        NookTablet: 'Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2',
        AcerTablet: 'Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40',
        ToshibaTablet: 'Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO',
        LGTablet: '\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b',
        FujitsuTablet: 'Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b',
        PrestigioTablet: 'PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002',
        LenovoTablet: 'Lenovo TAB|Idea(Tab|Pad)(A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L',
        DellTablet: 'Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7',
        YarvikTablet: 'Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b',
        MedionTablet: 'Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB',
        ArnovaTablet: '97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2',
        IntensoTablet: 'INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004',
        IRUTablet: 'M702pro',
        MegafonTablet: 'MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b',
        EbodaTablet: 'E-Boda (Supreme|Impresspeed|Izzycomm|Essential)',
        AllViewTablet: 'Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)',
        ArchosTablet: '\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b',
        AinolTablet: 'NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark',
        NokiaLumiaTablet: 'Lumia 2520',
        SonyTablet: 'Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712',
        PhilipsTablet: '\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b',
        CubeTablet: 'Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT',
        CobyTablet: 'MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010',
        MIDTablet: 'M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10',
        MSITablet: 'MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b',
        SMiTTablet: 'Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)',
        RockChipTablet: 'Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A',
        FlyTablet: 'IQ310|Fly Vision',
        bqTablet: 'Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus',
        HuaweiTablet: 'MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19',
        NecTablet: '\\bN-06D|\\bN-08D',
        PantechTablet: 'Pantech.*P4100',
        BronchoTablet: 'Broncho.*(N701|N708|N802|a710)',
        VersusTablet: 'TOUCHPAD.*[78910]|\\bTOUCHTAB\\b',
        ZyncTablet: 'z1000|Z99 2G|z930|z990|z909|Z919|z900',
        PositivoTablet: 'TB07STA|TB10STA|TB07FTA|TB10FTA',
        NabiTablet: 'Android.*\\bNabi',
        KoboTablet: 'Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build',
        DanewTablet: 'DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b',
        TexetTablet: 'NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE',
        PlaystationTablet: 'Playstation.*(Portable|Vita)',
        TrekstorTablet: 'ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab',
        PyleAudioTablet: '\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b',
        AdvanTablet: 'Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ',
        DanyTechTablet: 'Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1',
        GalapadTablet: 'Android [0-9.]+; [a-z-]+; \\bG1\\b',
        MicromaxTablet: 'Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b',
        KarbonnTablet: 'Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b',
        AllFineTablet: 'Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide',
        PROSCANTablet: '\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b',
        YONESTablet: 'BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026',
        ChangJiaTablet: 'TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503',
        GUTablet: 'TX-A1301|TX-M9002|Q702|kf026',
        PointOfViewTablet: 'TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10',
        OvermaxTablet: 'OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027',
        HCLTablet: 'HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync',
        DPSTablet: 'DPS Dream 9|DPS Dual 7',
        VistureTablet: 'V97 HD|i75 3G|Visture V4(HD)?|Visture V5(HD)?|Visture V10',
        CrestaTablet: 'CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989',
        MediatekTablet: '\\bMT8125|MT8389|MT8135|MT8377\\b',
        ConcordeTablet: 'Concorde([ ]+)?Tab|ConCorde ReadMan',
        GoCleverTablet: 'GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042',
        ModecomTablet: 'FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003',
        VoninoTablet: '\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b',
        ECSTablet: 'V07OT2|TM105A|S10OT1|TR10CS1',
        StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
        VodafoneTablet: 'SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400',
        EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
        RossMoorTablet: 'RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711',
        iMobileTablet: 'i-mobile i-note',
        TolinoTablet: 'tolino tab [0-9.]+|tolino shine',
        AudioSonicTablet: '\\bC-22Q|T7-QC|T-17B|T-17P\\b',
        AMPETablet: 'Android.* A78 ',
        SkkTablet: 'Android.* (SKYPAD|PHOENIX|CYCLOPS)',
        TecnoTablet: 'TECNO P9|TECNO DP8D',
        JXDTablet: 'Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b',
        iJoyTablet: 'Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)',
        FX2Tablet: 'FX2 PAD7|FX2 PAD10',
        XoroTablet: 'KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151',
        ViewsonicTablet: 'ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a',
        VerizonTablet: 'QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1',
        OdysTablet: 'LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10',
        CaptivaTablet: 'CAPTIVA PAD',
        IconbitTablet: 'NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S',
        TeclastTablet: 'T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi',
        OndaTablet: '\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b',
        JaytechTablet: 'TPC-PA762',
        BlaupunktTablet: 'Endeavour 800NG|Endeavour 1010',
        DigmaTablet: '\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b',
        EvolioTablet: 'ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b',
        LavaTablet: 'QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b',
        AocTablet: 'MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712',
        MpmanTablet: 'MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010',
        CelkonTablet: 'CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b',
        WolderTablet: 'miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b',
        MediacomTablet: 'M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA',
        MiTablet: '\\bMI PAD\\b|\\bHM NOTE 1W\\b',
        NibiruTablet: 'Nibiru M1|Nibiru Jupiter One',
        NexoTablet: 'NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI',
        LeaderTablet: 'TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100',
        UbislateTablet: 'UbiSlate[\\s]?7C',
        PocketBookTablet: 'Pocketbook',
        KocasoTablet: '\\b(TB-1207)\\b',
        HisenseTablet: '\\b(F5281|E2371)\\b',
        Hudl: 'Hudl HT7S3|Hudl 2',
        TelstraTablet: 'T-Hub2',
        GenericTablet: 'Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107'
      },
      oss: {
        AndroidOS: 'Android',
        BlackBerryOS: 'blackberry|\\bBB10\\b|rim tablet os',
        PalmOS: 'PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino',
        SymbianOS: 'Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b',
        WindowsMobileOS: 'Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;',
        WindowsPhoneOS: 'Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;',
        iOS: '\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia',
        iPadOS: 'CPU OS 13',
        SailfishOS: 'Sailfish',
        MeeGoOS: 'MeeGo',
        MaemoOS: 'Maemo',
        JavaOS: 'J2ME/|\\bMIDP\\b|\\bCLDC\\b',
        webOS: 'webOS|hpwOS',
        badaOS: '\\bBada\\b',
        BREWOS: 'BREW'
      },
      uas: {
        Chrome: '\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?',
        Dolfin: '\\bDolfin\\b',
        Opera: 'Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+',
        Skyfire: 'Skyfire',
        Edge: '\\bEdgiOS\\b|Mobile Safari/[.0-9]* Edge',
        IE: 'IEMobile|MSIEMobile',
        Firefox: 'fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS',
        Bolt: 'bolt',
        TeaShark: 'teashark',
        Blazer: 'Blazer',
        Safari: 'Version((?!\\bEdgiOS\\b).)*Mobile.*Safari|Safari.*Mobile|MobileSafari',
        WeChat: '\\bMicroMessenger\\b',
        UCBrowser: 'UC.*Browser|UCWEB',
        baiduboxapp: 'baiduboxapp',
        baidubrowser: 'baidubrowser',
        DiigoBrowser: 'DiigoBrowser',
        Mercury: '\\bMercury\\b',
        ObigoBrowser: 'Obigo',
        NetFront: 'NF-Browser',
        GenericBrowser: 'NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger',
        PaleMoon: 'Android.*PaleMoon|Mobile.*PaleMoon'
      },
      props: {
        Mobile: 'Mobile/[VER]',
        Build: 'Build/[VER]',
        Version: 'Version/[VER]',
        VendorID: 'VendorID/[VER]',
        iPad: 'iPad.*CPU[a-z ]+[VER]',
        iPhone: 'iPhone.*CPU[a-z ]+[VER]',
        iPod: 'iPod.*CPU[a-z ]+[VER]',
        Kindle: 'Kindle/[VER]',
        Chrome: [
          'Chrome/[VER]',
          'CriOS/[VER]',
          'CrMo/[VER]'
        ],
        Coast: ['Coast/[VER]'],
        Dolfin: 'Dolfin/[VER]',
        Firefox: [
          'Firefox/[VER]',
          'FxiOS/[VER]'
        ],
        Fennec: 'Fennec/[VER]',
        Edge: 'Edge/[VER]',
        IE: [
          'IEMobile/[VER];',
          'IEMobile [VER]',
          'MSIE [VER];',
          'Trident/[0-9.]+;.*rv:[VER]'
        ],
        NetFront: 'NetFront/[VER]',
        NokiaBrowser: 'NokiaBrowser/[VER]',
        Opera: [
          ' OPR/[VER]',
          'Opera Mini/[VER]',
          'Version/[VER]'
        ],
        'Opera Mini': 'Opera Mini/[VER]',
        'Opera Mobi': 'Version/[VER]',
        UCBrowser: [
          'UCWEB[VER]',
          'UC.*Browser/[VER]'
        ],
        MQQBrowser: 'MQQBrowser/[VER]',
        MicroMessenger: 'MicroMessenger/[VER]',
        baiduboxapp: 'baiduboxapp/[VER]',
        baidubrowser: 'baidubrowser/[VER]',
        SamsungBrowser: 'SamsungBrowser/[VER]',
        Iron: 'Iron/[VER]',
        Safari: [
          'Version/[VER]',
          'Safari/[VER]'
        ],
        Skyfire: 'Skyfire/[VER]',
        Tizen: 'Tizen/[VER]',
        Webkit: 'webkit[ /][VER]',
        PaleMoon: 'PaleMoon/[VER]',
        SailfishBrowser: 'SailfishBrowser/[VER]',
        Gecko: 'Gecko/[VER]',
        Trident: 'Trident/[VER]',
        Presto: 'Presto/[VER]',
        Goanna: 'Goanna/[VER]',
        iOS: ' \\bi?OS\\b [VER][ ;]{1}',
        Android: 'Android [VER]',
        Sailfish: 'Sailfish [VER]',
        BlackBerry: [
          'BlackBerry[\\w]+/[VER]',
          'BlackBerry.*Version/[VER]',
          'Version/[VER]'
        ],
        BREW: 'BREW [VER]',
        Java: 'Java/[VER]',
        'Windows Phone OS': [
          'Windows Phone OS [VER]',
          'Windows Phone [VER]'
        ],
        'Windows Phone': 'Windows Phone [VER]',
        'Windows CE': 'Windows CE/[VER]',
        'Windows NT': 'Windows NT [VER]',
        Symbian: [
          'SymbianOS/[VER]',
          'Symbian/[VER]'
        ],
        webOS: [
          'webOS/[VER]',
          'hpwOS/[VER];'
        ]
      },
      utils: {
        Bot: 'Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot',
        MobileBot: 'Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2',
        DesktopMode: 'WPDesktop',
        TV: 'SonyDTV|HbbTV',
        WebKit: '(webkit)[ /]([\\w.]+)',
        Console: '\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b',
        Watch: 'SM-V700'
      }
    };
    g.detectMobileBrowsers = {
      fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm(os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
      shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s)|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp(i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac(|\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt(|\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg(g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v)|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v)|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-|)|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      tabletPattern: /android|ipad|playbook|silk/i
    };
    var h;
    var i = Object.prototype.hasOwnProperty;
    g.FALLBACK_PHONE = 'UnknownPhone';
    g.FALLBACK_TABLET = 'UnknownTablet';
    g.FALLBACK_MOBILE = 'UnknownMobile';
    h = 'isArray' in Array ? Array.isArray : function (a) {
      return '[object Array]' === Object.prototype.toString.call(a);
    };
    (function () {
      var a;
      var b;
      var c;
      var e;
      var f;
      var j;
      var k = g.mobileDetectRules;
      for (a in k.props)
        if (Object.prototype.hasOwnProperty.call(k.props, a)) {
          for (b = k.props[a], h(b) || (b = [b]), f = b.length, e = 0; e < f; ++e) {
            c = b[e];
            j = c.indexOf('[VER]');
            if (j >= 0) {
              c = c.substring(0, j) + '([\\w._\\+]+)' + c.substring(j + 5);
            }
            b[e] = new RegExp(c, 'i');
          }
          k.props[a] = b;
        }
      d(k.oss);
      d(k.phones);
      d(k.tablets);
      d(k.uas);
      d(k.utils);
      k.oss0 = {
        WindowsPhoneOS: k.oss.WindowsPhoneOS,
        WindowsMobileOS: k.oss.WindowsMobileOS
      };
    }());
    g.findMatch = function (a, b) {
      for (var c in a)
        if (Object.prototype.hasOwnProperty.call(a, c) && a[c].test(b))
          return c;
      return null;
    };
    g.findMatches = function (a, b) {
      var c = [];
      for (var d in a)
        if (Object.prototype.hasOwnProperty.call(a, d) && a[d].test(b)) {
          c.push(d);
        }
      return c;
    };
    g.getVersionStr = function (a, b) {
      var c;
      var d;
      var e;
      var f;
      var h = g.mobileDetectRules.props;
      if (Object.prototype.hasOwnProperty.call(g.mobileDetectRules.props, a))
        for (c = g.mobileDetectRules.props[a], e = c.length, d = 0; d < e; ++d) {
          f = c[d].exec(b);
          if (null !== f)
            return f[1];
        }
      return null;
    };
    g.getVersion = function (a, b) {
      var c = g.getVersionStr(a, b);
      return c ? g.prepareVersionNo(c) : NaN;
    };
    g.prepareVersionNo = function (a) {
      var b;
      b = a.split(/[a-z._ \/\-]/i);
      if (1 === b.length) {
        a = b[0];
      }
      if (b.length > 1) {
        a = b[0] + '.';
        b.shift();
        a += b.join('');
      }
      return Number(a);
    };
    g.isMobileFallback = function (a) {
      return g.detectMobileBrowsers.fullPattern.test(a) || g.detectMobileBrowsers.shortPattern.test(a.substr(0, 4));
    };
    g.isTabletFallback = function (a) {
      return g.detectMobileBrowsers.tabletPattern.test(a);
    };
    g.prepareDetectionCache = function (a, c, d) {
      if (a.mobile === b) {
        var e;
        var h;
        var i;
        return (h = g.findMatch(g.mobileDetectRules.tablets, c)) ? (a.mobile = a.tablet = h, void (a.phone = null)) : (e = g.findMatch(g.mobileDetectRules.phones, c)) ? (a.mobile = a.phone = e, void (a.tablet = null)) : void (g.isMobileFallback(c) ? (i = f.isPhoneSized(d), i === b ? (a.mobile = 'UnknownMobile', a.tablet = a.phone = null) : i ? (a.mobile = a.phone = 'UnknownPhone', a.tablet = null) : (a.mobile = a.tablet = 'UnknownTablet', a.phone = null)) : g.isTabletFallback(c) ? (a.mobile = a.tablet = 'UnknownTablet', a.phone = null) : a.mobile = a.tablet = a.phone = null);
      }
    };
    g.mobileGrade = function (a) {
      var b = null !== a.mobile();
      return a.os('iOS') && a.version('iPad') >= 4.3 || a.os('iOS') && a.version('iPhone') >= 3.1 || a.os('iOS') && a.version('iPod') >= 3.1 || a.version('Android') > 2.1 && a.is('Webkit') || a.version('Windows Phone OS') >= 7 || a.is('BlackBerry') && a.version('BlackBerry') >= 6 || a.match('Playbook.*Tablet') || a.version('webOS') >= 1.4 && a.match('Palm|Pre|Pixi') || a.match('hp.*TouchPad') || a.is('Firefox') && a.version('Firefox') >= 12 || a.is('Chrome') && a.is('AndroidOS') && a.version('Android') >= 4 || a.is('Skyfire') && a.version('Skyfire') >= 4.1 && a.is('AndroidOS') && a.version('Android') >= 2.3 || a.is('Opera') && a.version('Opera Mobi') > 11 && a.is('AndroidOS') || a.is('MeeGoOS') || a.is('Tizen') || a.is('Dolfin') && a.version('Bada') >= 2 || (a.is('UC Browser') || a.is('Dolfin')) && a.version('Android') >= 2.3 || a.match('Kindle Fire') || a.is('Kindle') && a.version('Kindle') >= 3 || a.is('AndroidOS') && a.is('NookTablet') || a.version('Chrome') >= 11 && !b || a.version('Safari') >= 5 && !b || a.version('Firefox') >= 4 && !b || a.version('MSIE') >= 7 && !b || a.version('Opera') >= 10 && !b ? 'A' : a.os('iOS') && a.version('iPad') < 4.3 || a.os('iOS') && a.version('iPhone') < 3.1 || a.os('iOS') && a.version('iPod') < 3.1 || a.is('Blackberry') && a.version('BlackBerry') >= 5 && a.version('BlackBerry') < 6 || a.version('Opera Mini') >= 5 && a.version('Opera Mini') <= 6.5 && (a.version('Android') >= 2.3 || a.is('iOS')) || a.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') || a.version('Opera Mobi') >= 11 && a.is('SymbianOS') ? 'B' : (a.version('BlackBerry') < 5 || a.match('MSIEMobile|Windows CE.*Mobile') || a.version('Windows Mobile') <= 5.2, 'C');
    };
    g.detectOS = function (a) {
      return g.findMatch(g.mobileDetectRules.oss0, a) || g.findMatch(g.mobileDetectRules.oss, a);
    };
    g.getDeviceSmallerSide = function () {
      return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
    };
    f.prototype = {
      constructor: f,
      mobile: function () {
        g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.mobile;
      },
      phone: function () {
        g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.phone;
      },
      tablet: function () {
        g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.tablet;
      },
      userAgent: function () {
        if (this._cache.userAgent === b) {
          this._cache.userAgent = g.findMatch(g.mobileDetectRules.uas, this.ua);
        }
        return this._cache.userAgent;
      },
      userAgents: function () {
        if (this._cache.userAgents === b) {
          this._cache.userAgents = g.findMatches(g.mobileDetectRules.uas, this.ua);
        }
        return this._cache.userAgents;
      },
      os: function () {
        if (this._cache.os === b) {
          this._cache.os = g.detectOS(this.ua);
        }
        return this._cache.os;
      },
      version: function (a) {
        return g.getVersion(a, this.ua);
      },
      versionStr: function (a) {
        return g.getVersionStr(a, this.ua);
      },
      is: function (b) {
        return c(this.userAgents(), b) || a(b, this.os()) || a(b, this.phone()) || a(b, this.tablet()) || c(g.findMatches(g.mobileDetectRules.utils, this.ua), b);
      },
      match: function (a) {
        if (!(a instanceof RegExp)) {
          a = new RegExp(a, 'i');
        }
        return a.test(this.ua);
      },
      isPhoneSized: function (a) {
        return f.isPhoneSized(a || this.maxPhoneWidth);
      },
      mobileGrade: function () {
        if (this._cache.grade === b) {
          this._cache.grade = g.mobileGrade(this);
        }
        return this._cache.grade;
      }
    };
    'undefined' != typeof window && window.screen ? f.isPhoneSized = function (a) {
      return a < 0 ? b : g.getDeviceSmallerSide() <= a;
    } : f.isPhoneSized = function () {
    };
    f._impl = g;
    f.version = '1.4.5 2021-03-13';
    return f;
  });
}(function (a) {
  if ('undefined' != typeof module && module.exports)
    return function (a) {
      module.exports = a();
    };
  if ('function' == typeof define && define.amd)
    return define;
  if ('undefined' != typeof window)
    return function (a) {
      window.MobileDetect = a();
    };
  throw new Error('unknown environment');
}());
if ('undefined' != typeof ai_insertion_js) {
  ai_insert = function (a, h, l) {
    if (-1 != h.indexOf(':eq('))
      if (window.jQuery && window.jQuery.fn)
        var n = jQuery(h);
      else {
        console.error('AI INSERT USING jQuery QUERIES:', h, '- jQuery not found');
        return;
      }
    else
      n = document.querySelectorAll(h);
    for (var u = 0, y = n.length; u < y; u++) {
      var d = n[u];
      selector_string = n[u].hasAttribute('id') ? '#' + n[u].getAttribute('id') : n[u].hasAttribute('class') ? '.' + n[u].getAttribute('class').replace(/ /g, '.') : '';
      var w = document.createElement('div');
      w.innerHTML = l;
      var m = w.getElementsByClassName('ai-selector-counter')[0];
      if (null != m) {
        m.innerText = u + 1;
      }
      m = w.getElementsByClassName('ai-debug-name ai-main')[0];
      if (null != m) {
        var r = a.toUpperCase();
        if ('undefined' != typeof ai_front) {
          'before' == a ? r = ai_front.insertion_before : 'after' == a ? r = ai_front.insertion_after : 'prepend' == a ? r = ai_front.insertion_prepend : 'append' == a ? r = ai_front.insertion_append : 'replace-content' == a ? r = ai_front.insertion_replace_content : 'replace-element' == a && (r = ai_front.insertion_replace_element);
        }
        if (-1 == selector_string.indexOf('.ai-viewports')) {
          m.innerText = r + ' ' + h + ' (' + n[u].tagName.toLowerCase() + selector_string + ')';
        }
      }
      m = document.createRange();
      try {
        var v = m.createContextualFragment(w.innerHTML);
      } catch (t) {
      }
      'before' == a ? n[u].parentNode.insertBefore(v, n[u]) : 'after' == a ? n[u].parentNode.insertBefore(v, n[u].nextSibling) : 'prepend' == a ? n[u].insertBefore(v, n[u].firstChild) : 'append' == a ? n[u].insertBefore(v, null) : 'replace-content' == a ? (n[u].innerHTML = '', n[u].insertBefore(v, null)) : 'replace-element' == a && (n[u].parentNode.insertBefore(v, n[u]), n[u].parentNode.removeChild(n[u]));
      z();
    }
  };
  ai_insert_code = function (a) {
    function h(m, r) {
      return null == m ? false : m.classList ? m.classList.contains(r) : -1 < (' ' + m.className + ' ').indexOf(' ' + r + ' ');
    }
    function l(m, r) {
      if (null != m) {
        m.classList ? m.classList.add(r) : m.className += ' ' + r;
      }
    }
    function n(m, r) {
      if (null != m) {
        m.classList ? m.classList.remove(r) : m.className = m.className.replace(new RegExp('(^|\\b)' + r.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }
    if ('undefined' != typeof a) {
      var u = false;
      if (h(a, 'no-visibility-check') || a.offsetWidth || a.offsetHeight || a.getClientRects().length) {
        u = a.getAttribute('data-code');
        var y = a.getAttribute('data-insertion-position');
        var d = a.getAttribute('data-selector');
        if (null != u)
          if (null != y && null != d) {
            if (-1 != d.indexOf(':eq(') ? window.jQuery && window.jQuery.fn && jQuery(d).length : document.querySelectorAll(d).length) {
              ai_insert(y, d, b64d(u));
              n(a, 'ai-viewports');
            }
          } else {
            y = document.createRange();
            try {
              var w = y.createContextualFragment(b64d(u));
            } catch (m) {
            }
            a.parentNode.insertBefore(w, a.nextSibling);
            n(a, 'ai-viewports');
          }
        u = true;
      } else {
        w = a.previousElementSibling;
        if (h(w, 'ai-debug-bar') && h(w, 'ai-debug-script')) {
          n(w, 'ai-debug-script');
          l(w, 'ai-debug-viewport-invisible');
        }
        n(a, 'ai-viewports');
      }
      return u;
    }
  };
  ai_insert_list_code = function (a) {
    var h = document.getElementsByClassName(a)[0];
    if ('undefined' != typeof document.getElementsByClassName(a)[0]) {
      var l = ai_insert_code(document.getElementsByClassName(a)[0]);
      var n = document.getElementsByClassName(a)[0].closest('div.' + ai_block_class_def);
      if (n) {
        if (!l) {
          n.removeAttribute('data-ai');
        }
        var u = n.querySelectorAll('.ai-debug-block');
        if (n && u.length) {
          n.classList.remove('ai-list-block');
          n.classList.remove('ai-list-block-ip');
          n.classList.remove('ai-list-block-filter');
          n.style.visibility = '';
          if (n.classList.contains('ai-remove-position')) {
            n.style.position = '';
          }
        }
      }
      document.getElementsByClassName(a)[0].classList.remove(a);
      if (l) {
        z();
      }
    }
  };
  ai_insert_viewport_code = function (a) {
    var h = document.getElementsByClassName(a)[0];
    if ('undefined' != typeof document.getElementsByClassName(a)[0]) {
      var l = ai_insert_code(document.getElementsByClassName(a)[0]);
      document.getElementsByClassName(a)[0].classList.remove(a);
      if (l) {
        a = document.getElementsByClassName(a)[0].closest('div.' + ai_block_class_def);
        if (null != a) {
          l = document.getElementsByClassName(a)[0].getAttribute('style');
          if (null != l) {
            a.setAttribute('style', a.getAttribute('style') + ' ' + l);
          }
        }
      }
      setTimeout(function () {
        document.getElementsByClassName(a)[0].removeAttribute('style');
      }, 2);
      z();
    }
  };
  ai_insert_adsense_fallback_codes = function (a) {
    a.style.display = 'none';
    var h = a.closest('.ai-fallback-adsense');
    var l = h.nextElementSibling;
    h.nextElementSibling.getAttribute('data-code') ? ai_insert_code(h.nextElementSibling) && z() : h.nextElementSibling.style.display = 'block';
    if (h.classList.contains('ai-empty-code') && null != a.closest('.' + ai_block_class_def)) {
      a = a.closest('.' + ai_block_class_def).getElementsByClassName('code-block-label');
      if (0 != a.length) {
        a[0].style.display = 'none';
      }
    }
  };
  ai_insert_code_by_class = function (a) {
    var h = document.getElementsByClassName(a)[0];
    if ('undefined' != typeof document.getElementsByClassName(a)[0]) {
      ai_insert_code(document.getElementsByClassName(a)[0]);
      document.getElementsByClassName(a)[0].classList.remove(a);
    }
  };
  ai_insert_client_code = function (a, h) {
    var l = document.getElementsByClassName(a)[0];
    if ('undefined' != typeof document.getElementsByClassName(a)[0]) {
      var n = document.getElementsByClassName(a)[0].getAttribute('data-code');
      if (null != n && ai_check_block()) {
        document.getElementsByClassName(a)[0].setAttribute('data-code', n.substring(Math.floor(h / 19)));
        ai_insert_code_by_class(a);
        document.getElementsByClassName(a)[0].remove();
      }
    }
  };
  ai_process_elements_active = false;
  function z() {
    if (!ai_process_elements_active) {
      setTimeout(function () {
        ai_process_elements_active = false;
        if ('function' == typeof ai_process_rotations) {
          ai_process_rotations();
        }
        if ('function' == typeof ai_process_lists) {
          ai_process_lists();
        }
        if ('function' == typeof ai_process_ip_addresses) {
          ai_process_ip_addresses();
        }
        if ('function' == typeof ai_process_filter_hooks) {
          ai_process_filter_hooks();
        }
        if ('function' == typeof ai_adb_process_blocks) {
          ai_adb_process_blocks();
        }
        if ('function' == typeof ai_process_impressions && 1 == ai_tracking_finished) {
          ai_process_impressions();
        }
        if ('function' == typeof ai_install_click_trackers && 1 == ai_tracking_finished) {
          ai_install_click_trackers();
        }
        if ('function' == typeof ai_install_close_buttons) {
          ai_install_close_buttons(document);
        }
        if ('function' == typeof ai_process_wait_for_interaction) {
          ai_process_wait_for_interaction();
        }
        if ('function' == typeof ai_process_delayed_blocks) {
          ai_process_delayed_blocks();
        }
      }, 5);
    }
    ai_process_elements_active = true;
  }
  const B = document.querySelector('body');
  new MutationObserver(function (a, h) {
    for (const l of a)
      if ('attributes' === l.type && 'data-ad-status' == l.attributeName && 'unfilled' == l.target.dataset.adStatus && l.target.closest('.ai-fallback-adsense')) {
        ai_insert_adsense_fallback_codes(l.target);
      }
  }).observe(B, {
    attributes: true,
    childList: false,
    subtree: true
  });
  var Arrive = function (a, h, l) {
    function n(t, c, e) {
      d.addMethod(c, e, t.unbindEvent);
      d.addMethod(c, e, t.unbindEventWithSelectorOrCallback);
      d.addMethod(c, e, t.unbindEventWithSelectorAndCallback);
    }
    function u(t) {
      t.arrive = r.bindEvent;
      n(r, t, 'unbindArrive');
      t.leave = v.bindEvent;
      n(v, t, 'unbindLeave');
    }
    if (a.MutationObserver && 'undefined' !== typeof HTMLElement) {
      var y = 0;
      var d = function () {
        var t = HTMLElement.prototype.matches || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;
        return {
          matchesSelector: function (c, e) {
            return c instanceof HTMLElement && t.call(c, e);
          },
          addMethod: function (c, e, f) {
            var b = c[e];
            c[e] = function () {
              if (f.length == arguments.length)
                return f();
              if ('function' == typeof b)
                return b();
            };
          },
          callCallbacks: function (c, e) {
            if (e && e.options.onceOnly && 1 == e.firedElems.length) {
              c = [c[0]];
            }
            for (var f = 0, b; b = c[f]; f++)
              if (b && b.callback) {
                b.callback.call(b.elem, b.elem);
              }
            if (e && e.options.onceOnly && 1 == e.firedElems.length) {
              e.me.unbindEventWithSelectorAndCallback.call(e.target, e.selector, e.callback);
            }
          },
          checkChildNodesRecursively: function (c, e, f, b) {
            for (var g = 0, k; k = c[g]; g++) {
              if (f(k, e, b)) {
                b.push({
                  callback: e.callback,
                  elem: k
                });
              }
              if (0 < k.childNodes.length) {
                d.checkChildNodesRecursively(k.childNodes, e, f, b);
              }
            }
          },
          mergeArrays: function (c, e) {
            var f = {};
            var b;
            for (b in c)
              if (c.hasOwnProperty(b)) {
                f[b] = c[b];
              }
            for (b in e)
              if (e.hasOwnProperty(b)) {
                f[b] = e[b];
              }
            return f;
          },
          toElementsArray: function (c) {
            if (!('undefined' === typeof c || 'number' === typeof c.length && c !== a)) {
              c = [c];
            }
            return c;
          }
        };
      }();
      var w = function () {
        var t = function () {
          this._eventsBucket = [];
          this._beforeRemoving = this._beforeAdding = null;
        };
        t.prototype.addEvent = function (c, e, f, b) {
          c = {
            target: c,
            selector: e,
            options: f,
            callback: b,
            firedElems: []
          };
          if (this._beforeAdding) {
            this._beforeAdding(c);
          }
          this._eventsBucket.push(c);
          return c;
        };
        t.prototype.removeEvent = function (c) {
          for (var e = this._eventsBucket.length - 1, f; f = this._eventsBucket[e]; e--)
            if (c(f)) {
              if (this._beforeRemoving) {
                this._beforeRemoving(f);
              }
              if ((f = this._eventsBucket.splice(e, 1)) && f.length) {
                f[0].callback = null;
              }
            }
        };
        t.prototype.beforeAdding = function (c) {
          this._beforeAdding = c;
        };
        t.prototype.beforeRemoving = function (c) {
          this._beforeRemoving = c;
        };
        return t;
      }();
      var m = function (t, c) {
        var e = new w();
        var f = this;
        var b = { fireOnAttributesModification: false };
        e.beforeAdding(function (g) {
          var k = g.target;
          if (k === a.document || k === a)
            k = document.getElementsByTagName('html')[0];
          var p = new MutationObserver(function (x) {
            c(x, g);
          });
          var q = t(g.options);
          p.observe(k, q);
          g.observer = p;
          g.me = f;
        });
        e.beforeRemoving(function (g) {
          g.observer.disconnect();
        });
        this.bindEvent = function (g, k, p) {
          k = d.mergeArrays(b, k);
          for (var q = d.toElementsArray(this), x = 0; x < q.length; x++)
            e.addEvent(q[x], g, k, p);
        };
        this.unbindEvent = function () {
          var g = d.toElementsArray(this);
          e.removeEvent(function (k) {
            for (var p = 0; p < g.length; p++)
              if (this === l || k.target === g[p])
                return true;
            return false;
          });
        };
        this.unbindEventWithSelectorOrCallback = function (g) {
          var k = d.toElementsArray(this);
          e.removeEvent('function' === typeof g ? function (p) {
            for (var q = 0; q < k.length; q++)
              if ((this === l || p.target === k[q]) && p.callback === g)
                return true;
            return false;
          } : function (p) {
            for (var q = 0; q < k.length; q++)
              if ((this === l || p.target === k[q]) && p.selector === g)
                return true;
            return false;
          });
        };
        this.unbindEventWithSelectorAndCallback = function (g, k) {
          var p = d.toElementsArray(this);
          e.removeEvent(function (q) {
            for (var x = 0; x < p.length; x++)
              if ((this === l || q.target === p[x]) && q.selector === g && q.callback === k)
                return true;
            return false;
          });
        };
        return this;
      };
      var r = new function () {
        function t(f, b, g) {
          return d.matchesSelector(f, b.selector) && (f._id === l && (f._id = y++), -1 == b.firedElems.indexOf(f._id)) ? (b.firedElems.push(f._id), true) : false;
        }
        var c = {
          fireOnAttributesModification: false,
          onceOnly: false,
          existing: false
        };
        r = new m(function (f) {
          var b = {
            attributes: false,
            childList: true,
            subtree: true
          };
          if (f.fireOnAttributesModification) {
            b.attributes = true;
          }
          return b;
        }, function (f, b) {
          f.forEach(function (g) {
            var k = g.addedNodes;
            var p = g.target;
            var q = [];
            null !== g.addedNodes && 0 < g.addedNodes.length ? d.checkChildNodesRecursively(g.addedNodes, b, t, q) : 'attributes' === g.type && t(g.target, b, q) && q.push({
              callback: b.callback,
              elem: g.target
            });
            d.callCallbacks(q, b);
          });
        });
        var e = r.bindEvent;
        r.bindEvent = function (f, b, g) {
          'undefined' === typeof g ? (g = b, b = c) : b = d.mergeArrays(c, b);
          var k = d.toElementsArray(this);
          if (b.existing) {
            for (var p = [], q = 0; q < k.length; q++)
              for (var x = k[q].querySelectorAll(f), A = 0; A < x.length; A++)
                p.push({
                  callback: g,
                  elem: x[A]
                });
            if (b.onceOnly && p.length)
              return g.call(p[0].elem, p[0].elem);
            setTimeout(d.callCallbacks, 1, p);
          }
          e(f, b, g);
        };
        return r;
      }();
      var v = new function () {
        function t(f, b) {
          return d.matchesSelector(f, b.selector);
        }
        var c = {};
        v = new m(function () {
          return {
            childList: true,
            subtree: true
          };
        }, function (f, b) {
          f.forEach(function (g) {
            g = g.removedNodes;
            var k = [];
            if (null !== g && 0 < g.length) {
              d.checkChildNodesRecursively(g, b, t, k);
            }
            d.callCallbacks(k, b);
          });
        });
        var e = v.bindEvent;
        v.bindEvent = function (f, b, g) {
          'undefined' === typeof g ? (g = b, b = c) : b = d.mergeArrays(c, b);
          e(f, b, g);
        };
        return v;
      }();
      if (h) {
        u(h.fn);
      }
      u(HTMLElement.prototype);
      u(NodeList.prototype);
      u(HTMLCollection.prototype);
      u(HTMLDocument.prototype);
      u(Window.prototype);
      h = {};
      n(r, h, 'unbindAllArrive');
      n(v, h, 'unbindAllLeave');
      return h;
    }
  }(window, 'undefined' === typeof jQuery ? null : jQuery, void 0);
}
if ('undefined' != typeof sticky_widget_mode) {
  (function (d) {
    'complete' === document.readyState || 'loading' !== document.readyState && !document.documentElement.doScroll ? d() : document.addEventListener('DOMContentLoaded', d);
  }(function () {
    var d = function () {
      var e = document.body.clientWidth;
      document.querySelectorAll('.ai-sticky-widget').forEach((b, a) => {
        if (2 == sticky_widget_mode) {
          a = b.querySelector('.' + ai_block_class_def);
          if (null != a) {
            a.style.position = 'sticky';
            a.style.position = '-webkit-sticky';
            a.style.top = sticky_widget_margin + 'px';
          }
          a = b.querySelector('.ai-sticky-space');
          if (null != a) {
            a.style.height = window.innerHeight + 'px';
          }
        } else {
          var c = b.clientWidth;
          var f = false;
          for (a = b.parentElement; 'BODY' != a.tagName;) {
            if (a.classList.contains('theiaStickySidebar')) {
              f = true;
              break;
            }
            var g = a.parentElement;
            var h = a.parentElement.clientWidth;
            if (a.parentElement.clientWidth > 1.2 * c || a.parentElement.clientWidth > document.body.clientWidth / 2)
              break;
            a = a.parentElement;
          }
          if (!f) {
            c = a.getBoundingClientRect();
            b = b.getBoundingClientRect();
            b = c.top - b.top + sticky_widget_margin;
            if (0 == sticky_widget_mode) {
              if ('sticky' != a.style.position || isNaN(parseInt(a.style.top)) || a.style.top < b) {
                a.style.position = 'sticky';
                a.style.position = '-webkit-sticky';
                a.style.top = b + 'px';
                if ('undefined' == typeof ai_no_sticky_sidebar_height)
                  for (b = a; 'BODY' != b.tagName;) {
                    b = b.parentElement;
                    if ((b.clientWidth > 1.5 * a.clientWidth || b.clientWidth > document.body.clientWidth / 2) && b.clientHeight > a.clientHeight) {
                      c = b.clientHeight;
                      a.parentElement.style.height = c + 'px';
                      a.parentElement.style.height = c - (b.clientHeight - c) + 'px';
                      break;
                    }
                  }
              }
            } else if (1 == sticky_widget_mode) {
              window.jQuery && window.jQuery.fn ? jQuery(a).theiaStickySidebar({
                additionalMarginTop: b,
                sidebarBehavior: 'stick-to-top'
              }) : console.error('AI STICKY WIDGET MODE Javascript USES jQuery', '- jQuery not found');
            }
          }
        }
      });
    };
    if ('undefined' == typeof ai_sticky_sidebar_delay) {
      ai_sticky_sidebar_delay = 200;
    }
    setTimeout(function () {
      d();
    }, ai_sticky_sidebar_delay);
  }));
}
if ('undefined' !== typeof ai_cookie_js) {
  (function (a, f) {
    'object' === typeof exports && 'undefined' !== typeof module ? module.exports = f() : 'function' === typeof define && define.amd ? define(f) : (a = 'undefined' !== typeof globalThis ? globalThis : a || self, function () {
      var b = a.Cookies;
      var c = a.Cookies = f();
      c.noConflict = function () {
        a.Cookies = b;
        return c;
      };
    }());
  }(this, function () {
    function a(b) {
      for (var c = 1; c < arguments.length; c++) {
        var g = arguments[c];
        var e;
        for (e in arguments[c])
          b[e] = arguments[c][e];
      }
      return b;
    }
    function f(b, c) {
      function g(e, d, h) {
        if ('undefined' !== typeof document) {
          h = a({}, c, h);
          if ('number' === typeof h.expires) {
            h.expires = new Date(Date.now() + 86400000 * h.expires);
          }
          if (h.expires) {
            h.expires = h.expires.toUTCString();
          }
          e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
          var l = '';
          var k;
          for (k in h)
            if (h[k]) {
              l += '; ' + k;
              if (true !== h[k]) {
                l += '=' + h[k].split(';')[0];
              }
            }
          return document.cookie = e + '=' + b.write(d, e) + l;
        }
      }
      return Object.create({
        set: g,
        get: function (e) {
          if ('undefined' !== typeof document && (!arguments.length || e)) {
            for (var d = document.cookie ? document.cookie.split('; ') : [], h = {}, l = 0; l < d.length; l++) {
              var k = d[l].split('=');
              var p = k.slice(1).join('=');
              try {
                var n = decodeURIComponent(k[0]);
                h[n] = b.read(p, n);
                if (e === n)
                  break;
              } catch (q) {
              }
            }
            return e ? h[e] : h;
          }
        },
        remove: function (e, d) {
          g(e, '', a({}, d, { expires: -1 }));
        },
        withAttributes: function (e) {
          return f(this.converter, a({}, this.attributes, e));
        },
        withConverter: function (e) {
          return f(a({}, this.converter, e), this.attributes);
        }
      }, {
        attributes: { value: Object.freeze(c) },
        converter: { value: Object.freeze(b) }
      });
    }
    return f({
      read: function (b) {
        if ('"' === b[0]) {
          b = b.slice(1, -1);
        }
        return b.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
      },
      write: function (b) {
        return encodeURIComponent(b).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
      }
    }, { path: '/' });
  }));
  AiCookies = Cookies.noConflict();
  function m(a) {
    if (null == a)
      return a;
    if ('"' === a.charAt(0)) {
      a = a.slice(1, -1);
    }
    try {
      a = JSON.parse(a);
    } catch (f) {
    }
    return a;
  }
  ai_check_block = function (a) {
    var f = 'undefined' !== typeof ai_debugging;
    if (null == a)
      return true;
    var b = m(AiCookies.get('aiBLOCKS'));
    ai_debug_cookie_status = '';
    if (null == b) {
      b = {};
    }
    if ('undefined' !== typeof ai_delay_showing_pageviews) {
      if (!b.hasOwnProperty(a)) {
        b[a] = {};
      }
      if (!b[a].hasOwnProperty('d')) {
        b[a].d = ai_delay_showing_pageviews;
        if (f) {
          console.log('AI CHECK block', a, 'NO COOKIE DATA d, delayed for', ai_delay_showing_pageviews, 'pageviews');
        }
      }
    }
    if (b.hasOwnProperty(a)) {
      for (var c in b[a]) {
        if ('x' == c) {
          var g = '';
          var e = document.querySelectorAll('span[data-ai-block="' + a + '"]')[0];
          if ('aiHash' in e.dataset) {
            g = e.dataset.aiHash;
          }
          e = '';
          if (b[a].hasOwnProperty('h')) {
            e = b[a].h;
          }
          if (f) {
            console.log('AI CHECK block', a, 'x cookie hash', e, 'code hash', g);
          }
          var d = new Date();
          d = b[a][c] - Math.round(d.getTime() / 1000);
          if (0 < d && e == g) {
            ai_debug_cookie_status = b = 'closed for ' + d + ' s=' + Math.round(10000 * d / 3600 / 24) / 10000 + ' days';
            if (f) {
              console.log('AI CHECK block', a, b);
            }
            if (f) {
              console.log('');
            }
            return false;
          }
          if (f) {
            console.log('AI CHECK block', a, 'removing x');
          }
          ai_set_cookie(a, 'x', '');
          if (!(b[a].hasOwnProperty('i') || b[a].hasOwnProperty('c'))) {
            ai_set_cookie(a, 'h', '');
          }
        } else if ('d' == c) {
          if (0 != b[a][c]) {
            ai_debug_cookie_status = b = 'delayed for ' + b[a][c] + ' pageviews';
            if (f) {
              console.log('AI CHECK block', a, b);
            }
            if (f) {
              console.log('');
            }
            return false;
          }
        } else if ('i' == c) {
          g = '';
          e = document.querySelectorAll('span[data-ai-block="' + a + '"]')[0];
          if ('aiHash' in e.dataset) {
            g = e.dataset.aiHash;
          }
          e = '';
          if (b[a].hasOwnProperty('h')) {
            e = b[a].h;
          }
          if (f) {
            console.log('AI CHECK block', a, 'i cookie hash', e, 'code hash', g);
          }
          if (0 == b[a][c] && e == g) {
            ai_debug_cookie_status = b = 'max impressions reached';
            if (f) {
              console.log('AI CHECK block', a, b);
            }
            if (f) {
              console.log('');
            }
            return false;
          }
          if (0 > b[a][c] && e == g) {
            d = new Date();
            d = -b[a][c] - Math.round(d.getTime() / 1000);
            if (0 < d) {
              ai_debug_cookie_status = b = 'max imp. reached (' + Math.round(10000 * d / 24 / 3600) / 10000 + ' days=' + d + ' s)';
              if (f) {
                console.log('AI CHECK block', a, b);
              }
              if (f) {
                console.log('');
              }
              return false;
            }
            if (f) {
              console.log('AI CHECK block', a, 'removing i');
            }
            ai_set_cookie(a, 'i', '');
            if (!(b[a].hasOwnProperty('c') || b[a].hasOwnProperty('x'))) {
              if (f) {
                console.log('AI CHECK block', a, 'cookie h removed');
              }
              ai_set_cookie(a, 'h', '');
            }
          }
        }
        if ('ipt' == c && 0 == b[a][c] && (d = new Date(), g = Math.round(d.getTime() / 1000), d = b[a].it - g, 0 < d)) {
          ai_debug_cookie_status = b = 'max imp. per time reached (' + Math.round(10000 * d / 24 / 3600) / 10000 + ' days=' + d + ' s)';
          if (f) {
            console.log('AI CHECK block', a, b);
          }
          if (f) {
            console.log('');
          }
          return false;
        }
        if ('c' == c) {
          g = '';
          e = document.querySelectorAll('span[data-ai-block="' + a + '"]')[0];
          if ('aiHash' in e.dataset) {
            g = e.dataset.aiHash;
          }
          e = '';
          if (b[a].hasOwnProperty('h')) {
            e = b[a].h;
          }
          if (f) {
            console.log('AI CHECK block', a, 'c cookie hash', e, 'code hash', g);
          }
          if (0 == b[a][c] && e == g) {
            ai_debug_cookie_status = b = 'max clicks reached';
            if (f) {
              console.log('AI CHECK block', a, b);
            }
            if (f) {
              console.log('');
            }
            return false;
          }
          if (0 > b[a][c] && e == g) {
            d = new Date();
            d = -b[a][c] - Math.round(d.getTime() / 1000);
            if (0 < d) {
              ai_debug_cookie_status = b = 'max clicks reached (' + Math.round(10000 * d / 24 / 3600) / 10000 + ' days=' + d + ' s)';
              if (f) {
                console.log('AI CHECK block', a, b);
              }
              if (f) {
                console.log('');
              }
              return false;
            }
            if (f) {
              console.log('AI CHECK block', a, 'removing c');
            }
            ai_set_cookie(a, 'c', '');
            if (!(b[a].hasOwnProperty('i') || b[a].hasOwnProperty('x'))) {
              if (f) {
                console.log('AI CHECK block', a, 'cookie h removed');
              }
              ai_set_cookie(a, 'h', '');
            }
          }
        }
        if ('cpt' == c && 0 == b[a][c] && (d = new Date(), g = Math.round(d.getTime() / 1000), d = b[a].ct - g, 0 < d)) {
          ai_debug_cookie_status = b = 'max clicks per time reached (' + Math.round(10000 * d / 24 / 3600) / 10000 + ' days=' + d + ' s)';
          if (f) {
            console.log('AI CHECK block', a, b);
          }
          if (f) {
            console.log('');
          }
          return false;
        }
      }
      if (b.hasOwnProperty('G') && b.G.hasOwnProperty('cpt') && 0 == b.G.cpt && (d = new Date(), g = Math.round(d.getTime() / 1000), d = b.G.ct - g, 0 < d)) {
        ai_debug_cookie_status = b = 'max global clicks per time reached (' + Math.round(10000 * d / 24 / 3600) / 10000 + ' days=' + d + ' s)';
        if (f) {
          console.log('AI CHECK GLOBAL', b);
        }
        if (f) {
          console.log('');
        }
        return false;
      }
    }
    ai_debug_cookie_status = 'OK';
    if (f) {
      console.log('AI CHECK block', a, 'OK');
    }
    if (f) {
      console.log('');
    }
    return true;
  };
  ai_check_and_insert_block = function (a, f) {
    var b = 'undefined' !== typeof ai_debugging;
    if (null == a)
      return true;
    var c = document.getElementsByClassName(f);
    if (c.length) {
      c = c[0];
      var g = c.closest('.' + ai_block_class_def);
      var e = ai_check_block(a);
      if (!e && 0 != parseInt(c.getAttribute('limits-fallback')) && c.hasAttribute('data-fallback-code')) {
        if (b) {
          console.log('AI CHECK FAILED, INSERTING FALLBACK BLOCK', c.getAttribute('limits-fallback'));
        }
        c.setAttribute('data-code', c.getAttribute('data-fallback-code'));
        if (null != g && g.hasAttribute('data-ai') && c.hasAttribute('fallback-tracking') && c.hasAttribute('fallback_level')) {
          g.setAttribute('data-ai-' + c.getAttribute('fallback_level'), c.getAttribute('fallback-tracking'));
        }
        e = true;
      }
      c.removeAttribute('data-selector');
      e ? (ai_insert_code(c), g && (b = g.querySelectorAll('.ai-debug-block'), b.length && (g.classList.remove('ai-list-block'), g.classList.remove('ai-list-block-ip'), g.classList.remove('ai-list-block-filter'), g.style.visibility = '', g.classList.contains('ai-remove-position') && (g.style.position = '')))) : (b = c.closest('div[data-ai]'), null != b && 'undefined' != typeof b.getAttribute('data-ai') && (e = JSON.parse(b64d(b.getAttribute('data-ai'))), 'undefined' !== typeof e && e.constructor === Array && (e[1] = '', b.setAttribute('data-ai', b64e(JSON.stringify(e))))), g && (b = g.querySelectorAll('.ai-debug-block'), b.length && (g.classList.remove('ai-list-block'), g.classList.remove('ai-list-block-ip'), g.classList.remove('ai-list-block-filter'), g.style.visibility = '', g.classList.contains('ai-remove-position') && (g.style.position = ''))));
      c.classList.remove(f);
    }
    c = document.querySelectorAll('.' + f + '-dbg');
    g = 0;
    for (b = c.length; g < b; g++) {
      e = c[g];
      e.querySelector('.ai-status').textContent = ai_debug_cookie_status;
      e.querySelector('.ai-cookie-data').textContent = ai_get_cookie_text(a);
      e.classList.remove(f + '-dbg');
    }
  };
  ai_load_cookie = function () {
    var a = 'undefined' !== typeof ai_debugging;
    var f = m(AiCookies.get('aiBLOCKS'));
    if (null == f) {
      f = {};
      if (a) {
        console.log('AI COOKIE NOT PRESENT');
      }
    }
    if (a) {
      console.log('AI COOKIE LOAD', f);
    }
    return f;
  };
  ai_set_cookie = function (a, f, b) {
    var c = 'undefined' !== typeof ai_debugging;
    if (c) {
      console.log('AI COOKIE SET block:', a, 'property:', f, 'value:', b);
    }
    var g = ai_load_cookie();
    if ('' === b) {
      if (g.hasOwnProperty(a)) {
        delete g[a][f];
        a: {
          f = g[a];
          for (e in f)
            if (f.hasOwnProperty(e)) {
              var e = false;
              break a;
            }
          e = true;
        }
        if (e) {
          delete g[a];
        }
      }
    } else {
      if (!g.hasOwnProperty(a)) {
        g[a] = {};
      }
      g[a][f] = b;
    }
    0 === Object.keys(g).length && g.constructor === Object ? (AiCookies.remove('aiBLOCKS'), c && console.log('AI COOKIE REMOVED')) : AiCookies.set('aiBLOCKS', JSON.stringify(g), {
      expires: 365,
      path: '/'
    });
    if (c) {
      a = m(AiCookies.get('aiBLOCKS'));
      if ('undefined' != typeof a) {
        console.log('AI COOKIE NEW', a);
        console.log('AI COOKIE DATA:');
        for (var d in a) {
          for (var h in a[d])
            'x' == h ? (c = new Date(), c = a[d][h] - Math.round(c.getTime() / 1000), console.log('  BLOCK', d, 'closed for', c, 's=', Math.round(10000 * c / 3600 / 24) / 10000, 'days')) : 'd' == h ? console.log('  BLOCK', d, 'delayed for', a[d][h], 'pageviews') : 'e' == h ? console.log('  BLOCK', d, 'show every', a[d][h], 'pageviews') : 'i' == h ? (e = a[d][h], 0 <= e ? console.log('  BLOCK', d, a[d][h], 'impressions until limit') : (c = new Date(), c = -e - Math.round(c.getTime() / 1000), console.log('  BLOCK', d, 'max impressions, closed for', c, 's=', Math.round(10000 * c / 3600 / 24) / 10000, 'days'))) : 'ipt' == h ? console.log('  BLOCK', d, a[d][h], 'impressions until limit per time period') : 'it' == h ? (c = new Date(), c = a[d][h] - Math.round(c.getTime() / 1000), console.log('  BLOCK', d, 'impressions limit expiration in', c, 's=', Math.round(10000 * c / 3600 / 24) / 10000, 'days')) : 'c' == h ? (e = a[d][h], 0 <= e ? console.log('  BLOCK', d, e, 'clicks until limit') : (c = new Date(), c = -e - Math.round(c.getTime() / 1000), console.log('  BLOCK', d, 'max clicks, closed for', c, 's=', Math.round(10000 * c / 3600 / 24) / 10000, 'days'))) : 'cpt' == h ? console.log('  BLOCK', d, a[d][h], 'clicks until limit per time period') : 'ct' == h ? (c = new Date(), c = a[d][h] - Math.round(c.getTime() / 1000), console.log('  BLOCK', d, 'clicks limit expiration in ', c, 's=', Math.round(10000 * c / 3600 / 24) / 10000, 'days')) : 'h' == h ? console.log('  BLOCK', d, 'hash', a[d][h]) : console.log('      ?:', d, ':', h, a[d][h]);
          console.log('');
        }
      } else
        console.log('AI COOKIE NOT PRESENT');
    }
    return g;
  };
  ai_get_cookie_text = function (a) {
    var f = m(AiCookies.get('aiBLOCKS'));
    if (null == f) {
      f = {};
    }
    var b = '';
    if (f.hasOwnProperty('G')) {
      b = 'G[' + JSON.stringify(f.G).replace(/"/g, '').replace('{', '').replace('}', '') + '] ';
    }
    var c = '';
    if (f.hasOwnProperty(a)) {
      c = JSON.stringify(f[a]).replace(/"/g, '').replace('{', '').replace('}', '');
    }
    return b + c;
  };
}
if ('undefined' !== typeof ai_internal_tracking) {
  ai_viewport_names = JSON.parse(b64d(ai_viewport_names_string));
  function F(k, l) {
    return new RegExp('^' + l.split('*').map(r => r.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')).join('.*') + '$').test(k);
  }
  function I(k, l, r, x) {
    if (x) {
      const B = y => {
        if (y.target && y.target.matches(x)) {
          r(y);
        }
      };
      k.addEventListener(l, B);
      return B;
    }
    k.addEventListener(l, r);
    return r;
  }
  installIframeTracker = function (k, l) {
    if ('function' == typeof k) {
      k = { blurCallback: k };
    }
    if (null === k || false === k)
      ai_iframeTracker.untrack(l);
    else if ('object' == typeof k)
      ai_iframeTracker.track(l, k);
    else
      throw Error('Wrong handler type (must be an object, or null|false to untrack)');
    return this;
  };
  var ai_mouseoverHander = function (k, l) {
    l.data = { handler: k };
    ai_iframeTracker.mouseoverListener(l);
  };
  var ai_mouseoutHander = function (k, l) {
    l.data = { handler: k };
    ai_iframeTracker.mouseoutListener(l);
  };
  ai_iframeTracker = {
    focusRetriever: null,
    focusRetrieved: false,
    handlersList: [],
    isIE8AndOlder: false,
    init: function () {
      try {
        if (9 > navigator.userAgent.match(/(msie) ([\w.]+)/i)[2]) {
          this.isIE8AndOlder = true;
        }
      } catch (l) {
      }
      window.focus();
      window.addEventListener('blur', l => {
        ai_iframeTracker.windowLoseFocus(l);
      });
      var k = document.createElement('div');
      k.style = 'position:fixed; top:0; left:0; overflow:hidden;';
      k.innerHTML = '<input style="position:absolute; left:-300px;" type="text" value="" id="focus_retriever" readonly="true" /><label for="focus_retriever">&nbsp;</label>';
      document.querySelector('body').append(k);
      this.focusRetriever = document.querySelector('#focus_retriever');
      this.focusRetrieved = false;
      if (this.isIE8AndOlder) {
        this.focusRetriever.blur(function (l) {
          l.stopPropagation();
          l.preventDefault();
          ai_iframeTracker.windowLoseFocus(l);
        });
        document.querySelector('body').addEventListener('click', l => {
          window.focus();
        });
        document.querySelector('form').addEventListener('click', l => {
          l.stopPropagation();
        });
        try {
          I(document.querySelector('body'), 'click', l => {
            l.stopPropagation();
          }, 'form');
        } catch (l) {
          console.log('[iframeTracker] error (exception: ' + l.message + ')');
        }
      }
    },
    track: function (k, l) {
      l.target = k;
      ai_iframeTracker.handlersList.push(l);
      k.addEventListener('mouseover', ai_mouseoverHander.bind(event, l), false);
      k.addEventListener('mouseout', ai_mouseoutHander.bind(event, l), false);
    },
    untrack: function (k) {
      if ('function' != typeof Array.prototype.filter)
        console.log("Your browser doesn't support Array filter, untrack disabled");
      else {
        k.forEach((B, y) => {
          B.removeEventListener('mouseover', ai_mouseoverHander, false);
          B.removeEventListener('mouseout', ai_mouseoutHander, false);
        });
        var l = function (B) {
          return null === B ? false : true;
        };
        var r;
        for (r in this.handlersList) {
          for (var x in this.handlersList[r].target)
            if (-1 !== $.inArray(this.handlersList[r].target[x], k)) {
              this.handlersList[r].target[x] = null;
            }
          this.handlersList[r].target = this.handlersList[r].target.filter(l);
          if (0 === this.handlersList[r].target.length) {
            this.handlersList[r] = null;
          }
        }
        this.handlersList = this.handlersList.filter(l);
      }
    },
    mouseoverListener: function (k) {
      k.data.handler.over = true;
      ai_iframeTracker.retrieveFocus();
      try {
        k.data.handler.overCallback(k.data.handler.target, k);
      } catch (l) {
      }
    },
    mouseoutListener: function (k) {
      k.data.handler.over = false;
      ai_iframeTracker.retrieveFocus();
      try {
        k.data.handler.outCallback(k.data.handler.target, k);
      } catch (l) {
      }
    },
    retrieveFocus: function () {
      if (document.activeElement && 'IFRAME' === document.activeElement.tagName) {
        var k = true;
        if (document.activeElement.hasAttribute('id') && 'undefined' !== typeof ai_ignore_iframe_ids && ai_ignore_iframe_ids.constructor === Array) {
          var l = document.activeElement.id;
          ai_ignore_iframe_ids.forEach(function (x) {
            if (F(document.activeElement.id, x)) {
              k = false;
            }
          });
        }
        if (k && document.activeElement.hasAttribute('class') && 'undefined' !== typeof ai_ignore_iframe_classes && ai_ignore_iframe_classes.constructor === Array) {
          var r = document.activeElement.className;
          ai_ignore_iframe_classes.forEach(function (x) {
            if (F(document.activeElement.className, x)) {
              k = false;
            }
          });
        }
        if (k) {
          ai_iframeTracker.focusRetriever.focus();
          ai_iframeTracker.focusRetrieved = true;
        }
      }
    },
    windowLoseFocus: function (k) {
      for (var l in this.handlersList)
        if (true === this.handlersList[l].over)
          try {
            this.handlersList[l].blurCallback(k);
          } catch (r) {
          }
    }
  };
  function G(k) {
    'complete' === document.readyState || 'loading' !== document.readyState && !document.documentElement.doScroll ? k() : document.addEventListener('DOMContentLoaded', k);
  }
  G(function () {
    ai_iframeTracker.init();
  });
  ai_tracking_finished = false;
  G(function () {
    function k(b, m, n, f, d, a, c) {
      b = b.replace('[EVENT]', m);
      b = b.replace('[BLOCK_NUMBER]', n);
      b = b.replace('[BLOCK_NAME]', f);
      b = b.replace('[BLOCK_COUNTER]', d);
      b = b.replace('[VERSION_NUMBER]', a);
      b = b.replace('[VERSION_NAME]', c);
      b = b.replace('[BLOCK_VERSION_NUMBER]', n + (0 == a ? '' : ' - ' + a));
      b = b.replace('[BLOCK_VERSION_NAME]', f + ('' == c ? '' : ' - ' + c));
      return b = b.replace('[WP_USERNAME]', ai_external_tracking_username);
    }
    function l(b, m, n, f, d, a, c) {
      var h = k(ai_external_tracking_category, b, m, n, f, d, a);
      var g = k(ai_external_tracking_action, b, m, n, f, d, a);
      var q = k(ai_external_tracking_label, b, m, n, f, d, a);
      if ('function' != typeof ai_external_tracking_event || 0 != ai_external_tracking_event({
          event: b,
          block: m,
          block_name: n,
          block_counter: f,
          version: d,
          version_name: a
        }, h, g, q, c)) {
        if ('function' == typeof window.ga) {
          b = 'send';
          'string' == typeof ai_ga_tracker_name ? b = ai_ga_tracker_name + '.' + b : (m = ga.getAll(), 0 != m.length && (m = m[0].get('name'), 't0' != m && (b = m + '.' + b)));
          ga(b, 'event', {
            eventCategory: h,
            eventAction: g,
            eventLabel: q,
            nonInteraction: c
          });
        }
        if ('function' == typeof window.gtag) {
          gtag('event', 'impression', {
            event_category: h,
            event_action: g,
            event_label: q,
            non_interaction: c
          });
        }
        if ('function' == typeof window.__gaTracker) {
          __gaTracker('send', 'event', {
            eventCategory: h,
            eventAction: g,
            eventLabel: q,
            nonInteraction: c
          });
        }
        if ('object' == typeof window.dataLayer) {
          window.dataLayer.push({
            event: 'tracking',
            eventCategory: h,
            eventAction: g,
            eventLabel: q
          });
        }
        if ('object' == typeof _gaq) {
          _gaq.push([
            '_trackEvent',
            h,
            g,
            q,
            void 0,
            c
          ]);
        }
        if ('object' == typeof _paq) {
          _paq.push([
            'trackEvent',
            h,
            g,
            q
          ]);
        }
      }
    }
    function r(b, m) {
      var n = b[0];
      var f = b[1];
      if (Number.isInteger(b[1]))
        if ('undefined' == typeof ai_check_data && 'undefined' == typeof ai_check_data_timeout) {
          ai_check_data_timeout = true;
          setTimeout(function () {
            r(b, m);
          }, 2500);
        } else {
          ai_cookie = ai_load_cookie();
          for (var d in ai_cookie)
            if (parseInt(b[0]) == parseInt(d))
              for (var a in ai_cookie[d])
                if ('c' == a) {
                  var c = ai_cookie[d][a];
                  if (0 < c) {
                    ai_set_cookie(d, 'c', c - 1);
                    if (1 == c) {
                      c = document.querySelector('span[data-ai-block="' + b[0] + '"]').dataset.aiCfpTime;
                      var h = new Date();
                      h = Math.round(h.getTime() / 1000);
                      var g = h + 604800;
                      ai_set_cookie(d, 'c', -g);
                      setTimeout(function () {
                        document.querySelectorAll('span[data-ai-block="' + b[0] + '"]').forEach((e, p) => {
                          if (e = e.closest('div[data-ai]')) {
                            e.remove();
                          }
                        });
                      }, 50);
                    } else
                      ai_set_cookie(d, 'c', c - 1);
                  }
                } else if ('cpt' == a) {
                  c = ai_cookie[d][a];
                  0 < c ? (ai_set_cookie(d, 'cpt', c - 1), 1 == c && (c = document.querySelector('span[data-ai-block="' + b[0] + '"]').dataset.aiCfpTime, h = new Date(), h = Math.round(h.getTime() / 1000), g = ai_cookie[d].ct, ai_set_cookie(d, 'x', g), setTimeout(function () {
                    document.querySelectorAll('span[data-ai-block="' + b[0] + '"]').forEach((e, p) => {
                      if (e = e.closest('div[data-ai]')) {
                        e.remove();
                      }
                    });
                  }, 75), 'undefined' != typeof c && (g = h + 86400 * c, ai_set_cookie(b[0], 'x', g), document.querySelectorAll('span.ai-cfp').forEach((e, p) => {
                    p = e.dataset.aiBlock;
                    setTimeout(function () {
                      var v = e.closest('div[data-ai]');
                      if (v) {
                        v.remove();
                      }
                    }, 50);
                    ai_set_cookie(p, 'x', g);
                  })))) : ai_check_data.hasOwnProperty(d) && ai_check_data[d].hasOwnProperty('cpt') && ai_check_data[d].hasOwnProperty('ct') ? ai_cookie.hasOwnProperty(d) && ai_cookie[d].hasOwnProperty('ct') && (h = new Date(), c = ai_cookie[d].ct - Math.round(h.getTime() / 1000), 0 >= c && (h = Math.round(h.getTime() / 1000), ai_set_cookie(d, 'cpt', ai_check_data[d].cpt - 1), ai_set_cookie(d, 'ct', Math.round(h + 86400 * ai_check_data[d].ct)))) : (ai_cookie.hasOwnProperty(d) && ai_cookie[d].hasOwnProperty('cpt') && ai_set_cookie(d, 'cpt', ''), ai_cookie.hasOwnProperty(d) && ai_cookie[d].hasOwnProperty('ct') && ai_set_cookie(d, 'ct', ''));
                }
          if (ai_cookie.hasOwnProperty('G') && ai_cookie.G.hasOwnProperty('cpt')) {
            c = ai_cookie.G.cpt;
            0 < c ? (ai_set_cookie('G', 'cpt', c - 1), 1 == c && (c = document.querySelector('span[data-ai-block="' + b[0] + '"]').dataset.aiCfpTime, h = new Date(), h = Math.round(h.getTime() / 1000), g = ai_cookie.G.ct, ai_set_cookie(b[0], 'x', g), setTimeout(function () {
              document.querySelectorAll('span[data-ai-block="' + b[0] + '"]').forEach((e, p) => {
                if (e = e.closest('div[data-ai]')) {
                  e.remove();
                }
              });
            }, 75), 'undefined' != typeof c && (g = h + 86400 * c, ai_set_cookie(b[0], 'x', g), document.querySelectorAll('span.ai-cfp').forEach((e, p) => {
              p = e.dataset.aiBlock;
              setTimeout(function () {
                e.closest('div[data-ai]').remove();
              }, 50);
              ai_set_cookie(p, 'x', g);
            })))) : ai_check_data.hasOwnProperty('G') && ai_check_data.G.hasOwnProperty('cpt') && ai_check_data.G.hasOwnProperty('ct') ? ai_cookie.hasOwnProperty('G') && ai_cookie.G.hasOwnProperty('ct') && (h = new Date(), c = ai_cookie.G.ct - Math.round(h.getTime() / 1000), 0 >= c && (h = Math.round(h.getTime() / 1000), ai_set_cookie('G', 'cpt', ai_check_data.G.cpt - 1), ai_set_cookie('G', 'ct', Math.round(h + 86400 * ai_check_data.G.ct)))) : (ai_cookie.hasOwnProperty('G') && ai_cookie.G.hasOwnProperty('cpt') && ai_set_cookie('G', 'cpt', ''), ai_cookie.hasOwnProperty('G') && ai_cookie.G.hasOwnProperty('ct') && ai_set_cookie('G', 'ct', ''));
          }
          if (ai_internal_tracking && 'undefined' === typeof ai_internal_tracking_no_clicks) {
            d = {
              action: 'ai_ajax',
              ai_check: ai_data_id,
              click: b[0],
              version: b[1],
              type: m
            };
            var q = [];
            var u;
            for (u in d) {
              a = encodeURIComponent(u);
              c = encodeURIComponent(d[u]);
              q.push(a + '=' + c);
            }
            q = q.join('&');
            (async function () {
              return await (await fetch(ai_ajax_url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
                body: q
              })).text();
            }().then(e => {
              e = e.trim();
              if ('' != e) {
                e = JSON.parse(e);
                if ('undefined' != typeof e['#'] && e['#'] == b[0]) {
                  ai_cookie = ai_load_cookie();
                  e = Math.round(new Date().getTime() / 1000) + 43200;
                  if (!(ai_cookie.hasOwnProperty(b[0]) && ai_cookie[b[0]].hasOwnProperty('x'))) {
                    ai_set_cookie(b[0], 'x', e);
                  }
                  setTimeout(function () {
                    document.querySelectorAll('span[data-ai-block="' + b[0] + '"]').forEach((p, v) => {
                      if (p = p.closest('div[data-ai]')) {
                        p.remove();
                      }
                    });
                  }, 50);
                }
              }
            }));
          }
          if (ai_external_tracking && 'undefined' === typeof ai_external_tracking_no_clicks) {
            var t = b[2];
            var w = b[3];
            l('click', b[0], b[2], b[4], b[1], b[3], false);
          }
          if ('function' == typeof ai_click_action) {
            ai_click_action(b[0], b[2], b[1], b[3]);
          }
        }
    }
    function x() {
      ai_check_data = {};
      if ('undefined' == typeof ai_iframe) {
        ai_cookie = ai_load_cookie();
        document.querySelectorAll('.ai-check-block').forEach((f, d) => {
          var a = f.dataset.aiBlock;
          var c = f.dataset.aiDelayPv;
          var h = f.dataset.aiEveryPv;
          var g = f.dataset.aiHash;
          var q = f.dataset.aiMaxImp;
          var u = f.dataset.aiLimitImpPerTime;
          var t = f.dataset.aiLimitImpTime;
          var w = f.dataset.aiMaxClicks;
          var e = f.dataset.aiLimitClicksPerTime;
          var p = f.dataset.aiLimitClicksTime;
          d = f.dataset.aiGlobalLimitClicksPerTime;
          f = f.dataset.aiGlobalLimitClicksTime;
          if ('undefined' != typeof c && 0 < c) {
            if (!ai_check_data.hasOwnProperty(a)) {
              ai_check_data[a] = {};
            }
            ai_check_data[a].d = c;
            var v = '';
            if (ai_cookie.hasOwnProperty(a) && ai_cookie[a].hasOwnProperty('d')) {
              v = ai_cookie[a].d;
            }
            if ('' === v) {
              ai_set_cookie(a, 'd', c - 1);
            }
          }
          if ('undefined' != typeof h && 2 <= h) {
            if (!ai_check_data.hasOwnProperty(a)) {
              ai_check_data[a] = {};
            }
            if (!('undefined' !== typeof ai_delay_showing_pageviews || ai_cookie.hasOwnProperty(a) && ai_cookie[a].hasOwnProperty('d'))) {
              if (!ai_cookie.hasOwnProperty(a)) {
                ai_cookie[a] = {};
              }
              ai_cookie[a].d = 0;
            }
            ai_check_data[a].e = h;
          }
          if ('undefined' != typeof q && 0 < q) {
            if (!ai_check_data.hasOwnProperty(a)) {
              ai_check_data[a] = {};
            }
            ai_check_data[a].i = q;
            ai_check_data[a].h = g;
            h = c = '';
            if (ai_cookie.hasOwnProperty(a)) {
              if (ai_cookie[a].hasOwnProperty('i')) {
                h = ai_cookie[a].i;
              }
              if (ai_cookie[a].hasOwnProperty('h')) {
                c = ai_cookie[a].h;
              }
            }
            if ('' === h || c != g) {
              ai_set_cookie(a, 'i', q);
              ai_set_cookie(a, 'h', g);
            }
          } else if (ai_cookie.hasOwnProperty(a) && ai_cookie[a].hasOwnProperty('i')) {
            ai_set_cookie(a, 'i', '');
            if (!(ai_cookie[a].hasOwnProperty('c') || ai_cookie[a].hasOwnProperty('x'))) {
              ai_set_cookie(a, 'h', '');
            }
          }
          if ('undefined' != typeof u && 0 < u && 'undefined' != typeof f.dataset.aiLimitImpTime && 0 < f.dataset.aiLimitImpTime) {
            if (!ai_check_data.hasOwnProperty(a)) {
              ai_check_data[a] = {};
            }
            ai_check_data[a].ipt = u;
            ai_check_data[a].it = f.dataset.aiLimitImpTime;
            q = c = '';
            if (ai_cookie.hasOwnProperty(a)) {
              if (ai_cookie[a].hasOwnProperty('ipt')) {
                c = ai_cookie[a].ipt;
              }
              if (ai_cookie[a].hasOwnProperty('it')) {
                q = ai_cookie[a].it;
              }
            }
            if ('' === c || '' === q) {
              ai_set_cookie(a, 'ipt', u);
              c = new Date();
              c = Math.round(c.getTime() / 1000);
              ai_set_cookie(a, 'it', Math.round(c + 86400 * f.dataset.aiLimitImpTime));
            }
            if (0 < q) {
              c = new Date();
              c = Math.round(c.getTime() / 1000);
              if (q <= c) {
                ai_set_cookie(a, 'ipt', u);
                ai_set_cookie(a, 'it', Math.round(c + 86400 * f.dataset.aiLimitImpTime));
              }
            }
          } else if (ai_cookie.hasOwnProperty(a)) {
            if (ai_cookie[a].hasOwnProperty('ipt')) {
              ai_set_cookie(a, 'ipt', '');
            }
            if (ai_cookie[a].hasOwnProperty('it')) {
              ai_set_cookie(a, 'it', '');
            }
          }
          if ('undefined' != typeof w && 0 < w) {
            if (!ai_check_data.hasOwnProperty(a)) {
              ai_check_data[a] = {};
            }
            ai_check_data[a].c = w;
            ai_check_data[a].h = g;
            u = c = '';
            if (ai_cookie.hasOwnProperty(a)) {
              if (ai_cookie[a].hasOwnProperty('c')) {
                u = ai_cookie[a].c;
              }
              if (ai_cookie[a].hasOwnProperty('h')) {
                c = ai_cookie[a].h;
              }
            }
            if ('' === u || c != g) {
              ai_set_cookie(a, 'c', w);
              ai_set_cookie(a, 'h', g);
            }
          } else if (ai_cookie.hasOwnProperty(a) && ai_cookie[a].hasOwnProperty('c')) {
            ai_set_cookie(a, 'c', '');
            if (!(ai_cookie[a].hasOwnProperty('i') || ai_cookie[a].hasOwnProperty('x'))) {
              ai_set_cookie(a, 'h', '');
            }
          }
          if ('undefined' != typeof e && 0 < e && 'undefined' != typeof f.dataset.aiLimitClicksTime && 0 < f.dataset.aiLimitClicksTime) {
            if (!ai_check_data.hasOwnProperty(a)) {
              ai_check_data[a] = {};
            }
            ai_check_data[a].cpt = e;
            ai_check_data[a].ct = f.dataset.aiLimitClicksTime;
            g = w = '';
            if (ai_cookie.hasOwnProperty(a)) {
              if (ai_cookie[a].hasOwnProperty('cpt')) {
                w = ai_cookie[a].cpt;
              }
              if (ai_cookie[a].hasOwnProperty('ct')) {
                g = ai_cookie[a].ct;
              }
            }
            if ('' === w || '' === g) {
              ai_set_cookie(a, 'cpt', e);
              c = new Date();
              c = Math.round(c.getTime() / 1000);
              ai_set_cookie(a, 'ct', Math.round(c + 86400 * f.dataset.aiLimitClicksTime));
            }
            if (0 < g) {
              c = new Date();
              c = Math.round(c.getTime() / 1000);
              if (g <= c) {
                ai_set_cookie(a, 'cpt', e);
                ai_set_cookie(a, 'ct', Math.round(c + 86400 * f.dataset.aiLimitClicksTime));
              }
            }
          } else if (ai_cookie.hasOwnProperty(a)) {
            if (ai_cookie[a].hasOwnProperty('cpt')) {
              ai_set_cookie(a, 'cpt', '');
            }
            if (ai_cookie[a].hasOwnProperty('ct')) {
              ai_set_cookie(a, 'ct', '');
            }
          }
          if ('undefined' != typeof d && 0 < d && 'undefined' != typeof f && 0 < f) {
            if (!ai_check_data.hasOwnProperty('G')) {
              ai_check_data.G = {};
            }
            ai_check_data.G.cpt = d;
            ai_check_data.G.ct = f;
            a = e = '';
            if (ai_cookie.hasOwnProperty('G')) {
              if (ai_cookie.G.hasOwnProperty('cpt')) {
                e = ai_cookie.G.cpt;
              }
              if (ai_cookie.G.hasOwnProperty('ct')) {
                a = ai_cookie.G.ct;
              }
            }
            if ('' === e || '' === a) {
              ai_set_cookie('G', 'cpt', d);
              c = new Date();
              c = Math.round(c.getTime() / 1000);
              ai_set_cookie('G', 'ct', Math.round(c + 86400 * f));
            }
            if (0 < a) {
              c = new Date();
              c = Math.round(c.getTime() / 1000);
              if (a <= c) {
                ai_set_cookie('G', 'cpt', d);
                ai_set_cookie('G', 'ct', Math.round(c + 86400 * f));
              }
            }
          } else if (ai_cookie.hasOwnProperty('G')) {
            if (ai_cookie.G.hasOwnProperty('cpt')) {
              ai_set_cookie('G', 'cpt', '');
            }
            if (ai_cookie.G.hasOwnProperty('ct')) {
              ai_set_cookie('G', 'ct', '');
            }
          }
        });
        document.querySelectorAll('.ai-check-block').forEach((f, d) => {
          f.classList.remove('ai-check-block');
        });
        for (var b in ai_cookie)
          for (var m in ai_cookie[b])
            if ('d' == m) {
              var n = ai_cookie[b][m];
              0 < ai_cookie[b][m] ? ai_set_cookie(b, 'd', ai_cookie[b][m] - 1) : ai_check_data.hasOwnProperty(b) && ai_check_data[b].hasOwnProperty('e') ? ai_set_cookie(b, 'd', ai_check_data[b].e - 1) : ai_check_data.hasOwnProperty(b) && ai_check_data[b].hasOwnProperty('d') || ai_set_cookie(b, 'd', '');
            }
      }
    }
    function B() {
      if (ai_track_pageviews) {
        var b = document.documentElement.clientWidth;
        var m = window.innerWidth;
        var n = b < m ? m : b;
        var f = 0;
        ai_viewport_widths.every((h, g) => n >= h ? (f = ai_viewport_indexes[g], false) : true);
        b = document.querySelector(b64d('Ym9keQ==')).getAttribute(b64d(ai_adb_attribute));
        if ('string' === typeof b)
          var d = b == b64d('bWFzaw==');
        if ('string' === typeof b && 'boolean' === typeof d && d) {
          if (ai_external_tracking) {
            l('ad blocking', 0, ai_viewport_names[f - 1], 0, 0, '', true);
          }
          f |= 128;
        }
        y = [
          0,
          f
        ];
      }
      x();
      ai_process_impressions();
      if (0 != y.length && ai_internal_tracking) {
        d = {
          action: 'ai_ajax',
          ai_check: ai_data_id
        };
        var a = [];
        var c;
        for (c in d) {
          b = encodeURIComponent(c);
          m = encodeURIComponent(d[c]);
          a.push(b + '=' + m);
        }
        b = 'views%5B%5D';
        m = '0';
        a.push(b + '=' + m);
        b = 'versions%5B%5D';
        m = encodeURIComponent(f);
        a.push(b + '=' + m);
        a = a.join('&');
        (async function () {
          return await (await fetch(ai_ajax_url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: a
          })).text();
        }().then(h => {
        }));
      }
      ai_tracking_finished = true;
    }
    if (ai_debug_tracking) {
      ai_ajax_url += '?ai-debug-tracking=1';
    }
    Number.isInteger = Number.isInteger || function (b) {
      return 'number' === typeof b && isFinite(b) && Math.floor(b) === b;
    };
    ai_install_standard_click_trackers = function (b) {
      if ('undefined' == typeof b) {
        b = document.querySelector('body');
      }
      b = b.querySelectorAll('div.ai-track[data-ai]');
      var m = [];
      b.forEach((f, d) => {
        if (f.offsetWidth || f.offsetHeight || f.getClientRects().length)
          if (!f.querySelectorAll('div.ai-lazy, div.ai-wait-for-interaction, div.ai-manual, div.ai-list-manual, div.ai-manual-auto, div.ai-delayed').length) {
            m.push(f);
          }
      });
      var n = [];
      m.forEach((f, d) => {
        f.classList.remove('ai-track');
        n.push.apply(n, f.querySelectorAll('a'));
      });
      b = n;
      if (0 != b.length) {
        ai_advanced_click_detection ? b.forEach((f, d) => {
          f.addEventListener('click', () => {
            for (var a = f.closest('div[data-ai]'); null !== a && a.hasAttribute('data-ai');) {
              var c = JSON.parse(b64d(a.getAttribute('data-ai')));
              if ('undefined' !== typeof c && c.constructor === Array && Number.isInteger(c[1]) && !a.classList.contains('clicked')) {
                a.classList.add('clicked');
                r(c, 'a.click');
              }
              a = a.parentElement.closest('div[data-ai]');
            }
          });
        }) : b.forEach((f, d) => {
          f.addEventListener('click', () => {
            for (var a = f.closest('div[data-ai]'); null !== a && a.hasAttribute('data-ai');) {
              var c = JSON.parse(b64d(a.getAttribute('data-ai')));
              if ('undefined' !== typeof c && c.constructor === Array && Number.isInteger(c[1])) {
                r(c, 'a.click');
                clicked = true;
              }
              a = a.parentElement.closest('div[data-ai]');
            }
          });
        });
      }
    };
    ai_install_click_trackers = function (b) {
      if ('undefined' == typeof b) {
        b = document.querySelector('body');
      }
      if (ai_advanced_click_detection) {
        var m = b.querySelectorAll('div.ai-track[data-ai], div.ai-rotate[data-info] div.ai-track[data-ai]');
        var n = [];
        m.forEach((d, a) => {
          if (d.offsetWidth || d.offsetHeight || d.getClientRects().length) {
            n.push(d);
          }
        });
        if (b.hasAttribute('data-ai') && b.classList.contains('ai-track') && (b.offsetWidth || b.offsetHeight || b.getClientRects().length)) {
          n.push(b);
        }
        var f = [];
        n.forEach((d, a) => {
          if (!d.querySelectorAll('div.ai-lazy, div.ai-wait-for-interaction, div.ai-manual, div.ai-list-manual, div.ai-manual-auto, div.ai-delayed').length) {
            f.push(d);
          }
        });
        m = f;
        if (0 != m.length) {
          m.forEach((d, a) => {
            installIframeTracker({
              blurCallback: function () {
                if (null != this.ai_data && null != wrapper && !wrapper.classList.contains('clicked')) {
                  wrapper.classList.add('clicked');
                  r(this.ai_data, 'blurCallback');
                  for (var c = wrapper.querySelector('div[data-ai]'); null != c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length) && c.hasAttribute('data-ai');) {
                    var h = JSON.parse(b64d(c.getAttribute('data-ai')));
                    if ('undefined' !== typeof h && h.constructor === Array && Number.isInteger(h[1])) {
                      r(h, 'blurCallback INNER');
                    }
                    c = c.querySelector('div[data-ai]');
                  }
                }
              },
              overCallback: function (c) {
                c = c.closest('div[data-ai]');
                if (c.hasAttribute('data-ai')) {
                  var h = JSON.parse(b64d(c.getAttribute('data-ai')));
                  'undefined' !== typeof h && h.constructor === Array && Number.isInteger(h[1]) ? (wrapper = c, this.ai_data = h) : (null != wrapper && wrapper.classList.remove('clicked'), this.ai_data = wrapper = null);
                }
              },
              outCallback: function (c) {
                if (null != wrapper) {
                  wrapper.classList.remove('clicked');
                }
                this.ai_data = wrapper = null;
              },
              focusCallback: function (c) {
                if (null != this.ai_data && null != wrapper && !wrapper.classList.contains('clicked'))
                  for (wrapper.classList.add('clicked'), r(this.ai_data, 'focusCallback'), c = wrapper.querySelector('div[data-ai]'); null != c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length) && c.hasAttribute('data-ai');) {
                    var h = JSON.parse(b64d(c.getAttribute('data-ai')));
                    if ('undefined' !== typeof h && h.constructor === Array && Number.isInteger(h[1])) {
                      r(h, 'focusCallback INNER');
                    }
                    c = c.querySelector('div[data-ai]');
                  }
              },
              wrapper: null,
              ai_data: null,
              block: null,
              version: null
            }, d);
          });
        }
      }
      ai_install_standard_click_trackers(b);
    };
    var y = [];
    ai_process_impressions = function (b) {
      if ('undefined' == typeof b) {
        b = document.querySelector('body');
      }
      var m = [];
      var n = [];
      var f = [];
      var d = [];
      var a = [];
      if (0 != y.length) {
        m.push(y[0]);
        n.push(y[1]);
        f.push('Pageviews');
        a.push(0);
        d.push('');
      }
      var c = b.querySelectorAll('div.ai-track[data-ai], div.ai-rotate[data-info] div.ai-track[data-ai]');
      var h = [];
      c.forEach((e, p) => {
        if ((e.offsetWidth || e.offsetHeight || e.getClientRects().length) && !e.classList.contains('ai-no-pageview')) {
          h.push(e);
        }
      });
      if (null !== b && b.hasAttribute('data-ai') && b.classList.contains('ai-track') && !b.classList.contains('ai-no-pageview') && (b.offsetWidth || b.offsetHeight || b.getClientRects().length)) {
        h.push(b);
      }
      c = h;
      if (0 != c.length) {
        c.forEach((e, p) => {
          if (e.hasAttribute('data-ai')) {
            p = '';
            for (var v = 1; 9 >= v; v++)
              if (e.hasAttribute('data-ai-' + v))
                p = e.getAttribute('data-ai-' + v);
              else
                break;
            if ('' != p) {
              e.setAttribute('data-ai', p);
            }
            p = JSON.parse(b64d(e.getAttribute('data-ai')));
            if ('undefined' !== typeof p && p.constructor === Array) {
              v = 0;
              var z = e.querySelectorAll('div.ai-rotate[data-info]');
              if (1 == z.length) {
                v = JSON.parse(b64d(z[0].dataset.info))[1];
              }
              if (Number.isInteger(p[0]) && 0 != p[0] && Number.isInteger(p[1])) {
                z = 0;
                var C = e.classList.contains('ai-no-tracking');
                var A = document.querySelector(b64d('Ym9keQ==')).getAttribute(b64d(ai_adb_attribute));
                if ('string' === typeof A)
                  var D = A == b64d('bWFzaw==');
                if ('string' === typeof A && 'boolean' === typeof D) {
                  var E = e.offsetHeight;
                  A = e.querySelectorAll('.ai-attributes');
                  if (A.length) {
                    A.forEach((H, J) => {
                      if (E >= e.offsetHeight) {
                        E -= e.offsetHeight;
                      }
                    });
                  }
                  A = e.querySelectorAll('.ai-code');
                  E = 0;
                  if (A.length) {
                    A.forEach((H, J) => {
                      E += H.offsetHeight;
                    });
                  }
                  if (D && 0 === E) {
                    z = 128;
                  }
                }
                if (0 != e.querySelectorAll('div.ai-lazy, div.ai-wait-for-interaction, div.ai-manual, div.ai-list-manual, div.ai-manual-auto, div.ai-delayed').length) {
                  C = true;
                }
                if (!C)
                  if (0 == v) {
                    m.push(p[0]);
                    n.push(p[1] | z);
                    f.push(p[2]);
                    d.push(p[3]);
                    a.push(p[4]);
                  } else
                    for (D = 1; D <= v; D++) {
                      m.push(p[0]);
                      n.push(D | z);
                      f.push(p[2]);
                      d.push(p[3]);
                      a.push(p[4]);
                    }
              }
            }
          }
        });
      }
      ai_cookie = ai_load_cookie();
      for (var g in ai_cookie)
        if (m.includes(parseInt(g)))
          for (var q in ai_cookie[g])
            'i' == q ? (b = ai_cookie[g][q], 0 < b && (1 == b ? (b = new Date(), b = Math.round(b.getTime() / 1000) + 604800, ai_set_cookie(g, 'i', -b)) : ai_set_cookie(g, 'i', b - 1))) : 'ipt' == q && (b = ai_cookie[g][q], 0 < b ? ai_set_cookie(g, 'ipt', b - 1) : ai_check_data.hasOwnProperty(g) && ai_check_data[g].hasOwnProperty('ipt') && ai_check_data[g].hasOwnProperty('it') ? ai_cookie.hasOwnProperty(g) && ai_cookie[g].hasOwnProperty('it') && (b = new Date(), 0 >= ai_cookie[g].it - Math.round(b.getTime() / 1000) && (b = Math.round(b.getTime() / 1000), ai_set_cookie(g, 'ipt', ai_check_data[g].ipt), ai_set_cookie(g, 'it', Math.round(b + 86400 * ai_check_data[g].it)))) : (ai_cookie.hasOwnProperty(g) && ai_cookie[g].hasOwnProperty('ipt') && ai_set_cookie(g, 'ipt', ''), ai_cookie.hasOwnProperty(g) && ai_cookie[g].hasOwnProperty('it') && ai_set_cookie(g, 'it', '')));
      if (m.length) {
        if (ai_internal_tracking && 'undefined' === typeof ai_internal_tracking_no_impressions) {
          y = [];
          g = {
            action: 'ai_ajax',
            ai_check: ai_data_id
          };
          var u = [];
          var t;
          for (t in g) {
            q = encodeURIComponent(t);
            b = encodeURIComponent(g[t]);
            u.push(q + '=' + b);
          }
          for (var w in m) {
            q = 'views%5B%5D';
            b = encodeURIComponent(m[w]);
            u.push(q + '=' + b);
          }
          for (w in n) {
            q = 'versions%5B%5D';
            b = encodeURIComponent(n[w]);
            u.push(q + '=' + b);
          }
          u = u.join('&');
          (async function () {
            return await (await fetch(ai_ajax_url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
              body: u
            })).text();
          }().then(e => {
            e = e.trim();
            if ('' != e && (e = JSON.parse(e), 'undefined' != typeof e['#'])) {
              ai_cookie = ai_load_cookie();
              var p = Math.round(new Date().getTime() / 1000) + 43200;
              var v = [];
              var z;
              for (z in e['#'])
                if (!(ai_cookie.hasOwnProperty(e['#'][z]) && ai_cookie[e['#'][z]].hasOwnProperty('x'))) {
                  ai_set_cookie(e['#'][z], 'x', p);
                }
              setTimeout(function () {
                for (w = 0; w < v.length; ++w)
                  document.querySelectorAll('span[data-ai-block="' + v[w] + '"]').forEach((C, A) => {
                    if (C = C.closest('div[data-ai]')) {
                      C.remove();
                    }
                  });
              }, 50);
            }
          }));
        }
        if (ai_external_tracking && 'undefined' === typeof ai_external_tracking_no_impressions)
          for (t = 0; t < m.length; t++)
            if (0 != m[t]) {
              l('impression', m[t], f[t], a[t], n[t], d[t], true);
            }
      }
    };
    window.addEventListener('load', b => {
      if ('undefined' == typeof ai_delay_tracking) {
        ai_delay_tracking = 0;
      }
      setTimeout(B, ai_delay_tracking + 1400);
      setTimeout(ai_install_click_trackers, ai_delay_tracking + 1500);
    });
  });
}
if ('undefined' !== typeof ai_adsense_ad_names) {
  ai_process_adsense_ad = function (a) {
    var d = a.getAttribute('width');
    var e = a.getAttribute('height');
    var b = k(a.getAttribute('src'));
    if ('undefined' !== typeof b.client) {
      var f = b.client.replace('ca-', '');
      var c = b.slotname;
      b = b.ifi;
      var g = 'ai-debug-ad-overlay';
      var h = '';
      'undefined' !== typeof b.slotname ? (h = '', 'undefined' !== typeof ai_adsense_ad_names.publisher_id && ai_adsense_ad_names.publisher_id == f && 'undefined' !== typeof ai_adsense_ad_names[b.slotname] && (h = '<div class="ai-info ai-info-2">' + ai_adsense_ad_names[b.slotname] + '</div>'), h = '<div class="ai-info ai-info-1">' + b.slotname + '</div>' + h) : null != a.closest('div.google-auto-placed') ? (g += ' ai-auto-ads', h = '<div class="ai-info ai-info-1">Auto ads</div>') : g += ' ai-no-slot';
      f = '<div class="' + g + '"></div>';
      a.insertAdjacentHTML('afterend', '<div class="ai-debug-ad-info"><div class="ai-info ai-info-1">AdSense #' + b + '</div><div class="ai-info ai-info-2">' + d + 'x' + e + '</div>' + h + '</div>');
      if (!ai_preview_window) {
        a.insertAdjacentHTML('afterend', f);
      }
    }
  };
  (function (a) {
    'complete' === document.readyState || 'loading' !== document.readyState && !document.documentElement.doScroll ? a() : document.addEventListener('DOMContentLoaded', a);
  }(function () {
    var a = {
      action: 'ai_ajax',
      ai_check: ai_nonce,
      'adsense-ad-units[ai]': 1
    };
    var d = [];
    var e;
    for (e in a) {
      var b = encodeURIComponent(e);
      var f = encodeURIComponent(a[e]);
      d.push(b + '=' + f);
    }
    d = d.join('&');
    (async function () {
      return await (await fetch(ai_ajax_url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: d
      })).text();
    }().then(c => {
      if ('' != c)
        try {
          ai_adsense_ad_names = JSON.parse(c);
        } catch (g) {
        }
    }).catch(c => {
    }));
  }));
  if (!ai_preview_window) {
    const a = document.querySelector('body');
    new MutationObserver(function (d, e) {
      for (const b of d)
        if ('childList' === b.type && b.addedNodes.length && 'IFRAME' == b.addedNodes[0].tagName && null != b.addedNodes[0].getAttribute('width') && null != b.addedNodes[0].getAttribute('height') && b.addedNodes[0].closest('.adsbygoogle')) {
          ai_process_adsense_ad(b.addedNodes[0]);
        }
    }).observe(a, {
      attributes: false,
      childList: true,
      subtree: true
    });
  }
  function k(a) {
    var d = a ? a.split('?')[1] : window.location.search.slice(1);
    a = {};
    if (d) {
      d = d.split('#')[0];
      d = d.split('&');
      for (var e = 0; e < d.length; e++) {
        var b = d[e].split('=');
        var f = void 0;
        var c = b[0].replace(/\[\d*\]/, function (g) {
          f = g.slice(1, -1);
          return '';
        });
        b = 'undefined' === typeof b[1] ? '' : b[1];
        c = c.toLowerCase();
        b = b.toLowerCase();
        a[c] ? ('string' === typeof a[c] && (a[c] = [a[c]]), 'undefined' === typeof f ? a[c].push(b) : a[c][f] = b) : a[c] = b;
      }
    }
    return a;
  }
}
if ('undefined' !== typeof ai_adsense_ad_names) {
  window.addEventListener('load', function (b) {
    setTimeout(function () {
      document.querySelectorAll('.google-auto-placed > ins').forEach(function (a, c) {
        a.insertAdjacentHTML('afterbegin', '<section class="ai-debug-bar ai-debug-adsense ai-adsense-auto-ads">' + ai_front.automatically_placed + '</section>');
      });
    }, 150);
  });
}
function ai_check_close_buttons() {
  function e(a) {
    var b = a.querySelector('.ai-close-button.ai-close-unprocessed');
    var c = b.dataset.aiBlock;
    if (null != b) {
      b.addEventListener('click', g => {
        ai_close_block(b);
        if ('function' == typeof ai_close_button_action) {
          ai_close_button_action(b.dataset.aiBlock);
        }
      });
      var d = 0;
      if ('undefined' !== typeof ai_close_min_block_height && ai_close_min_block_height.constructor === Array && 'undefined' !== typeof ai_close_min_block_height[b.dataset.aiBlock]) {
        d = ai_close_min_block_height[b.dataset.aiBlock];
      }
      0 !== a.offsetHeight && a.offsetHeight >= d ? (null == a.querySelector('.ai-parallax') && (a.style.width = '', a.classList.add('ai-close-fit')), ai_fade_in(a.querySelector('.ai-close-button'), 50)) : (b = a, setTimeout(function () {
        if (0 !== b.offsetHeight && b.offsetHeight >= d) {
          if (null == b.querySelector('.ai-parallax')) {
            b.style.width = '';
            b.classList.add('ai-close-fit');
          }
          ai_fade_in(b.querySelector('.ai-close-button'), 50);
        }
      }, 4000));
      if ('undefined' === typeof ai_preview) {
        a = b.dataset.aiCloseTimeout;
        if ('undefined' != typeof a && 0 < a) {
          setTimeout(function () {
            ai_close_block(b);
          }, 1000 * (2 < a ? a - 2 : 0) + 1);
        }
      }
      b.classList.remove('ai-close-unprocessed');
    }
  }
  ai_close_block = function (a) {
    var b = a.closest('.ai-close');
    var c = a.dataset.aiBlock;
    if (null != b) {
      if (null != b.querySelector('.ai-attributes [data-ai-hash]') && 'aiHash' in b.querySelector('.ai-attributes [data-ai-hash]').dataset) {
        var d = b.querySelector('.ai-attributes [data-ai-hash]').dataset.aiHash;
        if ('aiClosedTime' in a.dataset) {
          a = a.dataset.aiClosedTime;
          var f = Math.round(new Date().getTime() / 1000);
          ai_set_cookie(a.dataset.aiBlock, 'x', Math.round(f + 86400 * a));
          ai_set_cookie(a.dataset.aiBlock, 'h', d);
        }
      } else {
        d = ai_set_cookie(a.dataset.aiBlock, 'x', '');
        if (!(!d.hasOwnProperty(a.dataset.aiBlock) || d[a.dataset.aiBlock].hasOwnProperty('i') || d[a.dataset.aiBlock].hasOwnProperty('c'))) {
          ai_set_cookie(a.dataset.aiBlock, 'h', '');
        }
      }
      b.remove();
    } else {
      ai_set_cookie(a.dataset.aiBlock, 'x', '');
      if (!(!d.hasOwnProperty(a.dataset.aiBlock) || d[a.dataset.aiBlock].hasOwnProperty('i') || d[a.dataset.aiBlock].hasOwnProperty('c'))) {
        ai_set_cookie(a.dataset.aiBlock, 'h', '');
      }
    }
  };
  ai_install_close_buttons = function (a) {
    setTimeout(function () {
      a instanceof Element && a.classList.contains('ai-close') ? e(a) : document.querySelectorAll('.ai-close').forEach((b, c) => {
        e(b);
      });
    }, ai_close_button_delay);
  };
  if ('undefined' == typeof ai_close_button_delay) {
    ai_close_button_delay = 2200;
  }
  ai_install_close_buttons(document);
}
function ai_fade_in(e, a) {
  e.style.display = 'block';
  e.style.opacity = 0;
  var b = +new Date();
  var c = function () {
    e.style.opacity = +e.style.opacity + (new Date() - b) / a;
    b = +new Date();
    if (1 > +e.style.opacity) {
      if (!(window.requestAnimationFrame && requestAnimationFrame(c))) {
        setTimeout(c, 16);
      }
    }
  };
  c();
}
function ai_ready(e) {
  'complete' === document.readyState || 'loading' !== document.readyState && !document.documentElement.doScroll ? e() : document.addEventListener('DOMContentLoaded', e);
}
ai_ready(ai_check_close_buttons);
if ('undefined' != typeof ai_filter) {
  function m(a, g) {
    if (g) {
      for (a = a.previousElementSibling; a && !a.matches(g);)
        a = a.previousElementSibling;
      return a;
    }
    return a.previousElementSibling;
  }
  function q() {
    return new Date().getTime() + '-' + Math.round(100000 * Math.random());
  }
  function p(a) {
    a.forEach((b, c) => {
      b.classList.remove('ai-filter-check');
    });
    var g = false;
    if ('' != ai_filter_hook_data) {
      try {
        var h = JSON.parse(ai_filter_hook_data);
      } catch (b) {
        return;
      }
      if (null != h) {
        a.forEach((b, c) => {
          c = b.closest('div.' + ai_block_class_def);
          var e = parseInt(b.dataset.block);
          g = false;
          if ('undefined' !== typeof h) {
            h.includes('*') ? (g = true, h.includes(-e) && (g = false)) : h.includes(e) && (g = true);
          }
          b.style.visibility = '';
          b.style.position = 'none';
          b.style.width = '';
          b.style.height = '';
          var d = b.style.zIndex = '';
          e = JSON.parse(ai_filter_hook_comments);
          if ('string' == typeof e)
            d = e;
          else if ('object' == typeof e) {
            d = '';
            for (const [k, n] of Object.entries(e))
              d += `${ k }: ${ n }\n`;
          } else
            d = ai_filter_hook_comments;
          if ('undefined' != typeof ai_front) {
            e = m(b, '.ai-debug-bar');
            if (null != e) {
              e.querySelectorAll('.ai-status').forEach((k, n) => {
                k.textContent = g ? ai_front.visible : ai_front.hidden;
              });
              e.querySelectorAll('.ai-filter-data').forEach((k, n) => {
                k.setAttribute('title', d);
              });
            }
          }
          if (g) {
            if (null != c) {
              c.style.visibility = '';
              if (c.classList.contains('ai-remove-position')) {
                c.style.position = '';
              }
            }
            if ('code' in b.dataset) {
              var f = b64d(b.dataset.code);
              e = document.createElement('div');
              e.innerHTML = f;
              f = document.createRange();
              try {
                var l = f.createContextualFragment(e.innerHTML);
              } catch (k) {
              }
              null != b.closest('head') ? (b.insertBefore(l, null), b.remove()) : b.parentNode.insertBefore(l, b.nextSibling);
              b.setAttribute('data-code', '');
              r(b.parentElement);
            }
          } else {
            b.style.display = 'none';
            if (null != c) {
              if (null != !c.querySelector('.ai-debug-block')) {
                c.style.display = 'none';
              }
              c.removeAttribute('data-ai');
              null != c.querySelector('.ai-debug-block') ? (c.style.visibility = '', c.classList.remove('ai-close'), c.classList.contains('ai-remove-position') && (c.style.position = ''), 'code' in b.dataset && (c.classList.remove('ai-list-block'), c.classList.remove('ai-list-block-ip'), null != m(c) && m(c).classList.contains('ai-debug-info') && m(c).remove())) : c.style.display = 'none';
            }
          }
          if (null != c) {
            c.classList.remove('ai-list-block-filter');
          }
        });
      }
    }
  }
  ai_process_filter_hooks = function (a) {
    if (null == a)
      ai_filter_hook_blocks = document.querySelectorAll('div.ai-filter-check, meta.ai-filter-check');
    else {
      if (window.jQuery && window.jQuery.fn && a instanceof jQuery) {
        ai_filter_hook_blocks = Array.prototype.slice.call(a);
      }
      var g = [];
      ai_filter_hook_blocks.forEach((d, f) => {
        d.matches('.ai-filter-check') ? g.push(d) : (d = d.querySelectorAll('.ai-filter-check'), d.length && d.forEach((l, k) => {
          g.push(l);
        }));
      });
      ai_filter_hook_blocks = g;
    }
    if (ai_filter_hook_blocks.length)
      if ('undefined' != typeof ai_filter_hook_data)
        p(ai_filter_hook_blocks);
      else if ('undefined' == typeof ai_filter_hook_data_requested) {
        a = window.navigator.userAgent;
        var h = navigator.language;
        ai_filter_hook_data_requested = true;
        a = {
          action: 'ai_ajax',
          'filter-hook-data': 'all',
          check: ai_data_id,
          http_user_agent: encodeURIComponent(a),
          http_accept_language: encodeURIComponent(h),
          ver: q()
        };
        var b = [];
        var c;
        for (c in a) {
          h = encodeURIComponent(c);
          var e = encodeURIComponent(a[c]);
          b.push(h + '=' + e);
        }
        b = b.join('&');
        (async function () {
          return await (await fetch(ai_ajax_url + '?' + b, { method: 'GET' })).text();
        }().then(d => {
          if ('' == d) {
            d = 'AI FILTER HOOK Ajax request returned empty data, filter hook checks not processed';
            console.error(d);
            if ('undefined' != typeof ai_js_errors) {
              ai_js_errors.push([
                d,
                page,
                0
              ]);
            }
          } else
            try {
              var f = JSON.parse(d);
            } catch (l) {
              d = 'AI FILTER HOOK Ajax call returned invalid data, filter hook checks not processed';
              console.error(d);
              if ('undefined' != typeof ai_js_errors) {
                ai_js_errors.push([
                  d,
                  page,
                  0
                ]);
              }
            }
          ai_filter_hook_data = JSON.stringify(f.blocks);
          ai_filter_hook_comments = JSON.stringify(f.comments);
          ai_filter_hook_blocks = document.querySelectorAll('div.ai-filter-check, meta.ai-filter-check');
          p(ai_filter_hook_blocks);
        }).catch(d => {
          document.querySelectorAll('div.ai-filter-check').forEach((f, l) => {
            f.style.display = 'none';
            f.style.visibility = '';
            f.style.position = '';
            f.style.width = '';
            f.style.height = '';
            f.style.zIndex = '';
            f.classList.remove('ai-filter-check');
            f.style.display = 'none';
          });
        }));
      }
  };
  (function (a) {
    'complete' === document.readyState || 'loading' !== document.readyState && !document.documentElement.doScroll ? a() : document.addEventListener('DOMContentLoaded', a);
  }(function () {
    setTimeout(function () {
      ai_process_filter_hooks();
    }, 3);
  }));
  function r(a) {
    setTimeout(function () {
      if ('function' == typeof ai_process_rotations_in_element) {
        ai_process_rotations_in_element(a);
      }
      if ('function' == typeof ai_process_lists) {
        ai_process_lists();
      }
      if ('function' == typeof ai_process_ip_addresses) {
        ai_process_ip_addresses();
      }
      if ('function' == typeof ai_process_filter_hooks) {
        ai_process_filter_hooks(a);
      }
      if ('function' == typeof ai_adb_process_blocks) {
        ai_adb_process_blocks(a);
      }
      if ('function' == typeof ai_process_impressions && 1 == ai_tracking_finished) {
        ai_process_impressions();
      }
      if ('function' == typeof ai_install_click_trackers && 1 == ai_tracking_finished) {
        ai_install_click_trackers();
      }
      if ('function' == typeof ai_install_close_buttons) {
        ai_install_close_buttons(document);
      }
    }, 5);
  }
}
if ('undefined' != typeof ai_ip) {
  function u(b, g) {
    if (!g) {
      g = window.location.href;
    }
    b = b.replace(/[\[\]]/g, '\\$&');
    return (b = new RegExp('[?&]' + b + '(=([^&#]*)|&|#|$)').exec(g)) ? b[2] ? decodeURIComponent(b[2].replace(/\+/g, ' ')) : '' : null;
  }
  function y() {
    return new Date().getTime() + '-' + Math.round(100000 * Math.random());
  }
  function v(b) {
    b.forEach((a, c) => {
      a.classList.remove('ai-ip-data');
    });
    var g = false;
    if ('' != ai_ip_data) {
      try {
        var l = JSON.parse(ai_ip_data);
        var f = l[0];
        var r = l[1];
        var p = l[2];
        var q = l[3];
      } catch (a) {
        return;
      }
      var t = false;
      if (-1 != f.indexOf('#')) {
        t = true;
        f = f.replace('#', '');
      }
      var e = '';
      if (t) {
        e = 'CFP BLOCKED, ';
      }
      e = e + f + ', ' + l[1];
      if (null != p && null != q) {
        e = e + ':' + p + ':' + q;
      }
      if (null == p) {
        p = '';
      }
      if (null == q) {
        q = '';
      }
      if (null != l) {
        b.forEach((a, c) => {
          c = a.closest('div.' + ai_block_class_def);
          g = true;
          if (a.hasAttribute('ip-addresses')) {
            var h = a.getAttribute('ip-addresses').split(',');
            var m = a.getAttribute('ip-address-list');
            var k = false;
            h.every((d, n) => {
              if ('*' == d.charAt(0))
                if ('*' == d.charAt(d.length - 1)) {
                  d = d.substr(1, d.length - 2);
                  if (-1 != f.indexOf(d)) {
                    k = true;
                    return false;
                  }
                } else {
                  d = d.substr(1);
                  if (f.substr(-d.length) == d) {
                    k = true;
                    return false;
                  }
                }
              else if ('*' == d.charAt(d.length - 1)) {
                d = d.substr(0, d.length - 1);
                if (0 == f.indexOf(d)) {
                  k = true;
                  return false;
                }
              } else if ('#' == d) {
                if ('' == f) {
                  k = true;
                  return false;
                }
              } else if ('CFP' == d.toUpperCase()) {
                if (t) {
                  k = true;
                  return false;
                }
              } else if (d == f) {
                k = true;
                return false;
              }
              return true;
            });
            switch (m) {
            case 'B':
              if (k) {
                g = false;
              }
              break;
            case 'W':
              if (!k) {
                g = false;
              }
            }
          }
          if (g && a.hasAttribute('countries'))
            switch (h = a.getAttribute('countries').split(','), m = a.getAttribute('country-list'), k = false, h.every((d, n) => {
                n = d.trim().split(':');
                if (null == n[1] || '' == p)
                  n[1] = '';
                if (null == n[2] || '' == q)
                  n[2] = '';
                d = n.join(':').toUpperCase();
                n = (l[1] + ':' + ('' == n[1] ? '' : p) + ':' + ('' == n[2] ? '' : q)).toUpperCase();
                return d == n ? (k = true, false) : true;
              }), m) {
            case 'B':
              if (k) {
                g = false;
              }
              break;
            case 'W':
              if (!k) {
                g = false;
              }
            }
          a.style.visibility = '';
          a.style.position = '';
          a.style.width = '';
          a.style.height = '';
          a.style.zIndex = '';
          for (h = a.previousElementSibling; h && !h.matches('.ai-debug-bar');)
            h = h.previousElementSibling;
          if (null != h) {
            m = h.querySelector('.ai-debug-name.ai-ip-country');
            if (null != m) {
              m.textContent = e;
            }
            m = h.querySelector('.ai-debug-name.ai-ip-status');
            if (null != m) {
              m.textContent = g ? ai_front.visible : ai_front.hidden;
            }
          }
          if (g) {
            if (null != c) {
              c.style.visibility = '';
              if (c.classList.contains('ai-remove-position')) {
                c.style.position = '';
              }
            }
            if (a.hasAttribute('data-code')) {
              h = b64d(a.dataset.code);
              m = document.createRange();
              var w = true;
              try {
                var x = m.createContextualFragment(h);
              } catch (d) {
                w = false;
              }
              if (w) {
                null != a.closest('head') ? (a.parentNode.insertBefore(x, a.nextSibling), a.remove()) : a.append(x);
              }
              a.removeAttribute('data-code');
              z(a);
            }
          } else {
            a.style.display = 'none';
            if (null != c) {
              c.removeAttribute('data-ai');
              c.classList.remove('ai-track');
              null != c.querySelector('.ai-debug-block') ? (c.style.visibility = '', c.classList.remove('ai-close'), c.classList.contains('ai-remove-position') && (c.style.position = ''), a.hasAttribute('data-code') && (c.classList.remove('ai-list-block'), c.classList.remove('ai-list-block-filter'), null != c.previousElementSibling && c.previousElementSibling.classList.contains('ai-debug-info') && c.previousElementSibling.remove())) : c.hasAttribute('style') && -1 == c.getAttribute('style').indexOf('height:') && (c.style.display = 'none');
            }
          }
          if (null != c) {
            c.classList.remove('ai-list-block-ip');
          }
        });
      }
    }
  }
  ai_process_ip_addresses = function (b) {
    if (null == b)
      b = document.querySelectorAll('div.ai-ip-data, meta.ai-ip-data');
    else {
      if (window.jQuery && window.jQuery.fn && b instanceof jQuery) {
        b = Array.prototype.slice.call(b);
      }
      var g = [];
      b.forEach((e, a) => {
        e.matches('.ai-ip-data') ? g.push(e) : (e = e.querySelectorAll('.ai-ip-data'), e.length && e.forEach((c, h) => {
          g.push(c);
        }));
      });
      b = g;
    }
    if (b.length)
      if ('undefined' != typeof ai_ip_data)
        v(b);
      else if ('undefined' == typeof ai_ip_data_requested) {
        ai_ip_data_requested = true;
        var l = ai_ajax_url + '?action=ai_ajax&ip-data=ip-address-country-city';
        var f = u('ai-debug-ip-address');
        if (null != f) {
          l += '&ai-debug-ip-address=' + f;
        }
        f = u('ai-debug-country');
        if (null != f) {
          l += '&ai-debug-country=' + f;
        }
        f = {
          ai_check: ai_data_id,
          version: y()
        };
        var r = [];
        var p;
        for (p in f) {
          var q = encodeURIComponent(p);
          var t = encodeURIComponent(f[p]);
          r.push(q + '=' + t);
        }
        r = r.join('&');
        (async function () {
          return await (await fetch(l, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: r
          })).text();
        }().then(e => {
          ai_ip_data = e;
          if ('' == e) {
            var a = 'Ajax request returned empty data, geo-targeting disabled';
            console.error(a);
            if ('undefined' != typeof ai_js_errors) {
              ai_js_errors.push([
                a,
                l,
                0
              ]);
            }
          } else
            try {
              JSON.parse(e);
            } catch (c) {
              a = 'Ajax call returned invalid data, geo-targeting disabled';
              console.error(a, e);
              if ('undefined' != typeof ai_js_errors) {
                ai_js_errors.push([
                  a,
                  l,
                  0
                ]);
              }
            }
          b = document.querySelectorAll('div.ai-ip-data, meta.ai-ip-data');
          if (b.length) {
            v(b);
          }
        }).catch(e => {
          document.querySelectorAll('div.ai-ip-data').forEach((a, c) => {
            a.style.display = 'none';
            a.style.visibility = '';
            a.style.position = '';
            a.style.width = '';
            a.style.height = '';
            a.style.zIndex = '';
            a.classList.remove('ai-ip-data');
          });
        }));
      }
  };
  (function (b) {
    'complete' === document.readyState || 'loading' !== document.readyState && !document.documentElement.doScroll ? b() : document.addEventListener('DOMContentLoaded', b);
  }(function () {
    setTimeout(function () {
      ai_process_ip_addresses();
    }, 5);
  }));
  function z(b) {
    setTimeout(function () {
      if ('function' == typeof ai_process_rotations_in_element) {
        ai_process_rotations_in_element(b);
      }
      if ('function' == typeof ai_process_lists) {
        ai_process_lists();
      }
      if ('function' == typeof ai_process_ip_addresses) {
        ai_process_ip_addresses();
      }
      if ('function' == typeof ai_process_filter_hooks) {
        ai_process_filter_hooks();
      }
      if ('function' == typeof ai_adb_process_blocks) {
        ai_adb_process_blocks(b);
      }
      if ('function' == typeof ai_process_impressions && 1 == ai_tracking_finished) {
        ai_process_impressions();
      }
      if ('function' == typeof ai_install_click_trackers && 1 == ai_tracking_finished) {
        ai_install_click_trackers();
      }
      if ('function' == typeof ai_install_close_buttons) {
        ai_install_close_buttons(document);
      }
    }, 5);
  }
}
if ('undefined' != typeof ai_lists) {
  function X(b, e) {
    for (var p = []; b = b.previousElementSibling;)
      if ('undefined' == typeof e || b.matches(e)) {
        p.push(b);
      }
    return p;
  }
  function fa(b, e) {
    for (var p = []; b = b.nextElementSibling;)
      if ('undefined' == typeof e || b.matches(e)) {
        p.push(b);
      }
    return p;
  }
  var host_regexp = /:\/\/(.[^/:]+)/i;
  function ha(b) {
    b = b.match(/:\/\/(.[^/:]+)/i);
    return null != b && 1 < b.length && 'string' === typeof b[1] && 0 < b[1].length ? b[1].toLowerCase() : null;
  }
  function Q(b) {
    return b.includes(':') ? (b = b.split(':'), 1000 * (3600 * parseInt(b[0]) + 60 * parseInt(b[1]) + parseInt(b[2]))) : null;
  }
  function Y(b) {
    try {
      var e = Date.parse(b);
      if (isNaN(e)) {
        e = null;
      }
    } catch (p) {
      e = null;
    }
    if (null == e && b.includes(' ')) {
      b = b.split(' ');
      try {
        e = Date.parse(b[0]);
        e += Q(b[1]);
        if (isNaN(e)) {
          e = null;
        }
      } catch (p) {
        e = null;
      }
    }
    return e;
  }
  function Z() {
    if (!(null == document.querySelector('#ai-iab-tcf-bar') && null == document.querySelector('.ai-list-manual') || 'function' != typeof __tcfapi || 'function' != typeof ai_load_blocks || 'undefined' != typeof ai_iab_tcf_callback_installed)) {
      __tcfapi('addEventListener', 2, function (b, e) {
        if (e && 'useractioncomplete' === b.eventStatus) {
          ai_tcData = b;
          ai_load_blocks();
          b = document.querySelector('#ai-iab-tcf-status');
          if (null != b) {
            b.textContent = 'IAB TCF 2.0 DATA LOADED';
          }
          b = document.querySelector('#ai-iab-tcf-bar');
          if (null != b) {
            b.classList.remove('status-error');
            b.classList.add('status-ok');
          }
        }
      });
      ai_iab_tcf_callback_installed = true;
    }
  }
  ai_process_lists = function (b) {
    function e(a, d, k) {
      if (0 == a.length) {
        if ('!@!' == k)
          return true;
        if (d != k) {
          'true' == k.toLowerCase() ? k = true : 'false' == k.toLowerCase() && (k = false);
        }
        return d == k;
      }
      if ('object' != typeof d && 'array' != typeof d)
        return false;
      var l = a[0];
      a = a.slice(1);
      if ('*' == a[0])
        for (let [, n] of Object.entries(d)) {
          if (e(a, n, k))
            return true;
        }
      else if (a[0] in d)
        return e(a, d[a[0]], k);
      return false;
    }
    function p(a, d, k) {
      if ('object' != typeof a || -1 == d.indexOf('['))
        return false;
      d = d.replace(/]| /gi, '').split('[');
      return e(d, a, k);
    }
    function z() {
      if ('function' == typeof __tcfapi) {
        var a = document.querySelector('#ai-iab-tcf-status');
        var d = document.querySelector('#ai-iab-tcf-bar');
        if (null != a) {
          a.textContent = 'IAB TCF 2.0 DETECTED';
        }
        __tcfapi('getTCData', 2, function (k, l) {
          l ? (null != d && d.classList.add('status-ok'), 'tcloaded' == k.eventStatus || 'useractioncomplete' == k.eventStatus) ? (ai_tcData = k, k.gdprApplies ? null != a && (a.textContent = 'IAB TCF 2.0 DATA LOADED') : null != a && (a.textContent = 'IAB TCF 2.0 GDPR DOES NOT APPLY'), null != d && (d.classList.remove('status-error'), d.classList.add('status-ok')), setTimeout(function () {
            ai_process_lists();
          }, 10)) : 'cmpuishown' == k.eventStatus && (ai_cmpuishown = true, null != a && (a.textContent = 'IAB TCF 2.0 CMP UI SHOWN'), null != d && (d.classList.remove('status-error'), d.classList.add('status-ok'))) : (null != a && (a.textContent = 'IAB TCF 2.0 __tcfapi getTCData failed'), null != d && (d.classList.remove('status-ok'), d.classList.add('status-error')));
        });
      }
    }
    function C(a) {
      'function' == typeof __tcfapi ? (ai_tcfapi_found = true, 'undefined' == typeof ai_iab_tcf_callback_installed && Z(), 'undefined' == typeof ai_tcData_requested && (ai_tcData_requested = true, z(), cookies_need_tcData = true)) : a && ('undefined' == typeof ai_tcfapi_found && (ai_tcfapi_found = false, setTimeout(function () {
        ai_process_lists();
      }, 10)), a = document.querySelector('#ai-iab-tcf-status'), null != a && (a.textContent = 'IAB TCF 2.0 MISSING: __tcfapi function not found'), a = document.querySelector('#ai-iab-tcf-bar'), null != a && (a.classList.remove('status-ok'), a.classList.add('status-error')));
    }
    if (null == b)
      b = document.querySelectorAll('div.ai-list-data, meta.ai-list-data');
    else {
      if (window.jQuery && window.jQuery.fn && b instanceof jQuery) {
        b = Array.prototype.slice.call(b);
      }
      var x = [];
      b.forEach((a, d) => {
        a.matches('.ai-list-data') ? x.push(a) : (a = a.querySelectorAll('.ai-list-data'), a.length && a.forEach((k, l) => {
          x.push(k);
        }));
      });
      b = x;
    }
    if (b.length) {
      b.forEach((a, d) => {
        a.classList.remove('ai-list-data');
      });
      var L = ia(window.location.search);
      if (null != L.referrer)
        var A = L.referrer;
      else {
        A = document.referrer;
        if ('' != A) {
          A = ha(A);
        }
      }
      var R = window.navigator.userAgent;
      var S = window.navigator.userAgent.toLowerCase();
      var aa = navigator.language;
      var M = navigator.language.toLowerCase();
      if ('undefined' !== typeof MobileDetect)
        var ba = new MobileDetect(window.navigator.userAgent);
      b.forEach((a, d) => {
        var k = document.cookie.split(';');
        k.forEach(function (f, h) {
          k[h] = f.trim();
        });
        d = a.closest('div.' + ai_block_class_def);
        var l = true;
        if (a.hasAttribute('referer-list')) {
          var n = a.getAttribute('referer-list');
          n = b64d(n).split(',');
          var v = a.getAttribute('referer-list-type');
          var E = false;
          n.every((f, h) => {
            f = f.trim();
            if ('' == f)
              return true;
            if ('*' == f.charAt(0))
              if ('*' == f.charAt(f.length - 1)) {
                f = f.substr(1, f.length - 2);
                if (-1 != A.indexOf(f)) {
                  E = true;
                  return false;
                }
              } else {
                f = f.substr(1);
                if (A.substr(-f.length) == f) {
                  E = true;
                  return false;
                }
              }
            else if ('*' == f.charAt(f.length - 1)) {
              f = f.substr(0, f.length - 1);
              if (0 == A.indexOf(f)) {
                E = true;
                return false;
              }
            } else if ('#' == f) {
              if ('' == A) {
                E = true;
                return false;
              }
            } else if (f == A) {
              E = true;
              return false;
            }
            return true;
          });
          var r = E;
          switch (v) {
          case 'B':
            if (r) {
              l = false;
            }
            break;
          case 'W':
            if (!r) {
              l = false;
            }
          }
        }
        if (l && a.hasAttribute('client-list') && 'undefined' !== typeof ba)
          switch (n = a.getAttribute('client-list'), n = b64d(n).split(','), v = a.getAttribute('client-list-type'), r = false, n.every((f, h) => {
              if ('' == f.trim())
                return true;
              f.split('&&').every((c, t) => {
                t = true;
                var w = false;
                for (c = c.trim(); '!!' == c.substring(0, 2);) {
                  t = !t;
                  c = c.substring(2);
                }
                if ('language:' == c.substring(0, 9)) {
                  w = true;
                  c = c.substring(9).toLowerCase();
                }
                var q = false;
                w ? '*' == c.charAt(0) ? '*' == c.charAt(c.length - 1) ? (c = c.substr(1, c.length - 2).toLowerCase(), -1 != M.indexOf(c) && (q = true)) : (c = c.substr(1).toLowerCase(), M.substr(-c.length) == c && (q = true)) : '*' == c.charAt(c.length - 1) ? (c = c.substr(0, c.length - 1).toLowerCase(), 0 == M.indexOf(c) && (q = true)) : c == M && (q = true) : '*' == c.charAt(0) ? '*' == c.charAt(c.length - 1) ? (c = c.substr(1, c.length - 2).toLowerCase(), -1 != S.indexOf(c) && (q = true)) : (c = c.substr(1).toLowerCase(), S.substr(-c.length) == c && (q = true)) : '*' == c.charAt(c.length - 1) ? (c = c.substr(0, c.length - 1).toLowerCase(), 0 == S.indexOf(c) && (q = true)) : ba.is(c) && (q = true);
                return (r = q ? t : !t) ? true : false;
              });
              return r ? false : true;
            }), v) {
          case 'B':
            if (r) {
              l = false;
            }
            break;
          case 'W':
            if (!r) {
              l = false;
            }
          }
        var N = n = false;
        for (v = 1; 2 >= v; v++)
          if (l) {
            switch (v) {
            case 1:
              var g = a.getAttribute('cookie-list');
              break;
            case 2:
              g = a.getAttribute('parameter-list');
            }
            if (null != g) {
              g = b64d(g);
              switch (v) {
              case 1:
                var y = a.getAttribute('cookie-list-type');
                break;
              case 2:
                y = a.getAttribute('parameter-list-type');
              }
              g = g.replace('tcf-gdpr', 'tcf-v2[gdprApplies]=true');
              g = g.replace('tcf-no-gdpr', 'tcf-v2[gdprApplies]=false');
              g = g.replace('tcf-google', 'tcf-v2[vendor][consents][755]=true&&tcf-v2[purpose][consents][1]=true');
              g = g.replace('tcf-no-google', '!!tcf-v2[vendor][consents][755]');
              g = g.replace('tcf-media.net', 'tcf-v2[vendor][consents][142]=true&&tcf-v2[purpose][consents][1]=true');
              g = g.replace('tcf-no-media.net', '!!tcf-v2[vendor][consents][142]');
              g = g.replace('tcf-amazon', 'tcf-v2[vendor][consents][793]=true&&tcf-v2[purpose][consents][1]=true');
              g = g.replace('tcf-no-amazon', '!!tcf-v2[vendor][consents][793]');
              g = g.replace('tcf-ezoic', 'tcf-v2[vendor][consents][347]=true&&tcf-v2[purpose][consents][1]=true');
              g = g.replace('tcf-no-ezoic', '!!tcf-v2[vendor][consents][347]');
              var F = g.split(',');
              var ca = [];
              k.forEach(function (f) {
                f = f.split('=');
                try {
                  var h = JSON.parse(decodeURIComponent(f[1]));
                } catch (c) {
                  h = decodeURIComponent(f[1]);
                }
                ca[f[0]] = h;
              });
              r = false;
              F.every((f, h) => {
                f.split('&&').every((c, t) => {
                  t = true;
                  for (c = c.trim(); '!!' == c.substring(0, 2);) {
                    t = !t;
                    c = c.substring(2);
                  }
                  var w = c;
                  var q = '!@!';
                  var T = 'tcf-v2' == w && '!@!' == q;
                  var B = -1 != c.indexOf('[');
                  var J = 0 == c.indexOf('tcf-v2') || 0 == c.indexOf('euconsent-v2');
                  J = J && (B || T);
                  if (-1 != c.indexOf('=')) {
                    q = c.split('=');
                    w = q[0];
                    q = q[1];
                    B = -1 != w.indexOf('[');
                    J = (J = 0 == w.indexOf('tcf-v2') || 0 == w.indexOf('euconsent-v2')) && (B || T);
                  }
                  if (J) {
                    document.querySelector('#ai-iab-tcf-status');
                    B = document.querySelector('#ai-iab-tcf-bar');
                    if (null != B) {
                      B.style.display = 'block';
                    }
                    T && 'boolean' == typeof ai_tcfapi_found ? r = ai_tcfapi_found ? t : !t : 'object' == typeof ai_tcData ? (null != B && B.classList.add('status-ok'), w = w.replace(/]| /gi, '').split('['), w.shift(), r = (w = e(w, ai_tcData, q)) ? t : !t) : 'undefined' == typeof ai_tcfapi_found && (a.classList.add('ai-list-data'), N = true, 'function' == typeof __tcfapi ? C(false) : 'undefined' == typeof ai_tcData_retrying && (ai_tcData_retrying = true, setTimeout(function () {
                      'function' == typeof __tcfapi ? C(false) : setTimeout(function () {
                        'function' == typeof __tcfapi ? C(false) : setTimeout(function () {
                          C(true);
                        }, 3000);
                      }, 1000);
                    }, 600)));
                  } else if (B)
                    r = (w = p(ca, w, q)) ? t : !t;
                  else {
                    var U = false;
                    '!@!' == q ? k.every(function (ja) {
                      return ja.split('=')[0] == c ? (U = true, false) : true;
                    }) : U = -1 != k.indexOf(c);
                    r = U ? t : !t;
                  }
                  return r ? true : false;
                });
                return r ? false : true;
              });
              if (r) {
                N = false;
                a.classList.remove('ai-list-data');
              }
              switch (y) {
              case 'B':
                if (r) {
                  l = false;
                }
                break;
              case 'W':
                if (!r) {
                  l = false;
                }
              }
            }
          }
        if (a.classList.contains('ai-list-manual')) {
          l ? (a.classList.remove('ai-list-data'), a.classList.remove('ai-list-manual')) : (n = true, a.classList.add('ai-list-data'));
        }
        if ((l || !n && !N) && a.hasAttribute('data-debug-info')) {
          g = document.querySelector('.' + a.dataset.debugInfo);
          if (null != g) {
            g = g.parentElement;
            if (null != g && g.classList.contains('ai-debug-info')) {
              g.remove();
            }
          }
        }
        y = X(a, '.ai-debug-bar.ai-debug-lists');
        var ka = '' == A ? '#' : A;
        if (0 != y.length) {
          y.forEach((f, h) => {
            h = f.querySelector('.ai-debug-name.ai-list-info');
            if (null != h) {
              h.textContent = ka;
              h.title = window.navigator.userAgent + '\n' + navigator.language;
            }
            h = f.querySelector('.ai-debug-name.ai-list-status');
            if (null != h) {
              h.textContent = l ? ai_front.visible : ai_front.hidden;
            }
          });
        }
        g = false;
        if (l && a.hasAttribute('scheduling-start') && a.hasAttribute('scheduling-end') && a.hasAttribute('scheduling-days')) {
          var u = a.getAttribute('scheduling-start');
          v = a.getAttribute('scheduling-end');
          y = a.getAttribute('scheduling-days');
          g = true;
          u = b64d(u);
          F = b64d(v);
          var V = parseInt(a.getAttribute('scheduling-fallback'));
          var O = parseInt(a.getAttribute('gmt'));
          if (u.includes('-') || F.includes('-')) {
            P = Y(u) + O;
            K = Y(F) + O;
          } else {
            var P = Q(u);
            var K = Q(F);
          }
          P ??= 0;
          K ??= 0;
          var W = b64d(y).split(',');
          y = a.getAttribute('scheduling-type');
          var D = new Date().getTime() + O;
          v = new Date(D);
          var G = v.getDay();
          0 == G ? G = 6 : G--;
          if (!(u.includes('-') || F.includes('-'))) {
            u = new Date(v.getFullYear(), v.getMonth(), v.getDate()).getTime() + O;
            D -= u;
            if (0 > D) {
              D += 86400000;
            }
          }
          scheduling_start_date_ok = D >= P;
          scheduling_end_date_ok = 0 == K || D < K;
          u = scheduling_start_date_ok && scheduling_end_date_ok && W.includes(G.toString());
          switch (y) {
          case 'B':
            u = !u;
          }
          if (!u) {
            l = false;
          }
          var la = v.toISOString().split('.')[0].replace('T', ' ');
          y = X(a, '.ai-debug-bar.ai-debug-scheduling');
          if (0 != y.length) {
            y.forEach((f, h) => {
              h = f.querySelector('.ai-debug-name.ai-scheduling-info');
              if (null != h) {
                h.textContent = la + ' ' + G + ' current_time: ' + Math.floor(D.toString() / 1000) + '  start_date:' + Math.floor(P / 1000).toString() + '=>' + scheduling_start_date_ok.toString() + ' end_date:' + Math.floor(K / 1000).toString() + '=>' + scheduling_end_date_ok.toString() + ' days:' + W.toString() + '=>' + W.includes(G.toString()).toString();
              }
              h = f.querySelector('.ai-debug-name.ai-scheduling-status');
              if (null != h) {
                h.textContent = l ? ai_front.visible : ai_front.hidden;
              }
              if (!(l || 0 == V)) {
                f.classList.remove('ai-debug-scheduling');
                f.classList.add('ai-debug-fallback');
                h = f.querySelector('.ai-debug-name.ai-scheduling-status');
                if (null != h) {
                  h.textContent = ai_front.fallback + '=' + V;
                }
              }
            });
          }
        }
        if (n || !l && N)
          return true;
        a.style.visibility = '';
        a.style.position = '';
        a.style.width = '';
        a.style.height = '';
        a.style.zIndex = '';
        if (l) {
          if (null != d) {
            d.style.visibility = '';
            if (d.classList.contains('ai-remove-position')) {
              d.style.position = '';
            }
          }
          if (a.hasAttribute('data-code')) {
            n = b64d(a.dataset.code);
            u = document.createRange();
            g = true;
            try {
              H = u.createContextualFragment(n);
            } catch (f) {
              g = false;
            }
            if (g) {
              null != a.closest('head') ? (a.parentNode.insertBefore(H, a.nextSibling), a.remove()) : a.append(H);
            }
            da(a);
          }
        } else if (g && !u && 0 != V) {
          if (null != d) {
            d.style.visibility = '';
            if (d.classList.contains('ai-remove-position')) {
              d.css({ position: '' });
            }
          }
          n = fa(a, '.ai-fallback');
          if (0 != n.length) {
            n.forEach((f, h) => {
              f.classList.remove('ai-fallback');
            });
          }
          if (a.hasAttribute('data-fallback-code')) {
            n = b64d(a.dataset.fallbackCode);
            u = document.createRange();
            g = true;
            try {
              var H = u.createContextualFragment(n);
            } catch (f) {
              g = false;
            }
            if (g) {
              a.append(H);
            }
            da(a);
          } else {
            a.style.display = 'none';
            if (null != d && null == d.querySelector('.ai-debug-block') && d.hasAttribute('style') && -1 == d.getAttribute('style').indexOf('height:')) {
              d.style.display = 'none';
            }
          }
          if (null != d && d.hasAttribute('data-ai')) {
            d.getAttribute('data-ai');
            if (a.hasAttribute('fallback-tracking')) {
              H = a.getAttribute('fallback-tracking');
              d.setAttribute('data-ai-' + a.getAttribute('fallback_level'), H);
            }
          }
        } else {
          a.style.display = 'none';
          if (null != d) {
            d.removeAttribute('data-ai');
            d.classList.remove('ai-track');
            null != d.querySelector('.ai-debug-block') ? (d.style.visibility = '', d.classList.remove('ai-close'), d.classList.contains('ai-remove-position') && (d.style.position = '')) : d.hasAttribute('style') && -1 == d.getAttribute('style').indexOf('height:') && (d.style.display = 'none');
          }
        }
        a.setAttribute('data-code', '');
        a.setAttribute('data-fallback-code', '');
        if (null != d) {
          d.classList.remove('ai-list-block');
        }
      });
    }
  };
  function ea(b) {
    b = `; ${ document.cookie }`.split(`; ${ b }=`);
    if (2 === b.length)
      return b.pop().split(';').shift();
  }
  function ma(b, e, p) {
    if (ea(b)) {
      document.cookie = b + '=' + (e ? ';path=' + e : '') + (p ? ';domain=' + p : '') + ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
    }
  }
  function m(b) {
    if (ea(b)) {
      ma(b, '/', window.location.hostname);
      document.cookie = b + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  }
  (function (b) {
    'complete' === document.readyState || 'loading' !== document.readyState && !document.documentElement.doScroll ? b() : document.addEventListener('DOMContentLoaded', b);
  }(function () {
    setTimeout(function () {
      ai_process_lists();
      setTimeout(function () {
        Z();
        if ('function' == typeof ai_load_blocks) {
          document.addEventListener('cmplzEnableScripts', e);
          document.addEventListener('cmplz_event_marketing', e);
          function e(p) {
            if (!('cmplzEnableScripts' != p.type && 'all' !== p.consentLevel)) {
              ai_load_blocks();
            }
          }
        }
      }, 50);
      var b = document.querySelector('.ai-debug-page-type');
      if (null != b) {
        b.addEventListener('dblclick', e => {
          e = document.querySelector('#ai-iab-tcf-status');
          if (null != e) {
            e.textContent = 'CONSENT COOKIES';
          }
          e = document.querySelector('#ai-iab-tcf-bar');
          if (null != e) {
            e.style.display = 'block';
          }
        });
      }
      b = document.querySelector('#ai-iab-tcf-bar');
      if (null != b) {
        b.addEventListener('click', e => {
          m('euconsent-v2');
          m('__lxG__consent__v2');
          m('__lxG__consent__v2_daisybit');
          m('__lxG__consent__v2_gdaisybit');
          m('CookieLawInfoConsent');
          m('cookielawinfo-checkbox-advertisement');
          m('cookielawinfo-checkbox-analytics');
          m('cookielawinfo-checkbox-necessary');
          m('complianz_policy_id');
          m('complianz_consent_status');
          m('cmplz_marketing');
          m('cmplz_consent_status');
          m('cmplz_preferences');
          m('cmplz_statistics-anonymous');
          m('cmplz_choice');
          m('cmplz_banner-status');
          m('cmplz_functional');
          m('cmplz_policy_id');
          m('cmplz_statistics');
          m('moove_gdpr_popup');
          m('real_cookie_banner-blog:1-tcf');
          m('real_cookie_banner-blog:1');
          e = document.querySelector('#ai-iab-tcf-status');
          if (null != e) {
            e.textContent = 'CONSENT COOKIES DELETED';
          }
        });
      }
    }, 5);
  }));
  function da(b) {
    setTimeout(function () {
      if ('function' == typeof ai_process_rotations_in_element) {
        ai_process_rotations_in_element(b);
      }
      if ('function' == typeof ai_process_lists) {
        ai_process_lists();
      }
      if ('function' == typeof ai_process_ip_addresses) {
        ai_process_ip_addresses();
      }
      if ('function' == typeof ai_process_filter_hooks) {
        ai_process_filter_hooks();
      }
      if ('function' == typeof ai_adb_process_blocks) {
        ai_adb_process_blocks(b);
      }
      if ('function' == typeof ai_process_impressions && 1 == ai_tracking_finished) {
        ai_process_impressions();
      }
      if ('function' == typeof ai_install_click_trackers && 1 == ai_tracking_finished) {
        ai_install_click_trackers();
      }
      if ('function' == typeof ai_install_close_buttons) {
        ai_install_close_buttons(document);
      }
    }, 5);
  }
  function ia(b) {
    var e = b ? b.split('?')[1] : window.location.search.slice(1);
    b = {};
    if (e) {
      e = e.split('#')[0];
      e = e.split('&');
      for (var p = 0; p < e.length; p++) {
        var z = e[p].split('=');
        var C = void 0;
        var x = z[0].replace(/\[\d*\]/, function (L) {
          C = L.slice(1, -1);
          return '';
        });
        z = 'undefined' === typeof z[1] ? '' : z[1];
        x = x.toLowerCase();
        z = z.toLowerCase();
        b[x] ? ('string' === typeof b[x] && (b[x] = [b[x]]), 'undefined' === typeof C ? b[x].push(z) : b[x][C] = z) : b[x] = z;
      }
    }
    return b;
  }
}
if ('undefined' != typeof ai_recaptcha_site_key) {
  const q = function (c, d) {
    if ('DIV' === c.tagName && c.hasAttribute('data-code')) {
      d = document.createRange();
      var b = true;
      try {
        var a = d.createContextualFragment(b64d(c.dataset.code));
      } catch (f) {
        b = false;
      }
      if (b) {
        c.insertBefore(a, c.firstChild);
      }
      c.removeAttribute('data-code');
      a = c.closest('.' + b64d(c.dataset.class));
      c.removeAttribute('data-class');
      c.removeAttribute('class');
      if ('function' == typeof ai_process_lists) {
        ai_process_lists();
      }
      if ('function' == typeof ai_process_ip_addresses) {
        ai_process_ip_addresses();
      }
      if ('function' == typeof ai_process_filter_hooks) {
        ai_process_filter_hooks();
      }
      if ('function' == typeof ai_process_rotations_in_element) {
        ai_process_rotations_in_element(c);
      }
      if ('function' == typeof ai_adb_process_blocks) {
        ai_adb_process_blocks();
      }
      if ('function' == typeof ai_process_impressions && null != a && 1 == ai_tracking_finished) {
        setTimeout(ai_process_impressions, 1400);
      }
      if ('function' == typeof ai_install_click_trackers && null != a && 1 == ai_tracking_finished) {
        setTimeout(ai_install_click_trackers, 1500);
      }
      if ('function' == typeof ai_install_close_buttons && null != a) {
        ai_install_close_buttons(a);
      }
      ai_process_wait_for_interaction();
      ai_process_delayed_blocks();
    }
  };
  const p = function (c) {
    const d = {
      intersectionObserverSupport: 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype,
      mutationObserverSupport: 'MutationObserver' in window,
      idleCallbackSupport: 'requestIdleCallback' in window,
      eventsToBind: [
        [
          document,
          'scroll'
        ],
        [
          document,
          'touchmove'
        ],
        [
          window,
          'resize'
        ],
        [
          window,
          'orientationchange'
        ]
      ]
    };
    const b = {
      lazyClass: 'ai-lazy',
      lazyElement: null,
      throttleTime: 200,
      idlyLoad: false,
      idleLoadTimeout: 100,
      threshold: ai_lazy_loading_offset,
      observeChanges: false,
      observeRootSelector: 'body',
      mutationObserverOptions: { childList: true }
    };
    Object.assign(b, c);
    const a = `div.${ b.lazyClass }`;
    const f = { timeout: b.idleLoadTimeout };
    var e = null == b.lazyElement ? [].slice.call(document.querySelectorAll(a)) : [].push(b.lazyElement);
    if (true === d.intersectionObserverSupport) {
      var h = new IntersectionObserver(function (k, g) {
        k.forEach(function (l) {
          var n = l.target;
          if (true === l.isIntersecting) {
            true === b.idlyLoad && true === d.idleCallbackSupport ? requestIdleCallback(function () {
              q(l.target, d);
            }, f) : q(l.target, d);
            l.target.classList.remove(b.lazyClass);
            g.unobserve(l.target);
            e = e.filter(function (r) {
              return r !== l.target;
            });
          }
        });
      }, { rootMargin: `${ b.threshold }px 0%` });
      e.forEach(function (k) {
        h.observe(k);
      });
    } else {
      var m = function () {
        var k = false;
        if (false === k && 0 < e.length) {
          k = true;
          setTimeout(function () {
            e.forEach(function (g) {
              if (g.getBoundingClientRect().top <= window.innerHeight + b.threshold && g.getBoundingClientRect().bottom >= -b.threshold && 'none' !== getComputedStyle(g).display) {
                true === b.idlyLoad && true === d.idleCallbackSupport ? requestIdleCallback(function () {
                  q(g, d);
                }, f) : q(g, d);
                g.classList.remove(b.lazyClass);
                e = e.filter(function (l) {
                  return l !== g;
                });
              }
            });
            k = false;
            if (0 === e.length && false === b.observeChanges) {
              d.eventsToBind.forEach(function (g) {
                g[0].removeEventListener(g[1], m);
              });
            }
          }, b.throttleTime);
        }
      };
      d.eventsToBind.forEach(function (k) {
        k[0].addEventListener(k[1], m);
      });
      m();
    }
    if (true === d.mutationObserverSupport && true === b.observeChanges) {
      new MutationObserver(function (k) {
        k.forEach(function (g) {
          [].slice.call(document.querySelectorAll(a)).forEach(function (l) {
            if (-1 === e.indexOf(l)) {
              e.push(l);
              true === d.intersectionObserverSupport ? h.observe(l) : m();
            }
          });
        });
      }).observe(document.querySelector(b.observeRootSelector), b.mutationObserverOptions);
    }
  };
  (function (c) {
    'complete' === document.readyState || 'loading' !== document.readyState && !document.documentElement.doScroll ? c() : document.addEventListener('DOMContentLoaded', c);
  }(function () {
    setTimeout(function () {
      p({
        lazyClass: 'ai-lazy',
        observeChanges: true,
        mutationObserverOptions: {
          childList: true,
          attributes: true,
          subtree: true
        }
      });
    }, 5);
  }));
  ai_load_blocks = function (c) {
    c = Number.isInteger(c) ? 'ai-manual-' + c : 'ai-manual';
    p({
      lazyClass: c,
      threshold: 99999,
      observeChanges: true,
      mutationObserverOptions: {
        childList: true,
        attributes: true,
        subtree: true
      }
    });
    if ('function' == typeof ai_process_lists) {
      ai_process_lists();
    }
  };
  ai_process_wait_for_interaction = function () {
    function c() {
      if ('undefined' != typeof a) {
        clearTimeout(a);
      }
      ai_user_interaction = true;
      d(false);
    }
    function d(f) {
      b.forEach(function (e) {
        window.removeEventListener(e, c, { passive: true });
      });
      p({
        lazyClass: 'ai-wait-for-interaction',
        threshold: 99999,
        observeChanges: true,
        mutationObserverOptions: {
          childList: true,
          attributes: true,
          subtree: true
        }
      });
    }
    const b = [
      'mouseover',
      'keydown',
      'touchmove',
      'touchstart'
    ];
    if (0 != document.getElementsByClassName('ai-wait-for-interaction').length) {
      if ('undefined' == typeof ai_interaction_timeout) {
        ai_interaction_timeout = 4000;
      }
      if ('undefined' == typeof ai_delay_tracking) {
        ai_delay_tracking = 0;
      }
      if (0 < ai_interaction_timeout) {
        ai_delay_tracking += ai_interaction_timeout;
        var a = setTimeout(d, ai_interaction_timeout, true);
      }
      b.forEach(function (f) {
        window.addEventListener(f, c, { passive: true });
      });
    }
  };
  setTimeout(ai_process_wait_for_interaction, 3);
  ai_process_check_recaptcha_score = function () {
    if ('undefined' != typeof grecaptcha && '' != ai_recaptcha_site_key) {
      grecaptcha.ready(function () {
        grecaptcha.execute(ai_recaptcha_site_key, { action: 'submit' }).then(function (c) {
          var d = new XMLHttpRequest();
          c = 'ai_check=AI_NONCE&recaptcha=' + c;
          d.open('POST', ai_ajax_url + '?action=ai_ajax', true);
          d.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          d.onreadystatechange = function () {
            if (4 == this.readyState && 200 == this.status) {
              let e = JSON.parse(this.responseText);
              if (e && e.success) {
                ai_recaptcha_score = e.score;
                const h = document.getElementsByClassName('ai-check-recaptcha-score');
                if (e.score < 1000 * parseFloat(ai_recaptcha_threshold) / 1000)
                  for (var b = 0; b < h.length; b++) {
                    var a = h[b].closest('.ai-track');
                    if (null != a) {
                      a.classList.remove('ai-track');
                    }
                    a = h[b].dataset.class;
                    if ('undefined' != typeof a) {
                      a = b64d(a);
                      var f = h[b].closest('.' + a);
                      if (null != f) {
                        f.classList.remove('ai-list-block');
                        f.classList.remove('ai-list-block-ip');
                        a = f.getElementsByClassName('ai-recaptcha-score');
                        if (0 != a.length) {
                          a[0].innerHTML = e.score;
                        }
                        a = f.getElementsByClassName('ai-recaptcha-result');
                        if (0 != a.length) {
                          a[0].innerHTML = ai_front.hidden;
                        }
                      }
                    }
                  }
                else
                  for (p({
                      lazyClass: 'ai-check-recaptcha-score',
                      threshold: 99999,
                      observeChanges: true,
                      mutationObserverOptions: {
                        childList: true,
                        attributes: true,
                        subtree: true
                      }
                    }), b = 0; b < h.length; b++) {
                    a = h[b].dataset.class;
                    if ('undefined' != typeof a) {
                      a = b64d(a);
                      f = h[b].closest('.' + a);
                      if (null != f) {
                        a = f.getElementsByClassName('ai-recaptcha-score');
                        if (0 != a.length) {
                          a[0].innerHTML = e.score;
                        }
                        a = f.getElementsByClassName('ai-recaptcha-result');
                        if (0 != a.length) {
                          a[0].innerHTML = ai_front.visible;
                        }
                      }
                    }
                  }
              }
            }
          };
          d.send(c);
        });
      });
    }
  };
  setTimeout(ai_process_check_recaptcha_score, 2);
  ai_process_delayed_blocks = function () {
    var c = document.getElementsByClassName('ai-delayed-unprocessed');
    if (0 != c.length) {
      function e(m) {
        p({
          lazyClass: 'ai-delayed-' + m,
          threshold: 99999,
          observeChanges: true,
          mutationObserverOptions: {
            childList: true,
            attributes: true,
            subtree: true
          }
        });
      }
      if ('undefined' == typeof ai_delay_tracking) {
        ai_delay_tracking = 0;
      }
      for (var d = [], b = 0; b < c.length; b++) {
        var a = parseInt(c[b].getAttribute('data-block'));
        d.push(a);
      }
      const h = [...new Set(d)];
      for (c = 0; c < h.length; c++) {
        a = h[c];
        d = document.getElementsByClassName('ai-delayed-' + a);
        b = parseInt(d[0].getAttribute('data-delay'));
        for (var f = d.length - 1; 0 <= f; f--)
          d[f].classList.remove('ai-delayed-unprocessed');
        ai_delay_tracking += b;
        setTimeout(e, b, a);
      }
    }
  };
  setTimeout(ai_process_delayed_blocks, 1);
}
if ('undefined' != typeof ai_rotation_triggers) {
  ai_process_rotation = function (b) {
    var d = 'number' == typeof b.length;
    if (window.jQuery && window.jQuery.fn && b instanceof jQuery) {
      b = d ? Array.prototype.slice.call(b) : b[0];
    }
    if (d) {
      var e = false;
      b.forEach((c, h) => {
        if (c.classList.contains('ai-unprocessed') || c.classList.contains('ai-timer'))
          e = true;
      });
      if (!e)
        return;
      b.forEach((c, h) => {
        c.classList.remove('ai-unprocessed');
        c.classList.remove('ai-timer');
      });
    } else {
      if (!b.classList.contains('ai-unprocessed') && !b.classList.contains('ai-timer'))
        return;
      b.classList.remove('ai-unprocessed');
      b.classList.remove('ai-timer');
    }
    var a = false;
    if (d ? b[0].hasAttribute('data-info') : b.hasAttribute('data-info')) {
      var f = 'div.ai-rotate.ai-' + (d ? JSON.parse(atob(b[0].dataset.info)) : JSON.parse(atob(b.dataset.info)))[0];
      if (ai_rotation_triggers.includes(f)) {
        ai_rotation_triggers.splice(ai_rotation_triggers.indexOf(f), 1);
        a = true;
      }
    }
    if (d)
      for (d = 0; d < b.length; d++)
        0 == d ? ai_process_single_rotation(b[d], true) : ai_process_single_rotation(b[d], false);
    else
      ai_process_single_rotation(b, !a);
  };
  ai_process_single_rotation = function (b, d) {
    var e = [];
    Array.from(b.children).forEach((g, p) => {
      if (g.matches('.ai-rotate-option')) {
        e.push(g);
      }
    });
    if (0 != e.length) {
      e.forEach((g, p) => {
        g.style.display = 'none';
      });
      if (b.hasAttribute('data-next')) {
        k = parseInt(b.getAttribute('data-next'));
        var a = e[k];
        if (a.hasAttribute('data-code')) {
          var f = document.createRange();
          var c = true;
          try {
            var h = f.createContextualFragment(b64d(a.dataset.code));
          } catch (g) {
            c = false;
          }
          if (c) {
            a = h;
          }
        }
        if (0 != a.querySelectorAll('span[data-ai-groups]').length && 0 != document.querySelectorAll('.ai-rotation-groups').length) {
          setTimeout(function () {
            B();
          }, 5);
        }
      } else if (e[0].hasAttribute('data-group')) {
        var k = -1;
        var u = [];
        document.querySelectorAll('span[data-ai-groups]').forEach((g, p) => {
          if (g.offsetWidth || g.offsetHeight || g.getClientRects().length) {
            u.push(g);
          }
        });
        if (1 <= u.length) {
          timed_groups = [];
          groups = [];
          u.forEach(function (g, p) {
            active_groups = JSON.parse(b64d(g.dataset.aiGroups));
            var r = false;
            g = g.closest('.ai-rotate');
            if (null != g && g.classList.contains('ai-timed-rotation')) {
              r = true;
            }
            active_groups.forEach(function (t, v) {
              groups.push(t);
              if (r) {
                timed_groups.push(t);
              }
            });
          });
          groups.forEach(function (g, p) {
            if (-1 == k) {
              e.forEach((r, t) => {
                var v = b64d(r.dataset.group);
                option_group_items = v.split(',');
                option_group_items.forEach(function (C, E) {
                  if (-1 == k && C.trim() == g) {
                    k = t;
                    if (timed_groups.includes(v)) {
                      b.classList.add('ai-timed-rotation');
                    }
                  }
                });
              });
            }
          });
        }
      } else if (b.hasAttribute('data-shares'))
        for (f = JSON.parse(atob(b.dataset.shares)), a = Math.round(100 * Math.random()), c = 0; c < f.length && (k = c, 0 > f[c] || !(a <= f[c])); c++);
      else {
        f = b.classList.contains('ai-unique');
        a = new Date();
        f ? ('number' != typeof ai_rotation_seed && (ai_rotation_seed = (Math.floor(1000 * Math.random()) + a.getMilliseconds()) % e.length), f = ai_rotation_seed, f > e.length && (f %= e.length), a = parseInt(b.dataset.counter), a <= e.length ? (k = parseInt(f + a - 1), k >= e.length && (k -= e.length)) : k = e.length) : (k = Math.floor(Math.random() * e.length), a.getMilliseconds() % 2 && (k = e.length - k - 1));
      }
      if (b.classList.contains('ai-rotation-scheduling'))
        for (k = -1, f = 0; f < e.length; f++) {
          a = e[f];
          if (a.hasAttribute('data-scheduling')) {
            c = b64d(a.dataset.scheduling);
            a = true;
            if (0 == c.indexOf('^')) {
              a = false;
              c = c.substring(1);
            }
            var q = c.split('=');
            var m = -1 != c.indexOf('%') ? q[0].split('%') : [q[0]];
            c = m[0].trim().toLowerCase();
            m = 'undefined' != typeof m[1] ? m[1].trim() : 0;
            q = q[1].replace(' ', '');
            var n = new Date().getTime();
            n = new Date(n);
            var l = 0;
            switch (c) {
            case 's':
              l = n.getSeconds();
              break;
            case 'i':
              l = n.getMinutes();
              break;
            case 'h':
              l = n.getHours();
              break;
            case 'd':
              l = n.getDate();
              break;
            case 'm':
              l = n.getMonth();
              break;
            case 'y':
              l = n.getFullYear();
              break;
            case 'w': {
                l = n.getDay();
                l = 0 == l ? 6 : l - 1;
              }
            }
            c = 0 != m ? l % m : l;
            m = q.split(',');
            q = !a;
            for (n = 0; n < m.length; n++) {
              l = m[n];
              if (-1 != l.indexOf('-')) {
                l = l.split('-');
                if (c >= l[0] && c <= l[1]) {
                  q = a;
                  break;
                }
              } else if (c == l) {
                q = a;
                break;
              }
            }
            if (q) {
              k = f;
              break;
            }
          }
        }
      if (!(0 > k || k >= e.length)) {
        a = e[k];
        var z = '';
        var w = b.classList.contains('ai-timed-rotation');
        e.forEach((g, p) => {
          if (g.hasAttribute('data-time')) {
            w = true;
          }
        });
        if (a.hasAttribute('data-time')) {
          f = atob(a.dataset.time);
          if (0 == f && 1 < e.length) {
            c = k;
            do {
              c++;
              if (c >= e.length) {
                c = 0;
              }
              m = e[c];
              if (!m.hasAttribute('data-time')) {
                k = c;
                a = e[k];
                f = 0;
                break;
              }
              m = atob(m.dataset.time);
            } while (0 == m && c != k);
            if (0 != f) {
              k = c;
              a = e[k];
              f = atob(a.dataset.time);
            }
          }
          if (0 < f && (c = k + 1, c >= e.length && (c = 0), b.hasAttribute('data-info'))) {
            m = JSON.parse(atob(b.dataset.info))[0];
            b.setAttribute('data-next', c);
            var x = 'div.ai-rotate.ai-' + m;
            if (ai_rotation_triggers.includes(x)) {
              d = false;
            }
            if (d) {
              ai_rotation_triggers.push(x);
              setTimeout(function () {
                var g = document.querySelectorAll(x);
                g.forEach((p, r) => {
                  p.classList.add('ai-timer');
                });
                ai_process_rotation(g);
              }, 1000 * f);
            }
            z = ' (' + f + ' s)';
          }
        } else if (!a.hasAttribute('data-group')) {
          e.forEach((g, p) => {
            if (p != k) {
              g.remove();
            }
          });
        }
        a.style.display = '';
        a.style.visibility = '';
        a.style.position = '';
        a.style.width = '';
        a.style.height = '';
        a.style.top = '';
        a.style.left = '';
        a.classList.remove('ai-rotate-hidden');
        a.classList.remove('ai-rotate-hidden-2');
        b.style.position = '';
        if (a.hasAttribute('data-code')) {
          e.forEach((g, p) => {
            g.innerText = '';
          });
          d = b64d(a.dataset.code);
          f = document.createRange();
          c = true;
          try {
            h = f.createContextualFragment(d);
          } catch (g) {
            c = false;
          }
          a.append(h);
          D();
        }
        f = parseInt(a.dataset.index);
        var y = b64d(a.dataset.name);
        d = b.closest('.ai-debug-block');
        if (null != d) {
          h = d.querySelectorAll('kbd.ai-option-name');
          d = d.querySelectorAll('.ai-debug-block');
          if (0 != d.length) {
            var A = [];
            d.forEach((g, p) => {
              g.querySelectorAll('kbd.ai-option-name').forEach((r, t) => {
                A.push(r);
              });
            });
            h = Array.from(h);
            h = h.slice(0, h.length - A.length);
          }
          if (0 != h.length) {
            separator = h[0].hasAttribute('data-separator') ? h[0].dataset.separator : '';
            h.forEach((g, p) => {
              g.innerText = separator + y + z;
            });
          }
        }
        d = false;
        a = b.closest('.ai-adb-show');
        if (null != a && a.hasAttribute('data-ai-tracking')) {
          h = JSON.parse(b64d(a.getAttribute('data-ai-tracking')));
          if ('undefined' !== typeof h && h.constructor === Array) {
            h[1] = f;
            h[3] = y;
            a.setAttribute('data-ai-tracking', b64e(JSON.stringify(h)));
            a.classList.add('ai-track');
            if (w && ai_tracking_finished) {
              a.classList.add('ai-no-pageview');
            }
            d = true;
          }
        }
        if (!d) {
          d = b.closest('div[data-ai]');
          if (null != d && d.hasAttribute('data-ai')) {
            h = JSON.parse(b64d(d.getAttribute('data-ai')));
            if ('undefined' !== typeof h && h.constructor === Array) {
              h[1] = f;
              h[3] = y;
              d.setAttribute('data-ai', b64e(JSON.stringify(h)));
              d.classList.add('ai-track');
              if (w && ai_tracking_finished) {
                d.classList.add('ai-no-pageview');
              }
            }
          }
        }
      }
    }
  };
  ai_process_rotations = function () {
    document.querySelectorAll('div.ai-rotate').forEach((b, d) => {
      ai_process_rotation(b);
    });
  };
  function B() {
    document.querySelectorAll('div.ai-rotate.ai-rotation-groups').forEach((b, d) => {
      b.classList.add('ai-timer');
      ai_process_rotation(b);
    });
  }
  ai_process_rotations_in_element = function (b) {
    if (null != b) {
      b.querySelectorAll('div.ai-rotate').forEach((d, e) => {
        ai_process_rotation(d);
      });
    }
  };
  (function (b) {
    'complete' === document.readyState || 'loading' !== document.readyState && !document.documentElement.doScroll ? b() : document.addEventListener('DOMContentLoaded', b);
  }(function () {
    setTimeout(function () {
      ai_process_rotations();
    }, 10);
  }));
  ai_process_elements_active = false;
  function D() {
    if (!ai_process_elements_active) {
      setTimeout(function () {
        ai_process_elements_active = false;
        if ('function' == typeof ai_process_rotations) {
          ai_process_rotations();
        }
        if ('function' == typeof ai_process_lists) {
          ai_process_lists();
        }
        if ('function' == typeof ai_process_ip_addresses) {
          ai_process_ip_addresses();
        }
        if ('function' == typeof ai_process_filter_hooks) {
          ai_process_filter_hooks();
        }
        if ('function' == typeof ai_adb_process_blocks) {
          ai_adb_process_blocks();
        }
        if ('function' == typeof ai_process_impressions && 1 == ai_tracking_finished) {
          ai_process_impressions();
        }
        if ('function' == typeof ai_install_click_trackers && 1 == ai_tracking_finished) {
          ai_install_click_trackers();
        }
        if ('function' == typeof ai_install_close_buttons) {
          ai_install_close_buttons(document);
        }
      }, 5);
    }
    ai_process_elements_active = true;
  }
}
window.onscroll = function () {
  ai_scroll_update();
};
function ai_scroll_update() {
  for (var c = document.getElementsByClassName('ai-parallax-background'), b = 0; b < c.length; b++) {
    var a = c[b].getBoundingClientRect();
    var d = (window.innerHeight || document.documentElement.clientHeight) + a.height;
    if (visible = 0 <= a.top + a.height && 0 <= a.left && a.bottom - a.height <= (window.innerHeight || document.documentElement.clientHeight) && a.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      var e = parseInt(c[b].dataset.shift);
      c[b].style.backgroundPositionY = (a.top + a.height) / d * -e + 'px';
      if ('cover' != c[b].style.backgroundSize) {
        a = parseInt((window.innerWidth || document.documentElement.clientWidth) / 2 - a.left - a.width / 2);
        c[b].style.left = a + 'px';
        c[b].style.transform = 'translate(' + -a + 'px)';
      }
    }
  }
}
setTimeout(function () {
  ai_scroll_update();
}, 100);
if ('undefined' != typeof ai_process_sticky_elements_on_ready) {
  if ('number' != typeof ai_sticky_delay) {
    ai_sticky_delay = 200;
  }
  ai_process_sticky_elements = function () {
    var h = document.querySelector('body').clientHeight - document.documentElement.clientHeight;
    document.querySelectorAll('[data-ai-position-pc]').forEach((a, e) => {
      if (0 < h) {
        a.style.top = h * a.dataset.aiPositionPc + 'px';
      }
    });
    ai_main_content_element = ai_main_content_element.trim();
    var k = document.documentElement.clientWidth;
    var d = element = document.querySelector('.ai-content');
    var m = document.querySelectorAll('.ai-sticky-content');
    var b = document.querySelectorAll('.ai-sticky-background');
    var c = 0;
    if (0 != m.length || 0 != b.length)
      if ('' == ai_main_content_element || document.querySelector('body').classList.contains('ai-preview')) {
        if (null != element)
          for (; 'BODY' != element.tagName;) {
            b = element.offsetWidth;
            if (0 != b && b <= document.documentElement.clientWidth && b >= c - 1) {
              d = element;
              c = b;
            }
            element = element.parentElement;
          }
        if (0 == c && (element = document.querySelectorAll('.ai-content'), 0 != element.length))
          for (d = element = element[element.length - 1]; 'BODY' != element.tagName;) {
            b = element.offsetWidth;
            if (0 != b && b <= document.documentElement.clientWidth && b >= c - 1) {
              d = element;
              c = b;
            }
            element = element.parentElement;
          }
      } else if (parseInt(ai_main_content_element) != ai_main_content_element) {
        d = document.querySelector(ai_main_content_element);
        if (null != d && 'undefined' != typeof d.tagName) {
          b = d.offsetWidth;
          if (0 != b && b <= document.documentElement.clientWidth && b >= c) {
            c = b;
          }
        }
      }
    if (0 != c) {
      var n = Math.floor(c / 2) + 0;
      m.forEach((a, e) => {
        if (0 != c) {
          el_style_display = a.style.display;
          a.style.display = 'block';
          e = Math.max(a.clientWidth, a.offsetWidth, a.scrollWidth);
          var f = Math.max(a.clientHeight, a.offsetHeight, a.scrollHeight);
          a.style.display = el_style_display;
          var l = a.classList.contains('ai-sticky-background');
          a.classList.remove('ai-sticky-background');
          if (l && (a.classList.remove('ai-sticky-background'), a.removeAttribute('data-aos'), 'undefined' === typeof ai_preview)) {
            var g = a.querySelector('.ai-close-button');
            if (null != g) {
              g.removeAttribute('class');
            }
          }
          a.classList.contains('ai-sticky-left') ? (g = parseInt(a.style.marginRight), l || d.offsetLeft - g - e >= -e / 2 ? (a.style.right = 'calc(50% + ' + n + 'px)', a.style.display = 'block') : a.classList.remove('ai-sticky-scroll')) : a.classList.contains('ai-sticky-right') && (g = parseInt(a.style.marginLeft), l || d.offsetLeft + c + g + e <= document.documentElement.clientWidth + e / 2 ? (a.style.right = '', a.style.left = 'calc(50% + ' + n + 'px)', a.style.display = 'block') : a.classList.remove('ai-sticky-scroll'));
          if (a.classList.contains('ai-sticky-scroll')) {
            a.style.marginBottom = -f;
            a.style.display = 'block';
          }
        }
      });
      b = document.querySelectorAll('.ai-sticky-background');
      b.forEach((a, e) => {
        if (0 != c) {
          e = a.clientHeight;
          a.classList.remove('ai-sticky-background');
          a.removeAttribute('data-aos');
          if ('undefined' === typeof ai_preview) {
            var f = a.querySelector('.ai-close-button');
            if (null != f) {
              f.removeAttribute('class');
            }
          }
          a.classList.contains('ai-sticky-left') ? (f = d.offsetLeft, a.style.width = f + 'px', a.style.overflow = 'hidden', a.style.display = 'block') : a.classList.contains('ai-sticky-right') && (f = document.documentElement.clientWidth - (d.offsetLeft + c), a.style.width = f + 'px', a.style.overflow = 'hidden', a.style.display = 'flex');
          if (a.classList.contains('ai-sticky-scroll')) {
            a.style.marginBottom = -e;
            a.style.display = 'block';
          }
        }
      });
    }
  };
  function p(h) {
    'complete' === document.readyState || 'loading' !== document.readyState && !document.documentElement.doScroll ? h() : document.addEventListener('DOMContentLoaded', h);
  }
  function q() {
    setTimeout(function () {
      ai_process_sticky_elements();
    }, ai_sticky_delay);
    if ('undefined' != typeof AOS && 'undefined' == typeof ai_no_aos_init) {
      setTimeout(function () {
        AOS.init();
      }, ai_sticky_delay + 10);
    }
  }
  if (ai_process_sticky_elements_on_ready) {
    p(q);
  }
}
if ('undefined' != typeof ai_selection_block) {
  function u(a, b) {
    for (; b;) {
      if ((b.nodeName || b.tagName).toLowerCase() === a.toLowerCase())
        return b;
      b = b.parentNode;
    }
    return null;
  }
  function l(a) {
    if (!(a instanceof HTMLElement))
      return '';
    var b = a.nodeName.toLowerCase();
    if (a.hasAttribute('id') && '' != a.id) {
      b = b + '#' + a.id;
    }
    if (a.className && (classes = a.className.replace(/ai-selected|ai-highlighted/g, '').trim())) {
      b = b + '.' + classes.replace(/\s{2,}/g, ' ').trim().replace(/ /g, '.');
    }
    return b;
  }
  function m(a) {
    for (var b = []; null != a.parentNode;) {
      for (var c = 0, d = 0, n = 0, f = 0; f < a.parentNode.childNodes.length; f++) {
        var g = a.parentNode.childNodes[f];
        if (a.parentNode.childNodes[f] instanceof HTMLElement) {
          if (a.parentNode.childNodes[f].nodeName == a.nodeName) {
            d++;
          }
          if (a.parentNode.childNodes[f] === a) {
            n = c;
          }
          c++;
        }
      }
      a.hasAttribute('id') && '' != a.id ? b.unshift(a.nodeName.toLowerCase() + '#' + a.id) : 1 < d ? b.unshift(a.nodeName.toLowerCase() + ':nth-child(' + (n + 1) + ')') : b.unshift(a.nodeName.toLowerCase());
      a = a.parentNode;
    }
    return b.slice(1);
  }
  function v(a) {
    var b = [];
    var c = false;
    a.reverse().forEach(function (d) {
      if (!c) {
        b.unshift(d);
      }
      c = -1 != d.indexOf('#');
    });
    return b;
  }
  function h(a) {
    a = a.trim();
    if (',' == a.slice(0, 1)) {
      a = a.slice(1, a.length);
    }
    if (',' == a.slice(-1)) {
      a = a.slice(0, a.length - 1);
    }
    return a.trim();
  }
  function e(a) {
    return '<kbd class="ai-html-element">' + a + '</kbd>';
  }
  function p(a) {
    var b = [];
    a.forEach(function (c) {
      b.push(e(c));
    });
    return b;
  }
  function q() {
    document.querySelectorAll('.ai-html-element').forEach(function (a) {
      a.addEventListener('click', b => {
        b = a.innerText;
        document.getElementById('ai-selector-element').innerHTML = e(b);
        document.querySelector('.ai-selected').classList.remove('ai-selected');
        document.querySelector(b).classList.add('ai-selected');
        document.querySelectorAll('#ai-selector-data ' + b).forEach(function (c) {
          c.classList.remove('ai-selected');
        });
        document.getElementById('ai-selector').value = b;
      });
    });
  }
  function r(a) {
    if (null != window.opener && !window.opener.closed) {
      var b = window.opener.document;
      var c = document.getElementById('ai-selector').value;
      if (a) {
        a = window.opener.document.querySelector(ai_settings_input).value.trim();
        a = h(a);
        if ('' != a) {
          a += ', ';
        }
        c = a + c;
      }
      window.opener.document.querySelector(ai_settings_input).value = c;
    }
  }
  function t() {
    ctrl_pressed ? (document.getElementById('ai-use-button').style.display = 'none', document.getElementById('ai-add-button').style.display = 'block') : (document.getElementById('ai-use-button').style.display = 'block', document.getElementById('ai-add-button').style.display = 'none');
  }
  var ctrl_pressed = false;
  var selected_element = null;
  var current_element = null;
  document.onclick = function (a) {
    a = a || event;
    var b = u('a', a.target || a.srcElement);
    if (b && (a.preventDefault(), !ctrl_pressed)) {
      a = {
        html_element_selection: ai_selection_block,
        selector: document.getElementById('ai-selector').value,
        input: ai_settings_input
      };
      var c = document.createElement('form');
      c.setAttribute('method', 'post');
      c.setAttribute('action', b.href);
      c.setAttribute('target', '_self');
      for (var d in a)
        if (a.hasOwnProperty(d)) {
          b = document.createElement('input');
          b.type = 'hidden';
          b.name = d;
          b.value = encodeURI(a[d]);
          c.appendChild(b);
        }
      document.body.appendChild(c);
      c.submit();
      document.body.removeChild(c);
    }
  };
  document.addEventListener('keydown', a => {
    if ('17' == a.which) {
      ctrl_pressed = true;
      t();
      if (null != current_element && 'A' == current_element.tagName) {
        a = new Event('mouseover', {
          bubbles: true,
          cancelable: true
        });
        current_element.dispatchEvent(a);
      }
    }
  });
  document.addEventListener('keyup', a => {
    ctrl_pressed = false;
    t();
    if (null != current_element && 'A' == current_element.tagName) {
      a = new Event('mouseout', {
        bubbles: true,
        cancelable: true
      });
      current_element.dispatchEvent(a);
    }
  });
  document.querySelector('body').style.userSelect = 'none';
  document.querySelector('body').style.marginTop = '140px';
  var selection_ui = '<section id="ai-selector-data"><table>  <tbody>    <tr>      <td class="data-name">' + ai_front.element + '</td>      <td class="data-value"><section id="ai-selector-element"></section></td>      <td><button type="button" id="ai-cancel-button" style="min-width: 110px;" title="' + ai_front.cancel_element_selection + '"> ' + ai_front.cancel + ' </button></td>    </tr>    <tr>      <td>' + ai_front.path + '</td>      <td><section id="ai-selector-path"></section></td>      <td><button type="button" id="ai-parent-button" style="min-width: 110px;" title="' + ai_front.select_parent_element + '"> ' + ai_front.parent + ' </button></td>    </tr>    <tr>      <td>' + ai_front.selector + '</td>      <td style="width: 100%;"><input id="ai-selector" type="text" value="" maxlength="500" title="' + ai_front.css_selector + '" /></td>      <td><button type="button" id="ai-use-button" style="min-width: 110px;" title="' + ai_front.use_current_selector + '"> ' + ai_front.use + ' </button>          <button type="button" id="ai-add-button" style="min-width: 110px; display: none;" title="' + ai_front.add_current_selector + '"> ' + ai_front.add + ' </button></td>    </tr>  </tbody></table></section>';
  var range = document.createRange();
  var fragment_ok = true;
  try {
    var fragment = range.createContextualFragment(selection_ui);
  } catch (a) {
    fragment_ok = false;
    console.error('AI SELECTION', 'range.createContextualFragment ERROR:', a);
  }
  if (fragment_ok) {
    document.querySelector('body').prepend(fragment);
  }
  function k(a) {
    var b = a.target;
    var c = m(a.target);
    if (-1 == c.join(' > ').indexOf('ai-selector-data') && !a.target.classList.contains('ai-html-element'))
      switch (a.type) {
      case 'click':
        if ('A' != a.target.tagName || ctrl_pressed) {
          selected_element = a.target;
          document.getElementById('ai-selector-element').innerHTML = e(l(a.target));
          document.getElementById('ai-selector-path').innerHTML = p(c).join(' > ');
          q();
          document.querySelectorAll('.ai-highlighted').forEach(function (d) {
            d.classList.remove('ai-highlighted');
          });
          document.querySelectorAll('.ai-selected').forEach(function (d) {
            d.classList.remove('ai-selected');
          });
          a.target.classList.add('ai-selected');
          document.getElementById('ai-selector').value = v(c).join(' > ');
        }
        break;
      case 'mouseover':
        current_element = a.target;
        if ('A' != a.target.tagName || ctrl_pressed) {
          a.target.classList.add('ai-highlighted');
        }
        break;
      case 'mouseout':
        a.target.classList.remove('ai-highlighted');
      }
  }
  document.querySelector('body').addEventListener('mouseover', a => {
    k(a);
  });
  document.querySelector('body').addEventListener('mouseout', a => {
    k(a);
  });
  document.querySelector('body').addEventListener('click', a => {
    k(a);
  });
  document.getElementById('ai-selector').addEventListener('input', a => {
    document.querySelectorAll('.ai-highlighted').forEach(function (c) {
      c.classList.remove('ai-highlighted');
    });
    document.querySelectorAll('.ai-selected').forEach(function (c) {
      c.classList.remove('ai-selected');
    });
    a = h(document.getElementById('ai-selector').value);
    if ('' != a) {
      try {
        document.querySelectorAll(a).forEach(function (c) {
          c.classList.add('ai-selected');
        });
      } catch (c) {
        return;
      }
      var b = a.split(',');
      b.forEach(function (c) {
        document.querySelectorAll('#ai-selector-data ' + c).forEach(function (d) {
          d.classList.remove('ai-selected');
        });
      });
      1 == b.length && '' != a && 1 == document.querySelectorAll(a).length ? (selected_element = document.querySelector(b[0]), document.getElementById('ai-selector-element').innerHTML = e(l(selected_element)), document.getElementById('ai-selector-path').innerHTML = p(m(selected_element)).join(' > '), q()) : (selected_element = null, document.getElementById('ai-selector-element').innerText = '', document.getElementById('ai-selector-path').innerText = '');
    }
  });
  window.onkeydown = function (a) {
    if (27 === a.keyCode) {
      window.close();
    }
  };
  (function () {
    if (null != window.opener && !window.opener.closed) {
      document.getElementById('ai-selector').value = h(ai_settings_selector);
      var a = new Event('input', {
        bubbles: true,
        cancelable: true
      });
      document.getElementById('ai-selector').dispatchEvent(a);
    }
  }());
  document.getElementById('ai-cancel-button').addEventListener('click', a => {
    window.close();
  });
  document.getElementById('ai-parent-button').addEventListener('click', a => {
    if ('BODY' != selected_element.tagName) {
      selected_element = selected_element.parentElement;
      a = new Event('click', {
        bubbles: true,
        cancelable: true
      });
      selected_element.dispatchEvent(a);
    }
  });
  document.getElementById('ai-use-button').addEventListener('click', a => {
    r(false);
    window.close();
  });
  document.getElementById('ai-add-button').addEventListener('click', a => {
    r(true);
    window.close();
  });
}
if (window.jQuery && window.jQuery.fn) {
  (function (d) {
    d.fn.theiaStickySidebar = function (m) {
      function q(c, h) {
        if (true === c.initialized)
          return true;
        if (d('body').width() < c.minWidth)
          return false;
        x(c, h);
        return true;
      }
      function x(c, h) {
        c.initialized = true;
        if (0 === d('#theia-sticky-sidebar-stylesheet-' + c.namespace).length) {
          d('head').append(d('<style id="theia-sticky-sidebar-stylesheet-' + c.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));
        }
        h.each(function () {
          function k() {
            b.fixedScrollTop = 0;
            b.sidebar.css({ 'min-height': '1px' });
            b.stickySidebar.css({
              position: 'static',
              width: '',
              transform: 'none'
            });
          }
          function n(a) {
            var f = a.height();
            a.children().each(function () {
              f = Math.max(f, d(this).height());
            });
            return f;
          }
          var b = {};
          b.sidebar = d(this);
          b.options = c || {};
          b.container = d(b.options.containerSelector);
          if (0 == b.container.length) {
            b.container = b.sidebar.parent();
          }
          b.sidebar.parents().css('-webkit-transform', 'none');
          b.sidebar.css({
            position: b.options.defaultPosition,
            overflow: 'visible',
            '-webkit-box-sizing': 'border-box',
            '-moz-box-sizing': 'border-box',
            'box-sizing': 'border-box'
          });
          b.stickySidebar = b.sidebar.find('.theiaStickySidebar');
          if (0 == b.stickySidebar.length) {
            var y = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
            b.sidebar.find('script').filter(function (a, f) {
              return 0 === f.type.length || f.type.match(/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i);
            }).remove();
            b.stickySidebar = d('<div>').addClass('theiaStickySidebar').append(b.sidebar.children());
            b.sidebar.append(b.stickySidebar);
          }
          b.marginBottom = parseInt(b.sidebar.css('margin-bottom'));
          b.paddingTop = parseInt(b.sidebar.css('padding-top'));
          b.paddingBottom = parseInt(b.sidebar.css('padding-bottom'));
          var r = b.stickySidebar.offset().top;
          var t = b.stickySidebar.outerHeight();
          b.stickySidebar.css('padding-top', 1);
          b.stickySidebar.css('padding-bottom', 1);
          r -= b.stickySidebar.offset().top;
          t = b.stickySidebar.outerHeight() - t - r;
          0 == r ? (b.stickySidebar.css('padding-top', 0), b.stickySidebarPaddingTop = 0) : b.stickySidebarPaddingTop = 1;
          0 == t ? (b.stickySidebar.css('padding-bottom', 0), b.stickySidebarPaddingBottom = 0) : b.stickySidebarPaddingBottom = 1;
          b.previousScrollTop = null;
          b.fixedScrollTop = 0;
          k();
          b.onScroll = function (a) {
            if (a.stickySidebar.is(':visible'))
              if (d('body').width() < a.options.minWidth)
                k();
              else if (a.options.disableOnResponsiveLayouts && a.sidebar.outerWidth('none' == a.sidebar.css('float')) + 50 > a.container.width())
                k();
              else {
                var f = d(document).scrollTop();
                var l = 'static';
                if (f >= a.sidebar.offset().top + (a.paddingTop - a.options.additionalMarginTop)) {
                  var g = a.paddingTop + c.additionalMarginTop;
                  var u = a.paddingBottom + a.marginBottom + c.additionalMarginBottom;
                  var p = a.sidebar.offset().top;
                  var e = a.sidebar.offset().top + n(a.container);
                  l = 0 + c.additionalMarginTop;
                  g = a.stickySidebar.outerHeight() + g + u < d(window).height() ? l + a.stickySidebar.outerHeight() : d(window).height() - a.marginBottom - a.paddingBottom - c.additionalMarginBottom;
                  p = p - f + a.paddingTop;
                  u = e - f - a.paddingBottom - a.marginBottom;
                  e = a.stickySidebar.offset().top - f;
                  var v = a.previousScrollTop - f;
                  if ('fixed' == a.stickySidebar.css('position') && 'modern' == a.options.sidebarBehavior) {
                    e += v;
                  }
                  if ('stick-to-top' == a.options.sidebarBehavior) {
                    e = c.additionalMarginTop;
                  }
                  if ('stick-to-bottom' == a.options.sidebarBehavior) {
                    e = g - a.stickySidebar.outerHeight();
                  }
                  e = 0 < v ? Math.min(e, l) : Math.max(e, g - a.stickySidebar.outerHeight());
                  e = Math.max(e, p);
                  e = Math.min(e, u - a.stickySidebar.outerHeight());
                  l = (p = a.container.height() == a.stickySidebar.outerHeight()) || e != l ? p || e != g - a.stickySidebar.outerHeight() ? f + e - a.sidebar.offset().top - a.paddingTop <= c.additionalMarginTop ? 'static' : 'absolute' : 'fixed' : 'fixed';
                }
                'fixed' == l ? (g = d(document).scrollLeft(), a.stickySidebar.css({
                  position: 'fixed',
                  width: w(a.stickySidebar) + 'px',
                  transform: 'translateY(' + e + 'px)',
                  left: a.sidebar.offset().left + parseInt(a.sidebar.css('padding-left')) - g + 'px',
                  top: '0px'
                })) : 'absolute' == l ? (g = {}, 'absolute' != a.stickySidebar.css('position') && (g.position = 'absolute', g.transform = 'translateY(' + (f + e - a.sidebar.offset().top - a.stickySidebarPaddingTop - a.stickySidebarPaddingBottom) + 'px)', g.top = '0px'), g.width = w(a.stickySidebar) + 'px', g.left = '', a.stickySidebar.css(g)) : 'static' == l && k();
                if ('static' != l && 1 == a.options.updateSidebarHeight) {
                  a.sidebar.css({ 'min-height': a.stickySidebar.outerHeight() + a.stickySidebar.offset().top - a.sidebar.offset().top + a.paddingBottom });
                }
                a.previousScrollTop = f;
              }
          };
          b.onScroll(b);
          d(document).on('scroll.' + b.options.namespace, function (a) {
            return function () {
              a.onScroll(a);
            };
          }(b));
          d(window).on('resize.' + b.options.namespace, function (a) {
            return function () {
              a.stickySidebar.css({ position: 'static' });
              a.onScroll(a);
            };
          }(b));
          if ('undefined' !== typeof ResizeSensor) {
            new ResizeSensor(b.stickySidebar[0], function (a) {
              return function () {
                a.onScroll(a);
              };
            }(b));
          }
        });
      }
      function w(c) {
        try {
          var h = c[0].getBoundingClientRect().width;
        } catch (k) {
        }
        if ('undefined' === typeof h) {
          h = c.width();
        }
        return h;
      }
      m = d.extend({
        containerSelector: '',
        additionalMarginTop: 0,
        additionalMarginBottom: 0,
        updateSidebarHeight: true,
        minWidth: 0,
        disableOnResponsiveLayouts: true,
        sidebarBehavior: 'modern',
        defaultPosition: 'relative',
        namespace: 'TSS'
      }, m);
      m.additionalMarginTop = parseInt(m.additionalMarginTop) || 0;
      m.additionalMarginBottom = parseInt(m.additionalMarginBottom) || 0;
      (function (c, h) {
        if (!q(c, h)) {
          console.log('TSS: Body width smaller than options.minWidth. Init is delayed.');
          d(document).on('scroll.' + c.namespace, function (k, n) {
            return function (b) {
              if (q(k, n)) {
                d(this).unbind(b);
              }
            };
          }(c, h));
          d(window).on('resize.' + c.namespace, function (k, n) {
            return function (b) {
              if (q(k, n)) {
                d(this).unbind(b);
              }
            };
          }(c, h));
        }
      }(m, this));
      return this;
    };
  }(jQuery));
}
var ai_functions = true;
var e = function (t, i) {
  function s() {
    this.q = [];
    this.add = function (e) {
      this.q.push(e);
    };
    var e;
    var t;
    this.call = function () {
      for (e = 0, t = this.q.length; e < t; e++)
        this.q[e].call();
    };
  }
  function o(e, t) {
    return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.style[t];
  }
  function n(e, t) {
    if (e.resizedAttached) {
      if (e.resizedAttached)
        return void e.resizedAttached.add(t);
    } else {
      e.resizedAttached = new s();
      e.resizedAttached.add(t);
    }
    e.resizeSensor = document.createElement('div');
    e.resizeSensor.className = 'resize-sensor';
    var i = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
    var n = 'position: absolute; left: 0; top: 0; transition: 0s;';
    e.resizeSensor.style.cssText = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
    e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;"><div style="position: absolute; left: 0; top: 0; transition: 0s;"></div></div><div class="resize-sensor-shrink" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;"><div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"></div></div>';
    e.appendChild(e.resizeSensor);
    if (!{
        fixed: 1,
        absolute: 1
      }[o(e, 'position')]) {
      e.style.position = 'relative';
    }
    var d;
    var r;
    var l = e.resizeSensor.childNodes[0];
    var c = e.resizeSensor.childNodes[0].childNodes[0];
    var h = e.resizeSensor.childNodes[1];
    var a = (e.resizeSensor.childNodes[1].childNodes[0], function () {
      e.resizeSensor.childNodes[0].childNodes[0].style.width = e.resizeSensor.childNodes[0].offsetWidth + 10 + 'px';
      e.resizeSensor.childNodes[0].childNodes[0].style.height = e.resizeSensor.childNodes[0].offsetHeight + 10 + 'px';
      e.resizeSensor.childNodes[0].scrollLeft = e.resizeSensor.childNodes[0].scrollWidth;
      e.resizeSensor.childNodes[0].scrollTop = e.resizeSensor.childNodes[0].scrollHeight;
      e.resizeSensor.childNodes[1].scrollLeft = e.resizeSensor.childNodes[1].scrollWidth;
      e.resizeSensor.childNodes[1].scrollTop = e.resizeSensor.childNodes[1].scrollHeight;
      d = e.offsetWidth;
      r = e.offsetHeight;
    });
    a();
    var f = function () {
      if (e.resizedAttached) {
        e.resizedAttached.call();
      }
    };
    var u = function (e, t, i) {
      e.attachEvent ? e.attachEvent('on' + t, i) : e.addEventListener(t, i);
    };
    var p = function () {
      if (!(e.offsetWidth == d && e.offsetHeight == r)) {
        f();
      }
      a();
    };
    u(e.resizeSensor.childNodes[0], 'scroll', p);
    u(e.resizeSensor.childNodes[1], 'scroll', p);
  }
  var d = Object.prototype.toString.call(t);
  var r = '[object Array]' === d || '[object NodeList]' === d || '[object HTMLCollection]' === d || 'undefined' != typeof jQuery && t instanceof jQuery || 'undefined' != typeof Elements && t instanceof Elements;
  if (r)
    for (var l = 0, c = t.length; l < c; l++)
      n(t[l], i);
  else
    n(t, i);
  this.detach = function () {
    if (r)
      for (var i = 0, s = t.length; i < s; i++)
        e.detach(t[i]);
    else
      e.detach(t);
  };
};
e.detach = function (e) {
  if (e.resizeSensor) {
    e.removeChild(e.resizeSensor);
    delete e.resizeSensor;
    delete e.resizedAttached;
  }
};
'undefined' != typeof module && 'undefined' != typeof module.exports ? module.exports = e : window.ResizeSensor = e;
