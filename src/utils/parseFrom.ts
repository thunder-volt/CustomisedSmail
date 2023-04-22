const parseFrom = (from: string): string => {
    const username = from.split("<");
    return (username[0] === "" ? username[1].split("@")[0] : username[0])
}

export default parseFrom