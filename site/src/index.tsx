/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import './style/components.css'
import './style/fonts.css'
import './style/colors.css'
import './style/overrides.css'
import '@fontsource/inter/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import App from './App.tsx'

const root = document.getElementById('root')

render(() => <App />, root!)
