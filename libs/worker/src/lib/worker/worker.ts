import { NestFactory } from '@nestjs/core';
import { parentPort } from 'worker_threads';
import { WorkerModule } from '../worker.module';
import { hello } from '@app/other';

async function run() {
  await NestFactory.createApplicationContext(WorkerModule);

  parentPort?.postMessage(`Hello from worker thread ${hello}`);
}

run();
