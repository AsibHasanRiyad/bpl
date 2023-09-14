/* eslint-disable react/prop-types */
const Cart = ({selected, total, remain}) => {
    console.log(total);
    return (
        <div className=" mt-5 md:mt-0 md:fixed">
            <div className="">
            <h1 className=" text-2xl text-white">Total Player Taken: {selected.length} </h1>
            <h1 className=" text-3xl text-white py-3">Total: {total} TK </h1>
            <h1 className=" text-3xl text-white py-3">Remain: {remain} TK </h1>
            
            <h1 className=" text-3xl text-white py-3">Selected Player</h1>
            {
                selected.map((player,idx) => <li className=" bg-white rounded-md text-black p-3 text-xl my-3" key={idx}> {player.name} </li> )
            }
            </div>
        </div>
    );
};

export default Cart;