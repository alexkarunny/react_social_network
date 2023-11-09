import {create} from 'react-test-renderer';
import ProfileStatus from 'components/Profile/ProfileInfo/profile-status';

describe('ProfileStatus component', () => {
    test('status', () => {
        const component = create(<ProfileStatus status={'check'} updateStatus={() => {
        }}/>)
        const instance = component.getInstance()
        // @ts-ignore
        expect(instance.state.status).toBe('check')
    });
    test('span should be within the component by default', () => {
        const component = create(<ProfileStatus status={'check'} updateStatus={() => {
        }}/>)
        const root = component.root

        let span = root.findByType('span')
        expect(span).toBeTruthy()
    });
    test('input should not be within the component by default', () => {
        const component = create(<ProfileStatus status={'check'} updateStatus={() => {
        }}/>)
        const root = component.root

        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    });
    test('input should be displayed on edit mode instead of span', () => {
        const component = create(<ProfileStatus status={'check'} updateStatus={() => {
        }}/>)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('check')
    });
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'check'} updateStatus={mockCallback}/>)
        const instance = component.getInstance();

        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        // @ts-ignore
        instance.state.status = '123'
        input.props.onBlur()
        expect(mockCallback.mock.calls.length).toBe(1)
        expect(mockCallback.mock.calls[0][0]).toStrictEqual('123')
    })
})