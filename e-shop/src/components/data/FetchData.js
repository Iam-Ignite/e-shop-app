import { useEffect, useState } from 'react'

export default function FetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com',
                'X-RapidAPI-Key': '7cc361e202msh2b055fbf6365b7ep10456fjsn73d878075aa9'
            }
        };
        const response = await fetch('https://shoes-collections.p.rapidapi.com/shoes', options);
        const data = await response.json();
        setData(data);
    }
     
    return { data };
    
}
