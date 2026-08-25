/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import '@fontsource/inter/500.css'
import App from './App.tsx'

const root = document.getElementById('root')

render(() => <App />, root!)
