import { useState, useEffect } from "react";

const useInitialState = (API) => {
    const [videos, setVideos] = useState({mylist:[], trends: [], originals: [] }); // useState recibe los elementos para manejar el estado del bloque.
    useEffect(() => {
        fetch(API)
        .then(response => response.json())// transforma la informacion a un json
        .then(data => setVideos(data)); // envia la informacion al estado
    }, []);
    return videos;

};

export default useInitialState;