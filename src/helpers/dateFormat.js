
export const dateYMD = fecha => {
    const date = new Date(`${ fecha }`);
    const year = date.getFullYear();
    const mont = date.getMonth() + 1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const toDay = `${year}-${mont}-${day}`;
    return toDay;
}