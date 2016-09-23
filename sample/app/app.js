//确保包括了`ui.router`模块作为一个依赖
angular.module('uiRouterSample', [
  'uiRouterSample.contacts',
  'uiRouterSample.contacts.service',
  'uiRouterSample.utils.service',
  'ui.router', 
  'ngAnimate'
])

.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

   //这是非常方便的，以$状态和引用$ stateParams添加到$ rootScope
    //这样就可以从任何范围的应用程序。对于例如在访问它们，
    // <li ng-class="{ active: $state.includes('contacts.list') }"> 将设置 <li>
    // 为主动时 'contacts.list' 或者它的后代之一，是积极的.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }
  ]
)

.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      /////////////////////////////
      // 重定向和否则 //
      /////////////////////////////

      // Use $urlRouterProvider配置任何重定向（时）和无效网址（否则）。
      $urlRouterProvider

        // The `when` 法说，如果网址是有史以来第一个参数，然后重定向到第二个参数
        //这里我们只是设置一些方便的网址。
        .when('/c?id', '/contacts/:id')
        .when('/user/:id', '/contacts/:id')

        // 如果网址是有史以来无效，例如. '/asdf', 然后重定向到 '/' 又名首页状态
        .otherwise('/');


      //////////////////////////
      //状态配置 //
      //////////////////////////

      //使用 $stateProvider配置您的状态。
      $stateProvider

        //////////
        //首页 //
        //////////

        .state("home", {

          // 使用的网址 "/" 设置状态的 "index".
          url: "/",

          //内联模板字符串的例子。缺省情况下，模板
          //将填充父状态的模板中的用户界面视图。
          //对于顶级状态，像这样的，父模板
          // index.html文件。所以该模板将被插入到
         //用户界面 内视图 index.html.
          template: '<p class="lead">欢迎来到UI的路由器演示</p>' +
            '<p>使用上面的菜单导航. ' +
            '注意 <code>$state</code> and <code>$stateParams</code>下面值.</p>' +
            '<p>点击这些链接—<a href="#/c?id=1">爱丽丝</a> 或 ' +
            '<a href="#/user/42">Bob</a>—看到一个网址在行动重定向.</p>'

        })

        ///////////
        // 关于 //
        ///////////

        .state('about', {
          url: '/about',

          //炫耀你怎么可以从模板提供商返回一个承诺
          templateProvider: ['$timeout',
            function (        $timeout) {
              return $timeout(function () {
                return '<p class="lead">UI-router资源</p><ul>' +
                         '<li><a href="https://github.com/angular-ui/ui-router/tree/master/sample">源出于此示例</a></li>' +
                         '<li><a href="https://github.com/angular-ui/ui-router">GitHub的主页</a></li>' +
                         '<li><a href="https://github.com/angular-ui/ui-router#quick-start">快速开始</a></li>' +
                         '<li><a href="https://github.com/angular-ui/ui-router/wiki">深入指南</a></li>' +
                         '<li><a href="https://github.com/angular-ui/ui-router/wiki/Quick-Reference">API参考</a></li>' +
                       '</ul>';
              }, 100);
            }]
        })
    }
  ]
);
