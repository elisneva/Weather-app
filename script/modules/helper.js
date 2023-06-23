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

    let hours = date.getHours();
    let minutes = date.getMinutes();

    //correction with beginig with 0
    if (hours < 10){
        hours = `0${hours}`;
    }

    //?minutes

    return{dayOfMonth, month, year, hours, minutes, dayOfWeek};

};