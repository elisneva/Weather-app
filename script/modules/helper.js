const addZero = (n) => n < 10 ? `0${n}` : n;

export const getCurrenDateTime = () => {
    const months = [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec',
    ];

    const weekdays = [
        'Mon',
        'Tus',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun',
    ]

    const date = new Date()
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = weekdays[date.getDay()];

    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());

    return{dayOfMonth, month, year, hours, minutes, dayOfWeek};

};