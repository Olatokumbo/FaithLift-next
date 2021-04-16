export const truncate = (text)=>{
    return text.length > 210 ? text.substring(0, 210) + "..." : text;
}

