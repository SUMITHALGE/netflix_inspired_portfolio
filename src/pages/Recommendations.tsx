import React from 'react';
import './Recommendations.css';
import albumCover1 from '../images/swades.jpg'; 
import albumCover2 from '../images/hridayamm.jpg'; 
import albumCover3 from '../images/karwaan.jpg'; 
import albumCover4 from '../images/ludo.jpg'; 
import albumCover5 from '../images/lunchbox.png'; 
import albumCover6 from '../images/hangover.jpg'; 

const favoriteGenres = ["Feel Good", "Must Watch", "Action", "Thriller", "Cant' Miss"];
const favoriteAlbums = [
  { title: "Swades ", artist: "Shahrukh Khaan", imgSrc: albumCover1 },
  { title: " Hridayam ", artist: "Pranav Mohanlal", imgSrc: albumCover2 },
  { title: "Karwaan ", artist: "Irrfan & DQ Salman", imgSrc: albumCover3 },
  { title: "The LunchBox ", artist: "Irrfan", imgSrc: albumCover5 },
  { title: " Ludo", artist: "Aditya RK & Pankaj Tripathi", imgSrc: albumCover4},
  { title: "The Hangover ", artist: "Brad Cooper& Zack", imgSrc: albumCover6}
];

const Recommendations: React.FC = () => {
  return (
    <div className="music-page">
      {/* <div className="quote">
        <p>“Rock and Roll isn’t a genre, it’s a way of life.” 🎸</p>
      </div> */}

      <div className="quote">
        <p>Babu Moshai, zindagi badi honi chahiye… lambi nahi ⭐<br>
        </br>
        Aanand - 1971</p>
      </div>

      <div className="genre-section">
        <h3>Sumit’s Cinematic Picks 🎥</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Watched. Loved. Recommended 🫀</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Recommendations;
