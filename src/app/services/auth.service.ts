import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUser = new BehaviorSubject<string | null>(null);

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    if (email === 'admin@example.com' && password === 'password') {
      this.loggedInUser.next(email);
      this.router.navigate(['/admin']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedInUser.next(null);
    this.router.navigate(['/login']);
  }
  
  getLoggedInUser(): Observable<string | null> {
    return this.loggedInUser.asObservable(); 
  }
  
  isLoggedIn(): boolean {
    return !!this.loggedInUser.value;
  }
}
