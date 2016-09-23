angular.module('uiRouterSample.utils.service', [

])

.factory('utils', function () {
  return {
    // UTIL由其'ID'属性的数组中找到一个对象
    findById: function findById(a, id) {
      for (var i = 0; i < a.length; i++) {
        if (a[i].id == id) return a[i];
      }
      return null;
    },

    //util的用于返回从集合也不是当前密钥的随机密钥
    newRandomKey: function newRandomKey(coll, key, currentKey){
      var randKey;
      do {
        randKey = coll[Math.floor(coll.length * Math.random())][key];
      } while (randKey == currentKey);
      return randKey;
    }
  };
});
