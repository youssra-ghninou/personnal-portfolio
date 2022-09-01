import OverviewContent from "./OverviewContent";

const Overview = () => {
    return ( 
        <div className="div mx-6">
            <div className="bg-grey  h-7 rounded-t-[6px] pl-3 items-center flex gap-1">
                <i class="fa-solid fa-circle text-red fa-xs"></i>
                <i class="fa-solid fa-circle text-lyellow fa-xs"></i>
                <i class="fa-solid fa-circle text-lgreen fa-xs"></i>
            </div>
            <div className="body bg-lviolet shadow-lg rounded-b-[6px] h-[400px]">
                <OverviewContent/>
            </div>
        </div>
     );
}
 
export default Overview;