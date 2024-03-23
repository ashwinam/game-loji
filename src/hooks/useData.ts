import ApiClient from "@/services/ApiClient";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useData <T>(endpoint: string, requestConfigue? : AxiosRequestConfig, deps?: any[]) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {

        const controller = new AbortController();

        setLoading(true);

      ApiClient.get(endpoint, {signal: controller.signal, ...requestConfigue})
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps ? [...deps] : []);


    return {data, error, isLoading};
}

export default useData;