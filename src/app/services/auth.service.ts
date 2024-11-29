import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false; // Хранит статус авторизации

  /**
   * Метод для входа в систему
   * @param username Имя пользователя
   * @param password Пароль
   * @returns boolean — успешный или неуспешный вход
   */
  login(username: string, password: string): boolean {
    // Пример проверки (можно заменить на запрос к серверу)
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true; // Устанавливаем статус как авторизованный
      return true;
    } else {
      return false; // Данные не совпадают
    }
  }

  /**
   * Метод для выхода из системы
   */
  logout(): void {
    this.isAuthenticated = false; // Сбрасываем статус авторизации
  }

  /**
   * Метод для проверки, авторизован ли пользователь
   * @returns boolean
   */
  isLoggedIn(): boolean {
    return this.isAuthenticated; // Возвращаем статус
  }
}
