import React from 'react';
import './Music.css';
import albumCover1 from '../images/Hotelcalifornia.jpg'; // mudhal ni mudivum ni
import albumCover2 from '../images/ac-dc.jpg'; // Back in Black by AC/DC
import albumCover3 from '../images/guns-n-roses.webp'; // Appetite for Destruction by Guns N' Roses

const favoriteGenres = ["Year 1900", "Year 2000", "My Fav", "Indie-music", "Rap"];
const favoriteAlbums = [
  { title: "Mudhal Nee Mudivum Nee", artist: "Sid Sriram", imgSrc: albumCover1 },
  { title: " Oh Mehrama ", artist: "Arjit Singh", imgSrc: albumCover2 },
  { title: "Tere Naina ", artist: "Shankar Mahadevan", imgSrc: albumCover3 },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      {/* <div className="quote">
        <p>“Rock and Roll isn’t a genre, it’s a way of life.” 🎸</p>
      </div> */}

      <div className="quote">
        <p>Tum se hi din hota hai, surmaiye shaam aati, tumse hi, tumse hi 🎸</p>
      </div>

      <div className="genre-section">
        <h3>Aapko Kya Pasand Hain.?</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Albums</h3>
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

export default Music;
