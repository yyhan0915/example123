import { INasaApiData } from 'src/models/interface';

const getRandomDate = (start: Date, items?: INasaApiData[]) => {
    const d = new Date(start.getTime() + Math.random() * (new Date().getTime() - start.getTime()));
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = d.getFullYear();

    if (month.length < 2) {
        month = `0${month}`;
    }
    if (day.length < 2) {
        day = `0${day}`;
    }

    if (items) {
        const resultDate = [year, month, day].join('-');
        const isHaveDateAlready = items.find(item => item.date === resultDate);
        if (isHaveDateAlready) {
            getRandomDate(start, items);
        }
    }

    return [year, month, day].join('-');
};

export default getRandomDate;
