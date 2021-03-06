export const QUERY_INTERVAL = {
  SECOND: 'SECOND',
  MINUTE: 'MINUTE',
  HOUR: 'HOUR',
  DAY: 'DAY',
  MONTH: 'MONTH',
  AUTO: 'AUTO'
};
export const QUERY_INTERVAL_LIST = Object.keys(QUERY_INTERVAL).map(key => QUERY_INTERVAL[key]);

export const getMomentTimeUnitForQueryInterval = (interval) => {
  switch (interval) {
    case QUERY_INTERVAL.SECOND:
      return 'second';
    case QUERY_INTERVAL.MINUTE:
      return 'minute';
    case QUERY_INTERVAL.HOUR:
      return 'hour';
    case QUERY_INTERVAL.DAY:
      return 'day';
    case QUERY_INTERVAL.MONTH:
      return 'month';
    default:
      return null;
  }
};

export const calculateAutoInterval = (intervalMs) => {
  if (intervalMs <= 5 * 1000) { // SECOND granularity for timeframes below 5min
    return QUERY_INTERVAL.SECOND;
  } else if (intervalMs <= 3 * 60 * 60 * 1000) { // MINUTE granularity for timeframes below 3h
    return QUERY_INTERVAL.MINUTE;
  } else if (intervalMs <= 6 * 24 * 60 * 60 * 1000) { // HOUR granularity for timeframes below 6d
    return QUERY_INTERVAL.HOUR;
  } else if (intervalMs <= 30 * 24 * 60 * 60 * 1000) { // DAY granularity for timeframes below 30d
    return QUERY_INTERVAL.DAY;
  }
  return QUERY_INTERVAL.MONTH;
};
