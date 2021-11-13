
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export default function Cast(cast){
    const {name,character,profile_path}=cast.value
    return(
        <div class="movieslides castslide">
            
            {profile_path?<img class='cast_img' alt={name} src={IMG_URL+profile_path}/>
            :''}
            <div class="movieslides__content">
                <button class="add_watchlist castname"> {character}</button>
                <a href="www.google.com "  class="trailer castcharacter">{name}</a>
            </div>
            
        </div>
    )
}