export const shorten = (str) => {
    if (!str) return;
    if (str.length < 10) return str;
    return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`;
};
