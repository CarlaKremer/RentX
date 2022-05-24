import { eachDayOfInterval, format } from "date-fns";
import { DayProps, MarkedDateProps } from ".";
import themes from "../../styles/themes";
import { getPlatformDate } from "../../utils/getPlatformDate";

export function generateInterval(start: DayProps, end : DayProps){
    let interval : MarkedDateProps = {};

    eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp)})
    .forEach((item )=> {
        const date = format(getPlatformDate(item), 'yyyy-MM-dd');
        
        interval = {
            ...interval,
            [date] : {
                color : start.dateString === date || end.dateString === date
                ? themes.colors.main : themes.colors.main_light, 

                textColor: start.dateString === date || end.dateString === date
                ? themes.colors.main_light : themes.colors.main
            }
        }
    })
    return interval;
}