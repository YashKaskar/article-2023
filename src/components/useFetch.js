import { useState } from 'react';
import { useEffect } from 'react';


const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                throw Error('could not find the data..........')
            }
            return res.json()
        })  //to get res from db.json file
            .then(data => {
                setData(data);
                setIsPending(false)
                setError(null)
            })   //having data from db.json file
        .catch(err => {
            setError(err.message);
            setIsPending(false)
        })
        return () => console.log('cleanup');
    }, [url]);

    return { data, isPending, error}
}
 
export default useFetch;