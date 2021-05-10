import { getDB } from '../../db.js';

export default async (_, res) => {
  const db = await getDB()
  await db.task(async t => {
    await t.none('DROP TABLE IF EXISTS reference');
    await t.none('DROP TABLE IF EXISTS replicache_client');
    await t.none('DROP SEQUENCE IF EXISTS version');
    // Stores trunk references
    await t.none(`CREATE TABLE reference (
      id VARCHAR(20) PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      parent TEXT NOT NULL,
      date TEXT NOT NULL,
      description TEXT NOT NULL,
      version BIGINT NOT NULL)`)
    // Stores last mutation ID for each Replicache client
    await t.none(`CREATE TABLE replicache_client (
      id VARCHAR(36) PRIMARY KEY NOT NULL,
      last_mutation_id BIGINT NOT NULL)`);
    // Will be used for computing diffs for pull response
    await t.none('CREATE SEQUENCE version')
  })
  res.send('ok')
}