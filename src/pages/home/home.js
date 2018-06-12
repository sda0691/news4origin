var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { CallNumber } from '@ionic-native/call-number';
import { NativeAudio } from '@ionic-native/native-audio';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';
var HomePage = /** @class */ (function () {
    // items1: any[];
    function HomePage(navCtrl, callNumber, nativeAudio, peopleProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
        this.nativeAudio = nativeAudio;
        this.peopleProvider = peopleProvider;
        this.onSuccessPreloading = function (data) {
            console.log('success preloading', data);
            _this.nativeAudio.play('track1').then();
        };
        // nativeAudio.preloadComplex('track1', 'assets/audio/aaa.mp3', 1, 1, 0).then(this.onSuccessPreloading);
        this.getUsers();
        this.items = [];
        for (var i = 0; i < 10; i++) {
            this.items.push({
                text: 'Item ' + i,
                id: i
            });
        }
        this.lists = [];
        this.lists.push({ Name: 'John Park', ID: 'cart', Audio: 'aaa.mp3' }, { Name: 'Mi Young', ID: 'medical' }, { Name: 'JiWon Park', ID: 'cafe' }, { Name: 'Eunwon Park', ID: 'paw' });
    }
    HomePage.prototype.itemSelected = function (item) {
        this.navCtrl.push(DetailPage, {
            item: item
        });
    };
    HomePage.prototype.listSelected = function (list) {
        this.navCtrl.push(DetailPage, { list: list });
    };
    HomePage.prototype.launchCall = function () {
        this.callNumber.callNumber('16478650608', true)
            .then(function () { return console.log('launched call'); })
            .catch(function () { return console.log('error'); });
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.nativeAudio.unload('track1');
    };
    HomePage.prototype.getUsers = function () {
        var _this = this;
        this.peopleProvider.load()
            .then(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, CallNumber, NativeAudio, PeopleServiceProvider])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map