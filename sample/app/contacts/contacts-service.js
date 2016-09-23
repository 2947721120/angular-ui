angular.module('uiRouterSample.contacts.service', [

])

//一个RESTful工厂从检索联系人 'contacts.json'
.factory('contacts', ['$http', 'utils', function ($http, utils) {
  var path = 'assets/contacts.json';
  var contacts = $http.get(path).then(function (resp) {
    return resp.data.contacts;
  });

  var factory = {};
  factory.all = function () {
    return contacts;
  };
  factory.get = function (id) {
    return contacts.then(function(){
      return utils.findById(contacts, id);
    })
  };
  return factory;
}]);
