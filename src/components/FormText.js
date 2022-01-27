import React, { useState } from "react";

import TextField from "@mui/material/TextField";

function FormTexte(props) {
  const [texte, setTexte] = useState([]);

  const handlerSubmit = (event) => {
    event.preventDefault();
    props.handlerS(texte);
  };

  const handleChange = (event) => {
    setTexte(event.target.value);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <TextField
        id="outlined-basic"
        label="Nom"
        variant="outlined"
        type="text"
        value={texte}
        onChange={handleChange}
        placeholder="nom"
      />
      {/* <Button variant="outlined" type="submit" value="Submit">Outlined</Button> */}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default FormTexte;
