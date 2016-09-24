export class InMemoryStoreService {

  createDb() {
    let users = [
      {
        'id': 1,
        'username': 'joker1',
        'firstName': 'joker',
        'lastName': 'unknown'
      },
      {
        'id': 2,
        'username': 'harley1',
        'firstName': 'harley',
        'lastName': 'quinn'
      },
      {
        'id': 3,
        'username': 'ilovetacos',
        'firstName': 'deadpool',
        'lastName': 'wilson'
      }
    ];
    return {users};
  }
}
