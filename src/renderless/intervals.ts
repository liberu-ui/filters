/**
 * Represents intervals for date ranges.
 */
enum DateIntervals {
    today = 'today',
    thisWeek = 'thisWeek',
    thisMonth = 'thisMonth',
    thisYear = 'thisYear',
    yesterday = 'yesterday',
    lastWeek = 'lastWeek',
    lastMonth = 'lastMonth',
    lastYear = 'lastYear',
    tomorrow = 'tomorrow',
    nextWeek = 'nextWeek',
    nextMonth = 'nextMonth',
    nextYear = 'nextYear',
    custom = 'custom',
    all = 'all',
};

/**
 * Base intervals for date ranges.
 */
const baseIntervals: DateIntervals[] = [
    DateIntervals.today, DateIntervals.thisWeek, DateIntervals.thisMonth,
    DateIntervals.thisYear, DateIntervals.all, DateIntervals.custom,
];

/**
 * Past intervals for date ranges.
 */
const pastIntervals: DateIntervals[] = [
    DateIntervals.yesterday, DateIntervals.lastWeek, DateIntervals.lastMonth, DateIntervals.lastYear,
];

/**
 * Future intervals for date ranges.
 */
const futureIntervals: DateIntervals[] = [
    DateIntervals.tomorrow, DateIntervals.nextWeek, DateIntervals.nextMonth, DateIntervals.nextYear,
];

/**
 * Represents adjustments for each interval.
 */
const intervalAdjustments: Record<DateIntervals, number> = {
    [DateIntervals.today]: 0,
    [DateIntervals.yesterday]: -1,
    [DateIntervals.tomorrow]: 1,
    [DateIntervals.thisWeek]: 0,
    [DateIntervals.lastWeek]: -1,
    [DateIntervals.nextWeek]: 1,
    [DateIntervals.thisMonth]: 0,
    [DateIntervals.lastMonth]: -1,
    [DateIntervals.nextMonth]: 1,
    [DateIntervals.thisYear]: 0,
    [DateIntervals.lastYear]: -1,
    [DateIntervals.nextYear]: 1,
};

export {
    DateIntervals, baseIntervals, pastIntervals, futureIntervals, intervalAdjustments,
};
*/