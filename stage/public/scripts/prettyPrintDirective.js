(function (angular, prettyPrint) {
    'use strict';
    
    // 使用avalon.ui模块， controller，directive都注册到这里，注意避免命名重复
    angular.module('avalon.ui').directive("prettyPrintDirective", [
        function () {
            return {
                restrict: 'C',
                replace: false,
                compile: function (el, attr) {
                    return {
                        pre: function preLink(scope, element, attributes) {
                            
                        },
                        post: function postLink(scope, element, attributes) {
                            prettyPrint(element[0]);
                        }
                    };
                }
            };

        }]);

})(window.angular, window.prettyPrint);