export interface Repository<T> {
    get: () => Promise<T[]>;
    create: (obj: any) => Promise<T>;
}