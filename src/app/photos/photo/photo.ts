export interface Photo {
    id: number;
    postDate: Date;
    url: string;
    description: string;
    allowComments: boolean;
    likes: boolean;
    comments: string;      
    userId: number;
}