export const SET_CURRENT = 'DEALERS/SET_CURRENT';

export const setCurrent = (index, store) => ({ type: SET_CURRENT, index, store });


export const GMAP_LOADED = 'DEALERS/GMAP_LOADED';

export const gmapLoaded = getGmap => ({ type: GMAP_LOADED, getGmap });
