/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { HumanDuration } from '@backstage/types';

export interface Config {
  /** Configuration options for the scaffolder plugin */
  scaffolder?: {
    /**
     * The commit author info used when new components are created.
     */
    defaultAuthor?: {
      name?: string;
      email?: string;
    };
    /**
     * The commit message used when new components are created.
     */
    defaultCommitMessage?: string;

    /**
     * Sets the number of concurrent tasks that can be run at any given time on the TaskWorker.
     *
     * Defaults to 10.
     *
     * Set to 0 to disable task workers altogether.
     */
    concurrentTasksLimit?: number;

    /**
     * Sets the processing interval for staled tasks.
     *
     * Staled tasks are marked as failed, once task's timeout has exceeded.
     *
     * By default, the frequency is every 5 minutes.
     */
    taskTimeoutReaperFrequency: HumanDuration;

    /**
     * Sets the task's heartbeat timeout, when to consider a task to be staled.
     *
     * Once task is considered to be staled, the scheduler will shut it down on the next cycle.
     *
     * Default value is 24 hours.
     */
    taskTimeout?: HumanDuration;
  };
}
