"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
    }
    return HeroDetailComponent;
}());
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        template: "\n\t\t<div *ngIf=\"hero\">\n\t\t\t<h2>{{hero.name}} details!</h2>\n\t\t\t<div><label>id: </label>{{hero.id}}</div>\n\t\t\t<div>\n\t\t\t\t<label>name: </label>\n\t\t\t\t<input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n\t\t\t</div>\n\t\t</div>\n\t"
    })
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map