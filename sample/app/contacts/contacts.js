angular.module('uiRouterSample.contacts', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
        //////////////
        // 联系 //
        //////////////
        .state('contacts', {
//抽象设置为true，这意味着这种状态不能明确激活。
          //它只能被隐式激活它的一个子激活。
          abstract: true,

//这种抽象的状态将加上'/contacts' 到它的所有儿童的网址。
         
          url: '/contacts',

       //从文件加载一个模板的例子。这也是一个顶级状态，
          //所以这个模板文件将被加载，然后插入到UI视图
          // index.html的范围内。
          templateUrl: 'app/contacts/contacts.html',

       //使用`resolve`解决任何异步控制器的依赖
          // *之前*控制器被实例化。在这种情况下，由于接触
          //返回一个承诺，控制器会等到contacts.all（）被
          //实例化之前解决。非承诺返回值被认为是
          //要立即解决。
          resolve: {
            contacts: ['contacts',
              function( contacts){
                return contacts.all();
              }]
          },
//您可以配对控制器到您的模板。有*必须*(*must*)是配对的模板。
        
          controller: ['$scope', '$state', 'contacts', 'utils',
            function (  $scope,   $state,   contacts,   utils) {

             //添加一个'接触'字段在这个抽象父的范围，使所有
              //子状态视图可以在其范围的访问。请注意：范围
              //继承不因状态的嵌套，而是选择到
              //窝这些状态的模板。这是正常范围内的继承。
              $scope.contacts = contacts;

              $scope.goToRandom = function () {
                var randId = utils.newRandomKey($scope.contacts, "id", $state.params.contactId);

                // $state.go() 可作为一个高层次的方便方法
                //通过编程激活状态。
                $state.go('contacts.detail', { contactId: randId });
              };
            }]
        })

        /////////////////////
        // Contacts > List //
        /////////////////////

        // 使用 '.'一个状态的名字中声明了父母中的一个孩子。
        //所以，你有一个新的状态 'list' 在父 'contacts' state.
        .state('contacts.list', {

     //使用一个空的URL意味着这个孩子的状态会变得活跃
          //当其母公司的网址导航到。孩子状态的网址是
          //自动添加到他们的父母的网址。所以这种状态下的
          // url is '/contacts' (because '/contacts' + '').
          url: '',

         //重要：现在我们不是一个顶级状态的状态。 它的
          //模板将被插入到内这种状态的用户界面视图
          //父母的模板;所以contacts.html中的用户界面视图。这是在
          //最重要的是要记住的模板。
          templateUrl: 'app/contacts/contacts.list.html'
        })

        ///////////////////////
        // Contacts > Detail //
        ///////////////////////

      //你可以有一个国中之无限的儿童。这是第二个孩子
        //“联系人”父国中之国。
        .state('contacts.detail', {

       // URL可以有参数。参数或{参数}：它们可以等来指定。
          //如果{}被使用，那么你也可以指定一个正则表达式的参数
           // 必须匹配。正则表达式是一个冒号（:)后写入。注意：不要使用捕捉
          //组在您正则表达式的模式，因为整个正则表达式再次包裹
          //幕后。我们的图案下面将只与一个长度相匹配号码
          //1和4之间。

          //由于这种状态也是一个孩子'contacts' 其URL被追加为好。
          // 因此，它的URL最终会被 '/contacts/{contactId:[0-9]{1,4}}'.当。。。的时候
          // 网址变成像 '/contacts/42'那么这个状态变得活跃
          //和 $stateParams 对象成为 { contactId: 42 }.
          url: '/{contactId:[0-9]{1,4}}',

        //如果有比父模板的单一用户界面视图越多，或者你会
          //喜欢从目标更高了状态树的UI视图，可以使用
          //视图对象来配置多个视图。每个视图可以得到它自己的模板，
          //控制器和决心的数据。

          // 视图名称可以是相对或绝对的。相对视图名称不使用 '@'
          //视图名称可以是相对或绝对的。相对视图名称做标志。他们总是把这种状态的父模板内的意见。
          //绝对视图名称使用'@'符号来区分视图和状态。不要使用
        //所以'foo@bar'是指'foo'状态的模板内命名为'bar'的用户界面视图。
          views: {

            // 所以，这一次瞄准的是父状态的模板内的未命名视图。
            '': {
              templateUrl: 'app/contacts/contacts.detail.html',
              controller: ['$scope', '$stateParams', 'utils',
                function (  $scope,   $stateParams,   utils) {
                  $scope.contact = utils.findById($scope.contacts, $stateParams.contactId);
                }]
            },

            // 这一次瞄准的是的用户界面视 ui-view="hint" 无名根中, 又名 index.html.
            //这说明了，你怎么能填充 *any* 视图中 *any* 祖传的状态。
            'hint@': {
              template: '这是contacts.detail填充"hint" ui-view'
            },

            //这一次瞄准的是 ui-view="menuTip" 父州的模板中。
            'menuTip': {
              //模板提供商是提供一个模板的最终方法。
              // 有，这就是模板，templateUrl和模板提供商。
              templateProvider: ['$stateParams',
                function (        $stateParams) {
                  // T他只是为了证明$stateParams注射工程模板提供商。
                  // $stateParams 是我们过渡到新的状态参数，甚至
                  // 虽然全球'$stateParams' 尚未更新。
                  return '<hr><small class="muted">联系 ID: ' + $stateParams.contactId + '</small>';
                }]
            }
          }
        })

        //////////////////////////////
        // Contacts > Detail > Item //
        //////////////////////////////

        .state('contacts.detail.item', {

          // 那么下面我们所了解到，这种状态下的完整URL最终会被
          // '/contacts/{contactId}/item/:itemId'. //我们使用两种类型的参数
          // 在相同的URL，但他们的行为相同。
          url: '/item/:itemId',
          views: {

            // 这是针对父状态中的未命名的用户界面视图'contact.detail'
            //我们就不会去做这样，如果我们不也想设置下面的 'hint' 视图。
            // 我们可以改为只设置templateUrl和控制器的看法obj的外面。
            '': {
              templateUrl: 'app/contacts/contacts.detail.item.html',
              controller: ['$scope', '$stateParams', '$state', 'utils',
                function (  $scope,   $stateParams,   $state,   utils) {
                  $scope.item = utils.findById($scope.contact.items, $stateParams.itemId);

                  $scope.edit = function () {
                    //在这里，我们炫耀狗的导航到一个相对的状态的能力。运用 '^' 去向上
                    //和 '.'往下走，您可以导航到任何相对状态（祖先或后代）。
                    //这里，我们要下到孩子的状态 'edit'(全名 'contacts.detail.item.edit')
                    $state.go('.edit', $stateParams);
                  };
                }]
            },

            // 在这里我们看到，我们覆盖的被设定的模板 'contacts.detail'
            'hint@': {
              template: ' This is contacts.detail.item overriding the "hint" ui-view'
            }
          }
        })

        /////////////////////////////////////
        // Contacts > Detail > Item > Edit //
        /////////////////////////////////////

       //注意这个状态没有“URL”。状态不要求的URL。您可以使用它们
        //简单地组织你的应用程序到“地方”，其中每个“地点”可配置
        //只是它所需要的。去这个状态的唯一方法是通过$state.go（或transitionTo）
        .state('contacts.detail.item.edit', {
          views: {

            // 这是针对内的无名视图'contacts.detail'状态
            //基本上是换出模板 'contacts.detail.item'有
            //插入这个状态的模板。
            '@contacts.detail': {
              templateUrl: 'app/contacts/contacts.detail.item.edit.html',
              controller: ['$scope', '$stateParams', '$state', 'utils',
                function (  $scope,   $stateParams,   $state,   utils) {
                  $scope.item = utils.findById($scope.contact.items, $stateParams.itemId);
                  $scope.done = function () {
                    // Go back up. '^' means up one. '^.^' would be up twice, to the grandparent.
                    $state.go('^', $stateParams);
                  };
                }]
            }
          }
        });
    }
  ]
);
