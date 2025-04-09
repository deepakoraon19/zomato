import * as CryptoJS from 'crypto-js';

export function computeSha256Hash(input: string): string {
  return CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);
}

export function groupBy<T, K extends keyof any>(arr : T[], keyGetter : (item : T)=> K) : Map<K,T[]>{
  return arr.reduce((res, item)=>{
    const key = keyGetter(item);
    res.set(key, [...res.get(key) ?? [],item]);
    return res;
  }, new Map<K,T[]>())
}

