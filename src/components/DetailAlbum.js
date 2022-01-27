import React, { useEffect, useState } from "react";

function DetailAlbum(props) {
  const [sons, setSons] = useState([]);

  useEffect(() => {
    if (props.idAlbum !== "") {
      getDetailAlbum(props.idAlbum);
    }
  }, [props.idAlbum]);

  // console.log(props.idAlbum)

  const getDetailAlbum = () => {
    const spotifyUrlSearchAlbum = `https://api.spotify.com/v1/albums/${props.idAlbum}`; // l’url de la ressource
    const token =
      "BQDFi5kaOIzxOL6b-u6W1y0vhHfVz5LIPONKrtE7cWBEuKcPT73g6TjHc64UADBeC9RI2xl3fkk97PYUoprmVeOd7xT9zZ8tuinsS_odbldoPlgWhOiAGrU2sbt5zHmYJVI2Gydpjx4BasF9hKwBsXG4dIqT-JQ";
    const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      method: "GET"
    };
    fetch(spotifyUrlSearchAlbum, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        setSons(dataJSON.tracks.items);
      });
  };

  return (
    <div>
      {sons.map((s) => {
        return (
          <audio id={s.id} controls src={`${s.preview_url}`}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        );
      })}
    </div>
  );
}

export default DetailAlbum;
