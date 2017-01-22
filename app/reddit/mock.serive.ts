import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryService implements InMemoryDbService {
  createDb() {
    let articles = [
      { id: '1', link: 'http://yandex.ru', title: 'Yandex' }
    ];

    return { articles };
  }
}
