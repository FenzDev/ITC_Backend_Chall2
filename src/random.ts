import { randomInt } from 'crypto';
import { RandomGenParams } from './types/password.types';

export function generateRandom(params: RandomGenParams) {
  if (params.length <= 0) {
    throw new Error('Text must be atleast one character long');
  }

  const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const symbols = '!@#$%^&*_-+';

  const allowed = [] as string[];

  if (params.include_lowercase) {
    allowed.push(lowercaseAlphabet);
  }
  if (params.include_uppercase) {
    allowed.push(uppercaseAlphabet);
  }
  if (params.include_numbers) {
    allowed.push(digits);
  }
  if (params.include_symbols) {
    allowed.push(symbols);
  }

  if (allowed.length === 0) return '';

  const characters = allowed.join('')

  return Array.from(
    { length: params.length },
    () => characters[randomInt(characters.length)],
  ).join('');
}
