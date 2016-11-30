import Product from './Product';

export interface ProductJSON {
    id: string;
    picture: string;
    title: string;
    price: number;
}

export {
    Product as default
}