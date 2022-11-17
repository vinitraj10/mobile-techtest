// since the toggles are fixed keeping it in array
// but this can also be made API driven, where this
// value can be coming from API
export const coverToggleListMap = [
    { id: 'Which? Magazine', label: 'Magazine' },
    { id: 'Which? Computing', label: 'Computing' },
    { id: 'Which? Gardening', label: 'Gardening' },
    { id: 'Which? Travel', label: 'Travel' },
];
export const coverToggleIdList = coverToggleListMap.map((item) => item.id);

export const WHICH_JOIN_URL = `https://join.which.co.uk/join/subscribe?gclid=Cj0KCQiA1NebBhDDARIsAANiDD1GNh1dG1rSQ4u4qHuLU5gyb2581nH7hTl921YX6WLBBaORMVH5PdkaAhXwEALw_wcB&gclsrc=aw.ds&source_code=911CUJ`;
