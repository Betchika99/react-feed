export const sortByDate = (data) => {
    data.sort((first, second) => {
        const firstTime = new Date(first.date).getTime();
        const secondTime = new Date(second.date).getTime();
        return secondTime - firstTime;
    });
};