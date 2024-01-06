import {useEffect, useState} from "react";

function ChoreList() {
    const [chores, setChores] = useState([]);
    const fetchChores = async () => {
        setChores(['vacuum', 'do dishes', 'vibe'])
    }

    useEffect(() => {
        fetchChores();
    }, []);

    return (
        <div>
            {chores.map(chore => <li>{chore}</li>)}
        </div>
    );
}

export default ChoreList;