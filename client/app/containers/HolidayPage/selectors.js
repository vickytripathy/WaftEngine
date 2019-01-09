import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the roleManagePage state domain
 */

const selectDomain = state => state.get("holidayPage", initialState);

export const makeSelectAll = () =>
  createSelector(selectDomain, state => state.get("all"));
export const makeSelectOne = () =>
  createSelector(selectDomain, state => state.get("one"));
export const makeSelectPage = () =>
  createSelector(selectDomain, state => state.get("page"));