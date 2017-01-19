import { Component } from '@angular/core';

@Component({
  selector: 'reddit',
  styleUrls: ['./app/reddit/reddit.css'],
  template: `
    <form class="ui large form segment">
      <h3 class="ui header">Добавить еще одну ссылку</h3>
      
      <div class="field">
        <label for="title">Заголовок:</label>
        <input type="text" name="title" #newtitle/>
      </div>

      <div class="field">
        <label for="link">Ссылка:</label>
        <input type="text" name="link" #newlink>
      </div>

      <button class="ui positive right floated button" (click)="addArticle(newtitle, newlink)">
        Отправить
      </button>
    </form>
  `
})

export class RedditAppComponent {
  addArticle(newtitle: HTMLInputElement, newlink: HTMLInputElement) {
    
  }
}
