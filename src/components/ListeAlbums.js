import React, { useEffect, useState } from "react";

import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function ListeAlbums(props) {
  const [albums, setAlbums] = useState([]);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    setCurrent(page);
  };

  const handlerSubmitId = (event) => {
    event.preventDefault();
    props.handlerId(event.target[0].value);
  };

  useEffect(() => {
    if (props.query !== "") {
      getAlbums(props.query);
    }
  }, [props.query]);

  const getAlbums = (query) => {
    const spotifyUrlSearchAlbum = `https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=${props.query}"`; // l’url de la ressource
    const token =
      "BQDFi5kaOIzxOL6b-u6W1y0vhHfVz5LIPONKrtE7cWBEuKcPT73g6TjHc64UADBeC9RI2xl3fkk97PYUoprmVeOd7xT9zZ8tuinsS_odbldoPlgWhOiAGrU2sbt5zHmYJVI2Gydpjx4BasF9hKwBsXG4dIqT-JQ";
    const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      method: "GET"
    };

    let offset = (current - 1) * 10;
    console.log(`offset : ${offset}`);

    fetch(spotifyUrlSearchAlbum + query + "&offset=" + offset, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        setAlbums(dataJSON.albums.items);
        setTotal(dataJSON.albums.total);
      });
  };
  return (
    <div>
      <p>{`Voici les Albums de ${props.query} :`}</p>
      <Grid container spacing={2}>
        {albums.map((f) => {
          return (
            <Grid item key={f.id}>
              <Card sx={{ width: 150 }}>
                <CardMedia
                  component="img"
                  height=""
                  image={`${f.images[0].url}`}
                  alt="affiche du film introuvable"
                  id="card"
                />
                <CardContent>
                  <Typography gutterBottom variant="h8" component="div">
                    {f.name}
                  </Typography>
                  <form onSubmit={handlerSubmitId}>
                    <input type="hidden" value={`${f.id}`} />
                    <input type="submit" value="Découvrir" />
                  </form>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Pagination
        onChange={onChange}
        current={current}
        defaultPageSize={10}
        total={total}
      ></Pagination>
    </div>
  );
}

export default ListeAlbums;
