import {WorkerFactory} from "./WorkerFactory";

export class NoneWorkerFactory implements WorkerFactory<any> {

    get(): Promise<any> {
        return new Promise<any>(resolve => {
            resolve({});
        });
    }

    release(worker: any): Promise<void> {
        return;
    }

    shutdown() {
    }

}