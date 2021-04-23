function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=e(require("type-detect"));exports.intersperse=function(e,t){if(!Array.isArray(e))throw TypeError(`I can't work with ${r.default(e)}`);return e.reduce((e,r,n,u)=>[...e,r,...n+1===u.length?[]:[t]],[])};
//# sourceMappingURL=index.js.map
