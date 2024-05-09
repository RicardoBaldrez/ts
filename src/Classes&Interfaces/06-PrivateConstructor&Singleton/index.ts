// Singleton = para criar somente uma instância de uma determinada classe

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const database01 = Database.getDatabase('localhost', 'root', '123456');
database01.connect();

const database02 = Database.getDatabase('localhost', 'root', '123456');
database02.connect();
