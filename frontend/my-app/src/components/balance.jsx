

export function Balance({value}){
    return <div className="flex  pt-8">
        <div className="font-bold text-lg">
          your balance:
        </div>
        <div className="font-semibold text-lg ml-4">
         rs{value}
        </div>
    </div>
}