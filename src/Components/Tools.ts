
export function formatNumber(num: number): string {
    if (num >= 10000) {
        const wan = Math.ceil(num / 10000);
        return wan + 'w';
    }
    return num.toString();
}
