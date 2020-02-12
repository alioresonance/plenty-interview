export const getScheduleHrDomain = () => {
  let domain = [];
  for (let i = 0; i < 24; i++) {
    domain.push(i < 10 ? `0${i}:00:00Z` : `${i}:00:00Z`);
  }
  return domain;
};

export const getHourlySchedule = schedule => {
  if (schedule.length === 0) return [];
  const fullDomain = getScheduleHrDomain();
  const scheduleMap = schedule.reduce((acc, { time, target }) => {
    acc[time] = target;
    return acc;
  }, {});
  let graphHourlySchedule = fullDomain.map(time => {
    if (scheduleMap[time]) {
      return { time, target: scheduleMap[time] };
    }
    return { time };
  });
  let currInterplatedValue = null;
  for (let i = 0; i < graphHourlySchedule.length; i++) {
    if (currInterplatedValue != null && !('target' in graphHourlySchedule[i])) {
      graphHourlySchedule[i]['target'] = currInterplatedValue;
    }
    if ('target' in graphHourlySchedule[i]) {
      currInterplatedValue = graphHourlySchedule[i].target;
    }
  }
  let i = 0;
  while (!('target' in graphHourlySchedule[i])) {
    graphHourlySchedule[i].target = currInterplatedValue;
    i += 1;
  }
  return graphHourlySchedule;
};
