(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5440:function(e,t,n){e.exports=n(5606)},5606:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(27),c=n.n(o),i=(n(5445),n(61)),s=n(135),l=n(30),u=n(23),d=n(11),h=n(44),m=n(138),p=n(128),f=n(129),w=n(137),g=n(130),b=n(139),v=n(80),y=n(82),H=n(131);function C(){var e=Object(H.a)(['\n  {\n    repository(owner: "LineageOS", name: "lineage_wiki") {\n      object(expression: "master:_data/devices") {\n        ... on Tree {\n          entries {\n            name\n            object {\n              ... on Blob {\n                text\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n']);return C=function(){return e},e}var E=Object(i.b)(C()),S=(n(5480),function(e,t){var n=e[t[0]],a=t.slice(1);return Array.isArray(n)?0===a.length?n.map(function(e){return"".concat(Object.keys(e)[0],": ").concat(Object.values(e)[0])}).join("\n"):n.map(function(e){return a.reduce(function(e,t){return void 0!==e[t]?e[t]:"".concat(Object.keys(e)[0],": ").concat(Object.values(e)[0][t])},e)}).join("\n"):"object"===typeof n?n?a.reduce(function(e,t){return e[t]},n):"":n}),j=function(e,t){var n=e[t[0]];return Array.isArray(n)?n.map(function(e){return Object.values(e)[0]}).reduce(function(e,t){return e>t?e:t}):n},k=function(e,t){return Array.isArray(e[t])?e[t].join(", "):""},_=function(e,t,n,a){if(null!=e){var r=e[t];return null!=r?r.map(function(e){return"".concat(e[n],": ").concat(e[a])}).join("\n"):""}return""},O=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(w.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).state={data:[],anchorCol:null,loading:!0,sorted:[{id:"release",desc:!0}],filtered:[{id:"maintained",value:"Yes"}],columns:[{id:"codename",Header:"Codename",accessor:"codename",show:!1},{id:"vendor",Header:"Vendor",accessor:"vendor",show:!0},{id:"name",Header:"Name",accessor:"name",show:!0},{id:"models",Header:"Models",accessor:function(e){return k(e,["models"])},show:!1},{id:"cameras",Header:"\u0421ameras",accessor:function(e){return S(e,["cameras","info"])},show:!0},{id:"screen",Header:"Screen size",accessor:"screen",show:!0},{id:"screen_res",Header:"Screen resolution",accessor:"screen_res",show:!0},{id:"screen_ppi",Header:"Screen ppi",accessor:"screen_ppi",show:!1},{id:"screen_tech",Header:"Screen technology",accessor:"screen_tech",show:!1},{id:"storage",Header:"Storage",accessor:"storage",show:!1},{id:"sdcard",Header:"SD Card",accessor:"sdcard",show:!1},{id:"battery_capacity",Header:"Battery capacity",accessor:function(e){return S(e,["battery","capacity"])},style:{whiteSpace:"pre-wrap"},show:!1},{id:"battery_removable",Header:"Battery removable",accessor:function(e){return S(e,["battery","removable"])},style:{whiteSpace:"pre-wrap"},show:!1},{id:"battery_tech",Header:"Battery tech",accessor:function(e){return S(e,["battery","tech"])},style:{whiteSpace:"pre-wrap"},show:!1},{id:"architecture",Header:"Architecture",accessor:function(e){return S(e,["architecture","cpu"])},show:!1},{id:"soc",Header:"System on a chip",accessor:"soc",show:!1},{id:"cpu",Header:"CPU",accessor:"cpu",show:!1},{id:"cpu_cores",Header:"CPU cores",accessor:"cpu_cores",show:!1},{id:"cpu_freq",Header:"CPU frequency",accessor:"cpu_freq",show:!1},{id:"gpu",Header:"GPU",accessor:"gpu",show:!1},{id:"bluetooth_spec",Header:"Bluetooth",accessor:"bluetooth.spec",show:!1},{id:"ram",Header:"RAM",accessor:"ram",show:!0},{id:"wifi",Header:"Wi-Fi",accessor:"wifi",show:!1},{id:"network",Header:"Network tech",accessor:function(e){return S(e,["network","tech"])},show:!1},{id:"network_bands",Header:"Network bands",accessor:function(e){return _(e,"network","tech","bands")},style:{whiteSpace:"pre-wrap"},show:!1},{id:"width",Header:"Width",accessor:"width",show:!1},{id:"height",Header:"Height",accessor:"height",show:!1},{id:"depth",Header:"Depth",accessor:"depth",show:!1},{id:"maintained",Header:"Maintained",accessor:function(e){return Array.isArray(e.maintainers)&&e.maintainers.length?"Yes":"No"},show:!1},{id:"maintainers",Header:"Maintainers",accessor:function(e){return k(e,["maintainers"])},show:!1},{id:"current_branch",Header:"Current version",accessor:"current_branch",show:!1},{id:"versions",Header:"Available versions",accessor:function(e){return k(e,["versions"])},show:!1},{id:"release",Header:"Release date",accessor:function(e){return j(e,["release"])},show:!0},{id:"peripherals",Header:"Peripherals",accessor:function(e){return k(e,["peripherals"])},show:!1},{id:"type",Header:"Device type",accessor:"type",show:!1},{id:"wiki",Header:"Wiki",filterable:!1,accessor:function(e){return r.a.createElement(d.j,{href:"https://wiki.lineageos.org/devices/".concat(e.codename),target:"_blank",rel:"noopener"},"Open wiki")},show:!1}]},n.handleColumnToggleClick=function(e){n.setState({anchorCol:e.currentTarget})},n.handleColumnToggleClose=function(){n.setState({anchorCol:null})},n.handleCToggle=function(e){var t=n.state.columns;t[t.findIndex(function(t){return t.id===e.target.value})].show=e.target.checked,n.setState({columns:t.slice()})},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.apolloClient.query({query:E}).then(function(t){return e.setState({data:t.data.repository.object.entries.map(function(e){return Object(v.safeLoad)(e.object.text,{schema:v.FAILSAFE_SCHEMA})})},function(){e.setState({loading:!1})})})}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.columns,n=e.filtered,a=e.sorted,r=t.filter(function(e){return e.show}).map(function(e){return e.id}).join("+"),o=a.map(function(e){return e.desc?"".concat(e.id,"_desc"):e.id}).join("+"),c=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="?show=".concat(r,"&sort=").concat(o,"&filter=").concat(c);i!==this.props.history.location.search&&this.props.history.push(i)}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state,a=n.data,o=n.anchorCol,c=n.columns,i=n.loading,s=n.sorted,l=n.filtered,u=Boolean(o);return r.a.createElement(d.k,{className:t.root},r.a.createElement(d.o,{title:"Toggle columns"},r.a.createElement(d.i,{onClick:this.handleColumnToggleClick},r.a.createElement(h.b,null))),r.a.createElement(d.l,{id:"simple-popper",open:u,anchorEl:o,onClose:this.handleColumnToggleClose,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(d.e,{className:t.formControl},r.a.createElement(d.h,null,"Select visible columns"),r.a.createElement(d.g,null,c.map(function(t){return r.a.createElement(d.f,{control:r.a.createElement(d.c,{onChange:e.handleCToggle}),checked:t.show,label:t.Header,value:t.id})})))),r.a.createElement(d.b,{href:"#"},"Reset"),r.a.createElement(y.b,{data:a,columns:c,column:Object(m.a)({},y.a.column,{style:{whiteSpace:"normal"}}),noDataText:i?"":"No devices found...",loading:i,showPagination:!1,pageSize:a.length,minRows:5,sorted:s,filterable:!0,filtered:l,defaultFilterMethod:function(e,t){var n=e.pivotId||e.id;return null!=t[n]&&String(t[n]).toLowerCase().includes(e.value.toLowerCase())},onSortedChange:function(t){e.setState({sorted:t})},onFilteredChange:function(t){e.setState({filtered:t})}}))}}]),t}(a.Component),A=Object(u.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700},formControl:{margin:3*e.spacing.unit}}})(O),T=Object(u.createMuiTheme)({palette:{primary:{main:"#167c80"},secondary:{main:"#008e9e"}},transitions:{create:function(){return"none"}}});var N=Object(u.withStyles)(function(e){return{appBar:{position:"relative",marginBottom:3*e.spacing.unit},icon:{marginRight:2*e.spacing.unit},container:{width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit,marginBottom:3*e.spacing.unit},appName:{flexGrow:1},columnIconInText:{verticalAlign:"middle"}}})(function(e){var t=e.classes,n=e.apolloClient;return r.a.createElement(s.a,{basename:"/"},r.a.createElement(d.d,null),r.a.createElement(l.a,{path:"/",render:function(e){var a=e.history;return r.a.createElement(u.MuiThemeProvider,{theme:T},r.a.createElement(d.a,{position:"static",className:t.appBar},r.a.createElement(d.n,null,r.a.createElement(h.a,{className:t.icon}),r.a.createElement(d.p,{className:t.appName,variant:"h6",color:"inherit",noWrap:!0},"Linext"),r.a.createElement(d.i,{href:"https://github.com/anton-z-s/linext/",target:"_blank",rel:"noopener",color:"inherit"},r.a.createElement(d.m,null,r.a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}))))),r.a.createElement("main",{className:t.container},r.a.createElement(d.p,{variant:"h6",gutterBottom:!0},"This is a list of"," ",r.a.createElement(d.j,{href:"https://www.lineageos.org/",target:"_blank",rel:"noopener"}," ","LineageOS")," ","devices, presented in a convenient way."),r.a.createElement(d.p,{variant:"subtitle1",gutterBottom:!0},"You can sort (hold Shift to multi-sort), filter devices, show/hide columns (",r.a.createElement(h.b,{className:t.columnIconInText}),"). All the info is straight out of the official wiki, always up-to-date."),r.a.createElement(A,{apolloClient:n,history:a})))}}))}),B=new i.a({uri:"https://api.github.com/graphql",headers:{authorization:"Bearer d7f5d16a3e126aecfb40f83b0826ae2ef74bd21a"}});c.a.render(r.a.createElement(N,{apolloClient:B}),document.getElementById("root"))}},[[5440,1,2]]]);
//# sourceMappingURL=main.c8f4f87e.chunk.js.map