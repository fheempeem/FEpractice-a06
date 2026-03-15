'use client'
import { useReducer } from "react";
import Card from "./Card";


export default function CardPanel() {
    const ratingReducer = (state:Map<string,number>, action:{type:string, venueName:string, rating:number}) => {
        switch(action.type) {
            case 'add': {
                return new Map(state.set(action.venueName, action.rating));
            }
            case 'remove': {
                state.delete(action.venueName );
                return new Map(state);
            }
            default: return state;
        }
    }
    const initialState = new Map([
        ['The Bloom Pavilion', 0],
        ['Spark Space', 0],
        ['The Grand Table', 0]
    ]);

    const [ratingList, dispatchRating] = useReducer(ratingReducer, initialState);

    return (
        <div>
            <div style={{
                margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap",
                justifyContent: "space-around", alignContent: "space-around"
            }}>
                <Card 
                    venueName='The Bloom Pavilion' 
                    imgSrc="/img/bloom.jpg"
                    value={ratingList.get('The Bloom Pavilion') || 0}
                    onCompare={(venue: string, value: number) => dispatchRating({ type: 'add', venueName: venue, rating: value })} 
                />
                <Card 
                    venueName='Spark Space' 
                    imgSrc="/img/sparkspace.jpg"
                    value={ratingList.get('Spark Space') || 0}
                    onCompare={(venue: string, value: number) => dispatchRating({ type: 'add', venueName: venue, rating: value })} 
                />
                <Card 
                    venueName='The Grand Table' 
                    imgSrc="/img/grandtable.jpg"
                    value={ratingList.get('The Grand Table') || 0}
                    onCompare={(venue: string, value: number) => dispatchRating({ type: 'add', venueName: venue, rating: value })} 
                />
            </div>
            
            <div className="m-5">
                <div className="text-xl font-medium">Venue List with Ratings: {ratingList.size}</div>
                {Array.from(ratingList).map(([name, rating]) => (
                    <div 
                        key={name} 
                        data-testid={name}
                        onClick={() => dispatchRating({ type: 'remove', venueName: name, rating: rating })}
                        className="cursor-pointer"
                    >
                        {name} : {rating}
                    </div>
                ))}
            </div>
        </div>
    );
}