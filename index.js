"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var Listr = require('listr');
var TaskList = new Listr([
    {
        title: 'Meme Engine',
        task: function () { return new Observable_1.Observable(function (observer) {
            observer.next('Instantiating');
            setTimeout(function () { return observer.next('Updating'); }, 1000);
            setTimeout(function () { return observer.next('Warming Up'); }, 2500);
            setTimeout(function () { return observer.complete(); }, 5000);
        }); }
    },
    {
        title: 'Code Engine',
        task: function () { return new Observable_1.Observable(function (observer) {
            observer.next('Instantiating');
            setTimeout(function () { return observer.next('Collecting bugs from nearby woods'); }, 1000);
            setTimeout(function () { return observer.next('Growing neck beard'); }, 3500);
            setTimeout(function () { return observer.next('Contacting local caffeine supplier'); }, 5500);
            setTimeout(function () { return observer.next('Removing any visible time references'); }, 7000);
            setTimeout(function () { return observer.next('Preparing additional emergency keyboards'); }, 8500);
            setTimeout(function () { return observer.complete(); }, 10000);
        }); }
    },
    {
        title: 'Boost Engine',
        task: function () { return new Observable_1.Observable(function (observable) {
            observable.next('Initiating boost mode');
            setTimeout(function () { return observable.next('Attempting Mitsu Recovery Algorithm'); }, 7000);
            setTimeout(function () { return observable.error(new Error('Critical Overboost')); }, 10000);
        }); }
    }
]);
TaskList.run().catch(function () { });
