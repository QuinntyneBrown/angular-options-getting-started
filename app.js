/// <reference path="typings/angularjs/angular.d.ts" />
var app = angular.module("app", []);
var RouteEditorController = (function () {
    function RouteEditorController() {
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
        this.entity = new Route();
    }
    return RouteEditorController;
}());
var Route = (function () {
    function Route() {
    }
    Object.defineProperty(Route.prototype, "viewContainerComponentId", {
        get: function () {
            return this.viewContainerComponent.id;
        },
        enumerable: true,
        configurable: true
    });
    return Route;
}());
var ViewContainerComponent = (function () {
    function ViewContainerComponent() {
    }
    return ViewContainerComponent;
}());
app.controller("routeEditorController", [RouteEditorController]);
