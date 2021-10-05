import { Story, Meta } from '@storybook/react'
import { SavedSpendList } from '.'

export default {
  title: 'SavedSpendList',
  component: SavedSpendList
} as Meta

export const Default: Story = () => (
  <SavedSpendList sheetRows={[]} savedSpendList={[]} />
)
