import Card from "./components/Card"
import LinkButton from "./components/LinkButton"

import SvgBrandText from "./assets/wizevaxel-text.svg"

function App() {
  return (
    <>
      <Card>
        <Card>
          <SvgBrandText width="15em" height="auto"/>
          <h3>expression thru media</h3>
        </Card>
        <Card title="Links">
          <Card>
            <LinkButton href="https://youtube.com/@wizevaxel" text="YouTube" icon="youtube"/>
            <LinkButton href="https://github.com/wizevaxel" text="GitHub" icon="github"/>
            <LinkButton href="https://wizevaxel.itch.io/" text="itch.io" icon="itchdotio"/>
            <LinkButton href="https://roblox.com/users/1341839736/profile" text="Roblox" icon="roblox"/>
          </Card>
          <Card>
            <LinkButton href="https://music.youtube.com/@wizevaxel" text="YouTube Music" icon="youtube"/>
            <LinkButton href="https://open.spotify.com/artist/3b3SM98HFVmOcE46DSgGwQ" text="(LiterallyWize) Spotify" icon="spotify"/>
            <LinkButton href="https://music.apple.com/artist/1597124587" text="(LiterallyWize) Apple Music" icon="applemusic"/>
          </Card>
        </Card>
      </Card>
    </>
  )
}

export default App
