export function dateToString(date: Date) {
    return date.toISOString().split('T')[0];
}

export function humanizeDateString(dateString: string){
    let date_obj = new Date(dateString)
    return date_obj.toDateString();
}