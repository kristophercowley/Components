(function () {
    function MeController() {
        var mc = this;
        mc.test = { name: "Testing" };
        mc.$onInit = function () {
        }
        mc.getData = function () {
            $('#butt').text('FGHJKL');
            setTimeout(function () {
                $('#butt').text('Get Data');
            }, 1000)
        }
    }

    angular.module('my-app', [])
        .controller('MainController', function () {
            var mc = this;
            mc.me = { name: "Kris" }
            mc.you = { name: "Yous" }
            mc.num = { name: 999 }
            mc.h1 = { title: "Component 1" }

        })
        .component('myComponent', {
            templateUrl: 'myComponent.html',
            controller: MeController,
            bindings: {
                me: '=',
                you: '<',
                num: '=',
                test: '&',
                h1: '='
            },
            controllerAs: 'vm'

        })
        .component('pending', {
            controller: function () {

            }
        })
})();