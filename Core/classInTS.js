console.log('---- Classes in TypeScript ----');
var youtubes = /** @class */ (function () {
    function youtubes() {
    }
    youtubes.prototype.getFirstname = function () {
        console.log('My firstname is ' + this.firstname);
    };
    youtubes.prototype.getLastname = function () {
    };
    return youtubes;
}());
var ytobj = new youtubes();
ytobj.firstname = 'Hiren';
ytobj.getFirstname();
