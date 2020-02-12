import axios from 'axios';

const ALL_SCHEDULES_URL = '/schedules.json';
const getScheduleByRoomUrl = roomName => `/schedule/${roomName}.json`;

export const fetchSchedules = async (roomName = null) => {
  const url = roomName != null ? getScheduleByRoomUrl(roomName) : ALL_SCHEDULES_URL;
  const response = await axios.get(url);
  return response;
};

export const postSchedule = async (roomName, scheduleData) => {
  const url = getScheduleByRoomUrl(roomName);
  const response = await axios.post(url, scheduleData);
  return response;
};
