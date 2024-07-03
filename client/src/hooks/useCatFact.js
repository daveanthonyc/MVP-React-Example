import { useEffect, useState } from "react";

// fetch cat fact fn() returns a promise, when it fulfils, returns a string, OR ERROR

function useCatFact(fetchCatFact) {
    const [fact, setFact] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const getCatFact = async () => {
        try {
            const catFact = await fetchCatFact();
            setFact(catFact);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getCatFact();
    }, [])

    const refresh = () => {
        setFact('');
        setError(false);
        setLoading(true);

        getCatFact();
    }

    return { fact, error, loading, refresh }
}

export default useCatFact;
