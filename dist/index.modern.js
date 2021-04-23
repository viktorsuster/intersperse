import r from"type-detect";function t(t,e){if(!Array.isArray(t))throw TypeError(`I can't work with ${r(t)}`);return t.reduce((r,t,o,i)=>[...r,t,...o+1===i.length?[]:[e]],[])}export{t as intersperse};
//# sourceMappingURL=index.modern.js.map
