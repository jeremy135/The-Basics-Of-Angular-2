import { Injectable }     from '@angular/core';
import { Http }    from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class RedditService {
  constructor(private http: Http) {}

  private url = 'api/articles';

  getArticles(): Promise<any> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.errorHandler);
  }

  createArticle(): Promise<any> {
    return this.http.post(this.url)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.errorHandler);
  }

  private errorHandler(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
