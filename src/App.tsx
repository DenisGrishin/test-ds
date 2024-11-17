import SectionsContainer from './containers/SectionContainer.tsx'
import Layout from './layout/Layout.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <SectionsContainer />
      </Layout>
    </ThemeProvider>
  )
}

export default App
