export interface Assets {
    cover: string;
    brick: string;
    thumb: string;
    wall: string;
    square: string;
    screens: string[];
    coverTiny: string;
    brickTiny: string;
}

export interface Categories {
    en: string[];
}

export interface Description {
    en: string;
}

export interface GameCardProps {
    code?: string;
    url?: string;
    name: Description;
    isPortrait?: boolean;
    description?: Description;
    gamePreviews?: Description;
    assets: Assets;
    categories?: Categories;
    tags?: Categories;
    width?: number;
    height?: number;
    colorMuted?: string;
    colorVibrant?: string;
    privateAllowed?: boolean;
    rating?: number;
    numberOfRatings?: number;
    gamePlays?: number;
    hasIntegratedAds?: boolean;
}


