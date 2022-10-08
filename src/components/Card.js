const Card = () => {
    return (
        <div className="flex flex-col p-2 w-25">
            <div className="img">
                <img className="rounded-md" src="./DSC_2604.JPG" alt='...' />
            </div>

            <div className="flex flex-row items-center mt-2">
                <i class="fa-solid fa-bars"></i>
                <div className="ml-2"><b>Akoneh Silas</b></div>
                <button className="border rounded-md px-1 ml-2 bg-slate-200 text-white text-xs"><b>TEAM</b></button>
                <div className="text-grey ml-auto text-sm text-opacity-20 text-neutral-900">BOOSTED</div>
            </div>
        </div>
    );
}

export default Card;