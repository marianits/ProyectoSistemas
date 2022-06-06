import { Self } from 'src/app/Models/Utils/Self'

export interface RequestResponse<T> {
    _embedded: T;
    _links: Self;
}