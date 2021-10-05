import { render } from '@testing-library/react'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    const { container } = render(<Button>Button</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
