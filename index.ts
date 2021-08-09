import { Observable } from 'rxjs';


const observable$ = new Observable(subscriber => {
  console.log('Observable executed');
  subscriber.next('Alice');
});

console.log('Before Subscribe');
observable$.subscribe(value => console.log(value));
console.log('After subscribe');
