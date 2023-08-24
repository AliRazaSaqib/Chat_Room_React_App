# Chat_Room_React_App
Chat_Room_React_App

export const getISODateFormat = (date: string, time: string) => {
    const dateTimeString=`${date} ${time}`;
    const parseDateTime=moment(dateTimeString, `${DATE_FORMAT.DATE_SLOT} ${DATE_FORMAT.TIME_ONLY}`);
    const isoFormat=parseDateTime.toISOString();
    return isoFormat;
};
