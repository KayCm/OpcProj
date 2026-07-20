
export function formatNumber(num: number): string {
    if (num >= 10000) {
        const wan = Math.ceil(num / 10000);
        return wan + 'w';
    }
    return num.toString();
}

export function formatDate(dateStr) {
    const date = new Date(dateStr);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return month + '-' + day;
}
