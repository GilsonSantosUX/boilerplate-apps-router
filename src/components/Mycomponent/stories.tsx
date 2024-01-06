import { Story, Meta } from '@storybook/react'
import Mycomponent from '.'

export default {
title: 'Mycomponent',
component: Mycomponent
} as Meta

export const Default: Story = () =>
<Mycomponent />