/// <reference path="typings/angularjs/angular.d.ts" />

var app = angular.module("app", []);

class RouteEditorController {

    title: string = "Angular Options Getting Started";

    viewContainerComponents: Array<ViewContainerComponent> = [
        {
            id:1,
            name: "Product View Container Component"
        },
        {
            id: 2,
            name: "Order Summary View Container Component"
        }
    ];
    
    entity: Route = new Route();

}

class Route {
    viewContainerComponent: ViewContainerComponent;
    get viewContainerComponentId(): number {
        return this.viewContainerComponent.id;
    }
}

class ViewContainerComponent {
    id: number;
    name: string;
}

app.controller("routeEditorController", [RouteEditorController]);