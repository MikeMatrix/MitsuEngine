import { Observable } from "rxjs/Observable";
const Listr = require('listr');

const TaskList = new Listr([
    {
        title: 'Meme Engine',
        task: () => new Observable(observer => {
          observer.next('Instantiating');
          setTimeout(() => observer.next('Updating'), 1000);
          setTimeout(() => observer.next('Warming Up'), 2500);
          setTimeout(() => observer.complete(), 5000);
        })
    },
    {
        title: 'Code Engine',
        task: () => new Observable(observer => {
            observer.next('Instantiating');
            setTimeout(() => observer.next('Collecting bugs from nearby woods'), 1000);
            setTimeout(() => observer.next('Growing neck beard'), 3500);
            setTimeout(() => observer.next('Contacting local caffeine supplier'), 5500);
            setTimeout(() => observer.next('Removing any visible time references'), 7000);
            setTimeout(() => observer.next('Preparing additional emergency keyboards'), 8500);
            setTimeout(() => observer.complete(), 10000);
        })
    },
    {
        title: 'Boost Engine',
        task: () => new Observable(observable => {
            observable.next('Initiating boost mode');
            setTimeout(() => observable.next('Attempting Mitsu Recovery Algorithm'), 7000);
            setTimeout(() => observable.error(new Error('Critical Overboost')), 10000);
        })
    }
]);

TaskList.run().catch(() => {});