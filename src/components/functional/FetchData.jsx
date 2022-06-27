import React, { useEffect, useState } from 'react';

export function FetchData() {

    const [name, setName] = useState({ title: "", first: "", last: "" });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        async function fetchMyAPI() {
            const res = await fetch('https://randomuser.me/api/');
            const json = await res.json();
            setName(json.results[0].name);
        }
    
        fetchMyAPI()
      }, [])

    return (
        <div>{`The person name is: ${name.title} ${name.first} ${name.last}`}</div>
    );
}