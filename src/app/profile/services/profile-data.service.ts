import { Injectable } from '@angular/core';
import { Profile } from '../models';

const storageKey = 'profile-data';

const delay = 500;

@Injectable({
  providedIn: 'root',
})
export class ProfileDataService {
  async get(): Promise<Profile | null> {
    return new Promise((resolve) =>
      setTimeout(() => {
        const jsonText = localStorage.getItem(storageKey);

        resolve(JSON.parse(jsonText ?? 'null'));
      }, delay),
    );
  }

  async set(profile: Profile): Promise<void> {
    return new Promise((resolve) =>
      setTimeout(() => {
        const jsonText = JSON.stringify(profile);

        localStorage.setItem(storageKey, jsonText);
        resolve();
      }, delay),
    );
  }
}
