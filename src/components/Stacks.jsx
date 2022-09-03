const Stacks = (props) => {
    return ( 
        <button className="flex items-center justify-center rounded-sm h-[18px] border-green px-2 py-2 border-2 border-solid" >
            <div className={` text-[8px] font-medium text-abel text-black  `+props.className}>
                {props.text}
            </div>
        </button>
     );
}
 
export default Stacks;