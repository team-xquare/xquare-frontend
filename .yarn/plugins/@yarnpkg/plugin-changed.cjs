/* eslint-disable */
module.exports = {
name: "@yarnpkg/plugin-changed",
factory: function (require) {
var plugin;(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>f});const o=require("@yarnpkg/cli"),n=require("clipanion"),r=require("@yarnpkg/core");function a(e){const{project:t}=e,o=new Set;return function e({manifest:n}){for(const a of r.Manifest.hardDependencies)for(const r of n.getForScope(a).values()){const n=t.tryWorkspaceByDescriptor(r);n&&!o.has(n)&&(o.add(n),e(n))}}(e),[...o]}function s(e){const t=new Set;for(const o of e.project.workspaces){a(o).some(t=>r.structUtils.areLocatorsEqual(t.locator,e.locator))&&t.add(o)}return[...t]}var i=function(e,t,o,n){var r,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};class c extends o.BaseCommand{async listWorkspaces(e){const{stdout:t}=await r.execUtils.execvp("git",["diff","--name-only",...this.gitRange?[this.gitRange]:[]],{cwd:e.cwd,strict:!0}),o=function(e,t){const o=new Set;for(const n of e.workspaces){if(t.some(e=>e.startsWith(n.relativeCwd))&&!o.has(n)){o.add(n);for(const e of s(n))o.add(e)}}return[...o]}(e,t.split(/\r?\n/)),n=this.include||[],a=this.exclude||[];return o.filter(e=>{const t=r.structUtils.stringifyIdent(e.locator);if(t){if(n.length&&!n.includes(t))return!1;if(a.length&&a.includes(t))return!1}return!0})}}i([n.Command.String("--git-range")],c.prototype,"gitRange",void 0),i([n.Command.Array("--include")],c.prototype,"include",void 0),i([n.Command.Array("--exclude")],c.prototype,"exclude",void 0);var d=function(e,t,o,n){var r,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};class l extends c{constructor(){super(...arguments),this.json=!1}async execute(){const e=await r.Configuration.find(this.context.cwd,this.context.plugins),{project:t,workspace:n}=await r.Project.find(e,this.context.cwd);if(!n)throw new o.WorkspaceRequiredError(t.cwd,this.context.cwd);return(await r.StreamReport.start({configuration:e,json:this.json,stdout:this.context.stdout},async e=>{const o=await this.listWorkspaces(t);for(const t of o)e.reportInfo(null,t.relativeCwd),e.reportJson({name:t.manifest.name?r.structUtils.stringifyIdent(t.manifest.name):null,location:t.relativeCwd})})).exitCode()}}l.usage=n.Command.Usage({description:"List changed workspaces and their dependents",details:"\n      If the `--json` flag is set the output will follow a JSON-stream output also known as NDJSON (https://github.com/ndjson/ndjson-spec).\n    ",examples:[["Find changed files within a Git range","yarn changed list --git-range 93a9ed8..4ef2c61"],["Include or exclude workspaces","yarn changed list --include @foo/a --exclude @foo/b"]]}),d([n.Command.Boolean("--json")],l.prototype,"json",void 0),d([n.Command.Path("changed","list")],l.prototype,"execute",null);var p=function(e,t,o,n){var r,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};class u extends c{constructor(){super(...arguments),this.args=[],this.verbose=!1,this.parallel=!1,this.interlaced=!1,this.topological=!1}async execute(){const e=await r.Configuration.find(this.context.cwd,this.context.plugins),{project:t,workspace:n}=await r.Project.find(e,this.context.cwd);if(!n)throw new o.WorkspaceRequiredError(t.cwd,this.context.cwd);const a=await this.listWorkspaces(t);if(!a.length){return(await r.StreamReport.start({configuration:e,stdout:this.context.stdout},async e=>{e.reportInfo(null,"No workspaces changed")})).exitCode()}return this.cli.run(["workspaces","foreach",...a.reduce((e,t)=>[...e,"--include",r.structUtils.stringifyIdent(t.locator)],[]),...this.verbose?["--verbose"]:[],...this.parallel?["--parallel"]:[],...this.interlaced?["--interlaced"]:[],...this.topological?["--topological"]:[],...this.jobs?["--jobs",""+this.jobs]:[],this.commandName,...this.args],{cwd:t.cwd})}}u.usage=n.Command.Usage({description:"Run a command on changed workspaces and their dependents",details:"\n      This command will run a given sub-command on changed workspaces and workspaces depends on them.\n\n      Check the documentation for `yarn workspace foreach` for more details.\n    ",examples:[["Run build scripts on changed workspaces","yarn changed foreach run build"],["Find changed files within a Git range","yarn changed foreach --git-range 93a9ed8..4ef2c61 run build"]]}),p([n.Command.String()],u.prototype,"commandName",void 0),p([n.Command.Proxy()],u.prototype,"args",void 0),p([n.Command.Boolean("-v,--verbose")],u.prototype,"verbose",void 0),p([n.Command.Boolean("-p,--parallel")],u.prototype,"parallel",void 0),p([n.Command.Boolean("-i,--interlaced")],u.prototype,"interlaced",void 0),p([n.Command.Boolean("-t,--topological")],u.prototype,"topological",void 0),p([n.Command.String("-j,--jobs")],u.prototype,"jobs",void 0),p([n.Command.Path("changed","foreach")],u.prototype,"execute",null);const f={commands:[l,u]};plugin=t})();
return plugin;
}
};