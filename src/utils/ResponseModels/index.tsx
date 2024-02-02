export interface IItems {
    name: string;
    resourceURI: string;
    type?: string;
}

export interface IInfoObject {
    available: number;
    collectionURI: string;
    returned: number;
    items: IItems[];
}

export interface IThumbnail {
    extension: string;
    path: string;
}

export interface IUrls {
    type: string;
    url: string;
}

export interface ICharactersResponse {
    comics: IInfoObject;
    description: string;
    id: number;
    name: string;
    modified: string;
    resourceURI: string;
    series: IInfoObject;
    stories: IInfoObject;
    thumbnail: IThumbnail;
    urls: IUrls;
}