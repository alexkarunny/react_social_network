import {v1} from 'uuid';
import {ProfileActionsTypes, profilePageReducer, ProfilePageType} from 'redux/profile-page-reducer';

let InitialState: ProfilePageType;

beforeEach(() => {
    InitialState = {
        postsTexts: [
            {id: v1(), textPost: 'Today is a great day', likesCount: 1},
            {id: v1(), textPost: 'I\'ll achieve the target', likesCount: 2},
            {id: v1(), textPost: 'I got it', likesCount: 3},
        ],
        status: '',
    }
})

test('new post should be added correctly', () => {
    const action: ProfileActionsTypes = {type: 'profile/ADD-POST', post: 'new post'}

    const newState = profilePageReducer(InitialState, action)


    expect(newState.postsTexts.length).toBe(4)
    expect(newState.postsTexts[3].textPost).toBe('new post')
})

test('correct post should be removed', () => {
    const postId = InitialState.postsTexts[0].id
    const action: ProfileActionsTypes = {type: 'profile/REMOVE-POST', id: postId}
    const newState = profilePageReducer(InitialState, action)

    expect(newState.postsTexts.length).toBe(2)
    expect(newState.postsTexts[0].textPost).toBe('I\'ll achieve the target')

})

test('incorrect id shouldn\'t remove any post', () => {
    const action: ProfileActionsTypes = {type: 'profile/REMOVE-POST', id: 'incorrect-id'}
    const newState = profilePageReducer(InitialState, action)
    expect(newState.postsTexts.length).toBe(3)
})