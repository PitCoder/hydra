(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{157:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(1),a=t(9),o=(t(0),t(233)),i={id:"config_groups",title:"Grouping config files"},c={id:"tutorials/basic/your_first_app/config_groups",title:"Grouping config files",description:"Suppose you want to benchmark your application on each of PostgreSQL and MySQL. To do this, use config groups. ",source:"@site/docs/tutorials/basic/your_first_app/config_groups.md",permalink:"/docs/next/tutorials/basic/your_first_app/config_groups",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/basic/your_first_app/config_groups.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1590641523,sidebar:"Docs",previous:{title:"Using the config object",permalink:"/docs/next/tutorials/basic/your_first_app/using_config"},next:{title:"Selecting defaults for config groups",permalink:"/docs/next/tutorials/basic/your_first_app/defaults"}},p=[{value:"Using config groups",id:"using-config-groups",children:[]},{value:"More advanced usages of config groups",id:"more-advanced-usages-of-config-groups",children:[]}],l={rightToc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Suppose you want to benchmark your application on each of PostgreSQL and MySQL. To do this, use config groups. "),Object(o.b)("p",null,"A ",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Config Group"))," is a named group with a set of valid options."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The config options are mutually exclusive. Only one can be selected."),Object(o.b)("li",{parentName:"ul"},"Selecting a non-existent config option generates an error message with the valid options.")),Object(o.b)("p",null,"To create a config group, create a directory. e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"db")," to hold a file for each database configuration option.\nSince we are expecting to have multiple config groups, we will proactively move all the configuration files\ninto a ",Object(o.b)("inlineCode",{parentName:"p"},"conf")," directory."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text",metastring:'title="Directory layout"',title:'"Directory','layout"':!0}),"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u2514\u2500\u2500 db\n\u2502\xa0\xa0     \u251c\u2500\u2500 mysql.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 postgresql.yaml\n\u2514\u2500\u2500 my_app.py\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'}),"# @package _group_\ndriver: mysql\nuser: omry\npassword: secret\n")),Object(o.b)("p",null,"The config group determines the ",Object(o.b)("inlineCode",{parentName:"p"},"package")," of the config content inside the final config object.  "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Interpretation of db/mysql.yaml" {1}',title:'"Interpretation',of:!0,'db/mysql.yaml"':!0,"{1}":!0}),"db:\n  driver: mysql\n  user: omry\n  password: secret \n")),Object(o.b)("p",null,"In Hydra 1.1 ",Object(o.b)("inlineCode",{parentName:"p"},"_group_")," will become the default package.",Object(o.b)("br",{parentName:"p"}),"\n","For now, add ",Object(o.b)("inlineCode",{parentName:"p"},"# @package _group_")," at the top of your config group files.",Object(o.b)("br",{parentName:"p"}),"\n","Learn more about packages directive ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/advanced/package_directive"}),"here"),". "),Object(o.b)("h3",{id:"using-config-groups"},"Using config groups"),Object(o.b)("p",null,"Since we moved all the configs into the ",Object(o.b)("inlineCode",{parentName:"p"},"conf")," directory, we need to tell Hydra where to find them using the ",Object(o.b)("inlineCode",{parentName:"p"},"config_path")," parameter.\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"config_path")," is a directory relative to ",Object(o.b)("inlineCode",{parentName:"strong"},"my_app.py")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="my_app.py" {1}',title:'"my_app.py"',"{1}":!0}),'@hydra.main(config_path="conf")\ndef my_app(cfg: DictConfig) -> None:\n    print(cfg.pretty())\n')),Object(o.b)("p",null,"You can override ",Object(o.b)("inlineCode",{parentName:"p"},"config_path")," from the command line using the ",Object(o.b)("inlineCode",{parentName:"p"},"--config_path")," flag."),Object(o.b)("p",null,"Running ",Object(o.b)("inlineCode",{parentName:"p"},"my_app.py")," without requesting a configuration will print an empty config."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py\n{}\n")),Object(o.b)("p",null,"You can an item from the ",Object(o.b)("inlineCode",{parentName:"p"},"db")," config group to ",Object(o.b)("inlineCode",{parentName:"p"},"defaults list"),".",Object(o.b)("br",{parentName:"p"}),"\n","The ",Object(o.b)("inlineCode",{parentName:"p"},"defaults list")," will be described in the next page."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py +db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgre_user\n")),Object(o.b)("p",null,"Like before, you can still override individual values in the resulting config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py +db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgre_user\n")),Object(o.b)("h3",{id:"more-advanced-usages-of-config-groups"},"More advanced usages of config groups"),Object(o.b)("p",null,"Config groups can be nested. For example the config group ",Object(o.b)("inlineCode",{parentName:"p"},"db/mysql/storage_engine")," can contain ",Object(o.b)("inlineCode",{parentName:"p"},"innodb.yaml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"myisam.yaml"),".\nWhen selecting an option from a nested config group, use ",Object(o.b)("inlineCode",{parentName:"p"},"/"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ python my_app.py +db=mysql +db/mysql/storage_engine=innodb\ndb:\n  driver: mysql\n  user: omry\n  password: secret \n  mysql:\n    storage_engine:\n      innodb_data_file_path: /var/lib/mysql/ibdata1\n      max_file_size: 1G\n")),Object(o.b)("p",null,"This simple example also demonstrated a very powerful feature of Hydra:\nYou can compose your configuration object from multiple configuration groups."))}s.isMDXComponent=!0},233:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(t),g=r,d=b["".concat(i,".").concat(g)]||b[g]||u[g]||o;return t?a.a.createElement(d,c({ref:n},l,{components:t})):a.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);