export function Date({date}: {date: Date}){

    return(
        <div className="flex gap-0">
            <div className="">
                {date.getUTCDate()}/
            </div>
            <div>
                {date.getUTCMonth()}/
            </div>
            <div>
                {date.getUTCFullYear()}
            </div>
        </div>
    )

}