import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card.vue', () => {
    it('renders props.title when passed', () => {

        const title = 'A title'
        const wrapper = shallowMount(Card, {
            propsData: { 
                title
            }
        })

        expect(wrapper.text()).toMatch(title)

    })
})