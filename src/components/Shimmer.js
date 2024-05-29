
const Shimmer = () => {
    return (
        <div className="max-w-min p-4 m-auto my-10">
            <div className="flex flex-col bg-slate-100 py-3 px-2 rounded gap-4 animate-pulse">
                <div className="bg-slate-200 rounded w-[230px] h-[250px]" />
                <div className="flex flex-row gap-1 items-center">
                    <div className="flex flex-col gap-1">
                        <div className="bg-slate-200 rounded w-16 h-4" />
                        <div className="flex bg-slate-200 rounded w-[100px] h-2" />
                        <div className="flex bg-slate-200 rounded w-[160px] h-2" />
                        <div className="bg-style-200 rounded w-200 h-2" />  
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Shimmer;