const getIcon = id => {
  if (id >= 12 && id <= 18) {
    return "RAIN";
  } else if (id === 25 || id === 26 || id === 29) {
    return "SLEET";
  } else if (id === 22 || id === 23 || id === 29 || id === 44) {
    return "SNOW";
  } else if (id === 11) {
    return "FOG";
  } else if (id >= 1 && id <= 4) {
    return "CLEAR_DAY";
  } else if (id >= 5 && id <= 6) {
    return "PARTLY_CLOUDY_DAY";
  } else if (id >= 7 && id <= 8) {
    return "CLOUDY";
  } else if (id === 32) {
    return "WIND";
  } else {
    return "PARTLY_CLOUDY_DAY";
  }
};

export default getIcon;
