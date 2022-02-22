// import requestContext from 'request-context';
const requestContext = require('request-context');

import { Profile } from 'src/modules/users/entity/profile.entity';
import { User } from 'src/modules/users/entity/user.entity';

export class ContextProvider {
  private static readonly nameSpace = 'request';

  private static readonly authUserKey = 'user_key';

  private static readonly languageKey = 'language_key';

  private static readonly userProfileKey = 'profile_key';

  private static get<T>(key: string): T {
    return requestContext.get(ContextProvider.getKeyWithNamespace(key));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static set(key: string, value: any): void {
    requestContext.set(ContextProvider.getKeyWithNamespace(key), value);
  }

  private static getKeyWithNamespace(key: string): string {
    return `${ContextProvider.nameSpace}.${key}`;
  }

  static setAuthUser(user: User): void {
    ContextProvider.set(ContextProvider.authUserKey, user);
  }

  static setProfile(profile: Profile): void {
    ContextProvider.set(ContextProvider.userProfileKey, profile);
  }

  static setLanguage(language: string): void {
    ContextProvider.set(ContextProvider.languageKey, language);
  }

  static getLanguage(): string {
    return ContextProvider.get(ContextProvider.languageKey);
  }

  static getAuthUser(): User {
    return ContextProvider.get(ContextProvider.authUserKey);
  }

  static getProfile(): Profile {
    return ContextProvider.get(ContextProvider.userProfileKey);
  }
}
