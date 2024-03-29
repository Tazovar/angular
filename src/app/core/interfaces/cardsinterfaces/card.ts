export interface Card{
    id:string ,
    title:string,
    price:number,
    description:string,
    category: string
    image:string
    rating:CardRating
}


export interface CardRating{
    rate:number,
    count:number
}