import ApiClient from "@/services/ApiClient";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";



function useData <T>(endpoint: string) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {

        const controller = new AbortController();

      ApiClient.get(endpoint, {signal: controller.signal})
        .then((res) => {
          setData(res.data.results)
          setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });

        return () => controller.abort();

    }, [endpoint]);


    return {data, error, isLoading};
}

export default useData;