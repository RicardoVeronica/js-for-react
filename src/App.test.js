import App from './App'
import { createSerializer } from 'enzyme-to-json';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }))

describe('Test App component', () => {
  const wrapper = shallow(<App />)

  test('should find App component', () => {

    expect(wrapper).toMatchSnapshot()

  })

  test('should return counter value', () => {

    const element = wrapper.find('h1').text()

    expect(element).toEqual('0')

  })

  test('click to sub button', () => {

    wrapper.find('button').at(0).simulate('click')

    const value = wrapper.find('h1').text()

    expect(value).toEqual('-1')

  })

  test('click to add button', () => {

    wrapper.find('button').at(2).simulate('click')

    const value = wrapper.find('h1').text()

    expect(value).toEqual('0')

  })

  test('click to reset button', () => {

    wrapper.find('button').at(2).simulate('click')
    wrapper.find('button').at(2).simulate('click')

    wrapper.find('button').at(1).simulate('click')

    const value = wrapper.find('h1').text()

    expect(value).toEqual('0')

  })
})
