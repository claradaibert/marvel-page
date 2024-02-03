export interface IItems {
    name: string;
    resourceURI: string;
    type?: string;
    [key:string]: any;
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

export interface IResponse {
    id: number;
    characters?: IInfoObject;
    series?: IInfoObject;
    stories?: IInfoObject;
    thumbnail?: IThumbnail;
    comics?: IInfoObject;
    urls?: IUrls[];
    [key:string]: any;
}