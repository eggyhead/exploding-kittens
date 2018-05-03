import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Routes from './client/Routes'
// import Navbar from './client/compnents/Navbar'
import App from '~/client/App'

function main() {
  render(
    <AppContainer>
      <div>
        <div className="app">
        <App />
        </div>
      </div>
    </AppContainer>,
    document.getElementById('main'))
}

main()

module.hot && module.hot.accept('~/client/App', main)

/**for when I have more components
 * <Navbar />
        <div className="app">
            <Routes />
        </div>
 */