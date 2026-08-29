import Card from "./components/Card"
import LinkButton from "./components/LinkButton"

import SvgBrandText from "./assets/wizevaxel-text.svg"

function App() {
  return (
    <>
      <Card class="fit-content center-self shadowed">
        <Card>
          <div style="padding: 0.4em" class="center-content">
            <SvgBrandText width="24em" height="auto"/>
            <h2 class="brand">expression thru media</h2>
            <h4 style="padding-top: 0.6em">
              contact: <a href="mailto:hello@wizevaxel.com">hello@wizevaxel.com</a>
            </h4>
          </div>
        </Card>
        <Card title="Links">
          <LinkButton href="https://youtube.com/@wizevaxel" text="YouTube" icon="youtube"/>
          <LinkButton href="https://github.com/wizevaxel" text="GitHub" icon="github"/>
          <LinkButton href="https://wizevaxel.itch.io/" text="itch.io" icon="itchdotio"/>
          <LinkButton href="https://roblox.com/users/1341839736/profile" text="Roblox" icon="roblox"/>
          <LinkButton href="https://x.com/wizevaxel" text="X" icon="x"/>
          <LinkButton href="https://bsky.app/profile/wizevaxel.bsky.social" text="Bluesky" icon="bluesky"/>
          <LinkButton href="https://music.youtube.com/@wizevaxel" text="YouTube Music" icon="youtubemusic"/>
          <LinkButton href="https://open.spotify.com/artist/3b3SM98HFVmOcE46DSgGwQ" text="(LiterallyWize) Spotify" icon="spotify"/>
          <LinkButton href="https://music.apple.com/artist/1597124587" text="(LiterallyWize) Apple Music" icon="applemusic"/>
        </Card>
      </Card>
    </>
  )
}

export default App
