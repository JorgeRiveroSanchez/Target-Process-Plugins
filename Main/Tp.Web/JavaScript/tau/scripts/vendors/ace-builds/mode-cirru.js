ace.define("ace/mode/cirru_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"constant.numeric",regex:/[\d\.]+/},{token:"comment.line.double-dash",regex:/--/,next:"comment"},{token:"storage.modifier",regex:/\(/},{token:"storage.modifier",regex:/\,/,next:"line"},{token:"support.function",regex:/[^\(\)\"\s]+/,next:"line"},{token:"string.quoted.double",regex:/"/,next:"string"},{token:"storage.modifier",regex:/\)/}],comment:[{token:"comment.line.double-dash",regex:/\ +[^\n]+/,next:"start"}],string:[{token:"string.quoted.double",regex:/"/,next:"line"},{token:"constant.character.escape",regex:/\\/,next:"escape"},{token:"string.quoted.double",regex:/[^\\\"]+/}],escape:[{token:"constant.character.escape",regex:/./,next:"string"}],line:[{token:"constant.numeric",regex:/[\d\.]+/},{token:"markup.raw",regex:/^\s*/,next:"start"},{token:"storage.modifier",regex:/\$/,next:"start"},{token:"variable.parameter",regex:/[^\(\)\"\s]+/},{token:"storage.modifier",regex:/\(/,next:"start"},{token:"storage.modifier",regex:/\)/},{token:"markup.raw",regex:/^\ */,next:"start"},{token:"string.quoted.double",regex:/"/,next:"string"}]}};r.inherits(o,i),t.CirruHighlightRules=o}),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(e,t){"use strict";var r=e("../../lib/oop"),i=e("./fold_mode").FoldMode,o=e("../../range").Range,n=t.FoldMode=function(){};r.inherits(n,i),function(){this.getFoldWidgetRange=function(e,t,r){var i=this.indentationBlock(e,r);if(i)return i;var n=/\S/,s=e.getLine(r),g=s.search(n);if(-1!=g&&"#"==s[g]){for(var a=s.length,d=e.getLength(),l=r,c=r;++r<d;){s=e.getLine(r);var u=s.search(n);if(-1!=u){if("#"!=s[u])break;c=r}}if(c>l){var f=e.getLine(c).length;return new o(l,a,c,f)}}},this.getFoldWidget=function(e,t,r){var i=e.getLine(r),o=i.search(/\S/),n=e.getLine(r+1),s=e.getLine(r-1),g=s.search(/\S/),a=n.search(/\S/);
if(-1==o)return e.foldWidgets[r-1]=-1!=g&&a>g?"start":"","";if(-1==g){if(o==a&&"#"==i[o]&&"#"==n[o])return e.foldWidgets[r-1]="",e.foldWidgets[r+1]="","start"}else if(g==o&&"#"==i[o]&&"#"==s[o]&&-1==e.getLine(r-2).search(/\S/))return e.foldWidgets[r-1]="start",e.foldWidgets[r+1]="","";return e.foldWidgets[r-1]=-1!=g&&o>g?"start":"",a>o?"start":""}}.call(n.prototype)}),ace.define("ace/mode/cirru",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/cirru_highlight_rules","ace/mode/folding/coffee"],function(e,t){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,o=e("./cirru_highlight_rules").CirruHighlightRules,n=e("./folding/coffee").FoldMode,s=function(){this.HighlightRules=o,this.foldingRules=new n};r.inherits(s,i),function(){this.lineCommentStart="--",this.$id="ace/mode/cirru"}.call(s.prototype),t.Mode=s});