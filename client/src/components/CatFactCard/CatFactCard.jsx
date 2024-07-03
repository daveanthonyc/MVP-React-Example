import { fetchCatFact } from "../../services/CatFactProvider";
import useCatFact from "../../hooks/useCatFact";
import { CircularProgress } from "@mui/material";

const CatFactCard = () => {
    const { fact, error, loading, refresh } = useCatFact(fetchCatFact);

    if (error) {
        return (
            <div>
                <h1>There was an error...</h1>
            </div>
        )
    }

    if (loading) {
        return (
            <div>
                <CircularProgress />
            </div>
        )
    }

    return (
        <div className="card">
            <h1>{fact}</h1>
            <button onClick={refresh}>REFRESH</button>
        </div>
    )
}

export default CatFactCard;
