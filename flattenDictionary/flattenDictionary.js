function flattenDictionary(dict, parentKey = '', target = {}) {
  var newKey;
  // console.log('target ', target);
  if (!dict || (Object.keys(dict).length === 0 && dict.constructor === Object)) {
    return;
  }
  for (var key in dict) {
    newKey = key;
    if (parentKey.length > 0) {
      newKey = parentKey + '.' + key;
      if (key === '') {
        newKey = parentKey;
      }
    }
    if (typeof dict[key] === "string" || typeof dict[key] === "integer") {
      target[newKey] = dict[key];
    }
    else if (typeof dict[key] === "object") {
      flattenDictionary(dict[key], newKey, target)
    }
  }
  return target; 
}
  
var dict = dict = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
            }
        };
var result = flattenDictionary(dict);
console.log(result);