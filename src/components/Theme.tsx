interface ITheme{
    text: string,
    callback(text: string): void;
}
const Theme: React.FC<ITheme>=function({text, callback}){
    return(
        <button className={`w-[50px] h-[50px] border-1 m-1 bg-[#ffaa00] text-black`} onClick={()=>callback(text)}>{text}</button>
    )
}
export default Theme;