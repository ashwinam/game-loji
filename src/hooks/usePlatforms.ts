import useData from "./useData";

interface Platforms {
    id: number;
    name: string;
    slug: string;
}

function usePlatforms() {
    return useData<Platforms>('/platforms/lists/parents')
}

export default usePlatforms;