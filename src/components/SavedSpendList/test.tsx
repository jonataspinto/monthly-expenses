import { render } from '@testing-library/react'

import { SavedSpendList } from '.'

describe('<SavedSpendList />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <SavedSpendList sheetRows={[]} savedSpendList={[]} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
