/**
 * Created by Melody on 5/17/2015.
 */
angular.module('typewriterApp', ['ngMaterial'])

    .controller('AutoCtrl', function($scope, $mdToast) {
        var ctrl = this;
        ctrl.simulateQuery = false;
        ctrl.isDisabled = false;
        ctrl.all = ["red", "orange", "yellow", "green", "blue", "purple"];
        ctrl.current = [];
        ctrl.querySearch = querySearch;
        ctrl.selectedItemChange = selectedItemChange;
        ctrl.searchTextChange = searchTextChange;
        ctrl.recent = [];
        ctrl.currentRule = [];

        function querySearch (query) {
            if (query.length == 0) {
                ctrl.current = ctrl.all;
                //console.log("1" + 'Query: ' + query + 'Current: ' + ctrl.current );
            }
            else {
                ctrl.current = [];
                angular.forEach(ctrl.all, function (match) {
                    if (query == match.substr(0, query.length)) {
                        ctrl.current.push(match);
                        //console.log("Match: " + match);
                    }
                });
                //console.log("2" + 'Query: ' + query + 'Current: ' + ctrl.current);

            }
        };

        function searchTextChange(text){
           // console.log('Text changed to ' + text);
        }
        function selectedItemChange(item) {
            //  console.log('Item change to ' + item.stringify());


        }

        $scope.openToast = function($event){
            $mdToast.show($mdToast.simple()
                .content('Rule added!')
                .position("bottom right"));
        };

        ctrl.addRule = function(){
            $scope.openToast();
                ctrl.recent.reverse().push(ctrl.currentRule.slice());
                ctrl.recent.reverse();
                if (ctrl.recent.length > 3) {
                    ctrl.recent.reverse().shift();
                    ctrl.recent.reverse();
                }
            }


    });