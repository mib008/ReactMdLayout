(function (angular, prettyPrint) {
    'use strict';
    
    var mainModule = angular.module("app");
    
    mainModule.controller('contentCtrl', [
        '$scope', '$http', '$q', '$sce', '$compile', '$css', '$templateCache', 'appConfig', 'commonService', 
        function ($scope, $http, $q, $sce, $compile, $css, $templateCache, appConfig, commonService) {
            
            var isCssMinCache = false;
            
            /// Private functions 
            function setMenuClass(item) {
                if (!item) return item;
                
                if (item.type === "divider") {
                    item.class = "divider";
                    return item;
                }
                
                if (item.disabled && item.disabled === "true") {
                    item.class = "disabled";
                    return item;
                }
                
                if (item.members && item.members.length > 0) {
                    item.memberClass = "dropdown-toggle";
                    
                    item.members.forEach(function (item1, index1) {
                        setMenuClass(item1);
                        
                        if (item1.description) item1.description = $sce.trustAsHtml(item1.description);
                    });
                }
                
                return item;
            };
            
            function setMenuTag(item, parentTag) {
                if (!item) return item;
                
                item.tag = parentTag ? parentTag + "." + item.id : item.id;
                
                if (item.members && item.members.length > 0) {
                    item.members.forEach(function (item1, index1) {
                        setMenuTag(item1, item.tag);
                    });
                }
                
                return item;
            };
            
            function loadMainMenu(data) {
                if (!data || !(data instanceof Array)) return;
                
                data.forEach(function (item, index) {
                    setMenuClass(item);
                    setMenuTag(item, data.id);
                    
                    if (item.description) item.description = $sce.trustAsHtml(item.description);
                });
                
                $scope.mainMenu = data;
            };
            
            function loadConfig(data) {
                if (!data) return;
                
                if (data.mainMenu) loadMainMenu(data.mainMenu);

            };
            
            function getComponents(data) {
                $http.post(appConfig.post_getComponents, data).then(function (res) {
                    if (!res || !res.data || !res.data.result || !(res.data.result instanceof Array)) {
                        console.error("contentCtrl: getComponents null. " + JSON.stringify(res));
                        return;
                    }
                    
                    // ReSharper disable UndeclaredGlobalVariableUsing
                    var historySet = new Set();
                    // ReSharper restore UndeclaredGlobalVariableUsing
                    
                    res.data.result.forEach(function (item, index) {
                        if (item.description) item.description = $sce.trustAsHtml(item.description);
                        
                        if (!item || !item.history || !(item.history instanceof Array)) return;
                        
                        item.history.forEach(function (item1, index1) {
                            historySet.add(item1.version);
                            
                            if (item1.description) item1.description = $sce.trustAsHtml(item1.description);
                            
                            item1.loadedSample = $sce.trustAsHtml(item1.loadedSample);
                            
                            if (item.isNeedCompile) {
                                // item1.loadedCode = eval(item1.loadedCode);
                                
                                // $controllerProvider.register(item.class + "Ctrl", item1.loadedCode);
                                
                                if (item1.dependciesJsContents && item1.dependciesJsContents.length > 0 && item1.dependciesJsContents instanceof Array) {
                                    item1.dependciesJsContents.forEach(function (item, index) {
                                        try {
                                            item = item.replace(/angular.module\(['|"]avalon\.ui['|"]\)/g, 'window.componentModule');
                                            //item = item.replace(/angular.module\("avalon\.ui"\)/g, 'window.componentModule');
                                            
                                            eval(item);
                                        } catch (e) {
                                            console.error("Load js file error: " + item1.dependciesJsContents[index]);
                                        }
                                    });
                                }
                            }
                            
                            if (item1.templateMap) {
                                item1.templateMap.forEach(function (item2, index2) {
                                    // $templateCache.put(item2.key, $sce.trustAsHtml(item2.value));
                                    $templateCache.put(item2.key, item2.value);
                                });
                            }
                        });
                        
                        item.displayOrder = +item.displayOrder;
                    });
                    
                    $scope.componentList = res.data.result;
                    
                    $scope.historyMenu = Array.from(historySet).sort(function (e1, e2) { return (+e2) - (+e1); }).map(function (e) {
                        return {
                            displayName: e + "",
                            version: e,
                            css: "../release_styles/" + e + "/src/avalon-ui.css",
                            iconCss: "../release_styles/" + e + "/dist/avalon-ui-icon.css",
                            pkg: "../release_styles/avalon-ui." + e + ".zip"
                        };
                    });
                    
                    $scope.vm.selectedVersion = $scope.historyMenu[0];
                    
                    if ($scope.onChangeCssVersion) $scope.onChangeCssVersion();
                    
                    refreshView();
                }, function (res) {
                    console.error("contentCtrl: getComponents error. " + JSON.stringify(res));
                });
            };
            
            function refreshView() {
                
                commonService.safeApply($scope, function () {
                    setTimeout(function () {
                        prettyPrint();
                        
                        var elem = angular.element(".need-comple-html > *");
                        
                        $compile(elem)($scope);
                    }, 100);
                });
            };
            
            /// Exported to $scope functions 
            $scope.onChangeCssVersion = function () {
                if (!$scope.vm || !$scope.vm.selectedVersion) return;
                
                $css.removeAll();
                
                $css.bind([
                    { href: $scope.vm.selectedVersion.css },
                    { href: $scope.vm.selectedVersion.iconCss }
                ], $scope);
            };
            
            $scope.onClickMainMenuItem = function (item) {
                if (item.disabled === "true" || item.type === "divider" || !item.tag || item.tag.indexOf("undefined") >= 0) return;
                
                if (item.members && item.members.length > 0) return;
                
                $scope.selectedMenuItem = item;
                
                getComponents({ 'class': item.tag });
            };
            
            $scope.onClickApplyCss = function () {
                $http.post(appConfig.post_applyCss, { version: $scope.vm.selectedVersion.version }).then(function (res) {
                    $css.removeAll();
                    
                    console.log("Css loaded on applyCss: " + $scope.vm.selectedVersion.css + Date());
                    
                    $css.bind([
                        { href: isCssMinCache ? $scope.vm.selectedVersion.css : $scope.vm.selectedVersion.css.replace(".css", ".min.css") }, 
                        { href: isCssMinCache ? $scope.vm.selectedVersion.iconCss : $scope.vm.selectedVersion.iconCss.replace(".css", ".min.css") }
                    ], $scope);
                    
                    isCssMinCache = !isCssMinCache;
                    
                }, function (res) {
                    console.error("Error on applyCss: " + JSON.stringify(res));
                });
            };
            
            $scope.onClickDownloadCss = function () {
                window.open($scope.vm.selectedVersion.pkg);
            };
            
            $scope.getHistoryByVersion = function (component, version) {
                if (!component.history || component.history.length < 1 || !(component.history instanceof Array)) return $scope.selectedVersion;
                
                var target = component.history.findItem(function (e) { return e.version === version; });
                
                if (target.loadedCode instanceof Array && target.loadedCode.length > 0) {
                    component.hasMutiCodeFile = true;
                }
                
                return target;
            };
            
            var initView = function () {
                
                $scope.vm = {};
                
                $scope.dialogVm = {};
                
                $http.get(appConfig.get_menuConfig).then(function (res) {
                    loadConfig(res.data);
                }, function (res) {
                    if (res && res.message) {
                        console.error("Load config.json failed. \r\n" + res.message);
                    }
                });
            }();

        }]);

})(angular, prettyPrint);