import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  // Base URL
  private readonly API_URL = 'http://localhost:8081/api';

  // Auth Endpoints
  readonly API_SIGNUP = `${this.API_URL}/auth/signup`;
  readonly API_LOGIN = `${this.API_URL}/auth/login`;
  readonly API_LOGOUT = `${this.API_URL}/auth/logout`;
  readonly API_POST_FORGOT_PASSWORD = `${this.API_URL}/auth/forgot-password`;
  readonly API_PUT_RESET_PASSWORD = `${this.API_URL}/auth/reset-password`;
  readonly API_PROFILE_DATA = `${this.API_URL}/profile`;

  // Categories
  readonly API_GET_ALL_CATEGORIES = `${this.API_URL}/categories`;

  // Shelters
  readonly API_GET_ALL_SHELTERS = `${this.API_URL}/shelters`;

  // Pets
  readonly API_GET_ALL_PETS = `${this.API_URL}/pets`;
  readonly API_POST_NEW_PET = `${this.API_URL}/pets`;

  // Adopters
  readonly API_GET_ALL_ADOPTERS = `${this.API_URL}/adopters`;

  // Adoption Requests
  readonly API_GET_ADOPTION_REQUESTS = `${this.API_URL}/adoption-requests/`;
  readonly API_POST_NEW_ADOPTION_REQUESTS = `${this.API_URL}/adoption-requests/`;
  readonly API_GET_ALL_ADOPTREQ = `${this.API_URL}/adoption-requests/`;

  // Admin Endpoints
  readonly API_POST_NEW_SHELTER = `${this.API_URL}/shelters`;

  constructor() { }
}

export {
  API_LOGIN,
  API_SIGNUP,
  API_POST_FORGOT_PASSWORD,
  API_PUT_RESET_PASSWORD,
  API_PROFILE_DATA,
  API_GET_ADOPTION_REQUESTS,
  API_CREATE_ADOPTION_REQUEST,
  API_GET_ALL_PETS
}
