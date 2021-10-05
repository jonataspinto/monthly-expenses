import { render } from '@testing-library/react'

import { Card } from '.'

describe('<Card />', () => {
  it('should render the heading', () => {
    const { container } = render(<Card>Card</Card>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
