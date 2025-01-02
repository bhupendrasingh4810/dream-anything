import { Injectable } from '@nestjs/common';
import { Cache } from '@nestjs/cache-manager';

@Injectable()
export class SomeService {
    constructor(private cache: Cache) { }

    // Example method to set cache
    async setCache(key: string, value: any) {
        await this.cache.set(key, value, 3600);  // ttl is optional
    }

    // Example method to get cache
    async getCache(key: string) {
        return await this.cache.get(key);
    }
}