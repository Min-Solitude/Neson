import { StaticImageData } from 'next/image';
import img01 from './img01.jpg';

type ImagesType = {
    [key: string]: StaticImageData | string;
};

export const Images: ImagesType = {
    img01: img01,
};
