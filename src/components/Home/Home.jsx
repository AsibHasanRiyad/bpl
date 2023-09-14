/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";


const Home = () => {
    const [player, setPlayers] = useState([]);
    const [selected, setSelected] = useState([]);
    const [total, setTotal] = useState(0)
    const [remain, setRemain] = useState(0)
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    const handelBuyNow = (sPlayer) =>{
        let count = sPlayer.salary;
        const isSelected = selected.find(select => select.id == sPlayer.id)
        if (isSelected) {
            alert('Already Selected')
        }
        else{
            selected.forEach(item =>{
                count = count + item.salary
               
            })
            const remaining = 10000000 - count
            if (remaining < 0) {
                alert('Not enough money')
            }
            else{
                setTotal(count)
                setRemain(remaining)
            const totalSelected = [...selected, sPlayer]
        setSelected(totalSelected)
            }
        }
    }
    return (
        <div className="flex justify-between">
            <div className=" w-2/3 flex flex-wrap gap-7">
                    {
                        player.map(player =>
                            <div key={player.id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/vxD7p2s/Shakib-Al-Hasan-1.jpg" alt="Player" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        {player.name}
                        <div className="badge  badge-info"> {player.role} </div>
                        </h2>
                        <h1>Country: {player.country} </h1>
                        <h1>Age: {player.age} </h1>
                        <p> <small>England (4200 runs scored, 0 wickets taken), T20 2018: England (1800 runs scored, 0 wickets taken) </small> </p>
                        <h1 className="text-2xl">Salary: {player.salary} Tk </h1>
                        <div className="card-actions justify-center">
                        <button onClick={() => handelBuyNow(player)} className="btn btn-info text-white">Buy Now</button>
                        </div>
                    </div>
                    </div>
                            )
                    }
            </div>
            <div className=" w-1/3">
                <Cart remain={remain} total={total} selected={selected} ></Cart>
            </div>
        </div>
    );
};

export default Home;