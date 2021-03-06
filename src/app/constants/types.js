export const MY_PROMISE = "MY PROMISE";
export const PENDING_INVITATION = "PENDING INVITATION";
export const PENDING_OFFER = "PENDING OFFER";
export const PROMISED_OWED_TO_ME = "PROMISES OWED TO ME";
export const TEAM_MATE = "TEAM MATES";
export const MOBILE_LIST = "MOBILE_LIST";
export const TYPE_OF_BADGE = "TYPE_OF_BADGE";
export const CUSTOMER_PROMISED_CARD = "CUSTOMER_PROMISED_CARD";
export const DATE_TIME = "DATE TIME";
export const MODAL_OFFER_TYPE = "MODAL_OFFER_TYPE";
export const MODAL_INVITATION_TYPE = "MODAL_INVITATION_TYPE";
export const MODAL_REQUEST_TYPE = "MODAL_REQUEST_TYPE";
export const MODAL_ACCEPT_TYPE= "MODAL_REQUEST_TYPE";

const getArray = length => new Array(length).join('0').split('');

export const HOURS = getArray(24 + 1);
export const TWELVE_HOURS = getArray(12 + 1);
export const MINUTES = getArray(60 + 1);

const PICKER_WIDTH = 260;
const POINTER_WIDTH = 35;

export const PICKER_RADIUS = PICKER_WIDTH / 2;
export const MAX_ABSOLUTE_POSITION = 125;
export const MIN_ABSOLUTE_POSITION = 90;
export const POINTER_RADIUS = POINTER_WIDTH / 2;

export const BROWSER_COMPATIBLE = [
  '',
  'O',
  'Moz',
  'Ms',
  'ms',
  'Webkit'
];

export const MERIDIEMS = ['AM', 'PM'];
