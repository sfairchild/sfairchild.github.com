(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),s=a(146),n=a(152),o=(a(163),a(164),a(150));t.default=function(){return r.a.createElement(n.a,null,r.a.createElement(o.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("h1",null,"Hi Everyone"),r.a.createElement("p",null,"Welcome to my site. This is still in development."),r.a.createElement(s.a,{to:"/page-2/"},"Go to page 2"))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var i=a(0),r=a.n(i),s=a(4),n=a.n(s),o=a(33),d=a.n(o);a.d(t,"a",function(){return d.a});a(147);var l=r.a.createContext({}),c=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},147:function(e,t,a){var i;e.exports=(i=a(149))&&i.default||i},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Dev Tips"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),s=a(4),n=a.n(s),o=a(55),d=a(2),l=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=l},150:function(e,t,a){"use strict";var i=a(151),r=a(0),s=a.n(r),n=a(4),o=a.n(n),d=a(154),l=a.n(d);function c(e){var t=e.description,a=e.lang,r=e.meta,n=e.keywords,o=e.title,d=i.data.site,c=t||d.siteMetadata.description;return s.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(r)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=c},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Dev Tips",description:"Short developer tips that I find handy",author:"@logicSean"}}}}},152:function(e,t,a){"use strict";var i=a(148),r=a(0),s=a.n(r),n=a(4),o=a.n(n),d=a(146),l=function(e){var t=e.siteTitle;return s.a.createElement("header",{style:{background:"#193e66",marginBottom:"1.45rem"}},s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},s.a.createElement("h1",{style:{margin:0}},s.a.createElement(d.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""};var c=l,u=(a(153),function(e){var t=e.children;return s.a.createElement(d.b,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},s.a.createElement("main",null,t),s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:i})});u.propTypes={children:o.a.node.isRequired};t.a=u},163:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/sfairchild/static/6d91c86c0fde632ba4cd01062fd9ccfa/4465b/gatsby-astronaut.png",srcSet:"/sfairchild/static/6d91c86c0fde632ba4cd01062fd9ccfa/48d69/gatsby-astronaut.png 75w,\n/sfairchild/static/6d91c86c0fde632ba4cd01062fd9ccfa/500db/gatsby-astronaut.png 150w,\n/sfairchild/static/6d91c86c0fde632ba4cd01062fd9ccfa/4465b/gatsby-astronaut.png 300w,\n/sfairchild/static/6d91c86c0fde632ba4cd01062fd9ccfa/1b440/gatsby-astronaut.png 450w,\n/sfairchild/static/6d91c86c0fde632ba4cd01062fd9ccfa/8d7dc/gatsby-astronaut.png 600w,\n/sfairchild/static/6d91c86c0fde632ba4cd01062fd9ccfa/44689/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},164:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,s=i(a(7)),n=i(a(35)),o=i(a(75)),d=i(a(76)),l=i(a(0)),c=i(a(4)),u=function(e){var t=(0,d.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var g=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+i+"<img "+o+d+a+r+t+n+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=l.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:i,src:r},u,{onLoad:n,onError:c,ref:t,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,s=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var d=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:s,hasNoScript:d,seenBefore:o},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,w=e.Tag,v=e.itemProp,S="boolean"==typeof b?"lightgray":b,E=(0,d.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),R=(0,d.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),L={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(h){var A=h;return l.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},l.default.createElement(w,{style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),S&&l.default.createElement(w,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),A.base64&&l.default.createElement(y,(0,d.default)({src:A.base64},L)),A.tracedSVG&&l.default.createElement(y,(0,d.default)({src:A.tracedSVG},L)),this.state.isVisible&&l.default.createElement("picture",null,A.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),l.default.createElement(y,{alt:a,title:t,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,d.default)({alt:a,title:t},A))}}))}if(g){var I=g,z=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},s);return"inherit"===s.display&&delete z.display,l.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},S&&l.default.createElement(w,{title:t,style:{backgroundColor:S,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),I.base64&&l.default.createElement(y,(0,d.default)({src:I.base64},L)),I.tracedSVG&&l.default.createElement(y,(0,d.default)({src:I.tracedSVG},L)),this.state.isVisible&&l.default.createElement("picture",null,I.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),l.default.createElement(y,{alt:a,title:t,width:I.width,height:I.height,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,d.default)({alt:a,title:t,width:I.width,height:I.height},I))}}))}return null},t}(l.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var S=b;t.default=S}}]);
//# sourceMappingURL=component---src-pages-index-js-6b88d4bce7bc3e0e7647.js.map