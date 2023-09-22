import { MediaType } from "./StrapiGlobal";

export type Paket = {
    id: number;
    attributes: {
        title: string;
        price: number;
        isPopuler: string;
        eventDate: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        features: string
        image: MediaType;
    };
};
