using { task } from '../db/schema';

service ms {
    @odata.draft.enabled
    entity tab as projection on task.tab;
}
