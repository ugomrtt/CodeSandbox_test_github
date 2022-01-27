import React, { useEffect, useState } from "react";
import DetailAlbum from "./DetailAlbum";
import FormTexte from "./FormText";
import ListeAlbums from "./ListeAlbums";

function Spotify() {
  const [query, setQuery] = useState([]);
  const [idA, setIdA] = useState([]);

  const handlerC = (v) => {
    setQuery(v);
  };

  const handleridAlbum = (v) => {
    setIdA(v);
  };

  return (
    <div>
      <FormTexte handlerS={handlerC}></FormTexte>
      <ListeAlbums handlerId={handleridAlbum} query={query}></ListeAlbums>
      <DetailAlbum idAlbum={idA}></DetailAlbum>
    </div>
  );
}

export default Spotify;
