/// <reference path="typings/angularjs/angular.d.ts" />
var app = angular.module("app", []);
var EditorController = (function () {
    function EditorController() {
        this.title = "Angular Options Getting Started";
        this.viewContainerComponents = [
            {
                id: 1,
                name: "Product View Container Component"
            },
            {
                id: 2,
                name: "Order Summary View Container Component"
            }
        ];
    }
    return EditorController;
}());
var ViewContainerComponent = (function () {
    function ViewContainerComponent() {
    }
    return ViewContainerComponent;
}());
app.controller("editorController", [EditorController]);
