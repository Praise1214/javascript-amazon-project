import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


export default function isWeekendDate() {
    const today = dayjs();
    const dayFormat = today.format('dddd');
    if (dayFormat === 'Tuesday' || dayFormat === 'Sunday') {
        return dayFormat;  // Return the day if it's a weekend
    } else {
        return 'you are wrong';  // Return the string if it's not a weekend
    }
}
