export interface IUselessstuffResponse {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    image:       string;
    rating:      Rating;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface Rating {
    rate:  number;
    count: number;
}

// export interface IUselessstuffResponse {
//     id:          number;
//     title:       string;
//     price:       number;
//     description: string;
//     image:       string;
//     category:    Category;
//     createdAt:   Date;
//     updatedAt:   Date;
// }

// export enum Category {
//     Jewelry = "jewelry",
//     Shoes = "shoes",
//     Sports = "sports",
//     Technology = "technology",
// }