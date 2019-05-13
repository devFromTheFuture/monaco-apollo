import { knex } from '@gqlapp/database-server-ts';

export default class Editor {
  public editors() {
    return knex.select();
  }
}
