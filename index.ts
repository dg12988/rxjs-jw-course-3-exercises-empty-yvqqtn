import { Observable } from 'rxjs';
import { Observable } from 'rxjs';

const observable$ = new Observable(subscriber => {
  console.log('Observable executed');

});

console.log('Before Subscribe');
observable$.subscribe();
console.log('After subscribe');
