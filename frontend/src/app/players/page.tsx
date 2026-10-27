

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

            <form className="flex flex-col items-center">
                <div>
                    <label htmlFor="username" className="hidden">Username</label>
                    <input type="text" id="username" name="username" required
                        placeholder="username"
                        className="w-fit text-xl text-center bg-foreground/40 rounded-2xl tracking-wider py-2 shadow-lg shadow-highlight mb-8 cursor-pointer caret-transparent"
                    />
                </div>

                <button type="submit"
                    className="w-fit text-xl border border-foreground border-b-highlight bg-background px-8 tracking-wider text-text/60 rounded-2xl 
                     hover:border-highlight transition-all"
                >
                    FIND
                </button>
            </form>
        </div>
    )
}