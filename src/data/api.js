// This project doesn't have a real backend, so this file pretends to be one.
// It wraps the local JSON files in a fake fetch call (with a delay) so the
// rest of the app can be written the same way it would be against a real API.
// If we ever get a real backend, only this file should need to change.

import noticesData from "./notices.json";
import eventsData from "./events.json";

// small helper to fake network latency
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchNotices() {
  await wait(700);
  // uncomment this to test the error state:
  // throw new Error("Network error while fetching notices");
  return noticesData;
}

export async function fetchNoticeById(id) {
  await wait(400);
  const notice = noticesData.find((n) => n.id === id);
  if (!notice) {
    throw new Error("Notice not found");
  }
  return notice;
}

export async function fetchEvents() {
  await wait(900);
  return eventsData;
}

export async function fetchEventById(id) {
  await wait(400);
  const event = eventsData.find((e) => e.id === id);
  if (!event) {
    throw new Error("Event not found");
  }
  return event;
}
