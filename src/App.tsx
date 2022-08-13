import { Suspense } from 'react'
import RoutesConfig from '@/routes'

function App() {
  return (
    <>
      <div id='root'>
        <Suspense fallback={null}>
          <RoutesConfig />
        </Suspense>
      </div>
    </>
  )
}

export default App
