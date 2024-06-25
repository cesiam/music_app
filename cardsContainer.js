import React from "react"; // If you're using React 17 or newer, importing React is not necessary
import Card from "./card";

export default function CardsContainer({ songs }) {
    return (
        <div className="cardsContainer">
            {songs.map((element) => (
                <Card key={element.id} track = {element.track} artist ={element.artist} album ={element.album} year ={element.year} image_url ={element.image_url} />
            ))}
        </div>
    );
}
