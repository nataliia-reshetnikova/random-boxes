(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,r){e.exports=r(19)},,,,,,function(e,a,r){},function(e,a,r){},function(e,a,r){},function(e,a,r){},function(e,a,r){"use strict";r.r(a);var n=r(0),o=r.n(n),t=r(8),l=r.n(t),i=(r(15),r(1)),u=r(2),s=r(5),c=r(4),d=r(3),h=r(6),m=(r(16),function(e){var a={backgroundColor:e.color};return o.a.createElement("div",{className:"box",style:a})}),k=(r(17),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.boxes.map(function(e,a){return o.a.createElement(m,{key:a,color:e})});return o.a.createElement("div",{className:"BoxList"},e)}}]),a}(n.Component));k.defaultProps={boxes:["red","white","green"]};var y=k,G=(r(18),32),g=function(e){function a(e){var r;Object(i.a)(this,a),r=Object(s.a)(this,Object(c.a)(a).call(this,e));var n=Array(G).fill().map(r.randColor,Object(d.a)(r));return r.state={boxes:n},setInterval(function(){var e=r.state.boxes.slice();e[Math.floor(Math.random()*e.length)]=r.randColor(),r.setState({boxes:e})},300),r}return Object(h.a)(a,e),Object(u.a)(a,[{key:"randColor",value:function(){var e=Math.floor(Math.random()*this.props.allColors.length);return this.props.allColors[e]}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(y,{boxes:this.state.boxes}))}}]),a}(n.Component);g.defaultProps={allColors:["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]};var B=g;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.2cee7f11.chunk.js.map