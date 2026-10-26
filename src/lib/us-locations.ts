import { City, State } from "country-state-city";

// country-state-city ships a ~8MB city list, so this module is server-only:
// the contact page passes the states down as props and the form fetches a
// state's cities from /api/us-cities.

export interface UsState {
  code: string;
  name: string;
}

const COUNTRY = "US";

// The library also lists minor outlying islands and territories with no
// cities, which would leave the City dropdown empty, so those are dropped.
const US_STATES: UsState[] = State.getStatesOfCountry(COUNTRY)
  .filter((state) => City.getCitiesOfState(COUNTRY, state.isoCode).length > 0)
  .map((state) => ({ code: state.isoCode, name: state.name }))
  .sort((a, b) => a.name.localeCompare(b.name));

const STATE_NAMES = new Map(US_STATES.map((state) => [state.code, state.name]));

export function getUsStates(): UsState[] {
  return US_STATES;
}

export function getUsStateName(code: string): string | undefined {
  return STATE_NAMES.get(code);
}

export function getUsCities(stateCode: string): string[] {
  if (!STATE_NAMES.has(stateCode)) return [];
  return City.getCitiesOfState(COUNTRY, stateCode).map((city) => city.name);
}

export function isUsCity(stateCode: string, city: string): boolean {
  return getUsCities(stateCode).includes(city);
}

// "Saint Louis" vs "St. Louis", "New York" vs "New York City": outside
// services spell cities differently from this dataset, so compare loosely.
function normalizeCity(name: string): string {
  return name
    .toLowerCase()
    .replace(/\bsaint\b/g, "st")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Returns this dataset's spelling of a city, so it matches the dropdown and
// passes isUsCity, or undefined when there is no confident match.
export function matchUsCity(stateCode: string, city: string): string | undefined {
  const target = normalizeCity(city);
  const cities = getUsCities(stateCode);
  return (
    cities.find((name) => normalizeCity(name) === target) ??
    cities.find((name) => normalizeCity(name).replace(/ city$/, "") === target)
  );
}
