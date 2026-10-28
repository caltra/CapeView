import PlayerSearchForm from "./PlayerSearchForm";


export default function Players() {


    return (
        <div className="flex flex-col items-center py-4 gap-8">
            <div>
                <h1 className="text-4xl text-center font-bold tracking-widest mb-2">
                    Players
                </h1>

                <p className="text-lg text-center tracking-wide">
                    Search for any Java username. You might discover a new cape!
                </p>
            </div>

            <PlayerSearchForm />
        </div>
    )
}