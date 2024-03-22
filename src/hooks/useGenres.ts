import ApiClient from "@/services/ApiClient";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";


interface Genres {
    id:number
    name: string
}

function useGenres () {
    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {

        const controller = new AbortController();

      ApiClient.get("/genres", {signal: controller.signal})
        .then((res) => {
          setGenres(res.data.results)
          setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });

        return () => controller.abort();

    }, []);


    return {genres, error, isLoading};
}

export default useGenres;