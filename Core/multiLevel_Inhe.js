var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        return "Class One coming";
    };
    return class_one;
}());
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.fun_two = function () {
        return "Class Two coming";
    };
    return class_two;
}(class_one));
var class_three = /** @class */ (function (_super) {
    __extends(class_three, _super);
    function class_three() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_three.prototype.fun_three = function () {
        return "Class Three coming";
    };
    return class_three;
}(class_two));
var obj = new class_three();
document.write(obj.fun_one() + "<br>" + obj.fun_two() + "<br>" + obj.fun_three());
