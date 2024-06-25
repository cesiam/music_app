export default function Card({track, artist, album, year, image_url}){
    return(
        <div className="songCard">
            <div className="card-header"><h2>{track}</h2></div>
            <img src= {image_url} className="card-image"/>
            <div className="card-info"><h3>{artist}</h3></div>
        </div>
    )
}




    

