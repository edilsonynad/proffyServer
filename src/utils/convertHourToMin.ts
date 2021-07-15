export default function convertHourToMin(time: string){
    const [hour, minutes] = time.split(':').map(Number);
    const timeToMinutes = (hour * 60) + minutes;

    return timeToMinutes;
}