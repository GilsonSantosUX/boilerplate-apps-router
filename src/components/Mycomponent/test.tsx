import { render, screen } from '@testing-library/react'

import Mycomponent from '.'

describe('<Mycomponent />', () => {
it('should render the heading', () => {
const { container } = render(
<Mycomponent />)

expect(screen.getByRole('heading', { name: /Mycomponent/i }))

expect(container.firstChild).toMatchSnapshot()
})
})