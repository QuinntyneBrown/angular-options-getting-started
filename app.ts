/// <reference path="typings/angularjs/angular.d.ts" />

var app = angular.module("app", []);


class EditorController {

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

    viewContainerComponent: ViewContainerComponent;
}

class ViewContainerComponent {
    id: number;
    name: string;
}

app.controller("editorController", [EditorController]);