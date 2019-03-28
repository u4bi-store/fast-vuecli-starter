import store from '@/providers/store'
import { GetterTypes, MutationTypes, ActionTypes } from '@/providers/store/constants'

describe('Store Tests', () => {

    describe('Mutations Tests', () => {

        it('multiply', () => {

            expect(store.state.app.tick).toBe(1)

            store.commit(MutationTypes.APP_MULTIPLY, 2)

            expect(store.state.app.tick).toBe(2)

        })

    })

    describe('Actions Tests', () => {

        it('multiply', async () => {

            expect(store.state.app.tick).toBe(2)

            await store.dispatch(ActionTypes.APP_MULTIPLY, 2)

            expect(store.state.app.tick).toBe(4)

        })

    })

    describe('Getters Tests', () => {

        it('getTick', () => {

            expect(store.getters[GetterTypes.APP_GET_TICK]).toBe(4)

        })

    })

})