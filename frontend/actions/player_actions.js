export const RECEIVE_TRACK = "RECEIVE_TRACK";

export const CLEAR_TRACK = "CLEAR_TRACK";

export const receiveTrack = post => ({
  type: RECEIVE_TRACK,
  post
});

export const clearTrack = () => ({
  type: CLEAR_TRACK,
});
