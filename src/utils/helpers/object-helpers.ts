import {UserType} from 'redux/users-page-reducer';

export const updateObjectInArray = (items:UserType[], itemId: number, newObjProp: {[key: string]: any}) => {
    return items.map(i => i['id'] === itemId ? {...i, ...newObjProp } : i)
}