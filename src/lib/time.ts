const epochs = [
    ['yr.', 31536000],
    ['mo.', 2592000],
    ['day', 86400],
    ['hr.', 3600],
    ['min.', 60],
    ['sec.', 1]
];

const getDuration = (timeAgoInSeconds: number) => {
    for (let [name, seconds] of epochs) {
        const interval = Math.floor(timeAgoInSeconds / seconds);
        if (interval >= 1) {
            return {
                interval: interval,
                epoch: name
            };
        }
    }
};

export const timeAgo = (date: Date) => {
    const timeAgoInSeconds = Math.floor((new Date() - new Date(date)) / 1000);
    const {interval, epoch} = getDuration(timeAgoInSeconds);
    const suffix = interval === 1 || epoch !== 'day' ? '' : 's';
    return `${interval} ${epoch}${suffix} ago`;
};
