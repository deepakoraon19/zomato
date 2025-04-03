import * as CryptoJS from 'crypto-js';

export function computeSha256Hash(input: string): string {
  return CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);
}

