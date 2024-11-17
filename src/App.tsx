import SectionsContainer from './containers/SectionContainer.tsx'
import Layout from './layout/Layout.tsx'
import ThemeProvider from './providers/ThemeProvider.tsx'

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
