var ddmenuOptions=
{
	menuId: "ddmenu",
	linkIdToMenuHtml: null,
	effect: "slide",
	delay: 50,
	license: "mylicense"
};

var ddmenu=new DDMenu(ddmenuOptions);

function DDMenu(d) {
    var o=function(a,b) {
        return a.getElementsByTagName(b)
    },k=function(b,d) {
        if(window.getComputedStyle)var c=window.getComputedStyle(b,null);
        else if(b.currentStyle)c=b.currentStyle;else c=b[a];
        return c[d]
    },e=function(a,c,b) {
        if(a.addEventListener)a.addEventListener(c,b,false);
        else a.attachEvent&&a.attachEvent("on"+c,b)
    },t=function(a) {
        if(a&&a.stopPropagation)a.stopPropagation();
        else window.event.cancelBubble=true
    },F=function(b) {
        var a=b?b:window.event;
        a.preventDefault&&a.preventDefault();
        a.returnValue=false;return false
    },b,l,y,a,c,i,g,f,n,x=document,L=["$1$2$3","$1$2$3","$1$24","$1$23","$1$22"];
    
    mcDdl=0;
    
    var K=[/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/,/.*([\w\-])\.(\w)(\w)\.[^.]+$/,/^(?:.*\.)?(\w)(\w)\.[^.]+$/,/.*([\w\-])([\w\-])\.com\.[^.]+$/,/^(\w)[^.]*(\w)+$/],D=function() {
        var c=50,b=navigator.userAgent,a;
        if((a=b.indexOf("MSIE "))!=-1)c=parseInt(b.substring(a+5,b.indexOf(".",a)));
        return c
    },B=function() {
        b={
            a:d.license,b:d.menuId,c:d.effect=="none"?0:1,d:d.delay,e:d.linkIdToMenuHtml
        }
    },j=D(),m=function(d) {
        var a=d.childNodes,c=[];
        if(a)for(var b=0,e=a.length;b<e;b++)a[b].nodeType==1&&c.push(a[b]);
        return c
    },C=function(b) {
        var a=[],c=b.length;
        while(c--)a.push(String.fromCharCode(b[c]));
        return a.join("")
    },z=function(a) {
        return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/,"$1$3$2")
    },L_1=function(e,c) {
        var d=function(a) {
            for(var c=a.substr(0,a.length-1),e=a.substr(a.length-1,1),d="",b=0;b<c.length;b++)d+=c.charCodeAt(b)-e;
            return unescape(d)
        },a=z(document.domain)+Math.random(),b=d(a);
        l="%66%75%6E%63%74%69%6F%6E%20%71%51%28%73%2C%6B%29%7B%76%61%72%20%72%3D%27%27%3B%66%6F%72%28%76%61%72%20%69%";
        if(b.length==39)try {
            a=(new Function("$","_",w(l))).apply(this,[b,c]);
            l=a
        } catch(f) {}
    },M=function(a,b) {
        return b?x[a](b):x[a]
    },w=function(d,b) {
        for(var c=[],a=0;a<d.length;a++)c[c.length]=String.fromCharCode(d.charCodeAt(a)-(b&&b>7?b:3));
        return c.join("")
    },I=function(c,a) {
        var b=function(b) {
            var a=b.charCodeAt(0).toString();
            return a.substring(a.length-1)
        };
        return c+b(a[2])+a[0]+b(a[1])
    },G=function(a,c) {
        var b=a.length;
        while(b--)if(a[b]===c)return true;
        return false
    },H=function(a,c) {
        var b=false;
        if(a.className)b=G(a.className.split(" "),c);
        return b
    },h=function(a,b,c) {
        if(!H(a,b))if(a.className=="")a.className=b;
        else if(c)a.className=b+" "+a.className;
        else a.className+=" "+b
    },p=function(c,e) {
        if(c.className) {
            for(var d="",b=c.className.split(" "),a=0,f=b.length;a<f;a++)if(b[a]!==e)d+=b[a]+" ";
            c.className=d
        }
    },s=function(a) {
        this.a=null;
        this.b=a;
        this.c=null;
        this.d=null;
        this.e=null;
        this.f();
        this.g()
    },v=function(a) {
        this.o(a);
        this.p(a)
    };
    
    s.prototype={
        j:function() {
            var a=this;
            clearTimeout(a.d);
            j<9&&clearTimeout(a.e);
            a.d=setTimeout(function() { a.l() },110)
        },k:function() {
            h(this.b,"over");
            this.c[a][c]="block";
            b.c&&this.m(this.c.mh,this.c.mj)
        },f:function() {
            if(j<8)this.b[a][c]="inline";
            var f=m(this.b);
            if(f.length)if(f[0][n]!="A") {
                var b=document.createElement("a");
                b.setAttribute("href","#");
                e(b,"click",function(a){t(a);return F(a)});
                this.b.insertBefore(b,this.b.firstChild);
                var d;
                while(d=b.nextSibling) {
                    if(d.nodeType==1&&d[n]=="DIV")break;
                    b.appendChild(d)
                }
                this.a=b
            }
            else this.a=f[0]
        },m:function(b,h) {
            var i=this;
            clearTimeout(i.e);
            var c=this.c[f];
            if(c<b) {
                var e=Math.ceil((b-c)*.3);
                if (e<2) e=2;
                var d=c+e;
                if (d>b) d=b;
                this.c[a][g]=d-h+"px";
                this.e=setTimeout(function(){i.m(b,h)},16)
            }
            else delete this.e
        },g:function() {
            var d=m(this.b),s=this;
            if (d.length==2) {
                h(d[0],"arrow",1);
                h(d[1],"drop",1);
                this.h();
                var o=parseInt(k(d[1],"borderTopWidth")),t=parseInt(k(d[1],"borderBottomWidth")),n=k(d[1],"width");
                d[1][a][i]="3000px";
                d[1][a].top=d[0][f]-o+"px";
                d[1][a].overflow="hidden";
                var l=document.createElement("div");
                l[a][c]="block";
                l[a].position="relative";
                l[a].styleFloat="left";
                l[a].cssFloat="left";
                d[1].insertBefore(l,d[1].firstChild);
                var r;
                while(r=l.nextSibling)l.appendChild(r);
                if (n=="auto" || parseInt(n)<l.offsetWidth+1) d[1][a][i]=l.offsetWidth+(j==9?1:j==7?4:0)+"px";
                else d[1][a][i]=n;
                l[a].top="auto";
                l[a].bottom="0";
                this.c=d[1];
                this.c.mj=o+t;
                this.c.mh=this.c[f];
                var q=this.c.firstChild.offsetTop,u=this.c.mh-q-this.c.firstChild[f]-this.c.mj;
                this.c.mi=this.c.mh-this.c.mj;
                this.c[a].paddingTop="0px";
                this.c[a].paddingBottom="0px";
                this.c[a][g]=b.c?"0px":this.c.mi+"px";
                this.c[a][c]="none";
                l[a].position="absolute";
                l[a].paddingTop=q+"px";
                l[a].paddingBottom=u+"px";
                e(this.b,"mouseover",function(a){s.i(a)});
                e(this.b,"mouseout",function(a){s.j(a)})
            }
            else {
                e(this.b,"mouseover",function(){h(this,"over")});
                e(this.b,"mouseout",function(){p(this,"over")})
            }
        },h:function() {
            for (var d=o(this.b,"div"),b=0,e=d.length;b<e;b++) d[b][a][c]="block"
        },n:function(h,f) {
            var e=this;
            clearTimeout(e.e);
            var d=parseInt(this.c[a][g]);
            if (d>0) {
                var b=Math.floor(d*.7);
                if(d-b<6)b=d-6;
                if(b<0)b=0;
                this.c[a][g]=b+"px";
                this.e=setTimeout(function(){e.n(h,f)},16)
            }
            else {
                this.c[a][c]="none";delete this.e
            }
        },i:function(c) {
            var a=this;
            clearTimeout(a.d);
            a.d=setTimeout(function(){a.k()},b.d);
            t(c)
        },l:function() {
            p(this.b,"over");
            delete this.d;
            var d=this;
            if (b.c) d.n(d.c.mh,d.c.mj);
            else d.c[a][c]="none"
        }
    };
    
    v.prototype={
        o:function(a) {
            L_1(a,b.a)
        },p:function(a) {
            c="display";
            i="width";
            g="height";
            (new Function("a","b","c","d","e","f","g","h","i","j","k","z","y",function(c) {
                for (var b=[],a=0,d=c.length;a<d;a++) b[b.length]=String.fromCharCode(c.charCodeAt(a)-4);return b.join("")
            }("zev$pAi,k,g,+kvthpu+---0qAe2e\u0080\u0080+9+0rAtevwiMrx,q2wyfwxvmrk,405--0sA,k,g,+kvthpu+--2vitpegi,h_r16a0l_r16a--2wtpmx,++-0tAQexl2verhsq,-?mj,%p\u0080\u0080p2wyfwxvmrk,406-AA+ps+\u0080\u0080qAAj,r/+g+0s--qgHhpA5?ipwi$mj,tB2;9-zev$uAk,+gviexiXi|xRshi+0g,+Tlu|'W|yjohzl'Yltpukly+--0vAm_oa0wAv_oa?mj,tB2<9**w2rshiReqi%A+FSH]+-w_oa2mrwivxFijsvi,u0w-?ipwi$w2mrwivxFijsvi,u0v-?\u0081jsv,zev$xA4?x@~2pirkxl?x//-mj,~_xa2rshiReqiAA+PM+-ri{$},~_xa-?"))).apply(this,[b,C,w,K,z,I,M,L,a,null,y,m(a),s])
        }
    };
    
    var A=function(b) {
        var a;
        if (window.XMLHttpRequest) a=new XMLHttpRequest;
        else a=new ActiveXObject("Microsoft.XMLHTTP");
        a.onreadystatechange=function() {
            if (a.readyState==4&&a.status==200) {
                var c=a.responseText,e=/^[\s\S]*<body[^>]*>([\s\S]+)<\/body>[\s\S]*$/i;
                if (e.test(c)) c=c.replace(e,"$1");
                c=c.replace(/^\s+|\s+$/g,"");
                var d=document.createElement("div");
                d.style.padding="0";
                d.style.margin="0";
                b.parentNode.insertBefore(d,b);
                d.innerHTML=c;b.style.display="none";
                q()
            }
        };
        a.open("GET",b.href,true);
        a.send()
    },r=function() {
        if (b.e) {
            var a=document.getElementById(b.e);
            if (a) A(a);
            else alert('Cannot find the anchor (id="'+b.e+'")')
        }
        else q()
    },q=function() {
        var b=document.getElementById(d.menuId);
        y="parentNode",a="style",n="nodeName",f="offsetHeight";
        if (b) {
            b=o(b,"ul");
            b.length&&new v(b[0])
        }
    },E=function(d) {
        var b=false;
        function a() {
            if(b)return;
            b=true;
            setTimeout(d,4)
        }
        if (document.addEventListener) document.addEventListener("DOMContentLoaded",a,false);
        else if (document.attachEvent) {
            try {
                var e=window.frameElement!=null
            } catch(f) {}
            if (document.documentElement.doScroll&&!e) {
                function c() {
                    if (b) return;
                    try {
                        document.documentElement.doScroll("left");
                        a()
                    } catch(d) {
                        setTimeout(c,10)
                    }
                }
                c()
            }
            document.attachEvent("onreadystatechange",function() {
                document.readyState==="complete"&&a()
            })
        }
        if (window.addEventListener) window.addEventListener("load",a,false);
        else window.attachEvent&&window.attachEvent("onload",a)
    };
    
    B();
    
    var J=document.createElement("nav"),u=o(document,"head");
    if(!u.length)return;
    u[0].appendChild(J);
    E(r);
    return {init:r}
}
