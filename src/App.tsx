
import './App.css'
import { ButtonEmoji } from '@/components/button-emoji'

import { Button } from '@/components/button'






function App() {

  return (
    <>
      <ButtonEmoji emoji="👋" number={10} >
        Hello
      </ButtonEmoji>
      <Button>
        Hello
      </Button>
    </>
  )
}

export default App
