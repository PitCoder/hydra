(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{208:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return b}));var r=t(1),a=t(9),o=(t(0),t(233)),i={id:"intro",title:"Overview",sidebar_label:"Introduction"},c={id:"configure_hydra/intro",title:"Overview",description:"Many things in Hydra can be customized. This includes:",source:"@site/docs/configure_hydra/Intro.md",permalink:"/docs/next/configure_hydra/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/configure_hydra/Intro.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1590641523,sidebar_label:"Introduction",sidebar:"Docs",previous:{title:"Specializing configuration",permalink:"/docs/next/patterns/specializing_config"},next:{title:"Job configuration",permalink:"/docs/next/configure_hydra/job"}},u=[{value:"Runtime variables",id:"runtime-variables",children:[]}],l={rightToc:u};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Many things in Hydra can be customized. This includes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Launcher configurations"),Object(o.b)("li",{parentName:"ul"},"Sweeper configuration"),Object(o.b)("li",{parentName:"ul"},"Logging configuration"),Object(o.b)("li",{parentName:"ul"},"Run and Multirun output directory patterns"),Object(o.b)("li",{parentName:"ul"},"Application help (--help and --hydra-help)")),Object(o.b)("p",null,"Hydra can be customized using the same methods you are already familiar with from the tutorial.\nYou can include some Hydra config snippet in your own config to override it directly, or compose in different\nconfigurations provided by plugins or by your own code. You can also override everything in Hydra from the command\nline just like with your own configuration."),Object(o.b)("p",null,"The Hydra configuration actually lives in the same config object as your configuration, but is removed prior to running\nyour function to reduce confusion.\nYou can view the configuration with ",Object(o.b)("inlineCode",{parentName:"p"},"--cfg hydra|job|all")),Object(o.b)("p",null,"The Hydra configuration itself is composed from multiple config files. here is a partial list:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/job_logging : default     # Job's logging config\n  - hydra/launcher: basic           # Launcher config\n  - hydra/sweeper: basic            # Sweeper config\n  - hydra/output: default           # Output directory\n")),Object(o.b)("p",null,"You can view the Hydra config structure ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/hydra/conf"}),"here"),"."),Object(o.b)("p",null,"This is a subset of the composed Hydra configuration node:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    # Output directory for normal runs\n    dir: ./outputs/${now:%Y-%m-%d_%H-%M-%S}\n  sweep:\n    # Output directory for sweep runs\n    dir: /checkpoint/${env:USER}/outputs/${now:%Y-%m-%d_%H-%M-%S}\n    # Output sub directory for sweep runs.\n    subdir: ${hydra.job.num}_${hydra.job.id}\n")),Object(o.b)("h2",{id:"runtime-variables"},"Runtime variables"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"hydra")," package is deleted from your config when the function runs to reduce the amount of noise\nin the config passed to the function.",Object(o.b)("br",{parentName:"p"}),"\n","You can still access all config nodes in Hydra through the custom resolver ",Object(o.b)("inlineCode",{parentName:"p"},"hydra"),". "),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"config_name: ${hydra:job.config_name}\n")),Object(o.b)("p",null,"Pay close attention to the syntax: The resolver name is ",Object(o.b)("inlineCode",{parentName:"p"},"hydra"),", and the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," is passed after the colon."),Object(o.b)("p",null,"The following variables are some of the variables populated at runtime.",Object(o.b)("br",{parentName:"p"}),"\n","You can see the full Hydra config using ",Object(o.b)("inlineCode",{parentName:"p"},"--cfg hydra"),":"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"hydra.job"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"hydra.job.name")," : Job name, defaults to python file name without suffix. can be overridden."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"hydra.job.override_dirname")," : Pathname derived from the overrides for this job"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"hydra.job.num")," : job serial number in sweep"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"hydra.job.id")," : Job ID in the underlying jobs system (SLURM etc) ")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"hydra.runtime"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"hydra.runtime.version"),": Hydra's version"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"hydra.runtime.cwd"),": Original working directory the app was executed from")))}b.isMDXComponent=!0},233:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=b(t),s=r,m=p["".concat(i,".").concat(s)]||p[s]||d[s]||o;return t?a.a.createElement(m,c({ref:n},l,{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);