import _ from 'underscore';
export const randomIndex = () => {
    return _.random(1, 9999999999) + _.random(1, 9999999999);
}