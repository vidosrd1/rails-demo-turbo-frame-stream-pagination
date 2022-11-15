import { navigator } from '@hotwired/turbo'
import { Controller } from 'stimulus'
import { useMutation } from 'stimulus-use'

export default class extends Controller {

  connect () {
    useMutation(this, { attributes: true })
    // if(this.element.dataset.mutateOnConnect) {
    //   this.mutate([{ type: 'attributes', attributeName: 'src' }])
    // }
  }

  mutate (entries) {
    entries.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
        const src = this.element.getAttribute('src')
        if (src != null) { 
          // src = src.replace('.turbo_stream', '')
          navigator.history.push(new URL(src))
        }
      }
    })
  }
}