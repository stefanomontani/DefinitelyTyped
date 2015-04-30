// Type definitions for angular-promise-tracker.js 2.1.0
// Project: https://github.com/ajoslin/angular-promise-tracker
// Definitions by: Stefano Montani <https://github.com/stefanomontani>
// Definitions: https://github.com/stefanomontani/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />


declare module ajoslin.promiseTracker {

    /*
     * Constructor options.
     */
    interface TrackerOptions {

        /**
         * Number of milliseconds that an added promise needs to be pending before this tracker is active.
         */
        activationDelay?: number;

        /**
         * Minimum number of milliseconds that a tracker will stay active.
         */
        minDuration?: number;

    }

    /**
    * PromiseTrackerService 
    * see https://github.com/ajoslin/angular-promise-tracker
    */
    interface IPromiseTrackerService {
        /**
         * Returns whether this tracker is currently active.
         */
        active(): boolean;

        /**
         * Returns whether this tracker is currently tracking a request.
         */
        tracking(): boolean;

        /**
         * Add any arbitrary promise to tracker.
         * 
         * @param promise
         */
        addPromise(promise: ng.IPromise<any>): void;

        /**
         * Creates and returns a new deferred object tracked by this tracker.
         */
        createPromise(): ng.IPromise<any>;

        /**
         * Causes a tracker to immediately become inactive and stop tracking all current promises.
         */
        cancel(): void;

        /**
         * Empty constructor.
         */
        (): IPromiseTrackerService;

        /**
         * Constructor with options.
         */
        (options: TrackerOptions): IPromiseTrackerService;
    }

}
