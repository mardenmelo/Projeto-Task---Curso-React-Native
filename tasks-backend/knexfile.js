// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: {
      database: 'tasksCoder',
      user:     'postgres',
      password: '6440560'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

